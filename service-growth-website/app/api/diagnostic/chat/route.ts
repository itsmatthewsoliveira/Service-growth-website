import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { SALES_AGENT_BRAIN } from "@/lib/sales-agent-brain";

export const runtime = "nodejs";
export const maxDuration = 60;

interface ChatRequest {
  messages: Array<{ role: "user" | "assistant"; content: string }>;
  cta_variant: "phone" | "calendly";
}

interface SubmitArgs {
  name: string;
  business_name?: string;
  service_type?: string;
  location?: string;
  revenue_band?: string;
  lead_sources?: string;
  speed_to_lead?: string;
  bottleneck?: string;
  phone?: string;
  email?: string;
  qualified: boolean;
  cta_variant: "phone" | "calendly";
  summary: string;
}

const SUBMIT_TOOL: Anthropic.Tool = {
  name: "submit_diagnostic",
  description:
    "Call this when you have gathered enough information to close the lead. This captures the lead into our CRM, sends the PDF blueprint by email, notifies our sales team via SMS/Slack if qualified, and shows the user the final confirmation screen. Only call this after you have the prospect's name + (phone OR email) and have gathered enough context to know if they are qualified.",
  input_schema: {
    type: "object" as const,
    properties: {
      name: { type: "string", description: "Prospect's first name or full name" },
      business_name: { type: "string", description: "Their company name" },
      service_type: {
        type: "string",
        description:
          "What kind of service business they run (e.g. pavers, HVAC, cleaning, roofing)",
      },
      location: { type: "string", description: "City and state (e.g. 'Jacksonville, FL')" },
      revenue_band: {
        type: "string",
        enum: ["under-10k", "10k-25k", "25k-50k", "50k-100k", "100k-plus", "unknown"],
        description: "Their monthly revenue band",
      },
      lead_sources: {
        type: "string",
        description: "How they get leads today — free text summary",
      },
      speed_to_lead: {
        type: "string",
        enum: ["under-5min", "under-1hr", "same-day", "next-day", "whenever", "unknown"],
        description: "How quickly they currently reply to new leads",
      },
      bottleneck: {
        type: "string",
        description: "The biggest problem they named (free text — what they said)",
      },
      phone: {
        type: "string",
        description:
          "Phone number (only for cta_variant=phone, or if they volunteered it). Keep the format they gave you.",
      },
      email: { type: "string", description: "Email address" },
      qualified: {
        type: "boolean",
        description:
          "True if revenue ≥ $15K/mo OR currently running ads OR motivated buyer. False for clearly under-$15K non-ad-spending browsers.",
      },
      cta_variant: {
        type: "string",
        enum: ["phone", "calendly"],
        description: "Which A/B test variant this conversation is running (pass through the value given to you)",
      },
      summary: {
        type: "string",
        description:
          "One-sentence summary of what this prospect's situation is — will be shown back to them as their 'Diagnostic'. Example: 'You're doing $30K/mo, leads come from Google + referrals, reply time is usually next-day, biggest bottleneck is no follow-up on estimates.'",
      },
    },
    required: ["name", "qualified", "cta_variant", "summary"],
    additionalProperties: false,
  },
};

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server not configured — missing ANTHROPIC_API_KEY" },
        { status: 500 }
      );
    }

    const body: ChatRequest = await req.json();
    if (!Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json({ error: "Missing messages" }, { status: 400 });
    }
    const cta_variant = body.cta_variant === "calendly" ? "calendly" : "phone";

    const client = new Anthropic({ apiKey });

    // System prompt: cacheable brain + volatile per-session variant tag.
    // The brain sits before the breakpoint so it caches across all sessions;
    // the cta_variant line is tiny and changes 50/50 but costs nothing.
    const system: Anthropic.TextBlockParam[] = [
      {
        type: "text",
        text: SALES_AGENT_BRAIN,
        cache_control: { type: "ephemeral", ttl: "1h" },
      },
      {
        type: "text",
        text: `\nThis session's cta_variant is: "${cta_variant}". When you call submit_diagnostic, pass cta_variant="${cta_variant}" exactly.`,
      },
    ];

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system,
      tools: [SUBMIT_TOOL],
      messages: body.messages,
    });

    // Walk content blocks. Either text reply, or a tool_use to submit.
    let assistant_text = "";
    let submit: SubmitArgs | null = null;

    for (const block of response.content) {
      if (block.type === "text") {
        assistant_text += block.text;
      } else if (block.type === "tool_use" && block.name === "submit_diagnostic") {
        submit = block.input as SubmitArgs;
      }
    }

    return NextResponse.json({
      assistant: assistant_text.trim(),
      submit,
      stop_reason: response.stop_reason,
    });
  } catch (err) {
    console.error("diagnostic/chat error:", err);
    const message =
      err instanceof Anthropic.APIError
        ? `Claude API error ${err.status}: ${err.message}`
        : err instanceof Error
        ? err.message
        : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

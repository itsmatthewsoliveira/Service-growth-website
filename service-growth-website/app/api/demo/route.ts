import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import twilio from "twilio";
import { createNotionPage, headingBlock, richBlock } from "@/lib/notion";

// ─── Types ──────────────────────────────────────────────────────────────────

interface DemoFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
}

// ─── AI Message Generation ──────────────────────────────────────────────────

async function generateAIMessages(data: DemoFormData) {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY!,
  });

  const prompt = `You are an AI assistant for ServiceGrowth.ai, a company that helps service businesses grow with AI-powered automation (instant lead follow-up, missed call text-back, review automation, AI booking, etc.).

A potential client just submitted a demo form. Generate TWO messages:

1. **SMS message** (max 300 characters): A friendly, professional text message introducing yourself as their AI assistant. Mention their business name. Keep it conversational and end with an invitation to reply with any question.

2. **Email body** (HTML format): A warm, professional email that:
   - Greets them by first name
   - Mentions their business by name
   - Explains this is a live demo of the AI system
   - Highlights 2-3 key things the automation can do for service businesses (instant lead response, missed call text-back, review automation, 24/7 AI booking)
   - Mentions this all happened automatically within seconds of them submitting the form
   - Invites them to reply or book a free audit call
   - Keep it concise and impactful — no fluff

Client info:
- Name: ${data.firstName} ${data.lastName}
- Business: ${data.businessName}
- Email: ${data.email}
- Phone: ${data.phone}

Respond in this exact JSON format (no markdown, no code blocks, just raw JSON):
{"sms": "the sms message here", "emailSubject": "the email subject line", "emailHtml": "the full HTML email body"}`;

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });

  const content = message.content[0];
  if (content.type !== "text") {
    throw new Error("Unexpected response format from Claude");
  }

  try {
    return JSON.parse(content.text) as {
      sms: string;
      emailSubject: string;
      emailHtml: string;
    };
  } catch {
    throw new Error("Failed to parse AI response");
  }
}

// ─── Send Email via Resend ──────────────────────────────────────────────────

async function sendDemoEmail(
  to: string,
  subject: string,
  htmlBody: string,
  firstName: string
) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) throw new Error("Missing RESEND_API_KEY");

  const wrappedHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #333;">
      ${htmlBody}
      <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />
      <div style="text-align: center;">
        <p style="color: #999; font-size: 12px; margin-bottom: 4px;">
          This was sent automatically by AI in seconds — no human involved.
        </p>
        <p style="color: #999; font-size: 12px;">
          <strong>ServiceGrowth.ai</strong> — AI That Actually Works for Service Businesses
        </p>
      </div>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "ServiceGrowth.ai <demo@servicegrowth.ai>",
      to: [to],
      subject,
      html: wrappedHtml,
    }),
  });

  if (!res.ok) {
    const error = await res.json();
    console.error("Resend error:", error);
    throw new Error("Failed to send email");
  }
}

// ─── Send SMS via Twilio ────────────────────────────────────────────────────

async function sendDemoSMS(to: string, body: string) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    throw new Error("Missing Twilio credentials");
  }

  const client = twilio(accountSid, authToken);

  // Ensure E.164 format — frontend should send +1XXXXXXXXXX
  let cleanPhone = to.replace(/[^\d+]/g, "");
  if (!cleanPhone.startsWith("+")) {
    const digits = cleanPhone.replace(/\D/g, "");
    const local = digits.startsWith("1") && digits.length > 10 ? digits.slice(1) : digits;
    cleanPhone = `+1${local}`;
  }

  // Use Messaging Service for 10DLC A2P compliance
  const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;

  const message = messagingServiceSid
    ? await client.messages.create({
        body,
        to: cleanPhone,
        messagingServiceSid,
      })
    : await client.messages.create({
        body,
        to: cleanPhone,
        from: fromNumber!,
      });
}

// ─── Main Handler ───────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body: DemoFormData = await req.json();

    // Validate required fields
    if (!body.firstName || !body.email || !body.phone || !body.businessName) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    // Step 1: Generate personalized AI messages
    const aiMessages = await generateAIMessages(body);

    // Step 2: Send email and SMS in parallel
    const hasTwilioCreds =
      !!process.env.TWILIO_ACCOUNT_SID &&
      !!process.env.TWILIO_AUTH_TOKEN &&
      !!process.env.TWILIO_PHONE_NUMBER;

    const [emailResult, smsResult] = await Promise.allSettled([
      sendDemoEmail(
        body.email,
        aiMessages.emailSubject,
        aiMessages.emailHtml,
        body.firstName
      ),
      hasTwilioCreds
        ? sendDemoSMS(body.phone, aiMessages.sms)
        : Promise.reject(new Error("Missing Twilio credentials")),
    ]);

    if (emailResult.status === "rejected") {
      console.error("Email failed:", emailResult.reason);
    }
    if (smsResult.status === "rejected") {
      console.error("SMS failed:", smsResult.reason);
    }

    // If email failed (the main channel), return error
    if (emailResult.status === "rejected") {
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    // Save to Notion (fire-and-forget — don't block the response)
    createNotionPage({
      properties: {
        Name: {
          title: [
            {
              text: {
                content: `${body.firstName} ${body.lastName} — ${body.businessName}`,
              },
            },
          ],
        },
        Email: { email: body.email },
        Phone: { phone_number: body.phone || null },
        Company: {
          rich_text: [{ text: { content: body.businessName || "" } }],
        },
        "Project Status": {
          status: { name: "\uD83D\uDFE1 Onboarding" },
        },
        "Lead Source": {
          select: { name: "Demo Form" },
        },
        "Submitted At": {
          date: { start: new Date().toISOString() },
        },
      },
      children: [
        headingBlock("heading_2", "Demo Form Submission"),
        richBlock("First Name", body.firstName),
        richBlock("Last Name", body.lastName),
        richBlock("Email", body.email),
        richBlock("Phone", body.phone),
        richBlock("Business Name", body.businessName),
        richBlock("Email Sent", emailResult.status === "fulfilled" ? "Yes" : "No"),
        richBlock("SMS Sent", smsResult.status === "fulfilled" ? "Yes" : "No"),
      ],
    }).catch((err) => console.error("Notion save failed (demo):", err));

    return NextResponse.json({
      success: true,
      emailSent: emailResult.status === "fulfilled",
      smsSent: smsResult.status === "fulfilled",
    });
  } catch (err) {
    console.error("Demo API error:", err);
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

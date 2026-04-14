import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin, GrowthLabWaitlistEntry } from "@/lib/supabase";

// ─── Slack Notification ─────────────────────────────────────────────────────

async function sendSlackNotification(data: GrowthLabWaitlistEntry) {
  const slackWebhook = process.env.SLACK_WEBHOOK_URL;
  if (!slackWebhook) return;

  await fetch(slackWebhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: `*New Growth Lab Signup*`,
      blocks: [
        {
          type: "header",
          text: { type: "plain_text", text: "New Signup — Growth Lab Waitlist" },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Email:*\n${data.email}` },
            ...(data.name ? [{ type: "mrkdwn", text: `*Name:*\n${data.name}` }] : []),
            ...(data.company ? [{ type: "mrkdwn", text: `*Company:*\n${data.company}` }] : []),
            ...(data.source ? [{ type: "mrkdwn", text: `*Source:*\n${data.source}` }] : []),
          ],
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `Submitted at ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })}`,
            },
          ],
        },
      ],
    }),
  });
}

// ─── Main Handler ───────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body: GrowthLabWaitlistEntry = await req.json();

    if (!body.email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    // Insert into Supabase — handle duplicate gracefully
    const { error: dbError } = await supabaseAdmin
      .from("growth_lab_waitlist")
      .upsert(
        {
          email: body.email,
          name: body.name || null,
          phone: body.phone || null,
          company: body.company || null,
          state: body.state || null,
          budget: body.budget || null,
          source: body.source || "growth-blueprint",
        },
        { onConflict: "email" }
      );

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      throw new Error(dbError.message);
    }

    // Slack notification (non-blocking)
    await Promise.allSettled([sendSlackNotification(body)]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Growth Lab API error:", err);
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

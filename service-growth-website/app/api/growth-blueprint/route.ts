import { NextRequest, NextResponse } from "next/server";
import { createNotionPage, headingBlock, richBlock } from "@/lib/notion";

interface BlueprintLeadData {
  phone: string;
  email: string;
  budget: string;
}

// ─── Email Alert ────────────────────────────────────────────────────────────

async function sendEmailAlert(data: BlueprintLeadData) {
  const resendKey = process.env.RESEND_API_KEY;
  const alertEmail = process.env.ALERT_EMAIL;
  if (!resendKey || !alertEmail) return;

  const segment =
    data.budget === "under-1k"
      ? "Beginner (Course candidate)"
      : data.budget === "1k-3k"
      ? "Growing (Course or Service)"
      : "Established (Service candidate)";

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "ServiceGrowth.ai <noreply@servicegrowth.ai>",
      to: [alertEmail],
      subject: `New Blueprint Lead: ${data.email} — ${segment}`,
      html: `
        <h2>New 100K Blueprint Lead</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Segment:</strong> ${segment}</p>
        <hr>
        <p style="color:#888">Source: Growth Blueprint Landing Page (Construction FB Group)</p>
      `,
    }),
  });
}

// ─── Slack Notification ─────────────────────────────────────────────────────

async function sendSlackNotification(data: BlueprintLeadData) {
  const slackWebhook = process.env.SLACK_WEBHOOK_URL;
  if (!slackWebhook) return;

  const segment =
    data.budget === "under-1k"
      ? "Beginner (Course)"
      : data.budget === "1k-3k"
      ? "Growing (Course/Service)"
      : "Established (Service)";

  await fetch(slackWebhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: `*New Blueprint Lead*`,
      blocks: [
        {
          type: "header",
          text: { type: "plain_text", text: "New Lead — 100K Blueprint" },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Email:*\n${data.email}` },
            { type: "mrkdwn", text: `*Phone:*\n${data.phone}` },
            { type: "mrkdwn", text: `*Budget:*\n${data.budget}` },
            { type: "mrkdwn", text: `*Segment:*\n${segment}` },
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
    const body: BlueprintLeadData = await req.json();

    if (!body.phone || !body.email || !body.budget) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    const segment =
      body.budget === "under-1k"
        ? "Beginner"
        : body.budget === "1k-3k"
        ? "Growing"
        : "Established";

    // Save to Notion
    await createNotionPage({
      properties: {
        Name: {
          title: [{ text: { content: `Blueprint Lead — ${body.email}` } }],
        },
        Email: { email: body.email },
        Phone: { phone_number: body.phone || null },
        "Project Status": {
          status: { name: "\uD83D\uDFE1 Onboarding" },
        },
        "Lead Source": {
          select: { name: "Growth Blueprint" },
        },
        "Submitted At": {
          date: { start: new Date().toISOString() },
        },
      },
      children: [
        headingBlock("heading_2", "100K Growth Blueprint — Lead Capture"),
        richBlock("Email", body.email),
        richBlock("Phone", body.phone),
        richBlock("Monthly Marketing Budget", body.budget),
        richBlock("Segment", segment),
      ],
    });

    // Notifications (non-blocking)
    await Promise.allSettled([
      sendEmailAlert(body),
      sendSlackNotification(body),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Growth blueprint API error:", err);
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

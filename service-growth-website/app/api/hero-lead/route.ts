import { NextRequest, NextResponse } from "next/server";
import { createNotionPage, headingBlock, richBlock } from "@/lib/notion";

interface HeroLeadData {
  name: string;
  phone: string;
  email: string;
}

// ─── Email Alert ────────────────────────────────────────────────────────────

async function sendEmailAlert(data: HeroLeadData) {
  const resendKey = process.env.RESEND_API_KEY;
  const alertEmail = process.env.ALERT_EMAIL;
  if (!resendKey || !alertEmail) return;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "ServiceGrowth.ai <noreply@servicegrowth.ai>",
      to: [alertEmail],
      subject: `New Hero Lead: ${data.name}`,
      html: `
        <h2>New Lead from Homepage</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <hr>
        <p style="color:#888">Source: Homepage "Get Free Analysis" form</p>
      `,
    }),
  });
}

// ─── Slack Notification ─────────────────────────────────────────────────────

async function sendSlackNotification(data: HeroLeadData) {
  const slackWebhook = process.env.SLACK_WEBHOOK_URL;
  if (!slackWebhook) return;

  await fetch(slackWebhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: `*New Hero Lead*`,
      blocks: [
        {
          type: "header",
          text: { type: "plain_text", text: "New Lead — Homepage" },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Name:*\n${data.name}` },
            { type: "mrkdwn", text: `*Phone:*\n${data.phone}` },
            { type: "mrkdwn", text: `*Email:*\n${data.email}` },
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
    const body: HeroLeadData = await req.json();

    if (!body.name || !body.phone || !body.email) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    // Save to Notion (awaited — will surface errors)
    await createNotionPage({
      properties: {
        Name: {
          title: [{ text: { content: body.name } }],
        },
        Email: { email: body.email },
        Phone: { phone_number: body.phone || null },
        "Project Status": {
          status: { name: "\uD83D\uDFE1 Onboarding" },
        },
        "Lead Source": {
          select: { name: "Hero Form" },
        },
        "Submitted At": {
          date: { start: new Date().toISOString() },
        },
      },
      children: [
        headingBlock("heading_2", "Hero Form Submission"),
        richBlock("Name", body.name),
        richBlock("Phone", body.phone),
        richBlock("Email", body.email),
      ],
    });

    // Notifications (non-blocking)
    await Promise.allSettled([
      sendEmailAlert(body),
      sendSlackNotification(body),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Hero lead API error:", err);
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

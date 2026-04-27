import { NextRequest, NextResponse } from "next/server";
import { createNotionPage, headingBlock, richBlock } from "@/lib/notion";

interface BlueprintLeadData {
  name: string;
  company: string;
  state: string;
  phone: string;
  email: string;
  budget: string;
  consent?: boolean;
  engaged?: boolean;
  watchSeconds?: number;
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
      subject: `New Blueprint Lead: ${data.name} (${data.company}) — ${segment}`,
      html: `
        <h2>New 100K Blueprint Lead</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>State:</strong> ${data.state}</p>
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

// ─── Welcome Email to Lead ──────────────────────────────────────────────────

const DEEP_DIVE_VIDEO_URL = "https://servicegrowth.ai/growth-blueprint/thank-you"; // Update with actual video URL
const PDF_URL = "https://www.servicegrowth.ai/downloads/100K-Growth-Blueprint.pdf";

async function sendWelcomeEmail(data: BlueprintLeadData) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) return;

  const isHighBudget = data.budget === "3k-5k" || data.budget === "5k-plus";

  const ctaSection = isHighBudget
    ? `<a href="https://www.servicegrowth.ai/contact" style="display:inline-block;padding:14px 28px;background:#E25312;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;">Book a Strategy Call</a>
       <p style="color:#7A766E;font-size:13px;margin-top:12px;">I'll personally look at your business and show you exactly where the gaps are.</p>`
    : `<a href="https://www.servicegrowth.ai/growth-blueprint/thank-you?name=${encodeURIComponent(data.name)}&budget=${data.budget}" style="display:inline-block;padding:14px 28px;background:#E25312;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;">Join the Growth Lab (Free)</a>
       <p style="color:#7A766E;font-size:13px;margin-top:12px;">Free weekly content to help you build your company from zero.</p>`;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Matt from ServiceGrowth <noreply@servicegrowth.ai>",
      to: [data.email],
      subject: `${data.name}, your 100K Growth Blueprint is ready`,
      html: `
        <div style="max-width:600px;margin:0 auto;font-family:Arial,Helvetica,sans-serif;background:#FCFFD5;padding:40px 32px;border-radius:12px;">
          <div style="text-align:center;margin-bottom:32px;">
            <p style="display:inline-block;padding:4px 14px;background:rgba(226, 83, 18,0.1);color:#E25312;border-radius:100px;font-size:12px;font-weight:600;">100K GROWTH BLUEPRINT</p>
          </div>

          <h1 style="font-size:24px;color:#10100F;margin-bottom:8px;">Hey ${data.name},</h1>
          <p style="font-size:16px;color:#10100F;opacity:0.7;line-height:1.6;margin-bottom:24px;">
            Thanks for downloading the blueprint. This is the exact system I used to take an outdoor design company from $0 to $100K in 90 days &mdash; and it's yours now.
          </p>

          <div style="background:#fff;border:1px solid rgba(16, 16, 15,0.08);border-radius:10px;padding:24px;margin-bottom:20px;">
            <h2 style="font-size:18px;color:#10100F;margin-bottom:8px;">Your Blueprint</h2>
            <p style="font-size:14px;color:#10100F;opacity:0.6;margin-bottom:16px;">Google Ads, Facebook Ads, Yelp, speed-to-lead, branding, follow-up &mdash; everything broken down step by step.</p>
            <a href="${PDF_URL}" style="display:inline-block;padding:12px 24px;background:#10100F;color:#FCFFD5;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;">Download the Blueprint</a>
          </div>

          <div style="background:#fff;border:1px solid rgba(16, 16, 15,0.08);border-radius:10px;padding:24px;margin-bottom:20px;">
            <h2 style="font-size:18px;color:#10100F;margin-bottom:8px;">Watch the Deep Dive</h2>
            <p style="font-size:14px;color:#10100F;opacity:0.6;margin-bottom:16px;">I recorded a 15-minute video walking through the entire system, my story, and how we can help you implement it.</p>
            <a href="${DEEP_DIVE_VIDEO_URL}" style="display:inline-block;padding:12px 24px;background:#10100F;color:#FCFFD5;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;">Watch the Video</a>
          </div>

          <div style="text-align:center;padding:32px 0 16px;">
            <h2 style="font-size:18px;color:#10100F;margin-bottom:12px;">Ready for the Next Step?</h2>
            ${ctaSection}
          </div>

          <hr style="border:none;border-top:1px solid rgba(16, 16, 15,0.08);margin:32px 0 16px;" />
          <p style="font-size:12px;color:#7A766E;text-align:center;">
            ServiceGrowth AI &mdash; The growth engine for service businesses<br>
            <a href="https://www.servicegrowth.ai" style="color:#E25312;">servicegrowth.ai</a> &middot; (904) 874-2245
          </p>
        </div>
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
            { type: "mrkdwn", text: `*Name:*\n${data.name}` },
            { type: "mrkdwn", text: `*Company:*\n${data.company}` },
            { type: "mrkdwn", text: `*State:*\n${data.state}` },
            { type: "mrkdwn", text: `*Email:*\n${data.email}` },
            { type: "mrkdwn", text: `*Phone:*\n${data.phone}` },
            { type: "mrkdwn", text: `*Budget:*\n${data.budget} (${segment})` },
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

    if (!body.name || !body.company || !body.state || !body.phone || !body.email || !body.budget) {
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
          title: [{ text: { content: `${body.name} — ${body.company}` } }],
        },
        Email: { email: body.email },
        Phone: { phone_number: body.phone || null },
        Company: {
          rich_text: [{ text: { content: body.company } }],
        },
        City: {
          rich_text: [{ text: { content: body.state } }],
        },
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
        richBlock("Name", body.name),
        richBlock("Company", body.company),
        richBlock("State", body.state),
        richBlock("Email", body.email),
        richBlock("Phone", body.phone),
        richBlock("Monthly Marketing Budget", body.budget),
        richBlock("Segment", segment),
        richBlock("Video Engagement", body.engaged ? `🔥 Engaged viewer (${body.watchSeconds || 0}s watched)` : `Watched ${body.watchSeconds || 0}s`),
        richBlock("Marketing Consent", body.consent ? `✅ OPTED IN for email + SMS on ${new Date().toISOString()}` : "❌ Did not consent to marketing communications"),
      ],
    });

    // Notifications + welcome email (non-blocking)
    await Promise.allSettled([
      sendEmailAlert(body),
      sendSlackNotification(body),
      sendWelcomeEmail(body),
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

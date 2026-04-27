import { NextRequest, NextResponse } from "next/server";
import { createNotionPage, headingBlock, richBlock } from "@/lib/notion";

interface ContactLeadData {
  name: string;
  company: string;
  email: string;
  phone: string;
  state: string;
  budget: string;
  consent?: boolean;
}

async function sendEmailAlert(data: ContactLeadData) {
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
      subject: `New Strategy Call: ${data.name} (${data.company})`,
      html: `
        <h2>New Strategy Call Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>State / Region:</strong> ${data.state}</p>
        <p><strong>Monthly Revenue:</strong> ${data.budget}</p>
        <p><strong>Consent:</strong> ${data.consent ? "Yes" : "No"}</p>
        <hr>
        <p style="color:#888">Source: Contact page strategy call form</p>
      `,
    }),
  });
}

async function sendSlackNotification(data: ContactLeadData) {
  const slackWebhook = process.env.SLACK_WEBHOOK_URL;
  if (!slackWebhook) return;

  await fetch(slackWebhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: "*New Strategy Call Request*",
      blocks: [
        {
          type: "header",
          text: { type: "plain_text", text: "New Lead — Strategy Call" },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Name:*\n${data.name}` },
            { type: "mrkdwn", text: `*Company:*\n${data.company}` },
            { type: "mrkdwn", text: `*Email:*\n${data.email}` },
            { type: "mrkdwn", text: `*Phone:*\n${data.phone}` },
            { type: "mrkdwn", text: `*State:*\n${data.state}` },
            { type: "mrkdwn", text: `*Revenue:*\n${data.budget}` },
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

export async function POST(req: NextRequest) {
  try {
    const body: ContactLeadData = await req.json();

    if (!body.name || !body.company || !body.email || !body.phone || !body.state || !body.budget) {
      return NextResponse.json({ error: "Please fill in all fields." }, { status: 400 });
    }

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
          select: { name: "Strategy Call" },
        },
        "Submitted At": {
          date: { start: new Date().toISOString() },
        },
      },
      children: [
        headingBlock("heading_2", "Strategy Call Request"),
        richBlock("Name", body.name),
        richBlock("Company", body.company),
        richBlock("State / Region", body.state),
        richBlock("Email", body.email),
        richBlock("Phone", body.phone),
        richBlock("Monthly Revenue", body.budget),
        richBlock(
          "Marketing Consent",
          body.consent ? `OPTED IN for call/text on ${new Date().toISOString()}` : "Did not consent"
        ),
      ],
    });

    await Promise.allSettled([
      sendEmailAlert(body),
      sendSlackNotification(body),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

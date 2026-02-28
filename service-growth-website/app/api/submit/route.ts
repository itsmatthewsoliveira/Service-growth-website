import { NextRequest, NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────

interface OnboardingFormData {
  // Section 1 - Business Basics
  fullName: string;
  role: string;
  companyName: string;
  industry: string;
  yearsInBusiness: string;
  city: string;
  phone: string;
  email: string;
  existingWebsite: string;
  companyDescription: string;

  // Section 2 - Services
  services: string[];
  otherServices: string;
  avgProjectSize: string;
  projectDuration: string;
  notableProject: string;
  photosAvailable: string;
  serviceArea: string;

  // Section 3 - Brand
  brandPersonality: string[];
  hasLogo: string;
  brandColors: string;
  fonts: string;
  competitorWebsites: string;
  inspiredWebsites: string;
  websiteFeeling: string;

  // Section 4 - Goals
  primaryGoal: string;
  idealClient: string;
  problemSolved: string;
  additionalNotes: string;
}

// ─── Notion Block Helpers ─────────────────────────────────────────────────────

function headingBlock(level: "heading_2" | "heading_3", text: string) {
  return {
    object: "block" as const,
    type: level,
    [level]: {
      rich_text: [{ type: "text" as const, text: { content: text } }],
    },
  };
}

function richBlock(label: string, value: string | undefined) {
  return {
    object: "block" as const,
    type: "paragraph" as const,
    paragraph: {
      rich_text: [
        {
          type: "text" as const,
          text: { content: `${label}: ` },
          annotations: { bold: true },
        },
        { type: "text" as const, text: { content: value || "—" } },
      ],
    },
  };
}

function todoBlock(text: string) {
  return {
    object: "block" as const,
    type: "to_do" as const,
    to_do: {
      rich_text: [{ type: "text" as const, text: { content: text } }],
      checked: false,
    },
  };
}

// ─── Notification Helpers ─────────────────────────────────────────────────────

async function sendEmailAlert(data: OnboardingFormData) {
  const resendKey = process.env.RESEND_API_KEY;
  const alertEmail = process.env.ALERT_EMAIL;
  if (!resendKey || !alertEmail) return;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "ServiceGrowth.ai <onboarding@servicegrowth.ai>",
        to: [alertEmail],
        subject: `New Onboarding: ${data.fullName} — ${data.companyName}`,
        html: `
          <h2>New Client Onboarding Submission</h2>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Company:</strong> ${data.companyName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>City:</strong> ${data.city}</p>
          <p><strong>Industry:</strong> ${data.industry}</p>
          <p><strong>Primary Goal:</strong> ${data.primaryGoal}</p>
          <p><strong>Services:</strong> ${Array.isArray(data.services) ? data.services.join(", ") : data.services}</p>
          <hr>
          <p style="color:#888">Check your Notion database for the full submission.</p>
        `,
      }),
    });
  } catch (err) {
    console.error("Email alert failed:", err);
  }
}

async function sendConfirmationEmail(data: OnboardingFormData) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey || !data.email) return;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "ServiceGrowth.ai <onboarding@servicegrowth.ai>",
        to: [data.email],
        subject: "We received your onboarding questionnaire",
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:40px 20px">
            <h1 style="font-size:24px;color:#111">Thank you, ${data.fullName}.</h1>
            <p style="color:#555;line-height:1.7">
              We've received your onboarding questionnaire for <strong>${data.companyName}</strong>.
              Our team will review your responses within 24 hours.
            </p>
            <h3 style="font-size:16px;color:#111;margin-top:32px">What happens next:</h3>
            <ol style="color:#555;line-height:2">
              <li>We review your answers within 24 hours</li>
              <li>A project strategy call will be scheduled</li>
              <li>Website design begins within 3-5 business days</li>
            </ol>
            <hr style="border:none;border-top:1px solid #eee;margin:32px 0">
            <p style="color:#999;font-size:13px">
              ServiceGrowth.ai — AI That Actually Works for Service Businesses
            </p>
          </div>
        `,
      }),
    });
  } catch (err) {
    console.error("Confirmation email failed:", err);
  }
}

async function sendSlackNotification(data: OnboardingFormData) {
  const slackWebhook = process.env.SLACK_WEBHOOK_URL;
  if (!slackWebhook) return;

  try {
    await fetch(slackWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `*New Onboarding Submission*`,
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: "New Client Onboarding",
            },
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*Name:*\n${data.fullName}` },
              { type: "mrkdwn", text: `*Company:*\n${data.companyName}` },
              { type: "mrkdwn", text: `*Email:*\n${data.email}` },
              { type: "mrkdwn", text: `*Phone:*\n${data.phone}` },
              { type: "mrkdwn", text: `*Industry:*\n${data.industry}` },
              { type: "mrkdwn", text: `*City:*\n${data.city}` },
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
  } catch (err) {
    console.error("Slack notification failed:", err);
  }
}

// ─── Main Handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const body: OnboardingFormData = await req.json();

  const {
    fullName,
    role,
    companyName,
    industry,
    yearsInBusiness,
    city,
    phone,
    email,
    existingWebsite,
    companyDescription,
    services,
    otherServices,
    avgProjectSize,
    projectDuration,
    notableProject,
    photosAvailable,
    serviceArea,
    brandPersonality,
    hasLogo,
    brandColors,
    fonts,
    competitorWebsites,
    inspiredWebsites,
    websiteFeeling,
    primaryGoal,
    idealClient,
    problemSolved,
    additionalNotes,
  } = body;

  const notionToken = process.env.NOTION_TOKEN;
  const notionDbId = process.env.NOTION_DB_ID;

  if (!notionToken || !notionDbId) {
    return NextResponse.json(
      { error: "Missing Notion credentials in environment variables." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${notionToken}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: { database_id: notionDbId },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: `${fullName || "Unknown"} — ${companyName || "Unknown Company"}`,
                },
              },
            ],
          },
          Email: { email: email || null },
          Phone: { phone_number: phone || null },
          Company: {
            rich_text: [{ text: { content: companyName || "" } }],
          },
          City: {
            rich_text: [{ text: { content: city || "" } }],
          },
          "Years in Business": {
            number: yearsInBusiness ? parseInt(yearsInBusiness) : null,
          },
          "Project Status": {
            status: { name: "Not started" },
          },
          "Primary Goal": {
            rich_text: [{ text: { content: primaryGoal || "" } }],
          },
          "Has Logo": {
            select: { name: hasLogo || "Unknown" },
          },
          "Photos Available": {
            select: { name: photosAvailable || "Unknown" },
          },
          "Submitted At": {
            date: { start: new Date().toISOString() },
          },
        },
        children: [
          headingBlock("heading_2", "Full Onboarding Responses"),

          headingBlock("heading_3", "01 — Business Basics"),
          richBlock("Industry", industry),
          richBlock("Role", role),
          richBlock("Existing Website", existingWebsite),
          richBlock("Service Area", serviceArea),
          richBlock("Company Description", companyDescription),

          headingBlock("heading_3", "02 — Services & Projects"),
          richBlock(
            "Services",
            Array.isArray(services) ? services.join(", ") : services
          ),
          richBlock("Other Services", otherServices),
          richBlock("Avg Project Size", avgProjectSize),
          richBlock("Project Duration", projectDuration),
          richBlock("Notable Project", notableProject),

          headingBlock("heading_3", "03 — Brand & Identity"),
          richBlock(
            "Brand Personality",
            Array.isArray(brandPersonality)
              ? brandPersonality.join(", ")
              : brandPersonality
          ),
          richBlock("Brand Colors", brandColors),
          richBlock("Fonts", fonts),
          richBlock("Competitor Websites", competitorWebsites),
          richBlock("Inspired By", inspiredWebsites),
          richBlock("Website Feeling", websiteFeeling),

          headingBlock("heading_3", "04 — Goals"),
          richBlock("Ideal Client", idealClient),
          richBlock("Problem Solved", problemSolved),

          headingBlock("heading_3", "Additional Notes"),
          richBlock("Notes", additionalNotes || "None provided"),

          headingBlock("heading_2", "Project Tracker"),
          todoBlock("Form submitted & reviewed"),
          todoBlock("Strategy call scheduled"),
          todoBlock("Design direction approved"),
          todoBlock("Homepage design delivered"),
          todoBlock("Full site built"),
          todoBlock("Client review & revisions"),
          todoBlock("Site launched"),
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Notion API error:", data);
      return NextResponse.json(
        { error: "Failed to create Notion page", details: data },
        { status: 500 }
      );
    }

    // Fire notifications in parallel (non-blocking — don't fail the response)
    await Promise.allSettled([
      sendEmailAlert(body),
      sendConfirmationEmail(body),
      sendSlackNotification(body),
    ]);

    return NextResponse.json({ success: true, notionPageId: data.id });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

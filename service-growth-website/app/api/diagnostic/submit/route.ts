import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

interface SubmitBody {
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
  transcript?: Array<{ role: "user" | "assistant"; content: string }>;
}

const CALENDLY_URL = "https://calendly.com/servicegrowth-info/30min";
const PDF_URL = "https://www.servicegrowth.ai/downloads/100K-Growth-Blueprint.pdf";
const SALES_REP_SMS = "+19048063681";
const SALES_REP_NAME = "our sales rep";

// ─── Twilio SMS alert ───────────────────────────────────────────────────────

async function sendSMSAlert(body: SubmitBody) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_NUMBER;
  const enabled = process.env.TWILIO_SMS_ENABLED === "true";
  if (!enabled || !sid || !token || !from) return;

  const lines = [
    `🔥 QUALIFIED LEAD — ${body.name}${body.business_name ? ` (${body.business_name})` : ""}`,
    body.phone ? `Phone: ${body.phone}` : body.email ? `Email: ${body.email}` : "",
    body.revenue_band ? `Rev: ${body.revenue_band}` : "",
    body.speed_to_lead ? `Speed-to-lead: ${body.speed_to_lead}` : "",
    body.bottleneck ? `Bottleneck: ${body.bottleneck}` : "",
    `Variant: ${body.cta_variant}`,
    body.cta_variant === "phone" ? `Call them today.` : `They were sent to Calendly.`,
  ].filter(Boolean);

  const smsBody = lines.join("\n");

  const auth = Buffer.from(`${sid}:${token}`).toString("base64");
  const form = new URLSearchParams({
    To: SALES_REP_SMS,
    From: from,
    Body: smsBody,
  });

  await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form.toString(),
  });
}

// ─── Slack alert ────────────────────────────────────────────────────────────

async function sendSlackAlert(body: SubmitBody) {
  const webhook = process.env.SLACK_WEBHOOK_URL;
  if (!webhook) return;

  const headerEmoji = body.qualified ? "🔥" : "📥";
  const headerText = body.qualified ? "Qualified Lead" : "New Lead (not qualified)";

  await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: `${headerEmoji} ${headerText} — ${body.name}`,
      blocks: [
        {
          type: "header",
          text: { type: "plain_text", text: `${headerEmoji} ${headerText}` },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Name:*\n${body.name}` },
            { type: "mrkdwn", text: `*Business:*\n${body.business_name || "—"}` },
            { type: "mrkdwn", text: `*Service:*\n${body.service_type || "—"}` },
            { type: "mrkdwn", text: `*Location:*\n${body.location || "—"}` },
            { type: "mrkdwn", text: `*Revenue:*\n${body.revenue_band || "—"}` },
            { type: "mrkdwn", text: `*Speed-to-lead:*\n${body.speed_to_lead || "—"}` },
            { type: "mrkdwn", text: `*Phone:*\n${body.phone || "—"}` },
            { type: "mrkdwn", text: `*Email:*\n${body.email || "—"}` },
            { type: "mrkdwn", text: `*Variant:*\n${body.cta_variant}` },
            { type: "mrkdwn", text: `*Qualified:*\n${body.qualified ? "Yes" : "No"}` },
          ],
        },
        {
          type: "section",
          text: { type: "mrkdwn", text: `*Bottleneck:* ${body.bottleneck || "—"}` },
        },
        {
          type: "section",
          text: { type: "mrkdwn", text: `*Diagnostic summary:* ${body.summary}` },
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `Submitted ${new Date().toLocaleString("en-US", {
                timeZone: "America/New_York",
              })} ET · via AI sales agent (Alex)`,
            },
          ],
        },
      ],
    }),
  });
}

// ─── Welcome email with PDF ─────────────────────────────────────────────────

async function sendWelcomeEmail(body: SubmitBody) {
  const key = process.env.RESEND_API_KEY;
  if (!key || !body.email) return;

  const qualifiedCopy = body.qualified
    ? body.cta_variant === "phone"
      ? `<p style="font-size:16px;color:#10100F;line-height:1.6;margin-bottom:20px;">
           I just pinged ${SALES_REP_NAME} — he'll call you <strong>today</strong>.
           He'll text first so you know it's him. If you want to skip the wait, grab a time here:
         </p>
         <a href="${CALENDLY_URL}" style="display:inline-block;padding:12px 24px;background:#E25312;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;">Pick a time on his calendar</a>`
      : `<p style="font-size:16px;color:#10100F;line-height:1.6;margin-bottom:20px;">
           You're booked — or you can grab a time right now if you haven't:
         </p>
         <a href="${CALENDLY_URL}" style="display:inline-block;padding:12px 24px;background:#E25312;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;">Pick a time on the calendar</a>`
    : `<p style="font-size:16px;color:#10100F;line-height:1.6;margin-bottom:20px;">
         Dig into the blueprint below — it covers our entire playbook.
         When you hit $15–20K a month and want a partner to scale it, come back.
       </p>`;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Alex from ServiceGrowth <noreply@servicegrowth.ai>",
      to: [body.email],
      subject: `${body.name}, your 100K Blueprint + what we found`,
      html: `
        <div style="max-width:600px;margin:0 auto;font-family:Arial,Helvetica,sans-serif;background:#FCFFD5;padding:40px 32px;border-radius:12px;">
          <div style="text-align:center;margin-bottom:24px;">
            <p style="display:inline-block;padding:4px 14px;background:rgba(226, 83, 18,0.1);color:#E25312;border-radius:100px;font-size:12px;font-weight:600;margin:0;">YOUR DIAGNOSTIC</p>
          </div>

          <h1 style="font-size:24px;color:#10100F;margin:0 0 12px;">Hey ${body.name},</h1>

          <div style="background:#fff;border:1px solid rgba(16, 16, 15,0.08);border-radius:10px;padding:20px 24px;margin-bottom:24px;">
            <p style="font-size:15px;color:#10100F;line-height:1.6;margin:0;">
              ${body.summary}
            </p>
          </div>

          ${qualifiedCopy}

          <hr style="border:none;border-top:1px solid rgba(16, 16, 15,0.08);margin:28px 0;" />

          <div style="background:#fff;border:1px solid rgba(16, 16, 15,0.08);border-radius:10px;padding:24px;margin-bottom:20px;">
            <h2 style="font-size:18px;color:#10100F;margin:0 0 8px;">The 100K Growth Blueprint</h2>
            <p style="font-size:14px;color:#10100F;opacity:0.6;margin:0 0 16px;">
              Google Ads, Facebook Ads, Yelp, speed-to-lead, branding, follow-up — the whole playbook.
            </p>
            <a href="${PDF_URL}" style="display:inline-block;padding:12px 24px;background:#10100F;color:#FCFFD5;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;">Download the PDF</a>
          </div>

          <p style="font-size:12px;color:#7A766E;text-align:center;margin-top:32px;">
            ServiceGrowth AI — operators, not grifters<br>
            <a href="https://www.servicegrowth.ai" style="color:#E25312;">servicegrowth.ai</a>
          </p>
        </div>
      `,
    }),
  });
}

// ─── Main handler ───────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body: SubmitBody = await req.json();

    if (!body.name || !body.cta_variant || !body.summary) {
      return NextResponse.json(
        { error: "Missing required fields (name, cta_variant, summary)" },
        { status: 400 }
      );
    }

    // Save to Supabase (best-effort — if table is missing, we still notify)
    try {
      await supabaseAdmin.from("diagnostic_leads").insert({
        name: body.name,
        business_name: body.business_name ?? null,
        service_type: body.service_type ?? null,
        location: body.location ?? null,
        revenue_band: body.revenue_band ?? null,
        lead_sources: body.lead_sources ?? null,
        speed_to_lead: body.speed_to_lead ?? null,
        bottleneck: body.bottleneck ?? null,
        phone: body.phone ?? null,
        email: body.email ?? null,
        qualified: body.qualified,
        cta_variant: body.cta_variant,
        summary: body.summary,
        transcript: body.transcript ?? null,
      });
    } catch (dbErr) {
      console.error("diagnostic_leads insert failed:", dbErr);
    }

    // Notifications — only ping Victor if qualified
    const jobs: Array<Promise<unknown>> = [sendSlackAlert(body), sendWelcomeEmail(body)];
    if (body.qualified) jobs.push(sendSMSAlert(body));
    await Promise.allSettled(jobs);

    return NextResponse.json({
      success: true,
      calendly_url: body.qualified ? CALENDLY_URL : null,
      qualified: body.qualified,
    });
  } catch (err) {
    console.error("diagnostic/submit error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}

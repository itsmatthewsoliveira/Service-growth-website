"use client";

import Link from "next/link";
import PageHero from "@/components/sections/PageHero";

const ACCENT = "#E25312";
const INK = "#10100F";

interface Section {
  title: string;
  content?: string;
  items?: string[];
  subsections?: { subtitle: string; text: string }[];
}

const SECTIONS: Section[] = [
  {
    title: "Information we collect",
    content:
      "We collect information you voluntarily provide through our website forms, including: full name, email address, phone number, business name, business type/industry, location, and other business details. We may also collect information from publicly available business directories, social media profiles, and other public sources for the purpose of business-to-business outreach.",
  },
  {
    title: "How we use your information",
    items: [
      "Deliver and manage our AI-powered marketing services",
      "Send automated AI-generated text messages (SMS/MMS) and emails in response to demo requests or service inquiries",
      "Send service-related communications including appointment reminders, lead notifications, and status updates",
      "Conduct business-to-business outreach to local service businesses via email, phone, or text message",
      "Manage and optimize advertising campaigns on platforms such as Facebook, Instagram, and Google on your behalf",
      "Improve our products, services, and customer experience",
      "Comply with legal obligations and enforce our terms",
    ],
  },
  {
    title: "Text messaging (SMS/MMS)",
    subsections: [
      {
        subtitle: "Consent",
        text: "By providing your phone number through any form on servicegrowth.ai, you expressly consent to receive automated text messages from ServiceGrowth.ai. For B2B communications, we may contact business phone numbers listed in public directories or business profiles to introduce our services, in compliance with applicable laws.",
      },
      { subtitle: "Message types", text: "Messages may include: AI demo responses, service notifications, appointment reminders, lead alerts, promotional offers, and business-to-business outreach." },
      { subtitle: "Frequency", text: "Message frequency varies by service. Demo requests receive a one-time message. Active clients receive messages based on their service configuration. Business outreach is limited and respectful of your time." },
      { subtitle: "Opt-out", text: "Reply STOP to any message to unsubscribe. You will receive a confirmation and no further messages will be sent. You may also email hello@servicegrowth.ai to opt out." },
      { subtitle: "Costs", text: "Message and data rates may apply depending on your carrier and plan. ServiceGrowth.ai is not responsible for carrier charges." },
      { subtitle: "Help", text: "Reply HELP to any message for assistance, or contact hello@servicegrowth.ai." },
    ],
  },
  {
    title: "Email communications",
    content:
      "We send emails for service delivery, transactional notifications, and business-to-business outreach. Marketing and promotional emails include an unsubscribe link in every message. B2B outreach emails are sent in compliance with the CAN-SPAM Act and include our physical address, clear sender identification, and opt-out instructions.",
  },
  {
    title: "Business-to-business outreach",
    content:
      "ServiceGrowth.ai may contact local service businesses via email, phone, or text message to introduce our services. This outreach uses publicly available business contact information from Google Business Profiles, business directories, social media business pages, and industry listings. We respect all opt-out requests promptly and maintain a suppression list of businesses that have requested not to be contacted.",
  },
  {
    title: "Advertising & third-party platforms",
    content:
      "When managing advertising campaigns on your behalf, we may share necessary business information with advertising platforms (Meta/Facebook, Google, etc.) as required to run campaigns. We use tracking pixels and analytics tools to measure ad performance. We do not sell your personal information to advertisers or third parties.",
  },
  {
    title: "AI-generated content",
    content:
      "Our services use artificial intelligence to generate text messages, emails, content, and business analysis. AI-generated communications are automated and may be sent without human review. AI outputs are for informational and marketing purposes only and do not constitute professional advice.",
  },
  {
    title: "Data sharing",
    items: [
      "We do NOT sell, rent, or trade your personal information to third parties for their marketing purposes",
      "We may share data with service providers who help us operate our business (email, SMS, hosting, analytics) under strict confidentiality agreements",
      "We may share data with advertising platforms when managing campaigns on your behalf, as authorized by you",
      "We may disclose information when required by law, legal process, or to protect our rights",
    ],
  },
  { title: "Data security", content: "We implement industry-standard security measures to protect your data, including encrypted data transmission (SSL/TLS), secure data storage, access controls, and regular security reviews. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security." },
  { title: "Data retention", content: "We retain your information for as long as necessary to provide our services and fulfill the purposes described in this policy. If you request deletion of your data, we will remove it within 30 days, except where retention is required by law." },
  {
    title: "Your rights",
    items: [
      "Request access to the personal information we hold about you",
      "Request correction of inaccurate information",
      "Request deletion of your personal information",
      "Opt out of marketing communications at any time",
      "Opt out of text messages by replying STOP",
      "Request to be added to our do-not-contact list for business outreach",
    ],
  },
  { title: "Cookies & analytics", content: "Our website uses cookies and similar technologies to improve your experience, analyze traffic, and support our marketing efforts. This includes first-party analytics, advertising pixels (Facebook Pixel, Google Analytics), and performance cookies. You can manage cookie preferences through your browser settings." },
  { title: "Children's privacy", content: "Our services are designed for businesses and business professionals. We do not knowingly collect personal information from individuals under the age of 18. If we become aware that we have collected data from a minor, we will delete it promptly." },
  { title: "Changes to this policy", content: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated \"Last Modified\" date. We encourage you to review this policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy." },
  { title: "Contact us", content: "For questions about this Privacy Policy, to exercise your data rights, or to opt out of communications, contact us at: hello@servicegrowth.ai" },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal · Privacy"
        headlineLead="Privacy"
        headlineAccent="policy."
        subhead="How we collect, use, and protect your information. Last updated March 9, 2026."
        align="centered"
      />

      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[860px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
          <p
            className="mb-16"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 17,
              lineHeight: 1.65,
              color: "rgba(16,16,15,0.7)",
            }}
          >
            ServiceGrowth.ai (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website, use our services, or receive communications from us.
          </p>

          <div>
            {SECTIONS.map((section, i) => (
              <div
                key={i}
                className="pb-10 mb-10"
                style={{ borderBottom: i < SECTIONS.length - 1 ? "1px solid rgba(16,16,15,0.1)" : "none" }}
              >
                <div className="flex items-baseline gap-4 mb-5">
                  <span
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: 11,
                      letterSpacing: "0.22em",
                      fontWeight: 700,
                      color: ACCENT,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className="uppercase"
                    style={{
                      fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 26,
                      lineHeight: 1.1,
                      letterSpacing: "-0.015em",
                      color: INK,
                    }}
                  >
                    {section.title}
                  </h2>
                </div>

                {section.content && (
                  <p
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: "rgba(16,16,15,0.72)",
                    }}
                  >
                    {section.content}
                  </p>
                )}

                {section.items && (
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3"
                        style={{
                          fontFamily: "var(--font-inter), system-ui, sans-serif",
                          fontSize: 15,
                          lineHeight: 1.6,
                          color: "rgba(16,16,15,0.78)",
                        }}
                      >
                        <span className="mt-[8px] flex-shrink-0" style={{ width: 6, height: 6, background: ACCENT, borderRadius: 1 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections && (
                  <div className="space-y-5">
                    {section.subsections.map((sub, j) => (
                      <div key={j}>
                        <h3
                          className="uppercase mb-2"
                          style={{
                            fontFamily: "var(--font-mono), ui-monospace, monospace",
                            fontSize: 11,
                            letterSpacing: "0.22em",
                            fontWeight: 700,
                            color: ACCENT,
                          }}
                        >
                          {sub.subtitle}
                        </h3>
                        <p
                          style={{
                            fontFamily: "var(--font-inter), system-ui, sans-serif",
                            fontSize: 14.5,
                            lineHeight: 1.65,
                            color: "rgba(16,16,15,0.72)",
                          }}
                        >
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            className="mt-8 p-6 text-center"
            style={{
              background: "rgba(226,83,18,0.05)",
              border: "1px solid rgba(226,83,18,0.2)",
              borderRadius: 6,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 14,
                color: "rgba(16,16,15,0.7)",
              }}
            >
              See also our{" "}
              <Link
                href="/terms"
                className="underline hover:no-underline"
                style={{ color: ACCENT, fontWeight: 600 }}
              >
                Terms &amp; Conditions
              </Link>{" "}
              for full service terms and messaging program details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

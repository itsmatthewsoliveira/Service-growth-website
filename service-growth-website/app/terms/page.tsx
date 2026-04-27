"use client";

import Link from "next/link";
import PageHero from "@/components/sections/PageHero";

const ACCENT = "#E25312";
const INK = "#10100F";

interface Section {
  title: string;
  content?: string;
  subsections?: { subtitle: string; text: string }[];
}

const SECTIONS: Section[] = [
  {
    title: "About ServiceGrowth.ai",
    content:
      "ServiceGrowth.ai provides AI-powered marketing automation services for service businesses, including: AI lead follow-up, missed-call text-back, review automation, appointment booking, website development, content creation, and paid advertising management.",
  },
  {
    title: "Messaging program",
    subsections: [
      { subtitle: "Program name", text: "ServiceGrowth.ai AI Demo & Business Notifications" },
      { subtitle: "Program description", text: "When you submit your information through our demo form or onboarding process, you may receive automated AI-generated text messages (SMS/MMS) and emails demonstrating our automation system or related to the services you requested." },
      { subtitle: "Message frequency", text: "Message frequency varies. Demo submissions trigger a one-time message. Active service clients may receive recurring messages based on their automation configuration. You will not receive more than 10 messages per month unless otherwise agreed upon." },
      { subtitle: "Message & data rates", text: "Message and data rates may apply. ServiceGrowth.ai is not responsible for any charges from your wireless carrier." },
      { subtitle: "Opt-in", text: "By submitting your phone number through any form on servicegrowth.ai, you expressly consent to receive automated text messages from ServiceGrowth.ai at the number provided. Consent is not a condition of purchase." },
      { subtitle: "Opt-out", text: "You can opt out at any time by replying STOP to any message. After opting out, you will receive a final confirmation message and no further texts will be sent. You may also email hello@servicegrowth.ai to request removal." },
      { subtitle: "Help", text: "For help or support, reply HELP to any message or contact us at hello@servicegrowth.ai." },
      { subtitle: "Supported carriers", text: "Messages are sent via major US carriers including AT&T, T-Mobile, Verizon, and others. Carrier support may vary." },
    ],
  },
  { title: "Email communications", content: "By providing your email address, you consent to receiving automated emails from ServiceGrowth.ai, including demo responses, service communications, and marketing updates. You can unsubscribe from marketing emails at any time by clicking the unsubscribe link in any email or by contacting hello@servicegrowth.ai." },
  { title: "Marketing & advertising services", content: "If you engage ServiceGrowth.ai for advertising management (Facebook Ads, Google Ads, etc.), you acknowledge that: (a) Ad performance results are not guaranteed; (b) Ad spend is separate from our service fees and paid directly to the ad platform; (c) We manage campaigns in good faith to optimize results but cannot guarantee specific outcomes; (d) Any testimonials or case studies shown on our site represent individual results and may not be typical; (e) You are responsible for ensuring your business is properly licensed and that advertised services comply with local regulations." },
  { title: "AI-generated content", content: "ServiceGrowth.ai uses artificial intelligence to generate messages, emails, content, and analysis. AI-generated content is provided for informational and marketing purposes only and does not constitute professional financial, legal, medical, or business advice. AI responses may occasionally contain inaccuracies." },
  { title: "Data collection & use", content: "We collect information you provide through our forms including: name, email, phone number, business name, industry, and other business details. We do not sell, rent, or share your personal information with third parties for their marketing purposes. For full details, see our Privacy Policy." },
  { title: "Intellectual property", content: "All content on servicegrowth.ai, including text, graphics, logos, designs, and software, is the property of ServiceGrowth.ai and protected by applicable intellectual property laws. Custom websites, content, and materials created for clients become the client's property upon full payment, unless otherwise specified in a separate agreement." },
  { title: "Service guarantee", content: "ServiceGrowth.ai offers a results guarantee: 15% more booked jobs within 60 days or your money back, subject to terms outlined in your individual service agreement. This guarantee applies only to qualifying service packages and requires active participation from the client." },
  { title: "No long-term contracts", content: "Unless otherwise agreed in writing, all ServiceGrowth.ai services are month-to-month. You may cancel at any time with 30 days written notice. Prepaid amounts for unused services may be refunded at our discretion." },
  { title: "Limitation of liability", content: "ServiceGrowth.ai is not responsible for any business decisions made based on our AI analysis, marketing recommendations, or advertising results. Our total liability for any claim arising from our services shall not exceed the total fees paid by you in the three (3) months preceding the claim." },
  { title: "Modification of terms", content: "ServiceGrowth.ai reserves the right to update these Terms at any time. Changes will be posted on this page with an updated \"Last Modified\" date. Continued use of our services after changes constitutes acceptance of the revised terms." },
  { title: "Contact", content: "For questions about these Terms, our messaging program, or to exercise your data rights, contact us at: hello@servicegrowth.ai" },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal · Terms"
        headlineLead="Terms &"
        headlineAccent="conditions."
        subhead="The rules of the road for using ServiceGrowth.ai. Last updated March 9, 2026."
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
            By accessing or using ServiceGrowth.ai (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;), you agree to be bound by these Terms &amp; Conditions. If you do not agree, please discontinue use of our services.
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
                href="/privacy"
                className="underline hover:no-underline"
                style={{ color: ACCENT, fontWeight: 600 }}
              >
                Privacy Policy
              </Link>{" "}
              for details on how we handle your data.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

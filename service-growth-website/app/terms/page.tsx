"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText } from "lucide-react";

const sections = [
  {
    title: "1. About ServiceGrowth.ai",
    content:
      "ServiceGrowth.ai provides AI-powered marketing automation services for service businesses, including but not limited to: AI lead follow-up, missed call text-back, review automation, appointment booking, website development, content creation, and paid advertising management.",
  },
  {
    title: "2. Messaging Program Terms",
    subsections: [
      {
        subtitle: "Program Name",
        text: "ServiceGrowth.ai AI Demo & Business Notifications",
      },
      {
        subtitle: "Program Description",
        text: "When you submit your information through our demo form or onboarding process, you may receive automated AI-generated text messages (SMS/MMS) and emails demonstrating our automation system or related to the services you requested. Messages may include demo responses, appointment confirmations, lead notifications, and service updates.",
      },
      {
        subtitle: "Message Frequency",
        text: "Message frequency varies. Demo submissions trigger a one-time message. Active service clients may receive recurring messages based on their automation configuration. You will not receive more than 10 messages per month unless otherwise agreed upon.",
      },
      {
        subtitle: "Message & Data Rates",
        text: "Message and data rates may apply. ServiceGrowth.ai is not responsible for any charges from your wireless carrier.",
      },
      {
        subtitle: "Opt-In",
        text: "By submitting your phone number through any form on servicegrowth.ai, you expressly consent to receive automated text messages from ServiceGrowth.ai at the number provided. Consent is not a condition of purchase.",
      },
      {
        subtitle: "Opt-Out",
        text: 'You can opt out at any time by replying **STOP** to any message. After opting out, you will receive a final confirmation message and no further texts will be sent. You may also email hello@servicegrowth.ai to request removal.',
      },
      {
        subtitle: "Help",
        text: 'For help or support, reply **HELP** to any message or contact us at hello@servicegrowth.ai.',
      },
      {
        subtitle: "Supported Carriers",
        text: "Messages are sent via major US carriers including AT&T, T-Mobile, Verizon, and others. Carrier support may vary.",
      },
    ],
  },
  {
    title: "3. Email Communications",
    content:
      "By providing your email address, you consent to receiving automated emails from ServiceGrowth.ai, including demo responses, service communications, and marketing updates. You can unsubscribe from marketing emails at any time by clicking the unsubscribe link in any email or by contacting hello@servicegrowth.ai.",
  },
  {
    title: "4. Marketing & Advertising Services",
    content:
      "If you engage ServiceGrowth.ai for advertising management (Facebook Ads, Google Ads, etc.), you acknowledge that: (a) Ad performance results are not guaranteed; (b) Ad spend is separate from our service fees and paid directly to the ad platform; (c) We manage campaigns in good faith to optimize results but cannot guarantee specific outcomes; (d) Any testimonials or case studies shown on our site represent individual results and may not be typical; (e) You are responsible for ensuring your business is properly licensed and that advertised services comply with local regulations.",
  },
  {
    title: "5. AI-Generated Content Disclaimer",
    content:
      "ServiceGrowth.ai uses artificial intelligence to generate messages, emails, content, and analysis. AI-generated content is provided for informational and marketing purposes only and does not constitute professional financial, legal, medical, or business advice. AI responses may occasionally contain inaccuracies. All AI-generated communications are reviewed and governed by our automated systems.",
  },
  {
    title: "6. Data Collection & Use",
    content:
      "We collect information you provide through our forms including: name, email, phone number, business name, industry, and other business details. This data is used to: deliver our services, send communications you consented to, improve our products, and contact you about relevant offers. We do not sell, rent, or share your personal information with third parties for their marketing purposes. For full details, see our Privacy Policy.",
  },
  {
    title: "7. Intellectual Property",
    content:
      "All content on servicegrowth.ai, including text, graphics, logos, designs, and software, is the property of ServiceGrowth.ai and protected by applicable intellectual property laws. Custom websites, content, and materials created for clients become the client's property upon full payment, unless otherwise specified in a separate agreement.",
  },
  {
    title: "8. Service Guarantee",
    content:
      "ServiceGrowth.ai offers a results guarantee: 15% more booked jobs within 60 days or your money back, subject to terms outlined in your individual service agreement. This guarantee applies only to qualifying service packages and requires active participation from the client.",
  },
  {
    title: "9. No Long-Term Contracts",
    content:
      "Unless otherwise agreed in writing, all ServiceGrowth.ai services are month-to-month. You may cancel at any time with 30 days written notice. Prepaid amounts for unused services may be refunded at our discretion.",
  },
  {
    title: "10. Limitation of Liability",
    content:
      "ServiceGrowth.ai is not responsible for any business decisions made based on our AI analysis, marketing recommendations, or advertising results. Our total liability for any claim arising from our services shall not exceed the total fees paid by you in the three (3) months preceding the claim.",
  },
  {
    title: "11. Modification of Terms",
    content:
      'ServiceGrowth.ai reserves the right to update these Terms at any time. Changes will be posted on this page with an updated "Last Modified" date. Continued use of our services after changes constitutes acceptance of the revised terms.',
  },
  {
    title: "12. Contact Information",
    content:
      "For questions about these Terms, our messaging program, or to exercise your data rights, contact us at: hello@servicegrowth.ai",
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero — section-dark */}
      <section className="section-dark relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-6"
            style={{
              border: "1px solid rgba(194,112,58,0.25)",
              backgroundColor: "rgba(194,112,58,0.08)",
              color: "#B8B3AA",
            }}
          >
            <FileText className="w-4 h-4" style={{ color: "#C2703A" }} />
            Legal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
            style={{ color: "#F5F0E8" }}
          >
            Terms &{" "}
            <span className="italic" style={{ color: "#C2703A" }}>Conditions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#B8B3AA" }}
          >
            Please read these terms carefully before using our services.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm mt-4"
            style={{ color: "#7A766E" }}
          >
            Last Updated: March 9, 2026
          </motion.p>
        </div>
      </section>

      {/* Content — cream body */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F2EDE5" }}>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {sections.map((section, i) => (
              <div
                key={i}
                className="rounded-xl p-6 md:p-8"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #E5DFD6",
                }}
              >
                <h2 className="text-lg font-semibold mb-3" style={{ color: "#1A1A18" }}>
                  {section.title}
                </h2>
                {section.content && (
                  <p className="leading-relaxed text-sm" style={{ color: "#4A4A45" }}>
                    {section.content}
                  </p>
                )}
                {section.subsections && (
                  <div className="space-y-4 mt-2">
                    {section.subsections.map((sub, j) => (
                      <div key={j}>
                        <h3 className="text-sm font-medium mb-1" style={{ color: "#A85C30" }}>
                          {sub.subtitle}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#4A4A45" }}>
                          {sub.text.replace(/\*\*(.*?)\*\*/g, "$1")}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Link to Privacy */}
          <div
            className="mt-12 p-6 rounded-xl text-center"
            style={{
              backgroundColor: "rgba(194,112,58,0.04)",
              border: "1px solid rgba(194,112,58,0.15)",
            }}
          >
            <p className="text-sm" style={{ color: "#4A4A45" }}>
              See also our{" "}
              <Link href="/privacy" className="underline hover:no-underline" style={{ color: "#A85C30" }}>
                Privacy Policy
              </Link>{" "}
              for details on how we handle your personal data.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

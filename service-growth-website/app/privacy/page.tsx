"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield } from "lucide-react";

interface Section {
  title: string;
  content?: string;
  items?: string[];
  subsections?: { subtitle: string; text: string }[];
}

const sections: Section[] = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you voluntarily provide through our website forms, including: full name, email address, phone number, business name, business type/industry, location, and other business details. We may also collect information from publicly available business directories, social media profiles, and other public sources for the purpose of business-to-business outreach.",
  },
  {
    title: "2. How We Use Your Information",
    items: [
      "Deliver and manage our AI-powered marketing services",
      "Send automated AI-generated text messages (SMS/MMS) and emails in response to demo requests or service inquiries",
      "Send service-related communications including appointment reminders, lead notifications, and status updates",
      "Conduct business-to-business outreach to local service businesses via email, phone, or text message to introduce our services",
      "Manage and optimize advertising campaigns on platforms such as Facebook, Instagram, and Google on your behalf",
      "Improve our products, services, and customer experience",
      "Comply with legal obligations and enforce our terms",
    ],
  },
  {
    title: "3. Text Messaging (SMS/MMS) Policy",
    subsections: [
      {
        subtitle: "Consent",
        text: "By providing your phone number through any form on servicegrowth.ai, you expressly consent to receive automated text messages from ServiceGrowth.ai. For business-to-business communications, we may contact business phone numbers listed in public directories or business profiles to introduce our services, in compliance with applicable laws.",
      },
      {
        subtitle: "Message Types",
        text: "Messages may include: AI demo responses, service notifications, appointment reminders, lead alerts, promotional offers, and business-to-business outreach communications.",
      },
      {
        subtitle: "Frequency",
        text: "Message frequency varies by service. Demo requests receive a one-time message. Active clients receive messages based on their service configuration. Business outreach is limited and respectful of your time.",
      },
      {
        subtitle: "Opt-Out",
        text: "Reply STOP to any message to unsubscribe. You will receive a confirmation and no further messages will be sent. You may also email hello@servicegrowth.ai to opt out.",
      },
      {
        subtitle: "Costs",
        text: "Message and data rates may apply depending on your carrier and plan. ServiceGrowth.ai is not responsible for carrier charges.",
      },
      {
        subtitle: "Help",
        text: "Reply HELP to any message for assistance, or contact hello@servicegrowth.ai.",
      },
    ],
  },
  {
    title: "4. Email Communications",
    content:
      "We send emails for service delivery, transactional notifications, and business-to-business outreach. Marketing and promotional emails include an unsubscribe link in every message. Business-to-business outreach emails are sent in compliance with the CAN-SPAM Act and include our physical address, clear sender identification, and opt-out instructions. You can unsubscribe from any email by clicking the unsubscribe link or emailing hello@servicegrowth.ai.",
  },
  {
    title: "5. Business-to-Business Outreach",
    content:
      "ServiceGrowth.ai may contact local service businesses via email, phone, or text message to introduce our services. This outreach is conducted on a business-to-business basis using publicly available business contact information from sources such as Google Business Profiles, business directories, social media business pages, and industry listings. We respect all opt-out requests promptly and maintain a suppression list of businesses that have requested not to be contacted.",
  },
  {
    title: "6. Advertising & Third-Party Platforms",
    content:
      "When managing advertising campaigns on your behalf, we may share necessary business information with advertising platforms (Meta/Facebook, Google, etc.) as required to run campaigns. We use tracking pixels and analytics tools to measure ad performance. We do not sell your personal information to advertisers or third parties. Any data shared with ad platforms is governed by those platforms\u2019 respective privacy policies.",
  },
  {
    title: "7. AI-Generated Content",
    content:
      "Our services use artificial intelligence to generate text messages, emails, content, and business analysis. AI-generated communications are automated and may be sent without human review. AI outputs are for informational and marketing purposes only and do not constitute professional advice. We continuously monitor our AI systems to ensure quality and accuracy.",
  },
  {
    title: "8. Data Sharing",
    items: [
      "We do NOT sell, rent, or trade your personal information to third parties for their marketing purposes",
      "We may share data with service providers who help us operate our business (email delivery, SMS delivery, hosting, analytics) under strict confidentiality agreements",
      "We may share data with advertising platforms when managing campaigns on your behalf, as authorized by you",
      "We may disclose information when required by law, legal process, or to protect our rights",
    ],
  },
  {
    title: "9. Data Security",
    content:
      "We implement industry-standard security measures to protect your data, including encrypted data transmission (SSL/TLS), secure data storage, access controls, and regular security reviews. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "10. Data Retention",
    content:
      "We retain your information for as long as necessary to provide our services and fulfill the purposes described in this policy. If you request deletion of your data, we will remove it within 30 days, except where retention is required by law. Business-to-business outreach records and opt-out preferences are maintained indefinitely to honor your communication preferences.",
  },
  {
    title: "11. Your Rights",
    items: [
      "Request access to the personal information we hold about you",
      "Request correction of inaccurate information",
      "Request deletion of your personal information",
      "Opt out of marketing communications at any time",
      "Opt out of text messages by replying STOP",
      "Request to be added to our do-not-contact list for business outreach",
    ],
  },
  {
    title: "12. Cookies & Analytics",
    content:
      "Our website uses cookies and similar technologies to improve your experience, analyze traffic, and support our marketing efforts. This includes first-party analytics, advertising pixels (Facebook Pixel, Google Analytics), and performance cookies. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "13. Children\u2019s Privacy",
    content:
      "Our services are designed for businesses and business professionals. We do not knowingly collect personal information from individuals under the age of 18. If we become aware that we have collected data from a minor, we will delete it promptly.",
  },
  {
    title: "14. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated \u201cLast Modified\u201d date. We encourage you to review this policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.",
  },
  {
    title: "15. Contact Us",
    content:
      "For questions about this Privacy Policy, to exercise your data rights, or to opt out of communications, contact us at: hello@servicegrowth.ai",
  },
];

export default function PrivacyPage() {
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
              border: "1px solid rgba(255, 106, 0,0.25)",
              backgroundColor: "rgba(255, 106, 0,0.08)",
              color: "#B8B3AA",
            }}
          >
            <Shield className="w-4 h-4" style={{ color: "#FF6A00" }} />
            Legal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
            style={{ color: "#FCFFD5" }}
          >
            Privacy{" "}
            <span className="italic" style={{ color: "#FF6A00" }}>Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#B8B3AA" }}
          >
            How we collect, use, and protect your information.
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
      <section className="py-20 px-6" style={{ backgroundColor: "#FCFFD5" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-12 leading-relaxed" style={{ color: "#4A4A45" }}>
            ServiceGrowth.ai (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) is committed to
            protecting your privacy. This policy explains how we collect, use, and
            safeguard your information when you visit our website, use our services, or
            receive communications from us.
          </p>

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
                <h2 className="text-lg font-semibold mb-3" style={{ color: "#0F0E10" }}>
                  {section.title}
                </h2>
                {section.content && (
                  <p className="leading-relaxed text-sm" style={{ color: "#4A4A45" }}>
                    {section.content}
                  </p>
                )}
                {section.items && (
                  <ul className="space-y-2 mt-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "#4A4A45" }}>
                        <span className="mt-1 shrink-0" style={{ color: "#FF6A00" }}>&bull;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.subsections && (
                  <div className="space-y-4 mt-2">
                    {section.subsections.map((sub, j) => (
                      <div key={j}>
                        <h3 className="text-sm font-medium mb-1" style={{ color: "#D45800" }}>
                          {sub.subtitle}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#4A4A45" }}>
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Link to Terms */}
          <div
            className="mt-12 p-6 rounded-xl text-center"
            style={{
              backgroundColor: "rgba(255, 106, 0,0.04)",
              border: "1px solid rgba(255, 106, 0,0.15)",
            }}
          >
            <p className="text-sm" style={{ color: "#4A4A45" }}>
              See also our{" "}
              <Link href="/terms" className="underline hover:no-underline" style={{ color: "#D45800" }}>
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

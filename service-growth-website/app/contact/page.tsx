"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Clock, Shield, Zap, Calendar } from "lucide-react";

const trustSignals = [
  { icon: Clock, text: "Live in 14 days" },
  { icon: Shield, text: "No long-term contracts" },
  { icon: Zap, text: "Results guaranteed" },
];

const callExpectations = [
  "We'll learn about your business and current challenges",
  "We'll identify exactly where you're losing leads",
  "We'll show you what we'd build to fix it",
  "You decide if it makes sense—no pressure",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero - Dark charcoal */}
      <section className="section-dark relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[100px] pointer-events-none bg-[rgba(194,112,58,0.1)]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(245,240,232,0.1)] bg-[rgba(245,240,232,0.05)] text-sm text-[#B8B3AA] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#C2703A] animate-pulse" />
            Free Strategy Call
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-[#F5F0E8] mb-6"
          >
            Let&apos;s See If
            <br />
            <span className="italic text-[#C2703A]">We Can Help.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#B8B3AA] max-w-2xl mx-auto"
          >
            25-minute call. No pitch. We&apos;ll tell you exactly where you&apos;re
            losing leads—whether you hire us or not.
          </motion.p>
        </div>
      </section>

      {/* Main Content - Cream background */}
      <SectionWrapper className="py-20 px-6 bg-[#F2EDE5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4 mb-10">
                {trustSignals.map((signal, i) => (
                  <div
                    key={i}
                    className="badge-glass-cream flex items-center gap-2 px-4 py-2 rounded-full"
                  >
                    <signal.icon className="w-4 h-4 text-[#A85C30]" />
                    <span className="text-sm text-[#4A4A45]">{signal.text}</span>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="card-glass-cream p-8">
                <h3 className="text-xl text-[#1A1A18] font-bold mb-6 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#A85C30]" />
                  What to Expect on the Call
                </h3>
                <ol className="space-y-4">
                  {callExpectations.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-[rgba(194,112,58,0.08)] border border-[rgba(194,112,58,0.25)] flex items-center justify-center flex-shrink-0 text-[#A85C30] font-semibold text-sm">
                        {i + 1}
                      </span>
                      <span className="text-[#4A4A45] pt-1">{item}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 pt-6 border-t border-[rgba(0,0,0,0.08)]">
                  <p className="text-[#7A766E] text-sm">
                    This is a discovery call, not a sales call. We&apos;ll give you
                    actionable insights you can use—whether you work with us or not.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { stat: "500+", label: "Calls Booked" },
                  { stat: "25min", label: "Avg Call Time" },
                  { stat: "100%", label: "Free" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-semibold text-[#A85C30]">{item.stat}</div>
                    <div className="text-xs text-[#7A766E]">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Calendar Embed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-glass-cream overflow-hidden"
            >
              <div className="p-6 border-b border-[rgba(0,0,0,0.08)]">
                <h2 className="text-2xl text-[#1A1A18] font-bold">
                  Book Your Free Audit
                </h2>
                <p className="text-[#7A766E] text-sm mt-2">
                  Select a time that works for you
                </p>
              </div>

              {/* Calendly Inline Widget */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/servicegrowth-info/30min?hide_gdpr_banner=1&background_color=F2EDE5&text_color=1A1A18&primary_color=C2703A"
                style={{ minWidth: "320px", height: "700px" }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
              />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Alternative Contact - Cream background */}
      <SectionWrapper className="py-16 px-6 bg-[#F2EDE5]">
        <div className="max-w-4xl mx-auto">
          <div className="card-dark-on-cream rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-[#F5F0E8] mb-4">
              Prefer to Reach Out Directly?
            </h2>
            <p className="text-[#B8B3AA] mb-6">
              No problem. Send us an email or give us a call.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:hello@servicegrowth.ai"
                className="inline-flex items-center gap-2 text-[#C2703A] hover:text-[#D4834F] hover:underline transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@servicegrowth.ai
              </a>
              <span className="hidden sm:inline text-[rgba(245,240,232,0.2)]">|</span>
              <a
                href="tel:+19044542240"
                className="inline-flex items-center gap-2 text-[#C2703A] hover:text-[#D4834F] hover:underline transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (904) 454-2240
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

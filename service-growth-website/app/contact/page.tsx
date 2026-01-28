"use client";

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
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-6 gradient-hero overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-text-body mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Free Strategy Call
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif text-text-headline mb-6"
          >
            Let&apos;s See If
            <br />
            <span className="italic text-accent">We Can Help.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-text-body max-w-2xl mx-auto"
          >
            15-minute call. No pitch. We&apos;ll tell you exactly where you&apos;re
            losing leads—whether you hire us or not.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <SectionWrapper className="py-20 px-6">
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
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
                  >
                    <signal.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm text-text-body">{signal.text}</span>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="card-embossed p-8">
                <h3 className="text-xl text-text-headline mb-6 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-accent" />
                  What to Expect on the Call
                </h3>
                <ol className="space-y-4">
                  {callExpectations.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 text-accent font-semibold text-sm">
                        {i + 1}
                      </span>
                      <span className="text-text-body pt-1">{item}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-text-muted text-sm">
                    This is a discovery call, not a sales call. We&apos;ll give you
                    actionable insights you can use—whether you work with us or not.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { stat: "500+", label: "Calls Booked" },
                  { stat: "15min", label: "Avg Call Time" },
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
                    <div className="text-2xl font-semibold text-accent">{item.stat}</div>
                    <div className="text-xs text-text-muted">{item.label}</div>
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
              className="card-embossed overflow-hidden"
            >
              <div className="p-6 border-b border-white/10">
                <h2 className="text-2xl text-text-headline font-serif">
                  Book Your Free Audit
                </h2>
                <p className="text-text-muted text-sm mt-2">
                  Select a time that works for you
                </p>
              </div>

              {/* Calendly Embed Placeholder */}
              <div className="bg-[#0a0a0a]">
                {/* Replace this div with actual Calendly embed */}
                {/*
                  To add Calendly, replace the placeholder below with:
                  <iframe
                    src="https://calendly.com/YOUR-LINK"
                    width="100%"
                    height="700"
                    frameBorder="0"
                  />
                */}
                <div className="h-[600px] flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
                    <Calendar className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl text-text-headline mb-3">
                    Calendar Loading...
                  </h3>
                  <p className="text-text-muted text-sm max-w-xs mb-6">
                    If the calendar doesn&apos;t load, you can book directly at our
                    scheduling page.
                  </p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-semibold rounded-full hover:bg-accent/90 transition-colors"
                  >
                    Open Calendar
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Alternative Contact */}
      <SectionWrapper className="py-16 px-6 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-12 text-center border border-accent/20"
            style={{
              background: "rgba(42, 232, 253, 0.03)",
              boxShadow: "0 0 60px rgba(42, 232, 253, 0.1)",
            }}
          >
            <h2 className="text-2xl font-serif text-text-headline mb-4">
              Prefer to Reach Out Directly?
            </h2>
            <p className="text-text-body mb-6">
              No problem. Send us an email or give us a call.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:hello@servicegrowth.ai"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@servicegrowth.ai
              </a>
              <span className="hidden sm:inline text-white/20">|</span>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";

const steps = [
  {
    step: "1",
    badge: "25 minutes",
    title: "Discovery Call",
    description: "We learn your business and identify where you're losing leads",
  },
  {
    step: "2",
    badge: "Day 1-3",
    title: "Custom Plan",
    description: "We map out exactly what to build for you",
  },
  {
    step: "3",
    badge: "Day 4-10",
    title: "Build & Configure",
    description: "We build your AI systems (you do almost nothing)",
  },
  {
    step: "4",
    badge: "Day 11-13",
    title: "Test & Train",
    description: "We test everything and train your team if needed",
  },
  {
    step: "5",
    badge: "Day 14",
    title: "Go Live",
    description: "Your system launches in 14 days or less",
  },
  {
    step: "6",
    badge: "Ongoing",
    title: "Optimize",
    description: "We monitor, tweak, and improve based on real data",
  },
];

const whatYouGet = [
  { stat: "24/7", title: "Lead Response", description: "AI captures and qualifies every lead—even at 2am on a Sunday." },
  { stat: "<60s", title: "Response Time", description: "Every lead gets a response in under 60 seconds." },
  { stat: "0", title: "Missed Calls", description: "Voice bot + missed call text-back. Nothing falls through." },
];

const yourTime = [
  { time: "25 min", task: "Discovery call" },
  { time: "30 min", task: "Fill out onboarding questionnaire" },
  { time: "30 min", task: "Review & approve the build" },
  { time: "30 min", task: "Team training (optional)" },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero — section-dark */}
      <section className="section-dark relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C2703A]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif font-bold text-[#F5F0E8] mb-6"
          >
            From Signed to Live
            <br />
            <span className="italic text-[#C2703A]">in 14 Days.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[#B8B3AA] max-w-2xl mx-auto"
          >
            We handle everything. You fill out a questionnaire, we build your systems,
            and you&apos;re live in two weeks. Total time investment from you: about 2 hours.
          </motion.p>
        </div>
      </section>

      {/* Steps — cream background */}
      <SectionWrapper className="py-20 px-6 bg-[#F2EDE5]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-[#C2703A]/10 border border-[#C2703A]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#A85C30] font-semibold text-lg">{item.step}</span>
                </div>
                <div className="card-dark-on-cream p-6 flex-1">
                  <div className="text-xs text-[#C2703A] mb-2">{item.badge}</div>
                  <h3 className="text-lg font-medium text-[#F5F0E8] mb-2">{item.title}</h3>
                  <p className="text-[#B8B3AA]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What Gets Built — dark section */}
      <SectionWrapper className="section-dark py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F5F0E8] mb-12 text-center">
            What Gets Built For You
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whatYouGet.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-embossed p-6 text-center"
              >
                <div className="text-4xl font-semibold text-[#C2703A] mb-4">{item.stat}</div>
                <h3 className="text-lg font-medium text-[#F5F0E8] mb-2">{item.title}</h3>
                <p className="text-sm text-[#B8B3AA]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Time Investment — cream background */}
      <SectionWrapper className="py-20 px-6 bg-[#F2EDE5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A18] mb-12 text-center">
            Your Time Investment
          </h2>
          <div className="card-glass-cream p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#1A1A18] mb-6">What You Do</h3>
                <ul className="space-y-4">
                  {yourTime.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#4A4A45]">
                      <span className="text-[#A85C30] font-mono text-sm">{item.time}</span>
                      <span>{item.task}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-[#1A1A18]/10">
                  <div className="text-[#7A766E] text-sm">Total time from you</div>
                  <div className="text-3xl text-[#A85C30] font-bold">~2 hours</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1A1A18] mb-6">What We Do</h3>
                <ul className="space-y-3">
                  {[
                    "Map your customer journey",
                    "Build AI lead capture & qualification",
                    "Configure voice bot & call handling",
                    "Write email/SMS sequences",
                    "Set up review automation",
                    "Integrate with your CRM",
                    "Test everything end-to-end",
                    "Ongoing optimization & support",
                  ].map((task, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#4A4A45]">
                      <svg className="w-5 h-5 text-[#A85C30] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA — dark section */}
      <SectionWrapper className="section-dark py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F5F0E8] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-[#B8B3AA] text-lg mb-8">
            Book your free 25-minute discovery call. We&apos;ll map out exactly what
            we&apos;d build for you—and you can decide if it makes sense.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book Your Discovery Call
          </Button>
          <p className="text-[#7A766E] text-sm mt-4">
            No commitment. No hard sell. Just clarity.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}

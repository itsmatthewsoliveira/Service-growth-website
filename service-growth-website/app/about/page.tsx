"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";

const proofPoints = [
  { stat: "$100K", label: "Profit in 90 days" },
  { stat: "$30K/mo", label: "Revenue" },
  { stat: "$200K", label: "Invoiced" },
];

const whyDifferent = [
  {
    number: "1",
    title: "We're Not AI Grifters",
    description:
      'The market is flooded with "experts" who took a 2-hour course and resell generic tools. We actually built and used these systems to scale our own business.',
  },
  {
    number: "2",
    title: "We Know Your World",
    description:
      "We've been on the roof when the phone rings. We know what it's like to lose a job because you couldn't call back fast enough.",
  },
  {
    number: "3",
    title: "Proven Before Sold",
    description:
      "We don't offer anything we haven't tested on ourselves first. Every system, every workflow — battle-tested in our own business.",
  },
];

const philosophy = [
  {
    title: "Technology Should Make Life Easier",
    description:
      "Not more complicated. If you need a PhD to use it, we failed. Every system is designed for busy operators.",
  },
  {
    title: "If It Doesn't Book Jobs, It Doesn't Matter",
    description:
      "We don't care about vanity metrics. We care about one thing: did you book more jobs this month than last?",
  },
  {
    title: "Educate First, Sell Second",
    description:
      "We'll tell you exactly where you're losing leads before you ever pay us. No hard sell, no BS.",
  },
  {
    title: "We Win When You Win",
    description:
      "That's why we guarantee results. If you don't see more booked jobs in 60 days, we work for free.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — dark charcoal */}
      <section className="section-dark relative pt-24 pb-16 px-6 gradient-hero overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C2703A]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F5F0E8]/10 bg-[#F5F0E8]/5 text-sm text-[#B8B3AA] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#C2703A] animate-pulse" />
            Our Story
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-extrabold text-[#F5F0E8] mb-6 tracking-tight leading-none"
          >
            We Built This
            <br />
            <span className="italic text-[#C2703A]">For Ourselves First</span>
          </motion.h1>
        </div>
      </section>

      {/* Story Section — cream (default) */}
      <SectionWrapper className="section-cream py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#1A1A18] mb-6 tracking-tight">
                The Story
              </h2>
              <div className="space-y-6 text-[#4A4A45] leading-relaxed">
                <p>
                  I&apos;m Matthews — founder of ServiceGrowth.ai.
                </p>
                <p>
                  Before this, I ran service businesses — a high-end construction company
                  and a luxury outdoor design company in Jacksonville, Florida.
                </p>
                <p>
                  I know what it&apos;s like to be on a job site, phone buzzing, knowing I&apos;m losing
                  leads because I can&apos;t answer.
                </p>
                <p>
                  So I built systems to fix it.
                </p>
                <p className="text-[#1A1A18] font-medium">
                  The result? $100K in profit in 90 days. $30K/month revenue. $200K invoiced.
                </p>
                <p>
                  Not theory. Not a course I watched. Real results from a real business.
                </p>
                <p>
                  I started ServiceGrowth.ai because I saw too many service business owners getting
                  burned — by agencies that overpromise and underdeliver, by kids who watched a 2-hour
                  YouTube course and now call themselves &quot;AI experts.&quot;
                </p>
                <p className="text-[#1A1A18] font-semibold">
                  That&apos;s not us. We only sell what we&apos;ve built and proven ourselves.
                </p>
              </div>
            </div>
            <div className="card-dark-on-cream p-8 text-center">
              <div className="space-y-6">
                {proofPoints.map((point, i) => (
                  <motion.div
                    key={point.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="text-5xl md:text-6xl font-heading font-extrabold text-[#C2703A] mb-2 tracking-tight">
                      {point.stat}
                    </div>
                    <div className="text-[#7A766E] text-sm">{point.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Different — dark charcoal */}
      <SectionWrapper className="section-dark py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#F5F0E8] mb-12 tracking-tight">
            Why We&apos;re Different
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyDifferent.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 bg-[#C2703A]/10 border border-[#C2703A]/30 rounded-full flex items-center justify-center">
                  <span className="text-[#C2703A] font-semibold text-xl">{item.number}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-[#F5F0E8]">{item.title}</h3>
                <p className="text-[#7A766E] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Philosophy — cream */}
      <SectionWrapper className="section-cream py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#1A1A18] mb-12 tracking-tight">
            Our Philosophy
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {philosophy.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-glass-cream p-8"
              >
                <h3 className="text-xl font-heading font-bold text-[#1A1A18] mb-4">{item.title}</h3>
                <p className="text-[#7A766E] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Who This Is For — dark charcoal */}
      <SectionWrapper className="section-dark py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-extrabold text-[#F5F0E8] mb-8 tracking-tight">
                This Is For You If...
              </h2>
              <ul className="space-y-4">
                {[
                  "You're doing $30k+/month and ready to scale",
                  "You're losing leads to missed calls and slow follow-up",
                  "You want to grow without hiring more people",
                  "You're in Home Services, Medical, or Construction",
                  "You value results over promises",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#C2703A] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#B8B3AA]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-heading font-extrabold text-[#F5F0E8] mb-8 tracking-tight">
                This Is NOT For You If...
              </h2>
              <ul className="space-y-4">
                {[
                  "You're just getting started and need leads first",
                  "You're looking for a magic button",
                  "You're not willing to invest in growth",
                  "You want the cheapest option",
                  "You're not ready to change how you operate",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-[#B8B3AA]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA — cream */}
      <SectionWrapper className="section-cream py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#1A1A18] mb-6 tracking-tight">
            Ready to See If We&apos;re a Fit?
          </h2>
          <p className="text-[#4A4A45] text-lg mb-8">
            25-minute call. No pitch. We&apos;ll tell you exactly where you&apos;re losing
            leads — whether you hire us or not.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book a Call
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}

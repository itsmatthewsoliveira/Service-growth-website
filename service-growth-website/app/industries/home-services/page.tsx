"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import { Phone, MessageSquare, Bot, Star, BarChart3, Globe, Clock, Users, TrendingUp, Check, Zap } from "lucide-react";
import Image from "next/image";

const painPoints = [
  {
    icon: Phone,
    title: "Leads Call After Hours",
    description:
      "You're on a job, can't answer. They call the next guy in Google. By the time you call back, they've already hired someone else. Every missed call is a missed paycheck — and it adds up to thousands of dollars a month in lost revenue that you never even see.",
  },
  {
    icon: Clock,
    title: "No Time for Follow-Up",
    description:
      "You send quotes and forget. Meanwhile, the competitor who followed up 3 times wins the job. You're too busy working to do the sales work. The average home service business loses 40% of its quotes simply because nobody follows up consistently.",
  },
  {
    icon: Users,
    title: "Can't Hire Fast Enough",
    description:
      "You need help but can't find good techs. You're turning down work because you can't handle the volume. Growth feels impossible when you're the bottleneck for every phone call, every quote, and every scheduling decision.",
  },
];

const solutions = [
  {
    pain: "Leads call after hours",
    title: "Missed Call Text-Back + Voice Bot",
    description:
      "Every call answered or texted instantly, 24/7. Appointments booked while you're on the roof. AI handles qualification so only serious leads make it to you. Our voice bot sounds natural, answers common questions about pricing and availability, and books the appointment right then and there — no more phone tag.",
    resultLabel: "Result:",
    resultValue: "47 extra jobs",
    resultNote: "booked in first month (avg. client)",
  },
  {
    pain: "No time for follow-up",
    title: "Email/SMS Automation",
    description:
      "Automatic follow-up sequences that nurture every quote until they say yes or no. Day 2 check-in, Day 5 value add, Day 7 urgency. Never forget a follow-up again. Each message is personalized with the homeowner's name, service details, and a direct link to book — making it effortless for them to say yes.",
    resultLabel: "Result:",
    resultValue: "25% → 41%",
    resultNote: "close rate improvement (avg. client)",
  },
  {
    pain: "Can't hire fast enough",
    title: "AI Lead Qualification",
    description:
      "Let AI handle the front-end — answering calls, qualifying leads, booking appointments. Your team focuses on closing and doing the work, not playing phone tag. The AI asks the right questions (service type, address, urgency, budget range) so your estimator shows up prepared and ready to close.",
    resultLabel: "Result:",
    resultValue: "10+ hours",
    resultNote: "saved per week on phone/admin work",
  },
];

const testimonials = [
  {
    quote:
      "We were losing 30+ calls a week to voicemail. First month with the AI system, we booked 47 extra jobs without hiring anyone.",
    author: "Mike R.",
    role: "HVAC Company Owner",
  },
  {
    quote:
      "I used to forget to follow up on quotes. Now it happens automatically. Our close rate went from 25% to 41%.",
    author: "James T.",
    role: "Plumbing Business Owner",
  },
  {
    quote:
      "I spent 2 hours a day on the phone scheduling. Now I spend 20 minutes reviewing what the AI already booked.",
    author: "Carlos M.",
    role: "Roofing Contractor",
  },
];

const features = [
  {
    icon: Phone,
    title: "Missed Call Text-Back",
    description:
      "Instant text when you can't answer. 90% of people prefer texting over voicemail. Your potential customers get an immediate response even when you're elbow-deep in a repair.",
  },
  {
    icon: Bot,
    title: "AI Voice Bot",
    description: "Answers calls 24/7, handles FAQs, books appointments. Sounds natural and friendly. Customers think they're talking to your front desk — not a machine.",
  },
  {
    icon: MessageSquare,
    title: "Email/SMS Automation",
    description: "Automatic follow-up on every quote. Day 2, Day 5, Day 7 sequences that turn maybes into booked jobs. Never let a warm lead go cold again.",
  },
  {
    icon: Star,
    title: "Review Automation",
    description:
      "Automatically request reviews at the perfect moment — right after a successful job. Build your 5-star reputation on Google, Yelp, and Facebook without lifting a finger.",
  },
  {
    icon: BarChart3,
    title: "CRM Integration",
    description: "Works with Jobber, ServiceTitan, Housecall Pro, and more. All your leads, quotes, and follow-ups in one place. No double-entry, no switching between apps.",
  },
  {
    icon: Globe,
    title: "Professional Website",
    description:
      "A conversion-optimized website built specifically for home service businesses. Mobile-first design, click-to-call buttons, instant quote forms, and integrated scheduling.",
  },
];

export default function HomeServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-20 pb-24 px-6" style={{ backgroundColor: "#1A1A18" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
                  style={{
                    border: "1px solid rgba(194, 112, 58, 0.25)",
                    backgroundColor: "rgba(194, 112, 58, 0.08)",
                    color: "#B8B3AA",
                  }}
                >
                  <span className="text-2xl">🏠</span>
                  For HVAC, Plumbing, Roofing, Landscaping & Cleaning
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl leading-[0.9] mb-6"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: "#F5F0E8" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Your Phone Rings.
                <br />
                <span className="italic" style={{ color: "#C2703A" }}>Nobody Answers.</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl leading-relaxed mb-4"
                style={{ color: "#B8B3AA" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                That lead just called your competitor instead. Our AI picks up every time.
              </motion.p>

              <motion.p
                className="text-base md:text-lg max-w-xl leading-relaxed mb-10"
                style={{ color: "#B8B3AA" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                You&apos;re on a job. Phone rings. You can&apos;t answer. They call
                your competitor. Sound familiar? Our AI answers every call, books
                appointments, and follows up automatically — 24/7, 365 days a year.
                No more missed revenue while you&apos;re actually doing the work that pays the bills.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button href="/contact" variant="primary" size="lg">
                  See How Many Leads You&apos;re Losing
                </Button>
                <Button href="/pricing" variant="glass" size="lg">
                  View Pricing
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="/3d-home-services.png"
                alt="Home Services AI"
                className="w-full max-w-md rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <SectionWrapper className="py-24 px-6" style={{ backgroundColor: "#F2EDE5" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>
            Sound Familiar?
          </h2>
          <p className="text-lg mb-12" style={{ color: "#4A4A45" }}>
            Running a home service business means you&apos;re wearing every hat. Here&apos;s what we hear from owners like you every single day — and why most of them are leaving money on the table without even realizing it.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((item, i) => (
              <motion.div
                key={i}
                className="card-embossed p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(168, 92, 48, 0.1)" }}
                >
                  <item.icon className="w-6 h-6" style={{ color: "#A85C30" }} />
                </div>
                <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A4A45" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Solutions */}
      <SectionWrapper className="py-24 px-6" style={{ backgroundColor: "#F2EDE5" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>
            How We Fix It
          </h2>
          <p className="mb-12 text-lg" style={{ color: "#4A4A45" }}>
            AI that works 24/7 so you can focus on the actual work. Each solution is built specifically for the way home service businesses operate — on the road, on the job site, and always busy.
          </p>

          <div className="space-y-8">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                className="card-embossed p-8 grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div>
                  <div className="text-sm font-medium mb-2" style={{ color: "#A85C30" }}>
                    PAIN: {sol.pain}
                  </div>
                  <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>{sol.title}</h3>
                  <p className="leading-relaxed" style={{ color: "#4A4A45" }}>
                    {sol.description}
                  </p>
                </div>
                <div
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: "#EDE8DF", border: "1px solid rgba(122, 118, 110, 0.15)" }}
                >
                  <div className="text-sm mb-2" style={{ color: "#7A766E" }}>
                    {sol.resultLabel}
                  </div>
                  <div className="text-3xl font-bold" style={{ color: "#A85C30" }}>
                    {sol.resultValue}
                  </div>
                  <div className="text-sm" style={{ color: "#7A766E" }}>{sol.resultNote}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Website Mockup Section */}
      <section className="section-dark py-24 px-6" style={{ backgroundColor: "#1A1A18" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm font-medium mb-2" style={{ color: "#C2703A" }}>
                WEBSITES THAT CONVERT
              </div>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}>
                Professional Websites Built for Home Service Businesses
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "#B8B3AA" }}>
                Your website is your digital storefront. We build fast, mobile-optimized websites specifically designed for HVAC, plumbing, roofing, and other home service companies. Every page is engineered to turn visitors into booked appointments — with click-to-call buttons, instant quote forms, service area maps, and trust signals that make homeowners feel confident hiring you.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Mobile-first design — 70% of your leads browse on phones",
                  "Click-to-call buttons on every page for instant contact",
                  "Integrated scheduling and quote request forms",
                  "SEO-optimized to rank in local Google searches",
                  "Before/after galleries that showcase your best work",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: "rgba(194, 112, 58, 0.2)" }}
                    >
                      <Check className="w-3 h-3" style={{ color: "#C2703A" }} />
                    </div>
                    <span style={{ color: "#B8B3AA" }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary">
                See Website Examples →
              </Button>
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: "rgba(242, 237, 229, 0.1)" }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-3 flex items-center gap-2" style={{ backgroundColor: "rgba(242, 237, 229, 0.05)" }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28ca41" }} />
                </div>
                <div className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(242, 237, 229, 0.05)", color: "#7A766E" }}>
                  yourhvaccompany.com
                </div>
              </div>
              <div className="p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(194, 112, 58, 0.08) 0%, rgba(26, 26, 24, 0.4) 100%)" }}>
                <Globe className="w-16 h-16 mx-auto mb-4" style={{ color: "#C2703A" }} />
                <p className="text-lg font-bold mb-2" style={{ color: "#F5F0E8" }}>Custom Home Service Website</p>
                <p className="text-sm" style={{ color: "#B8B3AA" }}>Click-to-call, quote forms, service pages, reviews</p>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {["Service Pages", "Quote Forms", "Reviews"].map((item, i) => (
                    <div key={i} className="p-2 rounded-lg text-xs" style={{ backgroundColor: "rgba(194, 112, 58, 0.1)", color: "#C2703A" }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6" style={{ backgroundColor: "#EDE8DF" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>
            What Home Service Businesses Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="card-embossed p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4" style={{ color: "#C2703A", fill: "#C2703A" }} />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed" style={{ color: "#4A4A45" }}>
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <div className="font-medium" style={{ color: "#1A1A18" }}>{testimonial.author}</div>
                  <div className="text-sm" style={{ color: "#7A766E" }}>{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <SectionWrapper className="py-24 px-6" style={{ backgroundColor: "#F2EDE5" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>
            What You Get
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-12" style={{ color: "#4A4A45" }}>
            Everything you need to capture more leads, close more jobs, and grow your home service business — without hiring more office staff.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="card-embossed p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(168, 92, 48, 0.1)" }}
                >
                  <feature.icon className="w-5 h-5" style={{ color: "#A85C30" }} />
                </div>
                <h3 className="text-lg mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A4A45" }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Form */}
      <section className="py-24 px-6" style={{ backgroundColor: "#F2EDE5" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="rounded-2xl p-8 md:p-12"
            style={{ backgroundColor: "#1A1A18" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}>
                Get Your Free Growth Analysis
              </h2>
              <p style={{ color: "#B8B3AA" }}>
                Find out exactly how many leads you&apos;re losing each month — and get a custom plan to capture them. No obligation, no pressure.
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: "#B8B3AA" }}>Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      backgroundColor: "rgba(242, 237, 229, 0.08)",
                      border: "1px solid rgba(242, 237, 229, 0.15)",
                      color: "#F5F0E8",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: "#B8B3AA" }}>Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      backgroundColor: "rgba(242, 237, 229, 0.08)",
                      border: "1px solid rgba(242, 237, 229, 0.15)",
                      color: "#F5F0E8",
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: "#B8B3AA" }}>Phone</label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{
                    backgroundColor: "rgba(242, 237, 229, 0.08)",
                    border: "1px solid rgba(242, 237, 229, 0.15)",
                    color: "#F5F0E8",
                  }}
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: "#B8B3AA" }}>Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business — what services you offer, how many leads you get per month, and what's not working..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{
                    backgroundColor: "rgba(242, 237, 229, 0.08)",
                    border: "1px solid rgba(242, 237, 229, 0.15)",
                    color: "#F5F0E8",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl text-lg font-bold transition-all hover:opacity-90 cursor-pointer"
                style={{ backgroundColor: "#C2703A", color: "#F5F0E8" }}
              >
                Get Your Free Analysis
              </button>
              <p className="text-center text-xs" style={{ color: "#7A766E" }}>
                No spam. No obligation. Just a clear plan to grow your business.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-dark py-24 px-6"
        style={{ backgroundColor: "#1A1A18", borderTop: "1px solid rgba(242, 237, 229, 0.1)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}>
            Ready to Stop Losing Jobs <span className="italic" style={{ color: "#C2703A" }}>to Voicemail?</span>
          </h2>
          <p className="text-lg mb-8" style={{ color: "#B8B3AA" }}>
            Book a free 15-minute audit. We&apos;ll show you exactly how many
            leads you&apos;re losing — and how to fix it. Most home service businesses
            see results within the first 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get Your Free Audit
            </Button>
            <Button href="/pricing" variant="glass" size="lg">
              See Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

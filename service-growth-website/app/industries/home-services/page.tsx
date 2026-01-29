"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import { Phone, MessageSquare, Bot, Star, BarChart3, Globe, Clock, Users, TrendingUp } from "lucide-react";

const painPoints = [
  {
    icon: Phone,
    title: "Leads Call After Hours",
    description:
      "You're on a job, can't answer. They call the next guy in Google. By the time you call back, they've already hired someone else.",
  },
  {
    icon: Clock,
    title: "No Time for Follow-Up",
    description:
      "You send quotes and forget. Meanwhile, the competitor who followed up 3 times wins the job. You're too busy working to do the sales work.",
  },
  {
    icon: Users,
    title: "Can't Hire Fast Enough",
    description:
      "You need help but can't find good techs. You're turning down work because you can't handle the volume. Growth feels impossible.",
  },
];

const solutions = [
  {
    pain: "Leads call after hours",
    title: "Missed Call Text-Back + Voice Bot",
    description:
      "Every call answered or texted instantly, 24/7. Appointments booked while you're on the roof. AI handles qualification so only serious leads make it to you.",
    resultLabel: "Result:",
    resultValue: "47 extra jobs",
    resultNote: "booked in first month (avg. client)",
  },
  {
    pain: "No time for follow-up",
    title: "Email/SMS Automation",
    description:
      "Automatic follow-up sequences that nurture every quote until they say yes or no. Day 2 check-in, Day 5 value add, Day 7 urgency. Never forget a follow-up again.",
    resultLabel: "Result:",
    resultValue: "25% → 41%",
    resultNote: "close rate improvement (avg. client)",
  },
  {
    pain: "Can't hire fast enough",
    title: "AI Lead Qualification",
    description:
      "Let AI handle the front-end—answering calls, qualifying leads, booking appointments. Your team focuses on closing and doing the work, not playing phone tag.",
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
      "Instant text when you can't answer. 90% of people prefer texting over voicemail.",
  },
  {
    icon: Bot,
    title: "AI Voice Bot",
    description: "Answers calls 24/7, handles FAQs, books appointments. Sounds natural.",
  },
  {
    icon: MessageSquare,
    title: "Email/SMS Automation",
    description: "Automatic follow-up on every quote. Never forget again.",
  },
  {
    icon: Star,
    title: "Review Automation",
    description:
      "Automatically request reviews at the perfect moment. Build your reputation.",
  },
  {
    icon: BarChart3,
    title: "CRM Integration",
    description: "Works with Jobber, ServiceTitan, Housecall Pro, and more.",
  },
  {
    icon: Globe,
    title: "Website (Growth Plan)",
    description:
      "Professional site built to convert, integrated with your automation.",
  },
];

export default function HomeServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-20 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-sm text-text-body mb-8">
              <span className="text-2xl">🏠</span>
              For HVAC, Plumbing, Roofing, Landscaping & Cleaning
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl leading-[0.9] text-text-headline mb-8 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Stop Losing Jobs
            <br />
            <span className="italic text-accent">to Voicemail.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-text-body max-w-3xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            You&apos;re on a job. Phone rings. You can&apos;t answer. They call
            your competitor. Sound familiar? Our AI answers every call, books
            appointments, and follows up automatically—24/7.
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
      </section>

      {/* Pain Points */}
      <SectionWrapper className="py-24 px-6 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-text-headline mb-12 font-serif">
            We Know Your Pain Points
          </h2>
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
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl text-text-headline mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Solutions */}
      <SectionWrapper className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-text-headline mb-4 font-serif">
            How We Fix It
          </h2>
          <p className="text-text-body mb-12 text-lg">
            AI that works 24/7 so you can focus on the actual work.
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
                  <div className="text-accent text-sm font-medium mb-2">
                    PAIN: {sol.pain}
                  </div>
                  <h3 className="text-2xl text-text-headline mb-4 font-serif">{sol.title}</h3>
                  <p className="text-text-body leading-relaxed">
                    {sol.description}
                  </p>
                </div>
                <div className="bg-bg-surface p-6 rounded-xl border border-border">
                  <div className="text-text-muted text-sm mb-2">
                    {sol.resultLabel}
                  </div>
                  <div className="text-3xl text-accent font-bold">
                    {sol.resultValue}
                  </div>
                  <div className="text-text-muted text-sm">{sol.resultNote}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="py-24 px-6 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-text-headline mb-12 text-center font-serif">
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
                    <Star key={star} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-text-body mb-4 text-sm leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <div className="text-text-headline font-medium">{testimonial.author}</div>
                  <div className="text-text-muted text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What's Included */}
      <SectionWrapper className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-text-headline mb-12 text-center font-serif">
            What You Get
          </h2>
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
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg text-text-headline mb-2">{feature.title}</h3>
                <p className="text-text-muted text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-24 px-6 bg-bg-card border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-text-headline mb-6 font-serif">
            Ready to Stop Losing Jobs <span className="italic text-accent">to Voicemail?</span>
          </h2>
          <p className="text-text-body text-lg mb-8">
            Book a free 15-minute audit. We&apos;ll show you exactly how many
            leads you&apos;re losing—and how to fix it.
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
      </SectionWrapper>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";

const features = [
  {
    icon: "🤖",
    title: "AI Lead Capture",
    description: "Instantly capture and qualify every lead—website, social, phone. No more manual entry.",
  },
  {
    icon: "📞",
    title: "Voice Bot",
    description: "AI answers calls 24/7. Books appointments. Handles FAQs. Never misses a lead.",
  },
  {
    icon: "💬",
    title: "SMS/Email Sequences",
    description: "Automated follow-up that nurtures leads until they're ready to buy.",
  },
  {
    icon: "🔄",
    title: "CRM Integration",
    description: "Everything syncs to your existing tools. No double entry. No lost leads.",
  },
];

const pricingTiers = [
  {
    name: "Automation Essentials",
    price: "$997",
    period: "/month",
    description: "For businesses ready to stop losing leads to slow follow-up.",
    features: [
      "Missed call text-back",
      "5 email/SMS sequences",
      "Lead capture forms",
      "Basic CRM integration",
      "Monthly reporting",
    ],
    featured: false,
  },
  {
    name: "Automation Pro",
    price: "$1,997",
    period: "/month",
    description: "For businesses ready to automate their entire lead pipeline.",
    features: [
      "Everything in Essentials",
      "AI lead capture & qualification",
      "Voice bot (AI answers calls)",
      "Unlimited sequences",
      "Review automation",
      "Advanced CRM integration",
      "Bi-weekly strategy calls",
    ],
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Automation Enterprise",
    price: "$3,497",
    period: "/month",
    description: "For businesses with complex workflows and high volume.",
    features: [
      "Everything in Pro",
      "Custom AI workflows",
      "Multi-location support",
      "API integrations",
      "Dedicated account manager",
      "Weekly strategy calls",
      "Priority support",
      "Custom reporting",
    ],
    featured: false,
  },
];

const stats = [
  { value: "<60s", label: "Average Response Time" },
  { value: "0", label: "Missed Calls" },
  { value: "24/7", label: "Lead Capture" },
  { value: "15%+", label: "More Booked Jobs" },
];

export default function AutomationServicePage() {
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
            className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-6"
          >
            Automation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl text-text-headline mb-6"
          >
            Stop Losing Leads
            <br />
            <span className="text-accent italic">to Slow Follow-Up</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-body max-w-2xl mx-auto mb-8"
          >
            Every minute you don't respond, your lead is calling your competitor.
            Our AI responds instantly, 24/7. Never miss another opportunity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              See It In Action
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper className="py-16 px-6 bg-bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl text-accent mb-2">{stat.value}</div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-text-headline text-center mb-12">
            What Gets Automated
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl text-text-headline mb-2">{feature.title}</h3>
                  <p className="text-text-body">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper className="py-20 px-6 bg-bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-text-headline text-center mb-4">
            Automation Pricing
          </h2>
          <p className="text-text-body text-center mb-12 max-w-2xl mx-auto">
            Every plan includes setup, training, and ongoing optimization.
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  tier.featured
                    ? "bg-accent/5 border-2 border-accent/30"
                    : "bg-bg-primary border border-border"
                }`}
                style={tier.featured ? {
                  boxShadow: "0 0 60px rgba(40, 232, 253, 0.15)"
                } : {}}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-bg-primary text-xs font-semibold px-4 py-1 rounded-full">
                    {tier.badge}
                  </div>
                )}

                <h3 className="text-2xl text-text-headline mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl text-text-headline">{tier.price}</span>
                  <span className="text-text-muted">{tier.period}</span>
                </div>
                <p className="text-text-body text-sm mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <svg
                        className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-text-body">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  variant={tier.featured ? "primary" : "glass"}
                  fullWidth
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Guarantee */}
      <SectionWrapper className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-8 md:p-12 text-center border border-accent/20" style={{
            background: "rgba(40, 232, 253, 0.03)",
            boxShadow: "0 0 60px rgba(40, 232, 253, 0.1)"
          }}>
            <h2 className="text-3xl md:text-4xl text-text-headline mb-4">
              The 15% More Jobs Guarantee
            </h2>
            <p className="text-text-body text-lg mb-6">
              If you don't see at least 15% more booked jobs within 60 days, we'll work
              for free until you do—or refund your setup fee entirely.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Book Free Demo
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";

const packages = [
  {
    name: "Starter",
    tagline: "Stop losing leads today",
    price: "$1,497",
    period: "/month",
    description: "For businesses doing $30k-$75k/mo who need the fundamentals working.",
    features: [
      "Missed Call Text-Back",
      "5 Email/SMS Sequences",
      "Lead Capture Forms",
      "CRM Setup & Integration",
      "Monthly Performance Report",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    tagline: "Scale without hiring",
    price: "$2,997",
    period: "/month",
    description: "For businesses doing $75k-$250k/mo ready to grow 30-50%.",
    features: [
      "Everything in Starter",
      "AI Lead Automation (24/7)",
      "Voice Bot (AI answers calls)",
      "Unlimited Sequences",
      "Review Automation",
      "Website Included",
      "Bi-weekly Strategy Calls",
      "Priority Support",
    ],
    cta: "Start Growing",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Dominator",
    tagline: "Own your market",
    price: "$5,997",
    period: "/month",
    description: "For businesses doing $250k+/mo competing for premium jobs.",
    features: [
      "Everything in Growth",
      "Photo Transformation (unlimited)",
      "3D Rendering (2/month)",
      "Image Animation for Social",
      "Custom AI Workflows",
      "Dedicated Account Manager",
      "Weekly Strategy Calls",
      "Competitor Intelligence",
    ],
    cta: "Dominate Now",
    featured: false,
  },
];

const guarantees = [
  {
    icon: "🎯",
    title: "15% More Booked Jobs",
    description: "Guaranteed within 60 days or we work free until you do.",
  },
  {
    icon: "⚡",
    title: "Live in 14 Days",
    description: "From signed to fully operational in two weeks.",
  },
  {
    icon: "🔒",
    title: "No Long-Term Contracts",
    description: "Month-to-month. Cancel anytime. No questions asked.",
  },
];

export default function PackagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-6 gradient-hero overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl text-text-headline mb-6"
          >
            Choose Your
            <br />
            <span className="text-accent italic">Growth Path</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-text-body max-w-2xl mx-auto"
          >
            Simple pricing. Real results. No hidden fees.
            <br />
            Every package includes our 60-day guarantee.
          </motion.p>
        </div>
      </section>

      {/* Packages Grid */}
      <SectionWrapper className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  pkg.featured
                    ? "bg-accent/5 border-2 border-accent/30"
                    : "bg-bg-card border border-border"
                }`}
                style={pkg.featured ? {
                  boxShadow: "0 0 60px rgba(40, 232, 253, 0.15)"
                } : {}}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-bg-primary text-xs font-semibold px-4 py-1 rounded-full">
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl text-text-headline mb-1">{pkg.name}</h3>
                  <p className="text-text-muted text-sm">{pkg.tagline}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl md:text-5xl text-text-headline">{pkg.price}</span>
                  <span className="text-text-muted">{pkg.period}</span>
                </div>

                <p className="text-text-body text-sm mb-8">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, j) => (
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
                  variant={pkg.featured ? "primary" : "glass"}
                  fullWidth
                >
                  {pkg.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Guarantees */}
      <SectionWrapper className="py-20 px-6 bg-bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-text-headline text-center mb-12">
            Every Package Includes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl text-text-headline mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Compare Link */}
      <SectionWrapper className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-body mb-4">
            Need help choosing? See our detailed feature comparison.
          </p>
          <Button href="/pricing" variant="ghost">
            View Full Comparison →
          </Button>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-12 text-center overflow-hidden"
            style={{
              background: "rgba(40, 232, 253, 0.03)",
              border: "1px solid rgba(40, 232, 253, 0.15)",
              boxShadow: "0 0 80px rgba(40, 232, 253, 0.1)"
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-accent/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl text-text-headline mb-4">
                Not Sure Which Package?
              </h2>
              <p className="text-text-body text-lg mb-8 max-w-xl mx-auto">
                Book a free 15-minute call. We'll analyze your business and recommend
                the right fit—no pressure, no hard sell.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Book Free Consultation
                </Button>
                <Button href="/how-it-works" variant="glass" size="lg">
                  See How It Works
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}

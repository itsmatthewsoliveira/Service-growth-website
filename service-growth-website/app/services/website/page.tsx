"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";

const pricingTiers = [
  {
    name: "Starter Site",
    price: "$3,997",
    description: "Perfect for businesses that need a professional online presence fast.",
    features: [
      "5-page custom website",
      "Mobile responsive design",
      "Contact form with lead capture",
      "Basic SEO setup",
      "Google Analytics integration",
      "2 rounds of revisions",
      "14-day delivery",
    ],
    featured: false,
  },
  {
    name: "Growth Site",
    price: "$5,997",
    description: "For businesses ready to turn their website into a lead generation machine.",
    features: [
      "10-page custom website",
      "Conversion-optimized design",
      "Advanced lead capture forms",
      "Full SEO optimization",
      "Speed optimization",
      "CRM integration",
      "Live chat setup",
      "3 rounds of revisions",
      "21-day delivery",
    ],
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Custom Build",
    price: "$7,997+",
    description: "Enterprise-level websites with custom functionality and integrations.",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "E-commerce capabilities",
      "Advanced integrations",
      "Custom animations",
      "Priority support",
      "Unlimited revisions",
      "Dedicated project manager",
    ],
    featured: false,
  },
];

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Sub-2 second load times. Speed matters for conversions and SEO.",
  },
  {
    icon: "📱",
    title: "Mobile First",
    description: "70% of your visitors are on mobile. We design for them first.",
  },
  {
    icon: "🎯",
    title: "Conversion Focused",
    description: "Every element designed to turn visitors into leads.",
  },
  {
    icon: "🔍",
    title: "SEO Ready",
    description: "Built with search engines in mind from day one.",
  },
];

export default function WebsiteServicePage() {
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
            Website Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl text-text-headline mb-6"
          >
            Sites That Convert,
            <br />
            <span className="text-accent italic">Not Just Exist</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-body max-w-2xl mx-auto mb-8"
          >
            Your website should be your best salesperson—working 24/7 to capture leads
            and build trust. We build sites that actually do that.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <SectionWrapper className="py-20 px-6 bg-bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg text-text-headline mb-2">{feature.title}</h3>
                <p className="text-text-muted text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-text-headline text-center mb-4">
            Website Pricing
          </h2>
          <p className="text-text-body text-center mb-12 max-w-2xl mx-auto">
            One-time investment. No monthly fees. Your site, fully owned.
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
                    : "bg-bg-card border border-border"
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
                  <span className="text-text-muted"> one-time</span>
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

      {/* CTA */}
      <SectionWrapper className="py-20 px-6 bg-bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-text-headline mb-4">
            Ready for a Site That Works?
          </h2>
          <p className="text-text-body text-lg mb-8">
            Book a free call. We'll review your current site and show you exactly what's
            costing you leads.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book Free Consultation
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}

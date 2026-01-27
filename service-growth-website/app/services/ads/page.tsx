"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";

const pricingTiers = [
  {
    name: "Starter Ads",
    price: "$1,500",
    period: "/month",
    adSpend: "+ ad spend",
    description: "For businesses testing paid advertising or with smaller budgets.",
    features: [
      "1 platform (Google OR Meta)",
      "Campaign setup & optimization",
      "Monthly reporting",
      "Up to $3k ad spend managed",
      "Bi-weekly check-ins",
    ],
    featured: false,
  },
  {
    name: "Growth Ads",
    price: "$2,500",
    period: "/month",
    adSpend: "+ ad spend",
    description: "For businesses ready to scale their advertising profitably.",
    features: [
      "Google + Meta Ads",
      "Advanced audience targeting",
      "Retargeting campaigns",
      "Conversion tracking setup",
      "Weekly optimization",
      "Up to $10k ad spend managed",
      "Weekly strategy calls",
      "Landing page recommendations",
    ],
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Dominator Ads",
    price: "$4,500",
    period: "/month",
    adSpend: "+ ad spend",
    description: "For businesses spending $10k+ monthly who need expert management.",
    features: [
      "All platforms",
      "Unlimited campaigns",
      "Custom audience building",
      "Competitor analysis",
      "A/B testing",
      "Unlimited ad spend managed",
      "Dedicated account manager",
      "Daily monitoring",
      "Priority support",
    ],
    featured: false,
  },
];

const platforms = [
  { name: "Google Ads", icon: "🔍", description: "Capture high-intent searchers actively looking for your services" },
  { name: "Meta Ads", icon: "📱", description: "Reach your ideal customers on Facebook and Instagram" },
  { name: "YouTube", icon: "▶️", description: "Video ads that build trust and showcase your work" },
  { name: "Retargeting", icon: "🎯", description: "Stay top-of-mind with people who've visited your site" },
];

const results = [
  { metric: "3.2x", label: "Average ROAS" },
  { metric: "$47", label: "Avg. Cost Per Lead" },
  { metric: "156%", label: "Avg. Lead Increase" },
];

export default function AdsServicePage() {
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
            Ads Management
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl text-text-headline mb-6"
          >
            Ads That Actually
            <br />
            <span className="text-accent italic">Make Money</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-body max-w-2xl mx-auto mb-8"
          >
            We've managed millions in ad spend for service businesses. No wasted budget.
            No vanity metrics. Just leads that turn into jobs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Audit
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <SectionWrapper className="py-16 px-6 bg-bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl text-accent mb-2">{result.metric}</div>
                <div className="text-text-muted text-sm">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Platforms */}
      <SectionWrapper className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-text-headline text-center mb-12">
            Platforms We Master
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {platforms.map((platform, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="text-3xl mb-3">{platform.icon}</div>
                <h3 className="text-lg text-text-headline mb-2">{platform.name}</h3>
                <p className="text-text-muted text-sm">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper className="py-20 px-6 bg-bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-text-headline text-center mb-4">
            Ads Management Pricing
          </h2>
          <p className="text-text-body text-center mb-12 max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. Cancel anytime.
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
                <div className="mb-2">
                  <span className="text-4xl text-text-headline">{tier.price}</span>
                  <span className="text-text-muted">{tier.period}</span>
                </div>
                <p className="text-accent text-sm mb-4">{tier.adSpend}</p>
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
      <SectionWrapper className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-text-headline mb-4">
            Wasting Money on Ads?
          </h2>
          <p className="text-text-body text-lg mb-8">
            Get a free audit. We'll show you exactly where your ad spend is going wrong
            and how to fix it.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get Free Ad Audit
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";

const services = [
  {
    name: "Photo Transformation",
    price: "$97",
    unit: "per image",
    description: "Turn job site photos into stunning portfolio pieces.",
    features: [
      "Sky replacement",
      "Color correction",
      "Object removal",
      "Enhancement & cleanup",
      "48-hour turnaround",
    ],
    popular: false,
  },
  {
    name: "3D Rendering",
    price: "$497",
    unit: "per render",
    description: "Help clients visualize their project before it's built.",
    features: [
      "Photorealistic quality",
      "Interior or exterior",
      "Multiple angles",
      "Day/night versions",
      "7-day turnaround",
    ],
    popular: true,
  },
  {
    name: "Video Animation",
    price: "$297",
    unit: "per video",
    description: "Bring your renders and photos to life with motion.",
    features: [
      "Walkthrough animations",
      "Before/after reveals",
      "Social media ready",
      "Music & sound",
      "5-day turnaround",
    ],
    popular: false,
  },
];

const packages = [
  {
    name: "Content Starter",
    price: "$497",
    period: "/month",
    description: "For businesses building their visual portfolio.",
    features: [
      "5 photo transformations",
      "1 video animation",
      "Social media sizing",
      "Brand consistency",
    ],
    featured: false,
  },
  {
    name: "Content Pro",
    price: "$997",
    period: "/month",
    description: "For businesses serious about standing out visually.",
    features: [
      "15 photo transformations",
      "1 3D render",
      "2 video animations",
      "Social media calendar",
      "Priority turnaround",
    ],
    featured: true,
    badge: "Best Value",
  },
  {
    name: "Content Unlimited",
    price: "$1,997",
    period: "/month",
    description: "For businesses that need constant visual content.",
    features: [
      "Unlimited photo transforms",
      "2 3D renders",
      "4 video animations",
      "Dedicated designer",
      "24-hour turnaround",
      "Social posting included",
    ],
    featured: false,
  },
];

export default function ContentServicePage() {
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
            Content & Visual
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl text-text-headline mb-6"
          >
            Look As Good As
            <br />
            <span className="text-accent italic">Your Work Is</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-body max-w-2xl mx-auto mb-8"
          >
            Your work is incredible. Your photos should match. Transform job site shots
            into portfolio pieces that win premium clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              See Examples
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Individual Services */}
      <SectionWrapper className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-text-headline text-center mb-4">
            À La Carte Services
          </h2>
          <p className="text-text-body text-center mb-12 max-w-2xl mx-auto">
            Need just one thing? No problem. Pay per piece.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  service.popular
                    ? "bg-accent/5 border-2 border-accent/30"
                    : "bg-bg-card border border-border"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-bg-primary text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl text-text-headline mb-2">{service.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl text-text-headline">{service.price}</span>
                  <span className="text-text-muted text-sm"> {service.unit}</span>
                </div>
                <p className="text-text-body text-sm mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-text-muted">
                      <span className="text-accent">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Monthly Packages */}
      <SectionWrapper className="py-20 px-6 bg-bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-text-headline text-center mb-4">
            Monthly Content Packages
          </h2>
          <p className="text-text-body text-center mb-12 max-w-2xl mx-auto">
            Save up to 40% with a monthly package. Cancel anytime.
          </p>

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
                    : "bg-bg-primary border border-border"
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

                <h3 className="text-2xl text-text-headline mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl text-text-headline">{pkg.price}</span>
                  <span className="text-text-muted">{pkg.period}</span>
                </div>
                <p className="text-text-body text-sm mb-6">{pkg.description}</p>

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
            Ready to Upgrade Your Visuals?
          </h2>
          <p className="text-text-body text-lg mb-8">
            Send us your worst job site photo. We'll transform it for free so you can see
            the difference.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get Free Sample
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}

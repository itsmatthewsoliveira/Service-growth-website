"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";

const services = [
  {
    href: "/services/website",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Website Services",
    tagline: "Sites that convert, not just exist",
    description: "High-converting websites built for service businesses. Fast, mobile-first, and optimized for leads.",
    price: "From $3,997",
    features: ["Custom Design", "Mobile Optimized", "SEO Ready", "Lead Capture Built-In"],
  },
  {
    href: "/services/ads",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Ads Management",
    tagline: "Get in front of the right people",
    description: "Google & Meta ads managed by operators who've spent millions profitably. No wasted budget.",
    price: "From $1,500/mo",
    features: ["Google Ads", "Meta/Facebook Ads", "Retargeting", "Monthly Reporting"],
  },
  {
    href: "/services/content",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    title: "Content & Visual",
    tagline: "Look as good as your work actually is",
    description: "Photo transformation, 3D renders, and video content that makes you stand out from competitors.",
    price: "From $497",
    features: ["Photo Enhancement", "3D Renders", "Video Animation", "Social Content"],
  },
  {
    href: "/services/automation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Automation",
    tagline: "Stop losing leads to slow follow-up",
    description: "AI-powered lead capture, qualification, and follow-up. Never miss another opportunity.",
    price: "From $997/mo",
    features: ["AI Lead Capture", "Voice Bot", "SMS/Email Sequences", "CRM Integration"],
  },
];

export default function ServicesPage() {
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
            className="text-5xl md:text-7xl text-text-headline mb-6 font-serif"
          >
            One Partner.
            <br />
            <span className="text-accent italic">Every Solution.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-text-body max-w-2xl mx-auto font-light"
          >
            From websites to automation to visual content — everything you need
            to dominate your market, under one roof.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block h-full bg-bg-card border border-white/5 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:bg-accent/20 transition-colors relative z-10">
                    {service.icon}
                  </div>

                  <h3 className="text-3xl text-text-headline mb-2 func-serif group-hover:text-accent transition-colors relative z-10 font-serif">
                    {service.title}
                  </h3>
                  <p className="text-accent text-sm mb-4 relative z-10 font-medium uppercase tracking-wider">{service.tagline}</p>
                  <p className="text-text-body text-sm mb-6 relative z-10 leading-relaxed">{service.description}</p>

                  <div className="flex items-center justify-between mb-6 relative z-10 border-t border-white/5 pt-4">
                    <span className="text-2xl text-text-headline font-serif">{service.price}</span>
                  </div>

                  <ul className="grid grid-cols-2 gap-2 mb-6 relative z-10">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-text-body/80">
                        <span className="text-accent">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-accent font-medium flex items-center gap-2 text-sm relative z-10">
                    Learn more
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-text-headline mb-4 font-serif">
            Not Sure What You Need?
          </h2>
          <p className="text-text-body text-lg mb-8 max-w-xl mx-auto">
            Book a free audit. We'll analyze your business and recommend exactly what will move the needle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Book Free Audit
            </Button>
            <Button href="/packages" variant="glass" size="lg">
              View Packages
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

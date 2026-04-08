"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
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
    description:
      "Your website should be your hardest-working employee. We build conversion-focused, mobile-first sites that load fast, rank on Google, and turn visitors into booked jobs.",
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
    description:
      "Stop wasting money on ads that don't convert. We run Google and Meta campaigns that put you in front of buyers who are actively searching for your services right now.",
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
    description:
      "Your competitors with worse work are winning jobs because their photos look better. We fix that with professional visual content, social media management, and before/after transformations.",
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
    description:
      "Every missed call is a missed job. Our AI systems respond in under 60 seconds, qualify leads automatically, and book appointments while you are on the jobsite.",
    price: "From $997/mo",
    features: ["AI Lead Capture", "Voice Bot", "SMS/Email Sequences", "CRM Integration"],
  },
];

export default function ServicesPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="section-dark relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C2703A]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl mb-6"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}
          >
            One Partner.
            <br />
            <span className="text-[#C2703A] italic">Every Solution.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[#B8B3AA] max-w-2xl mx-auto font-light"
          >
            Websites, ads, content, and automation — everything your business needs
            to dominate your local market. One team. No runaround.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="py-20 px-6 bg-[#F2EDE5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}
            >
              Everything You Need to Grow
            </h2>
            <p className="text-[#4A4A45] max-w-2xl mx-auto">
              Most agencies do one thing. We handle the full picture so every piece works together and nothing falls through the cracks.
            </p>
          </div>

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
                  className="block h-full card-dark-on-cream rounded-2xl p-8 hover:border-[#A85C30]/30 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#A85C30]/10 flex items-center justify-center mb-6 text-[#A85C30] group-hover:bg-[#A85C30]/20 transition-colors relative z-10">
                    {service.icon}
                  </div>

                  <h3
                    className="text-3xl mb-2 group-hover:text-[#A85C30] transition-colors relative z-10"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#A85C30] text-sm mb-4 relative z-10 font-medium uppercase tracking-wider">{service.tagline}</p>
                  <p className="text-[#4A4A45] text-sm mb-6 relative z-10 leading-relaxed">{service.description}</p>

                  <div className="flex items-center justify-between mb-6 relative z-10 border-t border-[#1A1A18]/10 pt-4">
                    <span
                      className="text-2xl"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}
                    >
                      {service.price}
                    </span>
                  </div>

                  <ul className="grid grid-cols-2 gap-2 mb-6 relative z-10">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#4A4A45]/80">
                        <span className="text-[#A85C30]">&#8226;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-[#A85C30] font-medium flex items-center gap-2 text-sm relative z-10">
                    Learn more
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      &rarr;
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Form Section */}
      <SectionWrapper className="py-20 px-6 bg-[#F2EDE5]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1A1A18] rounded-2xl p-8 md:p-12"
          >
            <h2
              className="text-3xl md:text-4xl text-center mb-4"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}
            >
              Tell Us What You Need
            </h2>
            <p className="text-[#B8B3AA] text-center mb-8 max-w-lg mx-auto">
              Not sure where to start? Fill this out and we will put together a custom plan for your business. No pressure, no obligation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#2A2A28] border border-[#3A3A38] rounded-lg text-[#F5F0E8] placeholder-[#6A6A65] focus:outline-none focus:border-[#C2703A] transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#2A2A28] border border-[#3A3A38] rounded-lg text-[#F5F0E8] placeholder-[#6A6A65] focus:outline-none focus:border-[#C2703A] transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A2A28] border border-[#3A3A38] rounded-lg text-[#F5F0E8] placeholder-[#6A6A65] focus:outline-none focus:border-[#C2703A] transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="What do you need help with?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#2A2A28] border border-[#3A3A38] rounded-lg text-[#F5F0E8] placeholder-[#6A6A65] focus:outline-none focus:border-[#C2703A] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#C2703A' }}
              >
                Get Started
              </button>
            </form>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20 px-6 bg-[#F2EDE5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}
          >
            Not Sure What You Need?
          </h2>
          <p className="text-[#4A4A45] text-lg mb-8 max-w-xl mx-auto">
            Book a free audit. We will analyze your business and recommend exactly what will move the needle.
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

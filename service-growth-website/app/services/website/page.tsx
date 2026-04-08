"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import { Zap, Smartphone, Target, Search } from "lucide-react";

const problems = [
  "Your current site looks dated and doesn't reflect the quality of your work",
  "Pages load slowly, causing visitors to bounce before they even see what you offer",
  "No clear calls-to-action means visitors leave without contacting you",
  "Your site isn't mobile-friendly, and 70% of your traffic is on mobile",
  "You're invisible on Google because your site wasn't built with SEO in mind",
  "Your competitor's site looks better than yours — even though your work is better",
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-2 second load times. Every second of delay costs you 7% in conversions. We make sure nobody bounces.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "70% of your visitors are on their phone. We design for mobile first, then scale up to desktop.",
  },
  {
    icon: Target,
    title: "Conversion Focused",
    description: "Every headline, button, and section is designed with one goal: getting that visitor to pick up the phone or fill out a form.",
  },
  {
    icon: Search,
    title: "SEO Built In",
    description: "Proper page structure, meta tags, schema markup, and speed optimization so Google actually finds and ranks you.",
  },
];

const process = [
  {
    step: "1",
    title: "Discovery Call",
    description: "We learn your business inside and out. Who your customers are, what makes you different, and what's not working right now. This takes 30 minutes and it changes everything.",
  },
  {
    step: "2",
    title: "Custom Design",
    description: "We create a custom design that reflects your brand, showcases your best work, and guides visitors toward contacting you. No templates. No cookie-cutter layouts.",
  },
  {
    step: "3",
    title: "Build & Optimize",
    description: "We develop your site with blazing speed, built-in SEO, and direct integrations with your CRM, booking system, and automation tools.",
  },
  {
    step: "4",
    title: "Launch & Support",
    description: "Your new site goes live and starts working for you 24/7. We monitor performance, fix issues, and keep everything running smooth.",
  },
];

const results = [
  { stat: "2x", label: "More leads on average" },
  { stat: "<2s", label: "Page load time" },
  { stat: "14 days", label: "From start to launch" },
  { stat: "100%", label: "Mobile optimized" },
];

const whatsIncluded = [
  "Custom homepage design",
  "Service pages for each offering",
  "About page that builds trust",
  "Contact page with lead capture form",
  "Mobile-responsive design",
  "Speed optimization (under 2s load)",
  "On-page SEO setup",
  "Google Analytics & tracking",
  "CRM / automation integration",
  "SSL certificate & security",
  "30 days of post-launch support",
  "Training on how to update content",
];

export default function WebsiteServicePage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Hero */}
      <section className="section-dark relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C2703A]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-[#C2703A]/10 border border-[#C2703A]/20 text-[#C2703A] text-sm mb-6"
          >
            Website Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl mb-6"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}
          >
            Websites That Work
            <br />
            <span className="text-[#C2703A] italic">As Hard As You Do</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#B8B3AA] max-w-2xl mx-auto mb-8"
          >
            Your website should be your best salesperson — working 24/7 to capture leads
            and build trust. Not a digital brochure collecting dust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Site Audit
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <SectionWrapper className="py-20 px-6 bg-[#F2EDE5]">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-center mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}
          >
            Sound Familiar?
          </h2>
          <p className="text-[#4A4A45] text-center mb-12 max-w-2xl mx-auto">
            If any of these hit home, your website is costing you jobs. The good news? Every single one of these is fixable.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 card-embossed p-6"
              >
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-400 text-sm">&#10007;</span>
                </div>
                <p className="text-[#4A4A45]">{problem}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Persuasive Copy Section */}
      <section className="section-dark py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-center mb-8"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}
          >
            Your Website Is Your Storefront
          </h2>
          <div className="space-y-6 text-[#B8B3AA] text-lg leading-relaxed">
            <p>
              Think about the last time you hired someone. You probably Googled them first. Checked their website. Looked at their work.
            </p>
            <p>
              Your customers do the same thing. And if your website looks like it was built in 2015, they are going to call your competitor instead. Even if your work is better.
            </p>
            <p>
              We build websites specifically for service businesses — contractors, home service pros, and local operators. Not generic templates. Not WordPress themes.
            </p>
            <p>
              Custom-built, conversion-focused sites that load fast, look incredible on mobile, and are designed to do one thing: <span className="text-[#C2703A] font-semibold">get you more leads.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <SectionWrapper className="py-20 px-6 bg-[#F2EDE5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}
            >
              Built for Performance
            </h2>
            <p className="text-[#4A4A45] max-w-2xl mx-auto">
              Every site we build comes standard with these four pillars. No add-ons. No upsells. This is the baseline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-embossed p-6 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-[#A85C30]/10 flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-[#A85C30]" />
                </div>
                <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#4A4A45] text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What's Included */}
      <SectionWrapper className="py-20 px-6 bg-[#F2EDE5]">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-center mb-12"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}
          >
            What You Get
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatsIncluded.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 card-embossed"
              >
                <div className="w-5 h-5 rounded-full bg-[#A85C30]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#A85C30] text-xs">&#10003;</span>
                </div>
                <span className="text-[#4A4A45] text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper className="py-20 px-6 bg-[#F2EDE5]">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-center mb-12"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}
          >
            How It Works
          </h2>

          <div className="space-y-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-[#A85C30]/10 border border-[#A85C30]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#A85C30] font-semibold text-lg">{step.step}</span>
                </div>
                <div className="card-embossed p-6 flex-1">
                  <h3
                    className="text-lg mb-2"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#4A4A45]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Results */}
      <section className="section-dark py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-center mb-12"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}
          >
            Results You Can Expect
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {results.map((result, i) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-semibold text-[#C2703A] mb-2">{result.stat}</div>
                <p className="text-[#B8B3AA] text-sm">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Get Your Free Site Audit
            </h2>
            <p className="text-[#B8B3AA] text-center mb-8 max-w-lg mx-auto">
              We will review your current website and show you exactly what is costing you leads. No strings attached.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A2A28] border border-[#3A3A38] rounded-lg text-[#F5F0E8] placeholder-[#6A6A65] focus:outline-none focus:border-[#C2703A] transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A2A28] border border-[#3A3A38] rounded-lg text-[#F5F0E8] placeholder-[#6A6A65] focus:outline-none focus:border-[#C2703A] transition-colors"
                  required
                />
              </div>
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-[#2A2A28] border border-[#3A3A38] rounded-lg text-[#F5F0E8] placeholder-[#6A6A65] focus:outline-none focus:border-[#C2703A] transition-colors"
              />
              <textarea
                placeholder="What do you need help with?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-[#2A2A28] border border-[#3A3A38] rounded-lg text-[#F5F0E8] placeholder-[#6A6A65] focus:outline-none focus:border-[#C2703A] transition-colors resize-none"
              />
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
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-[#4A4A45] text-lg mb-8">
            Book a free call. We will review your current site and show you exactly what is
            costing you leads.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book a Call
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import {
  Globe,
  Smartphone,
  Search,
  MapPin,
  FileText,
  Server,
  CheckCircle2,
  ChevronDown,
  Shield,
  Clock,
  Star,
} from "lucide-react";

const industries = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Landscaping",
  "Cleaning",
  "Painting",
  "Construction",
  "Remodeling",
  "Pest Control",
  "Fencing",
  "Concrete",
  "Flooring",
  "Pressure Washing",
  "Other",
];

const includedFeatures = [
  {
    icon: Globe,
    title: "Custom Designed Website",
    description:
      "Not a template. A site built around your business, your services, your area.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description:
      "70% of your customers search on their phone. Your site will look sharp on every device.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description:
      "Built to rank on Google so customers find you before your competition.",
  },
  {
    icon: MapPin,
    title: "Google Business Integration",
    description:
      "Connected to your Google Business Profile so local searches drive calls.",
  },
  {
    icon: FileText,
    title: "Contact Forms & Click-to-Call",
    description:
      "Every page designed to make it dead simple for customers to reach you.",
  },
  {
    icon: Server,
    title: "Fast Hosting Included",
    description:
      "No hosting fees. No surprise bills. We handle the tech so you handle the work.",
  },
];

const faqs = [
  {
    q: "What's the catch?",
    a: "No catch. We build your website 100% free. We know that once you see the quality of our work and the leads start coming in, you'll want to talk about marketing services. But there's zero obligation.",
  },
  {
    q: "How long does it take?",
    a: "14 days or less. We move fast because we know you need customers now, not in 3 months.",
  },
  {
    q: "Do I own the website?",
    a: "Yes, 100%. It's your website. Your content. Your business. No strings attached.",
  },
  {
    q: "What if I don't want marketing services?",
    a: "Then keep the website and enjoy it. Seriously. We'd rather build something great and earn your trust than lock you into something you don't want.",
  },
];

function LeadForm({ darkBg = false }: { darkBg?: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    industry: "",
  });

  const inputBase = darkBg
    ? "w-full px-4 py-3.5 rounded-lg bg-[rgba(252, 255, 213,0.08)] border border-[rgba(252, 255, 213,0.12)] text-[#FCFFD5] placeholder-[#7A766E] focus:outline-none focus:ring-2 focus:ring-[#E25312] focus:border-transparent transition-all"
    : "w-full px-4 py-3.5 rounded-lg bg-[#1D1C1A] border border-[#2A2A28] text-[#FCFFD5] placeholder-[#7A766E] focus:outline-none focus:ring-2 focus:ring-[#E25312] focus:border-transparent transition-all";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className={inputBase}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          required
          className={inputBase}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        required
        className={inputBase}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Business Name"
        required
        className={inputBase}
        value={formData.businessName}
        onChange={(e) =>
          setFormData({ ...formData, businessName: e.target.value })
        }
      />
      <div className="relative">
        <select
          required
          className={`${inputBase} appearance-none cursor-pointer`}
          value={formData.industry}
          onChange={(e) =>
            setFormData({ ...formData, industry: e.target.value })
          }
        >
          <option value="" disabled>
            Select Your Industry
          </option>
          {industries.map((industry) => (
            <option key={industry} value={industry} className="bg-[#1D1C1A]">
              {industry}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A766E] pointer-events-none" />
      </div>
      <Button type="submit" variant="primary" size="lg" fullWidth>
        Claim My Free Website
      </Button>
      <div className="flex items-center justify-center gap-2 pt-1">
        <Shield className="w-4 h-4 text-[#E25312]" />
        <span
          className={`text-xs ${darkBg ? "text-[#7A766E]" : "text-[#7A766E]"}`}
        >
          No credit card required. No contracts. Ever.
        </span>
      </div>
    </form>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-[#D6D0C5]"
      initial={false}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span
          className="text-lg font-semibold text-[#1D1C1A]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-[#E25312]" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-[#4A4A45] leading-relaxed">{a}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FreeWebsitePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="section-cream relative pt-28 pb-20 px-6 overflow-hidden">
        {/* Subtle warm glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none bg-[rgba(226, 83, 18,0.06)]" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E25312]/20 bg-[#E25312]/5 text-sm text-[#E25312] font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#E25312] animate-pulse" />
                Limited to 10 businesses this month
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  color: "#1D1C1A",
                }}
              >
                We&apos;ll Build Your Website{" "}
                <span className="text-[#E25312]">&mdash; Free.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-[#4A4A45] leading-relaxed mb-8 max-w-lg"
              >
                No catch. No contracts. We build you a professional website that
                actually gets you customers &mdash; on us.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-3 text-[#4A4A45]"
              >
                {[
                  "Custom designed for your business",
                  "Live in 14 days or less",
                  "You own it. No strings.",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E25312] flex-shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-6 sm:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
            >
              <h2
                className="text-xl sm:text-2xl font-bold text-[#1D1C1A] mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Get Your Free Website
              </h2>
              <p className="text-sm text-[#7A766E] mb-6">
                Takes 30 seconds. We&apos;ll call you within 24 hours.
              </p>
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU GET ===== */}
      <section className="section-dark py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <div className="text-center mb-14">
              <p className="text-[#E25312] text-sm font-medium tracking-wide uppercase mb-3">
                What&apos;s Included
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Everything You Need to Get Found Online
              </h2>
              <p className="text-[#B8B3AA] text-lg max-w-2xl mx-auto">
                Other agencies charge $3,000&ndash;$5,000 for this. We&apos;re
                giving it to you for free.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedFeatures.map((feature, index) => (
              <SectionWrapper key={feature.title} delay={index * 0.1}>
                <div className="p-6 rounded-xl border border-[rgba(252, 255, 213,0.08)] bg-[rgba(252, 255, 213,0.03)] hover:bg-[rgba(252, 255, 213,0.06)] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#E25312]/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-[#E25312]" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-[#FCFFD5] mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[#B8B3AA] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY FREE? ===== */}
      <section className="section-cream py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionWrapper>
            <div className="text-center mb-10">
              <p className="text-[#E25312] text-sm font-medium tracking-wide uppercase mb-3">
                Why Free?
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1C1A] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Because We Know What Happens Next
              </h2>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.1}>
            <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <p className="text-lg sm:text-xl text-[#4A4A45] leading-relaxed mb-6">
                We built our own service business from zero to $100K a month. We
                know the biggest thing holding most contractors back isn&apos;t
                skill &mdash; it&apos;s visibility.
              </p>
              <p className="text-lg sm:text-xl text-[#4A4A45] leading-relaxed mb-6">
                Once you see what a real marketing system can do &mdash; once the
                phone starts ringing from your new website &mdash; you&apos;re
                going to want more. Ads. Automation. A full pipeline of
                customers. That&apos;s where we come in.
              </p>
              <p className="text-lg sm:text-xl text-[#1D1C1A] font-semibold leading-relaxed">
                The website is our way of proving it. Zero risk. Zero
                obligation. You keep it no matter what.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#D6D0C5]">
                {[
                  { icon: Shield, text: "No contracts" },
                  { icon: Clock, text: "Ready in 14 days" },
                  { icon: Star, text: "You own it 100%" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-[#E25312] flex-shrink-0" />
                    <span className="text-[#4A4A45] font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="section-dark py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <div className="text-center mb-14">
              <p className="text-[#E25312] text-sm font-medium tracking-wide uppercase mb-3">
                Results That Speak
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                We Don&apos;t Talk. We Deliver.
              </h2>
            </div>
          </SectionWrapper>

          {/* Stats */}
          <SectionWrapper delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
              {[
                {
                  stat: "$100K",
                  label: "In profit generated in 90 days",
                },
                {
                  stat: "47",
                  label: "Extra jobs booked in the first month",
                },
                {
                  stat: "14 Days",
                  label: "From signup to live website",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-8 rounded-xl border border-[rgba(252, 255, 213,0.08)] bg-[rgba(252, 255, 213,0.03)]"
                >
                  <p
                    className="text-4xl sm:text-5xl font-bold text-[#E25312] mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.stat}
                  </p>
                  <p className="text-[#B8B3AA] text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </SectionWrapper>

          {/* Testimonial */}
          <SectionWrapper delay={0.2}>
            <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-2xl border border-[rgba(252, 255, 213,0.08)] bg-[rgba(252, 255, 213,0.03)]">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#E25312] fill-[#E25312]"
                  />
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl text-[#FCFFD5] leading-relaxed mb-6 italic">
                &ldquo;I was skeptical about the free website. Thought there had
                to be a catch. There wasn&apos;t. They built us a site that
                looks better than anything I&apos;ve paid for. Within 3 weeks we
                were getting calls from it. Now we use them for everything.&rdquo;
              </blockquote>
              <div>
                <p className="text-[#FCFFD5] font-semibold">Marcus T.</p>
                <p className="text-[#7A766E] text-sm">
                  Owner, Precision HVAC Services
                </p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section-cream py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionWrapper>
            <div className="text-center mb-12">
              <p className="text-[#E25312] text-sm font-medium tracking-wide uppercase mb-3">
                Questions
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1D1C1A]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Straight Answers
              </h2>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.1}>
            <div className="border-t border-[#D6D0C5]">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section-dark py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionWrapper>
            <div className="text-center mb-10">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Your Competitors Are Already Online.
                <br />
                <span className="text-[#E25312]">Are You?</span>
              </h2>
              <p className="text-[#B8B3AA] text-lg max-w-xl mx-auto">
                Every day without a website is a day your customers are finding
                someone else. Stop leaving money on the table.
              </p>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.1}>
            <div className="p-6 sm:p-8 rounded-2xl border border-[rgba(252, 255, 213,0.08)] bg-[rgba(252, 255, 213,0.03)]">
              <LeadForm darkBg />
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-[#7A766E]">
              {[
                "No credit card",
                "No contracts",
                "100% free",
                "Live in 14 days",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E25312]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}

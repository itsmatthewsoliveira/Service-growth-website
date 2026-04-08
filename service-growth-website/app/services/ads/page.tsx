"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import { Target, TrendingUp, BarChart3, Users } from "lucide-react";

const problems = [
  "You are wasting money on ads that don't convert into actual jobs",
  "Your targeting is too broad — reaching people who will never hire you",
  "No clear strategy. Just boosting posts and hoping for the best",
  "You can not track which ads actually bring in revenue",
  "Your cost per lead keeps climbing but your close rate stays flat",
  "You tried running ads yourself and burned through your budget in a week",
];

const platforms = [
  {
    icon: Target,
    title: "Google Ads",
    description: "Show up at the exact moment someone searches for your service. These are buyers with intent — they need help now and they are ready to pay.",
  },
  {
    icon: Users,
    title: "Meta / Facebook Ads",
    description: "Get in front of homeowners in your service area who match your ideal customer profile. Build awareness, generate leads, and stay top of mind.",
  },
  {
    icon: TrendingUp,
    title: "Retargeting",
    description: "97% of visitors leave your site without converting. Retargeting follows them across the web and brings them back when they are ready to buy.",
  },
  {
    icon: BarChart3,
    title: "ROI Tracking",
    description: "Every dollar tracked from click to closed job. You will know exactly which campaigns, keywords, and ads are making you money.",
  },
];

const process = [
  {
    step: "1",
    title: "Market Research",
    description: "We analyze your market, your competitors, and your ideal customers. We look at search volume, cost per click, and where the biggest opportunities are in your area.",
  },
  {
    step: "2",
    title: "Campaign Build",
    description: "We create high-converting ad campaigns with targeted copy, compelling offers, and landing pages designed to turn clicks into calls.",
  },
  {
    step: "3",
    title: "Launch & Monitor",
    description: "Your campaigns go live with precise geo-targeting, budget controls, and real-time monitoring. We watch the numbers so you do not have to.",
  },
  {
    step: "4",
    title: "Optimize & Scale",
    description: "We test new ads, kill underperformers, and double down on winners. Every week your campaigns get smarter and your cost per lead drops.",
  },
];

const results = [
  { stat: "3-5x", label: "Average return on ad spend" },
  { stat: "$50-150", label: "Cost per qualified lead" },
  { stat: "24hrs", label: "From strategy to live campaign" },
  { stat: "Weekly", label: "Performance reports" },
];

const whatsIncluded = [
  "Google Ads campaign setup & management",
  "Meta/Facebook Ads campaign management",
  "Custom landing page for each campaign",
  "Ad copy and creative design",
  "Keyword research & competitor analysis",
  "Geo-targeting for your service area",
  "Conversion tracking setup",
  "Call tracking with recorded calls",
  "A/B testing on ads and landing pages",
  "Monthly budget optimization",
  "Weekly performance reports",
  "Dedicated account manager",
];

export default function AdsServicePage() {
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
            Ads Management
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl mb-6"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}
          >
            Get In Front of Buyers
            <br />
            <span className="text-[#C2703A] italic">Ready to Hire</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#B8B3AA] max-w-2xl mx-auto mb-8"
          >
            Targeted Google and Meta ad campaigns that put you in front of people actively searching for your services. No wasted spend. Just qualified leads ready to book.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Ads Audit
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
            Most service businesses waste thousands on ads that never convert. If any of these hit home, we can fix it.
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

      {/* Persuasive Copy */}
      <section className="section-dark py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-center mb-8"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}
          >
            Stop Guessing. Start Growing.
          </h2>
          <div className="space-y-6 text-[#B8B3AA] text-lg leading-relaxed">
            <p>
              Here is the truth about paid ads: they work incredibly well when done right. And they burn cash fast when done wrong.
            </p>
            <p>
              Most business owners try running ads themselves or hire a cheap agency that treats their account like an afterthought. The result? Hundreds or thousands of dollars wasted on clicks that never turn into jobs.
            </p>
            <p>
              We manage ad spend the way we would manage our own money. Every dollar is tracked. Every campaign is optimized weekly. Every lead is qualified before it reaches you.
            </p>
            <p>
              We have managed millions in ad spend across Google and Meta for service businesses just like yours. We know what works, what does not, and how to <span className="text-[#C2703A] font-semibold">turn your ad budget into a predictable stream of booked jobs.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <SectionWrapper className="py-20 px-6 bg-[#F2EDE5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}
            >
              Full-Service Ad Management
            </h2>
            <p className="text-[#4A4A45] max-w-2xl mx-auto">
              We handle everything — strategy, creative, targeting, budget management, and ongoing optimization. You just answer the phone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-embossed p-6 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-[#A85C30]/10 flex items-center justify-center mb-4 mx-auto">
                  <platform.icon className="w-6 h-6 text-[#A85C30]" />
                </div>
                <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}
                >
                  {platform.title}
                </h3>
                <p className="text-[#4A4A45] text-sm">{platform.description}</p>
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
              Get Your Free Ads Audit
            </h2>
            <p className="text-[#B8B3AA] text-center mb-8 max-w-lg mx-auto">
              We will review your current ad campaigns (or lack thereof) and show you exactly where you are leaving money on the table.
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
            Book a free call. We will analyze your current ads and show you the opportunity you are missing.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book a Call
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}

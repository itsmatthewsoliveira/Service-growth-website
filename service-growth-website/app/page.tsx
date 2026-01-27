"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import IndustryCard from "@/components/IndustryCard";
import ReviewSlider from "@/components/ReviewSlider";
import BentoCard from "@/components/BentoCard";
import PricingCard from "@/components/PricingCard";

const industries = [
  {
    href: "/industries/home-services",
    icon: "🏠",
    title: "Home Services",
    subtitle: "HVAC, Plumbing, Roofing, Landscaping, Cleaning",
    features: ["AI Lead Booking 24/7", "Missed Call Text-Back", "Review Automation"],
  },
  {
    href: "/industries/medical",
    icon: "🩺",
    title: "Medical",
    subtitle: "Dentists, Chiropractors, Med Spas, Clinics",
    features: ["Appointment Reminders", "Patient Reactivation", "HIPAA Compliant"],
  },
  {
    href: "/industries/construction",
    icon: "🏗️",
    title: "Construction",
    subtitle: "Contractors, Remodelers, Builders, Architects",
    features: ["3D Renders", "Photo Transformation", "Fast Lead Response"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-text-headline mb-6 leading-[1.05]">
              AI That Actually Works
              <br />
              <span className="text-accent glow-text">for Service Businesses</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-text-body max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            We scaled our own service business from $0 to $100K/month in 90 days.
            Now we build these exact systems for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/contact" variant="primary" size="lg">
              Book a Free Audit
            </Button>
            <Button href="/manifesto" variant="glass" size="lg">
              Read Our Manifesto
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Hero Interactive Asset (Review Slider Preview) */}
      <div className="relative z-10 -mt-20 mb-20 max-w-7xl mx-auto px-6">
        <div className="relative">
          <div className="absolute inset-x-0 -top-40 h-40 bg-gradient-to-b from-transparent to-bg-primary z-20 pointer-events-none" />
          <ReviewSlider />
        </div>
      </div>

      {/* Industries */}
      <SectionWrapper className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-text-headline mb-4">
              Built for Service Businesses
            </h2>
            <p className="text-text-body text-lg max-w-2xl mx-auto">
              We specialize in industries where speed, trust, and professionalism
              make or break deals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <IndustryCard
                key={industry.href}
                {...industry}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Features Bento Grid */}
      <SectionWrapper className="py-24 px-6 bg-bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-accent mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              FEATURES
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-text-headline mb-4">
              Service Growth speaks your language
            </h2>
            <p className="text-text-body text-lg max-w-2xl mx-auto">
              Everyone runs their business differently. Our AI adapts to your style, your context, and your vocabulary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
            {/* Main Feature - Large Right */}
            <BentoCard
              title="Context Aware"
              subtitle="Our AI understands your specific trade, pricing, and local nuances."
              className="md:col-span-2 md:row-span-2"
              contentClassName="justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-card/90 z-0" />
              {/* Simulated Chat/Interface */}
              <div className="absolute top-8 left-8 right-8 bottom-32 bg-bg-surface rounded-t-xl border border-white/10 p-6 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-4 font-mono text-sm text-text-muted">
                  <div className="flex gap-4">
                    <span className="text-accent">$</span>
                    <span>analyzing_project_scope --type="roofing_repair"</span>
                  </div>
                  <div className="pl-4 border-l border-white/10 text-white/50">
                    Found local competitors: 12<br />
                    Avg market rate: $450-$600/sq
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-accent/10 text-accent px-3 py-1 rounded">
                      Generated Proposal: #Premium_Slate_Repair
                    </div>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Feature - Top Right */}
            <BentoCard
              title="Auto Formatting"
              subtitle="Perfectly formatted quotes and emails, instantly."
              className=""
            >
              <div className="absolute inset-x-6 top-6 bottom-0 bg-bg-surface rounded-t-xl border border-white/10 p-4">
                <div className="space-y-2 opacity-50">
                  <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                  <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                  <div className="h-2 w-full bg-white/20 rounded"></div>
                </div>
                <div className="mt-4 p-3 bg-accent/5 border border-accent/20 rounded-lg">
                  <div className="h-2 w-2/3 bg-accent/30 rounded mb-2"></div>
                  <div className="h-2 w-1/2 bg-accent/20 rounded"></div>
                </div>
              </div>
            </BentoCard>

            {/* Feature - Bottom Right (1) */}
            <BentoCard
              title="Multilingual"
              subtitle="Spanish, Portuguese, French supported."
              className=""
            >
              <div className="absolute bottom-6 right-6">
                <div className="flex -space-x-2">
                  {['🇺🇸', '🇪🇸', '🇧🇷', '🇫🇷'].map((flag, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-bg-surface border border-white/10 flex items-center justify-center text-lg shadow-lg" style={{ zIndex: 4 - i }}>
                      {flag}
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>

            {/* Feature - Bottom Right (2) */}
            <BentoCard
              title="Modes"
              subtitle="Customize how the AI writes and behaves."
              className=""
            >
              <div className="absolute inset-0 flex items-center justify-center gap-2">
                {['Strict', 'Friendly', 'Sales'].map((mode, i) => (
                  <div key={i} className={`px-3 py-1.5 rounded-md text-xs font-mono border ${i === 1 ? 'bg-accent text-bg-primary border-accent' : 'bg-bg-surface border-white/10 text-text-muted transform scale-90'}`}>
                    {mode}
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing Section */}
      <SectionWrapper className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-text-headline mb-6">Pricing</h2>
            <p className="text-text-body">Simple pricing. No hidden fees.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <PricingCard
              title="Free"
              price="Free"
              features={[
                "1,000 words included",
                "Offline transcription support",
                "Context-aware formatting",
                "Support for 100+ languages"
              ]}
            />
            <PricingCard
              isPro={true}
              title="Monologue Pro"
              price="$100"
              features={[
                "Unlimited words",
                "Offline transcription support",
                "Context-aware text formatting",
                "Support for 100+ languages",
                "Custom modes and specific dictionaries"
              ]}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-text-headline mb-8">
            Write what you <br />
            <span className="italic">meant to say.</span>
          </h2>
          <p className="text-text-body text-xl mb-12 max-w-2xl mx-auto">
            Service Growth matches your tone—casual for family, professional for your boss—and ensures your words reflect your intent.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">Get Started</Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

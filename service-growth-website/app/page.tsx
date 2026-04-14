"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import IndustryCard from "@/components/IndustryCard";
import BentoCard from "@/components/BentoCard";
import { Hero } from "@/components/ui/animated-hero";
import { Globe, Megaphone, Image, Zap, Phone, MessageSquare, Bot, Star, Camera, Box } from "lucide-react";
import TestimonialMarquee from "@/components/sections/TestimonialMarquee";
import ShinyButton from "@/components/ui/ShinyButton";

const services = [
  {
    href: "/services/ads",
    icon: Megaphone,
    title: "Ads That Book High-End Jobs",
    description: "Google, Facebook, and Yelp ads built to attract homeowners with real budgets — not tire-kickers.",
  },
  {
    href: "/services/automation",
    icon: Zap,
    title: "AI That Never Misses a Lead",
    description: "60-second response to every inquiry. AI qualifies, books estimates, and follows up while you're on the job site.",
  },
  {
    href: "/services/content",
    icon: Image,
    title: "Photos That Close the Deal",
    description: "Turn iPhone job-site shots into portfolio-quality images. Before/after content that sells itself.",
  },
  {
    href: "/services/website",
    icon: Globe,
    title: "Websites That Convert",
    description: "Look like the premium choice. Sites that rank on Google and turn visitors into booked estimates.",
  },
];

const industries = [
  {
    href: "/industries/construction",
    image: "/3d-excavator.png",
    title: "Construction",
    subtitle: "Pavers, Remodelers, GCs, Builders, Architects",
    features: ["Speed-to-Lead AI (60s response)", "Before/After Photo Magic", "3D Project Renders", "Yelp $600 Ad Credits"],
  },
  {
    href: "/industries/home-services",
    image: "/3d-home-services.png",
    title: "Home Services",
    subtitle: "Roofing, HVAC, Plumbing, Landscaping",
    features: ["AI Lead Booking 24/7", "Missed Call Text-Back", "Review Automation"],
  },
  {
    href: "/industries/medical",
    image: "/3d-medical.png",
    title: "Medical",
    subtitle: "Dentists, Chiropractors, Med Spas",
    features: ["Appointment Reminders", "Patient Reactivation", "HIPAA Compliant"],
  },
];

const features = [
  { icon: Phone, title: "Missed Call Text-Back", description: "Every missed call gets an instant text within 60 seconds." },
  { icon: MessageSquare, title: "AI Lead Qualification", description: "Automatically qualify leads 24/7 without lifting a finger." },
  { icon: Bot, title: "Voice Bot", description: "AI answers every call, books appointments, never misses." },
  { icon: Star, title: "Review Automation", description: "Turn happy customers into 5-star reviews automatically." },
  { icon: Camera, title: "Photo Transformation", description: "Make your project photos look professionally shot." },
  { icon: Box, title: "3D Rendering", description: "Show clients their dream before you build it." },
];

const trustBadges = [
  { stat: "$100K in 90 Days", description: "Our founder's proven playbook — not theory" },
  { stat: "$3 Per Lead", description: "High-intent leads, not tire-kickers" },
  { stat: "50+ Leads/Month", description: "What our active clients are pulling in right now" },
  { stat: "Live in 14 Days", description: "Not 3 months. Two weeks and you're running" },
];

export default function HomePage() {
  return (
    <>
      {/* Animated Hero Section — CREAM */}
      <section className="bg-[#F2EDE5]">
        <Hero />
      </section>

      {/* Services Section — CHARCOAL */}
      <section className="section-dark py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2703A] animate-pulse"></span>
              <span className="text-[#F5F0E8]/70 text-[11px] md:text-xs font-semibold tracking-wide uppercase">
                The Complete Growth Engine
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight leading-[1.05] font-bold">
              Everything Your Company<br />Needs to <span className="text-[#C2703A]">Dominate</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[#B8B3AA]">
              Not just marketing. The whole system — ads, AI, branding, and relationships —
              built to take contractors from struggling to stacked.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block card-embossed p-6 h-full group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#C2703A]/10 flex items-center justify-center mb-4 group-hover:bg-[#C2703A]/20 transition-colors">
                    <service.icon className="w-6 h-6 text-[#C2703A]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#F5F0E8] mb-2 group-hover:text-[#C2703A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#7A766E]">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries — CREAM */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0C0C0C]/10 shadow-sm mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2703A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C2703A]"></span>
              </span>
              <span className="text-[#0C0C0C]/70 text-[11px] md:text-xs font-semibold tracking-wide uppercase">
                Built for Contractors First
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-5 tracking-tight leading-[1.05] font-bold">
              Construction Is Our <span className="text-[#C2703A]">Home Turf</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[#0C0C0C]/60">
              Matt started by growing his dad&apos;s painting company in Boston&apos;s North Shore,
              then took an outdoor design company from $0 to $100K in 90 days. We know
              construction. And we know how to bring in high-end leads.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={industry.href}
                  className="block card-glass-cream p-8 h-full group overflow-hidden"
                >
                  <div className="w-full h-48 mb-6 rounded-xl overflow-hidden bg-white/30 flex items-center justify-center">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl mb-2 group-hover:text-[#A85C30] transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-[#7A766E] mb-4">{industry.subtitle}</p>
                  <ul className="text-sm space-y-2 mb-6">
                    {industry.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-2">
                        <span className="text-[#A85C30]">&#8226;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-[#A85C30] font-semibold flex items-center gap-2 text-sm">
                    Explore Solutions <span>&#8594;</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid — DARK */}
      <section className="section-dark py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-accent mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              AI-POWERED
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-text-headline mb-4">
              Never Miss Another Lead
            </h2>
            <p className="text-text-body text-lg max-w-2xl mx-auto">
              Your AI works 24/7 capturing, qualifying, and following up with every lead—so you can focus on the work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
            {/* Main Feature - Large */}
            <BentoCard
              title="AI Lead Capture"
              subtitle="Every lead gets an instant response, 24/7. No more missed opportunities at 2am."
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
                    <span className="text-accent">→</span>
                    <span>New lead: &quot;Need roof repair ASAP&quot;</span>
                  </div>
                  <div className="pl-4 border-l border-white/10 text-white/50">
                    AI Response sent in 8 seconds<br />
                    Qualified: Emergency repair, $5k-15k budget
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-accent/10 text-accent px-3 py-1 rounded">
                      ✓ Appointment booked: Tomorrow 9am
                    </div>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Feature - Top Right */}
            <BentoCard
              title="Voice Bot"
              subtitle="AI answers every call. Books appointments. Never misses."
              className=""
            >
              <div className="absolute inset-x-6 top-6 bottom-0 bg-bg-surface rounded-t-xl border border-white/10 p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-text-headline">Incoming Call</div>
                    <div className="text-xs text-text-muted">AI Answering...</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-accent/30 rounded animate-pulse"></div>
                  <div className="h-2 w-3/4 bg-accent/20 rounded"></div>
                </div>
              </div>
            </BentoCard>

            {/* Feature - Bottom Right (1) */}
            <BentoCard
              title="Missed Call Text-Back"
              subtitle="Every missed call gets an instant text within 60 seconds."
              className=""
            >
              <div className="absolute bottom-6 right-6 left-6">
                <div className="bg-bg-surface rounded-lg border border-white/10 p-3">
                  <div className="text-xs text-text-muted mb-1">Auto-sent 8s ago</div>
                  <div className="text-sm text-text-headline">&quot;Hi! Sorry we missed your call. How can we help?&quot;</div>
                </div>
              </div>
            </BentoCard>

            {/* Feature - Bottom Right (2) */}
            <BentoCard
              title="Review Automation"
              subtitle="Turn happy customers into 5-star reviews automatically."
              className=""
            >
              <div className="absolute inset-0 flex items-center justify-center gap-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-8 h-8 text-accent fill-accent" />
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Feature Grid (6 cards) — still DARK */}
      <section className="section-dark py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card-embossed p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-medium text-text-headline mb-2">{feature.title}</h3>
                <p className="text-sm text-text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Marquee — DARK */}
      <TestimonialMarquee />

      {/* Pricing Range Section — CREAM */}
      <section className="section-cream py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Straight Talk on Pricing
          </h2>
          <div className="text-lg max-w-2xl mx-auto mb-8 space-y-4" style={{ color: '#4A4A45' }}>
            <p>We&apos;re not the cheapest. We&apos;re the ones that actually work.</p>
            <p>
              Most clients invest{" "}
              <span className="text-[#A85C30] font-semibold">$1,497 to $6,000+/month</span>{" "}
              — that&apos;s typically 2-3 booked jobs paying for the entire system.
            </p>
            <p>No hidden fees. No lock-in contracts. You stay because it&apos;s working, not because you&apos;re trapped.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center btn-dark px-8 py-4 text-base font-medium">
            Book a Free Call — See Your Custom ROI
          </Link>
        </div>
      </section>

      {/* Trust Section — CREAM */}
      <section className="section-cream py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              We Built This for Ourselves First
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A4A45' }}>
              Every system we sell, we ran on our own service business first. If it didn&apos;t work for us, we didn&apos;t build it for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-glass-cream p-6 text-center"
              >
                <div className="text-xl font-semibold text-[#A85C30] mb-2">{badge.stat}</div>
                <p className="text-sm text-[#7A766E]">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — DARK */}
      <section className="section-dark py-32 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl mb-8">
            Your competitors are <br />
            <span className="italic text-accent glow-text">already doing this.</span>
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Every day you wait, leads go to your competitor&apos;s voicemail instead of yours. Book a free 25-minute audit — we&apos;ll show you exactly where money is falling through the cracks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <ShinyButton href="/contact">Book Your Free Audit</ShinyButton>
            <Button href="/how-it-works" variant="glass" size="lg">See How It Works</Button>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import IndustryCard from "@/components/IndustryCard";
import BentoCard from "@/components/BentoCard";
import { Hero } from "@/components/ui/animated-hero";
import { Globe, Megaphone, Image, Zap, Phone, MessageSquare, Bot, Star, Camera, Box } from "lucide-react";

const services = [
  {
    href: "/services/website",
    icon: Globe,
    title: "Website Services",
    description: "Sites that convert, not just exist.",
  },
  {
    href: "/services/ads",
    icon: Megaphone,
    title: "Ads Management",
    description: "Get in front of buyers ready to hire.",
  },
  {
    href: "/services/content",
    icon: Image,
    title: "Content & Visual",
    description: "Look as good as your work actually is.",
  },
  {
    href: "/services/automation",
    icon: Zap,
    title: "Automation",
    description: "Stop losing leads to slow follow-up.",
  },
];

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

const features = [
  { icon: Phone, title: "Missed Call Text-Back", description: "Every missed call gets an instant text within 60 seconds." },
  { icon: MessageSquare, title: "AI Lead Qualification", description: "Automatically qualify leads 24/7 without lifting a finger." },
  { icon: Bot, title: "Voice Bot", description: "AI answers every call, books appointments, never misses." },
  { icon: Star, title: "Review Automation", description: "Turn happy customers into 5-star reviews automatically." },
  { icon: Camera, title: "Photo Transformation", description: "Make your project photos look professionally shot." },
  { icon: Box, title: "3D Rendering", description: "Show clients their dream before you build it." },
];

const trustBadges = [
  { stat: "$100K in 90 days", description: "We built this for ourselves first" },
  { stat: "No long-term contracts", description: "Cancel anytime" },
  { stat: "Live in 14 days", description: "Fast setup, no tech headaches" },
  { stat: "Results guaranteed", description: "15% more booked jobs in 60 days or your money back" },
];

export default function HomePage() {
  return (
    <>
      {/* Animated Hero Section */}
      <section className="gradient-hero">
        <Hero />
      </section>


      {/* Services Section */}
      <SectionWrapper className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-text-headline mb-4">
              Solutions for Every Service Business
            </h2>
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
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-medium text-text-headline mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Industries */}
      <SectionWrapper className="py-24 px-6 bg-bg-secondary">
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
      <SectionWrapper className="py-24 px-6">
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
      </SectionWrapper>

      {/* Feature Grid (6 cards) */}
      <SectionWrapper className="py-24 px-6 bg-bg-secondary">
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
      </SectionWrapper>

      {/* Testimonial */}
      <SectionWrapper className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} className="w-6 h-6 text-accent fill-accent" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-serif text-text-headline mb-8 leading-relaxed">
            &quot;We were losing 30+ calls a week to voicemail. First month with ServiceGrowth, we booked 47 extra jobs without hiring anyone.&quot;
          </blockquote>
          <p className="text-text-muted">— HVAC Company Owner</p>
        </div>
      </SectionWrapper>

      {/* Pricing Range Section */}
      <SectionWrapper className="py-24 px-6 bg-bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-text-headline mb-6">
            What does it cost?
          </h2>
          <div className="text-text-body text-lg max-w-2xl mx-auto mb-8 space-y-4">
            <p>Every system is different — because every business is different.</p>
            <p>
              Our solutions typically range from{" "}
              <span className="text-accent font-semibold">$1,497 to $6,000+/month</span>{" "}
              depending on your size, goals, and what you need built.
            </p>
            <p>We don&apos;t do cookie-cutter pricing. We build what fits, and we charge fairly for it.</p>
          </div>
          <Button href="/contact" variant="primary" size="lg">
            Book a Free Call — Get Your Custom Quote
          </Button>
        </div>
      </SectionWrapper>

      {/* Trust Section */}
      <SectionWrapper className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-text-headline mb-4">
              Built by Operators, Not Grifters
            </h2>
            <p className="text-text-body text-lg max-w-2xl mx-auto">
              Your growth isn&apos;t our experiment. It&apos;s our system.
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
                className="card-embossed p-6 text-center"
              >
                <div className="text-xl font-semibold text-accent mb-2">{badge.stat}</div>
                <p className="text-sm text-text-muted">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-text-headline mb-8">
            Ready to stop <br />
            <span className="italic text-accent">losing leads?</span>
          </h2>
          <p className="text-text-body text-xl mb-12 max-w-2xl mx-auto">
            Book a free 25-minute audit. We&apos;ll show you exactly where you&apos;re bleeding money—whether you hire us or not.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">Book Your Free Audit</Button>
            <Button href="/how-it-works" variant="glass" size="lg">See How It Works</Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

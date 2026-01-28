"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import { BookOpen, Video, FileText, Users } from "lucide-react";

export default function CommunityPage() {
  const features = [
    {
      icon: BookOpen,
      title: "AI Courses",
      description: "Step-by-step training on implementing AI in your service business",
    },
    {
      icon: Video,
      title: "Live Q&A Calls",
      description: "Weekly calls where you can ask anything and get real answers",
    },
    {
      icon: FileText,
      title: "Templates & Workflows",
      description: "Plug-and-play systems you can implement yourself",
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Connect with other service business owners doing the same thing",
    },
  ];

  const pricing = [
    {
      title: "Included Free",
      price: "$0",
      description: "For ServiceGrowth.ai clients on any plan",
      cta: "Already a client? Access here",
      href: "/contact",
      featured: false,
    },
    {
      title: "Community Membership",
      price: "$97",
      period: "/mo",
      description: "For anyone who wants access without a full plan",
      cta: "Join The Growth Lab",
      href: "/contact",
      featured: true,
    },
  ];

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
            className="text-5xl md:text-7xl font-serif text-text-headline mb-6"
          >
            The Growth Lab
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-text-body max-w-2xl mx-auto"
          >
            Where service businesses learn to win with AI
          </motion.p>
        </div>
      </section>

      {/* Description */}
      <SectionWrapper className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-text-body leading-relaxed">
            The Growth Lab is our community for service business owners who want to understand AI,
            implement it themselves, and stay ahead of the curve.
          </p>
          <p className="text-lg text-text-body leading-relaxed mt-4">
            Whether you&apos;re a DIYer who wants to learn, or you just want to understand what&apos;s
            possible before you hire us — this is your place.
          </p>
        </div>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper className="py-20 px-6 bg-bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-text-headline text-center mb-12">
            What&apos;s Inside
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-embossed p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-medium text-text-headline mb-2">{feature.title}</h3>
                <p className="text-sm text-text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-text-headline text-center mb-12">
            Join The Growth Lab
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {pricing.map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-8 ${
                  plan.featured
                    ? "bg-accent/5 border-2 border-accent/30"
                    : "card-embossed"
                }`}
                style={plan.featured ? {
                  boxShadow: "0 0 60px rgba(42, 232, 253, 0.15)"
                } : {}}
              >
                <h3 className="text-xl font-medium text-text-headline mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-serif text-accent">{plan.price}</span>
                  {plan.period && <span className="text-text-muted">{plan.period}</span>}
                </div>
                <p className="text-text-muted text-sm mb-6">{plan.description}</p>
                <Button
                  href={plan.href}
                  variant={plan.featured ? "primary" : "glass"}
                  fullWidth
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Trust */}
      <SectionWrapper className="py-16 px-6 bg-bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-8 text-text-muted text-sm">
            <span>Learn from operators, not theorists</span>
            <span className="text-accent">•</span>
            <span>The same knowledge we use to run our own businesses</span>
            <span className="text-accent">•</span>
            <span>No fluff, no filler — just what works</span>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-text-headline mb-6">
            Ready to Level Up?
          </h2>
          <p className="text-text-body text-lg mb-8 max-w-xl mx-auto">
            Join hundreds of service business owners who are learning to leverage AI
            to grow their businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Join The Growth Lab — $97/mo
            </Button>
            <Button href="/contact" variant="glass" size="lg">
              Book a Call First
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

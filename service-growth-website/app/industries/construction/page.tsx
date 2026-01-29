"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import { Building2, Camera, Sparkles, Video, Bot, Mail, Globe, Clock, Zap, Star, Check } from "lucide-react";

const problems = [
  {
    icon: Camera,
    title: "Ugly Job Site Photos",
    description:
      "Your best work looks terrible in iPhone photos. Dark, cluttered, dusty shots don't show craftsmanship. Competitors with professional photos look better—even if their work is worse.",
  },
  {
    icon: Building2,
    title: '"I Can\'t Visualize It"',
    description:
      "Clients struggle to understand blueprints. They can't picture the finished product. So they delay, go with the \"safer\" choice, or pick the cheaper guy because they can't see the difference.",
  },
  {
    icon: Clock,
    title: "Slow Lead Response",
    description:
      "You're on site all day. By the time you call leads back, they've already talked to three other contractors. Speed wins in construction—but you can't be on your phone while working.",
  },
];

const renderingFeatures = [
  "Close 40% more high-ticket projects",
  "Eliminate \"that's not what I expected\" change orders",
  "Justify premium pricing with premium presentation",
];

const photoFeatures = [
  "Stand out on Google, Yelp, and social media",
  "Build a portfolio that attracts premium clients",
  "Stop losing high-end jobs to better-marketed competitors",
];

const stats = [
  { value: "60s", label: "Response Time", note: "vs. 3 days industry average" },
  { value: "24/7", label: "Coverage", note: "Nights, weekends, holidays" },
  { value: "0", label: "Missed Leads", note: "Every inquiry gets handled" },
];

const features = [
  {
    icon: Building2,
    title: "3D Rendering",
    description:
      "Photorealistic renders for patios, kitchens, additions, full builds.",
  },
  {
    icon: Sparkles,
    title: "Photo Transformation",
    description: "Turn job site photos into portfolio-quality images.",
  },
  {
    icon: Video,
    title: "Image Animation",
    description: "Make static portfolios come alive for social media.",
  },
  {
    icon: Bot,
    title: "AI Lead Response",
    description: "60-second response time, 24/7. Never miss a lead.",
  },
  {
    icon: Mail,
    title: "Quote Follow-Up",
    description: "Automatic follow-up sequences on every estimate.",
  },
  {
    icon: Globe,
    title: "Professional Website",
    description: "Look as established as the big guys. Because you are.",
  },
];

export default function ConstructionPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-20 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-sm text-text-body mb-8">
              <span className="text-2xl">🏗️</span>
              For Contractors, Remodelers, Builders & Architects
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl leading-[0.9] text-text-headline mb-8 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Close Bigger Jobs.
            <br />
            <span className="italic text-accent">Win Premium Clients.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-text-body max-w-3xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your work is incredible. Your marketing doesn&apos;t show it. 3D
            renders that sell the vision. Photo transformation that turns job
            sites into portfolios. AI that responds to leads while you&apos;re on
            site.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              See Your Project in 3D
            </Button>
            <Button href="/pricing" variant="glass" size="lg">
              View Pricing
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <SectionWrapper className="py-24 px-6 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-text-headline mb-12 font-serif">
            The Problem with Construction Marketing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                className="card-embossed p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl text-text-headline mb-2">{problem.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 3D Rendering Section */}
      <SectionWrapper className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-accent text-sm font-medium mb-2">
                CLOSE BIGGER DEALS
              </div>
              <h2 className="text-3xl md:text-4xl text-text-headline mb-6 font-serif">
                3D Rendering That Sells the Vision
              </h2>
              <p className="text-text-body leading-relaxed mb-6">
                Show clients exactly what their project will look
                like—photorealistic 3D renders that eliminate &ldquo;I
                can&apos;t visualize it&rdquo; objections and close deals faster
                at higher prices.
              </p>
              <ul className="space-y-4 mb-8">
                {renderingFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-text-body">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="glass">
                Get a Sample Render →
              </Button>
            </motion.div>
            <motion.div
              className="card-embossed p-8 aspect-square flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(40, 232, 253, 0.1) 0%, rgba(40, 232, 253, 0.02) 100%)"
              }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <Building2 className="w-16 h-16 text-accent mx-auto mb-4" />
                <p className="text-text-body text-sm">Photorealistic 3D Renders</p>
                <p className="text-text-muted text-xs mt-2">
                  Patios • Kitchens • Additions • Full Builds
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Photo Transformation Section */}
      <SectionWrapper className="py-24 px-6 bg-bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="card-embossed p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-bg-surface rounded-xl flex items-center justify-center border border-border">
                  <div className="text-center">
                    <Camera className="w-8 h-8 text-text-muted mx-auto mb-2" />
                    <p className="text-text-muted text-xs">Before</p>
                  </div>
                </div>
                <div className="aspect-square rounded-xl flex items-center justify-center border border-accent/30"
                  style={{
                    background: "linear-gradient(135deg, rgba(40, 232, 253, 0.15) 0%, rgba(40, 232, 253, 0.05) 100%)"
                  }}
                >
                  <div className="text-center">
                    <Sparkles className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="text-accent text-xs">After</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-accent text-sm font-medium mb-2">
                LOOK BETTER THAN THE COMPETITION
              </div>
              <h2 className="text-3xl md:text-4xl text-text-headline mb-6 font-serif">
                Photo Transformation
              </h2>
              <p className="text-text-body leading-relaxed mb-6">
                Turn job site photos into portfolio-ready images. AI enhancement
                removes clutter, fixes lighting, and makes your work look as
                good as it actually is.
              </p>
              <ul className="space-y-4 mb-8">
                {photoFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-text-body">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="glass">
                See Photo Transformation Demo →
              </Button>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* AI Lead Response */}
      <SectionWrapper className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-accent text-sm font-medium mb-2">
              RESPOND FASTER THAN THE COMPETITION
            </div>
            <h2 className="text-3xl md:text-4xl text-text-headline mb-4 font-serif">
              AI Lead Response
            </h2>
            <p className="text-text-body text-lg max-w-2xl mx-auto">
              While other contractors take 3 days to call back, you respond in
              60 seconds. AI captures, qualifies, and books estimates—even while
              you&apos;re on the job site.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="card-embossed p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl text-accent font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-text-headline mb-2">{stat.label}</div>
                <p className="text-text-muted text-sm">{stat.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonial */}
      <SectionWrapper className="py-24 px-6 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="card-embossed p-8 md:p-12 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-4 -right-4 bg-accent text-bg-primary font-bold px-4 py-2 rounded-full text-sm">
              Real Result
            </div>
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-6 h-6 text-accent fill-accent" />
              ))}
            </div>
            <p className="text-text-headline text-xl md:text-2xl italic mb-8 leading-relaxed font-serif">
              &ldquo;The 3D renders helped us close a $150k backyard remodel.
              The client couldn&apos;t visualize it until we showed them the
              walkthrough. Game changer for high-end projects.&rdquo;
            </p>
            <div>
              <strong className="text-text-headline text-lg block">Sarah Jenkins</strong>
              <span className="text-text-muted">Lead Designer, Luxury Scapes</span>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* What's Included */}
      <SectionWrapper className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-text-headline mb-12 text-center font-serif">
            Full Visual + Automation Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="card-embossed p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg text-text-headline mb-2">{feature.title}</h3>
                <p className="text-text-muted text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-24 px-6 bg-bg-card border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-text-headline mb-6 font-serif">
            Ready to Win <span className="italic text-accent">Premium Projects?</span>
          </h2>
          <p className="text-text-body text-lg mb-8">
            Book a free strategy call. We&apos;ll show you how 3D renders and
            better visuals can help you close bigger deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get a Sample 3D Render
            </Button>
            <Button href="/pricing" variant="glass" size="lg">
              See Pricing
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

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
      "Your best work looks terrible in iPhone photos. Dark, cluttered, dusty shots don't show craftsmanship. Competitors with professional photos look better — even if their work is worse. In construction, perception is reality. The contractor who presents better wins the contract, regardless of who does better work.",
  },
  {
    icon: Building2,
    title: '"I Can\'t Visualize It"',
    description:
      "Clients struggle to understand blueprints and floor plans. They can't picture the finished product in their head. So they delay, go with the \"safer\" choice, or pick the cheaper guy because they can't see the value difference. You lose high-ticket projects to contractors who simply present better.",
  },
  {
    icon: Clock,
    title: "Slow Lead Response",
    description:
      "You're on site all day. By the time you call leads back, they've already talked to three other contractors and gotten two quotes. Speed wins in construction — the first contractor to respond books the estimate 78% of the time. But you can't be on your phone while framing a house.",
  },
];

const renderingFeatures = [
  "Close 40% more high-ticket projects with photorealistic previews",
  "Eliminate \"that's not what I expected\" change orders that eat your margin",
  "Justify premium pricing with premium presentation materials",
];

const photoFeatures = [
  "Stand out on Google, Yelp, and social media with portfolio-quality images",
  "Build a portfolio that attracts premium clients who value craftsmanship",
  "Stop losing high-end jobs to better-marketed competitors who do worse work",
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
      "Photorealistic renders for patios, kitchens, additions, full builds. Show clients exactly what they'll get before you break ground.",
  },
  {
    icon: Sparkles,
    title: "Photo Transformation",
    description: "Turn job site photos into portfolio-quality images. AI removes clutter, fixes lighting, and makes your work shine.",
  },
  {
    icon: Video,
    title: "Image Animation",
    description: "Make static portfolios come alive for social media. Animated walkthroughs that stop the scroll and generate inquiries.",
  },
  {
    icon: Bot,
    title: "AI Lead Response",
    description: "60-second response time, 24/7. Qualify leads, answer questions about your services, and book estimates while you're on the job site.",
  },
  {
    icon: Mail,
    title: "Quote Follow-Up",
    description: "Automatic follow-up sequences on every estimate. Day 2, Day 5, Day 7 messages that turn maybes into signed contracts.",
  },
  {
    icon: Globe,
    title: "Professional Website",
    description: "Look as established as the big guys. A website that showcases your portfolio, builds trust, and converts visitors into estimate requests.",
  },
];

export default function ConstructionPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-20 pb-24 px-6" style={{ backgroundColor: "#1A1A18" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
                  style={{
                    border: "1px solid rgba(194, 112, 58, 0.25)",
                    backgroundColor: "rgba(194, 112, 58, 0.08)",
                    color: "#B8B3AA",
                  }}
                >
                  <span className="text-2xl">🏗️</span>
                  For Contractors, Remodelers, Builders & Architects
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl leading-[0.9] mb-6"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: "#F5F0E8" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Your Competitors Are Getting Found on Google.
                <br />
                <span className="italic" style={{ color: "#C2703A" }}>Are You?</span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg max-w-xl leading-relaxed mb-10"
                style={{ color: "#B8B3AA" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Your work is incredible. Your marketing doesn&apos;t show it. 3D
                renders that sell the vision before you break ground. Photo transformation that turns dusty
                job sites into portfolio pieces. AI that responds to leads while you&apos;re on
                site — because the first contractor to respond wins the job 78% of the time.
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

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="/3d-excavator.png"
                alt="Construction AI Marketing"
                className="w-full max-w-md rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <SectionWrapper className="py-24 px-6" style={{ backgroundColor: "#F2EDE5" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>
            The Problem with Construction Marketing
          </h2>
          <p className="text-lg mb-12" style={{ color: "#4A4A45" }}>
            Construction companies do incredible work. But most of them market like it&apos;s 2005 — grainy photos, no online presence, and leads that go unanswered for days. Here&apos;s why the best builders often lose to the best marketers.
          </p>
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
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(194, 112, 58, 0.1)" }}
                >
                  <problem.icon className="w-6 h-6" style={{ color: "#A85C30" }} />
                </div>
                <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>{problem.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A4A45" }}>
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 3D Rendering Section */}
      <SectionWrapper className="py-24 px-6" style={{ backgroundColor: "#F2EDE5" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm font-medium mb-2" style={{ color: "#A85C30" }}>
                CLOSE BIGGER DEALS
              </div>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>
                3D Rendering That Sells the Vision
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "#4A4A45" }}>
                Show clients exactly what their project will look
                like — photorealistic 3D renders that eliminate &ldquo;I
                can&apos;t visualize it&rdquo; objections and close deals faster
                at higher prices. When a homeowner can see their dream kitchen or backyard oasis in stunning detail before you break ground, they stop shopping around and start signing contracts. This is the single most powerful sales tool in construction today.
              </p>
              <ul className="space-y-4 mb-8">
                {renderingFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: "rgba(168, 92, 48, 0.15)" }}
                    >
                      <Check className="w-3 h-3" style={{ color: "#A85C30" }} />
                    </div>
                    <span style={{ color: "#4A4A45" }}>{feature}</span>
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
                background: "linear-gradient(135deg, rgba(194, 112, 58, 0.1) 0%, rgba(194, 112, 58, 0.02) 100%)"
              }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <Building2 className="w-16 h-16 mx-auto mb-4" style={{ color: "#A85C30" }} />
                <p className="text-sm" style={{ color: "#4A4A45" }}>Photorealistic 3D Renders</p>
                <p className="text-xs mt-2" style={{ color: "#7A766E" }}>
                  Patios &bull; Kitchens &bull; Additions &bull; Full Builds
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Photo Transformation Section */}
      <section className="py-24 px-6" style={{ backgroundColor: "#EDE8DF" }}>
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
                <div
                  className="aspect-square rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#F2EDE5", border: "1px solid rgba(122, 118, 110, 0.2)" }}
                >
                  <div className="text-center">
                    <Camera className="w-8 h-8 mx-auto mb-2" style={{ color: "#7A766E" }} />
                    <p className="text-xs" style={{ color: "#7A766E" }}>Before</p>
                  </div>
                </div>
                <div
                  className="aspect-square rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(194, 112, 58, 0.15) 0%, rgba(194, 112, 58, 0.05) 100%)",
                    border: "1px solid rgba(194, 112, 58, 0.3)",
                  }}
                >
                  <div className="text-center">
                    <Sparkles className="w-8 h-8 mx-auto mb-2" style={{ color: "#A85C30" }} />
                    <p className="text-xs" style={{ color: "#A85C30" }}>After</p>
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
              <div className="text-sm font-medium mb-2" style={{ color: "#A85C30" }}>
                LOOK BETTER THAN THE COMPETITION
              </div>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>
                Photo Transformation
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "#4A4A45" }}>
                Turn job site photos into portfolio-ready images. AI enhancement
                removes clutter, fixes lighting, and makes your work look as
                good as it actually is. Your crew does amazing work — but an iPhone photo in bad lighting with tools scattered everywhere doesn&apos;t show that. We fix that problem permanently, turning every completed project into a sales asset.
              </p>
              <ul className="space-y-4 mb-8">
                {photoFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: "rgba(168, 92, 48, 0.15)" }}
                    >
                      <Check className="w-3 h-3" style={{ color: "#A85C30" }} />
                    </div>
                    <span style={{ color: "#4A4A45" }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="glass">
                See Photo Transformation Demo →
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Lead Response */}
      <SectionWrapper className="py-24 px-6" style={{ backgroundColor: "#F2EDE5" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm font-medium mb-2" style={{ color: "#A85C30" }}>
              RESPOND FASTER THAN THE COMPETITION
            </div>
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>
              AI Lead Response
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#4A4A45" }}>
              While other contractors take 3 days to call back, you respond in
              60 seconds. AI captures, qualifies, and books estimates — even while
              you&apos;re on the job site. The lead gets an instant, professional response with your company name, and you get a qualified appointment on your calendar. No more lost opportunities.
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
                <div className="text-4xl font-bold mb-2" style={{ color: "#A85C30" }}>
                  {stat.value}
                </div>
                <div className="mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>{stat.label}</div>
                <p className="text-sm" style={{ color: "#4A4A45" }}>{stat.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Website Mockup Section */}
      <section className="section-dark py-24 px-6" style={{ backgroundColor: "#1A1A18" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm font-medium mb-2" style={{ color: "#C2703A" }}>
                WEBSITES THAT WIN CONTRACTS
              </div>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}>
                Professional Websites for Construction Companies
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "#B8B3AA" }}>
                When a homeowner Googles &quot;kitchen remodeler near me,&quot; your website is your first impression. We build websites that look as good as the work you do — with stunning project galleries, 3D render showcases, service area maps, and estimate request forms that convert browsers into booked consultations. Your competitors with professional websites are getting found on Google. It&apos;s time you did too.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Project portfolio galleries with before/after comparisons",
                  "3D render showcase pages that sell the vision",
                  "Estimate request forms that capture qualified leads 24/7",
                  "SEO-optimized for local construction searches",
                  "Fast loading, mobile-first design for on-the-go homeowners",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: "rgba(194, 112, 58, 0.2)" }}
                    >
                      <Check className="w-3 h-3" style={{ color: "#C2703A" }} />
                    </div>
                    <span style={{ color: "#B8B3AA" }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary">
                See Website Examples →
              </Button>
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: "rgba(242, 237, 229, 0.1)" }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-3 flex items-center gap-2" style={{ backgroundColor: "rgba(242, 237, 229, 0.05)" }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28ca41" }} />
                </div>
                <div className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(242, 237, 229, 0.05)", color: "#7A766E" }}>
                  yourcontractingcompany.com
                </div>
              </div>
              <div className="p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(194, 112, 58, 0.08) 0%, rgba(26, 26, 24, 0.4) 100%)" }}>
                <Globe className="w-16 h-16 mx-auto mb-4" style={{ color: "#C2703A" }} />
                <p className="text-lg font-bold mb-2" style={{ color: "#F5F0E8" }}>Custom Construction Website</p>
                <p className="text-sm" style={{ color: "#B8B3AA" }}>Portfolio, 3D renders, estimate forms, reviews</p>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {["Portfolio", "3D Gallery", "Estimates"].map((item, i) => (
                    <div key={i} className="p-2 rounded-lg text-xs" style={{ backgroundColor: "rgba(194, 112, 58, 0.1)", color: "#C2703A" }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6" style={{ backgroundColor: "#EDE8DF" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="card-embossed p-8 md:p-12 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="absolute -top-4 -right-4 font-bold px-4 py-2 rounded-full text-sm"
              style={{ backgroundColor: "#C2703A", color: "#F2EDE5" }}
            >
              Real Result
            </div>
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-6 h-6" style={{ color: "#C2703A", fill: "#C2703A" }} />
              ))}
            </div>
            <p className="text-xl md:text-2xl italic mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-heading)', color: "#1A1A18" }}>
              &ldquo;The 3D renders helped us close a $150k backyard remodel.
              The client couldn&apos;t visualize it until we showed them the
              walkthrough. Game changer for high-end projects.&rdquo;
            </p>
            <div>
              <strong className="text-lg block" style={{ color: "#1A1A18" }}>Sarah Jenkins</strong>
              <span style={{ color: "#4A4A45" }}>Lead Designer, Luxury Scapes</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <SectionWrapper className="py-24 px-6" style={{ backgroundColor: "#F2EDE5" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>
            Full Visual + Automation Stack
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-12" style={{ color: "#4A4A45" }}>
            Everything you need to present better, respond faster, and win more contracts — from 3D renders to AI lead response.
          </p>
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
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(168, 92, 48, 0.1)" }}
                >
                  <feature.icon className="w-5 h-5" style={{ color: "#A85C30" }} />
                </div>
                <h3 className="text-lg mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A4A45" }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Form */}
      <section className="py-24 px-6" style={{ backgroundColor: "#F2EDE5" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="rounded-2xl p-8 md:p-12"
            style={{ backgroundColor: "#1A1A18" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}>
                Get Your Free Growth Analysis
              </h2>
              <p style={{ color: "#B8B3AA" }}>
                Find out how 3D renders, better visuals, and AI lead response can help you close bigger deals. Get a custom strategy for your construction business — no obligation.
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: "#B8B3AA" }}>Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      backgroundColor: "rgba(242, 237, 229, 0.08)",
                      border: "1px solid rgba(242, 237, 229, 0.15)",
                      color: "#F5F0E8",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: "#B8B3AA" }}>Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      backgroundColor: "rgba(242, 237, 229, 0.08)",
                      border: "1px solid rgba(242, 237, 229, 0.15)",
                      color: "#F5F0E8",
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: "#B8B3AA" }}>Phone</label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{
                    backgroundColor: "rgba(242, 237, 229, 0.08)",
                    border: "1px solid rgba(242, 237, 229, 0.15)",
                    color: "#F5F0E8",
                  }}
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: "#B8B3AA" }}>Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business — type of construction, average project size, current marketing challenges..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{
                    backgroundColor: "rgba(242, 237, 229, 0.08)",
                    border: "1px solid rgba(242, 237, 229, 0.15)",
                    color: "#F5F0E8",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl text-lg font-bold transition-all hover:opacity-90 cursor-pointer"
                style={{ backgroundColor: "#C2703A", color: "#F5F0E8" }}
              >
                Get Your Free Analysis
              </button>
              <p className="text-center text-xs" style={{ color: "#7A766E" }}>
                No spam. No obligation. Just a clear strategy to win more projects.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-dark py-24 px-6"
        style={{ backgroundColor: "#1A1A18", borderTop: "1px solid rgba(242, 237, 229, 0.1)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}>
            Ready to Win <span className="italic" style={{ color: "#C2703A" }}>Premium Projects?</span>
          </h2>
          <p className="text-lg mb-8" style={{ color: "#B8B3AA" }}>
            Book a free strategy call. We&apos;ll show you how 3D renders,
            better visuals, and AI lead response can help you close bigger deals
            and win the contracts your competitors are taking from you right now.
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
      </section>
    </>
  );
}

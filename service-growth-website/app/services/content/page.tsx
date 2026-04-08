"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import { Camera, Box, Video, Share2 } from "lucide-react";

const problems = [
  "Your iPhone photos do not show how good your work really is",
  "Competitors with worse work are winning jobs because their photos look better",
  "You do not have time to create content for social media every week",
  "Clients cannot visualize what their finished project will look like",
  "Your before-and-after photos look amateurish and do not get engagement",
  "You have no consistent brand presence online — just random posts when you remember",
];

const features = [
  {
    icon: Camera,
    title: "Photo Transformation",
    description: "Send us your job site photos and we turn them into professional-grade images that make your work look as good as it actually is. Sky replacements, color correction, staging — the works.",
  },
  {
    icon: Box,
    title: "3D Rendering",
    description: "Show clients their finished project before you ever pick up a tool. 3D renders help you close bigger jobs because clients can see exactly what they are paying for.",
  },
  {
    icon: Video,
    title: "Video & Animation",
    description: "Short-form video content that stops the scroll and gets people talking. Transformation videos, project walkthroughs, and branded animations that build authority.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Consistent, professional posts that build your brand and keep you top of mind with potential clients. We handle the content calendar so you can focus on your craft.",
  },
];

const process = [
  {
    step: "1",
    title: "Send Us Your Photos",
    description: "Snap some photos on the job or send us what you have. They do not need to be perfect — that is our job. We work with what you have got and make it look incredible.",
  },
  {
    step: "2",
    title: "We Transform Everything",
    description: "Our team enhances your photos, creates before-and-after content, builds 3D renders, and produces video content that showcases your work at its best.",
  },
  {
    step: "3",
    title: "Review & Approve",
    description: "You review everything before it goes anywhere. Want changes? We make them. You have final say on every piece of content that represents your business.",
  },
  {
    step: "4",
    title: "Deploy Everywhere",
    description: "Use your new content across your website, social media, Google Business Profile, proposals, and anywhere else you need to look professional.",
  },
];

const results = [
  { stat: "10x", label: "Better-looking photos" },
  { stat: "48hrs", label: "Average turnaround" },
  { stat: "3x", label: "More social engagement" },
  { stat: "2x", label: "Higher close rate on proposals" },
];

const contentTypes = [
  "Professional photo enhancement",
  "Before & after transformations",
  "3D project renders",
  "Short-form video content",
  "Social media post design",
  "Google Business Profile content",
  "Branded proposal templates",
  "Project spotlight graphics",
  "Testimonial graphics",
  "Monthly content calendar",
  "Hashtag & caption strategy",
  "Brand style guide",
];

export default function ContentServicePage() {
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
            Content & Visual
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl mb-6"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}
          >
            Look As Good As
            <br />
            <span className="text-[#C2703A] italic">Your Work Actually Is</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#B8B3AA] max-w-2xl mx-auto mb-8"
          >
            Professional photography, stunning before-and-afters, 3D renders, and social media content that makes your business impossible to ignore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              See What We Can Do
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
            Great work deserves great presentation. If your visuals are not doing your business justice, you are leaving money on the table.
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
            Your Work Is Incredible. Your Photos Should Be Too.
          </h2>
          <div className="space-y-6 text-[#B8B3AA] text-lg leading-relaxed">
            <p>
              You spend weeks or months delivering amazing work for your clients. Then you snap a few photos on your phone, maybe post one to Facebook, and move on to the next job.
            </p>
            <p>
              Meanwhile, your competitor — the one whose work is half as good as yours — has professional-looking photos everywhere. Their social media is active. Their website looks polished. And they are getting the jobs you should be getting.
            </p>
            <p>
              It is not fair. But it is fixable.
            </p>
            <p>
              We take your existing photos and transform them into professional-grade content. We create before-and-after showcases that stop people in their tracks. We build 3D renders that help you close bigger jobs.
            </p>
            <p>
              And we handle your social media so your business stays <span className="text-[#C2703A] font-semibold">visible, professional, and top of mind</span> — without you having to lift a finger.
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
              What We Create For You
            </h2>
            <p className="text-[#4A4A45] max-w-2xl mx-auto">
              Professional visual content that showcases your work, wins more jobs, and builds a brand people remember.
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
            {contentTypes.map((item, i) => (
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
              See What We Can Do With Your Photos
            </h2>
            <p className="text-[#B8B3AA] text-center mb-8 max-w-lg mx-auto">
              Send us a few project photos and we will show you what is possible. Free sample transformation included.
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
            Book a free call. We will show you examples of what we can do with your photos and outline a content plan for your business.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book a Call
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}

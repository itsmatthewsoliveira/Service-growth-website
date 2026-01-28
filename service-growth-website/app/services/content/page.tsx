"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import { Camera, Box, Video, Share2 } from "lucide-react";

const problems = [
  "Your iPhone photos don't show how good your work really is",
  "Competitors with worse work look better because of their photos",
  "You don't have time to create content for social media",
  "Clients can't visualize what their finished project will look like",
];

const features = [
  {
    icon: Camera,
    title: "Photo Transformation",
    description: "Turn your job site photos into professional-looking images.",
  },
  {
    icon: Box,
    title: "3D Rendering",
    description: "Show clients their dream project before you build it.",
  },
  {
    icon: Video,
    title: "Video & Animation",
    description: "Engaging video content that stops the scroll.",
  },
  {
    icon: Share2,
    title: "Social Content",
    description: "Consistent, professional posts that build your brand.",
  },
];

const process = [
  {
    step: "1",
    title: "Send Photos",
    description: "Send us your job site photos or project details.",
  },
  {
    step: "2",
    title: "We Transform",
    description: "Our AI enhances your photos or creates stunning 3D renders.",
  },
  {
    step: "3",
    title: "Review & Approve",
    description: "You review the results and request any adjustments.",
  },
  {
    step: "4",
    title: "Use Everywhere",
    description: "Use your new content on your website, social media, and proposals.",
  },
];

const results = [
  { stat: "10x", label: "Better-looking photos" },
  { stat: "48hrs", label: "Turnaround time" },
  { stat: "3x", label: "More engagement" },
  { stat: "∞", label: "Uses per image" },
];

export default function ContentServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-6 gradient-hero overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-6"
          >
            Content & Visual
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-text-headline mb-6"
          >
            Look As Good As
            <br />
            <span className="text-accent italic">Your Work Actually Is</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-body max-w-2xl mx-auto mb-8"
          >
            AI-powered photo transformation, 3D renders, and social content that makes
            your work stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              Book a Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <SectionWrapper className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-text-headline text-center mb-12">
            Sound Familiar?
          </h2>
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
                  <span className="text-red-400 text-sm">✗</span>
                </div>
                <p className="text-text-body">{problem}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Solution Section */}
      <SectionWrapper className="py-20 px-6 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-text-headline mb-4">
              What We Create For You
            </h2>
            <p className="text-text-body max-w-2xl mx-auto">
              Professional visual content that showcases your work and wins more jobs.
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
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-medium text-text-headline mb-2">{feature.title}</h3>
                <p className="text-text-muted text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-text-headline text-center mb-12">
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
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-semibold text-lg">{step.step}</span>
                </div>
                <div className="card-embossed p-6 flex-1">
                  <h3 className="text-lg font-medium text-text-headline mb-2">{step.title}</h3>
                  <p className="text-text-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Results */}
      <SectionWrapper className="py-20 px-6 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-text-headline text-center mb-12">
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
                <div className="text-4xl font-semibold text-accent mb-2">{result.stat}</div>
                <p className="text-text-muted text-sm">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-text-headline mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-text-body text-lg mb-8">
            Book a free call. We&apos;ll show you examples of what we can do with your photos.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book a Call
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}

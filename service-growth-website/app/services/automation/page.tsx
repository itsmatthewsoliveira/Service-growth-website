"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import { Phone, MessageSquare, Bot, Star } from "lucide-react";

const problems = [
  "You are too busy on the job to answer every call that comes in",
  "Leads go cold because you cannot follow up fast enough",
  "Missed calls mean missed jobs — and your competitor picks them up",
  "You are losing to businesses that simply respond faster than you",
  "Your review count is low because you never remember to ask happy clients",
  "You spend hours every week on manual follow-up emails and texts",
];

const features = [
  {
    icon: Phone,
    title: "Missed Call Text-Back",
    description: "Every missed call gets an instant text message within 60 seconds. The lead knows you are real, you are responsive, and you will call them back. No more lost opportunities because you were on a ladder.",
  },
  {
    icon: Bot,
    title: "AI Lead Qualification",
    description: "Our AI voice bot answers calls 24/7, asks the right questions, qualifies the lead, and books appointments directly on your calendar. It sounds natural, not robotic.",
  },
  {
    icon: MessageSquare,
    title: "Automated Follow-Up",
    description: "Smart email and SMS sequences that nurture leads automatically. From initial inquiry to booked appointment, every touchpoint is handled without you lifting a finger.",
  },
  {
    icon: Star,
    title: "Review Automation",
    description: "After every completed job, your customers get a friendly text asking for a Google review. Your 5-star count goes up on autopilot. More reviews means more trust means more jobs.",
  },
];

const process = [
  {
    step: "1",
    title: "Map Your Customer Journey",
    description: "We walk through your entire lead flow — from first call to closed job. We identify every spot where leads fall through the cracks and where you are losing money to slow response times.",
  },
  {
    step: "2",
    title: "Build Your AI Systems",
    description: "We build your custom voice bot, write your follow-up sequences, configure your missed call text-back, and set up your review automation. Everything tailored to your business and your voice.",
  },
  {
    step: "3",
    title: "Integrate Everything",
    description: "We connect your automation to your CRM, phone system, calendar, and any other tools you use. Everything talks to each other so nothing slips through the cracks.",
  },
  {
    step: "4",
    title: "Launch & Optimize",
    description: "Your automation goes live and starts working 24/7. We monitor performance, tune the AI responses, and optimize your sequences based on real data. It only gets better over time.",
  },
];

const results = [
  { stat: "<60s", label: "Average response time" },
  { stat: "0", label: "Missed opportunities" },
  { stat: "24/7", label: "Always available" },
  { stat: "15%+", label: "More booked jobs" },
];

const automationList = [
  "Missed call text-back (under 60 seconds)",
  "AI voice bot for inbound calls",
  "Lead qualification & scoring",
  "Automated appointment booking",
  "SMS follow-up sequences",
  "Email nurture campaigns",
  "Google review request automation",
  "CRM integration & setup",
  "Calendar sync & booking links",
  "Lead source tracking",
  "Monthly performance reports",
  "Dedicated automation specialist",
];

export default function AutomationServicePage() {
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
            Automation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl mb-6"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}
          >
            Stop Losing Leads to
            <br />
            <span className="text-[#C2703A] italic">Slow Follow-Up</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#B8B3AA] max-w-2xl mx-auto mb-8"
          >
            AI-powered systems that respond instantly, qualify leads automatically, book appointments, and request reviews — all while you are on the jobsite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              See It In Action
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
            You are great at what you do. But you cannot answer the phone when you are knee-deep in a project. That is where the money leaks.
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
            The Business That Responds First Wins the Job
          </h2>
          <div className="space-y-6 text-[#B8B3AA] text-lg leading-relaxed">
            <p>
              Here is a stat that should keep you up at night: 78% of customers hire the first business that responds to their inquiry. Not the best. Not the cheapest. The first.
            </p>
            <p>
              When someone calls and you do not answer, they do not leave a voicemail. They call the next contractor on the list. By the time you call back at the end of the day, that lead is already booked with someone else.
            </p>
            <p>
              Our automation systems fix this completely. When someone calls and you miss it, they get a text back in under 60 seconds. Your AI voice bot can answer calls around the clock, ask qualifying questions, and book appointments directly on your calendar.
            </p>
            <p>
              After every completed job, your customers automatically get a review request. Your follow-up sequences keep warm leads engaged until they are ready to book.
            </p>
            <p>
              The result? <span className="text-[#C2703A] font-semibold">Zero missed opportunities. More 5-star reviews. And a business that runs even when you are not at your desk.</span>
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
              What We Build For You
            </h2>
            <p className="text-[#4A4A45] max-w-2xl mx-auto">
              A complete AI-powered system that captures every lead, follows up automatically, and keeps your pipeline full without adding a single employee.
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
            {automationList.map((item, i) => (
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
              See How Many Leads You Are Missing
            </h2>
            <p className="text-[#B8B3AA] text-center mb-8 max-w-lg mx-auto">
              We will audit your current follow-up process and show you exactly where leads are falling through. Free and no obligation.
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
            Book a free call. We will show you exactly where you are losing leads and how to fix it — usually in under 30 minutes.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book a Call
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}

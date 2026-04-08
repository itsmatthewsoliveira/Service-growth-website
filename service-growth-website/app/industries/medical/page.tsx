"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import { Shield, Heart, Calendar, Phone, Bot, Star, RefreshCw, Lock, MessageSquare, Globe, Check } from "lucide-react";

const challenges = [
  {
    icon: Lock,
    title: "HIPAA Compliance",
    description:
      "You can't just use any software. It needs to be secure, compliant, and trustworthy. We get it — that's why we only use HIPAA-compliant systems and sign BAAs. Every piece of patient data is encrypted in transit and at rest, and our systems undergo regular security audits to ensure full compliance with federal regulations.",
  },
  {
    icon: Heart,
    title: "Patient Trust",
    description:
      "Medical feels personal. Automation can feel cold. Our AI is conversational and warm — patients appreciate the instant response more than they notice the automation. We've fine-tuned our messaging to match the compassionate tone your patients expect from a healthcare provider, not a call center.",
  },
  {
    icon: Calendar,
    title: "No-Shows Kill Revenue",
    description:
      "Empty chairs cost you $200-500+ per hour. Automated reminders via text and email reduce no-shows by 30-50%, keeping your schedule full and revenue flowing. That's tens of thousands of dollars recovered annually — money that was walking out the door every single month.",
  },
];

const services = [
  {
    category: "REDUCE NO-SHOWS",
    title: "Appointment Reminders (SMS/Email)",
    description:
      "Automated text and email reminders sent at optimal times — 48 hours before, 24 hours before, and 2 hours before the appointment. Confirmation requests with one-tap reply. Easy rescheduling links so patients can move their appointment instead of just not showing up. The result is a dramatically fuller schedule and fewer gaps in your day.",
    result: "30-50% reduction in no-shows",
  },
  {
    category: "CAPTURE NEW PATIENTS",
    title: "AI Lead Capture",
    description:
      "Respond to new patient inquiries instantly — even after hours. AI qualifies the lead, answers common questions about insurance acceptance, office hours, and services offered, then books the first appointment before the patient moves on to the next practice. Speed matters: practices that respond within 5 minutes are 10x more likely to convert than those who wait an hour.",
    result: "60-second response time, 24/7",
  },
  {
    category: "BUILD REPUTATION",
    title: "Review Automation",
    description:
      "Automatically request reviews at the perfect moment — right after a positive appointment when the patient is still feeling great about their experience. Personalized text and email templates make it effortless for patients to leave a review. Build the 5-star reputation that drives referrals and shows up at the top of local search results.",
    result: "More 5-star reviews, more referrals",
  },
  {
    category: "AFTER HOURS COVERAGE",
    title: "Voice Bot (After Hours)",
    description:
      "\"Our office is closed, but I can help you schedule...\" AI handles after-hours calls with a warm, professional tone. It answers common questions about office hours, accepted insurance, and available services, then books appointments for the next available slot. Urgent calls are flagged and routed appropriately.",
    result: "Never miss a new patient call",
  },
];

const objections = [
  {
    question: '"Is this HIPAA compliant?"',
    answer:
      "Yes. We use HIPAA-compliant systems and sign Business Associate Agreements (BAAs). Your patient data is protected with end-to-end encryption. We understand the unique requirements of medical practices and build our entire stack with compliance as the foundation — not an afterthought.",
  },
  {
    question: '"Will patients feel like they\'re talking to a robot?"',
    answer:
      "Our AI is conversational and warm. Patients appreciate the instant response more than they notice the automation. And here's the truth: patients prefer a quick, helpful text response over waiting on hold for 10 minutes or leaving a voicemail that never gets returned. The experience actually feels more attentive, not less.",
  },
  {
    question: '"We already have a front desk person."',
    answer:
      "Great — now they can focus on patients in the office instead of playing phone tag all day. The AI handles the repetitive stuff (reminders, follow-ups, after-hours calls) so your team can provide better in-person care. Most practices see their front desk staff become more effective and less stressed, not replaced.",
  },
  {
    question: '"What about patient privacy?"',
    answer:
      "We take privacy seriously. All data is encrypted, stored securely, and accessed only as needed. We follow strict security protocols and can provide full documentation of our compliance measures. We never sell or share patient data, and our systems are designed to meet or exceed HIPAA requirements at every level.",
  },
];

const features = [
  {
    icon: MessageSquare,
    title: "SMS Appointment Reminders",
    description: "Automated text reminders that reduce no-shows dramatically. 48-hour, 24-hour, and 2-hour sequences with one-tap confirmation.",
  },
  {
    icon: Bot,
    title: "AI Lead Capture",
    description: "Respond to new patient inquiries in under 60 seconds, 24/7. Qualify leads, answer insurance questions, and book appointments automatically.",
  },
  {
    icon: Star,
    title: "Review Generation",
    description:
      "Automated review requests timed perfectly after positive visits. Build a 5-star reputation on Google, Healthgrades, and Yelp without manual effort.",
  },
  {
    icon: Phone,
    title: "After-Hours Voice Bot",
    description:
      "AI handles calls when your office is closed. Never miss a new patient inquiry. Warm, professional tone that reflects your practice's standards.",
  },
  {
    icon: RefreshCw,
    title: "Patient Reactivation",
    description:
      "Automated outreach to dormant patients who haven't visited in 6+ months. Fill gaps in your schedule with patients who already know and trust you.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "All systems HIPAA-compliant. BAAs signed. Data encrypted and protected. Regular security audits ensure ongoing compliance.",
  },
];

export default function MedicalPage() {
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
                  <span className="text-2xl">🩺</span>
                  For Dentists, Chiropractors, Med Spas & Clinics
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl leading-[0.9] mb-6"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: "#F5F0E8" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Empty Chairs Cost You
                <br />
                <span className="italic" style={{ color: "#C2703A" }}>$500+ Per Hour.</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl leading-relaxed mb-4"
                style={{ color: "#B8B3AA" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                Revenue-focused.
              </motion.p>

              <motion.p
                className="text-base md:text-lg max-w-xl leading-relaxed mb-10"
                style={{ color: "#B8B3AA" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                No-shows cost you $200-500+ per hour. Patients ghost after inquiring.
                Your front desk is overwhelmed. Our AI reduces no-shows, captures
                every new patient inquiry, and keeps your schedule full — all while
                maintaining strict HIPAA compliance and the warm, professional tone
                your patients expect.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button href="/contact" variant="primary" size="lg">
                  Reduce No-Shows by 40%
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
                src="/3d-medical.png"
                alt="Medical AI Marketing"
                className="w-full max-w-md rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* HIPAA Badge */}
      <SectionWrapper className="px-6 pb-12 pt-12" style={{ backgroundColor: "#F2EDE5" }}>
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-xl p-4 flex items-center gap-4"
            style={{
              backgroundColor: "rgba(34, 139, 34, 0.06)",
              border: "1px solid rgba(34, 139, 34, 0.2)",
            }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(34, 139, 34, 0.1)" }}
            >
              <Shield className="w-6 h-6" style={{ color: "#2E7D32" }} />
            </div>
            <div>
              <div className="font-medium" style={{ color: "#2E7D32" }}>HIPAA Compliant</div>
              <div className="text-sm" style={{ color: "#4A4A45" }}>
                All systems are HIPAA-compliant. We sign BAAs. Your patient data
                is encrypted and protected at every level.
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Challenges */}
      <section className="py-24 px-6" style={{ backgroundColor: "#EDE8DF" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>
            We Understand Medical Practices
          </h2>
          <p className="text-lg mb-12" style={{ color: "#4A4A45" }}>
            Healthcare marketing isn&apos;t like other industries. You need tools that respect patient privacy, meet compliance requirements, and still deliver a warm, human experience. Here&apos;s how we approach the unique challenges your practice faces every day.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((item, i) => (
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
                  style={{ backgroundColor: "rgba(168, 92, 48, 0.1)" }}
                >
                  <item.icon className="w-6 h-6" style={{ color: "#A85C30" }} />
                </div>
                <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A4A45" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services */}
      <SectionWrapper className="py-24 px-6" style={{ backgroundColor: "#F2EDE5" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>
            What Matters Most for Your Practice
          </h2>
          <p className="mb-12 text-lg" style={{ color: "#4A4A45" }}>
            The services that move the needle for medical practices. Each one is built with compliance, patient experience, and revenue growth in mind.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="card-embossed p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-sm font-medium mb-2" style={{ color: "#A85C30" }}>
                  {service.category}
                </div>
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>{service.title}</h3>
                <p className="leading-relaxed mb-4" style={{ color: "#4A4A45" }}>
                  {service.description}
                </p>
                <div className="text-lg font-bold" style={{ color: "#A85C30" }}>
                  {service.result}
                </div>
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
              className="rounded-2xl overflow-hidden border order-2 md:order-1"
              style={{ borderColor: "rgba(242, 237, 229, 0.1)" }}
              initial={{ opacity: 0, x: -20 }}
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
                  yourpractice.com
                </div>
              </div>
              <div className="p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(194, 112, 58, 0.08) 0%, rgba(26, 26, 24, 0.4) 100%)" }}>
                <Globe className="w-16 h-16 mx-auto mb-4" style={{ color: "#C2703A" }} />
                <p className="text-lg font-bold mb-2" style={{ color: "#F5F0E8" }}>Custom Medical Practice Website</p>
                <p className="text-sm" style={{ color: "#B8B3AA" }}>Online booking, patient portal, insurance info</p>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {["Online Booking", "Patient Forms", "Insurance"].map((item, i) => (
                    <div key={i} className="p-2 rounded-lg text-xs" style={{ backgroundColor: "rgba(194, 112, 58, 0.1)", color: "#C2703A" }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm font-medium mb-2" style={{ color: "#C2703A" }}>
                WEBSITES THAT CONVERT PATIENTS
              </div>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#F5F0E8' }}>
                Professional Websites for Medical Practices
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "#B8B3AA" }}>
                Your website is the first impression new patients get of your practice. We build clean, modern, HIPAA-aware websites with online appointment booking, patient intake forms, insurance information pages, and provider bios. Every element is designed to build trust and make it effortless for patients to choose your practice and book their first visit.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Online appointment booking integrated with your scheduling system",
                  "Digital patient intake forms to reduce front desk workload",
                  "Insurance and accepted plans pages for transparency",
                  "Provider bios and credentials that build patient trust",
                  "ADA accessible and mobile-optimized for all devices",
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
          </div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="py-24 px-6" style={{ backgroundColor: "#EDE8DF" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>
            Common Questions from Medical Practices
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-12" style={{ color: "#4A4A45" }}>
            We hear these questions from practice owners and office managers every week. Here are the honest answers.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {objections.map((item, i) => (
              <motion.div
                key={i}
                className="card-embossed p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-lg mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: "#A85C30" }}>{item.question}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A4A45" }}>
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <SectionWrapper className="py-24 px-6" style={{ backgroundColor: "#F2EDE5" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#1A1A18' }}>
            What&apos;s Included
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-12" style={{ color: "#4A4A45" }}>
            A complete patient acquisition and retention system — built for the unique requirements of healthcare.
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
                Get Your Free Practice Analysis
              </h2>
              <p style={{ color: "#B8B3AA" }}>
                Find out how much empty chair time is costing your practice — and get a custom plan to fill your schedule. HIPAA-compliant consultation. No obligation.
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
                    placeholder="your@practice.com"
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
                  placeholder="Tell us about your practice — type of practice, number of providers, current no-show rate, and what challenges you're facing..."
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
                HIPAA-compliant consultation. No spam. No obligation.
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
            Ready to Fill <span className="italic" style={{ color: "#C2703A" }}>Your Schedule?</span>
          </h2>
          <p className="text-lg mb-8" style={{ color: "#B8B3AA" }}>
            Book a free 15-minute audit. We&apos;ll show you how much empty
            chair time is costing you — and how to fix it. Most practices see
            a 30-50% reduction in no-shows within the first month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get Your Free Audit
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

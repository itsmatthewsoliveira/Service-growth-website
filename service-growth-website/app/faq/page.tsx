"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "@/components/Button";
import { Plus, Minus } from "lucide-react";

const faqSections = [
  {
    title: "General Questions",
    items: [
      {
        question: 'What exactly does "AI automation" do for my business?',
        answer:
          "It responds to leads instantly, follows up automatically, books appointments, and handles repetitive tasks—24/7, without hiring anyone. Think of it as a tireless employee that handles all the communication grunt work so your team can focus on closing deals.",
      },
      {
        question: "Is this going to replace my staff?",
        answer:
          "No. It handles the grunt work so your team can focus on closing deals and doing great work. Most clients don't fire anyone—they just stop needing to hire the next person.",
      },
      {
        question: "How is this different from other AI companies?",
        answer:
          'We built this for ourselves first. We scaled our own service business to $100k/month using these systems before we ever offered them to clients. Most "AI agencies" just resell white-label tools. We know what works because we\'ve done it.',
      },
      {
        question: "What if my customers don't want to talk to a bot?",
        answer:
          "Most don't even notice. Our AI is conversational and natural. Customers prefer an instant response over waiting 3 hours for a human to call back. Speed beats everything. The bot books the appointment, then your human team takes over.",
      },
    ],
  },
  {
    title: "Setup & Process",
    items: [
      {
        question: "How long does it take to set up?",
        answer:
          "14 days from signed agreement to live. We handle everything—you just fill out a questionnaire (30 min) and show up for a couple of calls. Total time investment from you: about 2 hours.",
      },
      {
        question: "Do I need to change my CRM or phone system?",
        answer:
          "Usually not. We integrate with most major systems (GHL, HubSpot, Jobber, ServiceTitan, Housecall Pro, etc.). If you don't have a CRM, we'll set one up for you.",
      },
      {
        question: "Do I need to hire someone to manage this?",
        answer:
          "No. That's the point. The AI handles the work, we handle the strategy. You just focus on doing what you do best.",
      },
    ],
  },
  {
    title: "Pricing & Results",
    items: [
      {
        question: "How much does it cost?",
        answer:
          "Our solutions typically range from $1,497 to $6,000+/month depending on your size, goals, and what you need built. Every system is custom—book a call to get your specific quote.",
      },
      {
        question: "What if it doesn't work for my business?",
        answer:
          "We guarantee results. If you don't see at least 15% more booked jobs within 60 days, we work for free until you do—or refund your setup fee.",
      },
      {
        question: "Are there any long-term contracts?",
        answer:
          "No. Month-to-month. We earn your business every month. If you're not seeing results, you can cancel anytime.",
      },
    ],
  },
  {
    title: "Industry-Specific",
    items: [
      {
        question: "Do you work with businesses in my area?",
        answer:
          "We work with service businesses across the US. Everything is done remotely. As long as you're in Home Services, Medical, or Construction, we can help.",
      },
      {
        question: "Is this HIPAA compliant? (For medical businesses)",
        answer:
          "Yes. We use HIPAA-compliant systems and sign BAAs. Your patient data is protected.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-glass-cream overflow-hidden rounded-2xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full p-6 flex items-center justify-between text-left group cursor-pointer hover:bg-black/[0.02] transition-colors"
      >
        <span className="text-[#1A1A18] font-medium pr-4 group-hover:text-[#A85C30] transition-colors">
          {question}
        </span>
        <div className="relative w-5 h-5 flex-shrink-0">
          <Plus
            className={`absolute inset-0 w-5 h-5 text-[#A85C30] transition-all duration-300 ${
              isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
            }`}
            strokeWidth={2}
          />
          <Minus
            className={`absolute inset-0 w-5 h-5 text-[#A85C30] transition-all duration-300 ${
              isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
            }`}
            strokeWidth={2}
          />
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-6 pb-6 text-[#4A4A45] text-sm leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero - dark section */}
      <section className="section-dark relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C2703A]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif text-[#F5F0E8] mb-6"
          >
            Frequently Asked
            <br />
            <span className="italic text-[#C2703A]">Questions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-[#B8B3AA] max-w-2xl mx-auto"
          >
            Everything you need to know about working with us. Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="/contact" className="text-[#C2703A] hover:underline">
              Book a call
            </Link>{" "}
            and we&apos;ll answer directly.
          </motion.p>
        </div>
      </section>

      {/* FAQ Sections - cream background */}
      <section className="bg-[#F2EDE5] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {faqSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-serif text-[#1A1A18] mb-6">{section.title}</h2>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <FAQItem key={i} question={item.question} answer={item.answer} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA - dark section */}
      <section className="section-dark py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="card-embossed rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-serif text-[#F5F0E8] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-[#B8B3AA] mb-8">
              Book a free 15-minute call. We&apos;ll answer all your questions and show
              you exactly how this would work for your business.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

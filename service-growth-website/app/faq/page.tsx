import { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "FAQ - Service Growth AI",
  description:
    "Everything you need to know about working with Service Growth AI.",
};

const generalQuestions = [
  {
    question: 'What exactly does "AI automation" do for my business?',
    answer:
      "Short answer: It responds to leads instantly, follows up automatically, books appointments, and handles repetitive tasks—24/7, without hiring anyone. Think of it as a tireless employee that handles all the communication grunt work so your team can focus on closing deals and doing the actual work.",
  },
  {
    question: "Is this going to replace my staff?",
    answer:
      "No. It handles the grunt work (phone tag, follow-ups, scheduling) so your team can focus on closing deals and doing great work. Most of our clients don't fire anyone—they just stop needing to hire the next person.",
  },
  {
    question: "How is this different from other AI companies?",
    answer:
      "We built this for ourselves first. We scaled our own service business to $100k/month using these systems before we ever offered them to clients. Most \"AI agencies\" just resell white-label tools they've never actually used. We know what works because we've done it.",
  },
  {
    question: "What if my customers don't want to talk to a bot?",
    answer:
      "Most don't even notice. Our AI is conversational and natural. And here's the truth: customers prefer an instant response over waiting 3 hours for a human to call back. Speed beats everything. The bot books the appointment, then your human team takes over for the close.",
  },
];

const setupQuestions = [
  {
    question: "How long does it take to set up?",
    answer:
      "14 days from signed agreement to live. We handle everything—you just fill out a questionnaire (30 min) and show up for a couple of calls. Total time investment from you: about 2 hours.",
  },
  {
    question: "Do I need to change my CRM or phone system?",
    answer:
      "Usually not. We integrate with most major systems (GHL, HubSpot, Jobber, ServiceTitan, Housecall Pro, etc.). We work with what you have. If you don't have a CRM, we'll set one up for you.",
  },
  {
    question: "Do I need to hire someone to manage this?",
    answer:
      "No. That's the point. The AI handles the work, we handle the strategy. You just focus on doing what you do best. We monitor performance, optimize the systems, and handle any issues that come up.",
  },
  {
    question: "What if I already have a CRM / website / automation?",
    answer:
      "We integrate with what you have. No need to rip and replace—we make your existing tools work better. We'll audit what you have and identify gaps, then fill them.",
  },
];

const pricingQuestions = [
  {
    question: "How much does it cost?",
    answer:
      "Plans start at $1,497/month (Launchpad). Most clients are on our Growth Engine plan at $2,997/month, which includes the full AI system, voice bot, and website. Market Dominator is $5,997/month for businesses that want the complete visual + automation stack. See full pricing details on our pricing page.",
  },
  {
    question: "Why is this more expensive than other AI agencies?",
    answer:
      "Because we're not other AI agencies. We're not kids who watched a YouTube course—we actually scaled our own service business to $100k/month using these exact systems. You're paying for proven expertise, not experiments. Cheap AI gets you cheap results.",
  },
  {
    question: "What if it doesn't work for my business?",
    answer:
      "We guarantee results. If you don't see at least 15% more booked jobs within 60 days of going live, we'll work for free until you do—or refund your setup fee. No questions asked. We only win when you win.",
  },
  {
    question: "Can I start small and upgrade later?",
    answer:
      "Absolutely. Most clients start with Launchpad to stop losing leads, then upgrade to Growth Engine once they see results. No long-term contracts—upgrade or cancel anytime.",
  },
  {
    question: "Are there any long-term contracts?",
    answer:
      "No. Month-to-month. We earn your business every month. If you're not seeing results, you can cancel anytime. We believe if we do good work, you'll stay. We don't need contracts to keep you.",
  },
];

const industryQuestions = [
  {
    question: "Do you work with businesses in my area?",
    answer:
      "We work with service businesses across the US. Everything is done remotely—no need to be local. As long as you're in Home Services, Medical, or Construction, we can help.",
  },
  {
    question: "Is this HIPAA compliant? (For medical businesses)",
    answer:
      "Yes. We use HIPAA-compliant systems and sign Business Associate Agreements (BAAs). Your patient data is protected. We understand the unique requirements of medical practices and build accordingly.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We focus on three industries: Home Services (HVAC, plumbing, roofing, landscaping, cleaning), Medical (dentists, chiropractors, med spas, clinics), and Construction (contractors, remodelers, builders). These are industries where speed, trust, and professionalism make or break deals.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-16 pb-16 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl leading-[0.9] text-white mb-6 font-serif">
          Frequently Asked
          <br />
          <span className="italic text-white/50">Questions</span>
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-sans">
          Everything you need to know about working with us. Can&apos;t find
          what you&apos;re looking for?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Book a call
          </Link>{" "}
          and we&apos;ll answer directly.
        </p>
      </header>

      {/* FAQ Sections */}
      <section className="px-6 max-w-4xl mx-auto pb-24">
        {/* General Questions */}
        <div className="mb-12">
          <h2 className="text-2xl text-white mb-6 font-serif">General Questions</h2>
          <FAQAccordion items={generalQuestions} />
        </div>

        {/* Setup & Process */}
        <div className="mb-12">
          <h2 className="text-2xl text-white mb-6 font-serif">Setup & Process</h2>
          <FAQAccordion items={setupQuestions} />
        </div>

        {/* Pricing & Results */}
        <div className="mb-12">
          <h2 className="text-2xl text-white mb-6 font-serif">Pricing & Results</h2>
          <FAQAccordion items={pricingQuestions} />
        </div>

        {/* Industry-Specific */}
        <div className="mb-12">
          <h2 className="text-2xl text-white mb-6 font-serif">Industry-Specific</h2>
          <FAQAccordion items={industryQuestions} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 max-w-4xl mx-auto pb-24 text-center">
        <div className="bg-primary/10 border border-primary/30 rounded-[4px] p-8 md:p-12">
          <h2 className="text-3xl text-white mb-4 font-serif">
            Still Have Questions?
          </h2>
          <p className="text-white/60 mb-8">
            Book a free 15-minute call. We&apos;ll answer all your questions and
            show you exactly how this would work for your business.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book a Call
          </Button>
        </div>
      </section>
    </>
  );
}

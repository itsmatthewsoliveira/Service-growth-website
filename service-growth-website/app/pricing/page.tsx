import { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Pricing - Service Growth AI",
  description:
    "Simple pricing. Real results. No long-term contracts. If you don't see results in 60 days, we work for free until you do.",
};

const pricingPlans = [
  {
    title: "Launchpad",
    tagline: "For businesses ready to stop losing leads",
    price: "$1,497",
    period: "/mo",
    description:
      "Best for solo operators or small teams doing $30k-$75k/mo who need the basics working.",
    features: [
      { text: "Missed Call Text-Back" },
      { text: "Basic Email/SMS Automation (5 sequences)" },
      { text: "Lead Capture Forms" },
      { text: "CRM Setup & Integration" },
      { text: "Monthly Performance Report" },
    ],
    featured: false,
  },
  {
    title: "Growth Engine",
    tagline: "For businesses ready to scale without hiring",
    price: "$2,997",
    period: "/mo",
    description:
      "Best for businesses doing $75k-$250k/mo ready to grow 30-50% without hiring.",
    features: [
      { text: "Everything in Launchpad" },
      { text: "AI Lead Automation (24/7 capture, qualify, follow-up)", bold: true },
      { text: "Voice Chat Bot (AI answers calls 24/7)", bold: true },
      { text: "Unlimited Email/SMS Sequences" },
      { text: "Review Automation" },
      { text: "Website Included (or Optimization)" },
      { text: "Bi-weekly Strategy Calls" },
      { text: "Priority Support" },
    ],
    featured: true,
    badge: "MOST POPULAR",
  },
  {
    title: "Market Dominator",
    tagline: "For businesses ready to own their market",
    price: "$5,997",
    period: "/mo",
    description:
      "Best for businesses doing $250k+/mo competing for premium jobs.",
    features: [
      { text: "Everything in Growth Engine" },
      { text: "Photo Transformation (unlimited)", bold: true },
      { text: "3D Rendering (2 per month)", bold: true },
      { text: "Image Animation for Social" },
      { text: "Custom AI Workflows" },
      { text: "Dedicated Account Manager" },
      { text: "Weekly Strategy Calls" },
      { text: "Competitor Intelligence Reports" },
    ],
    featured: false,
  },
];

const addOns = [
  { name: "Website Build", price: "$3,997 - $7,997" },
  { name: "Additional 3D Renders", price: "$497 each" },
  { name: "Custom Voice Bot Training", price: "$997" },
];

const comparisonFeatures = [
  { feature: "Price", launchpad: "$1,497/mo", growth: "$2,997/mo", dominator: "$5,997/mo" },
  { feature: "Missed Call Text-Back", launchpad: true, growth: true, dominator: true },
  { feature: "Email/SMS Automation", launchpad: "5 sequences", growth: "Unlimited", dominator: "Unlimited" },
  { feature: "AI Lead Capture & Qualify", launchpad: false, growth: true, dominator: true },
  { feature: "Voice Chat Bot (24/7)", launchpad: false, growth: true, dominator: true },
  { feature: "Review Automation", launchpad: false, growth: true, dominator: true },
  { feature: "Website", launchpad: false, growth: "Included", dominator: "Included" },
  { feature: "Photo Transformation", launchpad: false, growth: false, dominator: "Unlimited" },
  { feature: "3D Rendering", launchpad: false, growth: false, dominator: "2/month" },
  { feature: "Strategy Calls", launchpad: false, growth: "Bi-weekly", dominator: "Weekly" },
  { feature: "Dedicated Account Manager", launchpad: false, growth: false, dominator: true },
];

const faqItems = [
  {
    question: "Why is this more expensive than other AI agencies?",
    answer:
      "Because we're not other AI agencies. We're not kids who watched a YouTube course—we actually scaled our own service business to $100k/month using these exact systems. You're paying for proven expertise, not experiments.",
  },
  {
    question: "What if it doesn't work for my business?",
    answer:
      "If you don't see at least 15% more booked jobs within 60 days of going live, we'll work for free until you do—or refund your setup fee. We only win when you win.",
  },
  {
    question: "Can I start small and upgrade later?",
    answer:
      "Absolutely. Most clients start with Launchpad to stop losing leads, then upgrade to Growth Engine once they see results. No long-term contracts—upgrade or cancel anytime.",
  },
  {
    question: "What's the setup process?",
    answer:
      "We handle everything. You fill out a short questionnaire, we build and configure your systems, and you're live within 14 days. Total time investment from you: about 2 hours.",
  },
  {
    question: "Do I need to hire someone to manage this?",
    answer:
      "No. That's the point. The AI handles the work, we handle the strategy. You just focus on doing what you do best.",
  },
];

function CheckIcon() {
  return <span className="text-primary">✓</span>;
}

function DashIcon() {
  return <span className="text-white/30">—</span>;
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-16 pb-12 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl leading-[0.9] text-white mb-6 font-serif">
          Simple Pricing.
          <br />
          <span className="italic text-white/50">Real Results.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
          No long-term contracts. No hidden fees. Cancel anytime.
          <br />
          If you don&apos;t see results in 60 days, we work for free until you
          do.
        </p>
      </header>

      {/* Pricing Cards */}
      <section className="px-6 max-w-7xl mx-auto pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-12 bg-muted rounded-[4px] p-8">
          <h3 className="text-2xl text-white mb-6 font-serif">One-Time Add-Ons</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-white/80">{addon.name}</span>
                <span className="text-white font-medium">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 max-w-7xl mx-auto pb-24">
        <h2 className="text-3xl md:text-4xl text-white text-center mb-12 font-serif">
          Compare Plans
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-white/50 font-medium">Feature</th>
                <th className="py-4 px-4 text-white font-medium">Launchpad</th>
                <th className="py-4 px-4 text-primary font-medium">
                  Growth Engine
                </th>
                <th className="py-4 px-4 text-white font-medium">
                  Market Dominator
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {comparisonFeatures.map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-4 px-4 text-white/60">{row.feature}</td>
                  <td className="py-4 px-4">
                    {typeof row.launchpad === "boolean" ? (
                      row.launchpad ? (
                        <CheckIcon />
                      ) : (
                        <DashIcon />
                      )
                    ) : (
                      <span className="text-white">{row.launchpad}</span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    {typeof row.growth === "boolean" ? (
                      row.growth ? (
                        <CheckIcon />
                      ) : (
                        <DashIcon />
                      )
                    ) : (
                      <span className="text-primary font-medium">
                        {row.growth}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    {typeof row.dominator === "boolean" ? (
                      row.dominator ? (
                        <CheckIcon />
                      ) : (
                        <DashIcon />
                      )
                    ) : (
                      <span className="text-white">{row.dominator}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Guarantee */}
      <section className="px-6 max-w-4xl mx-auto pb-24">
        <div className="bg-primary/10 border border-primary/30 rounded-[4px] p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6 font-serif">
            The &quot;More Booked Jobs&quot; Guarantee
          </h2>
          <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
            We&apos;re so confident this works that we guarantee results:{" "}
            <strong className="text-white">
              If you don&apos;t see at least 15% more booked jobs within 60 days
              of going live, we&apos;ll work for free until you do
            </strong>
            —or refund your entire setup fee. No questions asked.
          </p>
          <p className="text-white/50 text-sm">
            Why can we offer this? Because we used these exact systems to grow
            our own service business. We know what works.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 max-w-4xl mx-auto pb-24">
        <h2 className="text-3xl md:text-4xl text-white text-center mb-12 font-serif">
          Pricing FAQ
        </h2>
        <div className="space-y-6">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="bg-secondary border border-white/10 rounded-[4px] p-6"
            >
              <h3 className="text-lg text-white mb-3">{item.question}</h3>
              <p className="text-white/60 text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/faq" className="text-primary hover:underline">
            View all FAQs →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 max-w-4xl mx-auto pb-24 text-center">
        <h2 className="text-3xl md:text-4xl text-white mb-6 font-serif">
          Ready to Stop Losing Leads?
        </h2>
        <p className="text-white/60 text-lg mb-8">
          Book a free 15-minute audit. We&apos;ll show you exactly where
          you&apos;re losing leads—whether you hire us or not.
        </p>
        <Button href="/contact" variant="primary" size="lg">
          Book Your Free Audit
        </Button>
      </section>
    </>
  );
}

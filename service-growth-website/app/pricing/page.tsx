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
  return <span className="text-[#C2703A]">&#10003;</span>;
}

function DashIcon() {
  return <span className="text-[#B8B3AA]/30">&mdash;</span>;
}

export default function PricingPage() {
  return (
    <>
      {/* Hero - dark section */}
      <header className="section-dark pt-16 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl leading-[0.9] text-[#F5F0E8] mb-6 font-serif">
            Simple Pricing.
            <br />
            <span className="italic text-[#F5F0E8]/50">Real Results.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#B8B3AA] max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
            No long-term contracts. No hidden fees. Cancel anytime.
            <br />
            If you don&apos;t see results in 60 days, we work for free until you
            do.
          </p>
        </div>
      </header>

      {/* Pricing Cards - cream section */}
      <section className="bg-[#F2EDE5] px-6 pt-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.title}
                className={
                  plan.featured
                    ? "card-dark-on-cream p-8 flex flex-col h-full relative overflow-hidden rounded-2xl transition-transform hover:-translate-y-1 duration-300"
                    : "card-glass-cream p-8 flex flex-col h-full relative overflow-hidden rounded-2xl transition-transform hover:-translate-y-1 duration-300"
                }
              >
                {/* Badge for featured */}
                {plan.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-bold text-[#C2703A] uppercase tracking-wider bg-[#C2703A]/10 border border-[#C2703A]/30 rounded-full px-3 py-1">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  {plan.tagline && (
                    <p className={`text-xs font-medium uppercase tracking-wider mb-2 ${plan.featured ? "text-[#C2703A]" : "text-[#A85C30]"}`}>
                      {plan.tagline}
                    </p>
                  )}

                  <h3 className={`text-3xl md:text-4xl font-serif mb-4 ${plan.featured ? "text-[#F5F0E8]" : "text-[#1A1A18]"}`}>
                    {plan.title}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span className={`text-3xl sm:text-4xl font-serif ${plan.featured ? "text-[#F5F0E8]" : "text-[#1A1A18]"}`}>
                      {plan.price}
                    </span>
                    <span className={plan.featured ? "text-[#7A766E]" : "text-[#7A766E]"}>
                      {plan.period}
                    </span>
                  </div>

                  {plan.description && (
                    <p className={`text-sm leading-relaxed border-t pt-4 ${plan.featured ? "text-[#B8B3AA] border-[#F5F0E8]/10" : "text-[#4A4A45] border-[#1A1A18]/10"}`}>
                      {plan.description}
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => {
                    const featureText = typeof feature === "string" ? feature : feature.text;
                    const isBold = typeof feature !== "string" && feature.bold;
                    return (
                      <li key={i} className={`flex items-start gap-3 text-sm ${plan.featured ? "text-[#B8B3AA]" : "text-[#4A4A45]"}`}>
                        <svg
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.featured ? "text-[#C2703A]" : "text-[#7A766E]"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className={isBold ? (plan.featured ? "font-semibold text-[#F5F0E8]" : "font-semibold text-[#1A1A18]") : ""}>
                          {featureText}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <Button
                  href="/contact"
                  variant={plan.featured ? "primary" : "glass-dark"}
                  className="w-full justify-center"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mt-12 card-dark-on-cream p-8">
            <h3 className="text-2xl text-[#F5F0E8] mb-6 font-serif">One-Time Add-Ons</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {addOns.map((addon, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-[#B8B3AA]">{addon.name}</span>
                  <span className="text-[#F5F0E8] font-medium">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table - dark section */}
      <section className="section-dark px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#F5F0E8] text-center mb-12 font-serif">
            Compare Plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#F5F0E8]/10">
                  <th className="py-4 px-4 text-[#7A766E] font-medium">Feature</th>
                  <th className="py-4 px-4 text-[#F5F0E8] font-medium">Launchpad</th>
                  <th className="py-4 px-4 text-[#C2703A] font-medium">
                    Growth Engine
                  </th>
                  <th className="py-4 px-4 text-[#F5F0E8] font-medium">
                    Market Dominator
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {comparisonFeatures.map((row, i) => (
                  <tr key={i} className="border-b border-[#F5F0E8]/5">
                    <td className="py-4 px-4 text-[#B8B3AA]">{row.feature}</td>
                    <td className="py-4 px-4">
                      {typeof row.launchpad === "boolean" ? (
                        row.launchpad ? (
                          <CheckIcon />
                        ) : (
                          <DashIcon />
                        )
                      ) : (
                        <span className="text-[#F5F0E8]">{row.launchpad}</span>
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
                        <span className="text-[#C2703A] font-medium">
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
                        <span className="text-[#F5F0E8]">{row.dominator}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guarantee - cream section */}
      <section className="bg-[#F2EDE5] px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#C2703A]/10 border border-[#C2703A]/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl text-[#1A1A18] mb-6 font-serif">
              The &quot;More Booked Jobs&quot; Guarantee
            </h2>
            <p className="text-[#4A4A45] text-lg mb-6 max-w-2xl mx-auto">
              We&apos;re so confident this works that we guarantee results:{" "}
              <strong className="text-[#1A1A18]">
                If you don&apos;t see at least 15% more booked jobs within 60 days
                of going live, we&apos;ll work for free until you do
              </strong>
              &mdash;or refund your entire setup fee. No questions asked.
            </p>
            <p className="text-[#7A766E] text-sm">
              Why can we offer this? Because we used these exact systems to grow
              our own service business. We know what works.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ - cream section */}
      <section className="bg-[#F2EDE5] px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#1A1A18] text-center mb-12 font-serif">
            Pricing FAQ
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="card-glass-cream p-6 rounded-2xl"
              >
                <h3 className="text-lg text-[#1A1A18] mb-3 font-medium">{item.question}</h3>
                <p className="text-[#4A4A45] text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-[#A85C30] hover:underline">
              View all FAQs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA - dark section */}
      <section className="section-dark px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#F5F0E8] mb-6 font-serif">
            Ready to Stop Losing Leads?
          </h2>
          <p className="text-[#B8B3AA] text-lg mb-8">
            Book a free 15-minute audit. We&apos;ll show you exactly where
            you&apos;re losing leads&mdash;whether you hire us or not.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book Your Free Audit
          </Button>
        </div>
      </section>
    </>
  );
}

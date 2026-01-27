import { Metadata } from "next";
import TestimonialGrid from "@/components/sections/TestimonialGrid";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "AI for Home Services - HVAC, Plumbing, Roofing | Service Growth AI",
  description:
    "Stop losing jobs to voicemail. Our AI answers every call, books appointments, and follows up automatically—24/7.",
};

const painPoints = [
  {
    icon: "📵",
    title: "Leads Call After Hours",
    description:
      "You're on a job, can't answer. They call the next guy in Google. By the time you call back, they've already hired someone else.",
  },
  {
    icon: "⏰",
    title: "No Time for Follow-Up",
    description:
      "You send quotes and forget. Meanwhile, the competitor who followed up 3 times wins the job. You're too busy working to do the sales work.",
  },
  {
    icon: "👷",
    title: "Can't Hire Fast Enough",
    description:
      "You need help but can't find good techs. You're turning down work because you can't handle the volume. Growth feels impossible.",
  },
];

const solutions = [
  {
    pain: "Leads call after hours",
    title: "Missed Call Text-Back + Voice Bot",
    description:
      "Every call answered or texted instantly, 24/7. Appointments booked while you're on the roof. AI handles qualification so only serious leads make it to you.",
    resultLabel: "Result:",
    resultValue: "47 extra jobs",
    resultNote: "booked in first month (avg. client)",
  },
  {
    pain: "No time for follow-up",
    title: "Email/SMS Automation",
    description:
      "Automatic follow-up sequences that nurture every quote until they say yes or no. Day 2 check-in, Day 5 value add, Day 7 urgency. Never forget a follow-up again.",
    resultLabel: "Result:",
    resultValue: "25% → 41%",
    resultNote: "close rate improvement (avg. client)",
  },
  {
    pain: "Can't hire fast enough",
    title: "AI Lead Qualification",
    description:
      "Let AI handle the front-end—answering calls, qualifying leads, booking appointments. Your team focuses on closing and doing the work, not playing phone tag.",
    resultLabel: "Result:",
    resultValue: "10+ hours",
    resultNote: "saved per week on phone/admin work",
  },
];

const testimonials = [
  {
    quote:
      "We were losing 30+ calls a week to voicemail. First month with the AI system, we booked 47 extra jobs without hiring anyone.",
    author: "Mike R.",
    role: "HVAC Company Owner",
    rating: 5,
  },
  {
    quote:
      "I used to forget to follow up on quotes. Now it happens automatically. Our close rate went from 25% to 41%.",
    author: "James T.",
    role: "Plumbing Business Owner",
    rating: 5,
  },
  {
    quote:
      "I spent 2 hours a day on the phone scheduling. Now I spend 20 minutes reviewing what the AI already booked.",
    author: "Carlos M.",
    role: "Roofing Contractor",
    rating: 5,
  },
];

const features = [
  {
    icon: "📱",
    title: "Missed Call Text-Back",
    description:
      "Instant text when you can't answer. 90% of people prefer texting over voicemail.",
  },
  {
    icon: "🤖",
    title: "AI Voice Bot",
    description: "Answers calls 24/7, handles FAQs, books appointments. Sounds natural.",
  },
  {
    icon: "📧",
    title: "Email/SMS Automation",
    description: "Automatic follow-up on every quote. Never forget again.",
  },
  {
    icon: "⭐",
    title: "Review Automation",
    description:
      "Automatically request reviews at the perfect moment. Build your reputation.",
  },
  {
    icon: "📊",
    title: "CRM Integration",
    description: "Works with Jobber, ServiceTitan, Housecall Pro, and more.",
  },
  {
    icon: "🌐",
    title: "Website (Growth Plan)",
    description:
      "Professional site built to convert, integrated with your automation.",
  },
];

export default function HomeServicesPage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-16 pb-20 px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs font-medium mb-8 text-white/80">
          <span className="text-2xl">🏠</span>
          For HVAC, Plumbing, Roofing, Landscaping & Cleaning
        </div>
        <h1 className="text-5xl md:text-7xl leading-[0.9] text-white mb-8 font-serif">
          Stop Losing Jobs
          <br />
          <span className="italic text-white/50">to Voicemail.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed font-sans mb-10">
          You&apos;re on a job. Phone rings. You can&apos;t answer. They call
          your competitor. Sound familiar? Our AI answers every call, books
          appointments, and follows up automatically—24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/contact" variant="primary" size="lg">
            See How Many Leads You&apos;re Losing
          </Button>
          <Button href="/pricing" variant="secondary" size="lg">
            View Pricing
          </Button>
        </div>
      </header>

      {/* Pain Points */}
      <section className="bg-secondary py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-12 font-serif">
            We Know Your Pain Points
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="text-xl text-white">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-4 font-serif">
            How We Fix It
          </h2>
          <p className="text-white/60 mb-12 text-lg">
            AI that works 24/7 so you can focus on the actual work.
          </p>

          <div className="space-y-8">
            {solutions.map((sol, i) => (
              <div
                key={i}
                className="bg-muted border border-white/10 rounded-[4px] p-8 grid md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <div className="text-primary text-sm font-medium mb-2">
                    PAIN: {sol.pain}
                  </div>
                  <h3 className="text-2xl text-white mb-4 font-serif">{sol.title}</h3>
                  <p className="text-white/60 leading-relaxed">
                    {sol.description}
                  </p>
                </div>
                <div className="bg-secondary p-6 rounded-[4px]">
                  <div className="text-white/50 text-sm mb-2">
                    {sol.resultLabel}
                  </div>
                  <div className="text-3xl text-primary font-bold">
                    {sol.resultValue}
                  </div>
                  <div className="text-white/50 text-sm">{sol.resultNote}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-12 text-center font-serif">
            What Home Service Businesses Say
          </h2>
          <TestimonialGrid testimonials={testimonials} columns={3} />
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-12 text-center font-serif">
            What You Get
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-secondary border border-white/10 p-6 rounded-[4px]"
              >
                <div className="text-2xl mb-4">{feature.icon}</div>
                <h3 className="text-lg text-white mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6 font-serif">
            Ready to Stop Losing Jobs to Voicemail?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Book a free 15-minute audit. We&apos;ll show you exactly how many
            leads you&apos;re losing—and how to fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get Your Free Audit
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

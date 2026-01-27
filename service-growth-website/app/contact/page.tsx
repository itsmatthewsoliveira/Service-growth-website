"use client";

import { Metadata } from "next";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

const industryOptions = [
  { value: "hvac", label: "HVAC" },
  { value: "plumbing", label: "Plumbing" },
  { value: "roofing", label: "Roofing" },
  { value: "landscaping", label: "Landscaping" },
  { value: "cleaning", label: "Cleaning" },
  { value: "dental", label: "Dental" },
  { value: "chiropractic", label: "Chiropractic" },
  { value: "medspa", label: "Med Spa" },
  { value: "construction", label: "Construction / Contractor" },
  { value: "remodeling", label: "Remodeling" },
  { value: "other", label: "Other" },
];

const revenueOptions = [
  { value: "under30k", label: "Under $30k/month" },
  { value: "30-75k", label: "$30k - $75k/month" },
  { value: "75-150k", label: "$75k - $150k/month" },
  { value: "150-250k", label: "$150k - $250k/month" },
  { value: "250k+", label: "$250k+/month" },
];

const challengeOptions = [
  { value: "missed-calls", label: "Missed calls / slow response" },
  { value: "follow-up", label: "No time for follow-up" },
  { value: "no-shows", label: "Too many no-shows" },
  { value: "scaling", label: "Can't scale without hiring" },
  { value: "reviews", label: "Need more reviews" },
  { value: "website", label: "Website isn't converting" },
  { value: "other", label: "Other" },
];

const trustSignals = [
  "No long-term contracts",
  "Live in 14 days",
  "Results guaranteed or your money back",
];

const callExpectations = [
  "We'll learn about your business and current challenges",
  "We'll identify exactly where you're losing leads",
  "We'll show you what we'd build to fix it",
  "You decide if it makes sense—no pressure",
];

export default function ContactPage() {
  return (
    <>
      {/* Main Content */}
      <section className="pt-16 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column: Info */}
            <div>
              <h1 className="text-4xl md:text-5xl leading-[0.95] text-white mb-6 font-serif">
                Let&apos;s See If
                <br />
                <span className="italic text-white/50">We Can Help.</span>
              </h1>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                15-minute call. No pitch. We&apos;ll tell you exactly where
                you&apos;re losing leads—whether you hire us or not.
              </p>

              {/* Trust Signals */}
              <div className="space-y-4 mb-12">
                {trustSignals.map((signal, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0"
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
                    <span className="text-white/70">{signal}</span>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="bg-muted border border-white/10 rounded-[4px] p-6">
                <h3 className="text-lg text-white mb-4">
                  What to Expect on the Call
                </h3>
                <ol className="space-y-3 text-sm text-white/60">
                  {callExpectations.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="bg-primary/20 text-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-secondary border border-white/10 rounded-[4px] p-8">
              <h2 className="text-2xl text-white mb-6 font-serif">
                Book Your Free Audit
              </h2>

              <form action="#" method="POST" className="space-y-6">
                <Input
                  id="name"
                  name="name"
                  label="Your Name"
                  placeholder="John Smith"
                  required
                />

                <Input
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="john@company.com"
                  required
                />

                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  label="Phone Number"
                  placeholder="(555) 123-4567"
                  required
                />

                <Select
                  id="industry"
                  name="industry"
                  label="What industry are you in?"
                  options={industryOptions}
                  placeholder="Select your industry"
                  required
                />

                <Select
                  id="revenue"
                  name="revenue"
                  label="Current monthly revenue"
                  options={revenueOptions}
                  placeholder="Select a range"
                  required
                />

                <Select
                  id="challenge"
                  name="challenge"
                  label="What's your biggest challenge right now?"
                  options={challengeOptions}
                  placeholder="Select your challenge"
                  required
                />

                <Textarea
                  id="message"
                  name="message"
                  label="Anything else we should know?"
                  placeholder="Optional: Tell us more about your situation..."
                  rows={3}
                />

                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Book My Free Audit
                </Button>

                <p className="text-xs text-white/40 text-center">
                  By submitting, you agree to receive communication from Service
                  Growth AI. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="px-6 max-w-4xl mx-auto pb-24">
        <div className="text-center">
          <p className="text-white/50 mb-4">Prefer to reach out directly?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@servicegrowth.ai"
              className="text-primary hover:underline"
            >
              hello@servicegrowth.ai
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a href="tel:+1234567890" className="text-primary hover:underline">
              (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

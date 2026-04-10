"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, TrendingUp, Users, DollarSign, Zap } from "lucide-react";

const budgetOptions = [
  { value: "under-1k", label: "Under $1,000/mo", description: "Just getting started" },
  { value: "1k-3k", label: "$1,000 – $3,000/mo", description: "Ready to grow" },
  { value: "3k-5k", label: "$3,000 – $5,000/mo", description: "Scaling aggressively" },
  { value: "5k-plus", label: "$5,000+/mo", description: "Dominating my market" },
];

const results = [
  { icon: DollarSign, value: "$100K+", label: "Revenue in 3 months" },
  { icon: Users, value: "47+", label: "New clients booked" },
  { icon: Zap, value: "60s", label: "Average lead response" },
  { icon: TrendingUp, value: "5x", label: "Return on ad spend" },
];

const blueprintIncludes = [
  "How we generate 30+ leads per week from Google & Facebook",
  "The Yelp strategy that brings in high-ticket clients on autopilot",
  "Our exact Facebook Ads setup that gets $5–$15 leads",
  "The Google Ads keywords that convert at 25%+",
  "Speed-to-lead system that books estimates in under 60 seconds",
  "How to close 40%+ of your estimates with follow-up automation",
];

export default function GrowthBlueprintPage() {
  const [formData, setFormData] = useState({ phone: "", email: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/growth-blueprint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0C0C0C]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#C2703A]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left — Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#C2703A]/10 border border-[#C2703A]/30 text-[#C2703A] text-sm font-medium mb-6">
                Free for Construction Business Owners
              </span>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] leading-[1.1] mb-6">
                The Exact Blueprint We Used to Hit{" "}
                <span className="text-[#C2703A]">$100K in 3 Months</span>
              </h1>

              <p className="text-[#F5F0E8]/70 text-lg md:text-xl mb-8 leading-relaxed">
                No fluff. No theory. The real strategies — Google Ads, Facebook,
                Yelp, speed-to-lead — that took us from zero to six figures in
                90 days. Built specifically for contractors.
              </p>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {results.map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#1A1A18] border border-[#F5F0E8]/5"
                  >
                    <div className="p-2 rounded-lg bg-[#C2703A]/10">
                      <r.icon className="w-4 h-4 text-[#C2703A]" />
                    </div>
                    <div>
                      <p className="text-[#F5F0E8] font-bold text-lg leading-tight">
                        {r.value}
                      </p>
                      <p className="text-[#F5F0E8]/50 text-xs">{r.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {!submitted ? (
                <div className="relative p-8 rounded-2xl bg-[#1A1A18] border border-[#F5F0E8]/10 shadow-2xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#C2703A]/5 to-transparent pointer-events-none" />

                  <div className="relative">
                    <h2 className="font-heading text-2xl font-bold text-[#F5F0E8] mb-2">
                      Get the Free Blueprint
                    </h2>
                    <p className="text-[#F5F0E8]/60 text-sm mb-6">
                      Enter your info below and we&apos;ll send it straight to your inbox.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-[#F5F0E8]/80 mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#0C0C0C] border border-[#F5F0E8]/10 text-[#F5F0E8] placeholder:text-[#F5F0E8]/30 focus:outline-none focus:border-[#C2703A]/50 focus:ring-1 focus:ring-[#C2703A]/30 transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-[#F5F0E8]/80 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#0C0C0C] border border-[#F5F0E8]/10 text-[#F5F0E8] placeholder:text-[#F5F0E8]/30 focus:outline-none focus:border-[#C2703A]/50 focus:ring-1 focus:ring-[#C2703A]/30 transition-colors"
                        />
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-sm font-medium text-[#F5F0E8]/80 mb-1.5">
                          Monthly marketing budget
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {budgetOptions.map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() =>
                                setFormData({ ...formData, budget: opt.value })
                              }
                              className={`p-3 rounded-xl border text-left transition-all ${
                                formData.budget === opt.value
                                  ? "border-[#C2703A] bg-[#C2703A]/10 text-[#F5F0E8]"
                                  : "border-[#F5F0E8]/10 bg-[#0C0C0C] text-[#F5F0E8]/60 hover:border-[#F5F0E8]/20"
                              }`}
                            >
                              <span className="block text-sm font-medium">
                                {opt.label}
                              </span>
                              <span className="block text-xs opacity-60 mt-0.5">
                                {opt.description}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {error && (
                        <p className="text-red-400 text-sm">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={loading || !formData.budget}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#C2703A] hover:bg-[#D4804A] text-white font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Me the Blueprint
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-[#F5F0E8]/40 text-xs">
                        No spam. Unsubscribe anytime.
                      </p>
                    </form>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-[#1A1A18] border border-[#C2703A]/30 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C2703A]/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-[#C2703A]" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-[#F5F0E8] mb-2">
                    You&apos;re In!
                  </h2>
                  <p className="text-[#F5F0E8]/60 mb-4">
                    Check your email — the blueprint is on its way. If you
                    don&apos;t see it in a few minutes, check your spam folder.
                  </p>
                  <p className="text-[#F5F0E8]/40 text-sm">
                    We&apos;ll also reach out to see how we can help you hit your
                    goals faster.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 md:py-24 border-t border-[#F5F0E8]/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F5F0E8] mb-4">
              What&apos;s Inside the Blueprint
            </h2>
            <p className="text-[#F5F0E8]/60 text-lg">
              Everything we used to go from $0 to $100K in revenue — no gatekeeping.
            </p>
          </motion.div>

          <div className="space-y-4">
            {blueprintIncludes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#1A1A18] border border-[#F5F0E8]/5"
              >
                <div className="p-1.5 rounded-lg bg-[#C2703A]/10 mt-0.5">
                  <Check className="w-4 h-4 text-[#C2703A]" />
                </div>
                <p className="text-[#F5F0E8]/80 text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Who This Is For */}
      <section className="py-16 md:py-24 border-t border-[#F5F0E8]/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F5F0E8] mb-4">
              Built for Contractors Who Are{" "}
              <span className="text-[#C2703A]">Done Waiting</span>
            </h2>
            <p className="text-[#F5F0E8]/60 text-lg max-w-2xl mx-auto mb-10">
              Whether you&apos;re a paver, painter, roofer, landscaper, or GC —
              if you want more leads, higher close rates, and consistent revenue,
              this blueprint was made for you.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Just Starting Out",
                  desc: "Learn the exact playbook to get your first 10 clients without wasting money on ads that don't work.",
                },
                {
                  title: "Doing $10K–$30K/mo",
                  desc: "Scale to $50K+ with systems that generate leads on autopilot while you're on the job site.",
                },
                {
                  title: "Ready to Dominate",
                  desc: "Become the #1 contractor in your area with the same strategies the top players use.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="p-6 rounded-2xl bg-[#1A1A18] border border-[#F5F0E8]/5 text-left"
                >
                  <h3 className="font-heading text-lg font-bold text-[#F5F0E8] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#F5F0E8]/60 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 border-t border-[#F5F0E8]/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F5F0E8] mb-4">
              Stop Leaving Money on the Table
            </h2>
            <p className="text-[#F5F0E8]/60 text-lg mb-8">
              Every day without a real marketing system is revenue you&apos;re
              losing to competitors who figured this out first.
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C2703A] hover:bg-[#D4804A] text-white font-semibold text-lg transition-colors"
            >
              Get the Free Blueprint
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

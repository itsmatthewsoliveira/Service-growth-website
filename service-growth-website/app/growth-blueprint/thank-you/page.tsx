"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Check, ArrowRight, Download, Phone, Users, DollarSign, Zap, TrendingUp } from "lucide-react";

// ─── Vimeo walkthrough video ───────────────────────────────────────────────
const WALKTHROUGH_VIDEO_ID = "1183151954"; // 2.5 min walkthrough for this page
const PDF_URL = "/downloads/100K-Growth-Blueprint.html";

const stats = [
  { icon: DollarSign, value: "$100K+", label: "Revenue in 3 months" },
  { icon: Users, value: "50+", label: "Leads/month (active client)" },
  { icon: Zap, value: "$3", label: "Cost per lead" },
  { icon: TrendingUp, value: "$60K+", label: "Monthly revenue (client)" },
];

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "there";
  const budget = searchParams.get("budget") || "";

  const isHighBudget = budget === "3k-5k" || budget === "5k-plus";

  const [labEmail, setLabEmail] = useState("");
  const [labSubmitted, setLabSubmitted] = useState(false);
  const [labLoading, setLabLoading] = useState(false);

  async function handleLabSignup(e: React.FormEvent) {
    e.preventDefault();
    setLabLoading(true);
    try {
      await fetch("/api/growth-lab", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: labEmail,
          name: searchParams.get("name") || undefined,
          budget: budget || undefined,
          source: "blueprint-thank-you",
        }),
      });
      setLabSubmitted(true);
    } catch {
      // Silently handle — not critical
    } finally {
      setLabLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Hero — Confirmation */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#C2703A]/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-[#C2703A]" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C0C0C] leading-[1.1] mb-4">
              You&apos;re in, <span className="text-[#C2703A]">{name}</span>.
            </h1>
            <p className="text-[#0C0C0C]/60 text-lg md:text-xl max-w-xl mx-auto">
              Your blueprint is ready. Watch the walkthrough below, then download
              the full PDF. We also sent everything to your email.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-white border border-[#0C0C0C]/10 shadow-xl" style={{ aspectRatio: "16/9" }}>
              <iframe
                src={`https://player.vimeo.com/video/${WALKTHROUGH_VIDEO_ID}?title=0&byline=0&portrait=0`}
                title="100K Growth Blueprint Walkthrough"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PDF Download */}
      <section className="pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white border border-[#0C0C0C]/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#C2703A]/10">
                  <Download className="w-6 h-6 text-[#C2703A]" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0C0C0C]">
                    The 100K Growth Blueprint
                  </h3>
                  <p className="text-[#0C0C0C]/50 text-sm">
                    Google Ads, Facebook, Yelp, Branding, Speed-to-Lead, Follow-Up &mdash; the full system.
                  </p>
                </div>
              </div>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0C0C0C] hover:bg-[#1A1A18] text-[#F5F0E8] font-semibold text-sm transition-colors"
              >
                View Blueprint
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Budget-Segmented CTAs */}
      <section className="py-12 border-t border-[#0C0C0C]/5">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {isHighBudget ? (
              /* ─── HIGH BUDGET: Book a Call Primary ─── */
              <div className="space-y-6">
                <div className="bg-[#0C0C0C] rounded-2xl p-8 md:p-10 text-center">
                  <div className="p-3 rounded-xl bg-[#C2703A]/10 w-fit mx-auto mb-4">
                    <Phone className="w-6 h-6 text-[#C2703A]" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#F5F0E8] mb-3">
                    Let&apos;s Look at Your Business Together
                  </h2>
                  <p className="text-[#F5F0E8]/50 text-base max-w-lg mx-auto mb-6">
                    I&apos;ll hop on a call with you, open up your marketing, your
                    website, your ads &mdash; and show you exactly what&apos;s broken
                    and how to fix it. Free. No sales pitch.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C2703A] hover:bg-[#D4804A] text-white font-semibold text-lg transition-colors"
                  >
                    Book a Strategy Call
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <p className="text-[#F5F0E8]/30 text-xs mt-4">
                    Limited spots &mdash; I take these calls personally.
                  </p>
                </div>

                {/* Secondary: Growth Lab */}
                <div className="bg-white border border-[#0C0C0C]/10 rounded-2xl p-6 text-center">
                  <p className="text-[#0C0C0C]/60 text-sm mb-3">
                    Not ready for a call yet? Join the Growth Lab &mdash; free weekly
                    content to help you grow.
                  </p>
                  {!labSubmitted ? (
                    <form onSubmit={handleLabSignup} className="flex gap-2 max-w-md mx-auto">
                      <input
                        type="email"
                        required
                        placeholder="Your email"
                        value={labEmail}
                        onChange={(e) => setLabEmail(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-xl bg-[#F5F0E8]/50 border border-[#0C0C0C]/10 text-[#0C0C0C] placeholder:text-[#0C0C0C]/30 focus:outline-none focus:border-[#C2703A]/50 focus:ring-1 focus:ring-[#C2703A]/30 text-sm"
                      />
                      <button
                        type="submit"
                        disabled={labLoading}
                        className="px-5 py-3 rounded-xl bg-[#0C0C0C] text-[#F5F0E8] text-sm font-semibold hover:bg-[#1A1A18] transition-colors disabled:opacity-50"
                      >
                        {labLoading ? "..." : "Join Free"}
                      </button>
                    </form>
                  ) : (
                    <p className="text-[#C2703A] font-semibold text-sm">
                      You&apos;re on the waitlist! We&apos;ll be in touch.
                    </p>
                  )}
                </div>
              </div>
            ) : (
              /* ─── LOW BUDGET: Growth Lab Primary ─── */
              <div className="space-y-6">
                <div className="bg-[#0C0C0C] rounded-2xl p-8 md:p-10 text-center">
                  <div className="p-3 rounded-xl bg-[#C2703A]/10 w-fit mx-auto mb-4">
                    <Users className="w-6 h-6 text-[#C2703A]" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#F5F0E8] mb-3">
                    Join the Growth Lab &mdash; It&apos;s Free
                  </h2>
                  <p className="text-[#F5F0E8]/50 text-base max-w-lg mx-auto mb-6">
                    Every week I drop content showing you how to build your company
                    from zero. First clients, branding, ads, the works. Everything
                    you need to do it yourself.
                  </p>
                  {!labSubmitted ? (
                    <form onSubmit={handleLabSignup} className="flex gap-2 max-w-md mx-auto">
                      <input
                        type="email"
                        required
                        placeholder="Your email"
                        value={labEmail}
                        onChange={(e) => setLabEmail(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-xl bg-[#1A1A18] border border-[#F5F0E8]/10 text-[#F5F0E8] placeholder:text-[#F5F0E8]/30 focus:outline-none focus:border-[#C2703A]/50 focus:ring-1 focus:ring-[#C2703A]/30"
                      />
                      <button
                        type="submit"
                        disabled={labLoading}
                        className="px-6 py-3 rounded-xl bg-[#C2703A] hover:bg-[#D4804A] text-white font-semibold transition-colors disabled:opacity-50"
                      >
                        {labLoading ? "..." : "Join Free"}
                      </button>
                    </form>
                  ) : (
                    <p className="text-[#C2703A] font-semibold mt-2">
                      You&apos;re on the waitlist! We&apos;ll be in touch.
                    </p>
                  )}
                  <p className="text-[#F5F0E8]/30 text-xs mt-4">
                    First 10 to join are entered to win a free professional website.
                  </p>
                </div>

                {/* Secondary: Book a Call */}
                <div className="bg-white border border-[#0C0C0C]/10 rounded-2xl p-6 text-center">
                  <p className="text-[#0C0C0C]/60 text-sm mb-3">
                    Already have your business running and want us to build the whole
                    system for you?
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0C0C0C] text-[#F5F0E8] text-sm font-semibold hover:bg-[#1A1A18] transition-colors"
                  >
                    Book a Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-12 border-t border-[#0C0C0C]/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-4 rounded-xl bg-white border border-[#0C0C0C]/10 text-center"
              >
                <s.icon className="w-5 h-5 text-[#C2703A] mb-2" />
                <p className="font-heading text-xl font-bold text-[#0C0C0C]">{s.value}</p>
                <p className="text-[#0C0C0C]/50 text-xs">{s.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[#0C0C0C]/40 text-sm mt-6">
            Real results. Hop on a call and we&apos;ll show you the dashboards.
          </p>
        </div>
      </section>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5F0E8]" />}>
      <ThankYouContent />
    </Suspense>
  );
}

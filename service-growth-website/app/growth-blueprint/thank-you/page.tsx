"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Check, ArrowRight, Download, Play, Phone, Users, DollarSign, Zap, TrendingUp } from "lucide-react";

// ─── Vimeo walkthrough video ───────────────────────────────────────────────
const WALKTHROUGH_VIDEO_ID = "1183151954"; // 2.5 min walkthrough
const PDF_URL = "/downloads/100K-Growth-Blueprint.pdf";

const stats = [
  { icon: DollarSign, value: "$100K+", label: "Revenue in 3 months" },
  { icon: Users, value: "50+", label: "Leads/month (client)" },
  { icon: Zap, value: "$3", label: "Cost per lead" },
  { icon: TrendingUp, value: "$60K+", label: "Monthly revenue" },
];

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "there";
  const budget = searchParams.get("budget") || "";

  const isHighBudget = budget === "3k-5k" || budget === "5k-plus";

  const [videoStarted, setVideoStarted] = useState(false);
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
      // non-critical
    } finally {
      setLabLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* ═══════════════════ Hero — Confirmation ═══════════════════ */}
      <section className="pt-20 pb-10 md:pt-28 md:pb-14 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#C2703A]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Live dot badge — Linear-style */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0C0C0C]/10 shadow-sm mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2703A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C2703A]"></span>
              </span>
              <span className="text-[#0C0C0C]/70 text-[11px] md:text-xs font-semibold tracking-wide uppercase">
                Access Granted
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0C0C0C] leading-[1.02] tracking-tight mb-5">
              You&apos;re in,<br />
              <span className="text-[#C2703A]">{name}</span>.
            </h1>
            <p className="text-[#0C0C0C]/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Your blueprint is ready. Watch the walkthrough below, then download
              the full PDF. We also sent everything to your email.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ Video Section — Glass play button ═══════════════════ */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden bg-[#0C0C0C] shadow-2xl border border-[#0C0C0C]/10 group"
              style={{ aspectRatio: "16/9" }}
            >
              {!videoStarted ? (
                <button
                  onClick={() => setVideoStarted(true)}
                  className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer"
                  aria-label="Play video"
                >
                  <img
                    src={`https://vumbnail.com/${WALKTHROUGH_VIDEO_ID}_large.jpg`}
                    alt="Blueprint walkthrough"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/60 via-[#0C0C0C]/20 to-transparent" />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative">
                      <span className="absolute inset-0 rounded-full bg-[#C2703A]/30 animate-ping" />
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="mt-5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-lg border border-white/10">
                      <p className="text-white text-xs md:text-sm font-medium">
                        Full walkthrough → 2.5 min
                      </p>
                    </div>
                  </div>
                </button>
              ) : (
                <iframe
                  src={`https://player.vimeo.com/video/${WALKTHROUGH_VIDEO_ID}?autoplay=1&title=0&byline=0&portrait=0&dnt=1&badge=0`}
                  title="100K Growth Blueprint Walkthrough"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ PDF Download ═══════════════════ */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="bg-white border border-[#0C0C0C]/[0.08] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 shadow-[0_1px_3px_rgba(12,12,12,0.04),0_20px_60px_-15px_rgba(12,12,12,0.12)]">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#C2703A]/10 flex-shrink-0">
                  <Download className="w-5 h-5 text-[#C2703A]" />
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-lg font-bold text-[#0C0C0C] tracking-tight">
                    The 100K Growth Blueprint
                  </h3>
                  <p className="text-[#0C0C0C]/50 text-sm">
                    Ads, Yelp, Branding, Speed-to-Lead, Follow-Up &mdash; the full system.
                  </p>
                </div>
              </div>
              <a
                href={PDF_URL}
                download="100K-Growth-Blueprint.pdf"
                className="group flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0C0C0C] hover:bg-[#1A1A18] text-[#F5F0E8] font-semibold text-sm transition-all duration-200 shadow-[0_4px_20px_rgba(12,12,12,0.15)] hover:shadow-[0_8px_30px_rgba(12,12,12,0.25)] hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ Budget-Segmented CTAs ═══════════════════ */}
      <section className="py-12 border-t border-[#0C0C0C]/5">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {isHighBudget ? (
              /* ─── HIGH BUDGET: Book a Call Primary ─── */
              <div className="space-y-4">
                <div className="relative bg-[#0C0C0C] rounded-2xl p-8 md:p-12 text-center overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#C2703A]/20 rounded-full blur-[120px] pointer-events-none" />
                  <div className="relative">
                    <div className="p-3 rounded-xl bg-[#C2703A]/10 w-fit mx-auto mb-5">
                      <Phone className="w-5 h-5 text-[#C2703A]" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F5F0E8] tracking-tight leading-[1.05] mb-4">
                      Let&apos;s Look at Your<br />Business Together
                    </h2>
                    <p className="text-[#F5F0E8]/50 text-base max-w-lg mx-auto mb-7 leading-relaxed">
                      I&apos;ll hop on a call with you, open up your marketing, your
                      website, your ads &mdash; and show you exactly what&apos;s broken
                      and how to fix it. Free. No sales pitch.
                    </p>
                    <a
                      href="/contact"
                      className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#C2703A] hover:bg-[#D4804A] text-white font-semibold text-[15px] md:text-base transition-all duration-200 shadow-[0_4px_20px_rgba(194,112,58,0.3)] hover:shadow-[0_8px_30px_rgba(194,112,58,0.4)] hover:-translate-y-0.5"
                    >
                      Book a Strategy Call
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <p className="text-[#F5F0E8]/30 text-xs mt-5 tracking-tight">
                      Limited spots · I take these calls personally
                    </p>
                  </div>
                </div>

                {/* Secondary: Growth Lab */}
                <div className="bg-white border border-[#0C0C0C]/[0.08] rounded-2xl p-6 text-center">
                  <p className="text-[#0C0C0C]/60 text-sm mb-3">
                    Not ready for a call? Join the Growth Lab &mdash; free weekly content.
                  </p>
                  {!labSubmitted ? (
                    <form onSubmit={handleLabSignup} className="flex gap-2 max-w-md mx-auto">
                      <input
                        type="email"
                        required
                        placeholder="Your email"
                        value={labEmail}
                        onChange={(e) => setLabEmail(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-xl bg-[#F5F0E8]/60 border border-[#0C0C0C]/10 text-[#0C0C0C] placeholder:text-[#0C0C0C]/30 focus:outline-none focus:border-[#C2703A]/50 focus:ring-1 focus:ring-[#C2703A]/30 text-sm transition-colors"
                      />
                      <button
                        type="submit"
                        disabled={labLoading}
                        className="px-5 py-3 rounded-xl bg-[#0C0C0C] text-[#F5F0E8] text-sm font-semibold hover:bg-[#1A1A18] transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:translate-y-0"
                      >
                        {labLoading ? "..." : "Join Free"}
                      </button>
                    </form>
                  ) : (
                    <p className="text-[#C2703A] font-semibold text-sm">
                      <Check className="w-4 h-4 inline mr-1" />
                      You&apos;re on the waitlist!
                    </p>
                  )}
                </div>
              </div>
            ) : (
              /* ─── LOW BUDGET: Growth Lab Primary ─── */
              <div className="space-y-4">
                <div className="relative bg-[#0C0C0C] rounded-2xl p-8 md:p-12 text-center overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#C2703A]/20 rounded-full blur-[120px] pointer-events-none" />
                  <div className="relative">
                    <div className="p-3 rounded-xl bg-[#C2703A]/10 w-fit mx-auto mb-5">
                      <Users className="w-5 h-5 text-[#C2703A]" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F5F0E8] tracking-tight leading-[1.05] mb-4">
                      Join the Growth Lab<br /><span className="text-[#C2703A]">— It&apos;s Free</span>
                    </h2>
                    <p className="text-[#F5F0E8]/50 text-base max-w-lg mx-auto mb-7 leading-relaxed">
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
                          className="flex-1 px-4 py-3 rounded-xl bg-[#1A1A18] border border-[#F5F0E8]/10 text-[#F5F0E8] placeholder:text-[#F5F0E8]/30 focus:outline-none focus:border-[#C2703A]/50 focus:ring-1 focus:ring-[#C2703A]/30 text-sm transition-colors"
                        />
                        <button
                          type="submit"
                          disabled={labLoading}
                          className="group px-6 py-3 rounded-xl bg-[#C2703A] hover:bg-[#D4804A] text-white font-semibold text-sm transition-all duration-200 shadow-[0_4px_20px_rgba(194,112,58,0.3)] hover:shadow-[0_8px_30px_rgba(194,112,58,0.4)] hover:-translate-y-0.5 disabled:opacity-50 disabled:translate-y-0"
                        >
                          {labLoading ? "..." : "Join Free"}
                        </button>
                      </form>
                    ) : (
                      <p className="text-[#C2703A] font-semibold">
                        <Check className="w-4 h-4 inline mr-1" />
                        You&apos;re on the waitlist!
                      </p>
                    )}
                    <p className="text-[#F5F0E8]/30 text-xs mt-5 tracking-tight">
                      First 10 to join are entered to win a free professional website
                    </p>
                  </div>
                </div>

                {/* Secondary: Book a Call */}
                <div className="bg-white border border-[#0C0C0C]/[0.08] rounded-2xl p-6 text-center">
                  <p className="text-[#0C0C0C]/60 text-sm mb-3">
                    Already running your business? Let us build the whole system for you.
                  </p>
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0C0C0C] text-[#F5F0E8] text-sm font-semibold hover:bg-[#1A1A18] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Book a Strategy Call
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ Social Proof Strip — Linear-style big numbers ═══════════════════ */}
      <section className="py-14 md:py-20 border-t border-[#0C0C0C]/5">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 justify-center mb-10">
            <div className="h-px w-8 bg-[#0C0C0C]/20"></div>
            <p className="text-[#0C0C0C]/50 text-[11px] uppercase tracking-[0.2em] font-semibold">
              Real Results We Can Show You
            </p>
            <div className="h-px w-8 bg-[#0C0C0C]/20"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#0C0C0C]/10 border border-[#0C0C0C]/10 rounded-2xl overflow-hidden">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-start justify-between p-6 md:p-8 bg-white min-h-[140px] md:min-h-[180px] hover:bg-[#C2703A]/[0.02] transition-colors"
              >
                <s.icon className="w-5 h-5 text-[#C2703A]/70" strokeWidth={1.5} />
                <div>
                  <p className="text-[#0C0C0C] font-bold text-3xl md:text-5xl leading-none font-heading tracking-tight mb-2">
                    {s.value}
                  </p>
                  <p className="text-[#0C0C0C]/50 text-xs md:text-sm font-medium">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[#0C0C0C]/40 text-sm mt-8 tracking-tight">
            Hop on a call and we&apos;ll show you the dashboards.
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

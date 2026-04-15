"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check, ArrowRight, TrendingUp, Users, DollarSign, Zap, Play, Shield, Award, Clock, ChevronDown, HardHat, Hammer, Wrench } from "lucide-react";

// ─── Vimeo teaser video ────────────────────────────────────────────────────
const TEASER_VIDEO_ID = "1183159176";
const WATCH_GATE_SECONDS = 30; // Soft-gate threshold — unlocks "engaged viewer" badge

const budgetOptions = [
  { value: "under-1k", label: "Under $1,000/mo", description: "Just getting started" },
  { value: "1k-3k", label: "$1,000 – $3,000/mo", description: "Ready to grow" },
  { value: "3k-5k", label: "$3,000 – $5,000/mo", description: "Scaling aggressively" },
  { value: "5k-plus", label: "$5,000+/mo", description: "Dominating my market" },
];

const results = [
  { icon: DollarSign, value: "$100K+", label: "Revenue in 3 months" },
  { icon: Users, value: "50+", label: "Leads/month (active client)" },
  { icon: Zap, value: "$5–$15", label: "Cost per lead" },
  { icon: TrendingUp, value: "5x", label: "Return on ad spend" },
];

const blueprintIncludes = [
  "How we generate 30+ leads per week from Google & Facebook",
  "The Yelp strategy + $600 in free ad credits from our reps",
  "Our exact Facebook Ads setup that gets $5–$15 leads",
  "Google Ads keywords that convert at 25%+",
  "Speed-to-lead system that books estimates in under 60 seconds",
  "Premium branding that attracts high-end clients",
  "Relationships with architects & designers for referral flow",
  "Day 2/5/7 follow-up that closes 40%+ of estimates",
];

// Trust indicators — platforms contractors use
const platforms = [
  { name: "Google", src: "https://cdn.simpleicons.org/google/0C0C0C" },
  { name: "Facebook", src: "https://cdn.simpleicons.org/facebook/0C0C0C" },
  { name: "Yelp", src: "https://cdn.simpleicons.org/yelp/0C0C0C" },
  { name: "Instagram", src: "https://cdn.simpleicons.org/instagram/0C0C0C" },
  { name: "YouTube", src: "https://cdn.simpleicons.org/youtube/0C0C0C" },
  { name: "TikTok", src: "https://cdn.simpleicons.org/tiktok/0C0C0C" },
];

export default function GrowthBlueprintPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", company: "", state: "", phone: "", email: "", budget: "" });
  const [consent, setConsent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Video player state
  const [videoStarted, setVideoStarted] = useState(false);
  const [watchSeconds, setWatchSeconds] = useState(0);
  const [engaged, setEngaged] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Listen for Vimeo player events via postMessage
  useEffect(() => {
    if (!videoStarted) return;

    let interval: ReturnType<typeof setInterval> | undefined;

    const handleMessage = (event: MessageEvent) => {
      if (typeof event.data !== "string") return;
      try {
        const data = JSON.parse(event.data);
        if (data.event === "ready" && iframeRef.current?.contentWindow) {
          // Subscribe to timeupdate events
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ method: "addEventListener", value: "timeupdate" }),
            "*"
          );
        }
        if (data.event === "timeupdate" && data.data?.seconds) {
          setWatchSeconds(data.data.seconds);
          if (data.data.seconds >= WATCH_GATE_SECONDS && !engaged) {
            setEngaged(true);
          }
        }
      } catch {}
    };

    window.addEventListener("message", handleMessage);

    // Also track watch time via a simple timer as fallback
    interval = setInterval(() => {
      setWatchSeconds((s) => s + 1);
    }, 1000);

    return () => {
      window.removeEventListener("message", handleMessage);
      if (interval) clearInterval(interval);
    };
  }, [videoStarted, engaged]);

  useEffect(() => {
    if (watchSeconds >= WATCH_GATE_SECONDS && !engaged) {
      setEngaged(true);
    }
  }, [watchSeconds, engaged]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/growth-blueprint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, consent, engaged, watchSeconds: Math.floor(watchSeconds) }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      router.push(
        `/growth-blueprint/thank-you?name=${encodeURIComponent(formData.name)}&budget=${formData.budget}&engaged=${engaged ? "1" : "0"}`
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  function scrollToForm() {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  }

  const watchProgress = Math.min((watchSeconds / WATCH_GATE_SECONDS) * 100, 100);

  return (
    <div className="min-h-screen bg-[#F5F0E8] relative">
      {/* ═══════════════════ GLOBAL TEXTURE — Grid + noise ═══════════════════ */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.035] z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(12,12,12,1) 1px, transparent 1px), linear-gradient(90deg, rgba(12,12,12,1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04] z-0 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* ═══════════════════ HERO — Full-width video ═══════════════════ */}
      <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden z-10">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#C2703A]/10 rounded-full blur-[140px] pointer-events-none" />


        <div className="relative max-w-5xl mx-auto px-4 md:px-6">
          {/* Eyebrow + headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0C0C0C]/10 shadow-sm mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2703A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C2703A]"></span>
              </span>
              <span className="text-[#0C0C0C]/70 text-[11px] md:text-xs font-semibold tracking-wide uppercase">
                Free for Construction Business Owners
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0C0C0C] leading-[1.02] tracking-tight mb-5">
              The Exact Blueprint<br />
              We Used to Hit<br />
              <span className="text-[#C2703A]">$100K in 3 Months</span>
            </h1>

            <p className="text-[#0C0C0C]/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Watch the 30-second video below. Then grab the full blueprint — free.
            </p>
          </motion.div>

          {/* Video with glass morphism play button */}
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
                  {/* Poster image from Vimeo */}
                  <img
                    src={`https://vumbnail.com/${TEASER_VIDEO_ID}_large.jpg`}
                    alt="Growth Blueprint teaser"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/60 via-[#0C0C0C]/20 to-transparent" />

                  {/* Glass morphism play button */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative">
                      {/* Pulse ring */}
                      <span className="absolute inset-0 rounded-full bg-[#C2703A]/30 animate-ping" />
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="mt-5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-lg border border-white/10">
                      <p className="text-white text-xs md:text-sm font-medium">
                        Watch how we did it → 30 sec
                      </p>
                    </div>
                  </div>
                </button>
              ) : (
                <iframe
                  ref={iframeRef}
                  src={`https://player.vimeo.com/video/${TEASER_VIDEO_ID}?autoplay=1&title=0&byline=0&portrait=0&dnt=1&badge=0&api=1`}
                  title="Growth Blueprint Teaser"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>

            {/* Watch progress bar — only shows when video is playing */}
            {videoStarted && !engaged && (
              <div className="mt-3 px-1">
                <div className="flex items-center justify-between text-xs text-[#0C0C0C]/50 mb-1.5">
                  <span>Watch progress</span>
                  <span>{Math.floor(watchSeconds)}s / {WATCH_GATE_SECONDS}s</span>
                </div>
                <div className="h-1 bg-[#0C0C0C]/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C2703A] transition-all duration-500"
                    style={{ width: `${watchProgress}%` }}
                  />
                </div>
              </div>
            )}

            {engaged && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 flex items-center justify-center gap-2 text-sm text-[#C2703A] font-semibold"
              >
                <Check className="w-4 h-4" />
                Priority access unlocked — your submission will be bumped to the top
              </motion.div>
            )}
          </motion.div>

          {/* CTA to scroll to form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8"
          >
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0C0C0C] hover:bg-[#1A1A18] text-[#F5F0E8] font-semibold text-[15px] transition-all duration-200 shadow-[0_4px_20px_rgba(12,12,12,0.15)] hover:shadow-[0_8px_30px_rgba(12,12,12,0.25)] hover:-translate-y-0.5"
            >
              Get the Free Blueprint
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <p className="text-[#0C0C0C]/40 text-[12px] mt-4 tracking-tight">
              Instant access · No spam · Delivered to your inbox
            </p>

            {/* Scroll-down indicator */}
            <motion.button
              onClick={() => document.getElementById("results-strip")?.scrollIntoView({ behavior: "smooth" })}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-10 inline-flex flex-col items-center gap-1 group cursor-pointer"
              aria-label="Scroll to see more"
            >
              <span className="text-[#0C0C0C]/40 text-[10px] uppercase tracking-[0.2em] font-semibold group-hover:text-[#C2703A] transition-colors">
                See the proof
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="w-8 h-8 rounded-full border border-[#0C0C0C]/20 flex items-center justify-center group-hover:border-[#C2703A]/50 group-hover:bg-[#C2703A]/5 transition-colors"
              >
                <ChevronDown className="w-4 h-4 text-[#0C0C0C]/50 group-hover:text-[#C2703A] transition-colors" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ RESULTS STRIP — Linear-style big numbers ═══════════════════ */}
      <section id="results-strip" className="py-14 md:py-20 border-y border-[#0C0C0C]/5 relative z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 justify-center mb-10">
            <div className="h-px w-8 bg-[#0C0C0C]/20"></div>
            <p className="text-[#0C0C0C]/50 text-[11px] uppercase tracking-[0.2em] font-semibold">
              Real Results From This System
            </p>
            <div className="h-px w-8 bg-[#0C0C0C]/20"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#0C0C0C]/10 border border-[#0C0C0C]/10 rounded-2xl overflow-hidden">
            {results.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-start justify-between p-6 md:p-8 bg-white min-h-[140px] md:min-h-[180px] hover:bg-[#C2703A]/[0.02] transition-colors"
              >
                <r.icon className="w-5 h-5 text-[#C2703A]/70" strokeWidth={1.5} />
                <div>
                  <p className="text-[#0C0C0C] font-bold text-3xl md:text-5xl leading-none font-heading tracking-tight mb-2">
                    {r.value}
                  </p>
                  <p className="text-[#0C0C0C]/50 text-xs md:text-sm font-medium">{r.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRUST — Platforms we help you dominate ═══════════════════ */}
      <section className="py-12 md:py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <p className="text-center text-[#0C0C0C]/40 text-[11px] uppercase tracking-[0.2em] font-semibold mb-8">
            Get Leads From Every Platform That Matters
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
            {platforms.map((p) => (
              <div key={p.name} className="flex items-center gap-2.5 opacity-30 hover:opacity-60 transition-opacity duration-300">
                <img src={p.src} alt={p.name} className="h-5 md:h-6 w-auto grayscale" />
                <span className="text-[#0C0C0C] font-semibold text-sm md:text-base tracking-tight">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ BLACK CONTRAST BAND — Matt's proof ═══════════════════ */}
      <section className="relative py-16 md:py-24 bg-black overflow-hidden">
        {/* Grid texture on dark */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(194,112,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(194,112,58,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial orange glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C2703A]/15 rounded-full blur-[160px] pointer-events-none" />
        {/* Corner gradient accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#C2703A]/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#C2703A]/10 to-transparent pointer-events-none" />

        {/* Floating construction icons — SVG silhouettes work cleanly on dark */}
        <HardHat className="absolute top-16 right-[8%] w-20 h-20 text-[#C2703A]/15 pointer-events-none -rotate-12" strokeWidth={1} />
        <Hammer className="absolute bottom-20 right-[15%] w-16 h-16 text-[#C2703A]/10 pointer-events-none rotate-45" strokeWidth={1} />
        <Wrench className="absolute top-32 right-[25%] w-12 h-12 text-[#C2703A]/10 pointer-events-none -rotate-45 hidden md:block" strokeWidth={1} />

        <div className="relative max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#C2703A]/60"></div>
            <p className="text-[#C2703A] text-[11px] uppercase tracking-[0.2em] font-semibold">
              Built for Construction
            </p>
          </div>
          <h2
            style={{ color: "#F5F0E8" }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6 max-w-3xl"
          >
            This isn&apos;t theory from a<br />
            marketing guru.{" "}
            <span style={{ color: "#C2703A" }}>It&apos;s proven.</span>
          </h2>
          <p className="text-[#F5F0E8]/70 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
            Matt grew his dad&apos;s painting company from stuck doing low-end jobs
            to painting <span className="text-[#F5F0E8] font-semibold">multi-million dollar homes</span> in
            the North Shore of Boston. Then took his own outdoor design company from{" "}
            <span className="text-[#F5F0E8] font-semibold">$0 to $100K in 90 days</span>.
            Now we&apos;re building the same system for contractors across the country.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#F5F0E8]/80 text-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2703A]"></span>
              5+ years marketing experience
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#F5F0E8]/80 text-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2703A]"></span>
              Active client doing $60K+/mo
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#F5F0E8]/80 text-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2703A]"></span>
              Built by a contractor, for contractors
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════ LEAD CAPTURE FORM ═══════════════════ */}
      <section id="lead-form" className="py-12 md:py-16 border-t border-[#0C0C0C]/5 relative z-10">
        <div className="max-w-2xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0C0C0C] mb-3">
              Get Your Free Blueprint
            </h2>
            <p className="text-[#0C0C0C]/60 text-base md:text-lg">
              Tell us where you&apos;re at and we&apos;ll send you the exact system we used.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative p-6 md:p-10 rounded-2xl bg-white border border-[#0C0C0C]/[0.08] shadow-[0_1px_3px_rgba(12,12,12,0.04),0_20px_60px_-15px_rgba(12,12,12,0.12)]"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#C2703A]/[0.03] via-transparent to-transparent pointer-events-none" />
            <div className="relative">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#0C0C0C]/70 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8]/60 border border-[#0C0C0C]/10 text-[#0C0C0C] placeholder:text-[#0C0C0C]/30 focus:outline-none focus:border-[#C2703A]/50 focus:ring-1 focus:ring-[#C2703A]/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0C0C0C]/70 mb-1.5">Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="ABC Construction"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8]/60 border border-[#0C0C0C]/10 text-[#0C0C0C] placeholder:text-[#0C0C0C]/30 focus:outline-none focus:border-[#C2703A]/50 focus:ring-1 focus:ring-[#C2703A]/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#0C0C0C]/70 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8]/60 border border-[#0C0C0C]/10 text-[#0C0C0C] placeholder:text-[#0C0C0C]/30 focus:outline-none focus:border-[#C2703A]/50 focus:ring-1 focus:ring-[#C2703A]/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0C0C0C]/70 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8]/60 border border-[#0C0C0C]/10 text-[#0C0C0C] placeholder:text-[#0C0C0C]/30 focus:outline-none focus:border-[#C2703A]/50 focus:ring-1 focus:ring-[#C2703A]/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0C0C0C]/70 mb-1.5">What state are you in?</label>
                  <input
                    type="text"
                    required
                    placeholder="Florida"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8]/60 border border-[#0C0C0C]/10 text-[#0C0C0C] placeholder:text-[#0C0C0C]/30 focus:outline-none focus:border-[#C2703A]/50 focus:ring-1 focus:ring-[#C2703A]/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0C0C0C]/70 mb-1.5">Monthly marketing budget</label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: opt.value })}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          formData.budget === opt.value
                            ? "border-[#C2703A] bg-[#C2703A]/10 text-[#0C0C0C]"
                            : "border-[#0C0C0C]/10 bg-[#F5F0E8]/60 text-[#0C0C0C]/60 hover:border-[#0C0C0C]/20"
                        }`}
                      >
                        <span className="block text-sm font-medium">{opt.label}</span>
                        <span className="block text-xs opacity-60 mt-0.5">{opt.description}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                {/* Marketing consent */}
                <label className="flex items-start gap-2.5 cursor-pointer group pt-1">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-[#0C0C0C]/20 text-[#C2703A] focus:ring-[#C2703A]/30 flex-shrink-0 accent-[#C2703A] cursor-pointer"
                  />
                  <span className="text-[12px] text-[#0C0C0C]/60 leading-relaxed">
                    I agree to receive emails and text messages from ServiceGrowth AI about the blueprint, growth tips, and services. Message frequency varies. Reply STOP to unsubscribe. See our <a href="/privacy" className="text-[#C2703A] hover:underline">privacy policy</a>.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading || !formData.budget || !consent}
                  className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#C2703A] hover:bg-[#D4804A] text-white font-semibold text-[15px] md:text-base transition-all duration-200 shadow-[0_4px_20px_rgba(194,112,58,0.25)] hover:shadow-[0_8px_30px_rgba(194,112,58,0.35)] hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
                >
                  {loading ? "Sending..." : (<>Send Me the Blueprint <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>)}
                </button>

                <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-[#0C0C0C]/40">
                  <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> No spam</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Instant access</span>
                  <span className="flex items-center gap-1"><Award className="w-3 h-3" /> Free forever</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ WHAT'S INSIDE ═══════════════════ */}
      <section className="py-12 md:py-20 border-t border-[#0C0C0C]/5 relative z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0C0C0C] mb-3">What&apos;s Inside the Blueprint</h2>
            <p className="text-[#0C0C0C]/60 text-base md:text-lg">
              Everything we used to go from $0 to $100K — no gatekeeping.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-3">
            {blueprintIncludes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#0C0C0C]/10"
              >
                <div className="p-1 rounded-md bg-[#C2703A]/10 mt-0.5 flex-shrink-0">
                  <Check className="w-4 h-4 text-[#C2703A]" />
                </div>
                <p className="text-[#0C0C0C]/80 text-sm md:text-base leading-snug">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SEGMENTATION — Who this is for ═══════════════════ */}
      <section className="py-12 md:py-20 border-t border-[#0C0C0C]/5 relative z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0C0C0C] mb-3">
              Built for Contractors Who Are <span className="text-[#C2703A]">Done Waiting</span>
            </h2>
            <p className="text-[#0C0C0C]/60 text-base md:text-lg max-w-2xl mx-auto mb-10">
              Pavers, painters, roofers, landscapers, GCs — if you want more leads, higher close rates, and real revenue, this is for you.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Just Starting Out", desc: "Get your first 10 clients without wasting money on ads that don't work." },
                { title: "Doing $10K–$30K/mo", desc: "Scale to $50K+ with systems that generate leads while you're on the job site." },
                { title: "Ready to Dominate", desc: "Become the #1 contractor in your area with the strategies top players use." },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 md:p-6 rounded-2xl bg-white border border-[#0C0C0C]/10 text-left"
                >
                  <h3 className="font-heading text-base md:text-lg font-bold text-[#0C0C0C] mb-2">{card.title}</h3>
                  <p className="text-[#0C0C0C]/60 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section className="py-14 md:py-20 border-t border-[#0C0C0C]/5 relative z-10">
        <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0C0C0C] mb-3">Stop Leaving Money on the Table</h2>
            <p className="text-[#0C0C0C]/60 text-base md:text-lg mb-8">
              Every day without a real marketing system is revenue you&apos;re losing to competitors who figured this out first.
            </p>
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#C2703A] hover:bg-[#D4804A] text-white font-semibold text-[15px] md:text-base transition-all duration-200 shadow-[0_4px_20px_rgba(194,112,58,0.3)] hover:shadow-[0_8px_30px_rgba(194,112,58,0.4)] hover:-translate-y-0.5"
            >
              Get the Free Blueprint <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

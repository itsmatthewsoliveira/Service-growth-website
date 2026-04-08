"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, MessageSquare, Calendar, CheckCircle, Mountain, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/shadcn-button";
import Link from "next/link";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/hero-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const titles = useMemo(
    () => ["Contractors", "Roofers", "Plumbers", "HVAC", "Dentists", "Med Spas", "Remodelers", "Landscapers"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full relative overflow-hidden bg-[#F2EDE5]">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26, 26, 24, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26, 26, 24, 1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(194, 112, 58, 0.06) 0%, transparent 60%)',
        }}
      />

      <div className="container mx-auto relative z-10 px-4 md:px-6">
        <div className="py-12 md:py-16 lg:py-28">

          {/* ===== Centered Hero Content ===== */}
          <div className="flex flex-col items-center max-w-5xl mx-auto">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C2703A]/20 bg-[#C2703A]/5 text-sm text-[#4A4A45]">
                <span className="w-2 h-2 rounded-full bg-[#C2703A] animate-pulse" />
                Built by service business owners
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, letterSpacing: '-0.03em', color: '#1A1A18' }}>
                <span>More booked jobs<br />for</span>
                <span className="relative flex w-full justify-center overflow-hidden md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold"
                      style={{ color: "#C2703A" }}
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? { y: 0, opacity: 1 }
                          : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </motion.div>

            {/* ===== Horizontal Chat-Box Form Bar ===== */}
            <motion.div
              className="w-full max-w-3xl mt-8 mb-8"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {submitted ? (
                <div className="relative rounded-2xl bg-[#1A1A18] border border-[#C2703A]/20 shadow-xl shadow-[#1A1A18]/10 p-6 md:p-8 text-center">
                  <CheckCircle className="w-8 h-8 text-[#C2703A] mx-auto mb-3" />
                  <p className="text-[#F5F0E8] font-semibold text-lg">Thanks! We&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
              <form
                className="relative rounded-2xl md:rounded-full bg-[#1A1A18] border border-[#C2703A]/10 shadow-xl shadow-[#1A1A18]/10 p-2 md:p-2"
                onSubmit={handleSubmit}
              >
                {/* Desktop: single row */}
                <div className="hidden md:flex items-center gap-0">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-1 min-w-0 bg-transparent border-none outline-none text-[#F5F0E8] placeholder-[#7A766E] text-sm px-5 py-3"
                  />
                  <div className="w-px h-6 bg-white/10 flex-shrink-0" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 min-w-0 bg-transparent border-none outline-none text-[#F5F0E8] placeholder-[#7A766E] text-sm px-5 py-3"
                  />
                  <div className="w-px h-6 bg-white/10 flex-shrink-0" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 min-w-0 bg-transparent border-none outline-none text-[#F5F0E8] placeholder-[#7A766E] text-sm px-5 py-3"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-shrink-0 px-6 py-3 rounded-full bg-[#C2703A] hover:bg-[#A85C30] disabled:opacity-60 text-[#F5F0E8] font-semibold text-sm transition-all whitespace-nowrap"
                  >
                    {loading ? "Sending..." : "Get Free Analysis"}
                  </button>
                </div>

                {/* Mobile: stacked vertically */}
                <div className="flex flex-col gap-2 md:hidden p-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-full outline-none text-[#F5F0E8] placeholder-[#7A766E] text-base px-4 py-3"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-full outline-none text-[#F5F0E8] placeholder-[#7A766E] text-base px-4 py-3"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-full outline-none text-[#F5F0E8] placeholder-[#7A766E] text-base px-4 py-3"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-5 py-3.5 rounded-full bg-[#C2703A] hover:bg-[#A85C30] disabled:opacity-60 text-[#F5F0E8] font-semibold text-base transition-all min-h-[44px]"
                  >
                    {loading ? "Sending..." : "Get Free Analysis"}
                  </button>
                </div>
                {error && (
                  <p className="text-red-400 text-xs text-center mt-2 px-4">{error}</p>
                )}
              </form>
              )}
              {!submitted && (
              <p className="text-[#7A766E] text-xs text-center mt-3">
                Free. No strings. We&apos;ll show you where you&apos;re losing money.
              </p>
              )}
            </motion.div>

            {/* Subtext */}
            <motion.p
              className="text-lg md:text-xl leading-relaxed text-[#4A4A45] max-w-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We took our own service company from zero to $100K in profit in 90 days.
              No templates. No cookie-cutter funnels. We build what actually puts money in your pocket.
            </motion.p>

            {/* Stats inline */}
            <motion.div
              className="flex flex-wrap gap-6 md:gap-8 mt-8 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { value: "$100K", label: "Profit in 90 Days" },
                { value: "$30K/mo", label: "Revenue" },
                { value: "$200K", label: "Invoiced" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#C2703A]">{stat.value}</div>
                  <div className="text-xs text-[#7A766E] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ===== CREATIVE SECTION: Mountain Climber Visual Story ===== */}
          <motion.div
            className="mt-20 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-[#1A1A18] border border-[#C2703A]/10">
              {/* Atmospheric background — layered gradients for depth */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Mountain silhouette effect via CSS */}
                <div className="absolute bottom-0 left-0 right-0 h-[70%]" style={{
                  background: `
                    linear-gradient(175deg, transparent 30%, rgba(194, 112, 58, 0.08) 60%, rgba(194, 112, 58, 0.15) 100%),
                    linear-gradient(to right, transparent 0%, rgba(245, 240, 232, 0.02) 50%, transparent 100%)
                  `
                }} />
                {/* Peak glow */}
                <div className="absolute top-[15%] left-[20%] w-[300px] h-[300px] bg-[#F5F0E8]/3 rounded-full blur-[100px]" />
                {/* Depth fog */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1A18] to-transparent" />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 md:gap-10 p-6 md:p-10 lg:p-16">
                {/* LEFT: Creative Copy */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C2703A]/20 bg-[#C2703A]/5 text-xs text-[#B8B3AA] mb-6">
                    <Mountain className="w-3.5 h-3.5 text-[#C2703A]" />
                    THE CLIMB
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, letterSpacing: '-0.02em', color: '#F5F0E8' }}>
                    Running a business is a grind.<br />
                    <span style={{ color: '#C2703A' }}>You don&apos;t have to do it alone.</span>
                  </h2>
                  <p className="text-[#B8B3AA] text-lg leading-relaxed max-w-lg mb-8">
                    You answer calls at dinner. You lose leads to voicemail at 2am.
                    Your competitor just hired a marketing agency, and now he&apos;s outranking you.
                    We&apos;ve been there. That&apos;s why we built this.
                  </p>
                  <div className="space-y-4">
                    {[
                      { label: "AI answers every call", desc: "Even the ones at midnight" },
                      { label: "Leads booked automatically", desc: "No human needed" },
                      { label: "Reviews on autopilot", desc: "5-star reputation built for you" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#C2703A]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowUpRight className="w-4 h-4 text-[#C2703A]" />
                        </div>
                        <div>
                          <p className="text-[#F5F0E8] font-semibold text-sm">{item.label}</p>
                          <p className="text-[#7A766E] text-xs">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* RIGHT: Mountain Climber Photo */}
                <div className="flex-1 relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex items-center justify-center w-full">
                  <div className="relative w-full max-w-[450px] rounded-2xl overflow-hidden">
                    {/* The actual photo */}
                    <img
                      src="/mountain-climber.png"
                      alt="Ice wall climber - representing the climb of growing a business"
                      className="w-full h-auto object-cover rounded-2xl grayscale"
                      style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.95)' }}
                    />
                    {/* Orange gradient overlay on bottom for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A18] via-transparent to-transparent rounded-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C2703A]/10 via-transparent to-transparent rounded-2xl" />
                    {/* Subtle border glow */}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#C2703A]/15" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== Lead Flow Mockup ===== */}
          <motion.div
            className="mt-8 w-full max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-dark-on-cream rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-4 text-xs text-[#7A766E] font-mono">ServiceGrowth AI Dashboard</span>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                <motion.div className="flex-1 w-full" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#C2703A]/20 flex items-center justify-center"><PhoneCall className="w-4 h-4 text-[#C2703A]" /></div>
                      <span className="text-xs text-[#C2703A] font-medium">NEW LEAD</span>
                    </div>
                    <p className="text-sm text-[#F5F0E8]">&quot;Need roof repair ASAP&quot;</p>
                    <p className="text-xs text-[#7A766E] mt-1">Missed call at 2:34 PM</p>
                  </div>
                </motion.div>
                <div className="hidden md:block text-[#C2703A]/50"><MoveRight className="w-6 h-6" /></div>
                <div className="md:hidden text-[#C2703A]/50 rotate-90"><MoveRight className="w-5 h-5" /></div>
                <motion.div className="flex-1 w-full" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#C2703A]/20 flex items-center justify-center"><MessageSquare className="w-4 h-4 text-[#C2703A]" /></div>
                      <span className="text-xs text-[#C2703A] font-medium">AI RESPONSE</span>
                    </div>
                    <p className="text-sm text-[#F5F0E8]">&quot;Hi! We can help. When works for an estimate?&quot;</p>
                    <p className="text-xs text-[#7A766E] mt-1">Sent in 8 seconds</p>
                  </div>
                </motion.div>
                <div className="hidden md:block text-[#C2703A]/50"><MoveRight className="w-6 h-6" /></div>
                <div className="md:hidden text-[#C2703A]/50 rotate-90"><MoveRight className="w-5 h-5" /></div>
                <motion.div className="flex-1 w-full" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                  <div className="bg-white/5 rounded-xl p-4 border border-[#C2703A]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#C2703A]/20 flex items-center justify-center"><Calendar className="w-4 h-4 text-[#C2703A]" /></div>
                      <span className="text-xs text-[#C2703A] font-medium">BOOKED</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C2703A]" />
                      <p className="text-sm text-[#F5F0E8]">Tomorrow 9:00 AM</p>
                    </div>
                    <p className="text-xs text-[#7A766E] mt-1">Added to calendar</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export { Hero };

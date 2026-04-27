"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";

const ACCENT = "#E25312";
const INK = "#10100F";
const CREAM = "#FCFFD5";

const EXPECTATIONS = [
  { num: "01", title: "We listen first", body: "Tell us where you are — revenue, team size, biggest bottleneck. No pitch." },
  { num: "02", title: "Diagnose the leak", body: "We identify exactly where leads are falling through — with evidence, not guesses." },
  { num: "03", title: "Show you the fix", body: "If a system makes sense, we map out the exact build. If it doesn't, we tell you." },
  { num: "04", title: "You decide", body: "No pressure, no follow-up spam. You leave with a plan — whether you hire us or not." },
];

const STATS = [
  { value: "25 min", label: "Average call length" },
  { value: "500+", label: "Calls booked" },
  { value: "$0", label: "No pitch, no cost" },
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    state: "",
    budget: "exploring",
    consent: true,
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setState("success");
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const labelCls = "block uppercase mb-2";
  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono), ui-monospace, monospace",
    fontSize: 10,
    letterSpacing: "0.22em",
    color: "rgba(252,255,213,0.6)",
    fontWeight: 500,
  };
  const inputCls = "w-full px-4 py-3.5 bg-white border text-[15px] focus:outline-none";
  const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    borderColor: "rgba(16,16,15,0.15)",
    borderRadius: 6,
    color: INK,
  };

  return (
    <>
      <PageHero
        eyebrow="Free strategy call"
        headlineLead="Let's see if"
        headlineAccent="we can help."
        subhead="25-minute call. No pitch. We'll tell you exactly where you're losing leads — whether you hire us or not."
        align="centered"
      />

      {/* What to expect — LIGHT 4-up */}
      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 py-20 lg:py-28">
          <div className="max-w-2xl mb-14">
            <div
              className="inline-flex items-center gap-2.5 uppercase mb-6"
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: 12,
                letterSpacing: "0.22em",
                color: INK,
                fontWeight: 500,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              What to expect
            </div>
            <h2
              className="uppercase"
              style={{
                fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(38px, 5.6vw, 64px)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                color: INK,
              }}
            >
              Four things happen{" "}
              <span
                style={{
                  color: ACCENT,
                  fontStyle: "italic",
                  fontFamily: "var(--font-display), 'Instrument Serif', serif",
                }}
              >
                on this call.
              </span>
            </h2>
          </div>

          <div className="h-px mb-14" style={{ background: "rgba(16,16,15,0.12)" }} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {EXPECTATIONS.map((item) => (
              <div key={item.num}>
                <div className="mb-5" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 56, lineHeight: 1, letterSpacing: "-0.025em", color: ACCENT }}>{item.num}</div>
                <h3 className="uppercase mb-3" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1.08, letterSpacing: "-0.01em", color: INK }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(16,16,15,0.68)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Direct contact — DARK */}
      <section className="relative w-full overflow-hidden" style={{ background: INK, color: CREAM }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ opacity: 0.05, mixBlendMode: "multiply", backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")" }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left: form */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2.5 uppercase mb-6" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 12, letterSpacing: "0.22em", color: CREAM, fontWeight: 500 }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
                Book your call
              </div>
              <h2 className="uppercase mb-8" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: "clamp(36px, 5.2vw, 60px)", lineHeight: 0.98, letterSpacing: "-0.02em", color: CREAM }}>
                Tell us where{" "}
                <span style={{ color: ACCENT, fontStyle: "italic", fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>you're at.</span>
              </h2>

              {state === "success" ? (
                <div style={{ background: "#1D1C1A", border: "1px solid rgba(252,255,213,0.12)", borderRadius: 14, padding: "40px 36px", textAlign: "center" }}>
                  <div className="inline-flex items-center justify-center mx-auto mb-5" style={{ width: 56, height: 56, borderRadius: 999, background: `${ACCENT}1A`, border: `1px solid ${ACCENT}55` }}>
                    <CheckCircle className="w-7 h-7" style={{ color: ACCENT }} />
                  </div>
                  <h3 className="uppercase mb-3" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 32, lineHeight: 1, letterSpacing: "-0.02em", color: CREAM }}>
                    We got it. <span style={{ color: ACCENT, fontStyle: "italic", fontFamily: "var(--font-display), 'Instrument Serif', serif" }}>Talk soon.</span>
                  </h3>
                  <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 15, lineHeight: 1.55, color: "rgba(252,255,213,0.72)", maxWidth: 440, margin: "0 auto" }}>
                    We'll call or text within the hour — usually faster. Keep your phone close.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ background: "#1D1C1A", border: "1px solid rgba(252,255,213,0.12)", borderRadius: 14, padding: "32px 32px 28px" }} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelCls} style={labelStyle}>Name</label>
                      <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputCls} style={inputStyle} />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelCls} style={labelStyle}>Business</label>
                      <input type="text" id="company" name="company" required value={form.company} onChange={handleChange} placeholder="Smith Paving Co." className={inputCls} style={inputStyle} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className={labelCls} style={labelStyle}>Email</label>
                      <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputCls} style={inputStyle} />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelCls} style={labelStyle}>Phone</label>
                      <input type="tel" id="phone" name="phone" required value={form.phone} onChange={handleChange} placeholder="(555) 123-4567" className={inputCls} style={inputStyle} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="state" className={labelCls} style={labelStyle}>State / Region</label>
                      <input type="text" id="state" name="state" required value={form.state} onChange={handleChange} placeholder="Florida" className={inputCls} style={inputStyle} />
                    </div>
                    <div>
                      <label htmlFor="budget" className={labelCls} style={labelStyle}>Monthly revenue</label>
                      <select id="budget" name="budget" value={form.budget} onChange={handleChange} className={inputCls} style={inputStyle}>
                        <option value="exploring">Just exploring</option>
                        <option value="under-30k">Under $30k/mo</option>
                        <option value="30k-75k">$30k–$75k/mo</option>
                        <option value="75k-250k">$75k–$250k/mo</option>
                        <option value="250k+">$250k+/mo</option>
                      </select>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 pt-1" style={{ cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      className="mt-1 flex-shrink-0"
                      style={{ accentColor: ACCENT }}
                    />
                    <span style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 12, lineHeight: 1.55, color: "rgba(252,255,213,0.6)" }}>
                      I agree to receive a call/text from ServiceGrowth.ai. Reply STOP to opt out. See{" "}
                      <Link href="/privacy" className="underline" style={{ color: ACCENT }}>Privacy</Link>.
                    </span>
                  </label>

                  {state === "error" && (
                    <div className="p-3" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 6, fontSize: 13, color: "#FCA5A5" }}>
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state === "submitting" || !form.consent}
                    className="w-full inline-flex items-center justify-center gap-3 py-4 uppercase font-bold disabled:opacity-60 transition-colors"
                    style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 13, letterSpacing: "0.08em", background: ACCENT, color: INK, borderRadius: 4 }}
                  >
                    {state === "submitting" ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>) : "Book my call →"}
                  </button>
                </form>
              )}
            </div>

            {/* Right: direct + stats */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div style={{ background: "#1D1C1A", border: "1px solid rgba(252,255,213,0.12)", borderRadius: 14, padding: 32 }}>
                <div className="uppercase mb-5" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 11, letterSpacing: "0.22em", color: ACCENT, fontWeight: 700 }}>
                  Prefer direct?
                </div>
                <a href="mailto:hello@servicegrowth.ai" className="block mb-6 group">
                  <div className="uppercase mb-2" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 10, letterSpacing: "0.22em", color: "rgba(252,255,213,0.55)", fontWeight: 500 }}>Email</div>
                  <div className="group-hover:text-[#E25312] transition-colors" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: "-0.01em", color: CREAM }}>hello@servicegrowth.ai</div>
                </a>
                <div className="h-px mb-6" style={{ background: "rgba(252,255,213,0.12)" }} />
                <a href="tel:+19044542240" className="block group">
                  <div className="uppercase mb-2" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 10, letterSpacing: "0.22em", color: "rgba(252,255,213,0.55)", fontWeight: 500 }}>Phone</div>
                  <div className="group-hover:text-[#E25312] transition-colors" style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 26, letterSpacing: "-0.01em", color: CREAM }}>(904) 454-2240</div>
                </a>
              </div>

              <div>
                <div className="uppercase mb-5" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 11, letterSpacing: "0.22em", color: "rgba(252,255,213,0.55)", fontWeight: 500 }}>The numbers</div>
                <div className="space-y-4">
                  {STATS.map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between py-3" style={{ borderBottom: "1px solid rgba(252,255,213,0.1)" }}>
                      <div style={{ fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif", fontWeight: 700, fontSize: 28, lineHeight: 1, letterSpacing: "-0.02em", color: ACCENT }}>{s.value}</div>
                      <div className="uppercase" style={{ fontFamily: "var(--font-mono), ui-monospace, monospace", fontSize: 10, letterSpacing: "0.22em", color: "rgba(252,255,213,0.6)", fontWeight: 500 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: 13, lineHeight: 1.6, color: "rgba(252,255,213,0.55)" }}>
                Discovery call — not a sales call. You leave with actionable insights whether you work with us or not.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

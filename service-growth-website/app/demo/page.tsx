"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Mail, MessageSquare, CheckCircle, Loader2 } from "lucide-react";
import PageHero from "@/components/sections/PageHero";

const ACCENT = "#FF6A00";
const INK = "#121114";
const CREAM = "#FCFFD5";

type FormState = "idle" | "submitting" | "success" | "error";

interface DemoResult {
  emailSent: boolean;
  smsSent: boolean;
}

const STEPS = [
  { num: "01", title: "Enter your info", body: "Name, business, email, phone — takes 20 seconds." },
  { num: "02", title: "AI activates instantly", body: "The same system we build for clients fires in real time." },
  { num: "03", title: "You get contacted", body: "Personalized text + email hits your phone in seconds." },
];

export default function DemoPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [result, setResult] = useState<DemoResult | null>(null);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    const local = digits.startsWith("1") && digits.length > 10 ? digits.slice(1) : digits;
    if (local.length <= 3) return local;
    if (local.length <= 6) return `(${local.slice(0, 3)}) ${local.slice(3)}`;
    return `(${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6, 10)}`;
  };

  const toE164 = (value: string) => {
    const digits = value.replace(/\D/g, "");
    const local = digits.startsWith("1") && digits.length > 10 ? digits.slice(1) : digits;
    return `+1${local}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "phone") {
      setForm((prev) => ({ ...prev, phone: formatPhone(e.target.value) }));
    } else {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, phone: toE164(form.phone) }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setResult(data);
      setState("success");
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const inputCls =
    "w-full px-4 py-3.5 bg-white border text-[15px] transition-colors focus:outline-none";

  const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    borderColor: "rgba(18,17,20,0.15)",
    borderRadius: 6,
    color: INK,
  };

  return (
    <>
      <PageHero
        eyebrow="Live demo"
        headlineLead="See our AI"
        headlineAccent="in action."
        subhead="Fill the form. Within seconds, our AI reaches out to you by text and email — exactly like it does for your future customers."
        align="centered"
      />

      {/* 3 steps — LIGHT */}
      <section className="relative w-full" style={{ background: "#FFFFFF", color: INK }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
            {STEPS.map((s) => (
              <div key={s.num}>
                <div
                  className="mb-5"
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 52,
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                    color: ACCENT,
                  }}
                >
                  {s.num}
                </div>
                <h3
                  className="uppercase mb-3"
                  style={{
                    fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    lineHeight: 1.08,
                    letterSpacing: "-0.01em",
                    color: INK,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "rgba(18,17,20,0.68)",
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form / Success — DARK */}
      <section className="relative w-full overflow-hidden" style={{ background: INK, color: CREAM }}>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.05,
            mixBlendMode: "multiply",
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />

        <div className="relative z-10 max-w-[720px] mx-auto px-6 py-20 lg:py-28">
          {state === "success" ? (
            <div
              className="text-center"
              style={{
                background: "#0F0E10",
                border: "1px solid rgba(252,255,213,0.12)",
                borderRadius: 14,
                padding: "48px 36px",
              }}
            >
              <div
                className="inline-flex items-center justify-center mx-auto mb-6"
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 999,
                  background: `${ACCENT}1A`,
                  border: `1px solid ${ACCENT}55`,
                }}
              >
                <CheckCircle className="w-8 h-8" style={{ color: ACCENT }} />
              </div>

              <h2
                className="uppercase mb-4"
                style={{
                  fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(30px, 4.5vw, 48px)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: CREAM,
                }}
              >
                {result?.smsSent ? "Check your phone " : "Check your email "}
                <span
                  style={{
                    color: ACCENT,
                    fontStyle: "italic",
                    fontFamily: "var(--font-display), 'Instrument Serif', serif",
                  }}
                >
                  {result?.smsSent ? "+ inbox" : "now"}
                </span>
              </h2>

              <p
                className="mb-8 max-w-md mx-auto"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: "rgba(252,255,213,0.72)",
                }}
              >
                {result?.smsSent
                  ? "Our AI just reached out to you. You'll receive a text and an email in the next few seconds."
                  : "Our AI just sent you a personalized email. Check your inbox (and spam folder)."}
              </p>

              <div className="space-y-3 mb-8 text-left">
                <div
                  className="flex items-center gap-4 p-4"
                  style={{ background: "rgba(252,255,213,0.04)", border: "1px solid rgba(252,255,213,0.1)", borderRadius: 8 }}
                >
                  <Mail className="w-5 h-5 shrink-0" style={{ color: ACCENT }} />
                  <div className="flex-1">
                    <div style={{ fontSize: 14, fontWeight: 600, color: CREAM }}>
                      {result?.emailSent ? "Email sent" : "Email pending"}
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(252,255,213,0.6)" }}>
                      Check your inbox (and spam)
                    </div>
                  </div>
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: ACCENT }} />
                </div>
                {result?.smsSent && (
                  <div
                    className="flex items-center gap-4 p-4"
                    style={{ background: "rgba(252,255,213,0.04)", border: "1px solid rgba(252,255,213,0.1)", borderRadius: 8 }}
                  >
                    <MessageSquare className="w-5 h-5 shrink-0" style={{ color: ACCENT }} />
                    <div className="flex-1">
                      <div style={{ fontSize: 14, fontWeight: 600, color: CREAM }}>SMS sent</div>
                      <div style={{ fontSize: 12, color: "rgba(252,255,213,0.6)" }}>
                        Check your text messages
                      </div>
                    </div>
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: ACCENT }} />
                  </div>
                )}
              </div>

              <p
                className="mb-8 max-w-md mx-auto"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: "rgba(252,255,213,0.55)",
                }}
              >
                This is exactly what happens when a lead contacts your business. Instant, personalized AI follow-up — 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 uppercase font-bold transition-colors"
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    background: ACCENT,
                    color: INK,
                    borderRadius: 4,
                  }}
                >
                  Book a free audit →
                </Link>
                <button
                  onClick={() => {
                    setState("idle");
                    setResult(null);
                    setForm({ firstName: "", lastName: "", email: "", phone: "", businessName: "" });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 uppercase font-bold transition-colors hover:bg-[#FCFFD5]/10"
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    color: CREAM,
                    border: `1.5px solid ${CREAM}`,
                    borderRadius: 4,
                  }}
                >
                  Try again
                </button>
              </div>
            </div>
          ) : (
            <div
              style={{
                background: "#0F0E10",
                border: "1px solid rgba(252,255,213,0.12)",
                borderRadius: 14,
                padding: "36px 32px",
              }}
            >
              <div
                className="inline-flex items-center gap-2.5 uppercase mb-3"
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  color: CREAM,
                  fontWeight: 500,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
                Try it live
              </div>
              <h2
                className="uppercase mb-3"
                style={{
                  fontFamily: "var(--font-heading), 'Archivo Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: 34,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: CREAM,
                }}
              >
                Real info only —{" "}
                <span
                  style={{
                    color: ACCENT,
                    fontStyle: "italic",
                    fontFamily: "var(--font-display), 'Instrument Serif', serif",
                  }}
                >
                  we'll text you.
                </span>
              </h2>
              <p
                className="mb-7"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: "rgba(252,255,213,0.6)",
                }}
              >
                Fill in your actual phone + email. You'll get a personalized AI message within seconds.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block uppercase mb-2"
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: 10,
                        letterSpacing: "0.22em",
                        color: "rgba(252,255,213,0.6)",
                        fontWeight: 500,
                      }}
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className={inputCls}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block uppercase mb-2"
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: 10,
                        letterSpacing: "0.22em",
                        color: "rgba(252,255,213,0.6)",
                        fontWeight: 500,
                      }}
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className={inputCls}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="businessName"
                    className="block uppercase mb-2"
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      color: "rgba(252,255,213,0.6)",
                      fontWeight: 500,
                    }}
                  >
                    Business name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={form.businessName}
                    onChange={handleChange}
                    placeholder="Smith's Plumbing"
                    className={inputCls}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block uppercase mb-2"
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      color: "rgba(252,255,213,0.6)",
                      fontWeight: 500,
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@smithplumbing.com"
                    className={inputCls}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block uppercase mb-2"
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      color: "rgba(252,255,213,0.6)",
                      fontWeight: 500,
                    }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className={inputCls}
                    style={inputStyle}
                  />
                </div>

                {state === "error" && (
                  <div
                    className="p-3"
                    style={{
                      background: "rgba(239,68,68,0.1)",
                      border: "1px solid rgba(239,68,68,0.3)",
                      borderRadius: 6,
                      fontSize: 13,
                      color: "#FCA5A5",
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-3 py-4 uppercase font-bold transition-colors disabled:opacity-60"
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    background: ACCENT,
                    color: INK,
                    borderRadius: 4,
                  }}
                >
                  {state === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      AI is reaching out...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      Send me the AI demo
                    </>
                  )}
                </button>
              </form>

              <p
                className="mt-5 text-center"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 11,
                  lineHeight: 1.55,
                  color: "rgba(252,255,213,0.5)",
                }}
              >
                By submitting, you consent to receive automated AI-generated text messages and emails from ServiceGrowth.ai. Message &amp; data rates may apply. Reply STOP to opt out. See our{" "}
                <Link href="/privacy" className="underline hover:no-underline" style={{ color: ACCENT }}>
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

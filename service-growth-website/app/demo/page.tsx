"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import { Zap, Mail, MessageSquare, CheckCircle, Loader2, Bot, ArrowRight } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

interface DemoResult {
  emailSent: boolean;
  smsSent: boolean;
}

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          phone: toE164(form.phone),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setResult(data);
      setState("success");
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

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

  /* Shared input classes for cream background */
  const inputCls =
    "w-full px-4 py-3 rounded-lg bg-white border border-[#D6D0C7] text-[#0F0E10] text-sm placeholder:text-[#B8B3AA] focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/40 focus:border-[#FF6A00] transition-colors";

  return (
    <>
      {/* Hero — section-dark */}
      <section className="section-dark pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6"
              style={{
                backgroundColor: "rgba(255, 106, 0,0.10)",
                border: "1px solid rgba(255, 106, 0,0.25)",
                color: "#FF6A00",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
              LIVE DEMO
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6" style={{ color: "#FCFFD5" }}>
              See Our AI <span className="italic" style={{ color: "#FF6A00" }}>In Action</span>
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "#B8B3AA" }}>
              Enter your info below. Within seconds, our AI will reach out to you
              via text and email — just like it does for your future customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Steps — cream */}
      <section className="pb-12 px-6" style={{ backgroundColor: "#FCFFD5" }}>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Bot, step: "1", title: "You Enter Your Info", desc: "Name, email, and phone number" },
              { icon: Zap, step: "2", title: "AI Activates Instantly", desc: "Our system triggers in real-time" },
              { icon: Mail, step: "3", title: "You Get Contacted", desc: "Email + text message within seconds" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="card-embossed p-5 text-center"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "rgba(255, 106, 0,0.10)" }}
                >
                  <item.icon className="w-5 h-5" style={{ color: "#FF6A00" }} />
                </div>
                <div className="text-xs font-medium mb-1" style={{ color: "#D45800" }}>STEP {item.step}</div>
                <h3 className="text-sm font-medium mb-1" style={{ color: "#0F0E10" }}>{item.title}</h3>
                <p className="text-xs" style={{ color: "#7A766E" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form / Success — cream */}
      <section className="pb-24 px-6" style={{ backgroundColor: "#FCFFD5" }}>
        <div className="max-w-lg mx-auto">
          <AnimatePresence mode="wait">
            {state === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="card-glass-cream rounded-2xl p-8 text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "rgba(255, 106, 0,0.10)" }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: "#FF6A00" }} />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4" style={{ color: "#0F0E10" }}>
                  {result?.smsSent ? "Check Your Phone & Email" : "Check Your Email"}
                </h2>
                <p className="mb-6" style={{ color: "#4A4A45" }}>
                  {result?.smsSent
                    ? "Our AI just reached out to you. You should receive a text message and an email within the next few seconds."
                    : "Our AI just sent you a personalized email — check your inbox. This all happened automatically within seconds."}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 card-embossed p-4 rounded-lg">
                    <Mail className="w-5 h-5 shrink-0" style={{ color: "#FF6A00" }} />
                    <div className="text-left">
                      <div className="text-sm font-medium" style={{ color: "#0F0E10" }}>
                        {result?.emailSent ? "Email Sent" : "Email Pending"}
                      </div>
                      <div className="text-xs" style={{ color: "#7A766E" }}>Check your inbox (and spam)</div>
                    </div>
                    <CheckCircle className="w-4 h-4 text-green-600 ml-auto shrink-0" />
                  </div>
                  {result?.smsSent && (
                    <div className="flex items-center gap-3 card-embossed p-4 rounded-lg">
                      <MessageSquare className="w-5 h-5 shrink-0" style={{ color: "#FF6A00" }} />
                      <div className="text-left">
                        <div className="text-sm font-medium" style={{ color: "#0F0E10" }}>SMS Sent</div>
                        <div className="text-xs" style={{ color: "#7A766E" }}>Check your text messages</div>
                      </div>
                      <CheckCircle className="w-4 h-4 text-green-600 ml-auto shrink-0" />
                    </div>
                  )}
                </div>

                <p className="text-sm mb-6" style={{ color: "#7A766E" }}>
                  This is exactly what happens when a lead contacts your business.
                  Instant, personalized AI follow-up — 24/7.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button href="/contact" variant="primary" size="default">
                    Book a Free Audit <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    variant="glass"
                    size="default"
                    onClick={() => {
                      setState("idle");
                      setResult(null);
                      setForm({ firstName: "", lastName: "", email: "", phone: "", businessName: "" });
                    }}
                  >
                    Try Again
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className="card-glass-cream rounded-2xl p-8">
                  <h2 className="text-xl font-medium mb-1" style={{ color: "#0F0E10" }}>
                    Try It Yourself
                  </h2>
                  <p className="text-sm mb-6" style={{ color: "#7A766E" }}>
                    Fill in your real info — you&apos;ll get a personalized AI message instantly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-xs mb-1.5" style={{ color: "#7A766E" }}>
                          First Name
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
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-xs mb-1.5" style={{ color: "#7A766E" }}>
                          Last Name
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
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-xs mb-1.5" style={{ color: "#7A766E" }}>
                        Business Name
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
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs mb-1.5" style={{ color: "#7A766E" }}>
                        Email Address
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
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs mb-1.5" style={{ color: "#7A766E" }}>
                        Phone Number
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
                      />
                    </div>

                    {state === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm"
                      >
                        {errorMsg}
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      className={state === "submitting" ? "opacity-70 pointer-events-none" : ""}
                    >
                      {state === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          AI is reaching out...
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4 mr-2" />
                          Send Me the AI Demo
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-center mt-4" style={{ color: "#7A766E" }}>
                    By submitting this form, you consent to receive automated AI-generated
                    text messages and emails from ServiceGrowth.ai. Message &amp; data rates
                    may apply. Reply STOP to opt out. View our{" "}
                    <a href="/privacy" className="underline hover:no-underline" style={{ color: "#D45800" }}>
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

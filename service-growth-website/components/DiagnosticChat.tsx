"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Check, ArrowRight, Shield } from "lucide-react";

type Role = "user" | "assistant";
interface Msg {
  role: Role;
  content: string;
}

interface SubmitPayload {
  name: string;
  business_name?: string;
  service_type?: string;
  location?: string;
  revenue_band?: string;
  lead_sources?: string;
  speed_to_lead?: string;
  bottleneck?: string;
  phone?: string;
  email?: string;
  qualified: boolean;
  cta_variant: "phone" | "calendly";
  summary: string;
}

interface SubmitResult {
  success: boolean;
  qualified: boolean;
  calendly_url: string | null;
}

const GREETING_PHONE =
  "Hey — Alex with Service Growth AI. Victor asked me to chat with whoever fills this out so we don't waste anyone's time on the call. Cool if I ask a few quick ones? What should I call you?";

const GREETING_CALENDLY =
  "Hey — Alex with Service Growth AI. I'm going to ask a few quick ones so when you hop on the call, we're not starting from scratch. What should I call you?";

function pickVariant(): "phone" | "calendly" {
  if (typeof window === "undefined") return "phone";
  const stored = sessionStorage.getItem("sg_cta_variant");
  if (stored === "phone" || stored === "calendly") return stored;
  const v: "phone" | "calendly" = Math.random() < 0.5 ? "phone" : "calendly";
  sessionStorage.setItem("sg_cta_variant", v);
  return v;
}

export default function DiagnosticChat() {
  const [variant, setVariant] = useState<"phone" | "calendly">("phone");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState<{
    payload: SubmitPayload;
    result: SubmitResult;
  } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Assign A/B variant once on mount and seed the greeting
  useEffect(() => {
    const v = pickVariant();
    setVariant(v);
    setMessages([
      {
        role: "assistant",
        content: v === "phone" ? GREETING_PHONE : GREETING_CALENDLY,
      },
    ]);
  }, []);

  // Autoscroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, loading, submitted]);

  const placeholder = useMemo(() => {
    if (submitted) return "Conversation complete — check your email";
    if (messages.length === 1) return "Type your name…";
    if (messages.length < 4) return "Type your answer…";
    return "Type your answer…";
  }, [messages, submitted]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading || submitted) return;

    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/diagnostic/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, cta_variant: variant }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: "Request failed" }));
        throw new Error(data.error || "Chat request failed");
      }

      const data: {
        assistant: string;
        submit: SubmitPayload | null;
        stop_reason: string;
      } = await res.json();

      if (data.assistant) {
        setMessages([...next, { role: "assistant", content: data.assistant }]);
      }

      if (data.submit) {
        // Fire the submit — don't block the user from seeing Alex's last
        // line if there was one alongside the tool call.
        await finalizeSubmit(data.submit, next);
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  async function finalizeSubmit(payload: SubmitPayload, transcript: Msg[]) {
    try {
      const res = await fetch("/api/diagnostic/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, transcript }),
      });
      const data: SubmitResult & { error?: string } = await res.json();
      if (!res.ok) throw new Error(data.error || "Submit failed");
      setSubmitted({ payload, result: data });
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error
          ? `Submit failed: ${err.message}`
          : "Submit failed"
      );
    }
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow behind card */}
      <div className="absolute -inset-8 bg-[#E25312]/10 rounded-[32px] blur-3xl pointer-events-none" />

      <div className="relative bg-white border border-[#10100F]/[0.08] rounded-2xl shadow-[0_1px_3px_rgba(16, 16, 15,0.04),0_20px_60px_-15px_rgba(16, 16, 15,0.15)] overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-[#10100F]/[0.06] flex items-center gap-3 bg-[#FCFFD5]/40">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-[#E25312] flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#4ADE80] border-2 border-white rounded-full" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-heading font-bold text-[#10100F] text-[15px] tracking-tight">
                Alex
              </p>
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#10100F]/40 font-semibold">
                ServiceGrowth AI
              </span>
            </div>
            <p className="text-[#10100F]/50 text-xs">
              Qualifying leads · Replies in seconds
            </p>
          </div>
          <div className="flex items-center gap-1 text-[#10100F]/40 text-[10px]">
            <Shield className="w-3 h-3" />
            <span>Secure</span>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="h-[480px] overflow-y-auto px-5 py-6 space-y-4 bg-gradient-to-b from-white to-[#FCFFD5]/20"
        >
          <AnimatePresence initial={false}>
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed ${
                    m.role === "user"
                      ? "bg-[#10100F] text-[#FCFFD5] rounded-br-md"
                      : "bg-white border border-[#10100F]/[0.08] text-[#10100F] rounded-bl-md shadow-sm"
                  }`}
                >
                  {m.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-white border border-[#10100F]/[0.08] rounded-2xl rounded-bl-md px-4 py-3 shadow-sm flex items-center gap-1.5">
                {[0, 150, 300].map((d) => (
                  <motion.span
                    key={d}
                    className="w-1.5 h-1.5 rounded-full bg-[#E25312]/60"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: d / 1000,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-3"
            >
              <div className="bg-[#10100F] rounded-2xl p-5 text-[#FCFFD5]">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="w-4 h-4 text-[#E25312]" />
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#E25312]">
                    Your Diagnostic
                  </p>
                </div>
                <p className="text-[15px] leading-relaxed text-[#FCFFD5]/90 mb-5">
                  {submitted.payload.summary}
                </p>

                {submitted.result.qualified ? (
                  submitted.payload.cta_variant === "phone" ? (
                    <div>
                      <p className="text-sm text-[#FCFFD5]/60 mb-3">
                        Our sales rep calls you today. He&apos;ll text first so you
                        know it&apos;s him.
                      </p>
                      <a
                        href={submitted.result.calendly_url || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E25312] hover:bg-[#C65320] text-white font-semibold text-sm transition-colors"
                      >
                        Skip the wait — pick a time now
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  ) : (
                    <a
                      href={submitted.result.calendly_url || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E25312] hover:bg-[#C65320] text-white font-semibold text-sm transition-colors"
                    >
                      Pick a time on the calendar
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )
                ) : (
                  <p className="text-sm text-[#FCFFD5]/60">
                    Check your email — the full blueprint is on its way.
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {error && (
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm bg-red-50 border border-red-200 text-red-700">
                {error}
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t border-[#10100F]/[0.06] bg-white">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder={placeholder}
              disabled={loading || !!submitted}
              className="flex-1 px-4 py-2.5 rounded-xl bg-[#FCFFD5]/60 border border-[#10100F]/10 text-[#10100F] placeholder:text-[#10100F]/40 focus:outline-none focus:border-[#E25312]/50 focus:ring-1 focus:ring-[#E25312]/30 text-[15px] transition-colors disabled:opacity-50"
              autoComplete="off"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim() || !!submitted}
              className="w-10 h-10 flex-shrink-0 rounded-xl bg-[#E25312] hover:bg-[#C65320] text-white flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Send"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </div>
          <p className="text-[10px] text-[#10100F]/40 mt-2 text-center tracking-tight">
            Chat with Alex · Your answers go to our sales team · We never spam
          </p>
        </div>
      </div>
    </div>
  );
}

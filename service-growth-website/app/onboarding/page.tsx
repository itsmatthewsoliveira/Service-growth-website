"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import OnboardingForm from "@/components/OnboardingForm";
import { type Lang, ts } from "@/lib/onboarding-translations";

export default function OnboardingPage() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <>
      {/* Hero — section-dark */}
      <section className="section-dark relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{ background: "rgba(255, 106, 0,0.10)" }} />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-6"
            style={{
              border: "1px solid rgba(255, 106, 0,0.25)",
              backgroundColor: "rgba(255, 106, 0,0.08)",
              color: "#B8B3AA",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
            {ts("heroBadge", lang)}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
            style={{ color: "#FCFFD5" }}
          >
            {ts("heroTitle1", lang)}{" "}
            <span className="italic" style={{ color: "#FF6A00" }}>{ts("heroTitle2", lang)}</span>
            <br />
            {ts("heroTitle3", lang)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-lg mx-auto"
            style={{ color: "#B8B3AA" }}
          >
            {ts("heroSubtitle", lang)}
          </motion.p>
        </div>
      </section>

      {/* Form — cream */}
      <section className="py-20 px-6" style={{ backgroundColor: "#FCFFD5" }}>
        <div className="max-w-[760px] mx-auto">
          <OnboardingForm lang={lang} setLang={setLang} />
        </div>
      </section>
    </>
  );
}

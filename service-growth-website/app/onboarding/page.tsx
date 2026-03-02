"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import OnboardingForm from "@/components/OnboardingForm";
import { type Lang, ts } from "@/lib/onboarding-translations";

export default function OnboardingPage() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-6 gradient-hero overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-text-body mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {ts("heroBadge", lang)}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif text-text-headline mb-6"
          >
            {ts("heroTitle1", lang)}{" "}
            <span className="italic text-accent">{ts("heroTitle2", lang)}</span>
            <br />
            {ts("heroTitle3", lang)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-text-body max-w-lg mx-auto"
          >
            {ts("heroSubtitle", lang)}
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6">
        <div className="max-w-[760px] mx-auto">
          <OnboardingForm lang={lang} setLang={setLang} />
        </div>
      </section>
    </>
  );
}

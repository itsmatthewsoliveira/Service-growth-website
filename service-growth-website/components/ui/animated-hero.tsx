"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, MessageSquare, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/shadcn-button";
import Link from "next/link";
import LightPillar from "@/components/LightPillar";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
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
    <div className="w-full relative overflow-hidden">
      {/* Dark Veil Background Image */}
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          backgroundImage: "url('/dark-veil.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Light Pillar Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <LightPillar
          topColor="#000000"
          bottomColor="#28e8fd"
          intensity={1}
          rotationSpeed={0.3}
          interactive={false}
          glowAmount={0.02}
          pillarWidth={12}
          pillarHeight={0.6}
          noiseIntensity={1.3}
          pillarRotation={0}
        />
      </div>

      {/* Hero Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(40, 232, 253, 0.15) 0%, transparent 60%)"
        }}
      />

      {/* Secondary Glow Orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#28e8fd]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#28e8fd]/20 bg-[#28e8fd]/5 text-sm text-text-body">
              <span className="w-2 h-2 rounded-full bg-[#28e8fd] animate-pulse" />
              From service business owners, for service business owners
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            className="flex gap-4 flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-6xl md:text-8xl max-w-5xl tracking-tighter text-center font-serif">
              <span className="text-text-headline">AI systems built for</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    style={{ color: "#28e8fd" }}
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-text-body max-w-2xl text-center mx-auto">
              We scaled our own service business from $0 to $100K in profit in 90 days.
              $30K/month revenue. $200K invoiced. We&apos;re not here to sell you a template —
              we&apos;re here to build what actually works for you.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/contact">
              <Button size="lg" className="gap-4 rounded-full bg-[#28e8fd] hover:bg-[#28e8fd]/90 text-black font-semibold">
                Book a Free Audit <PhoneCall className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button size="lg" className="gap-4 rounded-full border-[#28e8fd]/30 hover:border-[#28e8fd]/50 hover:bg-[#28e8fd]/10" variant="outline">
                See How It Works <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Stats Row with Card Background */}
          <motion.div
            className="mt-8 px-8 py-6 rounded-2xl"
            style={{
              background: "rgba(40, 232, 253, 0.03)",
              border: "1px solid rgba(40, 232, 253, 0.15)",
              boxShadow: "0 0 60px rgba(40, 232, 253, 0.1), inset 0 0 30px rgba(40, 232, 253, 0.02)"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { value: "$100K", label: "Profit in 90 Days" },
                { value: "$30K/mo", label: "Revenue" },
                { value: "$200K", label: "Invoiced" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                >
                  <div
                    className="text-3xl md:text-4xl font-semibold mb-1"
                    style={{ color: "#28e8fd" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element - Lead Flow Mockup */}
          <motion.div
            className="mt-12 w-full max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "linear-gradient(180deg, rgba(20, 20, 20, 0.9) 0%, rgba(15, 15, 15, 0.95) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
            >
              {/* Window Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-4 text-xs text-text-muted font-mono">ServiceGrowth AI Dashboard</span>
              </div>

              {/* Flow Steps */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                {/* Step 1: Lead Notification */}
                <motion.div
                  className="flex-1 w-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="bg-bg-surface rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#28e8fd]/20 flex items-center justify-center">
                        <PhoneCall className="w-4 h-4 text-[#28e8fd]" />
                      </div>
                      <span className="text-xs text-[#28e8fd] font-medium">NEW LEAD</span>
                    </div>
                    <p className="text-sm text-text-headline">&quot;Need roof repair ASAP&quot;</p>
                    <p className="text-xs text-text-muted mt-1">Missed call at 2:34 PM</p>
                  </div>
                </motion.div>

                {/* Arrow */}
                <div className="hidden md:block text-[#28e8fd]/50">
                  <MoveRight className="w-6 h-6" />
                </div>
                <div className="md:hidden text-[#28e8fd]/50 rotate-90">
                  <MoveRight className="w-5 h-5" />
                </div>

                {/* Step 2: AI Response */}
                <motion.div
                  className="flex-1 w-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <div className="bg-bg-surface rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#28e8fd]/20 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-[#28e8fd]" />
                      </div>
                      <span className="text-xs text-[#28e8fd] font-medium">AI RESPONSE</span>
                    </div>
                    <p className="text-sm text-text-headline">&quot;Hi! We can help. When works for an estimate?&quot;</p>
                    <p className="text-xs text-text-muted mt-1">Sent in 8 seconds</p>
                  </div>
                </motion.div>

                {/* Arrow */}
                <div className="hidden md:block text-[#28e8fd]/50">
                  <MoveRight className="w-6 h-6" />
                </div>
                <div className="md:hidden text-[#28e8fd]/50 rotate-90">
                  <MoveRight className="w-5 h-5" />
                </div>

                {/* Step 3: Booking Confirmed */}
                <motion.div
                  className="flex-1 w-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <div className="bg-bg-surface rounded-xl p-4 border border-[#28e8fd]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#28e8fd]/20 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-[#28e8fd]" />
                      </div>
                      <span className="text-xs text-[#28e8fd] font-medium">BOOKED</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#28e8fd]" />
                      <p className="text-sm text-text-headline">Tomorrow 9:00 AM</p>
                    </div>
                    <p className="text-xs text-text-muted mt-1">Added to calendar</p>
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

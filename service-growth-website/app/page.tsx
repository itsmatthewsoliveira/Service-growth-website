"use client";

import HeroSplit from "@/components/sections/HeroSplit";
import GrowthEngineBento from "@/components/sections/GrowthEngineBento";
import IndustriesEditorial from "@/components/sections/IndustriesEditorial";
import ProofStrip from "@/components/sections/ProofStrip";
import ClosingCTA from "@/components/sections/ClosingCTA";

export default function HomePage() {
  return (
    <>
      {/* 1 · Hero — DARK */}
      <HeroSplit />

      {/* 2 · Growth Engine — DARK */}
      <GrowthEngineBento />

      {/* 3 · Industries — WHITE (anime image slots) */}
      <IndustriesEditorial />

      {/* 4 · Proof + Testimonials — DARK */}
      <ProofStrip />

      {/* 5 · Closing CTA — WHITE */}
      <ClosingCTA />
    </>
  );
}

"use client";

import PageHero from "@/components/sections/PageHero";
import EditorialBlock from "@/components/sections/EditorialBlock";
import ClosingCTA from "@/components/sections/ClosingCTA";

const SERVICES = [
  {
    num: "01",
    href: "/services/website",
    eyebrow: "Website services",
    lead: "Sites that",
    accent: "convert",
    trail: "— not just exist",
    body: "Your website should be your hardest-working employee. We build conversion-focused, mobile-first sites that load fast, rank on Google, and turn visitors into booked jobs.",
    bullets: ["Custom design built for your service", "Mobile-first, fast-loading", "Local SEO baked in", "Lead capture wired to your CRM"],
    image: "/hero-climb.png",
    imagePosition: "right" as const,
  },
  {
    num: "02",
    href: "/services/ads",
    eyebrow: "Ads management",
    lead: "In front of",
    accent: "real buyers",
    trail: "— not tire-kickers",
    body: "Stop wasting money on ads that don't convert. We run Google and Meta campaigns that put you in front of people actively searching for your services right now.",
    bullets: ["Google Ads (Search + Local)", "Meta / Facebook / Instagram", "Retargeting funnels", "Weekly reporting you can read"],
    image: "/growth-collab.png",
    imagePosition: "left" as const,
  },
  {
    num: "03",
    href: "/services/content",
    eyebrow: "Content + visual",
    lead: "Look as good as",
    accent: "your work",
    trail: "actually is",
    body: "Your competitors with worse work are winning jobs because their photos look better. We fix that — professional visual content, before/after magic, and social content that sells itself.",
    bullets: ["iPhone → editorial photo transformation", "3D renders + mood boards", "Video animation for social", "Full social content calendar"],
    image: "/hero-climb.png",
    imagePosition: "right" as const,
  },
  {
    num: "04",
    href: "/services/automation",
    eyebrow: "AI automation",
    lead: "Never miss",
    accent: "another lead.",
    body: "Every missed call is a missed job. Our AI systems respond in under 60 seconds, qualify leads automatically, and book appointments while you're on the jobsite.",
    bullets: ["AI lead capture + qualification", "Voice bot — AI answers every call", "SMS/email follow-up sequences", "Full CRM + calendar integration"],
    image: "/growth-collab.png",
    imagePosition: "left" as const,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        headlineLead="One partner."
        headlineAccent="Every solution."
        subhead="Four services, built to work together. You don't need five vendors and a spreadsheet — you need one team running the whole growth engine."
        primaryCta={{ label: "See pricing", href: "/pricing" }}
        secondaryCta={{ label: "Book a demo", href: "/growth-blueprint" }}
        align="centered"
      />

      {SERVICES.map((s) => (
        <EditorialBlock
          key={s.num}
          theme="light"
          num={s.num}
          eyebrow={s.eyebrow}
          headlineLead={s.lead}
          headlineAccent={s.accent}
          headlineTrail={s.trail}
          body={s.body}
          bullets={s.bullets}
          cta={{ label: `Explore ${s.eyebrow.split(" ")[0].toLowerCase()}`, href: s.href }}
          image={s.image}
          imageAlt={`${s.eyebrow} — anime placeholder`}
          imagePosition={s.imagePosition}
        />
      ))}

      <ClosingCTA />
    </>
  );
}

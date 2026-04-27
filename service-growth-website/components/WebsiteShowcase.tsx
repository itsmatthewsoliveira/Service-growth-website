"use client";

import { motion } from "framer-motion";

interface ShowcaseSite {
  industry: string;
  description: string;
  image: string;
}

const showcaseSites: ShowcaseSite[] = [
  {
    industry: "Roofing",
    description: "Lead-capturing roofing site with instant estimates",
    image: "/mockup-roofing.webp",
  },
  {
    industry: "HVAC",
    description: "24/7 booking system for climate companies",
    image: "/mockup-hvac.webp",
  },
  {
    industry: "Dental",
    description: "Patient-friendly design that fills chairs",
    image: "/mockup-dental.webp",
  },
  {
    industry: "Landscaping",
    description: "Premium outdoor living showcase with form overlay",
    image: "/mockup-landscaping.webp",
  },
  {
    industry: "Construction",
    description: "Portfolio-driven site for general contractors",
    image: "/mockup-construction.webp",
  },
  {
    industry: "Cleaning",
    description: "Bright, trust-building site with instant quotes",
    image: "/mockup-cleaning.webp",
  },
];

function ShowcaseCard({ site, index }: { site: ShowcaseSite; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="card-embossed overflow-hidden p-4">
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4 flex items-center justify-center">
          <img
            src={site.image}
            alt={`${site.industry} website mockup`}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-1" style={{ color: "#FCFFD5" }}>
            {site.industry}
          </h4>
          <p className="text-sm text-[#B8B3AA]">{site.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WebsiteShowcase() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl mb-4"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 800, color: "#FCFFD5" }}
        >
          Websites That Actually Convert
        </h2>
        <p className="text-[#B8B3AA] text-lg max-w-2xl mx-auto">
          Not templates. Custom-built websites designed for your industry,
          optimized to turn visitors into booked appointments.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {showcaseSites.map((site, i) => (
          <ShowcaseCard key={site.industry} site={site} index={i} />
        ))}
      </div>
    </div>
  );
}

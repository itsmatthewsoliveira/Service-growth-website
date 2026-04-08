import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Live in 14 Days",
  description:
    "From signed to live in 14 days. We handle everything: AI lead capture, voice bots, missed call text-back, review automation, and CRM setup. Your total time investment is about 2 hours.",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How It Works | ServiceGrowth AI",
    description:
      "Discovery call, custom plan, build, test, go live in 14 days. Your time investment: ~2 hours. We handle everything else.",
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing for Home Service Businesses",
  description:
    "AI lead capture, missed call text-back, voice bots, and automation for HVAC, plumbing, roofing, landscaping, and cleaning companies. Stop losing leads to slow follow-up.",
  alternates: {
    canonical: "/industries/home-services",
  },
  openGraph: {
    title: "Home Services AI Marketing | ServiceGrowth AI",
    description:
      "AI-powered lead capture and automation for HVAC, plumbing, roofing, landscaping, and cleaning businesses.",
  },
};

export default function HomeServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

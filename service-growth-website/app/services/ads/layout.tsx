import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google & Meta Ads Management for Service Businesses",
  description:
    "Expert ads management for HVAC, plumbing, roofing, dental, and construction businesses. Precise targeting, conversion tracking, and monthly reporting. From $1,500/mo.",
  alternates: {
    canonical: "/services/ads",
  },
};

export default function AdsServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

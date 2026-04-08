import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Websites, Ads, Content & Automation",
  description:
    "Full-service AI marketing for service businesses: high-converting websites, Google & Meta ads management, content creation, photo transformation, 3D renders, and AI automation. One partner, every solution.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | ServiceGrowth AI",
    description:
      "Websites, ads, content, and automation — everything your service business needs to dominate your market, under one roof.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

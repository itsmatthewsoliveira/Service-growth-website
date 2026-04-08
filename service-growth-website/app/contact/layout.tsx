import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call",
  description:
    "Schedule a free 25-minute strategy call with ServiceGrowth AI. We'll identify where you're losing leads and show you what AI automation can do for your service business. No pitch, just clarity.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Book a Free Strategy Call | ServiceGrowth AI",
    description:
      "Free 25-minute audit for service businesses. We'll show you exactly where you're losing leads — whether you hire us or not.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

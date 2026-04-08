import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing for Construction & Contractors",
  description:
    "AI-powered lead capture, 3D renders, photo transformation, and automation for contractors, remodelers, builders, and architects. Close more deals with faster response and better visuals.",
  alternates: {
    canonical: "/industries/construction",
  },
  openGraph: {
    title: "Construction Marketing AI | ServiceGrowth AI",
    description:
      "AI lead capture, 3D renders, photo transformation and automation for contractors and builders.",
  },
};

export default function ConstructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

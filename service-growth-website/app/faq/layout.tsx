import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about ServiceGrowth AI: pricing, setup time, HIPAA compliance, AI automation, contracts, and what results to expect. Get answers before booking your free call.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

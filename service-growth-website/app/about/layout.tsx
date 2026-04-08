import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Built by Operators, Not Grifters",
  description:
    "ServiceGrowth AI was built by Matthews, a service business owner who scaled from $0 to $100K profit in 90 days. We only sell what we've built and proven ourselves. Jacksonville, FL.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About ServiceGrowth AI | Built by Service Business Owners",
    description:
      "We scaled our own service business to $100K/month before offering these AI systems to clients. Real results, not theory.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

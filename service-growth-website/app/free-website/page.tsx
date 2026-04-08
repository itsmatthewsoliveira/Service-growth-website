import type { Metadata } from "next";
import FreeWebsitePage from "./FreeWebsiteClient";

export const metadata: Metadata = {
  title: "Free Professional Website for Service Businesses | ServiceGrowth.ai",
  description:
    "We'll build you a professional, mobile-optimized website for free. No catch, no contracts. Custom designed for HVAC, plumbing, roofing, electrical, and other service businesses.",
  openGraph: {
    title: "Get a FREE Professional Website for Your Service Business",
    description:
      "We'll build you a professional, mobile-optimized website for free. No catch, no contracts. Limited to 10 businesses this month.",
    type: "website",
    url: "https://servicegrowth.ai/free-website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Website Offer - ServiceGrowth.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a FREE Professional Website for Your Service Business",
    description:
      "Custom designed, mobile-optimized website built for free. Limited to 10 businesses this month.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <FreeWebsitePage />;
}

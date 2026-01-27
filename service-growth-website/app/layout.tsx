import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Elegant serif for headers - similar to Monologue
const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ServiceGrowth.ai - AI That Actually Works for Service Businesses",
  description:
    "We scaled our own service business from $0 to $100K/month in 90 days. Now we build these systems for you. Home Services, Medical, Construction.",
  openGraph: {
    title: "ServiceGrowth.ai - AI That Actually Works for Service Businesses",
    description:
      "We scaled our own service business from $0 to $100K/month in 90 days. Now we build these systems for you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased`}
      >
        <GrainOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

// Inter for body, subheadlines, buttons
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Instrument Serif for big headlines - adds personality and warmth
const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
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
        className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        <GrainOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

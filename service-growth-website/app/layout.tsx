import type { Metadata } from "next";
import { Inter, Instrument_Serif, Archivo_Narrow, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const headingFont = Archivo_Narrow({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "ServiceGrowth AI | AI Lead Capture & Automation for Service Businesses",
    template: "%s | ServiceGrowth AI",
  },
  description:
    "AI-powered lead capture, missed call text-back, voice bots, and automation built for home services, medical, and construction businesses. We scaled our own business from $0 to $100K in 90 days — now we build these systems for you. Live in 14 days.",
  keywords: [
    "AI for service businesses",
    "lead capture automation",
    "missed call text back",
    "AI voice bot",
    "home service marketing",
    "HVAC marketing",
    "plumber marketing",
    "contractor marketing",
    "medical practice marketing",
    "construction marketing",
    "service business automation",
    "AI lead qualification",
    "review automation",
    "CRM automation",
    "ServiceGrowth AI",
  ],
  metadataBase: new URL("https://servicegrowth.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ServiceGrowth AI | AI That Actually Works for Service Businesses",
    description:
      "AI-powered lead capture and automation for home services, medical, and construction. Scaled from $0 to $100K in 90 days. Live in 14 days, results guaranteed.",
    type: "website",
    url: "https://servicegrowth.ai",
    siteName: "ServiceGrowth AI",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ServiceGrowth AI - AI-Powered Lead Capture and Automation for Service Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ServiceGrowth AI | AI Lead Capture for Service Businesses",
    description:
      "AI-powered lead capture, missed call text-back, and automation. Built by service business owners. Live in 14 days.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification here
    // google: "your-verification-code",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://servicegrowth.ai/#organization",
      name: "ServiceGrowth AI",
      url: "https://servicegrowth.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://servicegrowth.ai/logo-arrow.png",
      },
      description:
        "AI-powered lead capture, automation, and marketing solutions for service businesses including home services, medical practices, and construction companies.",
      telephone: "+1-904-454-2240",
      email: "hello@servicegrowth.ai",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jacksonville",
        addressRegion: "FL",
        addressCountry: "US",
      },
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-904-454-2240",
        contactType: "sales",
        availableLanguage: ["English"],
      },
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "Matthews",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://servicegrowth.ai/#website",
      url: "https://servicegrowth.ai",
      name: "ServiceGrowth AI",
      publisher: {
        "@id": "https://servicegrowth.ai/#organization",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://servicegrowth.ai/#service",
      name: "ServiceGrowth AI",
      url: "https://servicegrowth.ai",
      telephone: "+1-904-454-2240",
      email: "hello@servicegrowth.ai",
      description:
        "AI-powered lead capture, missed call text-back, voice bots, review automation, and marketing for service businesses.",
      priceRange: "$1,497 - $6,000+/mo",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jacksonville",
        addressRegion: "FL",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Automation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Lead Capture & Automation",
              description: "24/7 AI-powered lead capture, qualification, missed call text-back, and voice bot.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Services",
              description: "High-converting websites built for service businesses with lead capture built-in.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ads Management",
              description: "Google and Meta ads management for service businesses.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content & Visual",
              description: "Photo transformation, 3D renders, and video content for service businesses.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${headingFont.variable} ${mono.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <GrainOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

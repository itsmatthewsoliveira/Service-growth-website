import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design for Service Businesses",
  description:
    "High-converting, mobile-first websites built for service businesses. Lightning fast load times, SEO-ready, with lead capture built in. From $3,997.",
  alternates: {
    canonical: "/services/website",
  },
};

export default function WebsiteServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Growth Lab — AI Training for Service Businesses",
  description:
    "Join The Growth Lab: AI courses, live Q&A calls, templates, and a community of service business owners learning to leverage AI for growth. Free to join.",
  alternates: {
    canonical: "/community",
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

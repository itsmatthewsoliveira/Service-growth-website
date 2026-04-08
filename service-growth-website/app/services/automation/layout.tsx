import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation — Lead Capture, Voice Bots & Follow-Up",
  description:
    "AI-powered automation for service businesses: missed call text-back, AI lead qualification, voice bots, review automation, and CRM integration. Never miss another lead. From $997/mo.",
  alternates: {
    canonical: "/services/automation",
  },
};

export default function AutomationServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

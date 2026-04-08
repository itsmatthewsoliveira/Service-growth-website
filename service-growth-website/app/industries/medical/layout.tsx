import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing for Medical Practices",
  description:
    "HIPAA-compliant AI automation for dentists, chiropractors, med spas, and clinics. Appointment reminders, patient reactivation, review automation, and 24/7 AI lead capture.",
  alternates: {
    canonical: "/industries/medical",
  },
  openGraph: {
    title: "Medical Practice AI Marketing | ServiceGrowth AI",
    description:
      "HIPAA-compliant AI automation for dentists, chiropractors, med spas, and clinics.",
  },
};

export default function MedicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

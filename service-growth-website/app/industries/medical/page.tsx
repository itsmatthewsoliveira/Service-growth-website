import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title:
    "AI for Medical Practices - Dentists, Chiropractors, Med Spas | Service Growth AI",
  description:
    "Fill empty chairs automatically. Reduce no-shows by 30-50%, capture every new patient inquiry, and keep your schedule full.",
};

const challenges = [
  {
    icon: "🔐",
    title: "HIPAA Compliance",
    description:
      "You can't just use any software. It needs to be secure, compliant, and trustworthy. We get it—that's why we only use HIPAA-compliant systems and sign BAAs.",
  },
  {
    icon: "🤝",
    title: "Patient Trust",
    description:
      "Medical feels personal. Automation can feel cold. Our AI is conversational and warm—patients appreciate the instant response more than they notice the automation.",
  },
  {
    icon: "🪑",
    title: "No-Shows Kill Revenue",
    description:
      "Empty chairs cost you $200-500+ per hour. Automated reminders via text and email reduce no-shows by 30-50%, keeping your schedule full and revenue flowing.",
  },
];

const services = [
  {
    category: "REDUCE NO-SHOWS",
    title: "Appointment Reminders (SMS/Email)",
    description:
      "Automated text and email reminders sent at optimal times. Confirmation requests. Easy rescheduling links. Reduce no-shows by 30-50%.",
    result: "30-50% reduction in no-shows",
  },
  {
    category: "CAPTURE NEW PATIENTS",
    title: "AI Lead Capture",
    description:
      "Respond to new patient inquiries instantly—even after hours. AI qualifies, answers questions, and books the first appointment before they move on.",
    result: "60-second response time, 24/7",
  },
  {
    category: "BUILD REPUTATION",
    title: "Review Automation",
    description:
      "Automatically request reviews at the perfect moment—right after a positive appointment. Build the 5-star reputation that drives referrals.",
    result: "More 5-star reviews, more referrals",
  },
  {
    category: "AFTER HOURS COVERAGE",
    title: "Voice Bot (After Hours)",
    description:
      '"Our office is closed, but I can help you schedule..." AI handles after-hours calls, answers common questions, and books appointments for the next day.',
    result: "Never miss a new patient call",
  },
];

const objections = [
  {
    question: '"Is this HIPAA compliant?"',
    answer:
      "Yes. We use HIPAA-compliant systems and sign Business Associate Agreements (BAAs). Your patient data is protected. We understand the unique requirements of medical practices and build accordingly.",
  },
  {
    question: '"Will patients feel like they\'re talking to a robot?"',
    answer:
      "Our AI is conversational and warm. Patients appreciate the instant response more than they notice the automation. And here's the truth: patients prefer a quick text response over waiting on hold for 10 minutes.",
  },
  {
    question: '"We already have a front desk person."',
    answer:
      "Great—now they can focus on patients in the office instead of playing phone tag all day. The AI handles the repetitive stuff (reminders, follow-ups, after-hours calls) so your team can provide better in-person care.",
  },
  {
    question: '"What about patient privacy?"',
    answer:
      "We take privacy seriously. All data is encrypted, stored securely, and accessed only as needed. We follow strict security protocols and can provide documentation of our compliance measures.",
  },
];

const features = [
  {
    icon: "📱",
    title: "SMS Appointment Reminders",
    description: "Automated text reminders that reduce no-shows dramatically.",
  },
  {
    icon: "🤖",
    title: "AI Lead Capture",
    description: "Respond to new patient inquiries in under 60 seconds, 24/7.",
  },
  {
    icon: "⭐",
    title: "Review Generation",
    description:
      "Automated review requests timed perfectly after positive visits.",
  },
  {
    icon: "📞",
    title: "After-Hours Voice Bot",
    description:
      "AI handles calls when your office is closed. Never miss a new patient.",
  },
  {
    icon: "🔄",
    title: "Patient Reactivation",
    description:
      "Automated outreach to dormant patients. Fill gaps in your schedule.",
  },
  {
    icon: "🔒",
    title: "HIPAA Compliance",
    description: "All systems HIPAA-compliant. BAAs signed. Data protected.",
  },
];

export default function MedicalPage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-16 pb-20 px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs font-medium mb-8 text-white/80">
          <span className="text-2xl">🩺</span>
          For Dentists, Chiropractors, Med Spas & Clinics
        </div>
        <h1 className="text-5xl md:text-7xl leading-[0.9] text-white mb-8 font-serif">
          Fill Empty Chairs.
          <br />
          <span className="italic text-white/50">Automatically.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed font-sans mb-10">
          No-shows cost you $200-500+ per hour. Patients ghost after inquiring.
          Your front desk is overwhelmed. Our AI reduces no-shows, captures
          every new patient inquiry, and keeps your schedule full.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/contact" variant="primary" size="lg">
            Reduce No-Shows by 40%
          </Button>
          <Button href="/pricing" variant="secondary" size="lg">
            View Pricing
          </Button>
        </div>
      </header>

      {/* HIPAA Badge */}
      <section className="px-6 max-w-5xl mx-auto pb-12">
        <div className="bg-green-500/10 border border-green-500/30 rounded-[4px] p-4 flex items-center gap-4">
          <div className="text-3xl">🔒</div>
          <div>
            <div className="text-green-400 font-medium">HIPAA Compliant</div>
            <div className="text-white/50 text-sm">
              All systems are HIPAA-compliant. We sign BAAs. Your patient data
              is protected.
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-secondary py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-12 font-serif">
            We Understand Medical Practices
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="text-xl text-white">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-4 font-serif">
            What Matters Most for Your Practice
          </h2>
          <p className="text-white/60 mb-12 text-lg">
            The services that move the needle for medical practices.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-muted border border-white/10 rounded-[4px] p-8"
              >
                <div className="text-primary text-sm font-medium mb-2">
                  {service.category}
                </div>
                <h3 className="text-2xl text-white mb-4 font-serif">{service.title}</h3>
                <p className="text-white/60 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="text-primary font-bold text-lg">
                  {service.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="bg-neutral-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-12 text-center font-serif">
            Common Questions from Medical Practices
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {objections.map((item, i) => (
              <div
                key={i}
                className="bg-muted border border-white/5 rounded-[4px] p-6"
              >
                <h3 className="text-lg text-white mb-3">{item.question}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-12 text-center font-serif">
            What&apos;s Included
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-secondary border border-white/10 p-6 rounded-[4px]"
              >
                <div className="text-2xl mb-4">{feature.icon}</div>
                <h3 className="text-lg text-white mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6 font-serif">
            Ready to Fill Your Schedule?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Book a free 15-minute audit. We&apos;ll show you how much empty
            chair time is costing you—and how to fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get Your Free Audit
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

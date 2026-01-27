import { Metadata } from "next";
import Timeline from "@/components/sections/Timeline";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How It Works - Service Growth AI",
  description:
    "From signed to live in 14 days. We handle everything—total time investment from you: about 2 hours.",
};

const timelineSteps = [
  {
    badge: "30 minutes",
    badgeVariant: "primary" as const,
    title: "Step 1: Discovery Call",
    description:
      "We learn about your business, goals, and current setup. We identify where you're losing leads. We show you exactly what we'd build. If it's a fit, we move forward. If not, no hard feelings.",
  },
  {
    badge: "Day 1-3",
    badgeVariant: "default" as const,
    title: "Step 2: Onboarding",
    description:
      "You fill out a simple questionnaire (30 minutes). We get access to your systems (CRM, phone, website). We map out your customer journey and automation flows.",
  },
  {
    badge: "Day 4-10",
    badgeVariant: "default" as const,
    title: "Step 3: Build & Configure",
    description:
      "We build your AI systems. We write your follow-up sequences. We configure your voice bot. We integrate everything with your existing tools. You don't have to do anything.",
  },
  {
    badge: "Day 11-13",
    badgeVariant: "default" as const,
    title: "Step 4: Test & Train",
    description:
      "We test every flow end-to-end. We train your team (if needed). We make adjustments based on your feedback. Everything is dialed in before we flip the switch.",
  },
  {
    badge: "Day 14",
    badgeVariant: "primary" as const,
    title: "Step 5: Go Live",
    description:
      "We flip the switch. Your AI starts working 24/7. You start booking more jobs. Leads get instant responses. Follow-ups happen automatically. Your phone stops being a liability.",
  },
  {
    badge: "Ongoing",
    badgeVariant: "default" as const,
    title: "Step 6: Optimize & Scale",
    description:
      "We monitor performance weekly. We optimize based on data. We add new automations as you grow. Strategy calls keep you on track. You focus on the work—we handle the systems.",
  },
];

const whatYouGet = [
  { stat: "24/7", title: "Lead Response System", description: "AI captures, qualifies, and follows up with every lead—even at 2am on a Sunday." },
  { stat: "<60s", title: "Response Time", description: "Every lead gets a response in under 60 seconds. Faster than any human could do it." },
  { stat: "0", title: "Missed Calls", description: "Voice bot answers every call. Missed call text-back catches the rest. Nothing falls through." },
];

const yourTasks = [
  { time: "30 min", task: "Discovery call" },
  { time: "30 min", task: "Fill out onboarding questionnaire" },
  { time: "30 min", task: "Review & approve the build" },
  { time: "30 min", task: "Team training (optional)" },
];

const ourTasks = [
  "Map your customer journey",
  "Build AI lead capture & qualification",
  "Configure voice bot & call handling",
  "Write email/SMS sequences",
  "Set up review automation",
  "Integrate with your CRM",
  "Test everything end-to-end",
  "Ongoing optimization & support",
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-16 pb-20 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl leading-[0.9] text-white mb-6 font-serif">
          From Signed to Live
          <br />
          <span className="italic text-primary">in 14 Days.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-sans">
          We handle everything. You fill out a questionnaire, we build your
          systems, and you&apos;re live in two weeks. Total time investment from
          you: about 2 hours.
        </p>
      </header>

      {/* Timeline */}
      <section className="px-6 max-w-5xl mx-auto pb-24">
        <Timeline steps={timelineSteps} />
      </section>

      {/* What Gets Built */}
      <section className="bg-secondary py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-12 text-center font-serif">
            What Gets Built For You
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whatYouGet.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-[4px] p-6"
              >
                <div className="text-3xl mb-4">{item.stat}</div>
                <h3 className="text-lg text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Investment */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-12 text-center font-serif">
            Your Time Investment
          </h2>
          <div className="bg-muted border border-white/10 rounded-[4px] overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 border-b md:border-b-0 md:border-r border-white/10">
                <h3 className="text-xl text-white mb-6">What You Do</h3>
                <ul className="space-y-4">
                  {yourTasks.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <span className="text-primary font-mono text-sm">
                        {item.time}
                      </span>
                      <span>{item.task}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-white/50 text-sm">
                    Total time from you
                  </div>
                  <div className="text-3xl text-primary font-bold">~2 hours</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl text-white mb-6">What We Do</h3>
                <ul className="space-y-4">
                  {ourTasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <svg
                        className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-6 font-serif">
            Ready to Get Started?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Book your free 30-minute discovery call. We&apos;ll map out exactly
            what we&apos;d build for you—and you can decide if it makes sense.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book Your Discovery Call
          </Button>
          <p className="text-white/40 text-sm mt-4">
            No commitment. No hard sell. Just clarity.
          </p>
        </div>
      </section>
    </>
  );
}

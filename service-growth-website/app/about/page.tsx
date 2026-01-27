import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About - Service Growth AI",
  description:
    "We scaled our own service business from $0 to $100k/month in 90 days using these exact systems.",
};

const whyDifferent = [
  {
    number: "1",
    title: "We're Not AI Grifters",
    description:
      "The market is flooded with \"experts\" who took a 2-hour course and resell generic tools. We actually built and used these systems to scale our own business. Big difference.",
  },
  {
    number: "2",
    title: "We Know Your World",
    description:
      "We've been on the roof when the phone rings. We know what it's like to lose a job because you couldn't call back fast enough. We built this from lived experience.",
  },
  {
    number: "3",
    title: "Proven Before Sold",
    description:
      "We don't offer anything we haven't tested on ourselves first. Every system, every automation, every workflow—battle-tested in our own business.",
  },
];

const philosophy = [
  {
    title: "Technology Should Make Life Easier",
    description:
      "Not more complicated. If you need a PhD to use it, we failed. Every system we build is designed for busy operators who don't have time to learn new software.",
  },
  {
    title: "If It Doesn't Book Jobs, It Doesn't Matter",
    description:
      "We don't care about vanity metrics. We care about one thing: did you book more jobs this month than last month? Everything we do ties back to revenue.",
  },
  {
    title: "Educate First, Sell Second",
    description:
      "We'll tell you exactly where you're losing leads before you ever pay us a dime. If we can't help, we'll say so. No hard sell, no BS.",
  },
  {
    title: "We Win When You Win",
    description:
      "That's why we guarantee results. If you don't see more booked jobs in 60 days, we work for free until you do. Our success is tied to yours.",
  },
];

const forYou = [
  "You're doing $30k+/month and ready to scale",
  "You're losing leads to missed calls and slow follow-up",
  "You want to grow without hiring more people",
  "You're in Home Services, Medical, or Construction",
  "You value results over promises",
];

const notForYou = [
  "You're just getting started and need leads first",
  "You're looking for a magic button (this takes work)",
  "You're not willing to invest in growth",
  "You want the cheapest option (you get what you pay for)",
  "You're not ready to change how you operate",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-16 pb-20 px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs font-medium mb-8 text-white/80">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Our Story
        </div>
        <h1 className="text-5xl md:text-7xl leading-[0.9] text-white mb-8 font-serif">
          We Built This
          <br />
          <span className="italic text-white/50">For Ourselves First.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed font-sans">
          We&apos;re not AI consultants who watched a YouTube course. We&apos;re
          operators who scaled our own service business from $0 to $100k/month
          in 90 days using these exact systems.
        </p>
      </header>

      {/* Origin Story */}
      <section className="px-6 max-w-5xl mx-auto pb-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl text-white mb-6 font-serif">
              The Origin Story
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                We started running a service business. Same problems you have:
                missed calls, no time to follow up, leads slipping through the
                cracks.
              </p>
              <p>
                Every weekend, we&apos;d come back Monday to find out we&apos;d
                lost a dozen jobs because nobody could answer the phone. We were
                working harder, not smarter.
              </p>
              <p>
                So we built our own solution. AI that answers calls. Automation
                that follows up. Systems that book appointments while we sleep.
              </p>
              <p>
                <strong className="text-white">
                  The result? $0 to $100k/month in 90 days.
                </strong>
              </p>
              <p>
                Then other business owners started asking: &quot;How are you
                doing this?&quot; That&apos;s when we realized we weren&apos;t
                just building tools for ourselves—we were building the future of
                service businesses.
              </p>
            </div>
          </div>
          <div className="bg-secondary border border-white/10 rounded-[4px] p-8">
            <div className="text-6xl md:text-8xl font-serif text-primary mb-4">
              $0
            </div>
            <div className="text-white/50 text-sm mb-2">to</div>
            <div className="text-6xl md:text-8xl font-serif text-white mb-4">
              $100k
            </div>
            <div className="text-white/50 text-sm mb-6">per month in</div>
            <div className="text-6xl md:text-8xl font-serif text-primary">
              90
            </div>
            <div className="text-white/50 text-sm">days</div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="bg-secondary py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-12 font-serif">
            Why We&apos;re Different
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyDifferent.map((item) => (
              <div key={item.number} className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">
                  <span className="text-primary">{item.number}</span>
                </div>
                <h3 className="text-xl text-white">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-12 font-serif">
            Our Philosophy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {philosophy.map((item, i) => (
              <div
                key={i}
                className="bg-muted border border-white/5 rounded-[4px] p-8"
              >
                <h3 className="text-xl text-white mb-4">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-neutral-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl text-white mb-8 font-serif">
                This Is For You If...
              </h2>
              <ul className="space-y-4">
                {forYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-1 flex-shrink-0"
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
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl text-white mb-8 font-serif">
                This Is NOT For You If...
              </h2>
              <ul className="space-y-4">
                {notForYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-red-500 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-6 font-serif">
            Ready to See If We&apos;re a Fit?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            15-minute call. No pitch. We&apos;ll tell you exactly where
            you&apos;re losing leads—whether you hire us or not.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book a Call
          </Button>
        </div>
      </section>
    </>
  );
}

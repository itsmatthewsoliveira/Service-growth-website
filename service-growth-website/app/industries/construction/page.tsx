import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title:
    "AI for Construction - Contractors, Remodelers, Builders | Service Growth AI",
  description:
    "Close bigger jobs with 3D renders, photo transformation, and AI lead response. Win premium clients with premium presentation.",
};

const problems = [
  {
    title: "Ugly Job Site Photos",
    description:
      "Your best work looks terrible in iPhone photos. Dark, cluttered, dusty shots don't show craftsmanship. Competitors with professional photos look better—even if their work is worse.",
  },
  {
    title: '"I Can\'t Visualize It"',
    description:
      "Clients struggle to understand blueprints. They can't picture the finished product. So they delay, go with the \"safer\" choice, or pick the cheaper guy because they can't see the difference.",
  },
  {
    title: "Slow Lead Response",
    description:
      "You're on site all day. By the time you call leads back, they've already talked to three other contractors. Speed wins in construction—but you can't be on your phone while working.",
  },
];

const renderingFeatures = [
  "Close 40% more high-ticket projects",
  "Eliminate \"that's not what I expected\" change orders",
  "Justify premium pricing with premium presentation",
];

const photoFeatures = [
  "Stand out on Google, Yelp, and social media",
  "Build a portfolio that attracts premium clients",
  "Stop losing high-end jobs to better-marketed competitors",
];

const stats = [
  { value: "60s", label: "Response Time", note: "vs. 3 days industry average" },
  { value: "24/7", label: "Coverage", note: "Nights, weekends, holidays" },
  { value: "0", label: "Missed Leads", note: "Every inquiry gets handled" },
];

const features = [
  {
    icon: "🏗️",
    title: "3D Rendering",
    description:
      "Photorealistic renders for patios, kitchens, additions, full builds.",
  },
  {
    icon: "✨",
    title: "Photo Transformation",
    description: "Turn job site photos into portfolio-quality images.",
  },
  {
    icon: "🎬",
    title: "Image Animation",
    description: "Make static portfolios come alive for social media.",
  },
  {
    icon: "🤖",
    title: "AI Lead Response",
    description: "60-second response time, 24/7. Never miss a lead.",
  },
  {
    icon: "📧",
    title: "Quote Follow-Up",
    description: "Automatic follow-up sequences on every estimate.",
  },
  {
    icon: "🌐",
    title: "Professional Website",
    description: "Look as established as the big guys. Because you are.",
  },
];

export default function ConstructionPage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-16 pb-20 px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs font-medium mb-8 text-white/80">
          <span className="text-2xl">🏗️</span>
          For Contractors, Remodelers, Builders & Architects
        </div>
        <h1 className="text-5xl md:text-7xl leading-[0.9] text-white mb-8 font-serif">
          Close Bigger Jobs.
          <br />
          <span className="italic text-white/50">Win Premium Clients.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed font-sans mb-10">
          Your work is incredible. Your marketing doesn&apos;t show it. 3D
          renders that sell the vision. Photo transformation that turns job
          sites into portfolios. AI that responds to leads while you&apos;re on
          site.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/contact" variant="primary" size="lg">
            See Your Project in 3D
          </Button>
          <Button href="/pricing" variant="secondary" size="lg">
            View Pricing
          </Button>
        </div>
      </header>

      {/* The Problem */}
      <section className="bg-secondary py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-12 font-serif">
            The Problem with Construction Marketing
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {problems.map((problem, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-xl text-white">{problem.title}</h3>
                  <p className="text-white/60 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-muted border border-white/10 rounded-[4px] p-8 text-center">
              <div className="text-6xl mb-4">📸</div>
              <p className="text-white/70 italic mb-4">
                &ldquo;Our portfolio is costing us premium jobs.&rdquo;
              </p>
              <p className="text-white/50 text-sm">
                — Every contractor with iPhone photos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Rendering Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-primary text-sm font-medium mb-2">
                CLOSE BIGGER DEALS
              </div>
              <h2 className="text-3xl md:text-4xl text-white mb-6 font-serif">
                3D Rendering That Sells the Vision
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Show clients exactly what their project will look
                like—photorealistic 3D renders that eliminate &ldquo;I
                can&apos;t visualize it&rdquo; objections and close deals faster
                at higher prices.
              </p>
              <ul className="space-y-4 mb-8">
                {renderingFeatures.map((feature, i) => (
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
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Get a Sample Render <span>→</span>
              </a>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 border border-white/10 rounded-[4px] p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏡</div>
                <p className="text-white/50 text-sm">Photorealistic 3D Renders</p>
                <p className="text-white/30 text-xs mt-2">
                  Patios • Kitchens • Additions • Full Builds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Transformation Section */}
      <section className="bg-muted py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-secondary border border-white/10 rounded-[4px] p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-neutral-800 rounded-[4px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📷</div>
                    <p className="text-white/30 text-xs">Before</p>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-primary/30 to-primary/10 rounded-[4px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">✨</div>
                    <p className="text-primary text-xs">After</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-primary text-sm font-medium mb-2">
                LOOK BETTER THAN THE COMPETITION
              </div>
              <h2 className="text-3xl md:text-4xl text-white mb-6 font-serif">
                Photo Transformation
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Turn job site photos into portfolio-ready images. AI enhancement
                removes clutter, fixes lighting, and makes your work look as
                good as it actually is.
              </p>
              <ul className="space-y-4 mb-8">
                {photoFeatures.map((feature, i) => (
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
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                See Photo Transformation Demo <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Lead Response */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-primary text-sm font-medium mb-2">
              RESPOND FASTER THAN THE COMPETITION
            </div>
            <h2 className="text-3xl md:text-4xl text-white mb-4 font-serif">
              AI Lead Response
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              While other contractors take 3 days to call back, you respond in
              60 seconds. AI captures, qualifies, and books estimates—even while
              you&apos;re on the job site.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-secondary border border-white/10 rounded-[4px] p-6 text-center"
              >
                <div className="text-4xl text-primary font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white mb-2">{stat.label}</div>
                <p className="text-white/50 text-sm">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-neutral-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-muted border border-white/10 rounded-[4px] p-8 md:p-12 relative">
            <div className="absolute -top-4 -right-4 bg-primary text-black font-bold px-4 py-2 rounded-full text-sm">
              Real Result
            </div>
            <div className="text-primary text-3xl mb-6">★★★★★</div>
            <p className="text-white text-xl md:text-2xl italic mb-8 leading-relaxed font-serif">
              &ldquo;The 3D renders helped us close a $150k backyard remodel.
              The client couldn&apos;t visualize it until we showed them the
              walkthrough. Game changer for high-end projects.&rdquo;
            </p>
            <div>
              <strong className="text-white text-lg block">Sarah Jenkins</strong>
              <span className="text-white/50">Lead Designer, Luxury Scapes</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-12 text-center font-serif">
            Full Visual + Automation Stack
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
            Ready to Win Premium Projects?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Book a free strategy call. We&apos;ll show you how 3D renders and
            better visuals can help you close bigger deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get a Sample 3D Render
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

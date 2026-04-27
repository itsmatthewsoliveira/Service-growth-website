import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Service Business Growth, Automation & Lead Generation",
  description:
    "Real case studies and playbooks from operators running service businesses. Speed-to-lead, AI automation, Facebook ads, and growth systems — the stuff that actually moves revenue.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#FCFFD5] relative">
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#10100F]/10 shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E25312]" />
            <span className="text-[#10100F]/70 text-[11px] md:text-xs font-semibold tracking-wide uppercase">
              Field notes from the operator side
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-[#10100F] leading-[1.02] tracking-tight mb-5">
            The Service Business<br />
            <span className="text-[#E25312]">Growth Blog</span>
          </h1>
          <p className="text-[#10100F]/60 text-base md:text-lg max-w-2xl leading-relaxed">
            No theory. No guru fluff. Real numbers from our own paver, painter, and cleaning companies — and the AI systems we build for other operators.
          </p>
        </div>
      </section>

      <section className="pb-24 z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {posts.length === 0 ? (
            <p className="text-[#10100F]/60 text-base">No posts yet. Check back soon.</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <Link
                  key={post.frontmatter.slug}
                  href={`/blog/${post.frontmatter.slug}`}
                  className="group block p-6 md:p-8 rounded-2xl bg-white border border-[#10100F]/[0.08] shadow-[0_1px_3px_rgba(16, 16, 15,0.04)] hover:shadow-[0_8px_30px_rgba(226, 83, 18,0.12)] hover:-translate-y-0.5 hover:border-[#E25312]/30 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <time className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#10100F]/40">
                      {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    {post.frontmatter.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-[0.1em] font-medium text-[#E25312] bg-[#E25312]/8 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#10100F] mb-2 leading-tight group-hover:text-[#E25312] transition-colors">
                    {post.frontmatter.title}
                  </h2>
                  <p className="text-[#10100F]/60 text-base leading-relaxed mb-4 font-light">
                    {post.frontmatter.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#E25312] font-semibold text-sm">
                    Read the post
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { ArrowLeft, FileCode } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    alternates: { canonical: post.frontmatter.canonical || `/blog/${slug}` },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: post.frontmatter.author ? [post.frontmatter.author] : undefined,
      tags: post.frontmatter.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    datePublished: post.frontmatter.date,
    author: {
      "@type": "Organization",
      name: post.frontmatter.author || "ServiceGrowth AI",
    },
    publisher: {
      "@type": "Organization",
      name: "ServiceGrowth AI",
      logo: {
        "@type": "ImageObject",
        url: "https://servicegrowth.ai/logo-arrow.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.frontmatter.canonical || `https://servicegrowth.ai/blog/${slug}`,
    },
    keywords: post.frontmatter.tags?.join(", "),
  };

  return (
    <div className="min-h-screen bg-[#FCFFD5] relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="relative pt-24 pb-24 md:pt-32 z-10">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[#10100F]/60 hover:text-[#E25312] text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All posts
          </Link>

          <div className="flex items-center gap-2 mb-5">
            <time className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#10100F]/40">
              {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.frontmatter.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-[0.1em] font-medium text-[#E25312] bg-[#E25312]/8 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-[#10100F] leading-[1.05] tracking-tight mb-6">
            {post.frontmatter.title}
          </h1>

          <p className="text-[#10100F]/60 text-lg md:text-xl leading-relaxed font-light mb-10">
            {post.frontmatter.excerpt}
          </p>

          <div className="blog-prose">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Demote markdown h1 → h2 so the page has exactly one h1 (the title rendered above)
                h1: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <div className="mt-12 pt-6 border-t border-[#10100F]/10 flex items-center justify-between text-xs text-[#10100F]/40">
            <a
              href={`/blog/${slug}.md`}
              className="inline-flex items-center gap-1.5 hover:text-[#E25312] transition-colors"
              title="Raw markdown — for AI assistants and machine readers"
            >
              <FileCode className="w-3.5 h-3.5" />
              View raw markdown
            </a>
            <span>Cite this post: servicegrowth.ai/blog/{slug}</span>
          </div>
        </div>
      </article>
    </div>
  );
}

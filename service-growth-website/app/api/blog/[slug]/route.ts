import { NextRequest, NextResponse } from "next/server";
import { getPostBySlug } from "@/lib/blog";

interface Params {
  params: Promise<{ slug: string }>;
}

// Raw markdown endpoint for LLMs / AI assistants.
// Served at /blog/:slug.md via rewrite in next.config.ts.
export async function GET(_req: NextRequest, { params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return new NextResponse("Post not found", { status: 404 });
  }

  return new NextResponse(post.raw, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=3600",
      "X-Robots-Tag": "all",
    },
  });
}

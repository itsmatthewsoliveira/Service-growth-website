import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Raw markdown for LLMs: /blog/foo.md → /api/blog/foo
      { source: "/blog/:slug.md", destination: "/api/blog/:slug" },
      // llms.txt spec: https://llmstxt.org/
      { source: "/llms.txt", destination: "/api/llms-txt" },
    ];
  },
};

export default nextConfig;

import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const SITE = "https://servicegrowth.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/growth-blueprint`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/demo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/packages`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/community`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE}/free-website`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/industries/home-services`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/industries/construction`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/industries/medical`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/services/automation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/services/website`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/services/ads`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/services/content`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  const blogPages: MetadataRoute.Sitemap = getAllPosts().flatMap((post) => [
    {
      url: `${SITE}/blog/${post.frontmatter.slug}`,
      lastModified: new Date(post.frontmatter.date),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${SITE}/blog/${post.frontmatter.slug}.md`,
      lastModified: new Date(post.frontmatter.date),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]);

  return [...staticPages, ...blogPages];
}

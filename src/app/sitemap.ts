import type { MetadataRoute } from "next";
import { getAllBlogPosts, getAllCaseStudies } from "@/lib/mdx";
import { absoluteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, studies] = await Promise.all([getAllBlogPosts(), getAllCaseStudies()]);

  const staticRoutes = [
    "/",
    "/services",
    "/about",
    "/contact",
    "/blog",
    "/case-studies",
    "/stack",
    "/privacy",
    "/terms",
    "/faq",
  ].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes,
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.frontmatter.date),
    })),
    ...studies.map((study) => ({
      url: absoluteUrl(`/case-studies/${study.slug}`),
      lastModified: new Date(study.frontmatter.date),
    })),
  ];
}

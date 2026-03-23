import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllBlogPosts, paginate } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog · Automation & Business Systems · Owned Cloud",
  description: "Automation, private cloud, data sovereignty, and small business systems content written for Calgary operators.",
  path: "/blog",
});

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; tag?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page ?? "1") || 1;
  const selectedTag = params.tag;
  const allPosts = await getAllBlogPosts();
  const filteredPosts = selectedTag
    ? allPosts.filter((post) => (post.frontmatter.tags ?? []).includes(selectedTag))
    : allPosts;
  const pagination = paginate(filteredPosts, page, 6);
  const tags = [...new Set(allPosts.flatMap((post) => post.frontmatter.tags ?? []))];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />
      <section className="hero-shell px-6 pb-16 pt-24 lg:px-12">
        <Container>
          <SectionHeading
            eyebrow="Blog"
            title="Automation notes for Calgary business operators."
            description="Clear writing on automation, data ownership, lead response, and self-hosted systems. No marketing fog."
          />
        </Container>
      </section>

      <Container className="pb-20">
        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/blog"
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              !selectedTag ? "bg-[var(--primary)] text-white" : "bg-[var(--surface-container-low)] text-[var(--primary)]"
            }`}
          >
            All
          </Link>
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                selectedTag === tag ? "bg-[var(--primary)] text-white" : "bg-[var(--surface-container-low)] text-[var(--primary)]"
              }`}
            >
              {tag}
            </Link>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {pagination.items.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          {pagination.page > 1 ? (
            <Link
              href={`/blog?page=${pagination.page - 1}${selectedTag ? `&tag=${encodeURIComponent(selectedTag)}` : ""}`}
              className="btn-secondary"
            >
              Previous
            </Link>
          ) : (
            <span className="btn-secondary cursor-not-allowed opacity-50" aria-disabled="true">
              Previous
            </span>
          )}
          <p className="text-sm text-[var(--text-muted)]">
            Page {pagination.page} of {pagination.totalPages}
          </p>
          {pagination.page < pagination.totalPages ? (
            <Link
              href={`/blog?page=${pagination.page + 1}${selectedTag ? `&tag=${encodeURIComponent(selectedTag)}` : ""}`}
              className="btn-secondary"
            >
              Next
            </Link>
          ) : (
            <span className="btn-secondary cursor-not-allowed opacity-50" aria-disabled="true">
              Next
            </span>
          )}
        </div>
      </Container>
      <SiteFooter />
    </main>
  );
}

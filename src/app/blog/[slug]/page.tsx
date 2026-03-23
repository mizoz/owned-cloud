import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyAuditCta, TocSidebar } from "@/components/PostContent";
import { StructuredData } from "@/components/StructuredData";
import { getAllBlogPosts, getBlogPostBySlug, renderMdx } from "@/lib/mdx";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return {};
  }

  return buildMetadata({
    title: post.frontmatter.seoTitle || `${post.frontmatter.title} | Owned Cloud`,
    description: post.frontmatter.seoDescription || post.frontmatter.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.frontmatter.date,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const { content } = await renderMdx(post.source);
  const allPosts = await getAllBlogPosts();
  const relatedPosts = allPosts
    .filter((entry) => entry.slug !== post.slug)
    .filter((entry) => entry.frontmatter.tags?.some((tag) => post.frontmatter.tags?.includes(tag)))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.frontmatter.title,
          description: post.frontmatter.excerpt,
          datePublished: post.frontmatter.date,
          author: {
            "@type": "Person",
            name: post.frontmatter.author,
          },
          mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
          publisher: {
            "@type": "Organization",
            name: "Owned Cloud",
          },
        }}
      />
      <SiteHeader />
      <Container className="py-16">
        <div className="grid gap-10 xl:grid-cols-[0.2fr_minmax(0,720px)_0.2fr] xl:items-start">
          <TocSidebar headings={post.headings} />

          <article>
            <Link href="/blog" className="eyebrow text-[var(--text-muted)]">
              Back to blog
            </Link>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-[var(--primary)]">
              {post.frontmatter.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
              <span>{new Date(post.frontmatter.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
              <span>•</span>
              <span>{post.frontmatter.author}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {(post.frontmatter.tags ?? []).map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="rounded-full bg-[var(--surface-container-low)] px-3 py-1 text-xs font-semibold text-[var(--primary)]"
                >
                  {tag}
                </Link>
              ))}
            </div>

            <div className="mt-10">{content}</div>

            <div className="mt-14 rounded-xl bg-slate-950 p-8 text-white">
              <p className="eyebrow text-slate-400">Need help implementing this?</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Book your free audit.</h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                Bring the bottleneck. We will tell you whether it belongs in Starter, Core, or Infrastructure.
              </p>
              <Link href="/contact" className="btn-primary mt-6">
                Book Free Audit
              </Link>
            </div>

            {relatedPosts.length ? (
              <div className="mt-14">
                <h2 className="text-3xl font-extrabold tracking-tight text-[var(--primary)]">Related posts</h2>
                <div className="mt-6 grid gap-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="rounded-xl bg-[var(--surface-container-low)] p-5 text-[var(--primary)] shadow-sm"
                    >
                      <p className="font-bold">{related.frontmatter.title}</p>
                      <p className="mt-2 text-sm text-[var(--text-muted)]">{related.frontmatter.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </article>

          <StickyAuditCta />
        </div>
      </Container>
      <SiteFooter />
    </main>
  );
}

import Link from "next/link";
import { BlogFrontmatter, formatDisplayDate } from "@/lib/mdx";

export function BlogCard({ post }: { post: { frontmatter: BlogFrontmatter; slug: string; readingTime: string } }) {
  return (
    <article className="elevate-hover rounded-xl bg-[linear-gradient(180deg,var(--surface-container-lowest),rgba(239,244,255,0.72))] p-8 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
        <span>{formatDisplayDate(post.frontmatter.date)}</span>
        <span>•</span>
        <span>{post.readingTime}</span>
      </div>
      <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[var(--primary)]">
        <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
      </h2>
      <p className="mt-4 leading-7 text-[var(--text-muted)]">{post.frontmatter.excerpt}</p>
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
      <Link href={`/blog/${post.slug}`} className="mt-6 inline-block font-semibold text-[var(--primary-strong)]">
        Read article →
      </Link>
    </article>
  );
}

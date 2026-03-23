import Link from "next/link";
import { CaseStudyFrontmatter } from "@/lib/mdx";

export function CaseStudyCard({
  study,
}: {
  study: { frontmatter: CaseStudyFrontmatter; slug: string };
}) {
  return (
    <article className="rounded-xl bg-[var(--surface-container-lowest)] p-8 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
        <span>{study.frontmatter.industry}</span>
        <span>•</span>
        <span>{study.frontmatter.client}</span>
      </div>
      <div className="mt-5 text-5xl font-black tracking-tight text-[var(--secondary)]">
        {study.frontmatter.keyMetric}
      </div>
      <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--text-muted)]">
        {study.frontmatter.keyMetricLabel}
      </p>
      <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[var(--primary)]">
        <Link href={`/case-studies/${study.slug}`}>{study.frontmatter.title}</Link>
      </h2>
      <p className="mt-4 leading-7 text-[var(--text-muted)]">{study.frontmatter.excerpt}</p>
      <Link href={`/case-studies/${study.slug}`} className="mt-6 inline-block font-semibold text-[var(--primary-strong)]">
        Read case study →
      </Link>
    </article>
  );
}

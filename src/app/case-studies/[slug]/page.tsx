import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StructuredData } from "@/components/StructuredData";
import { getAllCaseStudies, getCaseStudyBySlug, renderMdx } from "@/lib/mdx";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export async function generateStaticParams() {
  const studies = await getAllCaseStudies();
  return studies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) {
    return {};
  }

  return buildMetadata({
    title: `${study.frontmatter.title} | Owned Cloud`,
    description: study.frontmatter.excerpt,
    path: `/case-studies/${study.slug}`,
    type: "article",
    publishedTime: study.frontmatter.date,
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) {
    notFound();
  }

  const { content } = await renderMdx(study.source);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: study.frontmatter.title,
          description: study.frontmatter.excerpt,
          datePublished: study.frontmatter.date,
          mainEntityOfPage: absoluteUrl(`/case-studies/${study.slug}`),
        }}
      />
      <SiteHeader />
      <Container className="py-16">
        <article className="mx-auto max-w-4xl">
          <Link href="/case-studies" className="eyebrow text-[var(--text-muted)]">
            Back to case studies
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            <span>{study.frontmatter.industry}</span>
            <span>•</span>
            <span>{study.frontmatter.client}</span>
            {study.frontmatter.services.map((service) => (
              <span key={service} className="rounded-full bg-[var(--surface-container-low)] px-3 py-1 text-[var(--primary)]">
                {service}
              </span>
            ))}
          </div>

          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-[var(--primary)]">
            {study.frontmatter.title}
          </h1>

          <div className="mt-8 rounded-2xl bg-[var(--surface-container-low)] p-8">
            <p className="text-6xl font-black tracking-tight text-[var(--secondary)]">
              {study.frontmatter.keyMetric}
            </p>
            <p className="mt-2 text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--text-muted)]">
              {study.frontmatter.keyMetricLabel}
            </p>
          </div>

          <div className="mt-10">{content}</div>

          <div className="mt-14 rounded-xl bg-slate-950 p-8 text-white">
            <p className="eyebrow text-slate-400">Facing a similar problem?</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Book your free audit.</h2>
            <p className="mt-4 text-lg text-slate-300">
              We will map the bottleneck, tell you the right first engagement, and avoid a bloated scope.
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Book Free Audit
            </Link>
          </div>
        </article>
      </Container>
      <SiteFooter />
    </main>
  );
}

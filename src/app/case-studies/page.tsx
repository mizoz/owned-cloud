import Link from "next/link";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllCaseStudies } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies · Owned Cloud Calgary",
  description: "Implementation scenarios and delivery summaries for real estate, trades, and clinics using Owned Cloud systems.",
  path: "/case-studies",
});

export default async function CaseStudiesPage({
  searchParams,
}: {
  searchParams: Promise<{ industry?: string }>;
}) {
  const params = await searchParams;
  const selectedIndustry = params.industry;
  const studies = await getAllCaseStudies();
  const industries = [...new Set(studies.map((study) => study.frontmatter.industry))];
  const filtered = selectedIndustry
    ? studies.filter((study) => study.frontmatter.industry === selectedIndustry)
    : studies;

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />
      <section className="hero-shell px-6 pb-16 pt-24 lg:px-12">
        <Container>
          <SectionHeading
            eyebrow="Case Studies"
            title="Work that maps directly to time saved, cost reduced, or response speed improved."
            description="Representative delivery scenarios and implementation summaries that show the kinds of systems Owned Cloud builds."
          />
        </Container>
      </section>

      <Container className="pb-20">
        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/case-studies"
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              !selectedIndustry ? "bg-[var(--primary)] text-white" : "bg-[var(--surface-container-low)] text-[var(--primary)]"
            }`}
          >
            All
          </Link>
          {industries.map((industry) => (
            <Link
              key={industry}
              href={`/case-studies?industry=${encodeURIComponent(industry)}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                selectedIndustry === industry
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--surface-container-low)] text-[var(--primary)]"
              }`}
            >
              {industry}
            </Link>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {filtered.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Container>
      <SiteFooter />
    </main>
  );
}

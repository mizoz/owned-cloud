import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "About | Owned Cloud Calgary",
  description:
    "Ahmed Mahmoud leads Owned Cloud as a Calgary-based automation and business systems practice for teams that need less manual drag and more operational clarity.",
  path: "/about",
});

const operatingPrinciples = [
  {
    title: "Fix the bottleneck first.",
    description:
      "The work starts with the process that is already costing time, speed, or trust. No padded discovery phase before anything useful happens.",
  },
  {
    title: "Leave the business with a system.",
    description:
      "Every engagement should end with documentation, owner clarity, and a workflow the team can actually keep using after handoff.",
  },
  {
    title: "Use deeper engineering only when it helps.",
    description:
      "Owned Cloud stays customer-facing. When the scope needs custom software, infrastructure, or secure internal tooling, ZalaStack supports the backend work behind the scenes.",
  },
];

const brandArchitecture = [
  {
    title: "Owned Cloud",
    href: "/",
    badge: "Automation / systems",
    description: "The customer-facing brand for workflow design, lead systems, reporting, and operational cleanup.",
    internal: true,
  },
  {
    title: siteConfig.parentBrandName,
    href: siteConfig.parentBrandUrl,
    badge: "Parent / backend",
    description: "The heavier software, infrastructure, and technical delivery layer that supports deeper builds.",
  },
  {
    title: siteConfig.frameBrandName,
    href: siteConfig.frameBrandUrl,
    badge: "Creative counterpart",
    description: "A selective path for projects that also need stronger positioning, presentation, or launch polish.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />
      <section className="hero-shell px-6 pb-16 pt-24 lg:px-12">
        <Container className="max-w-7xl">
          <SectionHeading
            eyebrow="About Owned Cloud"
            title="Ahmed Mahmoud leads Owned Cloud with an operator's mindset."
            description="Owned Cloud is a Calgary-based automation and business systems practice built for teams that need real workflow fixes, cleaner reporting, and stronger follow-through."
          />
        </Container>
      </section>

      <Container className="pb-16 pt-8 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-4 rounded-[2rem] bg-[rgba(0,75,135,0.12)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--outline)] bg-[var(--surface-container-lowest)] shadow-[var(--shadow-card)]">
              <Image
                src="/images/ahmed-mahmoud-headshot.png"
                alt="Ahmed Mahmoud"
                width={960}
                height={1440}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="pill-label">
              <span className="material-symbols-outlined text-sm">person</span>
              Founder
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-[var(--primary)] lg:text-6xl">
              Practical automation, sharper systems, and less theatre.
            </h2>
            <p className="text-lg leading-8 text-[var(--text-muted)]">
              Ahmed is a Calgary-based founder and operator building systems for businesses that have outgrown manual
              follow-up, disconnected tools, and reporting nobody trusts. The work is meant to be useful before it is
              impressive.
            </p>
            <p className="text-lg leading-8 text-[var(--text-muted)]">
              Owned Cloud is deliberately customer-facing. The promise is automation, workflow design, and operating
              systems that make the business run better. If the build needs deeper backend work, client portals, or
              private infrastructure, that is supported through {siteConfig.parentBrandName} without changing what Owned
              Cloud is for.
            </p>
            <p className="text-lg leading-8 text-[var(--text-muted)]">
              The approach is simple: start with the costly bottleneck, fix it quickly, document the system, and only
              expand when the first result earns the next step.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/contact" className="btn-primary">
                Book Your Free Audit
              </Link>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
              <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {operatingPrinciples.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] bg-[var(--surface-container-lowest)] p-8 shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">{item.title}</h3>
              <p className="mt-4 leading-7 text-[var(--text-muted)]">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[1.75rem] border border-[var(--outline)] bg-[var(--surface-container-low)] p-8 lg:p-10">
          <p className="eyebrow text-[var(--text-muted)]">How the brands fit together</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--primary)]">
            One operator, three clear lanes.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
            Owned Cloud should stay focused on automation and business systems. The related brands exist to support
            adjacent work without muddying that story.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {brandArchitecture.map((brand) =>
              brand.internal ? (
                <Link
                  key={brand.title}
                  href={brand.href}
                  className="rounded-[1.5rem] border border-[var(--outline)] bg-[var(--surface-container-lowest)] p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
                >
                  <p className="eyebrow text-[var(--text-muted)]">{brand.badge}</p>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[var(--primary)]">{brand.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--text-muted)]">{brand.description}</p>
                </Link>
              ) : (
                <a
                  key={brand.title}
                  href={brand.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.5rem] border border-[var(--outline)] bg-[var(--surface-container-lowest)] p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
                >
                  <p className="eyebrow text-[var(--text-muted)]">{brand.badge}</p>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[var(--primary)]">{brand.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--text-muted)]">{brand.description}</p>
                </a>
              ),
            )}
          </div>
        </div>
      </Container>

      <CallToAction />
      <SiteFooter />
    </main>
  );
}

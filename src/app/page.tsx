import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { Container } from "@/components/Container";
import { RoiEstimator } from "@/components/RoiEstimator";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StructuredData } from "@/components/StructuredData";
import { TrackedLink } from "@/components/TrackedLink";
import { getAllCaseStudies } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";
import { serviceAnchors, siteConfig } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Owned Cloud | Calgary Automation & Business Systems",
  description:
    "Owned Cloud helps Calgary service businesses clean up lead handling, internal workflows, reporting, and the customer-facing systems that break once the business gets busy.",
  path: "/",
  keywords: [
    "Calgary business automation",
    "Calgary business systems",
    "lead follow-up automation",
    "Calgary workflow design",
  ],
});

const heroSignals = [
  {
    label: "Founder-led delivery",
    value: "Ahmed Mahmoud",
  },
  {
    label: "Response window",
    value: "1 business day",
  },
  {
    label: "Built in Calgary",
    value: "Local accountability",
  },
];

const pillars = [
  {
    icon: "settings_input_component",
    iconTone: "text-[var(--primary)] bg-[rgba(0,52,97,0.05)]",
    title: "Workflow Architecture",
    body: "We turn repeat admin, messy handoffs, and disconnected tools into a workflow your team can actually follow.",
    href: serviceAnchors[0].href,
  },
  {
    icon: "bolt",
    iconTone: "text-[var(--secondary)] bg-[rgba(0,108,73,0.08)]",
    title: "Lead Response Systems",
    body: "We help leads get routed, acknowledged, and followed up while they are still hot instead of hours later.",
    href: serviceAnchors[1].href,
  },
  {
    icon: "monitoring",
    iconTone: "text-[var(--primary)] bg-[rgba(0,52,97,0.05)]",
    title: "Reporting + Portals",
    body: "We build shared visibility for owners and teams so the business stops running on screenshots and memory.",
    href: serviceAnchors[2].href,
  },
];

const bestFitPoints = [
  "Service businesses with missed follow-up or inbox chaos",
  "Operators who need cleaner intake, reminders, and handoffs",
  "Teams that want reporting they can trust without buying another bloated platform",
];

const engagementSteps = [
  {
    number: "01",
    title: "Audit the bottleneck",
    body: "We identify the handoff, lead-response gap, or reporting mess that is causing the most drag right now.",
  },
  {
    number: "02",
    title: "Build the first fix",
    body: "We scope one practical deliverable, wire the tools that matter, and test the workflow before your team depends on it.",
  },
  {
    number: "03",
    title: "Document and hand off",
    body: "You get a working system, a clear owner, and the next-step plan only if the first build earns it.",
  },
];

const backendCapabilities = [
  "Client portals and internal dashboards",
  "Custom integrations and data pipelines",
  "Private infrastructure when control matters",
];

const relatedBrands = [
  {
    title: siteConfig.parentBrandName,
    href: siteConfig.parentBrandUrl,
    badge: "Parent brand",
    description: "The backend and software layer behind heavier automation, infrastructure, and custom build work.",
  },
  {
    title: siteConfig.frameBrandName,
    href: siteConfig.frameBrandUrl,
    badge: "Creative counterpart",
    description: "A selective partner path when a project also needs sharper presentation, positioning, or launch polish.",
  },
];

const founderHighlights = [
  "Founder-led delivery instead of account-manager handoffs",
  "Grounded in Calgary service-business realities",
  "Backed by ZalaStack when the build gets technically heavier",
];

const trustSignals = [
  {
    icon: "description",
    title: "Documented Delivery",
    body: "Each engagement ends with implementation notes, handoff guidance, and a workflow your team can actually keep using.",
  },
  {
    icon: "schedule",
    title: "Fast Response",
    body: "You get a clear reply within one business day and a next step, not a vague discovery sequence.",
  },
  {
    icon: "verified_user",
    title: "Serious Backend Depth",
    body: "Owned Cloud stays customer-facing, with ZalaStack available behind the scenes for custom software or infrastructure complexity.",
  },
];

export default async function Home() {
  const caseStudies = await getAllCaseStudies();
  const featuredStudy = caseStudies[0];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${siteConfig.url}#localbusiness`,
          name: "Owned Cloud",
          legalName: siteConfig.legalName,
          description: "Calgary-based business automation and systems consultancy",
          url: siteConfig.url,
          email: siteConfig.email,
          telephone: siteConfig.phone || undefined,
          sameAs: siteConfig.sameAs.length ? siteConfig.sameAs : undefined,
          areaServed: siteConfig.serviceRegion,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Calgary",
            addressRegion: "AB",
            addressCountry: "CA",
          },
          priceRange: siteConfig.priceRange,
        }}
      />
      <SiteHeader />

      <section className="hero-shell overflow-hidden px-6 pb-20 pt-24 lg:px-12">
        <Container className="grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <div className="pill-label">
              <span className="material-symbols-outlined text-sm">bolt</span>
              Customer-Facing Automation
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight text-[var(--primary)] lg:text-7xl">
                Automation and business systems for teams that need less manual drag and better follow-through.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
                Owned Cloud helps Calgary service businesses clean up lead handling, internal handoffs, reporting, and
                the operating workflows that start to break once the business gets busy.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <TrackedLink
                href="/contact"
                className="btn-primary gap-2"
                eventName="cta_click"
                eventProps={{ placement: "hero_primary", page: "home" }}
              >
                Book Your Free Audit
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </TrackedLink>
              <TrackedLink
                href="/services"
                className="btn-secondary"
                eventName="cta_click"
                eventProps={{ placement: "hero_secondary", page: "home" }}
              >
                Review Services
              </TrackedLink>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {heroSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-2xl border border-[var(--outline)] bg-white/75 p-5 shadow-[var(--shadow-card)] backdrop-blur"
                >
                  <p className="eyebrow text-[var(--text-muted)]">{signal.label}</p>
                  <p className="mt-3 text-lg font-extrabold tracking-tight text-[var(--primary)]">{signal.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="rounded-[1.5rem] border border-[var(--outline)] bg-white/85 p-3 shadow-[var(--shadow-card)] backdrop-blur">
              <RoiEstimator />
            </div>
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[rgba(0,108,73,0.1)] blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-[rgba(0,52,97,0.1)] blur-3xl" />
          </div>
        </Container>
      </section>

      <section className="section-muted px-6 py-24 lg:px-12">
        <Container className="max-w-7xl">
          <div className="mb-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-[var(--primary)]">Where Owned Cloud helps first</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
                We usually start where the business is leaking time, speed, or trust: broken handoffs, slow response,
                messy admin, or reporting nobody believes.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--outline)] bg-[var(--surface-container-lowest)] p-7 shadow-[var(--shadow-card)]">
              <p className="eyebrow text-[var(--text-muted)]">Best fit</p>
              <ul className="mt-5 space-y-4">
                {bestFitPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-7 text-[var(--text-muted)]">
                    <span className="material-symbols-outlined mt-1 text-base text-[var(--secondary)]">check_circle</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="elevate-hover rounded-[1.5rem] bg-[var(--surface-container-lowest)] p-8 shadow-[var(--shadow-card)]"
              >
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${pillar.iconTone}`}>
                  <span className="material-symbols-outlined">{pillar.icon}</span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--primary)]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{pillar.body}</p>
                <Link
                  href={pillar.href}
                  className="mt-6 flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[var(--secondary)]"
                >
                  Learn more
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="px-6 py-24 lg:px-12">
        <Container className="grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[1.75rem] bg-slate-950 p-8 text-white shadow-[0_28px_70px_rgba(15,23,42,0.22)] lg:p-10">
            <p className="eyebrow text-emerald-300">How work starts</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white">
              Clear first scope. Fast working result. Then expand only if it earns it.
            </h2>
            <div className="mt-10 space-y-8">
              {engagementSteps.map((step) => (
                <div key={step.number} className="grid gap-4 border-t border-slate-800 pt-6 sm:grid-cols-[auto_1fr]">
                  <div className="text-3xl font-black tracking-tight text-emerald-300">{step.number}</div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">{step.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--outline)] bg-[var(--surface-container-lowest)] p-8 shadow-[var(--shadow-card)] lg:p-10">
            <p className="eyebrow text-[var(--text-muted)]">Backend credibility</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--primary)]">
              Automation first. ZalaStack behind the heavier lift.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--text-muted)]">
              Owned Cloud stays customer-facing and operational. When the project needs custom software, secure internal
              tooling, data pipelines, or private infrastructure, the implementation draws on {siteConfig.parentBrandName} as the
              backend delivery layer.
            </p>

            <ul className="mt-8 space-y-4">
              {backendCapabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-3 text-sm leading-7 text-[var(--text-muted)]">
                  <span className="material-symbols-outlined mt-1 text-base text-[var(--secondary)]">check_circle</span>
                  <span>{capability}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {relatedBrands.map((brand) => (
                <a
                  key={brand.title}
                  href={brand.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-[var(--outline)] bg-[var(--surface-container-low)] p-5 transition-transform hover:-translate-y-0.5"
                >
                  <p className="eyebrow text-[var(--text-muted)]">{brand.badge}</p>
                  <h3 className="mt-3 text-xl font-extrabold tracking-tight text-[var(--primary)]">{brand.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{brand.description}</p>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-muted px-6 py-24 lg:px-12">
        <Container className="grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-4 rounded-[2rem] bg-[rgba(0,75,135,0.12)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--outline)] bg-[var(--surface-container-lowest)] shadow-[var(--shadow-card)]">
              <Image
                src="/images/ahmed-mahmoud-headshot.png"
                alt="Ahmed Mahmoud"
                width={960}
                height={1440}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="pill-label">
              <span className="material-symbols-outlined text-sm">person</span>
              Founder / Calgary
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-[var(--primary)] lg:text-6xl">
              Ahmed Mahmoud builds systems with an operator&apos;s eye.
            </h2>
            <p className="text-lg leading-8 text-[var(--text-muted)]">
              Owned Cloud exists for businesses that need a practical automation partner, not another vague
              transformation deck. Ahmed leads delivery personally, starting with the broken handoff, missed follow-up,
              or reporting gap that is actually costing the business now.
            </p>
            <p className="text-lg leading-8 text-[var(--text-muted)]">
              The brand stays focused on customer-facing automation and business systems. Deeper backend work is
              supported through {siteConfig.parentBrandName} when the scope calls for it, without turning Owned Cloud into a generic
              founder homepage.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {founderHighlights.map((item) => (
                <div key={item} className="rounded-2xl bg-[var(--surface-container-lowest)] p-5 shadow-[var(--shadow-card)]">
                  <p className="text-sm leading-7 text-[var(--text-muted)]">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/about" className="btn-secondary">
                Read the About
              </Link>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="px-6 pb-20 lg:px-12">
        <Container className="max-w-7xl rounded-[1.75rem] border border-[var(--outline)] bg-[var(--surface-container-lowest)] p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="eyebrow text-[var(--text-muted)]">Why teams trust the build</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--primary)] lg:text-4xl">
              Built for handoff, clarity, and long-term use.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {trustSignals.map((item) => (
              <article key={item.title} className="elevate-hover rounded-2xl bg-[var(--surface-container-low)] p-6">
                <span className="material-symbols-outlined text-2xl text-[var(--secondary)]">{item.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-[var(--primary)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {featuredStudy ? (
        <section className="px-6 pb-20 lg:px-12">
          <Container className="grid gap-8 rounded-[1.75rem] bg-[var(--surface-container-low)] p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow text-[var(--text-muted)]">Featured case study</p>
              <p className="mt-4 text-5xl font-black tracking-tight text-[var(--secondary)]">
                {featuredStudy.frontmatter.keyMetric}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                {featuredStudy.frontmatter.keyMetricLabel}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[var(--primary)]">
                {featuredStudy.frontmatter.title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
                {featuredStudy.frontmatter.excerpt}
              </p>
              <Link
                href={`/case-studies/${featuredStudy.slug}`}
                className="mt-6 inline-block font-semibold text-[var(--primary-strong)]"
              >
                Read the full case study
              </Link>
            </div>
          </Container>
        </section>
      ) : null}

      <CallToAction />
      <SiteFooter />
    </main>
  );
}

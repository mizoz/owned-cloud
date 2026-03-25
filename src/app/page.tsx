import Link from "next/link";
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
  title: "Owned Cloud · Calgary Business Automation & Systems",
  description:
    "We help Calgary businesses reduce manual work, improve follow-up, and build systems they can actually control.",
  path: "/",
  keywords: [
    "Calgary business automation",
    "private cloud Calgary",
    "data sovereignty Alberta",
    "lead follow-up automation",
  ],
});

const trustIndustries = [
  { icon: "apartment", label: "Real Estate" },
  { icon: "construction", label: "Trades" },
  { icon: "medical_services", label: "Clinics" },
  { icon: "briefcase", label: "Professional Services" },
];

const pillars = [
  {
    icon: "settings_input_component",
    iconTone: "text-[var(--primary)] bg-[rgba(0,52,97,0.05)]",
    title: "Workflow Architecture",
    body: "We turn messy repeat work into a clear process so your team stops relying on memory, inboxes, and copy-paste.",
    href: serviceAnchors[0].href,
  },
  {
    icon: "psychology",
    iconTone: "text-[var(--secondary)] bg-[rgba(0,108,73,0.05)]",
    title: "Lead Response Systems",
    body: "We help you reply faster, route leads properly, and stop good opportunities from going cold while the team is busy.",
    href: serviceAnchors[1].href,
  },
  {
    icon: "hub",
    iconTone: "text-[var(--primary)] bg-[rgba(0,52,97,0.05)]",
    title: "Custom Business Intelligence",
    body: "We build one place to see the numbers that matter without chasing screenshots, exports, and half-updated spreadsheets.",
    href: serviceAnchors[2].href,
  },
];

const sovereigntyPoints = [
  "End-to-end encryption",
  "Zero-knowledge storage",
  "Local private nodes",
];

const trustSignals = [
  {
    icon: "verified",
    title: "Documented Delivery",
    body: "Every engagement includes a scope document, implementation record, and handoff notes.",
  },
  {
    icon: "schedule",
    title: "Fast Response",
    body: "You get a response within one business day and a clear next action, not generic follow-up.",
  },
  {
    icon: "policy",
    title: "Compliance Focused",
    body: "Privacy, access, and data location are considered from the start instead of being bolted on later.",
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

      <section className="hero-shell overflow-hidden px-6 pb-24 pt-24 lg:px-12">
        <Container className="grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <div className="pill-label">
              <span className="material-symbols-outlined text-sm">bolt</span>
              Calgary Business Systems
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight text-[var(--primary)] lg:text-7xl">
                We help businesses run with less manual work and better systems.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
                If leads are being missed, admin work is repeated, or your team is juggling too many tools, we fix the
                handoffs behind the problem. That can mean automation, reporting, client portals, or infrastructure you
                control when the business has outgrown rented systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <TrackedLink
                href="/contact"
                className="btn-primary gap-2"
                eventName="cta_click"
                eventProps={{ placement: "hero_primary", page: "home" }}
              >
                Book Your Free 15-Minute Audit
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </TrackedLink>
              <TrackedLink
                href="/stack"
                className="btn-secondary"
                eventName="cta_click"
                eventProps={{ placement: "hero_secondary", page: "home" }}
              >
                See How It Works
              </TrackedLink>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <RoiEstimator />
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[rgba(0,108,73,0.1)] blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-[rgba(0,52,97,0.1)] blur-3xl" />
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--outline)] bg-white/70 py-6">
        <Container className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            Trusted by Calgary businesses in real estate, trades, clinics, and professional services
          </p>
          <div className="flex flex-wrap gap-4">
            {trustIndustries.map((item) => (
              <div key={item.label} className="flex items-center gap-2 rounded-full bg-[var(--surface-container-low)] px-4 py-2 text-sm text-[var(--primary)]">
                <span className="material-symbols-outlined text-base">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-muted py-24">
        <Container className="max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-[var(--primary)]">
              Where we help first
            </h2>
            <p className="mt-4 text-lg text-[var(--text-muted)]">
              We fix broken handoffs, slow follow-up, weak reporting, and the operating friction behind those issues.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="elevate-hover rounded-xl bg-[var(--surface-container-lowest)] p-8"
              >
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${pillar.iconTone}`}>
                  <span className="material-symbols-outlined">{pillar.icon}</span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--primary)]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{pillar.body}</p>
                <Link href={pillar.href} className="mt-6 flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[var(--secondary)]">
                  Learn more
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="overflow-hidden py-24">
        <Container className="grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 aspect-square rounded-[1.25rem] bg-[var(--primary)] p-12 text-white">
              <div className="mb-8">
                <span className="material-symbols-outlined text-6xl text-[var(--secondary-soft)]">
                  verified_user
                </span>
              </div>
              <h3 className="text-4xl font-extrabold leading-tight tracking-tight">
                Your Intelligence.
                <br />
                Your Cloud.
              </h3>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-300">
                When data matters, the architecture matters too. We build private environments where your operating
                data stays visible, portable, and under your control.
              </p>
              <ul className="mt-8 space-y-4">
                {sovereigntyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em]"
                  >
                    <span className="material-symbols-outlined text-[var(--secondary-soft)]">
                      check_circle
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute inset-0 scale-110 rounded-[1.25rem] bg-[rgba(0,52,97,0.18)] blur-3xl" />
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <h2 className="text-4xl font-extrabold tracking-tight text-[var(--primary)] lg:text-6xl">
              Keep more control over your systems and your data.
            </h2>
            <p className="text-lg leading-relaxed text-[var(--text-muted)]">
              When it makes sense, we build on infrastructure you control instead of trapping the business inside one
              vendor's pricing model, product roadmap, or data rules. That means more clarity, more portability, and
              fewer surprises later.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-5xl font-black text-[var(--secondary)]">100%</p>
                <p className="mt-1 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  More Control
                </p>
              </div>
              <div>
                <p className="text-5xl font-black text-[var(--secondary)]">0</p>
                <p className="mt-1 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  Forced Lock-In
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="px-6 pb-20 lg:px-12">
        <Container className="max-w-7xl rounded-2xl border border-[var(--outline)] bg-[var(--surface-container-lowest)] p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="eyebrow text-[var(--text-muted)]">Trust Signals</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--primary)] lg:text-4xl">
              Built for trust, handoff, and long-term use.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {trustSignals.map((item) => (
              <article key={item.title} className="elevate-hover rounded-xl bg-[var(--surface-container-low)] p-6">
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
          <Container className="grid gap-8 rounded-2xl bg-[var(--surface-container-low)] p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
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
              <Link href={`/case-studies/${featuredStudy.slug}`} className="mt-6 inline-block font-semibold text-[var(--primary-strong)]">
                Read the full case study →
              </Link>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="relative overflow-hidden bg-slate-900 py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(108,248,187,0.08),_transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.72),rgba(15,23,42,0.96))]" />
        <Container className="relative z-10 max-w-7xl text-center">
          <div className="pill-label bg-emerald-500 text-white">
            <span className="material-symbols-outlined text-sm">location_on</span>
            Calgary-Based Engineering
          </div>

          <h2 className="mt-8 text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            Modern systems work,
            <br />
            local accountability.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300">
            We work with Calgary and Alberta businesses that want a practical partner, not another software pitch.
            We also work well with agencies, consultants, and referral partners who need a technical operator they can trust.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-12 md:flex-row">
            <div className="text-left">
              <p className="text-5xl font-black text-emerald-400">1 day</p>
              <p className="mt-2 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                Typical Response Time
              </p>
            </div>
            <div className="hidden h-16 w-px bg-slate-700 md:block" />
            <div className="text-left">
              <p className="text-5xl font-black text-emerald-400">Calgary</p>
              <p className="mt-2 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                Focused Delivery Region
              </p>
            </div>
          </div>

          <div className="mt-16">
            <TrackedLink
              href="/contact"
              className="inline-flex rounded-md bg-[var(--secondary)] px-10 py-5 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-white transition-all hover:brightness-110"
              eventName="cta_click"
              eventProps={{ placement: "home_bottom_banner", page: "home" }}
            >
              Book Your Free 15-Minute Audit
            </TrackedLink>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}

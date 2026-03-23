import { CallToAction } from "@/components/CallToAction";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const serviceTiers = [
  {
    name: "Starter",
    price: "$800",
    summary: "A bulletproof entry package to fix follow-up and prove value quickly.",
    features: [
      "Lead Follow-Up Automation Package",
      "One intake workflow mapped end to end",
      "CRM or inbox integration",
      "Owner notification flow",
      "Launch support and handoff",
    ],
  },
  {
    name: "Core Systems",
    price: "$2,500-$5,000",
    summary: "For businesses ready to clean up operations across booking, intake, and follow-up.",
    features: [
      "Multi-step automation design",
      "Scheduling, reminders, and internal workflows",
      "Reporting dashboards",
      "Team training and process documentation",
      "Scoped support after launch",
    ],
    featured: true,
  },
  {
    name: "Infrastructure",
    price: "Custom",
    summary: "For teams that need owned infrastructure, secure hosting, portals, or deeper integration work.",
    features: [
      "Private infrastructure planning",
      "Custom client portals and dashboards",
      "Security and data-location review",
      "Cloudflare, Supabase, and automation stack integration",
      "Long-term technical roadmap",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />
      <section className="hero-shell px-6 pb-16 pt-24 lg:px-12">
        <Container className="max-w-7xl">
          <SectionHeading
            eyebrow="Automation Packages"
            title="Three ways to remove operational drag."
            description="Start with the fixed-scope automation engine, then expand into deeper systems only when the first engagement proves itself."
          />
        </Container>
      </section>

      <Container className="pb-16 pt-8 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceTiers.map((tier) => (
            <section
              key={tier.name}
              className={`rounded-xl border p-8 shadow-[var(--shadow-card)] ${
                tier.featured
                  ? "border-[var(--primary-strong)] bg-[var(--surface-container-high)]"
                  : "border-[var(--outline)] bg-[var(--surface-container-lowest)]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">{tier.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{tier.summary}</p>
                </div>
                {tier.featured ? (
                  <span className="rounded bg-[var(--secondary-soft)] px-3 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-[var(--secondary)]">
                    Most Common
                  </span>
                ) : null}
              </div>

              <div className="mt-8 text-5xl font-black tracking-tight text-[var(--primary)]">{tier.price}</div>
              <ul className="mt-8 space-y-4 text-sm text-[var(--text)]">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-base text-[var(--secondary)]">
                      check_circle
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-xl bg-[var(--surface-container-low)] p-8">
          <h3 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">How we scope work</h3>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--text-muted)]">
            We define the bottleneck, agree on the deliverable, build the system, and show you the outcome.
            No ambiguous retainer language. No platform theater. If the first project works, then we decide what
            deserves the next phase.
          </p>
        </div>
      </Container>

      <CallToAction />
      <SiteFooter />
    </main>
  );
}

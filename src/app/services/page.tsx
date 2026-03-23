import { CallToAction } from "@/components/CallToAction";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
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
    <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <SiteHeader />
      <Container className="py-18 lg:py-24">
        <SectionHeading
          eyebrow="Services"
          title="Three ways we help Calgary businesses simplify their tech"
          description="Start with a tightly scoped win, then expand only when the system is proving its value."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {serviceTiers.map((tier) => (
            <section
              key={tier.name}
              className={`card-panel flex h-full flex-col ${tier.featured ? "border-[var(--accent)] shadow-[var(--shadow-strong)]" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-[var(--ink-strong)]">{tier.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{tier.summary}</p>
                </div>
                {tier.featured ? (
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent-strong)]">
                    Most common
                  </span>
                ) : null}
              </div>
              <div className="mt-8 text-4xl font-semibold text-[var(--ink-strong)]">{tier.price}</div>
              <ul className="mt-8 space-y-4 text-sm text-[var(--ink)]">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-[var(--line)] bg-white/75 p-8 shadow-[var(--shadow-soft)]">
          <h3 className="text-2xl font-semibold text-[var(--ink-strong)]">How we scope work</h3>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
            We do not sell mystery retainers. We define the bottleneck, agree on the deliverable, build the
            system, and show you how it performs. If we continue, it is because the first project worked.
          </p>
        </div>
      </Container>

      <CallToAction />
    </main>
  );
}

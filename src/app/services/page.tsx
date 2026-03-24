import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Automation Packages · Owned Cloud Calgary",
  description: "Clear starter, systems, and infrastructure packages for businesses that want less manual work and better operating systems.",
  path: "/services",
});

const serviceTiers = [
  {
    name: "Starter",
    price: "$800",
    summary: "A simple first project to fix one painful process quickly.",
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
    summary: "For businesses ready to clean up more than one process across follow-up, admin, and reporting.",
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
    summary: "For teams that need private infrastructure, client portals, or deeper systems work.",
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
            title="Three ways we help businesses clean up how work gets done."
            description="Start with one clear problem, prove the value, and only expand when the business actually needs more."
          />
        </Container>
      </section>

      <Container className="pb-16 pt-8 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceTiers.map((tier) => (
            <section
              key={tier.name}
              id={tier.name === "Starter" ? "starter" : tier.name === "Core Systems" ? "core" : "infrastructure"}
              className={`rounded-xl border p-8 shadow-[var(--shadow-card)] ${
                tier.featured
                  ? "border-[var(--primary-strong)] bg-[var(--surface-container-high)]"
                  : "border-[var(--outline)] bg-[var(--surface-container-lowest)]"
              } elevate-hover`}
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
              <div className="mt-8 border-t border-[var(--outline)] pt-6">
                <p className="eyebrow text-[var(--text-muted)]">What you get</p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                  {tier.name === "Starter"
                    ? "Delivered in 5–7 business days. You receive one documented workflow, integration configuration, owner notification setup, and a 30-minute handoff recording."
                    : tier.name === "Core Systems"
                      ? "Delivered in 2–4 weeks. You receive workflow documentation, dashboard access, a team training video, process runbook, and a 60-day support window."
                      : "Scoped via discovery call. You receive an architecture document, deployment runbook, security audit report, and quarterly review schedule."}
                </p>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-xl bg-[var(--surface-container-low)] p-8">
          <h3 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">How we scope work</h3>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--text-muted)]">
            We start by finding the part of the business that is costing the most time, money, or missed opportunity.
            Then we agree on the deliverable, build it, and measure whether it helped.
          </p>
          <p className="mt-4 leading-7 text-[var(--text-muted)]">
            No vague retainer talk. No unnecessary complexity. If the first project works, then we decide what deserves
            a second phase.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          <section id="workflow" className="rounded-xl bg-[var(--surface-container-lowest)] p-8 shadow-[var(--shadow-card)]">
            <p className="eyebrow text-[var(--text-muted)]">Workflow Architecture</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--primary)]">Fix the handoffs first.</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
              This is about taking a messy process and making it repeatable. Intake, assignment, reminders, approvals,
              follow-up, and reporting should not depend on memory or whoever happens to be available.
            </p>
            <ul className="mt-6 list-disc space-y-3 pl-6 text-[var(--text-muted)]">
              <li>Your team is copy-pasting between tools.</li>
              <li>Follow-ups fall through the cracks.</li>
              <li>Onboarding takes three days of manual steps.</li>
            </ul>
            <div className="mt-6 rounded-lg bg-[var(--surface-container-low)] p-5 text-sm text-[var(--text-muted)]">
              Output: a documented workflow, the right automation, and clear owner alerting. Best fit: Starter or Core.
            </div>
          </section>

          <section id="leads" className="rounded-xl bg-[var(--surface-container-lowest)] p-8 shadow-[var(--shadow-card)]">
            <p className="eyebrow text-[var(--text-muted)]">Lead Response Systems</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--primary)]">Respond while the lead still cares.</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
              This means your intake, routing, alerts, and first response happen faster and more consistently. Human
              judgment stays where it matters. The repetitive part gets handled by the system.
            </p>
            <ul className="mt-6 list-disc space-y-3 pl-6 text-[var(--text-muted)]">
              <li>You are paying for leads but replying four hours later.</li>
              <li>Your CRM has 2,000 contacts and no scoring.</li>
              <li>You cannot tell which channel produces revenue.</li>
            </ul>
            <div className="mt-6 rounded-lg bg-[var(--surface-container-low)] p-5 text-sm text-[var(--text-muted)]">
              Output: a routing workflow, faster response path, and reporting that shows what is being handled. Best fit: Starter or Core.
            </div>
          </section>

          <section id="intelligence" className="rounded-xl bg-[var(--surface-container-lowest)] p-8 shadow-[var(--shadow-card)]">
            <p className="eyebrow text-[var(--text-muted)]">Custom Business Intelligence</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--primary)]">One source of truth instead of four dashboards.</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
              We build reporting that helps you answer practical questions quickly instead of piecing together exports,
              screenshots, and different versions of the truth.
            </p>
            <ul className="mt-6 list-disc space-y-3 pl-6 text-[var(--text-muted)]">
              <li>You check four dashboards every morning.</li>
              <li>Your reports are screenshots in Slack.</li>
              <li>You cannot answer what happened last quarter without asking three people.</li>
            </ul>
            <div className="mt-6 rounded-lg bg-[var(--surface-container-low)] p-5 text-sm text-[var(--text-muted)]">
              Output: a shared dashboard, agreed reporting definitions, and a simple runbook for how the data is produced. Best fit: Core or Infrastructure.
            </div>
          </section>
        </div>

        <div className="mt-16 overflow-hidden rounded-xl border border-[var(--outline)]">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">Comparison of Starter, Core, and Infrastructure packages</caption>
            <thead className="bg-[var(--surface-container-high)] text-[var(--primary)]">
              <tr>
                <th scope="col" className="p-4 font-extrabold">Package</th>
                <th scope="col" className="p-4 font-extrabold">Starter</th>
                <th scope="col" className="p-4 font-extrabold">Core</th>
                <th scope="col" className="p-4 font-extrabold">Infrastructure</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {[
                ["Workflows included", "1", "3–5", "Unlimited"],
                ["Dashboard", "—", "✓", "✓"],
                ["Team training", "—", "✓", "✓"],
                ["Private hosting", "—", "—", "✓"],
                ["Ongoing support", "7-day handoff", "60-day window", "Quarterly reviews"],
                ["Timeline", "5–7 days", "2–4 weeks", "Scoped"],
                ["Price", "$800", "$2,500–$5,000", "Custom"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-[var(--outline)]">
                  {row.map((cell, index) => (
                    index === 0 ? (
                      <th key={`${row[0]}-${index}`} scope="row" className="p-4 text-[var(--text-muted)]">
                        {cell}
                      </th>
                    ) : (
                      <td key={`${row[0]}-${index}`} className="p-4 text-[var(--text-muted)]">
                        {cell}
                      </td>
                    )
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>

      <CallToAction />
      <SiteFooter />
    </main>
  );
}

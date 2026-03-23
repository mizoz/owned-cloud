import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";

const painPoints = [
  {
    title: "Too many monthly tools",
    description:
      "Calendars, CRMs, forms, follow-up tools, and cloud subscriptions quietly drain cash every month.",
  },
  {
    title: "Manual follow-up gets dropped",
    description:
      "Leads sit in inboxes, staff forget callbacks, and opportunities cool off before anyone responds.",
  },
  {
    title: "Nobody owns the system",
    description:
      "You pay for software, but your process still depends on duct tape, logins, and whoever happens to remember.",
  },
];

const solutions = [
  {
    title: "Lead Follow-Up Automation",
    description:
      "Capture new leads, trigger follow-up automatically, and notify your team the moment a prospect is ready.",
  },
  {
    title: "Operations Automation",
    description:
      "Replace repetitive admin work with simple workflows for intake, scheduling, reminders, and approvals.",
  },
  {
    title: "Owned Infrastructure",
    description:
      "Move critical systems onto infrastructure you control, with Calgary-based support and no lock-in contracts.",
  },
];

const trustPoints = [
  "Calgary-based and locally available",
  "No lock-in contracts",
  "Working systems delivered in 3 to 5 days",
];

const packageFeatures = [
  "Lead form capture wired into your CRM",
  "Automated email and SMS-style follow-up sequence planning",
  "Owner or team notifications when a lead engages",
  "Simple reporting dashboard for response tracking",
  "Fixed scope with launch support included",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(60,110,113,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(196,168,120,0.12),_transparent_35%)]" />
        <Container className="relative grid gap-12 py-18 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-6 inline-flex flex-wrap items-center gap-3 rounded-full border border-[var(--line-strong)] bg-white/75 px-4 py-2 text-sm text-[var(--muted)] shadow-sm backdrop-blur">
              {trustPoints.map((point, index) => (
                <span key={point} className="inline-flex items-center gap-3">
                  {index > 0 ? <span className="hidden h-1 w-1 rounded-full bg-[var(--accent)] sm:inline-block" /> : null}
                  <span>{point}</span>
                </span>
              ))}
            </div>

            <h1 className="max-w-4xl font-serif text-5xl leading-tight text-[var(--ink-strong)] sm:text-6xl">
              Calgary businesses waste thousands on tech they do not need. We fix that.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              We help small teams replace bloated subscriptions and manual follow-up with practical
              automation, cleaner systems, and infrastructure they actually control.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a Consultation
              </Link>
              <Link href="/services" className="btn-secondary">
                See Packages
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["$800", "Entry package"],
                ["3-5 days", "Typical delivery"],
                ["41 leads", "CRM pipeline ready"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-[var(--line)] bg-white/80 p-5 shadow-[var(--shadow-soft)]">
                  <div className="text-3xl font-semibold text-[var(--ink-strong)]">{value}</div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-6 h-20 w-20 rounded-full bg-[var(--accent-soft)] blur-2xl" />
            <div className="card-panel relative">
              <div className="flex items-center justify-between text-sm text-[var(--muted)]">
                <span>Lead Follow-Up Automation Package</span>
                <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[var(--accent-strong)]">
                  Starter offer
                </span>
              </div>
              <div className="mt-6">
                <div className="text-4xl font-semibold text-[var(--ink-strong)]">$800</div>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                  A fixed-scope build for Calgary businesses that need faster lead response without
                  buying another bloated software stack.
                </p>
              </div>
              <ul className="mt-8 space-y-4 text-sm text-[var(--ink)]">
                {packageFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-[var(--line)] bg-[var(--surface-alt)] p-4 text-sm text-[var(--muted)]">
                Best fit for clinics, trades, real estate teams, and service businesses that are still
                chasing leads manually.
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--line)] bg-white/75">
        <Container className="py-16">
          <SectionHeading
            eyebrow="Where the waste happens"
            title="Three common pains we fix first"
            description="We start with the highest-friction part of the business so the return is obvious quickly."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {painPoints.map((item) => (
              <article key={item.title} className="card-panel min-h-[220px]">
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Problem</p>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--ink-strong)]">{item.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--line)]">
        <Container className="py-16">
          <SectionHeading
            eyebrow="What we build"
            title="A focused stack for getting your time back"
            description="Each engagement is scoped to remove a real bottleneck, not to pad a monthly invoice."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {solutions.map((item) => (
              <article key={item.title} className="card-panel">
                <h3 className="text-2xl font-semibold text-[var(--ink-strong)]">{item.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{item.description}</p>
                <Link href="/services" className="mt-8 inline-flex items-center text-sm font-medium text-[var(--accent-strong)]">
                  Explore service details
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--line)] bg-[var(--surface-alt)]">
        <Container className="grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why local matters"
              title="Calgary-first support with a technical backbone"
              description="You are not buying outsourced mystery work. You are getting a local implementation partner that can explain the system, support the rollout, and keep the scope honest."
            />
            <ul className="mt-8 space-y-4 text-[var(--muted)]">
              {[
                "Systems designed around your current process instead of forcing a platform migration.",
                "Clear deliverables, fixed entry scope, and no lock-in contract language.",
                "Privacy-conscious architecture for businesses that care where customer data lives.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-panel">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">First engagement</p>
            <h3 className="mt-4 text-3xl font-semibold text-[var(--ink-strong)]">
              Lead Follow-Up Automation Package
            </h3>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              We map your intake, capture every inquiry, automate the next step, and leave you with a
              workflow your team can actually use.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Scope", "Lead capture, qualification, notifications, reporting"],
                ["Timeline", "3 to 5 working days"],
                ["Ideal client", "Service businesses with inconsistent follow-up"],
                ["Outcome", "Faster replies and fewer lost opportunities"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-[var(--line)] bg-white/70 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink)]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CallToAction />
    </main>
  );
}

import Image from "next/image";
import { CallToAction } from "@/components/CallToAction";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <SiteHeader />
      <Container className="py-18 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="About"
              title="A technical operator for Calgary businesses that are tired of subscription sprawl"
              description="Owned Cloud sits between an IT vendor and an automation partner. We help small businesses simplify systems, automate repetitive work, and make better use of the tools they already pay for."
            />

            <div className="mt-10 space-y-6 text-lg leading-8 text-[var(--muted)]">
              <p>
                The model is simple: start with a clear operational problem, fix it quickly, and build trust from
                a working result. That might be lead follow-up, appointment booking, internal handoffs, or owned
                infrastructure that gives you more control over your data and costs.
              </p>
              <p>
                We are Calgary-focused on purpose. Local context matters when you are dealing with service teams,
                real estate operators, clinics, trades, and other small businesses that need practical systems,
                not software theater.
              </p>
            </div>
          </div>

          <div className="card-panel overflow-hidden p-0">
            <div className="border-b border-[var(--line)] bg-[linear-gradient(135deg,rgba(60,110,113,0.16),rgba(196,168,120,0.12))] p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Command center preview</p>
              <h2 className="mt-3 text-2xl font-semibold text-[var(--ink-strong)]">
                Systems you can actually see working
              </h2>
            </div>
            <div className="p-6">
              <Image
                src="/dashboard-preview.svg"
                alt="Dashboard preview showing lead and infrastructure metrics"
                width={1200}
                height={800}
                className="h-auto w-full rounded-2xl border border-[var(--line)] bg-[var(--surface-alt)]"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Technical depth",
              description:
                "Next.js, Supabase, Cloudflare, automation workflows, dashboards, and lightweight internal tools.",
            },
            {
              title: "Business framing",
              description:
                "Every project is tied back to lead response, staff time saved, client experience, or recurring costs reduced.",
            },
            {
              title: "Local delivery",
              description:
                "Calgary-based positioning, clear communication, and implementation that respects how small teams really operate.",
            },
          ].map((item) => (
            <article key={item.title} className="card-panel">
              <h3 className="text-2xl font-semibold text-[var(--ink-strong)]">{item.title}</h3>
              <p className="mt-4 leading-7 text-[var(--muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>

      <CallToAction />
    </main>
  );
}

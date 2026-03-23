import Image from "next/image";
import { CallToAction } from "@/components/CallToAction";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />
      <section className="hero-shell px-6 pb-16 pt-24 lg:px-12">
        <Container className="max-w-7xl">
          <SectionHeading
            eyebrow="Architectural Intelligence"
            title="A Calgary operator building systems with business consequences in mind."
            description="Owned Cloud sits between an automation partner and a technical operator. The work starts with execution, not theory."
          />
        </Container>
      </section>

      <Container className="pb-16 pt-8 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="space-y-6 text-lg leading-8 text-[var(--text-muted)]">
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

          <div className="overflow-hidden rounded-xl border border-[var(--outline)] bg-[var(--surface-container-lowest)] shadow-[var(--shadow-card)]">
            <div className="border-b border-[var(--outline)] bg-[var(--surface-container-high)] p-8">
              <p className="eyebrow text-[var(--text-muted)]">Command center preview</p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[var(--primary)]">
                Systems you can actually see working
              </h2>
            </div>
            <div className="p-6">
              <Image
                src="/dashboard-preview.svg"
                alt="Dashboard preview showing lead and infrastructure metrics"
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl border border-[var(--outline)] bg-[var(--surface-container-low)]"
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
            <article key={item.title} className="rounded-xl bg-[var(--surface-container-lowest)] p-8 shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">{item.title}</h3>
              <p className="mt-4 leading-7 text-[var(--text-muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>

      <CallToAction />
      <SiteFooter />
    </main>
  );
}

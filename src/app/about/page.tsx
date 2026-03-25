import Link from "next/link";
import Image from "next/image";
import { CallToAction } from "@/components/CallToAction";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About · Owned Cloud Calgary",
  description: "About Ahmed and the operating principles behind Owned Cloud’s Calgary-based automation and systems practice.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />
      <section className="hero-shell px-6 pb-16 pt-24 lg:px-12">
        <Container className="max-w-7xl">
          <SectionHeading
            eyebrow="About Owned Cloud"
            title="A Calgary operator building systems with business consequences in mind."
            description="Owned Cloud sits between an automation partner and a technical operator. The work starts with execution, not theory, and expands only when the first fix earns it."
          />
        </Container>
      </section>

      <Container className="pb-16 pt-8 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="space-y-6 text-lg leading-8 text-[var(--text-muted)]">
              <div className="rounded-xl bg-[var(--surface-container-low)] p-6">
                <p className="eyebrow text-[var(--text-muted)]">Founder</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--primary)]">Ahmed</h2>
                <p className="mt-4 text-[var(--text-muted)]">
                  Calgary-based systems operator working with service teams, real estate operators, clinics, and trades. The focus is not abstract transformation. It is building systems that remove measurable friction.
                </p>
              </div>

              <p>
                The model is simple: start with a clear operational problem, fix it quickly, and build trust from a working result. That might be lead follow-up, appointment booking, internal handoffs, or infrastructure that gives you more control over your data and costs.
              </p>
              <p>
                We are Calgary-focused on purpose. Local context matters when you are dealing with teams that need practical systems, not software theater.
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
              title: "Start with the bottleneck.",
              description:
                "We do not sell discovery phases. We find the point of friction that costs the most time or money, fix it, and prove value before expanding scope.",
            },
            {
              title: "Own your infrastructure.",
              description:
                "Your data, workflows, dashboards, and runbooks should be portable. We build on open-source tools in environments you control.",
            },
            {
              title: "Local delivery, real accountability.",
              description:
                "We are in Calgary. We answer the phone. The sophistication of modern automation with the accountability of a local operator.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-xl bg-[var(--surface-container-lowest)] p-8 shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">{item.title}</h3>
              <p className="mt-4 leading-7 text-[var(--text-muted)]">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-xl bg-[var(--surface-container-low)] p-8">
          <p className="eyebrow text-[var(--text-muted)]">Built on</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {["Next.js", "Supabase", "Cloudflare", "n8n", "Docker", "Tailscale", "Hetzner"].map((item) => (
              <Link
                key={item}
                href="/stack"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--primary)] shadow-sm"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <CallToAction />
      <SiteFooter />
    </main>
  );
}

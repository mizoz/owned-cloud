import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Technical Stack · Owned Cloud",
  description: "The open-source, self-hosted, and cloud infrastructure tools Owned Cloud uses to build business systems.",
  path: "/stack",
});

const tools = [
  ["Next.js", "Frontend framework", "Fast, mature, and flexible for client portals and marketing systems.", "Open-source", "Self-hostable"],
  ["Supabase", "Database, auth, edge functions", "Strong Postgres foundation with practical auth and APIs.", "Open-source", "Self-hostable"],
  ["Cloudflare", "DNS, tunnels, Zero Trust, CDN", "Good network control, secure exposure, and low friction.", "Closed-source", "Hosted"],
  ["n8n", "Workflow automation engine", "Unlimited workflow control without paying per zap.", "Open-source", "Self-hostable"],
  ["Docker", "Containerization", "Repeatable deployments and easier operational hygiene.", "Open-source", "Self-hostable"],
  ["Hetzner", "VPS hosting", "Good price-to-performance and straightforward infrastructure.", "Hosted", "EU-based"],
  ["Tailscale", "Private networking", "Reliable secure access for internal systems.", "Closed-source", "Hosted"],
  ["Dokku", "PaaS deployment", "Simple app deployment flow on infrastructure you control.", "Open-source", "Self-hostable"],
  ["Plausible", "Privacy-friendly analytics", "Useful analytics without invasive tracking.", "Open-source", "Self-hostable"],
  ["Glitchtip", "Error monitoring", "Sentry-style visibility without the SaaS dependency.", "Open-source", "Self-hostable"],
  ["Stalwart", "Email server", "Modern self-hosted mail infrastructure when it fits the stack.", "Open-source", "Self-hostable"],
  ["Postal", "Transactional email", "Predictable outbound email for product notifications.", "Open-source", "Self-hostable"],
  ["Tooljet", "Internal dashboards", "Useful for operational back-office tools.", "Open-source", "Self-hostable"],
  ["Mixpost", "Social media management", "Owned scheduling and publishing stack.", "Open-source", "Self-hostable"],
  ["Cal.com", "Scheduling", "A scheduling layer we can control instead of renting one forever.", "Open-source", "Self-hostable"],
  ["Upstash Redis", "Rate limiting and caching", "Practical hosted Redis when we do not want to manage it ourselves.", "Hosted", "Cloud"],
  ["Resend", "Transactional email", "Useful lightweight outbound option when Postal is overkill.", "Hosted", "Cloud"],
];

export default function StackPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />
      <section className="hero-shell px-6 pb-16 pt-24 lg:px-12">
        <Container>
          <SectionHeading
            eyebrow="How We Build"
            title="Open-source where it matters. Hosted where it makes sense."
            description="Every system we deploy is built on tools you can understand, migrate, and control. No black boxes."
          />
        </Container>
      </section>

      <Container className="pb-20">
        <div className="overflow-hidden rounded-xl border border-[var(--outline)] bg-slate-950 text-slate-100">
          <div className="border-b border-slate-800 p-6 text-sm uppercase tracking-[0.16em] text-slate-400">Architecture layers</div>
          {[
            ["Client Layer", "Next.js · Tailwind · Supabase Auth"],
            ["Automation Layer", "n8n · Trigger.dev · Custom webhooks"],
            ["Data Layer", "Supabase (Postgres) · Redis · S3"],
            ["Infrastructure Layer", "Docker · Hetzner VPS · Cloudflare · Tailscale · Dokku"],
            ["Monitoring & Security", "Glitchtip · Plausible · Stalwart · Zero Trust · E2E Encryption"],
          ].map((row) => (
            <div key={row[0]} className="border-t border-slate-800 p-6">
              <p className="eyebrow text-slate-400">{row[0]}</p>
              <p className="mt-2 text-lg text-white">{row[1]}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {tools.map(([name, role, why, badgeA, badgeB]) => (
            <article key={name} className="rounded-xl bg-[var(--surface-container-lowest)] p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">{name}</h2>
                  <p className="mt-2 font-semibold text-[var(--text)]">{role}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[var(--surface-container-low)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">{badgeA}</span>
                  <span className="rounded-full bg-[var(--surface-container-low)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">{badgeB}</span>
                </div>
              </div>
              <p className="mt-4 leading-7 text-[var(--text-muted)]">{why}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-xl bg-[var(--surface-container-low)] p-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--primary)]">Why open source?</h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
            Open-source tools reduce lock-in, make costs more predictable, and give you a real migration path if the business changes.
          </p>
          <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
            They also make customization practical. If a workflow needs to match how your business actually runs, you should not need a vendor’s permission to change it.
          </p>
          <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">
            Security is not about marketing pages. It is about visibility, control, and how fast you can respond when something breaks. Open systems are easier to inspect and defend.
          </p>
        </div>
      </Container>
      <SiteFooter />
    </main>
  );
}

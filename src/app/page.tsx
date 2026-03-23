import Link from "next/link";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const pillars = [
  {
    icon: "settings_input_component",
    iconTone: "text-[var(--primary)] bg-[rgba(0,52,97,0.05)]",
    title: "Workflow Architecture",
    body: "Redesigning repeat operations into linear, automated paths that eliminate human error and bottleneck friction.",
  },
  {
    icon: "psychology",
    iconTone: "text-[var(--secondary)] bg-[rgba(0,108,73,0.05)]",
    title: "AI Lead Synthesis",
    body: "Intelligent agents that identify, score, and engage prospects in real time, delivering warm opportunities to your CRM.",
  },
  {
    icon: "hub",
    iconTone: "text-[var(--primary)] bg-[rgba(0,52,97,0.05)]",
    title: "Custom Business Intelligence",
    body: "Real-time dashboards that give you a god view of operations, turning raw data into strategic execution.",
  },
];

const sovereigntyPoints = [
  "End-to-end encryption",
  "Zero-knowledge storage",
  "Local private nodes",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />

      <section className="hero-shell overflow-hidden px-6 pb-24 pt-24 lg:px-12">
        <Container className="grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <div className="pill-label">
              <span className="material-symbols-outlined text-sm">bolt</span>
              Operational Excellence 2030
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight text-[var(--primary)] lg:text-7xl">
                The Automation
                <br />
                Engine for Business.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
                Stop burning capital on manual workflows. We architect private, secure cloud
                environments that automate your lead generation, data synthesis, and operations.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact" className="btn-primary gap-2">
                Book Your Free 15-Min Audit
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link href="/services" className="btn-secondary">
                Launch Demo
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative z-10 rounded-xl bg-[var(--surface-container-high)] p-1 shadow-[var(--shadow-soft)]">
              <div className="rounded-lg bg-[var(--surface-container-lowest)] p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[var(--primary)]">Live ROI Estimator</h3>
                  <span className="rounded bg-[var(--secondary-soft)] px-2 py-1 text-[0.6rem] font-extrabold uppercase tracking-[0.14em] text-[var(--secondary)]">
                    Real-Time Data
                  </span>
                </div>

                <div className="mt-6 space-y-5">
                  <div>
                    <div className="mb-2 flex justify-between text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                      <span>Team Size</span>
                      <span className="text-[var(--primary)]">12 Members</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[var(--surface-container)]">
                      <div className="h-full w-[45%] bg-[var(--primary)]" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                      <span>Manual Task Load</span>
                      <span className="text-[var(--primary)]">High (65%)</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[var(--surface-container)]">
                      <div className="h-full w-[65%] bg-[var(--secondary)]" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-lg border-b-2 border-[var(--secondary-soft)] bg-[var(--surface-container-low)] p-4">
                    <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                      Hours Saved/Mo
                    </p>
                    <p className="mt-1 text-4xl font-extrabold tracking-tight text-[var(--secondary)]">
                      420.5
                    </p>
                  </div>

                  <div className="rounded-lg border-b-2 border-[var(--primary-strong)] bg-[var(--surface-container-low)] p-4">
                    <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                      Lead Velocity
                    </p>
                    <p className="mt-1 text-4xl font-extrabold tracking-tight text-[var(--primary)]">
                      +142%
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-center text-xs italic text-[var(--text-muted)]">
                  "The invisible engine driving your ROI."
                </p>
              </div>
            </div>

            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[rgba(0,108,73,0.1)] blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-[rgba(0,52,97,0.1)] blur-3xl" />
          </div>
        </Container>
      </section>

      <section className="section-muted py-24">
        <Container className="max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-[var(--primary)]">
              Architectural Intelligence
            </h2>
            <p className="mt-4 text-lg text-[var(--text-muted)]">
              We do not just build software. We architect the structural foundation of your
              digital workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-xl bg-[var(--surface-container-lowest)] p-8 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${pillar.iconTone}`}>
                  <span className="material-symbols-outlined">{pillar.icon}</span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--primary)]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{pillar.body}</p>
                <div className="mt-6 flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[var(--secondary)]">
                  Learn more
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </div>
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
                In the age of AI, data is your most valuable asset. We build private, sovereign
                environments where your data remains exclusively yours.
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
              Data Sovereignty as a Service.
            </h2>
            <p className="text-lg leading-relaxed text-[var(--text-muted)]">
              We do not rent you space in a generic cloud. We build your proprietary architecture.
              Every line of code and byte of data is hosted in environments you control, ensuring
              legal compliance and strategic security.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-5xl font-black text-[var(--secondary)]">100%</p>
                <p className="mt-1 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  Owner Control
                </p>
              </div>
              <div>
                <p className="text-5xl font-black text-[var(--secondary)]">0</p>
                <p className="mt-1 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  Data Leakage
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(108,248,187,0.08),_transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.72),rgba(15,23,42,0.96))]" />
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,rgba(148,163,184,0.08)_30%,transparent_60%),radial-gradient(circle_at_bottom_left,rgba(148,163,184,0.12),transparent_25%)]" />
        </div>
        <Container className="relative z-10 max-w-7xl text-center">
          <div className="pill-label bg-emerald-500 text-white">
            <span className="material-symbols-outlined text-sm">location_on</span>
            Calgary Based Engineering
          </div>

          <h2 className="mt-8 text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            Architectural Intelligence,
            <br />
            Local Accountability.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300">
            Headquartered in the heart of downtown Calgary. We provide the sophistication of a
            modern automation practice with the accountability of local business culture.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-12 md:flex-row">
            <div className="text-left">
              <p className="text-5xl font-black text-emerald-400">24/7</p>
              <p className="mt-2 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                Local Support Response
              </p>
            </div>
            <div className="hidden h-16 w-px bg-slate-700 md:block" />
            <div className="text-left">
              <p className="text-5xl font-black text-emerald-400">150+</p>
              <p className="mt-2 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                Engines Deployed Locally
              </p>
            </div>
          </div>

          <div className="mt-16">
            <Link
              href="/contact"
              className="inline-flex rounded-md bg-[var(--secondary)] px-10 py-5 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-white transition-all hover:brightness-110"
            >
              Book Your Free 15-Min Audit
            </Link>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}

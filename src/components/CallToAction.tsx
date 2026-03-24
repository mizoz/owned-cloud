import { Container } from "@/components/Container";
import { TrackedLink } from "@/components/TrackedLink";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(108,248,187,0.08),_transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.78),rgba(15,23,42,0.96))]" />
      <Container className="relative z-10 text-center">
        <div className="pill-label bg-emerald-500 text-white">
          <span className="material-symbols-outlined text-sm">bolt</span>
          Free 15-Minute Audit
        </div>
        <h2 className="mt-8 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
          Start with one business problem worth fixing now.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          We help you choose the right first fix, build it properly, and leave you with something your team can actually use.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <TrackedLink
            href="/contact"
            className="btn-primary"
            eventName="cta_click"
            eventProps={{ placement: "shared_cta_primary" }}
          >
            Book Your Free 15-Minute Audit
          </TrackedLink>
          <TrackedLink
            href="/services"
            className="btn-secondary border-slate-700 bg-slate-800 text-white hover:bg-slate-700"
            eventName="cta_click"
            eventProps={{ placement: "shared_cta_secondary" }}
          >
            Review Packages
          </TrackedLink>
        </div>
      </Container>
    </section>
  );
}

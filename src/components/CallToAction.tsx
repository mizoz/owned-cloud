import Link from "next/link";
import { Container } from "@/components/Container";

export function CallToAction() {
  return (
    <section className="py-18">
      <Container>
        <div className="card-panel bg-[linear-gradient(135deg,rgba(60,110,113,0.1),rgba(196,168,120,0.12))] text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Ready for a practical first step?</p>
          <h2 className="mt-4 text-4xl font-semibold text-[var(--ink-strong)]">
            Start with one system that saves time immediately.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            We scope the bottleneck, build the workflow, and get you to a working result fast.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Book a Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              Review Packages
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

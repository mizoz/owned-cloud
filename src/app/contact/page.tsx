import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";
import { publicEnv } from "@/lib/public-env";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <SiteHeader />
      <Container className="py-18 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Book a consultation or send the details"
              description="If you already know the pain point, send it over. If not, book time and we will map the bottleneck together."
            />
            <div className="mt-8 space-y-4 rounded-[2rem] border border-[var(--line)] bg-white/75 p-8 shadow-[var(--shadow-soft)]">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">What to expect</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">
                  A short conversation about your current process, where leads or admin tasks are slipping, and
                  whether the fixed-scope starter package is the right fit.
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Best fit</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">
                  Small businesses in Calgary that want practical automation, clearer reporting, and fewer monthly
                  tools to manage.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ContactForm />
            <div className="card-panel p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Book directly</p>
              {publicEnv.calendlyUrl ? (
                <iframe
                  title="Calendly booking"
                  src={publicEnv.calendlyUrl}
                  className="mt-4 h-[720px] w-full rounded-2xl border border-[var(--line)] bg-white"
                />
              ) : (
                <p className="mt-4 leading-7 text-[var(--muted)]">
                  Add `NEXT_PUBLIC_CALENDLY_URL` to embed your booking calendar here.
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

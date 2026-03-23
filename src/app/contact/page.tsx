import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { publicEnv } from "@/lib/public-env";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />
      <section className="hero-shell px-6 pb-16 pt-24 lg:px-12">
        <Container className="max-w-7xl">
          <SectionHeading
            eyebrow="Free 15-Min Audit"
            title="Book the audit or send the operating problem."
            description="Use the form if you want to outline the current friction in detail. Use the booking panel if you want a direct conversation."
          />
        </Container>
      </section>

      <Container className="pb-16 pt-8 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="space-y-4 rounded-xl bg-[var(--surface-container-low)] p-8">
              <div>
                <p className="eyebrow text-[var(--text-muted)]">What to expect</p>
                <p className="mt-3 leading-7 text-[var(--text-muted)]">
                  A short conversation about your current process, where leads or admin tasks are slipping, and
                  whether the fixed-scope starter package is the right fit.
                </p>
              </div>
              <div>
                <p className="eyebrow text-[var(--text-muted)]">Best fit</p>
                <p className="mt-3 leading-7 text-[var(--text-muted)]">
                  Small businesses in Calgary that want practical automation, clearer reporting, and fewer monthly
                  tools to manage.
                </p>
              </div>
              <div>
                <p className="eyebrow text-[var(--text-muted)]">Fastest path</p>
                <p className="mt-3 leading-7 text-[var(--text-muted)]">
                  Bring one concrete problem: slow lead response, handoff failures, inbox chaos, or repetitive admin
                  tasks. That is enough to scope the first engagement.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ContactForm />
            <div className="card-panel p-5">
              <p className="eyebrow text-[var(--text-muted)]">Book directly</p>
              {publicEnv.calendlyUrl ? (
                <iframe
                  title="Calendly booking"
                  src={publicEnv.calendlyUrl}
                  className="mt-4 h-[720px] w-full rounded-xl border border-[var(--outline)] bg-white"
                />
              ) : (
                <p className="mt-4 leading-7 text-[var(--text-muted)]">
                  Add `NEXT_PUBLIC_CALENDLY_URL` to embed your booking calendar here.
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
      <SiteFooter />
    </main>
  );
}

import Link from "next/link";
import { CalBookingEmbed } from "@/components/CalBookingEmbed";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StructuredData } from "@/components/StructuredData";
import { publicEnv } from "@/lib/public-env";
import { siteConfig } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a Free Audit | Owned Cloud Calgary",
  description: "Send project details or book a free 15-minute systems audit with Owned Cloud in Calgary.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Owned Cloud",
          url: `${siteConfig.url}/contact`,
          about: {
            "@type": "Organization",
            name: siteConfig.name,
            legalName: siteConfig.legalName,
            email: siteConfig.email,
            telephone: siteConfig.phone || undefined,
          },
        }}
      />
      <SiteHeader />
      <section className="hero-shell px-6 pb-16 pt-24 lg:px-12">
        <Container className="max-w-7xl">
          <SectionHeading
            eyebrow="Free 15-Minute Systems Audit"
            title="Book the audit or send the operating problem."
            description="Use the form if you want to outline the current friction in detail. Use the scheduler if you want a direct conversation with Ahmed."
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
                  A short conversation about where leads, admin work, or reporting are slipping and what the first
                  practical fix should be.
                </p>
              </div>
              <div>
                <p className="eyebrow text-[var(--text-muted)]">Best fit</p>
                <p className="mt-3 leading-7 text-[var(--text-muted)]">
                  Calgary service businesses that want practical automation, clearer reporting, and stronger internal
                  follow-through without buying another bloated platform.
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
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="eyebrow text-[var(--text-muted)]">Book directly</p>
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary-strong)]"
                >
                  Open scheduler in new tab
                </a>
              </div>
              {publicEnv.calLink ? (
                <div className="mt-4 h-[720px] overflow-hidden rounded-xl border border-[var(--outline)] bg-white">
                  <CalBookingEmbed calLink={publicEnv.calLink} />
                </div>
              ) : (
                <div className="mt-4 rounded-xl bg-[var(--surface-container-low)] p-5">
                  <p className="leading-7 text-[var(--text-muted)]">
                    Booking is available by request while the public scheduler is being finalized.
                  </p>
                  <Link href={`mailto:${siteConfig.email}?subject=Book%20a%20Free%2015-Minute%20Audit`} className="btn-primary mt-4">
                    Request Booking Link
                  </Link>
                </div>
              )}
            </div>

            <div className="rounded-xl bg-[var(--surface-container-low)] p-6">
              <p className="eyebrow text-[var(--text-muted)]">Contact</p>
              <div className="mt-4 space-y-3 text-[var(--text-muted)]">
                <p>
                  <span className="font-semibold text-[var(--primary)]">Business:</span> {siteConfig.legalName}
                </p>
                <p>
                  <span className="font-semibold text-[var(--primary)]">Email:</span>{" "}
                  <Link href={`mailto:${siteConfig.email}`} className="font-medium text-[var(--primary-strong)] underline-offset-2 hover:underline">
                    {siteConfig.email}
                  </Link>
                </p>
                {siteConfig.phone ? (
                  <p>
                    <span className="font-semibold text-[var(--primary)]">Phone:</span>{" "}
                    <Link href={`tel:${siteConfig.phone}`} className="font-medium text-[var(--primary-strong)] underline-offset-2 hover:underline">
                      {siteConfig.phone}
                    </Link>
                  </p>
                ) : null}
                <p>
                  <span className="font-semibold text-[var(--primary)]">Service region:</span> {siteConfig.serviceRegion}
                </p>
                <p>
                  <span className="font-semibold text-[var(--primary)]">Location:</span> {siteConfig.location}
                </p>
                <p>
                  <span className="font-semibold text-[var(--primary)]">Response time:</span> {siteConfig.supportPromise}
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-[var(--surface-container-low)] p-6">
              <p className="eyebrow text-[var(--text-muted)]">Who you&apos;ll hear from</p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[var(--primary)]">
                {siteConfig.founderName}
              </h2>
              <p className="mt-4 leading-7 text-[var(--text-muted)]">
                Founder-led delivery from Calgary. Owned Cloud handles the customer-facing automation work, with{" "}
                {siteConfig.parentBrandName} available behind the scenes when the project needs deeper backend or
                infrastructure support.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  LinkedIn
                </a>
                <a
                  href={siteConfig.parentBrandUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  ZalaStack
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <SiteFooter />
    </main>
  );
}

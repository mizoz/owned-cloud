import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Privacy Policy · Owned Cloud",
  description: "PIPA-aligned privacy policy for Owned Cloud.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />
      <Container className="max-w-4xl py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-[var(--primary)]">Privacy Policy</h1>
        <div className="mt-10 space-y-8 text-lg leading-8 text-[var(--text-muted)]">
          <section>
            <h2 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">Who we are</h2>
            <p className="mt-3">Owned Cloud is operated by ZalaStack in Calgary, Alberta. We provide automation consulting, workflow design, and private infrastructure services.</p>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">What we collect</h2>
            <p className="mt-3">We collect the information you submit through the contact form: name, email, phone, business name, industry, company size, website, and project details. We also collect aggregate analytics through privacy-friendly analytics tooling without cookie-based personal tracking.</p>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">How we use it</h2>
            <p className="mt-3">We use your information to respond to inquiries, scope projects, and send project-related communications. We do not sell personal information. We do not share it except where required to deliver services or comply with law.</p>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">Where data is stored</h2>
            <p className="mt-3">We prefer Canadian infrastructure where possible. Current infrastructure may involve providers such as Hetzner for hosting and Cloudflare for networking. Contact-form data may also be stored in CRM tooling used to respond to your inquiry.</p>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">Your rights under PIPA</h2>
            <p className="mt-3">Under Alberta’s Personal Information Protection Act, you can request access to your personal information, ask for corrections, and request deletion where permitted by law.</p>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">Contact</h2>
            <p className="mt-3">For privacy inquiries, email {siteConfig.email}.</p>
          </section>
          <p className="text-sm">Last updated: March 23, 2026</p>
        </div>
      </Container>
      <SiteFooter />
    </main>
  );
}

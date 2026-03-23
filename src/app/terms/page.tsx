import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service · Owned Cloud",
  description: "Plain-English terms of service for Owned Cloud engagements.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <SiteHeader />
      <Container className="max-w-4xl py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-[var(--primary)]">Terms of Service</h1>
        <div className="mt-10 space-y-8 text-lg leading-8 text-[var(--text-muted)]">
          <section><h2 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">Services</h2><p className="mt-3">Owned Cloud provides automation consulting, workflow design, dashboard implementation, and private infrastructure deployment.</p></section>
          <section><h2 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">Engagement model</h2><p className="mt-3">All work is scoped through a written scope document before payment. No retainers apply unless explicitly agreed in writing.</p></section>
          <section><h2 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">Payment</h2><p className="mt-3">Starter engagements are paid in full before work begins. Core engagements are 50% upfront and 50% on delivery. Infrastructure projects follow the payment terms in the scope document.</p></section>
          <section><h2 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">Intellectual property</h2><p className="mt-3">Upon final payment, the client owns the project deliverables, including workflows, dashboards, configuration, and documentation, unless a third-party license says otherwise.</p></section>
          <section><h2 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">Limitation of liability</h2><p className="mt-3">We are not liable for business decisions made using dashboard data, automation outputs, or AI-generated content. Liability is limited to the fees paid for the specific engagement.</p></section>
          <section><h2 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">Termination</h2><p className="mt-3">Either party may terminate with 14 days written notice. The client receives completed work product up to the termination date.</p></section>
          <section><h2 className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">Governing law</h2><p className="mt-3">These terms are governed by the laws of the Province of Alberta and applicable Canadian law.</p></section>
        </div>
      </Container>
      <SiteFooter />
    </main>
  );
}

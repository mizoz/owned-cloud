import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StructuredData } from "@/components/StructuredData";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQ · Owned Cloud Calgary",
  description: "Frequently asked questions about Owned Cloud delivery, support, hosting choices, and engagement scope.",
  path: "/faq",
});

const faqs = [
  ["How long does a Starter engagement take?", "Five to seven business days from kickoff to handoff."],
  ["Do I need to be technical?", "No. You need to describe the problem clearly. We handle the implementation."],
  ["What if I already use Zapier or Make?", "We can work with them or migrate you to n8n when ownership and cost control matter more."],
  ["Is my data safe?", "Yes. We build on infrastructure you control, with encryption in transit and at rest where appropriate."],
  ["Do you work with businesses outside Calgary?", "Calgary is the main focus, but remote automation and infrastructure work is possible."],
  [
    "What if I need more control over data or hosting?",
    "We scope around the level of control you need. That can mean a practical hosted setup, or private infrastructure when the project justifies it.",
  ],
  ["Can I see an example of your work?", "Yes. Start with the case studies page."],
  [
    "What is included in the free systems audit?",
    "A focused conversation about the biggest operational bottleneck and what the first engagement would look like.",
  ],
  ["Do you offer ongoing support?", "Yes. Starter includes a 7-day handoff window, Core includes 60 days, and Infrastructure includes quarterly reviews."],
  ["Why open-source tools?", "Lower long-term cost, less lock-in, more control, and the ability to customize without vendor permission."],
  ["How is this different from hiring a freelance developer?", "You get scoped work, implementation, documentation, and a support model rather than code with no operating context."],
  ["What industries do you serve?", "Real estate, trades, clinics, professional services, and any Calgary small business dealing with manual operational friction."],
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }}
      />
      <SiteHeader />
      <Container className="max-w-4xl py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-[var(--primary)]">FAQ</h1>
        <div className="mt-10 space-y-5">
          {faqs.map(([question, answer]) => (
            <details key={question} className="rounded-xl bg-[var(--surface-container-low)] p-6">
              <summary className="cursor-pointer text-lg font-bold text-[var(--primary)]">{question}</summary>
              <p className="mt-4 leading-7 text-[var(--text-muted)]">{answer}</p>
            </details>
          ))}
        </div>
      </Container>
      <SiteFooter />
    </main>
  );
}

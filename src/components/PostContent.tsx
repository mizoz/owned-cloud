import Link from "next/link";
import { TocHeading } from "@/lib/mdx";

export function TocSidebar({ headings }: { headings: TocHeading[] }) {
  if (!headings.length) {
    return null;
  }

  return (
    <aside className="sticky top-28 hidden rounded-xl bg-[var(--surface-container-low)] p-5 xl:block">
      <p className="eyebrow text-[var(--text-muted)]">On this page</p>
      <ul className="mt-4 space-y-3 text-sm">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`} className="text-[var(--text-muted)] hover:text-[var(--primary)]">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function StickyAuditCta() {
  return (
    <div className="sticky top-28 hidden rounded-xl bg-slate-950 p-5 text-white xl:block">
      <p className="eyebrow text-slate-400">Need help implementing this?</p>
      <h3 className="mt-3 text-2xl font-extrabold tracking-tight">Book your free audit.</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Bring the bottleneck. We will tell you whether it belongs in Starter, Core, or Infrastructure.
      </p>
      <Link href="/contact" className="btn-primary mt-5 w-full">
        Book Free Audit
      </Link>
    </div>
  );
}

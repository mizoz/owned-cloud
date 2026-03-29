import Link from "next/link";

export function BrandMark({
  href = "/",
  compact = false,
  light = false,
}: {
  href?: string;
  compact?: boolean;
  light?: boolean;
}) {
  return (
    <Link href={href} aria-label="Owned Cloud home" className="brand-mark inline-flex items-center gap-3">
      <span className={`brand-mark__glyph ${light ? "brand-mark__glyph--light" : ""}`}>
        <span className="brand-mark__dot" />
        <span className="brand-mark__dot" />
      </span>
      <span className="flex flex-col">
        <span
          className={`font-[var(--font-headline)] font-extrabold tracking-tight ${
            compact ? "text-[1.02rem]" : "text-[1.15rem]"
          } ${light ? "text-white" : "text-[var(--primary)]"}`}
        >
          Owned Cloud
        </span>
        <span
          className={`text-[0.62rem] font-extrabold uppercase tracking-[0.18em] ${
            light ? "text-slate-400" : "text-[var(--text-muted)]"
          }`}
        >
          Automation & Systems
        </span>
      </span>
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--ink-strong)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{description}</p>
    </div>
  );
}

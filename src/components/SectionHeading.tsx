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
      <p className="eyebrow text-[var(--text-muted)]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[var(--primary)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-[var(--text-muted)]">{description}</p>
    </div>
  );
}

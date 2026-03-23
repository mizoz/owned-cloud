import Link from "next/link";
import { Container } from "@/components/Container";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[rgba(246,241,232,0.82)] backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-sm font-semibold text-white">
            OC
          </span>
          <span className="text-lg font-semibold text-[var(--ink-strong)]">Owned Cloud</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-[var(--muted)] hover:text-[var(--ink-strong)]">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-primary">
          Book a Call
        </Link>
      </Container>
    </header>
  );
}

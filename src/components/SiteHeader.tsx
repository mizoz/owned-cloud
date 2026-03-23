import Link from "next/link";
import { Container } from "@/components/Container";

const links = [
  { href: "/services", label: "Automation" },
  { href: "/about", label: "Vault" },
  { href: "/services", label: "Intelligence" },
  { href: "/contact", label: "Network" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-slate-900">
          Owned Cloud
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link, index) => (
            <Link
              key={`${link.label}-${index}`}
              href={link.href}
              className={`text-[0.68rem] font-extrabold uppercase tracking-[0.16em] transition-colors ${
                index === 0
                  ? "border-b-2 border-emerald-500 pb-1 text-emerald-500"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 lg:inline-flex"
          >
            Secure Login
          </Link>
          <Link href="/contact" className="btn-primary">
            Free 15-Min Audit
          </Link>
        </div>
      </Container>
    </header>
  );
}

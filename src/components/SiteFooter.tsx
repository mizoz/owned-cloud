import Link from "next/link";
import { Container } from "@/components/Container";

const links = [
  { href: "/about", label: "Privacy Policy" },
  { href: "/services", label: "Terms of Service" },
  { href: "/about", label: "Security Architecture" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12 text-slate-400">
      <Container className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="text-lg font-bold text-white">Owned Cloud</div>
          <p className="text-center text-xs tracking-wide md:text-left">
            © 2026 Owned Cloud by ZalaStack. Calgary-based Architectural Intelligence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-xs tracking-wide transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-800 text-slate-400 transition-colors hover:text-emerald-400">
            <span className="material-symbols-outlined text-sm">public</span>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-800 text-slate-400 transition-colors hover:text-emerald-400">
            <span className="material-symbols-outlined text-sm">terminal</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

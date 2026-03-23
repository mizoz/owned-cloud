import Link from "next/link";
import { Container } from "@/components/Container";
import { footerNavigation, siteConfig } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12 text-slate-400">
      <Container className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="text-lg font-bold text-white">Owned Cloud</div>
          <p className="text-center text-xs tracking-wide md:text-left">
            © 2026 {siteConfig.legalName}. Next.js · Supabase · Cloudflare · Calgary
          </p>
          <p className="text-center text-xs tracking-wide md:text-left">
            Trusted automation partner for Calgary and surrounding Alberta businesses.
          </p>
          <Link href={`mailto:${siteConfig.email}`} className="text-xs text-emerald-300 hover:text-emerald-200">
            {siteConfig.email}
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {footerNavigation.map((link) => (
            <Link key={link.label} href={link.href} className="text-xs tracking-wide transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-3">
          <Link
            href="/stack"
            aria-label="View security architecture page"
            className="flex h-8 w-8 items-center justify-center rounded bg-slate-800 text-slate-400 transition-colors hover:text-emerald-400"
          >
            <span className="material-symbols-outlined text-sm">hub</span>
          </Link>
          <Link
            href="/blog"
            aria-label="Read the Owned Cloud blog"
            className="flex h-8 w-8 items-center justify-center rounded bg-slate-800 text-slate-400 transition-colors hover:text-emerald-400"
          >
            <span className="material-symbols-outlined text-sm">article</span>
          </Link>
        </div>
      </Container>
    </footer>
  );
}

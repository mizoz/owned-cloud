"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";
import { primaryNavigation } from "@/lib/constants";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <BrandMark compact />

        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNavigation.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.68rem] font-extrabold uppercase tracking-[0.16em] transition-colors ${
                  active
                    ? "border-b-2 border-emerald-500 pb-1 text-emerald-500"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden lg:inline-flex btn-primary">
            Free Audit
          </Link>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-3">
              {primaryNavigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 text-sm font-semibold text-slate-700"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-slate-200 pt-3">
                <Link href="/contact" className="btn-primary w-full" onClick={() => setOpen(false)}>
                  Book Free Audit
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

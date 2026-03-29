import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";
import { footerNavigationGroups, siteConfig } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-14 text-slate-300">
      <Container className="grid gap-10 lg:grid-cols-[1.15fr_1.85fr]">
        <div className="space-y-5">
          <BrandMark compact light />
          <p className="max-w-md text-sm leading-7 text-slate-400">
            Owned Cloud is the customer-facing automation and business systems brand led by {siteConfig.founderName} in
            Calgary, with {siteConfig.parentBrandName} supporting deeper backend and infrastructure work when the scope
            calls for it.
          </p>
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-emerald-300">
              {siteConfig.email}
            </a>
            {siteConfig.phone ? (
              <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-emerald-300">
                {siteConfig.phone}
              </a>
            ) : null}
            <p className="text-slate-500">{siteConfig.location}</p>
          </div>
          <Link href="/contact" className="btn-primary">
            Book Your Free Audit
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerNavigationGroups.map((group) => (
            <div key={group.title}>
              <p className="eyebrow text-slate-500">{group.title}</p>
              <div className="mt-4 flex flex-col gap-3">
                {group.links.map((link) =>
                  "external" in link && link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm tracking-wide text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm tracking-wide text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs tracking-wide text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>Copyright 2026 {siteConfig.legalName}.</p>
        <p>Practical automation, reporting, and operating systems for Calgary service businesses.</p>
      </Container>
    </footer>
  );
}

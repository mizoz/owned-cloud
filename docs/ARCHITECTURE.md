# Architecture

## Purpose

Owned Cloud is the top-of-funnel authority and conversion site. It needs to rank, explain the offer clearly, and convert visitors into booked audits or contact submissions.

## Application Structure

- `src/app` contains all routes and app-level metadata.
- `src/components` contains the marketing UI primitives and booking/contact components.
- `src/lib/constants.ts` holds shared route, company, and navigation constants.
- `src/lib/seo.ts` centralizes metadata generation and canonical URL handling.
- `src/lib/mdx.tsx` loads blog and case study content from disk and renders MDX with styled components.
- `content/blog` stores editorial content.
- `content/case-studies` stores case studies and proof assets.

## Content Flow

1. MDX files are read from disk at build time.
2. Frontmatter is parsed with `next-mdx-remote/rsc`.
3. Listing pages derive filters and pagination from the parsed metadata.
4. Detail pages use `generateStaticParams` for static generation.

## Conversion Flow

1. Navigation and CTAs route visitors to `/contact`.
2. `/contact` renders the inline Cal.com booking widget when `NEXT_PUBLIC_CAL_LINK` is present.
3. The contact form posts to `/api/contact`.
4. The API route authenticates against Mautic and writes the lead.

## SEO Model

- Route metadata is generated with `buildMetadata`.
- JSON-LD is rendered with `StructuredData`.
- `sitemap.xml` and `robots.txt` are generated from app routes and content.

## Deployment Model

- GitHub `main` is connected to Vercel production.
- Vercel env vars provide Mautic credentials and site-level public values.
- `.vercelignore` excludes local build artifacts from upload.

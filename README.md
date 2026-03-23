# Owned Cloud

Owned Cloud is the public-facing sales and authority site for a Calgary-based automation and private infrastructure practice. It is built with Next.js 16 App Router and deploys to Vercel on pushes to `main`.

## Stack

- Next.js 16.2.1
- React 19
- TypeScript
- Tailwind CSS v4
- MDX content for blog and case studies
- Mautic for lead capture
- Cal.com for inline booking

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create local env:

```bash
cp .env.example .env.local
```

3. Start the app:

```bash
npm run dev
```

4. Build production output:

```bash
npm run build
```

## Route Map

- `/` homepage
- `/services`
- `/about`
- `/contact`
- `/blog`
- `/blog/[slug]`
- `/case-studies`
- `/case-studies/[slug]`
- `/stack`
- `/faq`
- `/privacy`
- `/terms`
- `/sitemap.xml`
- `/robots.txt`

## Content

- Blog posts live in `content/blog`
- Case studies live in `content/case-studies`
- Shared metadata and navigation live in `src/lib/constants.ts`
- SEO helpers live in `src/lib/seo.ts`
- MDX loading and rendering live in `src/lib/mdx.tsx`

## External Integrations

- `POST /api/contact` creates or updates leads in Mautic
- `NEXT_PUBLIC_CAL_LINK` powers the inline booking experience
- `NEXT_PUBLIC_SITE_URL` controls canonical URLs and metadata

## Documentation

- [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)
- [`docs/CONTENT-GUIDE.md`](./docs/CONTENT-GUIDE.md)
- [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md)
- [`docs/SEO-CHECKLIST.md`](./docs/SEO-CHECKLIST.md)

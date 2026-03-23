# SEO Checklist

## Route-Level

- Each route should export metadata through `buildMetadata`.
- Canonical paths should match the public route.
- Titles should be concise and intent-specific.

## Structured Data

- Homepage: `LocalBusiness`
- Blog posts: `Article`
- FAQ page: `FAQPage`

## Content

- Use one primary keyword theme per page.
- Keep excerpts clear; they are reused in metadata and listing cards.
- Add internal links between services, case studies, blog posts, and contact.

## Technical

- Keep `NEXT_PUBLIC_SITE_URL` correct in production.
- Check `sitemap.xml` after new content is added.
- Check `robots.txt` after launch configuration changes.
- Re-run `npm run build` before deploys that touch content or metadata.

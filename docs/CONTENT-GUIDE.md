# Content Guide

## Blog Posts

Create blog posts in `content/blog` using `.mdx`.

Required frontmatter:

```mdx
---
title: "Post title"
slug: "post-slug"
date: "2026-03-23"
excerpt: "Short summary"
author: "Ahmed Zalabany"
tags:
  - Automation
  - Calgary
seoTitle: "Optional SEO title"
seoDescription: "Optional SEO description"
coverImage: "/optional-image.jpg"
---
```

## Case Studies

Create case studies in `content/case-studies`.

Required frontmatter:

```mdx
---
title: "Case study title"
slug: "case-study-slug"
date: "2026-03-23"
excerpt: "Short summary"
client: "Client name or placeholder"
industry: "Real Estate"
services:
  - Lead Automation
  - Dashboards
keyMetric: "20h/week"
keyMetricLabel: "Manual follow-up eliminated"
tags:
  - Automation
  - Calgary
---
```

## Writing Rules

- Keep headlines specific and outcome-focused.
- Use Calgary and Alberta context where true.
- Do not invent compliance claims or quantified results unless defensible.
- Template placeholders are acceptable in case studies, but they should be clearly marked and replaced before paid traffic campaigns.

## Publishing Checklist

1. Add valid frontmatter.
2. Use only MDX-safe comments: `{/* comment */}`.
3. Include at least two `##` headings for table-of-contents generation.
4. Run `npm run build` before pushing.

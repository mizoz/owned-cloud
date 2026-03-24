# AI Agent Instructions — Owned Cloud Website

**Last Updated:** 2026-03-24
**Repository:** mizoz/owned-cloud
**Website:** https://owned-cloud.com

---

## 🎯 Project Overview

**Owned Cloud** is a Calgary-based business automation company. We help companies stop burning capital on manual workflows by architecting private, secure cloud environments.

**What We Sell:**
1. **Workflow Architecture** — Automate manual processes (intake, follow-ups, scheduling)
2. **AI Lead Synthesis** — Automatic lead routing, scoring, nurture sequences
3. **Custom Business Intelligence** — One dashboard for all systems

**NOT:** Hardware installation, NAS boxes, or generic IT support. We're business automation consultants.

---

## 🏗️ Tech Stack

| Component | Technology | Version |
|-----------|------------|---------|
| Framework | Next.js | 16.x (App Router) |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.x + custom config |
| Fonts | Google Fonts (Manrope, Inter) | — |
| Icons | Material Symbols Outlined | — |
| Deployment | Vercel | — |
| Domain | owned-cloud.com | Vercel DNS |

**Key Files:**
- `next.config.ts` — Next.js configuration
- `tailwind.config.ts` — Tailwind + brand colors
- `src/app/` — App Router pages
- `src/components/` — Reusable components
- `src/lib/` — Utilities, MDX helpers, SEO
- `content/` — MDX content (blog posts, case studies)

---

## 🎨 Brand System

**Design Philosophy:** "The Digital Atrium" — Light, air, transparency. No 1px borders. Tonal layering.

### Color Palette (Tailwind Config)
```typescript
colors: {
  primary: '#004bca',        // Owned Cloud Blue
  'primary-container': '#0061ff',
  surface: '#f7f9fb',        // Base background
  'surface-container-low': '#f2f4f6',
  'surface-container-lowest': '#ffffff',
  'on-surface': '#191c1e',   // Text (NOT pure black)
  // ... see tailwind.config.ts for full palette
}
```

### Typography
- **Headlines:** Manrope (Google Fonts)
- **Body:** Inter (Google Fonts)
- **No pure black (#000000)** — use `#191c1e`

### Design Rules
- ❌ NO 1px solid borders (use tonal layering)
- ✅ Use background color shifts for sectioning
- ✅ Vast white space (Spacing Scale tokens 8-16)
- ✅ Glassmorphism for floating overlays
- ✅ Subtle gradients (primary → primary_container at 135°)

**Full Brand Guide:** See `/home/az/business-brain/03-DESIGNS/owned-cloud-branding/DESIGN.md`

---

## 📁 Repository Structure

```
owned-cloud/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (fonts, metadata)
│   │   ├── page.tsx            # Homepage
│   │   ├── services/
│   │   │   └── page.tsx        # Services page
│   │   ├── case-studies/
│   │   │   ├── page.tsx        # Case studies index
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Individual case study
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact form
│   │   ├── terms/
│   │   │   └── page.tsx        # Terms of service
│   │   └── privacy/
│   │       └── page.tsx        # Privacy policy
│   │
│   ├── components/             # Reusable UI components
│   │   ├── Container.tsx       # Max-width container
│   │   ├── SiteHeader.tsx      # Navigation header
│   │   ├── SiteFooter.tsx      # Footer
│   │   ├── ServiceCard.tsx     # Service display card
│   │   ├── CaseStudyCard.tsx   # Case study preview
│   │   ├── RoiEstimator.tsx    # ROI calculator widget
│   │   ├── TrackedLink.tsx     # Analytics link tracking
│   │   └── StructuredData.tsx  # JSON-LD schema
│   │
│   └── lib/                    # Utilities
│       ├── constants.ts        # Site config, service anchors
│       ├── mdx.tsx             # MDX parsing (blog, case studies)
│       ├── seo.ts              # Metadata helpers
│       ├── analytics.ts        # Google Analytics
│       └── public-env.ts       # Public environment variables
│
├── content/                    # MDX source files
│   ├── case-studies/
│   │   ├── building-a-client-portal-that-reduced-support-tickets-by-60-percent-for-a-calgary-clinic.mdx
│   │   ├── eliminating-20-hours-a-week-of-manual-follow-up-for-a-calgary-real-estate-team.mdx
│   │   └── replacing-2800-a-month-in-saas-tools-with-owned-infrastructure-for-a-trades-company.mdx
│   └── blog/                   # Blog posts (future)
│
├── public/                     # Static assets
│   ├── logo.png                # Owned Cloud logo
│   ├── favicon.ico
│   └── og-image.png            # Open Graph social sharing
│
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind + brand colors
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies
└── README.md                   # This file
```

---

## 🚀 Development Setup

### Prerequisites
- Node.js 20+ (`node --version`)
- npm or bun
- Git

### Local Development
```bash
# Clone repo
git clone https://github.com/mizoz/owned-cloud.git
cd owned-cloud

# Install dependencies
npm install

# Run dev server
npm run dev

# Open browser
# http://localhost:3000
```

### Build & Deploy
```bash
# Production build
npm run build

# Start production server
npm start

# Deploy (Vercel handles this automatically)
git push origin main
```

**Deployment:** Vercel auto-deploys on push to `main` branch.

---

## 📝 Content Management

### Adding a Case Study

1. **Create MDX file** in `content/case-studies/`:
```mdx
---
title: "Your Case Study Title"
slug: "your-case-study-slug"
date: "2026-03-24"
excerpt: "One-sentence summary"
client: "Client name (or 'A Calgary business')"
industry: "Industry (e.g., Health / clinic)"
services:
  - "Service 1"
  - "Service 2"
keyMetric: "60%"
keyMetricLabel: "Support call volume reduced"
seoTitle: "SEO title"
seoDescription: "SEO description"
---

## The problem

Describe the client's challenge.

## The approach

What we did to solve it.

## The results

Quantifiable outcomes.
```

2. **Auto-detected** — No code changes needed. MDX is parsed automatically.

3. **Access at:** `/case-studies/your-case-study-slug`

### Adding a Blog Post

Same as case studies, but in `content/blog/`:
```mdx
---
title: "Blog Post Title"
slug: "blog-post-slug"
date: "2026-03-24"
excerpt: "Summary"
author: "Author name"
tags:
  - "automation"
  - "calgary"
---

Content here...
```

---

## 🔧 Common Tasks for AI Agents

### Task: Add New Service Section

**Where:** `src/app/services/page.tsx`

**How:**
1. Find the services array/section
2. Add new service object with:
   - `icon` (Material Symbol name)
   - `title` (Service name)
   - `body` (Description)
   - `href` (Anchor link)
3. Ensure brand colors match (`text-[var(--primary)]`)

**Example:**
```tsx
{
  icon: "psychology",
  iconTone: "text-[var(--secondary)] bg-[rgba(0,108,73,0.05)]",
  title: "AI Lead Synthesis",
  body: "Identify, score, and route leads automatically...",
  href: "#leads"
}
```

---

### Task: Update Brand Colors

**Where:** `tailwind.config.ts`

**How:**
1. Edit color values in `theme.extend.colors`
2. Rebuild: `npm run build`
3. Test locally: `npm run dev`
4. Check all pages for color consistency

**DO NOT:**
- Change color token names (breaks existing components)
- Use pure black (`#000000`) — use `#191c1e`

---

### Task: Add New Page

**Where:** `src/app/[new-page]/page.tsx`

**How:**
1. Create folder: `src/app/new-page/`
2. Create `page.tsx`:
```tsx
import { Container } from "@/components/Container";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NewPage() {
  return (
    <main className="min-h-screen bg-[var(--surface)]">
      <SiteHeader />
      <Container className="py-20">
        <h1 className="text-4xl font-bold text-[var(--on-surface)]">
          Page Title
        </h1>
        {/* Content */}
      </Container>
      <SiteFooter />
    </main>
  );
}
```
3. Add to navigation in `SiteHeader.tsx`
4. Test locally

---

### Task: Update SEO Metadata

**Where:** `src/lib/seo.ts` or individual page `metadata` exports

**How:**
```tsx
export const metadata = {
  title: "Page Title | Owned Cloud",
  description: "Page description (150-160 characters)",
  openGraph: {
    title: "Page Title",
    description: "Description",
    images: ["/og-image.png"],
  },
};
```

**Best Practices:**
- Title: 50-60 characters
- Description: 150-160 characters
- Include primary keyword
- Unique per page

---

## 🎯 Business Context (Critical for AI Agents)

### Target Audience
- **ICP:** Calgary businesses, 3-50 employees
- **Industries:** Real estate, trades, clinics, professional services
- **Pain Points:** Manual workflows, data silos, missed leads

### Tone & Voice
- **Professional but approachable** — Not corporate drone
- **Direct** — No fluff, no "Great question!"
- **Calgary-focused** — Local context matters
- **Value-driven** — Focus on ROI, time savings, cost reduction

### What NOT to Say
- ❌ "We install NAS boxes" (we're automation consultants)
- ❌ "Generic cloud storage" (we build private environments)
- ❌ "IT support" (we're strategic consultants)

### What TO Say
- ✅ "Workflow Architecture"
- ✅ "AI Lead Synthesis"
- ✅ "Custom Business Intelligence"
- ✅ "Private, secure cloud environments"
- ✅ "Calgary-based"

---

## 📊 Current Website Status (2026-03-24)

### owned-cloud.com ✅ LIVE
- **Status:** Production ready
- **Last Deploy:** 2026-03-23
- **URL:** https://owned-cloud.com
- **Hosting:** Vercel
- **Domain:** owned-cloud.com (Vercel DNS)

**Working Pages:**
- ✅ Homepage (3 service pillars, trust signals, case studies)
- ✅ Services (detailed service descriptions)
- ✅ Case Studies (3 case studies, 60% reduction, 20 hrs/week saved)
- ✅ Contact (form + contact info)
- ✅ Terms & Privacy

**Pending:**
- ⏳ Blog section (structure ready, no posts yet)
- ⏳ Phone number (waiting on VOIP verification)
- ⏳ Address (waiting on VOIP verification)

**Known Issues:**
- None currently

---

### getownedcloud.com ✅ LIVE
- **Status:** Production ready
- **Last Deploy:** 2026-03-23
- **URL:** https://getownedcloud.com
- **Hosting:** Vercel

**Purpose:** Cold outreach landing page
**Content:** Fixed-price packages ($800, $2.5K-$5K, Custom)

---

### zalastack.net ✅ LIVE
- **Status:** 80% complete (PHASE 1 & 2 done)
- **URL:** https://zalastack.net
- **Purpose:** Internal NOC dashboard (NOT customer-facing)
- **Auth:** Working
- **Leads:** Working (Mautic sync)
- **Monitoring:** In progress

**Repo:** `/home/az/workspace/sites/zalastack-dashboard`

---

### ownedvault.com ⏳ COMING SOON
- **Status:** Placeholder page
- **Purpose:** Client portal (future)
- **URL:** https://ownedvault.com

---

## 🤖 AI Agent Guidelines

### Before Making Changes

1. **Read this file** (you're doing it now ✅)
2. **Check recent commits:**
   ```bash
   git log --oneline -10
   ```
3. **Understand the brand** — Review `/home/az/business-brain/03-DESIGNS/owned-cloud-branding/DESIGN.md`
4. **Test locally** — Never push untested code
5. **Check business context** — Don't break messaging

### Commit Message Format
```
<type>: <description>

[optional body]

[type: feat, fix, docs, style, refactor, test, chore]
```

**Examples:**
```
feat: add ROI estimator component
fix: correct primary color in service cards
docs: update AI agent instructions
chore: update dependencies
```

### Pull Request Guidelines
(If using PRs instead of direct commits)

**Title:** Clear, concise description
**Description:**
- What changed
- Why it changed
- Testing done
- Screenshots (if UI change)

**Review Checklist:**
- [ ] Brand colors match design system
- [ ] No pure black (#000000)
- [ ] Responsive on mobile
- [ ] SEO metadata updated
- [ ] No console errors
- [ ] Business messaging accurate

---

## 📚 Related Repositories

| Repo | Purpose | URL |
|------|---------|-----|
| **mizoz/owned-cloud** | Main sales site | https://github.com/mizoz/owned-cloud |
| **mizoz/business-brain** | Strategy, plans, designs | https://github.com/mizoz/business-brain |
| **mizoz/zalastack-dashboard** | Internal NOC dashboard | https://github.com/mizoz/zalastack-dashboard |
| **mizoz/lead-gen-pipeline** | Lead scraping tools | https://github.com/mizoz/lead-gen-pipeline |
| **mizoz/EMAILDEBUG** | Email credentials & docs | https://github.com/mizoz/EMAILDEBUG |

---

## 🔐 Environment Variables

### Production (Vercel)
Set in Vercel dashboard:
```
NEXT_PUBLIC_SITE_URL=https://owned-cloud.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Local Development
Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Never commit** `.env.local` or sensitive values.

---

## 🧪 Testing

### Manual Testing Checklist
Before deploying:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Case studies display properly
- [ ] Contact form submits
- [ ] Mobile responsive (test on phone)
- [ ] No console errors
- [ ] Lighthouse score >90

### Automated Testing (Future)
```bash
# Run tests (when implemented)
npm test

# E2E tests (when implemented)
npm run test:e2e
```

---

## 📞 Contact & Support

**Human Contact:** A Z (@zalab8)
**Email:** hello@zalastack.com
**Timezone:** America/Edmonton (MDT)

**For AI Agents:** If unsure about something:
1. Check this file first
2. Review brand guidelines
3. Look at existing code patterns
4. If still unclear, leave a comment in code for human review

---

## 🎯 Quick Reference

### Key Commands
```bash
# Local dev
npm run dev

# Build
npm run build

# Deploy
git push origin main

# Check status
git status
```

### Key Files
```
Brand Colors:     tailwind.config.ts
Homepage:         src/app/page.tsx
Services:         src/app/services/page.tsx
Case Studies:     content/case-studies/*.mdx
Components:       src/components/
```

### Key URLs
```
Production:       https://owned-cloud.com
Local Dev:        http://localhost:3000
Vercel Dashboard: https://vercel.com/dashboard
```

---

**Last Updated:** 2026-03-24
**Maintained By:** A Z (@zalab8)
**Next Review:** After each major update

---

## 🤖 AI Agent Sign-off

**If you're an AI agent reading this:**
- ✅ You now understand the project
- ✅ You know the tech stack
- ✅ You know the brand guidelines
- ✅ You know how to make changes
- ✅ You know what NOT to do

**Before you start coding:**
1. Create a feature branch
2. Make your changes
3. Test locally
4. Commit with clear message
5. Push for human review (or deploy if you have confidence)

**Good luck! 🚀**

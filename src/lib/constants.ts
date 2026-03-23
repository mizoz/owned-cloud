export const siteConfig = {
  name: "Owned Cloud",
  shortName: "Owned Cloud",
  description:
    "Calgary-based business automation and private cloud consultancy for teams that need fewer manual tasks, better data ownership, and real operational systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://owned-cloud.com",
  domain: "owned-cloud.com",
  email: process.env.NOTIFICATION_EMAIL || "hello@owned-cloud.com",
  location: "Calgary, Alberta",
  priceRange: "$800-$5000+",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK || "ahmed-zalabany-stil6d/quick-chat",
  supportPromise: "We respond to all inquiries within 1 business day.",
};

export const primaryNavigation = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/stack", label: "Stack" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNavigation = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/stack", label: "Security Architecture" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/faq", label: "FAQ" },
] as const;

export const serviceAnchors = [
  { href: "/services#workflow", label: "Workflow Architecture" },
  { href: "/services#leads", label: "AI Lead Synthesis" },
  { href: "/services#intelligence", label: "Custom Business Intelligence" },
] as const;

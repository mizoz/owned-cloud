export const siteConfig = {
  name: "Owned Cloud",
  shortName: "Owned Cloud",
  legalName: "Owned Cloud by ZalaStack",
  description:
    "Calgary-based business automation and private cloud consultancy for teams that want less manual work, clearer systems, and more control over their data.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://owned-cloud.com",
  domain: "owned-cloud.com",
  email: process.env.NOTIFICATION_EMAIL || "hello@owned-cloud.com",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "(587) 288-3176",
  location: "Calgary, Alberta",
  serviceRegion: "Calgary and surrounding Alberta businesses",
  priceRange: "$800-$5000+",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK || "ahmed-zalabany-stil6d/quick-chat",
  supportPromise: "We respond to all inquiries within 1 business day.",
  sameAs: [
    process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  ].filter(Boolean),
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
  { href: "/services#leads", label: "Lead Response Systems" },
  { href: "/services#intelligence", label: "Custom Business Intelligence" },
] as const;

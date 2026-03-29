export const siteConfig = {
  name: "Owned Cloud",
  shortName: "Owned Cloud",
  legalName: "Owned Cloud by ZalaStack",
  founderName: "Ahmed Mahmoud",
  founderRole: "Founder",
  description:
    "Founder-led business automation and operating systems for Calgary service businesses that need faster follow-up, cleaner workflows, and clearer reporting.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://owned-cloud.com",
  domain: "owned-cloud.com",
  email: process.env.NOTIFICATION_EMAIL || "hello@owned-cloud.com",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "(587) 288-3176",
  location: "Calgary, Alberta",
  serviceRegion: "Calgary and surrounding Alberta businesses",
  priceRange: "$800-$5000+",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK || "ahmed-zalabany-stil6d/quick-chat",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL || "https://cal.com/ahmed-zalabany-stil6d/quick-chat",
  supportPromise: "We respond to all inquiries within 1 business day.",
  linkedinUrl:
    process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/ahmedmahmoudyyc/",
  parentBrandName: "ZalaStack",
  parentBrandUrl: process.env.NEXT_PUBLIC_PARENT_BRAND_URL || "https://zalastack.com",
  frameBrandName: "FRAME YYC",
  frameBrandUrl: process.env.NEXT_PUBLIC_FRAME_YYC_URL || "https://www.frameyyc.ca",
  sameAs: [process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/ahmedmahmoudyyc/"].filter(
    Boolean,
  ),
};

export const primaryNavigation = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNavigationGroups = [
  {
    title: "Explore",
    links: [
      { href: "/services", label: "Services" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/stack", label: "Technical Stack" },
      { href: "/blog", label: "Blog" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
  {
    title: "Related",
    links: [
      { href: siteConfig.parentBrandUrl, label: siteConfig.parentBrandName, external: true },
      { href: siteConfig.frameBrandUrl, label: siteConfig.frameBrandName, external: true },
      { href: siteConfig.linkedinUrl, label: "Ahmed on LinkedIn", external: true },
    ],
  },
] as const;

export const serviceAnchors = [
  { href: "/services#workflow", label: "Workflow Architecture" },
  { href: "/services#leads", label: "Lead Response Systems" },
  { href: "/services#intelligence", label: "Reporting + Portals" },
] as const;

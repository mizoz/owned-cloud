import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { ClientErrorMonitor } from "@/components/ClientErrorMonitor";
import { StructuredData } from "@/components/StructuredData";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const headline = Manrope({
  subsets: ["latin"],
  variable: "--font-headline",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Owned Cloud | Calgary Automation & Business Systems",
    template: "%s | Owned Cloud",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Owned Cloud | Calgary Automation & Business Systems",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Owned Cloud dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Owned Cloud | Calgary Automation & Business Systems",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone || undefined,
  areaServed: siteConfig.serviceRegion,
  sameAs: siteConfig.sameAs.length ? siteConfig.sameAs : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${headline.variable} ${body.variable} antialiased`}>
        <StructuredData data={organizationSchema} />
        <AnalyticsScripts />
        <ClientErrorMonitor />
        {children}
      </body>
    </html>
  );
}

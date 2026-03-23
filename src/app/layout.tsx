import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
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
    default: "Owned Cloud · Calgary Business Automation & Private Cloud",
    template: "%s | Owned Cloud",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Owned Cloud · Calgary Business Automation & Private Cloud",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/dashboard-preview.svg",
        width: 1200,
        height: 630,
        alt: "Owned Cloud dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Owned Cloud · Calgary Business Automation & Private Cloud",
    description: siteConfig.description,
    images: ["/dashboard-preview.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${headline.variable} ${body.variable} antialiased`}>{children}</body>
    </html>
  );
}

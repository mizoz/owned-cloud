import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
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
  metadataBase: new URL("https://owned-cloud.com"),
  title: {
    default: "Owned Cloud | Calgary Business Systems & Automation",
    template: "%s | Owned Cloud",
  },
  description:
    "Calgary business systems and automation for small teams that want fewer subscriptions, faster follow-up, and infrastructure they control.",
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

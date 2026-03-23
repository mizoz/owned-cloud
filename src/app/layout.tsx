import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Owned Cloud",
  description: "Private cloud infrastructure for Calgary businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
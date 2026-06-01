import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne, JetBrains_Mono } from "next/font/google";

import { site } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Websites, Google Presence & Local Growth for Local Businesses`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "local business website design",
    "Google Business Profile optimization",
    "social media for small business",
    "booking system setup",
    "Google review cards NFC",
    "re-engagement automation",
    "CRM setup small-to-medium business",
    "local digital agency",
    site.name,
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Digital Presence for Local Businesses`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Digital Presence for Local Businesses`,
    description: site.description,
  },
  alternates: {
    canonical: site.url,
  },
icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}

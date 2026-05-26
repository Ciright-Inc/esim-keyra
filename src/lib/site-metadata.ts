import type { Metadata, Viewport } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://esim.keyra.ie";

export const siteConfig = {
  name: "KEYRA eSIM",
  tagline: "Trusted Connectivity for the AI Era.",
  domain: "esim.keyra.ie",
  url: siteUrl,
  parentBrand: "KEYRA",
  parentUrl: "https://keyra.ie",
} as const;

const keywords = [
  "global eSIM",
  "enterprise eSIM",
  "trusted eSIM",
  "telecom identity",
  "secure connectivity",
  "IoT eSIM",
  "eSIM API",
  "enterprise mobile connectivity",
  "hardware-rooted authentication",
  "telecom trust platform",
];

export function getRootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${siteConfig.name} — ${siteConfig.tagline}`,
      template: `%s · ${siteConfig.name}`,
    },
    description:
      "KEYRA eSIM delivers telecom-grade global connectivity with deterministic identity, consent, and hardware-rooted trust for enterprises, devices, and AI-era infrastructure.",
    keywords,
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: siteUrl,
      siteName: siteConfig.name,
      title: "Global Connectivity Built on Trust",
      description:
        "Identity-aware mobile connectivity — enterprise provisioning, IoT, and trusted telecom APIs.",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.tagline,
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "/" },
  };
}

export const siteViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
  width: "device-width",
  initialScale: 1,
};

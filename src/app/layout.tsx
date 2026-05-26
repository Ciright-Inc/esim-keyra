import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { SiteShell } from "@/components/layout/SiteShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { KeyraSessionProvider } from "@/contexts/KeyraSessionContext";
import { KEYRA_FAVICON_SRC } from "@/lib/keyraBrandAssets";
import { getRootMetadata, siteViewport } from "@/lib/site-metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...getRootMetadata(),
  icons: {
    icon: KEYRA_FAVICON_SRC,
    shortcut: KEYRA_FAVICON_SRC,
    apple: KEYRA_FAVICON_SRC,
  },
};
export const viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IE"
      data-keyra-lane="consumer"
      className={`${inter.variable} ${montserrat.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <JsonLd />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="ds-site flex min-h-full min-w-0 flex-col font-sans" suppressHydrationWarning>
        <KeyraSessionProvider>
          <Providers>
            <SiteShell footer={<SiteFooter />}>{children}</SiteShell>
          </Providers>
        </KeyraSessionProvider>
      </body>
    </html>
  );
}

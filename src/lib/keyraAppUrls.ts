/**
 * Keyra ecosystem URLs — aligned with Keyra/web `keyraAppUrls.ts`.
 */

function trimSlash(s: string): string {
  return s.replace(/\/+$/, "");
}

export function keyraGetStartedUrl(): string {
  return trimSlash(process.env.NEXT_PUBLIC_GET_STARTED_URL?.trim() || "https://get-started.keyra.ie");
}

export function keyraPlatformAppUrl(): string {
  return trimSlash(process.env.NEXT_PUBLIC_SIMSECURE_URL?.trim() || "https://app.keyra.ie");
}

export function keyraDeveloperPortalUrl(): string {
  return trimSlash(process.env.NEXT_PUBLIC_DEVELOPER_URL?.trim() || "https://developer.keyra.ie");
}

export function keyraMyAccountUrl(): string {
  return trimSlash(process.env.NEXT_PUBLIC_MY_ACCOUNT_URL?.trim() || "https://myaccount.keyra.ie");
}

export function keyraSettingsPortalUrl(): string {
  return trimSlash(process.env.NEXT_PUBLIC_SETTINGS_URL?.trim() || "https://setting.keyra.ie");
}

export function keyraAffiliatesUrl(): string {
  return trimSlash(process.env.NEXT_PUBLIC_AFFILIATES_URL?.trim() || "https://affiliate.keyra.ie");
}

export function keyraPressUrl(): string {
  return trimSlash(process.env.NEXT_PUBLIC_PRESS_URL?.trim() || "https://press.keyra.ie");
}

export function keyraGovernmentsUrl(): string {
  return trimSlash(process.env.NEXT_PUBLIC_GOVERNMENTS_URL?.trim() || "https://governments.keyra.ie");
}

export function keyraPartnersUrl(): string {
  return trimSlash(process.env.NEXT_PUBLIC_PARTNERS_URL?.trim() || "https://partners.keyra.ie");
}

export function keyraEsimUrl(): string {
  return trimSlash(
    process.env.NEXT_PUBLIC_ESIM_URL?.trim() ||
      process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
      "https://esim.keyra.ie",
  );
}

export function keyraMarketingPublicOrigin(): string {
  return trimSlash(
    process.env.NEXT_PUBLIC_KEYRA_MARKETING_ORIGIN?.trim() ||
      process.env.NEXT_PUBLIC_KEYRA_SITE_URL?.trim() ||
      "https://keyra.ie",
  );
}

export function keyraMarketingOrigin(): string {
  return trimSlash(
    process.env.NEXT_PUBLIC_KEYRA_SITE_URL?.trim() ||
      process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
      keyraMarketingPublicOrigin(),
  );
}

export function keyraMarketingPath(path: string): string {
  const base = keyraMarketingOrigin();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export type KeyraEcosystemAppLink = {
  id: string;
  label: string;
  description: string;
  href: string;
  internalPath?: `/${string}`;
};

export function getKeyraEcosystemAppLinks(): KeyraEcosystemAppLink[] {
  return [
    {
      id: "get-started",
      label: "Get Started",
      description: "Enrollment & verification",
      href: keyraGetStartedUrl(),
    },
    {
      id: "platform",
      label: "Keyra",
      description: "Platform & product hub",
      href: keyraPlatformAppUrl(),
    },
    {
      id: "esim",
      label: "eSIM",
      description: "Trusted global connectivity",
      href: keyraEsimUrl(),
      internalPath: "/",
    },
    {
      id: "developer",
      label: "Developer",
      description: "APIs & documentation",
      href: keyraDeveloperPortalUrl(),
    },
    {
      id: "my-account",
      label: "My Account",
      description: "Account portal",
      href: keyraMyAccountUrl(),
    },
    {
      id: "settings",
      label: "Settings",
      description: "Settings app",
      href: keyraSettingsPortalUrl(),
    },
    {
      id: "affiliates",
      label: "Affiliates",
      description: "Affiliate program",
      href: keyraAffiliatesUrl(),
    },
    {
      id: "press",
      label: "Press",
      description: "Press room",
      href: keyraPressUrl(),
    },
    {
      id: "trust",
      label: "Trust",
      description: "Trust & assurance",
      href: keyraMarketingPath("/trust"),
    },
    {
      id: "governments",
      label: "Governments",
      description: "Government programs",
      href: keyraGovernmentsUrl(),
    },
    {
      id: "partners",
      label: "Partners",
      description: "Partner programs",
      href: keyraPartnersUrl(),
    },
  ];
}

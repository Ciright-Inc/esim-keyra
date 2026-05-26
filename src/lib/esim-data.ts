export type PlatformCard = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  icon: string;
};

export const platformCards: PlatformCard[] = [
  {
    id: "global-esim",
    title: "Global eSIM Access",
    summary: "Instant activation across partner carriers worldwide.",
    detail:
      "Provision identity-bound profiles with deterministic routing, regional policy, and carrier-grade failover — without legacy SIM logistics.",
    icon: "globe",
  },
  {
    id: "enterprise",
    title: "Enterprise Provisioning",
    summary: "Fleet-scale activation with policy and audit controls.",
    detail:
      "Bulk orchestration, role-based access, compliance logs, and remote lifecycle management for distributed workforces and devices.",
    icon: "building",
  },
  {
    id: "iot",
    title: "IoT Connectivity",
    summary: "Secure onboarding for sensors, gateways, and edge devices.",
    detail:
      "Hardware-rooted identity, consent-aware data paths, and telemetry-ready provisioning for industrial and smart infrastructure.",
    icon: "chip",
  },
  {
    id: "telecom-api",
    title: "Telecom APIs",
    summary: "REST and GraphQL surfaces for orchestration teams.",
    detail:
      "Carrier integrations, webhook events, and modular SDKs designed for telecom infrastructure — not consumer app wrappers.",
    icon: "api",
  },
  {
    id: "identity",
    title: "Identity Verification",
    summary: "Deterministic trust beyond device IMEI checks.",
    detail:
      "Bind users, applications, and transactions to verified sessions with KEYRA identity architecture at the network edge.",
    icon: "shield",
  },
  {
    id: "device-auth",
    title: "Trusted Device Authentication",
    summary: "SIM-bound and hardware-attested device trust.",
    detail:
      "Authenticate the device, the user, and the session — aligned with zero-trust and GSMA-ready eUICC standards.",
    icon: "device",
  },
  {
    id: "consent",
    title: "Consent Management",
    summary: "Consent-first connectivity and data governance.",
    detail:
      "Granular consent layers for roaming, analytics, and third-party access — GDPR-aligned by architecture, not policy PDFs.",
    icon: "consent",
  },
  {
    id: "ai-agent",
    title: "AI-Agent Connectivity",
    summary: "Verified agents on trusted mobile infrastructure.",
    detail:
      "Provision autonomous agents with identity-aware sessions, fraud signals, and institutional-grade audit trails.",
    icon: "agent",
  },
];

export const coverageStats = [
  { label: "Supported countries", value: "190+", key: "countries" },
  { label: "Operator integrations", value: "480+", key: "operators" },
  { label: "Avg. activation time", value: "< 90s", key: "activation" },
  { label: "Global uptime", value: "99.97%", key: "uptime" },
] as const;

export const trustStackSteps = [
  { id: "user", label: "User" },
  { id: "identity", label: "KEYRA Identity" },
  { id: "device", label: "Trusted Device" },
  { id: "provision", label: "eSIM Provisioning" },
  { id: "carrier", label: "Carrier Network" },
  { id: "session", label: "Verified Session" },
] as const;

export const enterpriseFeatures = [
  "Bulk provisioning",
  "Telecom orchestration",
  "IoT deployments",
  "Secure onboarding",
  "Audit trails",
  "Role-based permissions",
  "Identity verification",
  "Compliance logs",
] as const;

export const securityItems = [
  {
    title: "GSMA-ready architecture",
    body: "Aligned with industry eSIM and remote provisioning frameworks.",
  },
  {
    title: "eUICC standards support",
    body: "Standards-based profile management and secure element orchestration.",
  },
  {
    title: "Encrypted provisioning",
    body: "End-to-end protected profile delivery and activation paths.",
  },
  {
    title: "Zero-trust principles",
    body: "Never trust, always verify — at device, user, and session layers.",
  },
  {
    title: "Hardware-rooted trust",
    body: "Attestation and SIM-bound identity for high-assurance deployments.",
  },
  {
    title: "SIM-bound identity",
    body: "Cryptographic binding between subscriber identity and connectivity.",
  },
  {
    title: "GDPR compliance",
    body: "Privacy-by-design data minimization and regional controls.",
  },
  {
    title: "Consent-first architecture",
    body: "Consent enforced in provisioning flows, not bolted on afterward.",
  },
] as const;

export type UseCase = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  icon: string;
};

export const useCases: UseCase[] = [
  {
    id: "travelers",
    title: "Travelers",
    summary: "Borderless data with verified identity sessions.",
    detail: "Activate in minutes with roaming transparency and fraud-aware trust signals.",
    icon: "plane",
  },
  {
    id: "enterprises",
    title: "Enterprises",
    summary: "Fleet connectivity with governance and audit.",
    detail: "Centralized provisioning, policy controls, and enterprise SSO readiness.",
    icon: "building",
  },
  {
    id: "iot",
    title: "IoT",
    summary: "Mass device onboarding at carrier scale.",
    detail: "Secure profile delivery for sensors, gateways, and industrial edge.",
    icon: "chip",
  },
  {
    id: "automotive",
    title: "Automotive",
    summary: "Connected vehicle trust and OTA-ready profiles.",
    detail: "Identity-bound connectivity for telematics and in-vehicle services.",
    icon: "car",
  },
  {
    id: "smart-cities",
    title: "Smart Cities",
    summary: "Municipal infrastructure on verified networks.",
    detail: "Consent-aware connectivity for public systems and civic IoT.",
    icon: "city",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    summary: "Autonomous agents on attested mobile sessions.",
    detail: "Provision agents with institutional audit and device trust scores.",
    icon: "agent",
  },
  {
    id: "remote-workforce",
    title: "Remote Workforce",
    summary: "Distributed teams with enterprise policy.",
    detail: "Remote activation, RBAC, and compliance logging for global staff.",
    icon: "users",
  },
  {
    id: "events",
    title: "Event Infrastructure",
    summary: "Temporary high-density connectivity.",
    detail: "Rapid bulk provisioning for venues, conferences, and broadcast.",
    icon: "event",
  },
  {
    id: "ticketing",
    title: "Secure Ticketing",
    summary: "Identity-linked access and anti-fraud connectivity.",
    detail: "Bind tickets, devices, and sessions for high-assurance entry systems.",
    icon: "ticket",
  },
  {
    id: "operators",
    title: "Telecom Operators",
    summary: "Partner-grade orchestration and APIs.",
    detail: "Carrier onboarding, revenue share models, and wholesale integrations.",
    icon: "tower",
  },
];

export const analyticsMetrics = [
  { label: "Activation analytics", desc: "Funnel, region, and carrier breakdowns." },
  { label: "Region analytics", desc: "Roaming and latency intelligence." },
  { label: "Carrier analytics", desc: "Partner performance and SLA views." },
  { label: "Onboarding funnel", desc: "Identity and provisioning conversion." },
  { label: "API usage", desc: "Quota, errors, and integration health." },
  { label: "Device trust score", desc: "Attestation and fraud signal aggregation." },
  { label: "Provisioning events", desc: "Real-time orchestration audit stream." },
  { label: "Fraud indicators", desc: "Anomaly detection and policy triggers." },
] as const;

/** Full in-page sections — mobile nav + scroll rail */
export const navLinks = [
  { href: "#platform", label: "Platform" },
  { href: "#coverage", label: "Coverage" },
  { href: "#trust", label: "Trust Layer" },
  { href: "#enterprise", label: "Enterprise" },
  { href: "#carriers", label: "Carriers" },
  { href: "#developers", label: "Developers" },
  { href: "#security", label: "Security" },
  { href: "#use-cases", label: "Use Cases" },
] as const;

/** Desktop header — keep sparse like keyra.ie (avoids overlap with logo / CTAs) */
export const headerNavLinks = [
  { href: "#platform", label: "Platform" },
  { href: "#coverage", label: "Coverage" },
  { href: "#trust", label: "Trust" },
  { href: "#enterprise", label: "Enterprise" },
  { href: "/developers", label: "Developers" },
] as const;

export const footerColumns = [
  {
    title: "Product",
    links: [
      { href: "/activate", label: "Activate eSIM" },
      { href: "/enterprise", label: "Enterprise Platform" },
      { href: "/developers", label: "Developer Docs" },
      { href: "/login", label: "Sign in" },
      { href: "#pricing", label: "Pricing" },
      { href: "/admin", label: "Admin (CMS)" },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "#security", label: "Security & Compliance" },
      { href: "#trust", label: "KEYRA Trust Layer" },
      { href: "https://keyra.ie", label: "Identity Framework" },
      { href: "/developers#webhooks", label: "API Access" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "https://keyra.ie", label: "KEYRA" },
      { href: "/enterprise#contact", label: "Enterprise Sales" },
      { href: "mailto:support@keyra.ie", label: "Support" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "#telecom-compliance", label: "Telecom Compliance" },
    ],
  },
] as const;

export const codeSnippetExample = `// Provision identity-aware eSIM profile
const profile = await keyra.esim.provision({
  deviceId: "dev_8f2a…",
  identitySession: session.id,
  region: "EU",
  plan: "enterprise-global",
  consent: { roaming: true, analytics: false },
});

console.log(profile.activationQr);`;

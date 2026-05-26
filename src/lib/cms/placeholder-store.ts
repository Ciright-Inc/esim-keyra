import type { CmsCollections } from "@/lib/cms/types";

/**
 * In-memory CMS placeholder — replace with database / admin API.
 */
export const cmsStore: CmsCollections = {
  carriers: [],
  countries: [],
  plans: [],
  inventory: [],
  provisioningEvents: [],
  supportTickets: [],
  auditLog: [],
};

export const cmsModules = [
  "carrier-management",
  "country-management",
  "plan-management",
  "esim-inventory",
  "provisioning-apis",
  "customer-analytics",
  "fraud-monitoring",
  "support-tickets",
  "enterprise-onboarding",
  "audit-logging",
] as const;

/**
 * CMS-ready placeholders for future admin / carrier console integration.
 */

export type CarrierRecord = {
  id: string;
  name: string;
  mccMnc?: string;
  regions: string[];
  status: "active" | "onboarding" | "inactive";
};

export type CountryRecord = {
  iso: string;
  name: string;
  roaming: boolean;
  carriers: string[];
};

export type PlanRecord = {
  id: string;
  name: string;
  dataGb: number;
  validityDays: number;
  enterprise: boolean;
};

export type EsimInventoryItem = {
  iccid: string;
  status: "available" | "assigned" | "activated" | "suspended";
  planId?: string;
};

export type ProvisioningEvent = {
  id: string;
  type: "activate" | "suspend" | "transfer" | "revoke";
  timestamp: string;
  deviceTrustScore?: number;
};

export type SupportTicket = {
  id: string;
  subject: string;
  priority: "low" | "normal" | "high";
  status: "open" | "pending" | "closed";
};

export type AuditLogEntry = {
  id: string;
  actor: string;
  action: string;
  resource: string;
  timestamp: string;
};

export type CmsCollections = {
  carriers: CarrierRecord[];
  countries: CountryRecord[];
  plans: PlanRecord[];
  inventory: EsimInventoryItem[];
  provisioningEvents: ProvisioningEvent[];
  supportTickets: SupportTicket[];
  auditLog: AuditLogEntry[];
};

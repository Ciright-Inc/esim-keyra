import type { Router } from "express";

const cmsModules = [
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
];

export function registerAdmin(router: Router) {
  router.get("/admin/modules", (_req, res) => {
    res.json({ modules: cmsModules });
  });

  router.get("/support/tickets", (_req, res) => {
    res.json({
      tickets: [{ id: "t1", subject: "Enterprise activation", status: "open", priority: "high" }],
    });
  });

  router.get("/audit", (_req, res) => {
    res.json({
      entries: [
        {
          id: "a1",
          actor: "system",
          action: "provision.queued",
          resource: "profile",
          timestamp: new Date().toISOString(),
        },
      ],
    });
  });
}

import type { Router } from "express";

export function registerProvisioning(router: Router) {
  router.get("/plans", (_req, res) => {
    res.json({
      plans: [
        { id: "travel-5", name: "Global Travel 5GB", dataGb: 5, enterprise: false },
        { id: "enterprise-global", name: "Enterprise Global", dataGb: 50, enterprise: true },
      ],
    });
  });

  router.get("/inventory", (_req, res) => {
    res.json({
      inventory: [
        { iccid: "8901…0001", status: "available" },
        { iccid: "8901…0002", status: "assigned" },
      ],
    });
  });

  router.post("/provisioning", (req, res) => {
    res.status(202).json({
      jobId: `prov_${Date.now()}`,
      status: "queued",
      received: req.body,
    });
  });
}

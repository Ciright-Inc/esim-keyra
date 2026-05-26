import type { Router } from "express";

export function registerCarriers(router: Router) {
  router.get("/carriers", (_req, res) => {
    res.json({
      carriers: [
        { id: "mno_eu_01", name: "Partner MNO EU", status: "active", regions: ["EU"] },
        { id: "mno_apac_01", name: "Partner MNO APAC", status: "onboarding", regions: ["APAC"] },
      ],
    });
  });

  router.post("/carriers/onboarding", (req, res) => {
    res.status(202).json({
      applicationId: `onb_${Date.now()}`,
      status: "received",
      payload: req.body,
      message: "Carrier onboarding placeholder — wholesale integration queue",
    });
  });
}

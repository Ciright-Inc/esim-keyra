import type { Router } from "express";

export function registerAnalytics(router: Router) {
  router.get("/analytics", (_req, res) => {
    res.json({
      metrics: {
        activations24h: 1284,
        regionsActive: 42,
        apiCalls24h: 98210,
        avgDeviceTrustScore: 0.94,
        fraudFlags24h: 3,
      },
    });
  });

  router.get("/fraud", (_req, res) => {
    res.json({
      indicators: [
        { id: "f1", type: "velocity", severity: "low", region: "EU" },
        { id: "f2", type: "device_mismatch", severity: "medium", region: "APAC" },
      ],
    });
  });
}

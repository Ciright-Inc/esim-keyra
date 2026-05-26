import type { Router } from "express";

export function registerCoverage(router: Router) {
  router.get("/coverage", (_req, res) => {
    res.json({
      stats: { countries: "190+", operators: "480+", activation: "< 90s", uptime: "99.97%" },
      countries: [
        { iso: "IE", name: "Ireland", roaming: true },
        { iso: "US", name: "United States", roaming: true },
      ],
    });
  });
}

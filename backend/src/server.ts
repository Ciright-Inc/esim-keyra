import cors from "cors";
import express from "express";
import { config } from "./lib/config.js";
import { registerAdmin } from "./modules/admin.js";
import { registerAnalytics } from "./modules/analytics.js";
import { registerCarriers } from "./modules/carriers.js";
import { registerCoverage } from "./modules/coverage.js";
import { registerProvisioning } from "./modules/provisioning.js";

const app = express();
const v1 = express.Router();

app.use(cors({ origin: config.corsOrigin }));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "esim-keyra-api", version: "0.1.0" });
});

registerCarriers(v1);
registerCoverage(v1);
registerProvisioning(v1);
registerAnalytics(v1);
registerAdmin(v1);

app.use("/v1", v1);

app.listen(config.port, () => {
  console.log(`KEYRA eSIM API listening on http://localhost:${config.port}`);
});

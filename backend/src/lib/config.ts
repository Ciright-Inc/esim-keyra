export const config = {
  port: Number(process.env.API_PORT ?? 4040),
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:3040",
  keyraAuthIssuer: process.env.KEYRA_OAUTH_ISSUER ?? "https://auth.keyra.ie",
  telecomApiUrl: process.env.TELECOM_PROVISIONING_API_URL ?? "",
};

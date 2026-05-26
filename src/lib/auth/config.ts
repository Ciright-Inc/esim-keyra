/**
 * KEYRA authentication framework — placeholders for OAuth, enterprise SSO, SIM-bound auth.
 */

export const keyraAuthConfig = {
  issuer: process.env.KEYRA_OAUTH_ISSUER ?? "https://auth.keyra.ie",
  clientId: process.env.KEYRA_OAUTH_CLIENT_ID ?? "esim-keyra-client",
  scopes: ["openid", "profile", "esim.provision", "identity.verify"],
  enterpriseSsoMetadataUrl:
    process.env.ENTERPRISE_SSO_METADATA_URL ?? "https://auth.keyra.ie/sso/saml/metadata",
  deviceBoundAuthEnabled: true,
  simBoundIdentityPlaceholder: true,
} as const;

export const authProviders = [
  { id: "keyra", label: "KEYRA Identity", type: "oauth" },
  { id: "enterprise_sso", label: "Enterprise SSO", type: "saml" },
  { id: "device_bound", label: "Device-bound session", type: "sim" },
] as const;

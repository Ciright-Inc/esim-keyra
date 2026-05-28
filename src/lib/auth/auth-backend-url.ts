function resolveAuthBackendUrl(raw: string | undefined): string {
  const trimmed = String(raw ?? "").trim();
  if (!trimmed) return "http://localhost:4000";
  if (trimmed.startsWith("/")) {
    // For server-to-server proxying, relative paths are ambiguous; require an absolute base.
    return "http://localhost:4000";
  }
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed.replace(/\/$/, "");
  }
  return `https://${trimmed.replace(/\/$/, "")}`;
}

export const AUTH_BACKEND_URL = resolveAuthBackendUrl(
  process.env.SIMSECURE_AUTH_BACKEND_URL ??
    process.env.CIRIGHT_PRO_AUTH_BACKEND_URL ??
    process.env.NEXT_PUBLIC_SIMSECURE_AUTH_BACKEND_URL ??
    process.env.NEXT_PUBLIC_CIRIGHT_PRO_AUTH_BACKEND_URL,
);


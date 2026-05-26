const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "/api/v1";

export async function apiFetch<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
  if (!res.ok) {
    throw new Error(`API ${res.status}: ${path}`);
  }
  return res.json() as Promise<T>;
}

export const esimApi = {
  carriers: () => apiFetch<{ carriers: unknown[] }>("/carriers"),
  carrierOnboarding: (body: Record<string, unknown>) =>
    apiFetch<{ applicationId: string }>("/carriers/onboarding", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  coverage: () => apiFetch<{ countries: unknown[]; stats: unknown }>("/coverage"),
  plans: () => apiFetch<{ plans: unknown[] }>("/plans"),
  inventory: () => apiFetch<{ inventory: unknown[] }>("/inventory"),
  provision: (body: Record<string, unknown>) =>
    apiFetch<{ jobId: string }>("/provisioning", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  analytics: () => apiFetch<{ metrics: unknown }>("/analytics"),
  fraud: () => apiFetch<{ indicators: unknown[] }>("/fraud"),
  graphql: (query: string) =>
    apiFetch<unknown>("/graphql", {
      method: "POST",
      body: JSON.stringify({ query }),
    }),
  webhooks: () => apiFetch<{ events: string[] }>("/webhooks"),
  audit: () => apiFetch<{ entries: unknown[] }>("/audit"),
  supportTickets: () => apiFetch<{ tickets: unknown[] }>("/support/tickets"),
  adminModules: () => apiFetch<{ modules: string[] }>("/admin/modules"),
};

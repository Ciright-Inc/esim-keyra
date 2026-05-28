"use client";

import {
  createContext,
  useEffect,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type KeyraSessionUser = {
  phoneE164?: string;
  displayName?: string | null;
};

type KeyraSessionContextValue = {
  user: KeyraSessionUser | null;
  refresh: () => Promise<void>;
  logout: () => Promise<void>;
  headerLabel: string | null;
};

const KeyraSessionContext = createContext<KeyraSessionContextValue | null>(null);

const AUTH_CHANNEL = "keyra-auth";

type RawAuthSessionResponse =
  | {
      authenticated?: boolean;
      user?: unknown;
    }
  | unknown;

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object";
}

function toSessionUser(raw: unknown): KeyraSessionUser | null {
  if (!isRecord(raw)) return null;
  const anyUser = raw;
  const phone =
    (typeof anyUser.phoneE164 === "string" && anyUser.phoneE164) ||
    (typeof anyUser.phone === "string" && anyUser.phone) ||
    (typeof anyUser.phone_number === "string" && anyUser.phone_number) ||
    undefined;
  const displayName =
    (typeof anyUser.displayName === "string" && anyUser.displayName) ||
    (typeof anyUser.fullName === "string" && anyUser.fullName) ||
    (typeof anyUser.name === "string" && anyUser.name) ||
    null;
  if (!phone && !displayName) return null;
  return { phoneE164: phone, displayName };
}

function toHeaderLabel(user: KeyraSessionUser | null): string | null {
  if (!user) return null;
  const label = String(user.displayName ?? "").trim();
  if (label) return label;
  const phone = String(user.phoneE164 ?? "").trim();
  return phone || null;
}

/** Session hydration for esim.keyra.ie via same-origin `/api/auth/*` proxy. */
export function KeyraSessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<KeyraSessionUser | null>(null);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/session", {
        method: "GET",
        credentials: "include",
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      });

      if (!res.ok) {
        setUser((prev) => (prev !== null ? null : prev));
        return;
      }

      const json = (await res.json()) as RawAuthSessionResponse;
      if (!isRecord(json)) {
        setUser((prev) => (prev !== null ? null : prev));
        return;
      }

      const authenticated = Boolean(json.authenticated);
      const nextUser = authenticated ? toSessionUser(json.user) : null;
      setUser((prev) =>
        prev?.phoneE164 === nextUser?.phoneE164 && prev?.displayName === nextUser?.displayName
          ? prev
          : nextUser,
      );
    } catch {
      setUser((prev) => (prev !== null ? null : prev));
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => void refresh(), 0);
    return () => clearTimeout(t);
  }, [refresh]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") void refresh();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [refresh]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const schedulePoll = () => {
      clearInterval(interval);
      if (document.visibilityState === "visible") {
        interval = setInterval(() => void refresh(), 15_000);
      }
    };
    schedulePoll();
    document.addEventListener("visibilitychange", schedulePoll);
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", schedulePoll);
    };
  }, [refresh]);

  useEffect(() => {
    let channel: BroadcastChannel | undefined;
    try {
      channel = new BroadcastChannel(AUTH_CHANNEL);
      channel.onmessage = (e) => {
        if (e?.data?.type === "logout") setUser(null);
        if (e?.data?.type === "refresh") void refresh();
      };
    } catch {
      // BroadcastChannel not supported
    }
    return () => channel?.close();
  }, [refresh]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!event?.data || typeof event.data !== "object") return;
      const data = event.data as { type?: unknown };
      if (data.type !== "keyra:session-updated") return;
      void refresh();
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [refresh]);

  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch {
      // ignore network errors on logout
    } finally {
      setUser(null);
    }
    try {
      new BroadcastChannel(AUTH_CHANNEL)?.postMessage({ type: "logout" });
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo<KeyraSessionContextValue>(
    () => ({
      user,
      refresh,
      logout,
      headerLabel: toHeaderLabel(user),
    }),
    [user, refresh, logout],
  );

  return (
    <KeyraSessionContext.Provider value={value}>{children}</KeyraSessionContext.Provider>
  );
}

export function useKeyraSession() {
  const ctx = useContext(KeyraSessionContext);
  if (!ctx) {
    throw new Error("useKeyraSession must be used within KeyraSessionProvider");
  }
  return ctx;
}

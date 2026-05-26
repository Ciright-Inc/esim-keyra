"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
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

/** Minimal session for esim.keyra.ie — extend with KEYRA auth when wired. */
export function KeyraSessionProvider({ children }: { children: ReactNode }) {
  const refresh = useCallback(async () => {}, []);
  const logout = useCallback(async () => {}, []);

  const value = useMemo<KeyraSessionContextValue>(
    () => ({
      user: null,
      refresh,
      logout,
      headerLabel: null,
    }),
    [refresh, logout],
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

"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { LauncherApp } from "@/lib/launcherApp";
import { fetchKeyraLauncherApps } from "@/lib/fetchKeyraLauncherApps";
import { getKeyraEcosystemAppLinks } from "@/lib/keyraAppUrls";
import { KEYRA_APP_MARK_SRC } from "@/lib/keyraBrandAssets";
import { keyraLauncherPublicApiUrl } from "@/lib/keyraLauncher";

function NineDotTriggerIcon() {
  return (
    <svg
      className="keyra-app-launcher__trigger-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="5" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="19" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="19" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5" cy="19" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="19" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="19" cy="19" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function AppTileIcon({ label }: { label: string }) {
  return (
    <span className="keyra-app-launcher__tile-icon" aria-hidden>
      <Image
        src={KEYRA_APP_MARK_SRC}
        alt=""
        fill
        sizes="40px"
        className="keyra-app-launcher__tile-mark"
        unoptimized
      />
      <span className="keyra-app-launcher__tile-badge">
        {label.slice(0, 2).toUpperCase()}
      </span>
    </span>
  );
}

function staticApps(): LauncherApp[] {
  return getKeyraEcosystemAppLinks().map((a) => ({
    id: a.id,
    label: a.label,
    description: a.description,
    href: a.href,
  }));
}

export function KeyraAppLauncher() {
  const [open, setOpen] = useState(false);
  const [apps, setApps] = useState<LauncherApp[]>(staticApps);
  const [loading, setLoading] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const fetchInFlight = useRef(false);

  const refresh = useCallback(async () => {
    if (fetchInFlight.current) return;
    fetchInFlight.current = true;
    setLoading(true);
    try {
      const next = await fetchKeyraLauncherApps();
      setApps(next);
    } finally {
      setLoading(false);
      fetchInFlight.current = false;
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    void refresh();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, refresh]);

  return (
    <div className="keyra-app-launcher z-[300]" ref={wrapRef}>
      <button
        type="button"
        className="keyra-app-launcher__trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Keyra apps"
        data-open={open ? "true" : "false"}
        data-launcher-api={keyraLauncherPublicApiUrl()}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((wasOpen) => !wasOpen);
        }}
      >
        <NineDotTriggerIcon />
      </button>
      {open ? (
        <div className="keyra-app-launcher__panel" role="menu" aria-label="Keyra apps" aria-busy={loading}>
          <p className="keyra-app-launcher__title">
            Keyra apps
            {loading ? <span aria-hidden> …</span> : null}
          </p>
          <div className="keyra-app-launcher-scroll-wrap">
            <ul className="keyra-app-launcher-scroll">
              {apps.map((item) => (
                <li key={item.id} className="keyra-app-launcher__grid-item">
                  <a
                    role="menuitem"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${item.label} — ${item.description}`}
                    className="keyra-app-launcher__tile"
                    onClick={() => setOpen(false)}
                  >
                    <AppTileIcon label={item.label} />
                    <span className="keyra-app-launcher__tile-label">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}

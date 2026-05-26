"use client";

import Link from "next/link";
import { AccountMenu } from "./AccountMenu";
import { KeyraAppLauncher } from "./KeyraAppLauncher";
import { EsimMobileNav } from "./EsimMobileNav";
import { KeyraLogo } from "@/components/brand/KeyraLogo";
import { useKeyraSession } from "@/contexts/KeyraSessionContext";
import { headerNavLinks } from "@/lib/esim-data";

const navLinkClass =
  "rounded-[var(--ds-radius-pill)] px-3 py-2 text-sm font-medium text-[var(--ds-body)] transition-colors hover:bg-[var(--ds-canvas-soft)] hover:text-[var(--ds-ink)] lg:px-3.5";

export function EsimSiteHeader() {
  const { user } = useKeyraSession();

  return (
    <header className="keyra-site-header-shell z-[var(--keyra-z-header)] overflow-visible">
      <div className="relative mx-auto flex h-14 w-full min-w-0 max-w-[var(--ds-page-max)] items-center gap-3 px-[var(--ds-page-x)] lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-6">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center lg:col-start-1"
          aria-label="KEYRA eSIM home"
        >
          <KeyraLogo variant="header" showWordmark={false} />
        </Link>

        <nav
          className="relative z-0 hidden min-w-0 lg:col-start-2 lg:flex lg:justify-center"
          aria-label="Primary"
        >
          <ul className="flex max-w-full flex-nowrap items-center justify-center gap-0.5">
            {headerNavLinks.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link href={item.href} className={navLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center justify-end gap-2 sm:gap-2.5 lg:col-start-3 lg:ml-0">
          <KeyraAppLauncher />
          <AccountMenu />
          <EsimMobileNav />

          <div
            className="hidden items-center gap-2 sm:flex"
            aria-label="Sign in and activate"
          >
            {!user ? (
              <Link href="/login" className="ds-btn-tertiary !px-3">
                Sign in
              </Link>
            ) : null}
            <Link href="/activate" className="ds-btn-primary is-sm">
              Activate eSIM
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { cmsModules } from "@/lib/cms/placeholder-store";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-surface="dashboard" className="min-h-screen">
      <header className="border-b border-[var(--ds-hairline-strong)] bg-[var(--ds-surface-card)] px-6 py-4">
        <p className="ds-caption-uppercase">CMS Admin</p>
        <h1 className="ds-display-xl text-[1.375rem]">KEYRA eSIM Console</h1>
        <p className="ds-body-sm mt-1">Placeholder admin — connect auth + database</p>
      </header>
      <div className="mx-auto flex max-w-7xl gap-8 px-6 py-8">
        <aside className="hidden w-56 shrink-0 md:block">
          <nav className="space-y-1">
            <Link
              href="/admin"
              className="block rounded-[var(--ds-radius-md)] px-3 py-2 text-sm font-medium text-[var(--ds-ink)] hover:bg-[var(--ds-canvas-soft)]"
            >
              Overview
            </Link>
            {cmsModules.map((mod) => (
              <Link
                key={mod}
                href={`/admin/${mod}`}
                className="block rounded-[var(--ds-radius-md)] px-3 py-2 text-xs text-[var(--ds-body)] hover:bg-[var(--ds-canvas-soft)] hover:text-[var(--ds-ink)]"
              >
                {mod.replace(/-/g, " ")}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { AuthProviderButtons } from "@/components/auth/AuthProviderButtons";
import { LoginReturnRefresh } from "@/components/auth/LoginReturnRefresh";
import { PageShell } from "@/components/ui/PageShell";

export const metadata: Metadata = {
  title: "Sign in",
  description: "KEYRA identity — OAuth, enterprise SSO, and device-bound authentication.",
};

export default function LoginPage() {
  return (
    <PageShell
      eyebrow="KEYRA Identity"
      title="Sign in"
      description="Authenticate users, devices, and enterprise sessions before eSIM provisioning."
    >
      <LoginReturnRefresh />
      <div className="mx-auto max-w-md">
        <AuthProviderButtons />
      </div>
    </PageShell>
  );
}

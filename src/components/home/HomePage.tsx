import { HeroSection } from "@/components/sections/HeroSection";
import { PlatformOverview } from "@/components/sections/PlatformOverview";
import { GlobalCoverageMap } from "@/components/sections/GlobalCoverageMap";
import { TrustLayerSection } from "@/components/sections/TrustLayerSection";
import { EnterprisePlatform } from "@/components/sections/EnterprisePlatform";
import { DeveloperSection } from "@/components/sections/DeveloperSection";
import { SecurityCompliance } from "@/components/sections/SecurityCompliance";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { AnalyticsTelemetry } from "@/components/sections/AnalyticsTelemetry";
import { PricingPlaceholder } from "@/components/sections/PricingPlaceholder";
import { CarrierOnboardingSection } from "@/components/sections/CarrierOnboardingSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PlatformOverview />
      <GlobalCoverageMap />
      <TrustLayerSection />
      <EnterprisePlatform />
      <CarrierOnboardingSection />
      <DeveloperSection />
      <SecurityCompliance />
      <UseCasesSection />
      <AnalyticsTelemetry />
      <PricingPlaceholder />
    </>
  );
}

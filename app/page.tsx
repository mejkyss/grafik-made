import { HeroSection } from "@/components/home/hero-section"
import { TabsSection } from "@/components/home/tabs-section"
import { TargetAudienceSection } from "@/components/home/target-audience-section"
import { CollaborationSection } from "@/components/home/collaboration-section"
import { ModernToolsSection } from "@/components/home/modern-tools-section"
import { ManualShowcaseSection } from "@/components/home/manual-showcase-section"
import { CollaborationStepsSection } from "@/components/home/collaboration-steps-section"
import { PortfolioTeaserSection } from "@/components/home/portfolio-teaser-section"
import { ContactCtaSection } from "@/components/home/contact-cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TabsSection />
      <TargetAudienceSection />
      <ModernToolsSection />
      <ManualShowcaseSection />
      <CollaborationStepsSection />
      <CollaborationSection />
      <PortfolioTeaserSection />
      <ContactCtaSection />
    </>
  )
}

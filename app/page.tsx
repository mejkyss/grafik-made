import Image from "next/image"
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
      <section className="relative isolate overflow-hidden">
        <Image
          aria-hidden="true"
          src="/hero-background-27-03.png"
          alt=""
          width={2560}
          height={931}
          priority
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-auto w-full -translate-y-[7.2%]"
        />

        <div className="relative z-10">
          <HeroSection />
          <TabsSection />
        </div>
      </section>
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

import type { Metadata } from "next"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { PageShell } from "@/components/layout/page-shell"

export const metadata: Metadata = {
  title: "Moje práce",
  description:
    "Ukázky realizovaných projektů v oblasti tiskových dat, katalogů, kalendářů, personifikace a produktové prezentace.",
}

export default function PortfolioPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <PageShell>
        <div className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Moje práce
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Výběr z realizovaných projektů z oblasti tisku, výroby a produktové prezentace.
          </p>
        </div>

        <PortfolioGrid />
      </PageShell>
    </div>
  )
}

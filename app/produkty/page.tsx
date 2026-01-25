import type { Metadata } from "next"
import { products } from "@/lib/data"
import { ProductsGrid } from "@/components/products/products-grid"
import { QuickPrintCatalog } from "@/components/products/quick-print-catalog"

export const metadata: Metadata = {
  title: "Rychlé tiskové produkty",
  description:
    "Kontrola tiskových dat, příprava PDF pro tisk, personifikované tiskoviny a produktová prezentace.",
}

export default function ProductsPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Rychlé tiskové produkty
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Připravené služby s jasným výstupem a orientační cenou. Ideální pro jednorázové zakázky.
          </p>
        </div>

        <ProductsGrid />

        <QuickPrintCatalog />

        <div className="mt-12 p-6 bg-muted/50 rounded-2xl">
          <p className="text-sm text-muted-foreground text-center">
            Cena se odvíjí od rozsahu a podkladů. Konkrétní cenovou nabídku obdržíte po zaslání zadání.
          </p>
        </div>
      </div>
    </div>
  )
}

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

        {/* Product Showcase Video */}
        <section className="mt-16 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Ukázka produktů
          </h2>
          <div className="bg-gradient-to-br from-primary/5 via-background to-primary/10 rounded-3xl border border-border overflow-hidden p-6 sm:p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Podívejte se na ukázku našich tiskových produktů a jejich možností. Video prezentuje různé formáty, materiály a techniky tisku.
                </p>
                <p className="text-sm text-muted-foreground">
                  Od vizitek a letáků až po katalogy a personalizované produkty. Všechny výrobky jsou připraveny s důrazem na kvalitu a detail.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden bg-black">
                <div className="aspect-[9/16] w-full max-w-md mx-auto">
                  <iframe
                    src="https://www.youtube.com/embed/SaX2LJizNfs"
                    title="Ukázka tiskových produktů"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 p-6 bg-muted/50 rounded-2xl">
          <p className="text-sm text-muted-foreground text-center">
            Cena se odvíjí od rozsahu a podkladů. Konkrétní cenovou nabídku obdržíte po zaslání zadání.
          </p>
        </div>
      </div>
    </div>
  )
}

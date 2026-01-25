import type { Metadata } from "next"
import Link from "next/link"
import { services } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ServicesGrid } from "@/components/services/services-grid"
import { CollaborationStepsSection } from "@/components/home/collaboration-steps-section"
import { ArrowRight, Briefcase, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Služby",
  description:
    "Tisková data, katalogy, kalendáře, personifikace, technické podklady a produktová prezentace.",
}

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Služby
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Pomáhám firmám převádět grafické návrhy do funkčních, vyrobitelných a bezchybných výstupů.
          </p>
        </div>

        <ServicesGrid />
      </div>

      <CollaborationStepsSection />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="mt-16 sm:mt-20">
          <div className="bg-card rounded-3xl border border-border p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Spolupráce
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-muted/50 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Projektově</h3>
                <p className="text-muted-foreground text-sm">
                  Jednorázové zakázky s jasně definovaným rozsahem a výstupem.
                </p>
              </div>
              <div className="p-6 bg-muted/50 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Paušálem</h3>
                <p className="text-muted-foreground text-sm">
                  Pravidelná spolupráce s garantovanou kapacitou a prioritou.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-8">
              Podle rozsahu a termínu. Vždy dopředu řeknu, co je součástí a co bude výstup.
            </p>

            <Button asChild size="lg" className="rounded-2xl">
              <Link href="/kontakt">
                Poptat spolupráci
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

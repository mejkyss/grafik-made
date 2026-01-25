"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion"
import { Globe, ArrowRight } from "lucide-react"

export function WebServiceSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-gradient-to-br from-primary/5 via-background to-primary/10 rounded-3xl border border-border p-8 sm:p-12">
            <div className="max-w-3xl">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Tvorba webu na míru
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Vytvořím vám moderní web, který vypadá skvěle a zároveň funguje. Firemní web, portfolio, landing page nebo jednoduchý katalog služeb.
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  Co dostanete:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    web na míru podle vašeho oboru a cíle
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    portfolio nebo ukázky realizací
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    základní SEO nastavení
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    indexaci a napojení na Google (Search Console)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    rychlost, responzivitu, moderní vzhled
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    možnost doplnit články a sekci ke stažení
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                <div>
                  <p className="text-2xl font-bold text-primary">
                    Cena již od 4 000 Kč
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Přesná cena se odvíjí od rozsahu a podkladů.
                  </p>
                </div>
              </div>

              <Button asChild size="lg" className="rounded-2xl">
                <Link href="/kontakt?typ=web">
                  Poptat tvorbu webu
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

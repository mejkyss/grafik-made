"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion"

const trustChips = [
  "25+ let praxe",
  "tisk + výroba + montáž",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Content */}
          <FadeIn>
            <div className="max-w-4xl">
              {/* Large Logo/Brand Name */}
              <div className="mb-4">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-muted-foreground/60 leading-none">
                  EXTER/D
                </h1>
                <p className="mt-2 text-base sm:text-lg text-muted-foreground">
                  externí technický grafik
                  <br />
                  pro tisk a výrobu
                </p>
              </div>

              {/* Main Headline */}
              <h2 className="mt-12 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Od návrhu až po funkční výstup
                <br />– bez chyby, bez zdržení
              </h2>

              {/* Description */}
              <div className="mt-6 space-y-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p className="whitespace-nowrap overflow-x-auto">
                  Pomáhám firmám převádět grafické návrhy do funkčních, vyrobitelných a bezchybných výstupů.
                </p>
                <p className="whitespace-nowrap overflow-x-auto">
                  Pracuji tam, kde se potkává design, tisk, výroba a realita – a kde často vznikají chyby, zdržení a zbytečné náklady.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button variant="default" asChild size="lg" className="rounded-full">
                  <Link href="/moje-prace">Moje práce</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
                  <Link href="/produkty">Rychlé tiskové produkty</Link>
                </Button>
              </div>

              {/* Trust Chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {trustChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center px-3 py-1.5 rounded-md bg-transparent text-foreground text-sm font-medium border-0"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

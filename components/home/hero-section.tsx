"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion"
import { Camera, Package, ShoppingBag, ArrowRight } from "lucide-react"

const trustChips = [
  "25+ let praxe",
  "tisk + výroba + montáž",
]

const transformationSteps = [
  { label: "Surový podklad", icon: Camera, description: "Vstupní materiál" },
  { label: "Čistý produkt", icon: Package, description: "Zpracování" },
  { label: "Prodejní prezentace", icon: ShoppingBag, description: "Finální výstup" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="relative">
          {/* Content - Left Side */}
          <FadeIn>
            <div className="max-w-4xl">
              {/* Headline with Logo */}
              <div className="flex items-center gap-4 sm:gap-6">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1] lg:text-5xl flex-1">
                  Od návrhu až po funkční výstup – bez chyb, bez zdržení
                </h1>
                
                {/* Logo - Aligned with Title */}
                <div className="hidden lg:flex items-center flex-shrink-0">
                  <Image
                    src="/images/EXTER_D_logotyp_cropped.png"
                    alt="EXTER/D - externí technický grafik pro tisk a výrobu"
                    width={480}
                    height={256}
                    className="h-[4.5rem] w-auto object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 space-y-2 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Pomáhám firmám převádět grafické návrhy do funkčních, vyrobitelných a bezchybných výstupů.
                </p>
                <p>
                  Pracuji tam, kde se potkává design, tisk, výroba a realita – a kde často vznikají chyby, zdržení a zbytečné náklady.
                </p>
              </div>

              {/* Mobile Logo */}
              <div className="mt-8 lg:hidden flex justify-center">
                <Image
                  src="/images/EXTER_D_logotyp_cropped.png"
                  alt="EXTER/D - externí technický grafik pro tisk a výrobu"
                  width={480}
                  height={256}
                  className="w-full max-w-xs h-auto object-contain"
                  priority
                />
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button variant="default" asChild size="lg" className="rounded-2xl">
                  <Link href="/moje-prace">Moje práce</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl bg-transparent">
                  <Link href="/produkty">Rychlé tiskové produkty</Link>
                </Button>
              </div>

              {/* Trust Chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {trustChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
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

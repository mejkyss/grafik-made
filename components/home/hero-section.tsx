"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion"
import { Camera, Package, ShoppingBag, ArrowRight } from "lucide-react"

const trustChips = [
  "25+ let praxe",
  "tisk + výroba + montáž",
  "externě bez administrativy",
]

const transformationSteps = [
  { label: "Surový podklad", icon: Camera, description: "Vstupní materiál" },
  { label: "Čistý produkt", icon: Package, description: "Zpracování" },
  { label: "Prodejní prezentace", icon: ShoppingBag, description: "Finální výstup" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Content */}
        <FadeIn>
          <div className="max-w-3xl mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight text-balance">
              Od návrhu až po funkční výstup – bez chyb, bez zdržení
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed">
              Pomáhám firmám převádět grafické návrhy do funkčních, vyrobitelných a bezchybných výstupů.
            </p>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Pracuji tam, kde se potkává design, tisk, výroba a realita – a kde často vznikají chyby, zdržení a zbytečné náklady.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <Link href="/moje-prace">Moje práce</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl bg-transparent">
                <Link href="/produkty">Produkty k objednání</Link>
              </Button>
            </div>

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

        {/* Image */}
        <FadeIn delay={0.2}>
          <div className="relative mx-auto max-w-4xl">
            <div className="rounded-3xl overflow-hidden border border-border shadow-lg bg-card">
              <Image
                src="/images/foto-20voxell.png"
                alt="Workflow: Od produktové fotografie přes zpracování po finální prezentaci"
                width={1600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="mt-6 text-sm text-center text-muted-foreground">
              Produktová fotografie → Zpracování → Finální prezentace
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

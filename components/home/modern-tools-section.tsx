"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion"
import { Sparkles, ArrowRight } from "lucide-react"

export function ModernToolsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-gradient-to-br from-primary/5 via-background to-primary/10 rounded-3xl border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="p-8 sm:p-12">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Moderní nástroje
                </h2>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Používám moderní technologie a AI nástroje, které mi umožňují být efektivnější a tvořit kvalitněji. Od automatizace opakujících se úkolů až po kreativní řešení komplexních problémů.
                </p>

                <div className="mb-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Automatizace:</span> Zrychlení pracovních procesů a eliminace chyb
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Kreativita:</span> Nové způsoby řešení designových problémů
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Kvalita:</span> Vyšší standardy výstupů a přesnější detaily
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Efektivita:</span> Lepší čas a cena pro vás
                    </p>
                  </div>
                </div>

                <Button asChild size="lg" className="rounded-2xl">
                  <Link href="/sluzby">
                    Podívat se na služby
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* Video */}
              <div className="relative hidden lg:block rounded-2xl overflow-hidden bg-black">
                <div className="aspect-[9/16] w-full max-w-md mx-auto">
                  <iframe
                    src="https://www.youtube.com/embed/SaX2LJizNfs"
                    title="Modern tools demonstration"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

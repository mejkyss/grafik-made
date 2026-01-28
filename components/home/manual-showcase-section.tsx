"use client"

import { FadeIn } from "@/components/motion"
import { FileText } from "lucide-react"

export function ManualShowcaseSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-gradient-to-br from-primary/5 via-background to-primary/10 rounded-3xl border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="p-8 sm:p-12">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Vytvořit manuál na míru? Žádný problém.
                </h2>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Podívejte se na ukázku tvorby manuálů a grafických realizací. Video zachycuje zrychlený proces od vstupních podkladů až po finální tisková data.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Komplexní sazba:</span> Od návrhu po tiskové PDF
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Technické manuály:</span> Přesná zpracování s důrazem na detail
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Grafické realizace:</span> Katalogy, brožury a prezentační materiály
                    </p>
                  </div>
                </div>
              </div>

              {/* Video */}
              <div className="relative p-8 sm:p-12 lg:p-0 lg:pr-12">
                <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl">
                  <div className="aspect-[9/16] w-full max-w-md mx-auto">
                    <iframe
                      src="https://www.youtube.com/embed/SaX2LJizNfs"
                      title="Ukázka tvorby manuálů a grafických realizací"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

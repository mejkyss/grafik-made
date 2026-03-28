"use client"

import { FadeIn } from "@/components/motion"
import { FileText } from "lucide-react"

const shortVideos = [
  {
    id: "SaX2LJizNfs",
    title: "Ukázka tvorby manuálu",
    badge: "Manuál",
  },
  {
    id: "GEbU8-H3zZE",
    title: "Video short: tiskové workflow",
    badge: "Short",
  },
  {
    id: "jXnHKdDM15E",
    title: "Video short: realizace a výstupy",
    badge: "Short",
  },
]

export function ManualShowcaseSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-gradient-to-br from-primary/5 via-background to-primary/10 rounded-3xl border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="p-8 sm:p-12">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Vytvořit manuál na míru? Žádný problém.
                </h2>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Video ukázky grafického manuálu, který byl vytvořen na zakázku pro dodržování grafických postupů v tiskárně.
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

              <div className="relative p-8 sm:p-12 lg:py-12 lg:pl-0 lg:pr-12">
                <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]">
                  {shortVideos.map((video) => (
                    <div
                      key={video.id}
                      className="min-w-[220px] max-w-[240px] flex-1 rounded-[28px] border border-border/70 bg-background/90 p-3 shadow-xl shadow-primary/10"
                    >
                      <div className="mb-3 flex items-center justify-between gap-3 px-1">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                          {video.badge}
                        </span>
                      </div>
                      <div className="overflow-hidden rounded-[22px] bg-black">
                        <div className="aspect-[9/16] w-full">
                          <iframe
                            src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                            className="h-full w-full"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Doplněno o nové YouTube Shorts ukázky k původnímu videu.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

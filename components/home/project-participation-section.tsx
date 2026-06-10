"use client"

import { FadeIn } from "@/components/motion"
import { PlaySquare } from "lucide-react"

export function ProjectParticipationSection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-8 sm:mb-10">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 sm:h-16 sm:w-16">
              <PlaySquare className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Projekty, jichž jsem součástí
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-black shadow-xl shadow-primary/10">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/hlAiN8T3fOI?rel=0"
                title="Projekty, jichž jsem součástí"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

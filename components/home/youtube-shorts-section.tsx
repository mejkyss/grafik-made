"use client"

import { FadeIn } from "@/components/motion"
import { PlaySquare } from "lucide-react"

const shortVideos = [
  {
    id: "jXnHKdDM15E",
    title: "Video short: realizace a výstupy",
  },
]

export function YoutubeShortsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-8 sm:mb-10">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <PlaySquare className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              YouTube Shorts
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Krátké ukázky realizací, workflow a výstupů z praxe.
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]">
            {shortVideos.map((video) => (
              <div
                key={video.id}
                className="min-w-[220px] max-w-[240px] flex-1 rounded-[28px] border border-border/70 bg-background p-3 shadow-xl shadow-primary/10"
              >
                <div className="mb-3 px-1">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Short
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
        </FadeIn>
      </div>
    </section>
  )
}

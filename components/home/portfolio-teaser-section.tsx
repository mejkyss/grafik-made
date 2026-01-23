"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion"
import { projects } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function PortfolioTeaserSection() {
  const featuredProjects = projects.slice(0, 6)

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Ukázky práce
              </h2>
              <p className="text-muted-foreground">
                Výběr z realizovaných projektů
              </p>
            </div>
            <Button asChild variant="ghost" className="w-fit">
              <Link href="/moje-prace" className="group">
                Zobrazit vše
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featuredProjects.map((project) => (
            <FadeInStaggerItem key={project.slug}>
              <Link
                href={`/moje-prace/${project.slug}`}
                className="group block h-full"
              >
                <article className="h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary/20">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </article>
              </Link>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import type { Project } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion"
import {
  FileText,
  AlertTriangle,
  Lightbulb,
  Package,
  CheckSquare,
  Calendar,
  Folder,
  Target,
  ArrowRight,
} from "lucide-react"

interface ProjectDetailProps {
  project: Project
}

const sectionIcons = {
  zadani: FileText,
  coHrozilo: AlertTriangle,
  reseni: Lightbulb,
  vystup: Package,
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article>
      <FadeIn>
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.intro}
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="p-4 bg-card rounded-2xl border border-border">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Folder className="w-4 h-4" />
              <span className="text-sm">Typ zakázky</span>
            </div>
            <p className="font-medium text-foreground">{project.typZakazky}</p>
          </div>
          <div className="p-4 bg-card rounded-2xl border border-border">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Target className="w-4 h-4" />
              <span className="text-sm">Výstup</span>
            </div>
            <p className="font-medium text-foreground">{project.vystupMeta}</p>
          </div>
          <div className="p-4 bg-card rounded-2xl border border-border">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Rok</span>
            </div>
            <p className="font-medium text-foreground">{project.rok}</p>
          </div>
        </div>
      </FadeIn>

      <div className="space-y-8 mb-12">
        <FadeIn delay={0.2}>
          <section className="p-6 bg-card rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Zadání</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{project.zadani}</p>
          </section>
        </FadeIn>

        <FadeIn delay={0.25}>
          <section className="p-6 bg-card rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Co hrozilo</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{project.coHrozilo}</p>
          </section>
        </FadeIn>

        <FadeIn delay={0.3}>
          <section className="p-6 bg-card rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Řešení</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{project.reseni}</p>
          </section>
        </FadeIn>

        <FadeIn delay={0.35}>
          <section className="p-6 bg-card rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Výstup</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{project.vystup}</p>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          <section className="p-6 bg-card rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <CheckSquare className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Checklist</h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>
      </div>

      <FadeIn delay={0.45}>
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6">Galerie</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <div key={index} className="space-y-2">
                <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary/20">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.5}>
        <div className="p-8 bg-primary/5 rounded-2xl text-center">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Chci podobný výstup
          </h3>
          <p className="text-muted-foreground mb-6">
            Máte podobný projekt? Ozvěte se mi a probereme možnosti spolupráce.
          </p>
          <Button asChild size="lg" className="rounded-2xl">
            <Link href="/kontakt">
              Poptat spolupráci
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </FadeIn>
    </article>
  )
}

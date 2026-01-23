"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion"
import { Award, Printer, Users, Zap, Shield, Cpu, ArrowRight } from "lucide-react"

const credibilityBlocks = [
  { label: "25+ let praxe", icon: Award },
  { label: "tisk, výroba, montáž", icon: Printer },
  { label: "dlouhodobá externí opora", icon: Users },
]

const workPrinciples = [
  { title: "Jasnost", description: "Srozumitelná komunikace a transparentní postup.", icon: Zap },
  { title: "Méně chyb", description: "Důkladná kontrola v každé fázi projektu.", icon: Shield },
  { title: "Rychlost", description: "Efektivní workflow a dodržování termínů.", icon: Zap },
]

export function AboutContent() {
  return (
    <article>
      <FadeIn>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          O mně
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Pomáhám firmám převádět grafické návrhy do funkčních, vyrobitelných a bezchybných výstupů. 
            Pracuji tam, kde se potkává design, tisk, výroba a realita a kde často vznikají chyby, 
            zdržení a zbytečné náklady.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Specializuji se na technickou grafiku, přípravu tiskových dat a produktovou prezentaci. 
            Díky více než 25 letům praxe rozumím celému procesu od návrhu až po finální realizaci 
            a dokážu předcházet problémům dříve, než nastanou.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {credibilityBlocks.map((block) => (
            <div
              key={block.label}
              className="p-6 bg-card rounded-2xl border border-border text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <block.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-foreground">{block.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Jak pracuji</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {workPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="p-6 bg-card rounded-2xl border border-border"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <principle.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.3}>
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Moderní nástroje</h2>
          <div className="space-y-8">
            <div className="rounded-3xl overflow-hidden border border-border shadow-lg bg-card">
              <Image
                src="/images/foto-20voxell.png"
                alt="Workflow: Od produktové fotografie přes zpracování po finální prezentaci"
                width={1600}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-center text-muted-foreground">
              Produktová fotografie → Zpracování → Finální prezentace
            </p>
            <div className="p-6 bg-card rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    AI moduly v praxi
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Využívám nejnovější AI nástroje pro optimalizaci workflow a zvýšení efektivity 
                    při realizaci designových zakázek. Nejde o nahrazení odbornosti, ale o její 
                    rozšíření tam, kde to dává smysl.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="mt-16 p-8 bg-primary/5 rounded-2xl text-center">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Máte zájem o spolupráci?
          </h3>
          <p className="text-muted-foreground mb-6">
            Ozvěte se mi a probereme možnosti.
          </p>
          <Button asChild size="lg" className="rounded-2xl">
            <Link href="/kontakt">
              Kontakt
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </FadeIn>
    </article>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Články",
  description:
    "Krátké praktické články k tisku, výrobě, přípravě dat a častým chybám.",
}

const articles = [
  {
    slug: "5-nejcastejsich-chyb-v-tiskovych-datech",
    title: "5 nejčastějších chyb v tiskových datech",
    date: "2024-03-15",
    readTime: "5 min",
    excerpt: "Jaké chyby se v tiskových podkladech opakují nejčastěji a jak se jim vyhnout. Praktický přehled s konkrétními příklady.",
    category: "Tisková data"
  },
  {
    slug: "jak-poznam-ze-foto-ma-dostatecne-rozliseni",
    title: "Jak poznám, že foto má dostatečné rozlišení pro tisk?",
    date: "2024-03-10",
    readTime: "4 min",
    excerpt: "Jednoduchý návod, jak ověřit, zda je fotografie vhodná pro tisk v konkrétním formátu. Bez složitých vzorečků.",
    category: "Příprava dat"
  },
  {
    slug: "barevnost-cmyk-vs-rgb",
    title: "CMYK vs RGB: kdy použít který barevný prostor",
    date: "2024-03-05",
    readTime: "6 min",
    excerpt: "Proč jsou barvy v tisku jiné než na obrazovce a jak správně připravit data pro tisk i web.",
    category: "Barevnost"
  },
  {
    slug: "spadavky-proc-jsou-dulezite",
    title: "Spadávky: proč jsou důležité a jak je správně nastavit",
    date: "2024-02-28",
    readTime: "4 min",
    excerpt: "Co jsou spadávky, k čemu slouží a jaké problémy můžou nastat, když chybí. S praktickými příklady.",
    category: "Tisková data"
  },
  {
    slug: "personifikace-jak-na-to",
    title: "Personifikace tiskovin: jak správně připravit databázi",
    date: "2024-02-20",
    readTime: "7 min",
    excerpt: "Praktický návod na přípravu dat pro variabilní tisk. Co kontrolovat, jak strukturovat databázi a čemu se vyhnout.",
    category: "Personifikace"
  },
  {
    slug: "prectiste-si-pred-odesl-anim-do-tisku",
    title: "Přečtěte si před odesláním do tisku: finální checklist",
    date: "2024-02-15",
    readTime: "5 min",
    excerpt: "Kompletní kontrolní seznam všeho, co je potřeba zkontrolovat před odesláním dat do tiskárny.",
    category: "Kontrola"
  }
]

export default function ArticlesPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Články
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Krátké praktické články k tisku, výrobě, přípravě dat a častým chybám. Bez omáčky, rovnou k věci.
          </p>
        </div>

        <div className="grid gap-6">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="p-6 sm:p-8 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString('cs-CZ', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                <span>Připravujeme</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted/50 rounded-2xl">
          <p className="text-sm text-muted-foreground text-center">
            Články jsou postupně doplňovány. Pokud máte nápad na téma, které by vás zajímalo, napište mi na{" "}
            <a href="mailto:jirdokoupil@gmail.com" className="text-primary hover:underline">
              jirdokoupil@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

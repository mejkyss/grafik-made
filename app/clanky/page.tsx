"use client"

import type { Metadata } from "next"
import { ExpandableArticle } from "@/components/article/expandable-article"

// Note: Metadata is not available in client components, but this page is now client-side for interactivity
const articles = [
  {
    slug: "technicka-priprava-grafickych-dat",
    title: "Technická příprava grafických dat pro výstavní realizace",
    date: "2026-01-27",
    readTime: "7 min",
    excerpt: "Jak převádím grafické podklady do plně vyrobitelného stavu. Od návrhu k bezchybným výrobním podkladům, které fungují ve 100% kvalitě.",
    category: "Technická grafika",
    published: true,
    content: `
      <h3>Od návrhu k vyrobitelnému řešení</h3>
      <p>Mou specializací je převod takových grafických podkladů do plně vyrobitelného stavu ve 100% kvalitě. Pracuji s daty, která často slouží spíše jako „surovina", a upravuji je tak, aby byla technicky správná, přehledná a bezpečná pro další kroky výroby.</p>
      
      <p>Cílem není pouze „opravit grafiku", ale vytvořit funkční výrobní podklady, se kterými může bez problémů pracovat tiskárna, výrobce 3D komponent i realizační tým na místě.</p>

      <h3>Přehledné grafické souhrny jako základ realizace</h3>
      <p>Součástí mé práce je tvorba grafických souhrnů, které slouží jako:</p>
      <ul>
        <li>podklady pro tisk jednotlivých částí stánku,</li>
        <li>specifikace materiálů a počtů kusů,</li>
        <li>přehled pro výrobu atypických nebo 3D prvků,</li>
        <li>orientační mapa pro umístění grafiky při stavbě stánku.</li>
      </ul>
      
      <p>Jednotlivé výstupy jsou jasně označené, okótované a doplněné o popis materiálů i specifické požadavky klienta. Díky tomu mají všichni zúčastnění k dispozici stejná, srozumitelná a kontrolovatelná data.</p>

      <h3>Kontrola jako prevence chyb</h3>
      <p>Zásadní součástí procesu je následná kontrola souhrnů ze strany objednatele a realizátora. Tento krok výrazně snižuje riziko chyb při výrobě, minimalizuje dodatečné náklady a zajišťuje, že výsledná realizace odpovídá původnímu záměru.</p>

      <h3>Zkušenosti z praxe</h3>
      <p>Dlouhodobě spolupracuji s firmami, které zajišťují kompletní design a realizaci výstavních stánků. Díky tomu znám typické problémy, které v tomto oboru vznikají, i místa, kde se chyby nejčastěji přenášejí dál do výroby.</p>

      <p>Mým cílem je být technickým partnerem, který propojuje grafický návrh s realitou výroby a pomáhá udržet celý proces přehledný, efektivní a bez zbytečných komplikací.</p>
    `
  },
  {
    slug: "5-nejcastejsich-chyb-v-tiskovych-datech",
    title: "5 nejčastějších chyb v tiskových datech",
    date: "2024-03-15",
    readTime: "5 min",
    excerpt: "Jaké chyby se v tiskových podkladech opakují nejčastěji a jak se jim vyhnout. Praktický přehled s konkrétními příklady.",
    category: "Tisková data",
    published: false,
    content: ""
  },
  {
    slug: "jak-poznam-ze-foto-ma-dostatecne-rozliseni",
    title: "Jak poznám, že foto má dostatečné rozlišení pro tisk?",
    date: "2024-03-10",
    readTime: "4 min",
    excerpt: "Jednoduchý návod, jak ověřit, zda je fotografie vhodná pro tisk v konkrétním formátu. Bez složitých vzorečků.",
    category: "Příprava dat",
    published: false,
    content: ""
  },
  {
    slug: "barevnost-cmyk-vs-rgb",
    title: "CMYK vs RGB: kdy použít který barevný prostor",
    date: "2024-03-05",
    readTime: "6 min",
    excerpt: "Proč jsou barvy v tisku jiné než na obrazovce a jak správně připravit data pro tisk i web.",
    category: "Barevnost",
    published: false,
    content: ""
  },
  {
    slug: "spadavky-proc-jsou-dulezite",
    title: "Spadávky: proč jsou důležité a jak je správně nastavit",
    date: "2024-02-28",
    readTime: "4 min",
    excerpt: "Co jsou spadávky, k čemu slouží a jaké problémy můžou nastat, když chybí. S praktickými příklady.",
    category: "Tisková data",
    published: false,
    content: ""
  },
  {
    slug: "personifikace-jak-na-to",
    title: "Personifikace tiskovin: jak správně připravit databázi",
    date: "2024-02-20",
    readTime: "7 min",
    excerpt: "Praktický návod na přípravu dat pro variabilní tisk. Co kontrolovat, jak strukturovat databázi a čemu se vyhnout.",
    category: "Personifikace",
    published: false,
    content: ""
  },
  {
    slug: "prectiste-si-pred-odesl-anim-do-tisku",
    title: "Přečtěte si před odesláním do tisku: finální checklist",
    date: "2024-02-15",
    readTime: "5 min",
    excerpt: "Kompletní kontrolní seznam všeho, co je potřeba zkontrolovat před odesláním dat do tiskárny.",
    category: "Kontrola",
    published: false,
    content: ""
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
          {articles.filter(article => article.published).map((article) => (
            <ExpandableArticle
              key={article.slug}
              slug={article.slug}
              title={article.title}
              date={article.date}
              readTime={article.readTime}
              excerpt={article.excerpt}
              category={article.category}
              content={article.content}
            />
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

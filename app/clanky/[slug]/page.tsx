import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Mail } from "lucide-react"

interface ArticleContent {
  slug: string
  title: string
  date: string
  readTime: string
  category: string
  content: string
}

const articles: Record<string, ArticleContent> = {
  "technicka-priprava-grafickych-dat-pro-vystavni-realizace": {
    slug: "technicka-priprava-grafickych-dat-pro-vystavni-realizace",
    title: "Technická příprava grafických dat pro výstavní realizace",
    date: "2025-01-26",
    readTime: "8 min",
    category: "Výstavnictví",
    content: `V oblasti výstavnictví a zakázkové výroby se často pracuje s grafickými podklady, které vznikají v různých zemích, u různých dodavatelů a v rozdílných technických standardech. Data bývají dodána jako vizuální návrh, nikoli jako podklady připravené pro bezchybnou výrobu.

Chybějící spady, nesprávné rozměry, nevyhovující kvalita dat nebo nejasná struktura souborů pak zbytečně komplikují tisk, výrobu i samotnou realizaci stánku.

## Od návrhu k vyrobitelnému řešení

Mou specializací je převod takových grafických podkladů do plně vyrobitelného stavu ve 100% kvalitě. Pracuji s daty, která často slouží spíše jako "surovina", a upravuji je tak, aby byla technicky správná, přehledná a bezpečná pro další kroky výroby.

Cílem není pouze "opravit grafiku", ale vytvořit funkční výrobní podklady, se kterými může bez problémů pracovat tiskárna, výrobce 3D komponent i realizační tým na místě.

## Přehledné grafické souhrnny jako základ realizace

Součástí mé práce je tvorba grafických souhrnů, které slouží jako:

- **Podklady pro tisk** jednotlivých částí stánku
- **Specifikace materiálů a počtů kusů**
- **Přehled pro výrobu** atypických nebo 3D prvků
- **Orientační mapa** pro umístění grafiky při stavbě stánku

Jednotlivé výstupy jsou jasně označené, okótované a doplněné o popis materiálů i specifické požadavky klienta. Díky tomu mají všichni zúčastnění k dispozici stejná, srozumitelná a kontrolovatelná data.

## Kontrola jako prevence chyb

Zásadní součástí procesu je následná kontrola souhrnů ze strany objednatele a realizátora. Tento krok výrazně snižuje riziko chyb při výrobě, minimalizuje dodatečné náklady a zajišťuje, že výsledná realizace odpovídá původnímu záměru.

## Zkušenosti z praxe

Dlouhodobě spolupracuji s firmami, které zajišťují kompletní design a realizaci výstavních stánků. Díky tomu znám typické problémy, které v tomto oboru vznikají, i místa, kde se chyby nejčastěji přenášejí dál do výroby.

Mým cílem je být technickým partnerem, který propojuje grafický návrh s realitou výroby a pomáhá udržet celý proces přehledný, efektivní a bez zbytečných komplikací.`
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = articles[params.slug]
  if (!article) {
    return {
      title: "Článek nenalezen",
      description: "Požadovaný článek neexistuje.",
    }
  }

  return {
    title: article.title,
    description: article.title,
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug]

  if (!article) {
    return (
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Článek nenalezen
            </h1>
            <p className="text-muted-foreground mb-8">
              Omlouváme se, požadovaný článek neexistuje.
            </p>
            <Link
              href="/clanky"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Zpět na články
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/clanky"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zpět na články
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {article.category}
            </span>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
                <span>{article.readTime} čtení</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
            {article.title}
          </h1>
        </div>

        {/* Article content */}
        <article className="prose prose-invert max-w-none">
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12">
            <div className="prose prose-invert max-w-none text-foreground">
              {article.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={idx} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                      {paragraph.replace('##', '').trim()}
                    </h2>
                  )
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={idx} className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed mb-4">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="text-base">
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  )
                }
                return (
                  <p key={idx} className="text-muted-foreground leading-relaxed mb-4 text-base">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </div>
        </article>

        {/* CTA section */}
        <div className="mt-12 p-8 bg-primary/5 border border-primary/10 rounded-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Máte podobný projekt?
              </h3>
              <p className="text-muted-foreground">
                Pojďme se o něm pohovořit. Kontaktujte mě bez závazku.
              </p>
            </div>
            <a
              href="mailto:jirdokoupil@gmail.com?subject=Poptávka - Technická příprava grafických dat"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              Napsat zprávu
            </a>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-12 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">Další články</h2>
          <p className="text-muted-foreground">
            V současné době jsou zde pouze přípravy. Vraťte se brzy pro více článků.
          </p>
          <Link
            href="/clanky"
            className="inline-block mt-4 text-primary hover:underline font-medium"
          >
            Přejít na všechny články
          </Link>
        </div>
      </div>
    </div>
  )
}

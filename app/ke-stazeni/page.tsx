import type { Metadata } from "next"
import { Download, FileText, CheckSquare, FileCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Ke stažení",
  description:
    "Návody, checklisty a podklady k práci s tiskovými daty a realizací.",
}

const downloadCategories = [
  {
    title: "Návody",
    icon: FileText,
    items: [
      {
        title: "Příprava tiskových dat pro ofsetový tisk",
        description: "Kompletní průvodce přípravou PDF souborů pro ofsetový tisk.",
        fileSize: "PDF, 2.4 MB",
        comingSoon: true
      },
      {
        title: "Kontrola barevnosti před tiskem",
        description: "Návod na správné nastavení barevných profilů a kontrolu výstupů.",
        fileSize: "PDF, 1.8 MB",
        comingSoon: true
      },
      {
        title: "Příprava personifikovaných tiskovin",
        description: "Jak správně připravit databázi a šablony pro variabilní tisk.",
        fileSize: "PDF, 3.1 MB",
        comingSoon: true
      }
    ]
  },
  {
    title: "Checklisty před tiskem",
    icon: CheckSquare,
    items: [
      {
        title: "Checklist pro katalogy a brožury",
        description: "Kontrolní seznam všech bodů před odesláním katalogu do tiskárny.",
        fileSize: "PDF, 0.5 MB",
        comingSoon: true
      },
      {
        title: "Checklist pro obaly a etikety",
        description: "Specifické body kontroly pro obalové materiály.",
        fileSize: "PDF, 0.6 MB",
        comingSoon: true
      },
      {
        title: "Checklist pro velkoformátový tisk",
        description: "Kontrola dat před odesláním na velkoformátovou tiskárnu.",
        fileSize: "PDF, 0.4 MB",
        comingSoon: true
      }
    ]
  },
  {
    title: "Doporučení pro podklady od klienta",
    icon: FileCheck,
    items: [
      {
        title: "Jak poskytnout materiály pro katalog",
        description: "Specifikace formátů, rozlišení a pojmenování souborů.",
        fileSize: "PDF, 1.2 MB",
        comingSoon: true
      },
      {
        title: "Požadavky na produktové fotografie",
        description: "Technické požadavky na fotografie pro tisk a web.",
        fileSize: "PDF, 0.9 MB",
        comingSoon: true
      },
      {
        title: "Příprava databáze pro personifikaci",
        description: "Jak správně strukturovat data pro variabilní tisk.",
        fileSize: "PDF, 1.5 MB",
        comingSoon: true
      }
    ]
  }
]

export default function DownloadsPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ke stažení
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Návody, checklisty a podklady k práci s tiskovými daty a realizací. Postupně budu doplňovat další materiály.
          </p>
        </div>

        <div className="space-y-12">
          {downloadCategories.map((category) => {
            const Icon = category.icon
            return (
              <section key={category.title}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, index) => {
                    const isHighlighted = index === 0
                    return (
                      <div
                        key={item.title}
                        className={`p-6 bg-card rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 ${
                          isHighlighted ? "bg-gradient-to-br from-primary/5 via-background to-primary/10" : ""
                        }`}
                      >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <Download className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        {item.comingSoon && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                            Připravujeme
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.fileSize}
                      </p>
                    </div>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>

        <div className="mt-12 p-6 bg-muted/50 rounded-2xl">
          <p className="text-sm text-muted-foreground text-center">
            Materiály k  jsou postupně doplňovány. Pokud potřebujete konkrétní návod nebo checklist, napište mi na{" "}
            <a href="mailto:jirdokoupil@gmail.com" className="text-primary hover:underline">
              jirdokoupil@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

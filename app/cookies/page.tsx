import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookies",
  description: "Informace o používání cookies na webu Jiřího Dokoupila.",
}

export default function CookiesPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Cookies
        </h1>

        <div className="prose prose-lg max-w-none">
          <article className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Co jsou cookies
              </h2>
              <p className="leading-relaxed">
                Cookies jsou malé textové soubory, které se ukládají do vašeho prohlížeče 
                při návštěvě webových stránek. Slouží k zajištění správného fungování webu 
                a zlepšení uživatelského zážitku.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Nezbytné cookies
              </h2>
              <p className="leading-relaxed">
                Tyto stránky používají pouze nezbytné technické cookies, které jsou nutné 
                pro základní fungování webu. Tyto cookies nesbírají žádné osobní údaje 
                a nelze je vypnout.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Analytické cookies
              </h2>
              <p className="leading-relaxed">
                Pro lepší pochopení návštěvnosti webu můžeme v budoucnu využívat analytické 
                nástroje. V takovém případě budete před jejich aktivací požádáni o souhlas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Správa cookies
              </h2>
              <p className="leading-relaxed">
                Většina webových prohlížečů umožňuje správu cookies v nastavení. Můžete 
                cookies blokovat nebo mazat, mějte však na paměti, že to může ovlivnit 
                funkčnost některých částí webu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Kontakt
              </h2>
              <p className="leading-relaxed">
                Máte-li dotazy ohledně cookies, kontaktujte mě na e-mailu jirdokoupil@gmail.com.
              </p>
            </section>

            <section className="pt-4 border-t border-border">
              <p className="text-sm">
                Poslední aktualizace: leden 2026
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

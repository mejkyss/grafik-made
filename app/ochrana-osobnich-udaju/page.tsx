import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description: "Informace o zpracování osobních údajů na webu Jiřího Dokoupila.",
}

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Ochrana osobních údajů
        </h1>

        <div className="prose prose-lg max-w-none">
          <article className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Správce osobních údajů
              </h2>
              <p className="leading-relaxed">
                Správcem osobních údajů je Jiří Dokoupil, kontakt: jirdokoupil@gmail.com, 
                tel.: 774 710 093.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. Jaké údaje zpracováváme
              </h2>
              <p className="leading-relaxed mb-4">
                Prostřednictvím kontaktního formuláře na těchto stránkách zpracováváme následující údaje:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Jméno a název firmy</li>
                <li>E-mailová adresa</li>
                <li>Telefonní číslo (pokud jej uvedete)</li>
                <li>Obsah vaší zprávy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Účel zpracování
              </h2>
              <p className="leading-relaxed">
                Vaše údaje zpracováváme výhradně za účelem zodpovězení vašeho dotazu 
                a případné následné komunikace ohledně možné spolupráce. Údaje nejsou 
                používány k marketingovým účelům ani předávány třetím stranám.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Právní základ zpracování
              </h2>
              <p className="leading-relaxed">
                Právním základem pro zpracování je váš souhlas udělený při odeslání 
                kontaktního formuláře a oprávněný zájem správce na komunikaci s potenciálními klienty.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Doba uchovávání údajů
              </h2>
              <p className="leading-relaxed">
                Vaše údaje uchováváme po dobu nezbytnou k vyřízení vašeho dotazu a následné 
                komunikace, maximálně však po dobu 3 let od posledního kontaktu, pokud 
                nedojde k navázání smluvního vztahu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. Vaše práva
              </h2>
              <p className="leading-relaxed mb-4">
                V souvislosti se zpracováním osobních údajů máte následující práva:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Právo na přístup k vašim údajům</li>
                <li>Právo na opravu nepřesných údajů</li>
                <li>Právo na výmaz údajů</li>
                <li>Právo na omezení zpracování</li>
                <li>Právo na přenositelnost údajů</li>
                <li>Právo podat stížnost u dozorového úřadu (ÚOOÚ)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                7. Kontakt
              </h2>
              <p className="leading-relaxed">
                S jakýmikoliv dotazy ohledně zpracování osobních údajů se můžete obrátit 
                na e-mail jirdokoupil@gmail.com nebo telefon 774 710 093.
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

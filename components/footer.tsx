import Link from "next/link"

const quickLinks = [
  { href: "/moje-prace", label: "Moje práce" },
  { href: "/sluzby", label: "Služby" },
  { href: "/produkty", label: "Produkty" },
  { href: "/o-mne", label: "O mně" },
  { href: "/kontakt", label: "Kontakt" },
]

const legalLinks = [
  { href: "/ochrana-osobnich-udaju", label: "Ochrana osobních údajů" },
  { href: "/cookies", label: "Cookies" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Jiří Dokoupil</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Externí technický grafik pro tisk, výrobu a prezentaci
            </p>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Externí spolupráce: paušál nebo projekt.<br />
              Jasné zadání, jasný výstup.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Jiří Dokoupil</p>
              <p>
                <a href="tel:+420774710093" className="hover:text-primary transition-colors">
                  Tel.: 774 710 093
                </a>
              </p>
              <p>
                <a href="mailto:jirdokoupil@gmail.com" className="hover:text-primary transition-colors">
                  jirdokoupil@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jiří Dokoupil. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

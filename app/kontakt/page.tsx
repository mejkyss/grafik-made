import type { Metadata } from "next"
import { Suspense } from "react"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte Jiřího Dokoupila pro spolupráci v oblasti tiskových dat, technické grafiky a produktové prezentace.",
}

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Kontakt
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Pošlete stručné zadání a termín. Ozvu se s návrhem dalšího postupu.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Suspense fallback={<div className="p-8 bg-card rounded-2xl border border-border h-96 animate-pulse" />}>
              <ContactForm />
            </Suspense>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="font-semibold text-foreground mb-4">Kontaktní údaje</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <a
                      href="mailto:jirdokoupil@gmail.com"
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      jirdokoupil@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefon</p>
                    <a
                      href="tel:+420774710093"
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      774 710 093
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-muted/50 rounded-2xl">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Kontakt:</span> Jiří Dokoupil
                &nbsp;|&nbsp; Tel.: 774 710 093 &nbsp;|&nbsp; jirdokoupil@gmail.com
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="font-semibold text-foreground mb-3">Forma spolupráce</h3>
              <p className="text-sm text-muted-foreground">
                Externí spolupráce: paušál nebo projekt.
                Jasné zadání, jasný výstup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

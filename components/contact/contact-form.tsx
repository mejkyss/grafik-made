"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion"
import { Send, CheckCircle2 } from "lucide-react"

const projectTypes = [
  { value: "", label: "Vyberte typ zakázky" },
  { value: "tiskova-data", label: "Tisková data" },
  { value: "katalogy-tiskoviny", label: "Katalogy a tiskoviny" },
  { value: "personifikace", label: "Personifikace" },
  { value: "vyroba-realizace", label: "Výroba a realizace" },
  { value: "foto-video", label: "Foto a video" },
  { value: "jine", label: "Jiné" },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    deadline: "",
    message: "",
    consent: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          deadline: formData.deadline,
          message: formData.message,
        }),
      })

      const data = await response.json()

      console.log('[v0] API Response:', { status: response.status, data })

      if (!response.ok) {
        const errorMessage = data.details || data.error || 'Nepodařilo se odeslat zprávu'
        throw new Error(errorMessage)
      }

      console.log('[v0] Form submitted successfully:', data)
      setIsSubmitted(true)
    } catch (error) {
      console.error('[v0] Error submitting form:', error)
      const errorMessage = error instanceof Error ? error.message : 'Došlo k chybě při odesílání zprávy'
      alert(`Chyba: ${errorMessage}\n\nZkuste to prosím znovu nebo nás kontaktujte přímo na jirdokoupil@gmail.com`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  if (isSubmitted) {
    return (
      <FadeIn>
        <div className="p-8 sm:p-12 bg-card rounded-2xl border border-border text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Děkuji za zprávu
          </h3>
          <p className="text-muted-foreground">
            Ozvu se vám co nejdříve s návrhem dalšího postupu.
          </p>
        </div>
      </FadeIn>
    )
  }

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-card rounded-2xl border border-border">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Jméno a firma <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-2xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              E-mail <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-2xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Telefon (volitelné)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-2xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
              Typ zakázky
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-2xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              {projectTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-foreground mb-2">
              Termín (volitelné)
            </label>
            <input
              type="text"
              id="deadline"
              name="deadline"
              placeholder="např. do konce února"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Zpráva <span className="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-2xl text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
            />
            <label htmlFor="consent" className="text-sm text-muted-foreground">
              Souhlasím se{" "}
              <a href="/ochrana-osobnich-udaju" className="text-primary hover:underline">
                zpracováním osobních údajů
              </a>{" "}
              <span className="text-destructive">*</span>
            </label>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full rounded-2xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Odesílám..."
            ) : (
              <>
                Odeslat poptávku
                <Send className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </FadeIn>
  )
}

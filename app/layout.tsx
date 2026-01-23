import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Jiří Dokoupil | Externí technický grafik",
    template: "%s | Jiří Dokoupil",
  },
  description:
    "Externí technický grafik pro tisk, výrobu a prezentaci. Od návrhu až po funkční výstup bez chyb a zdržení.",
  keywords: [
    "technický grafik",
    "tisková data",
    "předtisk",
    "DTP",
    "katalogy",
    "kalendáře",
    "personifikace",
    "produktová fotografie",
  ],
  authors: [{ name: "Jiří Dokoupil" }],
  creator: "Jiří Dokoupil",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Jiří Dokoupil",
    title: "Jiří Dokoupil | Externí technický grafik",
    description:
      "Externí technický grafik pro tisk, výrobu a prezentaci. Od návrhu až po funkční výstup bez chyb a zdržení.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#3b5998",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
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
    "AI produktové fotografie",
    "AI generování fotografií",
    "AI fotografie pro e-shop",
    "umělá inteligence produktové foto",
    "AI product photography",
    "generování produktových fotek",
    "AI fotky produktů",
    "e-shop produktové fotografie",
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

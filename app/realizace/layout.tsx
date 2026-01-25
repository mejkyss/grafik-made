import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Realizace 2000–2026",
  description:
    "Přehled realizovaných projektů od roku 2000. Tisková data, obaly, kalendáře, etikety, ilustrace a další grafické práce.",
}

export default function RealizaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

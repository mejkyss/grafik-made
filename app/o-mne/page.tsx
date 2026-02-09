import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AboutContent } from "@/components/about/about-content"
import { ArrowRight } from "lucide-react"
import { PageShell } from "@/components/layout/page-shell"

export const metadata: Metadata = {
  title: "O mně",
  description:
    "Jiří Dokoupil, externí technický grafik s více než 25 lety zkušeností v oblasti tisku, výroby a produktové prezentace.",
}

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <PageShell>
        <AboutContent />
      </PageShell>
    </div>
  )
}

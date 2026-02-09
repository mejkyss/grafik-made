import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ProjectDetail } from "@/components/portfolio/project-detail"
import { ArrowLeft } from "lucide-react"
import { PageShell } from "@/components/layout/page-shell"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Projekt nenalezen",
    }
  }

  return {
    title: project.title,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20">
      <PageShell>
        <Button asChild variant="ghost" className="mb-8 -ml-2">
          <Link href="/moje-prace">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Zpět na přehled
          </Link>
        </Button>

        <ProjectDetail project={project} />
      </PageShell>
    </div>
  )
}

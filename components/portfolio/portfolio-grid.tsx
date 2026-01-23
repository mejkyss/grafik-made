"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { projects, filterTags } from "@/lib/data"
import { Search } from "lucide-react"

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("Vše")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "Vše" || project.tags.includes(activeFilter)
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchQuery])

  return (
    <div>
      <div className="mb-8 space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Hledat v projektech"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {filterTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveFilter(tag)}
              className={`relative px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === tag
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground bg-secondary hover:bg-secondary/80"
              }`}
            >
              {activeFilter === tag && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tag}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground">
              Žádné projekty neodpovídají vašemu vyhledávání.
            </p>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={`/moje-prace/${project.slug}`}
                  className="group block h-full"
                >
                  <article className="h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/20 hover:shadow-md transition-all duration-300">
                    <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                        <span className="text-5xl font-bold text-primary/20">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                    </div>
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.summary}
                      </p>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

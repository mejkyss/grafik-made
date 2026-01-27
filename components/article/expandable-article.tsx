"use client"

import { useState } from "react"
import { Calendar, Clock, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ExpandableArticleProps {
  slug: string
  title: string
  date: string
  readTime: string
  excerpt: string
  category: string
  content: string
}

export function ExpandableArticle({
  title,
  date,
  readTime,
  excerpt,
  category,
  content,
}: ExpandableArticleProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <article className="bg-card rounded-2xl border border-border overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 sm:p-8 hover:bg-muted/30 transition-colors text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-grow">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {category}
              </span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString('cs-CZ', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{readTime}</span>
                </div>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
              {title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {excerpt}
            </p>
          </div>

          <div className={`flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border"
          >
            <div className="p-6 sm:p-8 prose prose-sm max-w-none dark:prose-invert">
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                className="text-foreground space-y-4"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

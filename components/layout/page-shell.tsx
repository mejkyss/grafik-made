import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type PageShellProps = {
  children: ReactNode
  className?: string
  innerClassName?: string
}

export function PageShell({ children, className, innerClassName }: PageShellProps) {
  return (
    <div className={cn("w-full px-4 sm:px-6 lg:px-8", className)}>
      <div className={cn("mx-auto max-w-7xl", innerClassName)}>{children}</div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"
import type { ReactNode } from "react"

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeIn({ children, delay = 0, duration = 0.5, className, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInStagger({ 
  children, 
  className,
  staggerDelay = 0.1 
}: { 
  children: ReactNode
  className?: string
  staggerDelay?: number 
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeInStaggerItem({ 
  children, 
  className 
}: { 
  children: ReactNode
  className?: string 
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ 
  children, 
  delay = 0, 
  className 
}: { 
  children: ReactNode
  delay?: number
  className?: string 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

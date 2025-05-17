"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
  titleClassName?: string
}

export default function Section({ id, title, subtitle, children, className = "", titleClassName = "" }: SectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id={id} ref={ref} className={`relative py-20 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className={`text-3xl md:text-5xl font-bold mb-4 ${titleClassName}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              className="text-xl text-foreground/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {children}
      </div>

      <motion.div
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url('/placeholder.svg?height=500&width=500')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          y,
        }}
      />
    </section>
  )
}

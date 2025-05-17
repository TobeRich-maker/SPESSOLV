"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  id: string
  title: string
  subtitle: string
  children: ReactNode
  className?: string
}

export default function ParallaxSection({ id, title, subtitle, children, className = "" }: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id={id} ref={ref} className={`relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 text-teal-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </div>

        {children}
      </div>

      <motion.div
        className="absolute inset-0 z-0 opacity-5"
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

"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxBackground() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden">
      {/* Grid pattern */}
      <motion.div
        className="absolute inset-0 parallax-grid"
        style={{
          y: y1,
          opacity,
        }}
      />

      {/* Circles */}
      <motion.div
        className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute top-[40%] right-[15%] w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        style={{ y: y3 }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[30%] w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        style={{ y: y2 }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
    </div>
  )
}

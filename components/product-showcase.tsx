"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface ProductShowcaseProps {
  title: string
  subtitle: string
  description: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  features?: { title: string; description: string }[]
}

export default function ProductShowcase({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  features = [],
}: ProductShowcaseProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"])

  return (
    <section ref={ref} className="py-20 md:py-32 overflow-hidden">
      <div className="container-apple">
        <div
          className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-16`}
        >
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-accent-blue mb-2">{subtitle}</h3>
            <h2 className="text-heading-3 md:text-heading-2 font-semibold mb-6">{title}</h2>
            <p className="text-lg text-muted-foreground mb-8">{description}</p>

            {features.length > 0 && (
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 relative"
            style={{ y }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

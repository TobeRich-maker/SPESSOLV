"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

interface FeaturesGridProps {
  title: string
  subtitle: string
  features: Feature[]
}

export default function FeaturesGrid({ title, subtitle, features }: FeaturesGridProps) {
  return (
    <section id="features" className="py-20 md:py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container-apple">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>

        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="bg-background rounded-3xl p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-12 w-12 rounded-full bg-accent-blue/10 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-accent-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

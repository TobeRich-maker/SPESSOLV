"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  image: string
  index: number
}

export default function TestimonialCard({ quote, author, role, company, image, index }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-card rounded-lg p-6 shadow-sm border border-border-light"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-foreground/70">
            {role}, {company}
          </p>
        </div>
      </div>
      <p className="text-foreground/80 italic">"{quote}"</p>
    </motion.div>
  )
}

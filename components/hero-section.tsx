"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-gray-100 dark:from-background dark:to-gray-900 -z-10" />

      <div className="container-apple relative z-10 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-heading-2 md:text-heading-1 lg:text-[56px] xl:text-[64px] font-semibold mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Make it EZ <span className="gradient-text">SPELSOLV</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-light dark:text-muted-dark max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Make it EZ
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="#products" className="btn-primary">
              Lihat Layanan
            </Link>
            <Link href="#contact" className="btn-secondary">
              Kontak Kami
            </Link>
          </motion.div>

          <motion.div className="relative w-full max-w-5xl aspect-[16/9]" style={{ y, opacity, scale }}>
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="SPELSOLVE Software Platform"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

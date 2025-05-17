"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      message: "",
    })

    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container-apple">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Have a question or want to work together?
        </motion.p>

        <div className="max-w-2xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-blue"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-blue"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-blue resize-none"
                placeholder="Your message"
              />
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full btn-primary py-3 disabled:opacity-70">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {isSubmitted && (
              <div className="p-4 bg-accent-green/10 border border-accent-green/30 rounded-lg text-accent-green text-center">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

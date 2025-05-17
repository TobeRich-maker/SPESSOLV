"use client"

import { Database, Globe, LayoutGrid, LineChart, Server, Shield } from "lucide-react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProductShowcase from "@/components/product-showcase"
import FeaturesGrid from "@/components/features-grid"
import TestimonialSlider from "@/components/testimonial-slider"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  const features = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies.",
      icon: Globe,
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android devices.",
      icon: LayoutGrid,
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
      icon: Server,
    },
    {
      title: "Database Design",
      description: "Efficient database architecture and optimization services.",
      icon: Database,
    },
    {
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our analytics solutions.",
      icon: LineChart,
    },
    {
      title: "Security Services",
      description: "Protect your applications with our comprehensive security solutions.",
      icon: Shield,
    },
  ]

  const testimonials = [
    {
      quote:
        "SPELSOLVE delivered our project on time and exceeded our expectations. Their team was professional and responsive throughout the entire process.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Inc.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Working with SPELSOLVE was a game-changer for our business. They understood our needs and delivered a solution that helped us grow by 40% in the first year.",
      author: "Michael Chen",
      role: "CEO",
      company: "GrowthStart",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The team at SPELSOLVE provided exceptional service and technical expertise. They're now our go-to partner for all software development needs.",
      author: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateCo",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <main>
      <Navbar />
      <HeroSection />

      <div id="products">
        <ProductShowcase
          title="Enterprise Resource Planning"
          subtitle="Business Management"
          description="A comprehensive ERP solution designed to streamline your business operations, increase efficiency, and drive growth."
          imageSrc="/placeholder.svg?height=800&width=800"
          imageAlt="Enterprise Resource Planning Software"
          features={[
            {
              title: "Centralized Data Management",
              description: "Keep all your business data in one secure, accessible location.",
            },
            {
              title: "Automated Workflows",
              description: "Streamline processes and reduce manual tasks with intelligent automation.",
            },
            {
              title: "Real-time Analytics",
              description: "Make informed decisions with up-to-the-minute business insights.",
            },
          ]}
        />

        <ProductShowcase
          title="Customer Relationship Management"
          subtitle="Client Success"
          description="Build stronger customer relationships, improve satisfaction, and increase retention with our intuitive CRM platform."
          imageSrc="/placeholder.svg?height=800&width=800"
          imageAlt="Customer Relationship Management Software"
          reverse={true}
          features={[
            {
              title: "360° Customer View",
              description: "Get a complete picture of each customer's journey and interactions.",
            },
            {
              title: "Sales Pipeline Management",
              description: "Track and optimize your sales process from lead to close.",
            },
            {
              title: "Marketing Automation",
              description: "Create, deploy, and analyze marketing campaigns with ease.",
            },
          ]}
        />
      </div>

      <FeaturesGrid
        title="Why Choose SPELSOLVE"
        subtitle="We combine technical expertise with business acumen to deliver solutions that drive real results"
        features={features}
      />

      <TestimonialSlider testimonials={testimonials} />

      <ContactSection />

      <Footer />
    </main>
  )
}

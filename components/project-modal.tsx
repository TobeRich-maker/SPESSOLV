"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
}

export default function ProjectModal({ isOpen, onClose, title, description }: ProjectModalProps) {
  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 w-full max-w-lg rounded-lg shadow-lg overflow-hidden border border-gray-800"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-800">
                <h2 className="text-2xl font-bold text-teal-400">{title}</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6">
                <p className="text-gray-300 leading-relaxed">{description}</p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-teal-400 font-medium mb-2">Technologies</h3>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• React.js</li>
                      <li>• Node.js</li>
                      <li>• MongoDB</li>
                      <li>• Express</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-teal-400 font-medium mb-2">Features</h3>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Request Management</li>
                      <li>• Approval Workflows</li>
                      <li>• Purchase Reporting</li>
                      <li>• Vendor Management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-800 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-black font-medium rounded-md transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

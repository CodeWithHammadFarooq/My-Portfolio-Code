"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                  +923450710970
                </p>
                <p className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                  hammadfarooq470@gmail.com
                </p>
                <p className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                  Lahore, Punjab, Pakistan
                </p>
              </div>
            </div>
            <div className="md:w-1/2 p-6 bg-gray-50 dark:bg-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Connect with Me</h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/hammad-farooq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin className="w-6 h-6 mr-3" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/CodeWithHammadFarooq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github className="w-6 h-6 mr-3" />
                  GitHub
                </a>
                <a
                  href="https://medium.com/@hammadfarooq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Mail className="w-6 h-6 mr-3" />
                  Medium
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">Hammad Farooq</h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-blue-600 dark:text-blue-400">Data Scientist</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">Transforming data into actionable insights</p>
          <motion.a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white py-3 px-6 rounded-full font-bold hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch <ArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?w=400&h=400&fit=crop&crop=faces&auto=format&q=80"
            alt="Cartoon boy representing Hammad Farooq"
            width={400}
            height={400}
            className="rounded-full mx-auto shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}


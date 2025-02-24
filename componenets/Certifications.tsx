"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

const certifications = [
  {
    name: "Python for Data Science",
    provider: "IBM",
  },
  {
    name: "Data Visualization with Python",
    provider: "IBM",
  },
  {
    name: "Python Developer",
    provider: "SoloLearn",
  },
  {
    name: "Microsoft Word Associate",
    provider: "Microsoft",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Award className="w-8 h-8 mr-4 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{cert.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">Provided by {cert.provider}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


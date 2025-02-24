"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Science in Data Science",
    institution: "Virtual University of Pakistan",
    year: "2024 - In Progress",
  },
  {
    degree: "Intermediate in Computer Science",
    institution: "Punjab Group of Colleges | Okara",
    year: "2022-2024",
  },
  {
    degree: "Matric in Computer Science",
    institution: "Grammar School System | Renala Khurd",
    year: "2020-2022",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GraduationCap className="w-8 h-8 mr-4 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                <p className="text-gray-500 dark:text-gray-400 mt-1">{edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


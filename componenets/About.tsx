"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Highly motivated and detail-oriented data scientist with strong foundations in machine learning, data
            analysis, and visualization. Proficient in Python, SQL, and data science tools like Pandas, NumPy, Tableau
            and PowerBI.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Eager to apply skills and knowledge in a dynamic setting and contribute to innovative data-driven projects.
            Passionate about leveraging data to solve complex problems and drive business decisions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}


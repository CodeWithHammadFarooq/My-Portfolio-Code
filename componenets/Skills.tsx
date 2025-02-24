"use client"

import { motion } from "framer-motion"
import { Code, Database, BarChart, GitBranch, Cpu, LineChart } from "lucide-react"

const skills = [
  { name: "Python", icon: Code, level: 90 },
  { name: "Data Analysis", icon: BarChart, level: 85 },
  { name: "Machine Learning", icon: Cpu, level: 80 },
  { name: "Data Visualization", icon: LineChart, level: 85 },
  { name: "SQL", icon: Database, level: 75 },
  { name: "Git/GitHub", icon: GitBranch, level: 70 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-8 h-8 mr-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                <motion.div
                  className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                ></motion.div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.level}% Proficiency</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


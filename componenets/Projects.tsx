"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Exploratory Data Analysis (EDA) on COVID-19 Dataset",
    description:
      "Performed data cleaning, analysis, and visualization on global COVID-19 data using Python libraries (Pandas, Matplotlib, Seaborn). Highlighted trends in infection rates and recovery statistics.",
    link: "#",
    github: "#",
  },
  {
    title: "Student Performance Analysis using Pandas & Excel",
    description:
      "Consolidated and analyzed student data from multiple Excel sheets using Pandas for aggregation and insights. Computed class-wise average scores in Math & Physics and visualized trends using Matplotlib bar charts.",
    link: "#",
    github: "#",
  },
  {
    title: "Data Visualization Practice",
    description: "Created dashboards using Power BI to visualize sales data for Superstore of USA.",
    link: "#",
    github: "#",
  },
  {
    title: "Web Scraping Practice",
    description:
      "Built a Python scraper using BeautifulSoup & Requests to extract structured text data from multiple web pages. Implemented URL validation, error handling, and duplicate prevention for efficient and reliable data collection.",
    link: "#",
    github: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white flex items-center"
                  >
                    GitHub <Github className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


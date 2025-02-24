import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hammad Farooq - Data Scientist Portfolio",
  description: "Showcasing data science projects, skills, and certifications of Hammad Farooq",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


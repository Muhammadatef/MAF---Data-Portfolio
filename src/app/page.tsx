'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import ContentHub from '@/components/ContentHub'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MatrixBackground from '@/components/MatrixBackground'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2">
            <div className="loading-dots bg-primary-600"></div>
            <div className="loading-dots bg-primary-600"></div>
            <div className="loading-dots bg-primary-600"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-white text-lg"
          >
            Loading Data Engineering Portfolio...
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <MatrixBackground />
      <Header />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ContentHub />
        <Certifications />
        <Contact />
      </motion.div>

      <Footer />
    </main>
  )
}
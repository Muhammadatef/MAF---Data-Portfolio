'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Database, 
  Code, 
  BarChart3, 
  Cloud, 
  GitBranch, 
  MapPin, 
  Download,
  ExternalLink,
  Zap,
  Server,
  Brain
} from 'lucide-react'
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa'

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const titles = [
    'Data Engineer',
    'Python Developer',
    'Data Analyst',
    'BI Engineer',
  ]

  useEffect(() => {
    const title = titles[currentTitle]
    let index = 0
    setIsTyping(true)

    const typeInterval = setInterval(() => {
      if (index < title.length) {
        setDisplayText(title.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)
        
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (index > 0) {
              setDisplayText(title.slice(0, index - 1))
              index--
            } else {
              clearInterval(deleteInterval)
              setCurrentTitle((prev) => (prev + 1) % titles.length)
            }
          }, 50)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentTitle])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-data-pattern opacity-10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          >
            {React.createElement([Database, Code, BarChart3, Cloud, Server, Brain][i], { size: 24 })}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-medium text-lg">
              <MapPin className="w-5 h-5" />
              <span>Dubai, UAE</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="gradient-text">Mohamed Atef Fahmy</span>
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 h-16 flex items-center justify-center"
          >
            <span className="text-gray-700 dark:text-gray-300">Senior </span>
            <span className="text-primary-600 dark:text-primary-400 mx-2 min-w-[200px] text-left">
              {displayText}
              <span className={`inline-block w-0.5 h-8 bg-primary-600 ml-1 ${isTyping ? 'animate-pulse' : ''}`} />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Building scalable data pipelines and analytics solutions with{' '}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">5+ years</span>{' '}
            of experience in Spark, Hadoop, Python, and cloud technologies.
            Passionate about transforming raw data into actionable insights.
          </motion.p>

          {/* Tech Stack Icons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { icon: Database, name: 'Big Data', color: 'text-blue-600' },
              { icon: Code, name: 'Python', color: 'text-green-600' },
              { icon: BarChart3, name: 'Analytics', color: 'text-purple-600' },
              { icon: Cloud, name: 'Cloud', color: 'text-orange-600' },
              { icon: GitBranch, name: 'MLOps', color: 'text-pink-600' },
              { icon: Zap, name: 'Spark', color: 'text-yellow-600' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center space-y-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {<tech.icon className={`w-8 h-8 ${tech.color}`} />}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 shadow-lg hover:shadow-red-glow"
            >
              <BarChart3 className="w-5 h-5" />
              <span>View Projects</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/resume.pdf'
                link.download = 'Mohamed-Atef-Fahmy-Resume.pdf'
                link.click()
              }}
              className="bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: FaLinkedin, url: 'https://www.linkedin.com/in/mohamed-atef-fahmy-khalil/', color: 'text-blue-600' },
              { icon: FaGithub, url: 'https://github.com/Muhammadatef', color: 'text-gray-700 dark:text-gray-300' },
              { icon: FaMedium, url: 'https://medium.com/@muhamedfahmy7474', color: 'text-gray-900 dark:text-white' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`${social.color} hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200`}
              >
                {<social.icon className="w-8 h-8" />}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
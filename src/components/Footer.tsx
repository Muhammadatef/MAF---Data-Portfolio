'use client'

import { motion } from 'framer-motion'
import { 
  Heart, 
  Code, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Database,
  ExternalLink
} from 'lucide-react'
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/mohamed-atef-fahmy-khalil/',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      icon: FaGithub,
      url: 'https://github.com/Muhammadatef',
      color: 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      icon: FaMedium,
      url: 'https://medium.com/@muhamedfahmy7474',
      color: 'text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Data Engineering',
    'ETL Pipeline Development',
    'Cloud Architecture',
    'Data Analytics',
    'Machine Learning',
    'Performance Optimization'
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Database className="w-8 h-8 text-primary-600" />
                <motion.div
                  className="absolute inset-0 w-8 h-8 rounded-full bg-primary-600 opacity-20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mohamed Atef Fahmy</h3>
                <p className="text-primary-400 text-sm">Senior Data Engineer</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Passionate data engineer with 5+ years of experience building scalable data solutions. 
              Specializing in cloud-native architectures, real-time processing, and analytics platforms 
              that drive business growth.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span className="text-gray-300">Dubai, UAE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-600" />
                <a 
                  href="mailto:muhamedfahmy7474@gmail.com" 
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  muhamedfahmy7474@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-600" />
                <a 
                  href="tel:+971507422363" 
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  +971 50 742 2363
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${social.color} transition-colors duration-200`}
                >
                  {<social.icon className="w-6 h-6" />}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                Available for hire
              </span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">
                © 2024 Mohamed Atef Fahmy. Made with
              </span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span className="text-gray-400 text-sm">and</span>
              <Code className="w-4 h-4 text-primary-600" />
              <span className="text-gray-400 text-sm">in Dubai</span>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              
              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-primary-600 hover:bg-primary-700 rounded-full text-white transition-colors duration-200"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
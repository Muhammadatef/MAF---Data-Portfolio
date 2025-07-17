'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2, BarChart3, ExternalLink, Eye, Star, Calendar, TrendingUp } from 'lucide-react'
import { SiPowerbi } from 'react-icons/si'

interface Project {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  image: string
  github: string
  demo?: string
  tech: Array<{ name: string; icon: any }>
  features: string[]
  metrics: Record<string, string>
  powerbi?: string
  novypro?: string
}

interface NovyProPanelProps {
  isOpen: boolean
  onClose: () => void
  project: Project
}

const NovyProPanel = ({ isOpen, onClose, project }: NovyProPanelProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const openInNewTab = () => {
    if (project.novypro) {
      window.open(project.novypro, '_blank')
    }
  }

  const openNovyProProfile = () => {
    window.open('https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects', '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden ${
              isFullscreen ? 'w-full h-full' : 'w-full max-w-7xl h-[90vh]'
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                    <SiPowerbi className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-blue-100 flex items-center space-x-2">
                      <span>Interactive Power BI Dashboard</span>
                      <span className="text-blue-200">•</span>
                      <span>Hosted on NovyPro</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={openNovyProProfile}
                    className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200"
                    title="View NovyPro Profile"
                  >
                    <Eye className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={openInNewTab}
                    className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleFullscreen}
                    className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200"
                    title="Toggle fullscreen"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar */}
              {!isFullscreen && (
                <div className="w-80 bg-gray-50 dark:bg-gray-800 p-6 overflow-y-auto">
                  <div className="space-y-6">
                    {/* NovyPro Info */}
                    <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <SiPowerbi className="w-5 h-5 text-blue-600" />
                        <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                          NovyPro Platform
                        </h3>
                      </div>
                      <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                        Professional Power BI dashboard hosting platform for showcasing interactive analytics.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={openNovyProProfile}
                        className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                      >
                        View All My Dashboards →
                      </motion.button>
                    </div>

                    {/* Project Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        About This Dashboard
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Metrics
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                              {value}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dashboard Tips */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Dashboard Tips
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            Click on charts to filter and drill down
                          </span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <BarChart3 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            Use slicers to analyze different time periods
                          </span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            Hover over visuals for detailed tooltips
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Main Content */}
              <div className="flex-1 relative">
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 mb-4">
                        <div className="loading-dots bg-blue-600"></div>
                        <div className="loading-dots bg-blue-600"></div>
                        <div className="loading-dots bg-blue-600"></div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Loading Power BI Dashboard...
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Hosted on NovyPro Platform
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full">
                    {/* NovyPro Embed */}
                    <div className="powerbi-embed h-full">
                      <iframe
                        src={project.novypro || project.powerbi}
                        title={`${project.title} - Power BI Dashboard`}
                        allowFullScreen
                        className="w-full h-full border-none"
                        onLoad={() => setIsLoading(false)}
                      />
                    </div>
                  </div>
                )}

                {/* Demo Placeholder for development */}
                {!project.novypro && !project.powerbi && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
                    <div className="text-center p-8">
                      <SiPowerbi className="w-24 h-24 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Power BI Dashboard
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Interactive dashboard will be embedded here from NovyPro
                      </p>
                      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            95%
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Accuracy
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            1M+
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Records
                          </div>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={openNovyProProfile}
                        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                      >
                        Visit NovyPro Profile
                      </motion.button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NovyProPanel
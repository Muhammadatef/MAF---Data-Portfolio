'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2, BarChart3, TrendingUp, Database, Zap, ExternalLink } from 'lucide-react'

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

interface PowerBIPanelProps {
  isOpen: boolean
  onClose: () => void
  project: Project
}

const PowerBIPanel = ({ isOpen, onClose, project }: PowerBIPanelProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2000)
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
    if (project.powerbi) {
      window.open(project.powerbi, '_blank')
    }
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
              isFullscreen ? 'w-full h-full' : 'w-full max-w-6xl h-[80vh]'
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-primary-100">Interactive Power BI Dashboard</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
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
                    {/* Project Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        About This Dashboard
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
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
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg">
                            <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
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
                          <TrendingUp className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            Click on charts to filter data
                          </span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Database className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            Use slicers to drill down
                          </span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Zap className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            Data refreshes automatically
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
                        <div className="loading-dots bg-primary-600"></div>
                        <div className="loading-dots bg-primary-600"></div>
                        <div className="loading-dots bg-primary-600"></div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        Loading Power BI Dashboard...
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full">
                    {/* Power BI Embed */}
                    <div className="powerbi-embed h-full">
                      <iframe
                        src={project.powerbi}
                        title={`${project.title} - Power BI Dashboard`}
                        allowFullScreen
                        className="w-full h-full border-none"
                        onLoad={() => setIsLoading(false)}
                      />
                    </div>
                  </div>
                )}

                {/* Demo Placeholder */}
                {!project.powerbi && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800">
                    <div className="text-center p-8">
                      <BarChart3 className="w-24 h-24 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Power BI Dashboard
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Interactive dashboard would be embedded here in the live version
                      </p>
                      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                            95%
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Accuracy
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                            1M+
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Records
                          </div>
                        </div>
                      </div>
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

export default PowerBIPanel
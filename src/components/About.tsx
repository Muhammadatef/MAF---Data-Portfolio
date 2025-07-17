'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Cloud, 
  BarChart3, 
  Zap, 
  Award,
  MapPin,
  Calendar,
  Users,
  TrendingUp
} from 'lucide-react'

const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience', icon: Calendar },
    { number: '50+', label: 'Projects Completed', icon: Database },
    { number: '500GB+', label: 'Data Processed', icon: BarChart3 },
    { number: '99.9%', label: 'System Uptime', icon: TrendingUp },
  ]

  const expertise = [
    {
      title: 'Data Engineering',
      description: 'Building scalable ETL pipelines, data warehouses, and real-time streaming solutions',
      icon: Database,
      technologies: ['Apache Spark', 'Hadoop', 'Kafka', 'Airflow', 'SQL']
    },
    {
      title: 'Cloud Architecture',
      description: 'Designing and implementing cloud-native data solutions on AWS and Azure',
      icon: Cloud,
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      title: 'Data Science',
      description: 'Developing ML models, statistical analysis, and predictive analytics solutions',
      icon: BarChart3,
      technologies: ['Python', 'scikit-learn', 'TensorFlow', 'PyTorch', 'Pandas']
    },
    {
      title: 'Performance Engineering',
      description: 'Optimizing data processing systems for speed, scalability, and reliability',
      icon: Zap,
      technologies: ['Performance Tuning', 'Monitoring', 'Load Testing', 'Optimization']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about turning complex data challenges into elegant, scalable solutions
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-lg mb-4">
                {<stat.icon className="w-6 h-6" />}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Senior Data Engineer
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700 dark:text-gray-300">Dubai, UAE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700 dark:text-gray-300">Remote & On-site Collaboration</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700 dark:text-gray-300">AWS & Azure Certified</span>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I'm a Senior Data Engineer with over 5 years of experience building robust, 
                scalable data infrastructure. My expertise spans across the entire data lifecycle, 
                from ingestion and processing to analytics and visualization.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Currently based in Dubai, I specialize in designing and implementing 
                cloud-native data solutions that handle massive scale while maintaining 
                high performance and reliability. I'm passionate about leveraging modern 
                technologies to solve complex data challenges.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not architecting data pipelines, you can find me contributing to 
                open-source projects, writing technical articles, or exploring the latest 
                advancements in machine learning and distributed systems.
              </p>
            </div>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-lg">
                      <area.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {area.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {area.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {area.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
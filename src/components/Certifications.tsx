'use client'

import { motion } from 'framer-motion'
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  CheckCircle, 
  Star,
  TrendingUp,
  Database,
  Cloud,
  Code,
  Brain
} from 'lucide-react'
import { SiAmazonaws, SiMicrosoftazure } from 'react-icons/si'

const Certifications = () => {
  const certifications = [
    {
      title: 'Azure Data Engineering DP-203',
      issuer: 'Microsoft',
      date: '2024',
      status: 'Active',
      icon: SiMicrosoftazure,
      color: 'from-blue-400 to-blue-600',
      description: 'Designing and implementing data solutions on Microsoft Azure platform',
      skills: ['Data Factory', 'Databricks', 'Synapse Analytics', 'Azure Storage', 'Event Hubs', 'Stream Analytics'],
      credentialId: 'MS-DP-203-2024',
      verifyUrl: 'https://learn.microsoft.com/en-us/certifications/azure-data-engineer/'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      status: 'Active',
      icon: SiAmazonaws,
      color: 'from-orange-400 to-orange-600',
      description: 'Foundational understanding of AWS Cloud concepts and services',
      skills: ['AWS Core Services', 'Cloud Architecture', 'Security', 'Pricing', 'Support'],
      credentialId: 'AWS-CP-2023',
      verifyUrl: 'https://aws.amazon.com/certification/certified-cloud-practitioner/'
    },
    {
      title: 'DataEngineering ZoomCamp',
      issuer: 'DataTalks.Club',
      date: '2023',
      status: 'Completed',
      icon: Database,
      color: 'from-green-400 to-green-600',
      description: 'Comprehensive data engineering bootcamp covering modern tools and practices',
      skills: ['Docker', 'Terraform', 'GCP', 'Airflow', 'Kafka', 'Spark', 'dbt'],
      credentialId: 'DTC-DE-2023',
      verifyUrl: 'https://github.com/DataTalksClub/data-engineering-zoomcamp'
    },
    {
      title: 'Udacity AWS Data Engineering Nanodegree',
      issuer: 'Udacity',
      date: '2022',
      status: 'Completed',
      icon: SiAmazonaws,
      color: 'from-orange-400 to-orange-600',
      description: 'Advanced AWS data engineering skills with hands-on projects',
      skills: ['AWS Redshift', 'S3', 'EMR', 'Glue', 'Lambda', 'Kinesis', 'Data Modeling'],
      credentialId: 'UD-AWS-DE-2022',
      verifyUrl: 'https://www.udacity.com/course/data-engineer-nanodegree--nd027'
    },
    {
      title: 'Udacity Data Streaming Nanodegree',
      issuer: 'Udacity',
      date: '2022',
      status: 'Completed',
      icon: Cloud,
      color: 'from-purple-400 to-purple-600',
      description: 'Real-time data streaming and processing with modern technologies',
      skills: ['Apache Kafka', 'Spark Streaming', 'KSQL', 'Faust', 'Redis', 'PostgreSQL'],
      credentialId: 'UD-DS-2022',
      verifyUrl: 'https://www.udacity.com/course/data-streaming-nanodegree--nd029'
    }
  ]

  const achievements = [
    {
      title: 'ETL Performance Optimization',
      organization: 'e& (Etisalat)',
      year: '2024',
      description: 'Reduced batch ETL processing time from 18 hours to 3 hours using SQL and Spark optimization techniques',
      icon: TrendingUp
    },
    {
      title: 'Development Efficiency Enhancement',
      organization: 'LigaData',
      year: '2023',
      description: 'Developed bash and Python programs reducing data engineering team development time from 5 hours to 1.5 hours per pipeline',
      icon: Code
    },
    {
      title: 'Machine Learning Excellence',
      organization: 'Upwork - Freelance',
      year: '2022-2023',
      description: 'Developed and deployed ML models to predict trends with 85% accuracy, earned consistent 5-star feedback for timely deliverables',
      icon: Award
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
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuously learning and validating expertise in cutting-edge technologies
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  {<cert.icon className="w-12 h-12" />}
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{cert.status}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-sm opacity-90">{cert.issuer}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    ID: {cert.credentialId}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verify Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(cert.verifyUrl, '_blank')}
                  className="w-full bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify Certificate</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Professional Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full mb-4">
                  {<achievement.icon className="w-8 h-8" />}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {achievement.organization}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-xl">
            <Brain className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-lg text-primary-100 max-w-3xl mx-auto">
              Staying current with emerging technologies and best practices in data engineering, 
              machine learning, and cloud computing through continuous professional development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
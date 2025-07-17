'use client'

import { motion } from 'framer-motion'
import { 
  Building, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  TrendingUp,
  Database,
  Cloud,
  Code,
  Users
} from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Data Engineer',
      company: 'e& (Etisalat)',
      location: 'Dubai, UAE',
      duration: 'Nov 2024 - Present',
      type: 'Full-time',
      description: 'Leading data engineering initiatives for one of the largest telecommunications companies in the Middle East, focusing on real-time customer segmentation and campaign management.',
      achievements: [
        'Design and execute real-time and ad hoc campaigns using HDFS, SQL, Spark, Hive, and Impala',
        'Develop scalable data workflows for efficient campaign management',
        'Engineer and maintain a custom ETL framework with dynamic Scala compilation for business logic',
        'Enable rapid development of data pipelines and real-time customer segmentation',
        'Optimize workflows with advanced SQL for accurate and timely execution'
      ],
      technologies: ['Apache Spark', 'Hadoop', 'HDFS', 'SQL', 'Scala', 'Hive', 'Impala', 'ETL', 'Real-time Processing'],
      icon: Building,
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: 'Data Engineer',
      company: 'LigaData',
      location: 'Remote - USA Company',
      duration: 'Oct 2022 - Nov 2024',
      type: 'Full-time',
      description: 'Developed and maintained enterprise-scale data infrastructure, focusing on ETL pipelines, reporting, and cloud-native data fabric solutions.',
      achievements: [
        'Spearheaded the ingestion and transformation of large datasets from various sources into HDFS',
        'Enhanced the analytics capabilities of the team through optimized data workflows',
        'Developed and optimized ETL pipelines to facilitate efficient data flow and reporting',
        'Reduced report generation time by 40% by automating data workflows using Python, Hive, and Power BI',
        'Contributed to the development of a data fabric product on Kubernetes for secure and scalable data integration'
      ],
      technologies: ['Python', 'Hive', 'HDFS', 'Power BI', 'Kubernetes', 'ETL', 'Data Fabric', 'Cloud Integration'],
      icon: Code,
      color: 'from-green-600 to-green-800'
    },
    {
      title: 'Freelance Data Engineer & Analyst',
      company: 'Upwork',
      location: 'Remote',
      duration: 'Jun 2022 - Dec 2023',
      type: 'Freelance',
      description: 'Delivered high-quality data engineering and analytics solutions to global clients, specializing in web scraping, ETL processes, and machine learning model deployment.',
      achievements: [
        'Built ETL processes to gather and analyze large-scale job market data using web scraping techniques',
        'Contributed to clients\' tasks with comprehensive data analysis and insights',
        'Developed and deployed machine learning models to predict trends with an 85% accuracy',
        'Streamlined clients\' forecasting processes through automated ML pipelines',
        'Earned consistent 5-star feedback due to timely deliverables and high-quality data insights'
      ],
      technologies: ['Python', 'Web Scraping', 'ETL', 'Machine Learning', 'Data Analysis', 'Predictive Analytics'],
      icon: Users,
      color: 'from-purple-600 to-purple-800'
    },
    {
      title: 'Data Analyst and Operations',
      company: 'Cube',
      location: 'Cairo, Egypt',
      duration: 'Aug 2019 - Sep 2021',
      type: 'Full-time',
      description: 'Started career in data analysis and operations, focusing on process automation and business intelligence dashboard development.',
      achievements: [
        'Automated data processes with Python and SQL, cutting manual work by 40%',
        'Built Power BI dashboards to improve decision-making across the organization',
        'Implemented data quality controls and validation processes',
        'Contributed to operational efficiency improvements through data-driven insights',
        'Gained foundational experience in data processing and business intelligence'
      ],
      technologies: ['Python', 'SQL', 'Power BI', 'Data Analysis', 'Process Automation', 'Business Intelligence'],
      icon: TrendingUp,
      color: 'from-orange-600 to-orange-800'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building data solutions that drive business growth and innovation
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-primary-400 hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline Icon */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 border-4 border-primary-600 rounded-full z-10">
                  {<exp.icon className="w-8 h-8 text-primary-600" />}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                          <div className="flex items-center space-x-1">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                        <div className="flex items-center space-x-1 text-primary-600 dark:text-primary-400">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
            <p className="text-lg text-primary-100 max-w-3xl mx-auto">
              Specializing in real-time data processing, cloud-native architectures, and 
              machine learning integration for enterprise-scale applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
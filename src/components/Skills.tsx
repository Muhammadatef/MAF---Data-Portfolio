'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Cloud, 
  BarChart3, 
  Zap, 
  Server,
  Brain
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 95, color: 'from-green-400 to-green-600' },
        { name: 'SQL', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'Linux', level: 80, color: 'from-gray-400 to-gray-600' },
        { name: 'Bash', level: 60, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Scala', level: 30, color: 'from-red-400 to-red-600' },
      ]
    },
    {
      title: 'Big Data & Processing',
      icon: Database,
      skills: [
        { name: 'Apache Spark', level: 92, color: 'from-orange-400 to-orange-600' },
        { name: 'Hadoop', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Airflow', level: 85, color: 'from-teal-400 to-teal-600' },
        { name: 'Hive', level: 80, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Kafka', level: 70, color: 'from-gray-400 to-gray-600' },
      ]
    },
    {
      title: 'Real-Time Technologies',
      icon: Zap,
      skills: [
        { name: 'Spark Streaming', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'Kafka Streams', level: 30, color: 'from-purple-400 to-purple-600' },
      ]
    },
    {
      title: 'Analytics & Visualization',
      icon: BarChart3,
      skills: [
        { name: 'Jupyter', level: 92, color: 'from-orange-400 to-orange-600' },
        { name: 'Power BI', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Matplotlib', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'Plotly', level: 85, color: 'from-purple-400 to-purple-600' },
        { name: 'Seaborn', level: 70, color: 'from-green-400 to-green-600' },
      ]
    },
    {
      title: 'Cloud & Containerization',
      icon: Cloud,
      skills: [
        { name: 'Docker', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'Azure', level: 70, color: 'from-blue-400 to-blue-600' },
        { name: 'AWS', level: 50, color: 'from-orange-400 to-orange-600' },
        { name: 'DataBricks', level: 50, color: 'from-red-400 to-red-600' },
        { name: 'Kubernetes', level: 40, color: 'from-purple-400 to-purple-600' },
      ]
    },
    {
      title: 'Data Science & ML',
      icon: Brain,
      skills: [
        { name: 'Pandas', level: 90, color: 'from-green-400 to-green-600' },
        { name: 'scikit-learn', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'Numpy', level: 70, color: 'from-blue-400 to-blue-600' },
        { name: 'Statistical Analysis', level: 50, color: 'from-blue-400 to-blue-600' },
        { name: 'TensorFlow', level: 30, color: 'from-orange-400 to-orange-600' },
      ]
    },
    {
      title: 'Databases',
      icon: Server,
      skills: [
        { name: 'PostgreSQL', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'MySQL', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'MongoDB', level: 40, color: 'from-green-400 to-green-600' },
        { name: 'Redis', level: 40, color: 'from-red-400 to-red-600' },
        { name: 'Elasticsearch', level: 40, color: 'from-yellow-400 to-yellow-600' },
      ]
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
    <section id="skills" className="py-20 bg-white dark:bg-black">
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expertise across the full data engineering and analytics stack
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary-600 text-white rounded-lg">
                  {<category.icon className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`skill-progress bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning & Willing to Learn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Currently Learning & Willing to Learn
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'GitHub Actions',
              'Jenkins',
              'pytest',
              'Snowflake',
              'Flink',
              'Kinesis',
              'Great Expectations',
              'LLMs'
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 px-6 py-3 rounded-full text-primary-700 dark:text-primary-300 font-medium border border-primary-300 dark:border-primary-700"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
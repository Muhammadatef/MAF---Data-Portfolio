'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Cloud, 
  BarChart3, 
  Zap, 
  Server,
  Brain,
  Settings
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 95, color: 'from-green-400 to-green-600' },
        { name: 'SQL', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'Scala', level: 80, color: 'from-red-400 to-red-600' },
        { name: 'JavaScript', level: 75, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Java', level: 70, color: 'from-orange-400 to-orange-600' },
      ]
    },
    {
      title: 'Big Data & Processing',
      icon: Database,
      skills: [
        { name: 'Apache Spark', level: 92, color: 'from-orange-400 to-orange-600' },
        { name: 'Hadoop', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Kafka', level: 88, color: 'from-gray-400 to-gray-600' },
        { name: 'Airflow', level: 85, color: 'from-teal-400 to-teal-600' },
        { name: 'Hive', level: 80, color: 'from-yellow-400 to-yellow-600' },
      ]
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'Azure', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Docker', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'Kubernetes', level: 75, color: 'from-purple-400 to-purple-600' },
        { name: 'Terraform', level: 80, color: 'from-purple-400 to-purple-600' },
      ]
    },
    {
      title: 'Data Science & ML',
      icon: Brain,
      skills: [
        { name: 'Pandas', level: 90, color: 'from-green-400 to-green-600' },
        { name: 'scikit-learn', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'TensorFlow', level: 80, color: 'from-orange-400 to-orange-600' },
        { name: 'PyTorch', level: 75, color: 'from-red-400 to-red-600' },
        { name: 'Statistical Analysis', level: 85, color: 'from-blue-400 to-blue-600' },
      ]
    },
    {
      title: 'Databases',
      icon: Server,
      skills: [
        { name: 'PostgreSQL', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'MySQL', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'MongoDB', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'Redis', level: 78, color: 'from-red-400 to-red-600' },
        { name: 'Elasticsearch', level: 75, color: 'from-yellow-400 to-yellow-600' },
      ]
    },
    {
      title: 'Analytics & Visualization',
      icon: BarChart3,
      skills: [
        { name: 'Power BI', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Tableau', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Jupyter', level: 92, color: 'from-orange-400 to-orange-600' },
        { name: 'Matplotlib', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'Plotly', level: 85, color: 'from-purple-400 to-purple-600' },
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

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'DevOps & CI/CD', icon: Settings, items: ['Git', 'Jenkins', 'GitHub Actions', 'GitLab CI'] },
              { title: 'Monitoring', icon: BarChart3, items: ['Prometheus', 'Grafana', 'ELK Stack', 'DataDog'] },
              { title: 'Message Queues', icon: Zap, items: ['Apache Kafka', 'RabbitMQ', 'AWS SQS', 'Azure Service Bus'] },
              { title: 'Stream Processing', icon: Database, items: ['Spark Streaming', 'Flink', 'Storm', 'Kinesis'] },
            ].map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-lg mb-4">
                  {<area.icon className="w-6 h-6" />}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {area.title}
                </h4>
                <div className="space-y-1">
                  {area.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="text-sm text-gray-600 dark:text-gray-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
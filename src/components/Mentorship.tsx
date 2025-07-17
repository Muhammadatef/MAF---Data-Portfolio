'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  BookOpen, 
  Globe, 
  ExternalLink, 
  Github,
  Heart,
  Star,
  Target,
  Lightbulb,
  TrendingUp
} from 'lucide-react'

const Mentorship = () => {
  const roadmapProject = {
    title: 'Data Engineering Roadmap for Arabic Speakers',
    description: 'A comprehensive roadmap and learning path for aspiring data engineers in the Arabic-speaking community, providing structured guidance through the essential skills and technologies needed to succeed in data engineering.',
    features: [
      'Step-by-step learning path from beginner to advanced',
      'Arabic language support for better accessibility',
      'Hands-on projects and practical exercises',
      'Community-driven content and continuous updates',
      'Real-world case studies and examples',
      'Career guidance and industry insights'
    ],
    stats: [
      { label: 'GitHub Stars', value: '100+', icon: Star },
      { label: 'Community Members', value: '200+', icon: Users },
      { label: 'Learning Modules', value: '25+', icon: BookOpen },
      { label: 'Success Stories', value: '50+', icon: TrendingUp }
    ],
    technologies: [
      'Python', 'SQL', 'Apache Spark', 'Airflow', 'Docker', 'AWS', 'Azure', 'Kafka', 'PostgreSQL', 'MongoDB'
    ],
    links: {
      website: 'https://muhammadatef.github.io/Data-Engineering-Roadmap-For-Arabic-Speaker/',
      github: 'https://github.com/Muhammadatef/Data-Engineering-Roadmap-For-Arabic-Speaker'
    }
  }

  const mentorshipHighlights = [
    {
      icon: Target,
      title: 'Clear Learning Path',
      description: 'Structured roadmap from basics to advanced data engineering concepts'
    },
    {
      icon: Globe,
      title: 'Arabic Language Support',
      description: 'Making data engineering accessible to Arabic-speaking developers'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Growing a supportive community of data engineering learners'
    },
    {
      icon: Lightbulb,
      title: 'Practical Projects',
      description: 'Real-world projects and hands-on learning experiences'
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
    <section id="mentorship" className="py-20 bg-white dark:bg-black">
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
            Mentorship & <span className="gradient-text">Community</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering the next generation of data engineers through education, mentorship, and community building
          </p>
        </motion.div>

        {/* Main Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Project Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {roadmapProject.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {roadmapProject.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <motion.a
                    href={roadmapProject.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-200"
                  >
                    <Globe className="w-5 h-5" />
                    <span>Visit Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  
                  <motion.a
                    href={roadmapProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200"
                  >
                    <Github className="w-5 h-5" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {roadmapProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {roadmapProject.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg mb-3">
                      {<stat.icon className="w-6 h-6" />}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapProject.features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mentorship Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {mentorshipHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-6 rounded-xl text-center border border-primary-200 dark:border-primary-800"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-lg mb-4">
                {<highlight.icon className="w-6 h-6" />}
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {highlight.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-xl">
            <Heart className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">Making Data Engineering Accessible</h3>
            <p className="text-lg text-primary-100 max-w-3xl mx-auto">
              Through mentorship and community building, I'm committed to making data engineering 
              education accessible to Arabic-speaking developers worldwide. Join our growing community 
              of learners and professionals who are shaping the future of data engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Mentorship
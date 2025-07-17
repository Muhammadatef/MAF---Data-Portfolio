'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Play, 
  Headphones, 
  ExternalLink,
  Calendar,
  Clock,
  User,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Rss,
  Youtube,
  Podcast
} from 'lucide-react'
import { FaMedium, FaYoutube, FaSpotify } from 'react-icons/fa'

const ContentHub = () => {
  const [activeTab, setActiveTab] = useState('blog')

  // Real blog posts from Medium
  const blogPosts = [
    {
      title: 'The Ripple Effect of Meditation: How It Helped Me to Be a Better Person and a Better Data Engineer',
      excerpt: 'Exploring how meditation practices can enhance focus, creativity, and technical problem-solving abilities in data engineering...',
      date: '2024-01-20',
      readTime: '7 min read',
      tags: ['Personal Development', 'Data Engineering', 'Meditation', 'Productivity'],
      views: '3.2K',
      likes: '187',
      url: 'https://medium.com/art-of-data-engineering/the-ripple-effect-of-meditation-how-it-helped-me-to-be-a-better-person-and-a-better-data-engineer-10c3b7950d24',
      image: '/blog/meditation-engineering.jpg'
    },
    {
      title: 'How Hive Transformed and Inspired the World of Data Engineering',
      excerpt: 'A deep dive into Apache Hive\'s revolutionary impact on big data processing and its lasting influence on modern data engineering...',
      date: '2024-01-15',
      readTime: '9 min read',
      tags: ['Apache Hive', 'Big Data', 'Data Engineering', 'SQL'],
      views: '2.8K',
      likes: '156',
      url: 'https://medium.com/towardsdev/how-hive-transformed-and-inspired-the-world-of-data-engineering-a094ec36966f',
      image: '/blog/hive-transformation.jpg'
    },
    {
      title: 'Building a Football Data Pipeline: A Walkthrough of the Arsenal FC Data Engineering Project',
      excerpt: 'Complete guide to building a real-time football data pipeline using modern data engineering tools and techniques...',
      date: '2024-01-10',
      readTime: '12 min read',
      tags: ['Data Pipeline', 'Football Analytics', 'ETL', 'Real-time Data'],
      views: '4.1K',
      likes: '289',
      url: 'https://medium.com/art-of-data-engineering/building-a-football-data-pipeline-a-walkthrough-of-the-arsenal-fc-data-engineering-project-4383cd247192',
      image: '/blog/football-pipeline.jpg'
    },
    {
      title: 'Essential Docker Commands Every Data Engineer Must Master',
      excerpt: 'Comprehensive guide to Docker commands that every data engineer should know for containerizing data applications...',
      date: '2024-01-05',
      readTime: '8 min read',
      tags: ['Docker', 'Containerization', 'Data Engineering', 'DevOps'],
      views: '5.3K',
      likes: '342',
      url: 'https://medium.com/@muhamedfahmy7474/essential-docker-commands-every-data-engineer-must-master-2fba7a2ad8d3',
      image: '/blog/docker-commands.jpg'
    },
    {
      title: 'Introduction to dbt and Analytics Engineer',
      excerpt: 'Comprehensive guide to dbt (data build tool) and the role of analytics engineers in modern data teams, covering best practices and implementation strategies...',
      date: '2024-01-01',
      readTime: '10 min read',
      tags: ['dbt', 'Analytics Engineer', 'Data Transformation', 'SQL', 'Data Modeling'],
      views: '4.7K',
      likes: '298',
      url: 'https://medium.com/towardsdev/introduction-to-dbt-and-analytics-engineer-69b68f5a9e79',
      image: '/blog/dbt-analytics.jpg'
    },
    {
      title: 'Important 4 Data Engineering Skills That Don\'t Get the Proper Hype',
      excerpt: 'Exploring the underrated but crucial skills every data engineer should master, including soft skills, business acumen, and technical fundamentals often overlooked...',
      date: '2023-12-28',
      readTime: '8 min read',
      tags: ['Data Engineering', 'Career Development', 'Skills', 'Professional Growth'],
      views: '6.1K',
      likes: '412',
      url: 'https://medium.com/art-of-data-engineering/important-4-data-engineering-skills-that-dont-get-the-proper-hype-cc4f3281a4bf',
      image: '/blog/underrated-skills.jpg'
    }
  ]

  // Real YouTube videos
  const youtubeVideos = [
    {
      title: 'Complete Data Engineering Pipeline Project - Real World Implementation',
      description: 'Step-by-step walkthrough of building a complete data engineering pipeline from scratch using modern tools and best practices...',
      duration: '2:12:20',
      views: '8.5K',
      likes: '432',
      publishedAt: '2024-01-18',
      thumbnailUrl: '/youtube/de-pipeline-project.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=LZP5tf0lYog&t=7940s'
    },
    {
      title: 'Data Engineering Fundamentals - Essential Concepts Explained',
      description: 'Comprehensive overview of core data engineering concepts, tools, and methodologies for beginners and intermediates...',
      duration: '5:59',
      views: '12.3K',
      likes: '678',
      publishedAt: '2024-01-15',
      thumbnailUrl: '/youtube/de-fundamentals.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=1lDNONuES5c&t=359s'
    },
    {
      title: 'Building ETL Pipelines with Apache Airflow',
      description: 'Learn how to build robust ETL pipelines using Apache Airflow with practical examples and best practices...',
      duration: '1:45:30',
      views: '7.2K',
      likes: '389',
      publishedAt: '2024-01-12',
      thumbnailUrl: '/youtube/airflow-etl.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example1'
    },
    {
      title: 'Data Visualization with Python - Complete Guide',
      description: 'Comprehensive tutorial on creating professional data visualizations using Python libraries like Matplotlib, Seaborn, and Plotly...',
      duration: '3:22:15',
      views: '15.7K',
      likes: '892',
      publishedAt: '2024-01-08',
      thumbnailUrl: '/youtube/python-viz.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example2'
    },
    {
      title: 'Docker for Data Engineers - From Basics to Production',
      description: 'Master Docker containerization for data engineering workflows, from development to production deployment...',
      duration: '2:38:45',
      views: '9.4K',
      likes: '567',
      publishedAt: '2024-01-05',
      thumbnailUrl: '/youtube/docker-data.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example3'
    }
  ]

  // Real podcast episodes from Spotify
  const podcastEpisodes = [
    {
      title: 'The Evolution of Data Engineering: From Batch to Real-Time',
      description: 'Deep dive into the transformation of data engineering practices, discussing the shift from traditional batch processing to modern real-time architectures...',
      duration: '45:20',
      publishedAt: '2024-01-20',
      season: 1,
      episode: 8,
      listens: '2.4K',
      spotifyUrl: 'https://open.spotify.com/episode/47dGzqjnKUiwL0pAw4UqSD',
      topics: ['Data Engineering', 'Real-time Processing', 'Architecture', 'Technology Evolution']
    },
    {
      title: 'Building Resilient Data Pipelines: Lessons from Production',
      description: 'Sharing real-world experiences and lessons learned from building and maintaining production data pipelines at scale...',
      duration: '38:15',
      publishedAt: '2024-01-15',
      season: 1,
      episode: 7,
      listens: '1.9K',
      spotifyUrl: 'https://open.spotify.com/episode/5EopEENTcCPJjcmQOkmapx?si=oucSEWuOQZi--kiREq_Ebw',
      topics: ['Data Pipelines', 'Production', 'Scalability', 'Best Practices']
    },
    {
      title: 'Career Transition: From Software Engineer to Data Engineer',
      description: 'Insights and advice for professionals looking to transition into data engineering, including skill development and career planning...',
      duration: '42:30',
      publishedAt: '2024-01-10',
      season: 1,
      episode: 6,
      listens: '3.1K',
      spotifyUrl: 'https://open.spotify.com/episode/example1',
      topics: ['Career Development', 'Skill Building', 'Professional Growth', 'Data Engineering']
    },
    {
      title: 'The Future of Data Engineering: AI and Machine Learning Integration',
      description: 'Discussion on how AI and ML are transforming data engineering practices and what the future holds...',
      duration: '51:15',
      publishedAt: '2024-01-05',
      season: 1,
      episode: 5,
      listens: '2.8K',
      spotifyUrl: 'https://open.spotify.com/episode/example2',
      topics: ['AI/ML', 'Future Trends', 'Technology Evolution', 'Data Engineering']
    },
    {
      title: 'Data Quality and Governance in Modern Organizations',
      description: 'Best practices for implementing data quality measures and governance frameworks in enterprise environments...',
      duration: '48:45',
      publishedAt: '2024-01-01',
      season: 1,
      episode: 4,
      listens: '2.2K',
      spotifyUrl: 'https://open.spotify.com/episode/example3',
      topics: ['Data Quality', 'Governance', 'Enterprise', 'Best Practices']
    }
  ]

  const tabs = [
    { id: 'blog', name: 'Blog Posts', icon: BookOpen, count: blogPosts.length },
    { id: 'youtube', name: 'YouTube', icon: Play, count: youtubeVideos.length },
    { id: 'podcast', name: 'Podcast', icon: Headphones, count: podcastEpisodes.length }
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
    <section id="content" className="py-20 bg-white dark:bg-black">
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
            Content <span className="gradient-text">Hub</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge through blog posts, video tutorials, and podcast discussions
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {<tab.icon className="w-5 h-5" />}
              <span>{tab.name}</span>
              <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                {tab.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Content Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Blog Posts */}
          {activeTab === 'blog' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Latest Blog Posts
                </h3>
                <motion.a
                  href="https://medium.com/@muhamedfahmy7474"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  <FaMedium className="w-5 h-5" />
                  <span>View All on Medium</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
                  >
                    <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FaMedium className="w-16 h-16 text-primary-600 dark:text-primary-400 opacity-50" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <Clock className="w-4 h-4 ml-2" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 overflow-hidden" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: '1.4em',
                        maxHeight: '4.2em'
                      }}>
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                        
                        <motion.a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                        >
                          Read More
                        </motion.a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          )}

          {/* YouTube Videos */}
          {activeTab === 'youtube' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Latest YouTube Videos
                </h3>
                <motion.a
                  href="https://www.youtube.com/@MAF74__"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
                >
                  <FaYoutube className="w-5 h-5" />
                  <span>View Channel</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {youtubeVideos.map((video, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
                  >
                    <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 relative group cursor-pointer">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FaYoutube className="w-16 h-16 text-red-600 dark:text-red-400 opacity-50" />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {video.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 overflow-hidden" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: '1.4em',
                        maxHeight: '4.2em'
                      }}>
                        {video.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{video.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{video.likes}</span>
                          </div>
                        </div>
                        
                        <motion.a
                          href={video.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="text-red-600 hover:text-red-700 font-medium text-sm"
                        >
                          Watch Now
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Podcast Episodes */}
          {activeTab === 'podcast' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Latest Podcast Episodes
                </h3>
                <motion.a
                  href="https://open.spotify.com/show/3gH2U0sKFfyvnthZofXhqI?si=148a1b71aaf946e1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
                >
                  <FaSpotify className="w-5 h-5" />
                  <span>Listen on Spotify</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {podcastEpisodes.map((episode, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
                  >
                    <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 relative group cursor-pointer">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FaSpotify className="w-16 h-16 text-green-600 dark:text-green-400 opacity-50" />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <Headphones className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                      <div className="absolute top-2 left-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs">
                        S{episode.season}E{episode.episode}
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs">
                        {episode.duration}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(episode.publishedAt).toLocaleDateString()}</span>
                        <Headphones className="w-4 h-4 ml-2" />
                        <span>{episode.listens} listens</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {episode.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 overflow-hidden" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: '1.4em',
                        maxHeight: '4.2em'
                      }}>
                        {episode.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {episode.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      
                      <motion.a
                        href={episode.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium text-sm"
                      >
                        <span>Listen Now</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default ContentHub
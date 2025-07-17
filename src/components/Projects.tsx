'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  Github, 
  Database, 
  BarChart3, 
  Cloud, 
  Zap,
  Filter,
  Eye,
  Code,
  PlayCircle,
  TrendingUp
} from 'lucide-react'
import { SiPowerbi, SiApachespark, SiPython, SiAmazonaws, SiMicrosoftazure, SiDocker } from 'react-icons/si'
import NovyProPanel from './NovyProPanel'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const categories = [
    { id: 'all', name: 'All Projects', icon: Database },
    { id: 'data-engineering', name: 'Data Engineering', icon: Zap },
    { id: 'data-science', name: 'Data Science', icon: BarChart3 },
    { id: 'analytics', name: 'Analytics & BI', icon: TrendingUp },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud },
  ]

  const projects = [
    // Data Engineering Projects
    {
      id: 'data-engineering-roadmap',
      title: 'Data Engineering Roadmap for Arabic Speakers',
      description: 'Comprehensive roadmap and resources for Arabic speakers to learn data engineering. Features structured learning path with practical projects.',
      category: 'data-engineering',
      tags: ['Education', 'Arabic', 'Data Engineering', 'Learning Path', 'Community'],
      image: '/projects/de-roadmap.png',
      github: 'https://github.com/Muhammadatef/Data-Engineering-Roadmap-For-Arabic-Speaker',
      demo: 'https://github.com/Muhammadatef/Data-Engineering-Roadmap-For-Arabic-Speaker',
      tech: [
        { name: 'JavaScript', icon: SiPython },
        { name: 'Documentation', icon: SiPython },
        { name: 'Community', icon: SiPython },
        { name: 'Arabic', icon: SiPython },
      ],
      features: [
        'Structured learning path',
        'Arabic language support',
        'Practical projects',
        'Community-driven content',
        'Regular updates'
      ],
      metrics: {
        'GitHub Stars': '101',
        'Forks': '4',
        'Contributors': '5+',
        'Language': 'Arabic'
      }
    },
    {
      id: 'aws-retail-pipeline',
      title: 'AWS Retail Data ETL Pipeline',
      description: 'Comprehensive ETL pipeline processing retail transaction data using AWS services, implementing data quality checks and automated monitoring.',
      category: 'data-engineering',
      tags: ['AWS', 'Python', 'ETL', 'Data Quality', 'Airflow'],
      image: '/projects/aws-retail.png',
      github: 'https://github.com/Muhammadatef/AWS-Retail-Data-ETL-Pipeline',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'AWS', icon: SiAmazonaws },
        { name: 'Python', icon: SiPython },
        { name: 'Spark', icon: SiApachespark },
        { name: 'PowerBI', icon: SiPowerbi },
      ],
      features: [
        'Real-time data ingestion',
        'Automated data quality checks',
        'Scalable processing with Spark',
        'Interactive dashboards',
        'Cost optimization strategies'
      ],
      metrics: {
        'Data Volume': '500GB+',
        'Processing Speed': '10M records/min',
        'Uptime': '99.9%',
        'Cost Savings': '40%'
      }
    },
    {
      id: 'streaming-kafka-pipeline',
      title: 'Click Streaming Data Pipeline',
      description: 'Real-time streaming pipeline using Kafka, MinIO, and Spark Streaming for processing user interaction data at scale.',
      category: 'data-engineering',
      tags: ['Kafka', 'Spark Streaming', 'MinIO', 'Real-time', 'Docker'],
      image: '/projects/kafka-streaming.png',
      github: 'https://github.com/Muhammadatef/Click-Streaming-Data-Pipeline',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'Kafka', icon: SiPython },
        { name: 'Spark', icon: SiApachespark },
        { name: 'Python', icon: SiPython },
        { name: 'Docker', icon: SiDocker },
      ],
      features: [
        'Low-latency processing',
        'Fault-tolerant architecture',
        'Horizontal scaling',
        'Stream analytics',
        'Containerized deployment'
      ],
      metrics: {
        'Latency': '<100ms',
        'Throughput': '1M events/sec',
        'Availability': '99.99%',
        'Scalability': '10x'
      }
    },
    {
      id: 'de-zoomcamp-2024',
      title: 'Data Engineering Zoomcamp 2024',
      description: 'Complete data engineering bootcamp project showcasing end-to-end pipeline development with modern tools and best practices.',
      category: 'data-engineering',
      tags: ['Education', 'Portfolio', 'Best Practices', 'Modern Stack'],
      image: '/projects/de-zoomcamp.png',
      github: 'https://github.com/Muhammadatef/DE-ZoomCamp2024',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'Python', icon: SiPython },
        { name: 'Docker', icon: SiDocker },
        { name: 'AWS', icon: SiAmazonaws },
        { name: 'Spark', icon: SiApachespark },
      ],
      features: [
        'Infrastructure as Code',
        'CI/CD pipelines',
        'Data quality testing',
        'Monitoring & alerting',
        'Documentation'
      ],
      metrics: {
        'Technologies': '10+',
        'Projects': '6',
        'Best Practices': '20+',
        'Certification': 'Completed'
      }
    },
    {
      id: 'data-streaming-udacity',
      title: 'Data Streaming Udacity Nanodegree',
      description: 'Comprehensive streaming data engineering project from Udacity Nanodegree program featuring real-time data processing and analytics.',
      category: 'data-engineering',
      tags: ['Udacity', 'Streaming', 'Real-time', 'Kafka', 'Spark'],
      image: '/projects/udacity-streaming.png',
      github: 'https://github.com/Muhammadatef/DataStreaming-UdacityNanodegree',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'Python', icon: SiPython },
        { name: 'Kafka', icon: SiPython },
        { name: 'Spark', icon: SiApachespark },
        { name: 'Docker', icon: SiDocker },
      ],
      features: [
        'Real-time stream processing',
        'Kafka integration',
        'Spark streaming',
        'Data quality monitoring',
        'Scalable architecture'
      ],
      metrics: {
        'Processing Speed': '1M+ events/sec',
        'Latency': '<50ms',
        'Certification': 'Completed',
        'Grade': 'Passed'
      }
    },
    {
      id: 'etl-airflow-workshop',
      title: 'ETL Airflow Workshop',
      description: 'Hands-on workshop demonstrating ETL pipeline development using Apache Airflow for workflow orchestration and automation.',
      category: 'data-engineering',
      tags: ['Airflow', 'ETL', 'Workshop', 'Python', 'Pipeline'],
      image: '/projects/airflow-workshop.png',
      github: 'https://github.com/Muhammadatef/ETL-Airflow-Workshop',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'Apache Airflow', icon: SiPython },
        { name: 'Python', icon: SiPython },
        { name: 'Docker', icon: SiDocker },
        { name: 'PostgreSQL', icon: SiPython },
      ],
      features: [
        'Workflow orchestration',
        'DAG development',
        'Task scheduling',
        'Error handling',
        'Monitoring dashboard'
      ],
      metrics: {
        'DAGs Created': '5+',
        'Tasks': '20+',
        'Success Rate': '99%',
        'Workshop': 'Completed'
      }
    },
    {
      id: 'dimensional-modeling',
      title: 'Dimensional Modeling Practical Guide',
      description: 'Comprehensive guide to dimensional modeling techniques for data warehousing with practical examples and best practices.',
      category: 'data-engineering',
      tags: ['Dimensional Modeling', 'Data Warehouse', 'SQL', 'Star Schema', 'ETL'],
      image: '/projects/dimensional-modeling.png',
      github: 'https://github.com/Muhammadatef/Dimensional-Modeling-Practiical-guide',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'SQL', icon: SiPython },
        { name: 'Data Warehouse', icon: SiPython },
        { name: 'Star Schema', icon: SiPython },
        { name: 'ETL', icon: SiPython },
      ],
      features: [
        'Star schema design',
        'Dimension tables',
        'Fact tables',
        'Data modeling patterns',
        'Performance optimization'
      ],
      metrics: {
        'Models Created': '10+',
        'Schemas': '5+',
        'Performance': '80% faster',
        'Coverage': 'Complete'
      }
    },
    {
      id: 'dbt-fundamentals',
      title: 'DBT Fundamentals Course Project',
      description: 'Data Build Tool (DBT) fundamentals project demonstrating modern data transformation and testing practices.',
      category: 'data-engineering',
      tags: ['DBT', 'Data Transformation', 'SQL', 'Testing', 'Documentation'],
      image: '/projects/dbt-fundamentals.png',
      github: 'https://github.com/Muhammadatef/DBT-Fundemntals-Course-Project',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'DBT', icon: SiPython },
        { name: 'SQL', icon: SiPython },
        { name: 'BigQuery', icon: SiPython },
        { name: 'Git', icon: SiPython },
      ],
      features: [
        'Data transformation',
        'Model testing',
        'Documentation generation',
        'Version control',
        'CI/CD integration'
      ],
      metrics: {
        'Models': '15+',
        'Tests': '30+',
        'Documentation': '100%',
        'Course': 'Completed'
      }
    },
    {
      id: 'spark-recap',
      title: 'Apache Spark Comprehensive Recap',
      description: 'Comprehensive recap covering RDD, DataFrame, Spark Streaming, and ML operations with practical examples.',
      category: 'data-engineering',
      tags: ['Spark', 'RDD', 'DataFrame', 'Streaming', 'Machine Learning'],
      image: '/projects/spark-recap.png',
      github: 'https://github.com/Muhammadatef/Spark-Recap',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'Apache Spark', icon: SiApachespark },
        { name: 'Python', icon: SiPython },
        { name: 'Scala', icon: SiPython },
        { name: 'Hadoop', icon: SiPython },
      ],
      features: [
        'RDD operations',
        'DataFrame API',
        'Spark Streaming',
        'MLlib integration',
        'Performance tuning'
      ],
      metrics: {
        'Topics Covered': '20+',
        'Examples': '50+',
        'Performance': '5x faster',
        'Completeness': '100%'
      }
    },
    {
      id: 'tokyo-olympics-azure',
      title: 'Tokyo Olympics 2021 Data Analysis - Azure',
      description: 'Comprehensive analysis of Tokyo Olympics 2021 data using Azure cloud services for scalable data processing and visualization.',
      category: 'data-engineering',
      tags: ['Azure', 'Olympics', 'Data Analysis', 'Cloud', 'Visualization'],
      image: '/projects/tokyo-olympics.png',
      github: 'https://github.com/Muhammadatef/Tokyo-Olympic-2021-Data-Using-Azure-',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      powerbi: 'https://www.novypro.com/project/tokyo-olympics-dashboard',
      novypro: 'https://www.novypro.com/project/tokyo-olympics-dashboard',
      tech: [
        { name: 'Azure', icon: SiMicrosoftazure },
        { name: 'Python', icon: SiPython },
        { name: 'PowerBI', icon: SiPowerbi },
        { name: 'Data Factory', icon: SiMicrosoftazure },
      ],
      features: [
        'Azure Data Factory',
        'Data Lake Storage',
        'Interactive dashboards',
        'Real-time analytics',
        'Performance metrics'
      ],
      metrics: {
        'Athletes': '11K+',
        'Events': '339',
        'Countries': '206',
        'Insights': '50+'
      }
    },
    {
      id: 'real-time-pipeline',
      title: 'Real-time End-To-End Pipeline',
      description: 'Complete real-time data pipeline architecture with stream processing, real-time analytics, and monitoring capabilities.',
      category: 'data-engineering',
      tags: ['Real-time', 'Streaming', 'Pipeline', 'Analytics', 'Monitoring'],
      image: '/projects/realtime-pipeline.png',
      github: 'https://github.com/Muhammadatef/real-time-End-To-End-Pipeline',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'Apache Kafka', icon: SiPython },
        { name: 'Apache Spark', icon: SiApachespark },
        { name: 'Python', icon: SiPython },
        { name: 'Docker', icon: SiDocker },
      ],
      features: [
        'Stream processing',
        'Real-time analytics',
        'Fault tolerance',
        'Monitoring dashboard',
        'Scalable architecture'
      ],
      metrics: {
        'Throughput': '1M+ events/sec',
        'Latency': '<100ms',
        'Availability': '99.9%',
        'Scalability': '10x'
      }
    },
    {
      id: 'datalemour-solutions',
      title: 'DataLemour SQL Solutions',
      description: 'Comprehensive SQL solutions and practice problems from DataLemour platform covering advanced SQL techniques and data analysis.',
      category: 'data-engineering',
      tags: ['SQL', 'DataLemour', 'Practice', 'Advanced', 'Database'],
      image: '/projects/datalemour.png',
      github: 'https://github.com/Muhammadatef/DataLemourSolutions',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'SQL', icon: SiPython },
        { name: 'PostgreSQL', icon: SiPython },
        { name: 'MySQL', icon: SiPython },
        { name: 'Data Analysis', icon: SiPython },
      ],
      features: [
        'Advanced SQL queries',
        'Window functions',
        'Complex joins',
        'Data aggregation',
        'Performance optimization'
      ],
      metrics: {
        'Problems Solved': '100+',
        'Difficulty': 'Advanced',
        'Topics': '15+',
        'Success Rate': '95%'
      }
    },
    {
      id: 'udacity-cassandra',
      title: 'Udacity Data Modeling with Apache Cassandra',
      description: 'NoSQL data modeling project using Apache Cassandra for scalable and high-performance data storage and retrieval.',
      category: 'data-engineering',
      tags: ['Cassandra', 'NoSQL', 'Data Modeling', 'Udacity', 'Big Data'],
      image: '/projects/cassandra.png',
      github: 'https://github.com/Muhammadatef/Udacity-Data-Engineering-Nanodegree-Project-Data-Modeling-with-Apache-Cassandra',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'Apache Cassandra', icon: SiPython },
        { name: 'Python', icon: SiPython },
        { name: 'CQL', icon: SiPython },
        { name: 'NoSQL', icon: SiPython },
      ],
      features: [
        'NoSQL modeling',
        'Distributed database',
        'High availability',
        'Scalable design',
        'Query optimization'
      ],
      metrics: {
        'Models': '5+',
        'Queries': '20+',
        'Performance': '100x faster',
        'Nanodegree': 'Completed'
      }
    },

    // Data Science Projects
    {
      id: 'llm-zoomcamp-2024',
      title: 'LLM Zoomcamp 2024',
      description: 'Large Language Model engineering and deployment project from LLM Zoomcamp covering modern AI/ML techniques.',
      category: 'data-science',
      tags: ['LLM', 'AI', 'Machine Learning', 'NLP', 'Deep Learning'],
      image: '/projects/llm-zoomcamp.png',
      github: 'https://github.com/Muhammadatef/LLM-ZoomCamp2024',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'Python', icon: SiPython },
        { name: 'Transformers', icon: SiPython },
        { name: 'OpenAI', icon: SiPython },
        { name: 'Docker', icon: SiDocker },
      ],
      features: [
        'LLM fine-tuning',
        'RAG implementation',
        'Model deployment',
        'API development',
        'Performance optimization'
      ],
      metrics: {
        'Models': '5+',
        'Accuracy': '92%',
        'Deployment': 'Production',
        'Certification': 'Completed'
      }
    },
    {
      id: 'mlops-zoomcamp',
      title: 'MLOps Zoomcamp',
      description: 'Machine Learning Operations project covering ML model lifecycle, deployment, monitoring, and production best practices.',
      category: 'data-science',
      tags: ['MLOps', 'Machine Learning', 'DevOps', 'Deployment', 'Monitoring'],
      image: '/projects/mlops-zoomcamp.png',
      github: 'https://github.com/Muhammadatef/MlOps-Zoomcamp',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'Python', icon: SiPython },
        { name: 'MLflow', icon: SiPython },
        { name: 'Docker', icon: SiDocker },
        { name: 'AWS', icon: SiAmazonaws },
      ],
      features: [
        'ML model lifecycle',
        'Automated deployment',
        'Model monitoring',
        'CI/CD for ML',
        'Performance tracking'
      ],
      metrics: {
        'Models Deployed': '10+',
        'Accuracy': '95%',
        'Uptime': '99.9%',
        'Certification': 'Completed'
      }
    },
    {
      id: 'ml-zoomcamp-2024',
      title: 'ML Zoomcamp 2024',
      description: 'Comprehensive machine learning bootcamp project covering supervised learning, deep learning, and model deployment.',
      category: 'data-science',
      tags: ['Machine Learning', 'Deep Learning', 'Python', 'Scikit-learn', 'TensorFlow'],
      image: '/projects/ml-zoomcamp.png',
      github: 'https://github.com/Muhammadatef/ML-ZoomCamp2024',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'Python', icon: SiPython },
        { name: 'Scikit-learn', icon: SiPython },
        { name: 'TensorFlow', icon: SiPython },
        { name: 'Pandas', icon: SiPython },
      ],
      features: [
        'Supervised learning',
        'Deep learning',
        'Model evaluation',
        'Feature engineering',
        'Hyperparameter tuning'
      ],
      metrics: {
        'Models': '15+',
        'Accuracy': '94%',
        'Projects': '8',
        'Certification': 'Completed'
      }
    },
    {
      id: 'covid-azure-analysis',
      title: 'COVID-19 Analysis Using Azure',
      description: 'Comprehensive analysis of COVID-19 data using Azure Data Factory, Databricks, and Power BI for insights and predictions.',
      category: 'data-science',
      tags: ['Azure', 'Data Factory', 'Databricks', 'COVID-19', 'Power BI'],
      image: '/projects/covid-analysis.png',
      github: 'https://github.com/Muhammadatef/Covid-19-Analysis-Using-Azure',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      powerbi: 'https://www.novypro.com/project/covid-19-analysis-dashboard',
      novypro: 'https://www.novypro.com/project/covid-19-analysis-dashboard',
      tech: [
        { name: 'Azure', icon: SiMicrosoftazure },
        { name: 'Python', icon: SiPython },
        { name: 'PowerBI', icon: SiPowerbi },
        { name: 'Databricks', icon: SiApachespark },
      ],
      features: [
        'Predictive modeling',
        'Interactive visualizations',
        'Automated reporting',
        'Data quality monitoring',
        'Real-time updates'
      ],
      metrics: {
        'Accuracy': '95%',
        'Data Sources': '20+',
        'Predictions': '1000+',
        'Insights': 'Daily'
      }
    },
    {
      id: 'upwork-ml-job',
      title: 'Upwork ML Project - First Job',
      description: 'Machine learning project from Upwork focusing on predictive analytics and model deployment with 85% accuracy.',
      category: 'data-science',
      tags: ['Upwork', 'Machine Learning', 'Predictive Analytics', 'Python', 'Freelance'],
      image: '/projects/upwork-ml.png',
      github: 'https://github.com/Muhammadatef/Upowrk-Jobs-and-Tasks/tree/main/First%20Job',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'Python', icon: SiPython },
        { name: 'Scikit-learn', icon: SiPython },
        { name: 'Pandas', icon: SiPython },
        { name: 'Machine Learning', icon: SiPython },
      ],
      features: [
        'Predictive modeling',
        'Feature engineering',
        'Model validation',
        'Data preprocessing',
        'Performance optimization'
      ],
      metrics: {
        'Accuracy': '85%',
        'Client Rating': '5-star',
        'Delivery': 'On-time',
        'Satisfaction': '100%'
      }
    },

    // Analytics Projects
    {
      id: 'arsenal-pipeline',
      title: 'ArsenalFC End-to-End Data Pipeline',
      description: 'Sports analytics pipeline collecting and analyzing Arsenal FC performance data with predictive insights and interactive dashboards.',
      category: 'analytics',
      tags: ['Sports Analytics', 'Python', 'Data Pipeline', 'Football', 'Visualization'],
      image: '/projects/arsenal-pipeline.png',
      github: 'https://github.com/Muhammadatef/ArsenalFC-Data-Pipeline-Project',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      powerbi: 'https://www.novypro.com/project/arsenal-analytics-dashboard',
      novypro: 'https://www.novypro.com/project/arsenal-analytics-dashboard',
      tech: [
        { name: 'Python', icon: SiPython },
        { name: 'PowerBI', icon: SiPowerbi },
        { name: 'PostgreSQL', icon: SiPython },
        { name: 'Docker', icon: SiDocker },
      ],
      features: [
        'Player performance tracking',
        'Match prediction models',
        'Injury risk assessment',
        'Fan engagement analytics',
        'Transfer market insights'
      ],
      metrics: {
        'Prediction Accuracy': '88%',
        'Matches Analyzed': '500+',
        'Players Tracked': '100+',
        'Insights Generated': '1000+'
      }
    },
    {
      id: 'web-scraping-project',
      title: 'Web Scraping Jobs Analysis',
      description: 'Web scraping project analyzing job market trends using Python libraries to extract and analyze job postings data.',
      category: 'analytics',
      tags: ['Web Scraping', 'Python', 'Data Analysis', 'Jobs', 'BeautifulSoup'],
      image: '/projects/web-scraping.png',
      github: 'https://github.com/Muhammadatef/Web-Scraping',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'Python', icon: SiPython },
        { name: 'BeautifulSoup', icon: SiPython },
        { name: 'Requests', icon: SiPython },
        { name: 'Pandas', icon: SiPython },
      ],
      features: [
        'Automated data extraction',
        'Job market analysis',
        'Trend identification',
        'Data visualization',
        'Report generation'
      ],
      metrics: {
        'Jobs Scraped': '10K+',
        'Websites': '5+',
        'Data Points': '50+',
        'Accuracy': '95%'
      }
    },
    {
      id: 'upwork-analytics-job',
      title: 'Upwork Analytics Project',
      description: 'Data analysis project from Upwork focusing on business intelligence and reporting with interactive dashboards.',
      category: 'analytics',
      tags: ['Upwork', 'Data Analysis', 'Business Intelligence', 'Reporting', 'Freelance'],
      image: '/projects/upwork-analytics.png',
      github: 'https://github.com/Muhammadatef/Upowrk-Jobs-and-Tasks',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'Python', icon: SiPython },
        { name: 'PowerBI', icon: SiPowerbi },
        { name: 'SQL', icon: SiPython },
        { name: 'Excel', icon: SiPython },
      ],
      features: [
        'Business intelligence',
        'Interactive dashboards',
        'Data visualization',
        'Automated reporting',
        'Performance metrics'
      ],
      metrics: {
        'Dashboards': '5+',
        'Client Rating': '5-star',
        'Reports': '20+',
        'Insights': '100+'
      }
    },
    {
      id: 'upwork-scraping-job',
      title: 'Upwork Web Scraping - Fourth Job',
      description: 'Advanced web scraping project from Upwork involving large-scale data extraction and analysis with automated workflows.',
      category: 'analytics',
      tags: ['Web Scraping', 'Upwork', 'Data Extraction', 'Automation', 'Python'],
      image: '/projects/upwork-scraping.png',
      github: 'https://github.com/Muhammadatef/Upowrk-Jobs-and-Tasks/tree/main/Fourth%20job',
      demo: 'https://www.novypro.com/manage_projects/muhammadatef?Show=Published%20Projects',
      tech: [
        { name: 'Python', icon: SiPython },
        { name: 'Selenium', icon: SiPython },
        { name: 'BeautifulSoup', icon: SiPython },
        { name: 'Pandas', icon: SiPython },
      ],
      features: [
        'Large-scale scraping',
        'Automated workflows',
        'Data cleaning',
        'Analysis pipeline',
        'Performance optimization'
      ],
      metrics: {
        'Records Extracted': '100K+',
        'Websites': '10+',
        'Client Rating': '5-star',
        'Automation': '90%'
      }
    },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my data engineering and analytics projects, featuring real-world solutions
            with interactive Power BI dashboards and scalable architectures.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {<category.icon className="w-5 h-5" />}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-primary-600 dark:text-primary-400 opacity-50">
                    {project.category === 'data-engineering' && <Zap />}
                    {project.category === 'data-science' && <BarChart3 />}
                    {project.category === 'analytics' && <TrendingUp />}
                    {project.category === 'cloud' && <Cloud />}
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.open(project.github, '_blank')}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Github className="w-6 h-6" />
                  </motion.button>
                  
                  {project.demo && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => window.open(project.demo, '_blank')}
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.button>
                  )}
                  
                  {project.powerbi && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProject(project.id)}
                      className="p-3 bg-primary-600 rounded-full text-white hover:bg-primary-700 transition-colors duration-200"
                    >
                      <BarChart3 className="w-6 h-6" />
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.powerbi && (
                    <SiPowerbi className="w-6 h-6 text-yellow-500" />
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {<tech.icon className="w-4 h-4" />}
                      <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(project.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-bold text-primary-600 dark:text-primary-400">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(project.github, '_blank')}
                    className="flex-1 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.button>
                  
                  {project.demo && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.demo, '_blank')}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.button>
                  )}
                  
                  {project.powerbi && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project.id)}
                      className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <BarChart3 className="w-4 h-4" />
                      <span>Dashboard</span>
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* NovyPro Panel */}
        {selectedProject && (
          <NovyProPanel
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={projects.find(p => p.id === selectedProject)!}
          />
        )}
      </div>
    </section>
  )
}

export default Projects
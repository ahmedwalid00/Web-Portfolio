import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaBrain, FaUsers, FaStethoscope } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: "LearNova – AI-Powered Educational Platform",
      description: "Traditional educational systems lack personalization, real-time analytics, and AI-driven support for students, teachers, and school administrators. LearNova tackles this by leveraging AI to personalize learning, generate insights, and automate educational workflows.",
      features: [
        "Multi-modal RAG chatbot for explanations and AI-generated practice questions",
        "Personalized learning roadmaps and tailored exams/quizzes",
        "Teacher tools for uploading PDFs and creating AI-assisted assessments",
        "School admin dashboard with analytics and user management",
        "Parent portal with detailed student performance tracking"
      ],
      technologies: [
        "FastAPI", "PostgreSQL", "PGVector", "SQLAlchemy", 
        "LangGraph", "Celery", "Redis", "Docker", "UV"
      ],
      github: "https://github.com/ahmedwalid00/LearNova",
      icon: FaBrain,
      color: "#4CAF50"
    },
    {
      title: "REBOTA – The Intelligent Company Chatbot",
      description: "Companies often struggle with internal communication bottlenecks and HR teams overwhelmed with repetitive queries. REBOTA solves this by acting as a secure, role-aware AI assistant that provides instant, accurate, and personalized responses.",
      features: [
        "Personalized responses using company-specific data",
        "Role-Based Access Control (RBAC) for secure information access",
        "Policy Knowledge Base with RAG for complex queries",
        "Conversational memory for natural, continuous interactions",
        "Scalable async backend designed for high-performance"
      ],
      technologies: [
        "FastAPI", "LangChain", "Firebase Firestore", "Firebase Auth", 
        "ChromaDB", "OpenAI GPT", "Google Cloud Run"
      ],
      github: "https://github.com/ahmedwalid00/Agentic-Rag",
      icon: FaUsers,
      color: "#2196F3"
    },
    {
      title: "Intelligent CRM Agent – AI Marketing Agent",
      description: "Traditional CRM systems often lack actionable insights and automated outreach. This agent bridges the gap by using AI to analyze customer behavior, segment audiences intelligently, and craft personalized marketing campaigns.",
      features: [
        "Automated customer behavior analysis from transactional data",
        "RFM-based audience segmentation (Champions, At-Risk, Big Spenders)",
        "Personalized email campaign generation for each segment",
        "Human-in-the-loop control for campaign review and approval",
        "Real-time data integration with PostgreSQL database"
      ],
      technologies: [
        "LangGraph", "PostgreSQL", "MCP Marketing API", 
        "Chat UI", "AI Agent Engine", "Database Tools"
      ],
      github: "https://github.com/ahmedwalid00/CRM-Agent/tree/main",
      icon: FaRocket,
      color: "#FF9800"
    },
    {
      title: "Medical Chatbot using LangChain and QdrantDB",
      description: "Built an intelligent Medical Chatbot that provides accurate, context-aware answers to health-related questions using a Retrieval-Augmented Generation (RAG) pipeline. The system helps doctors and patients efficiently by retrieving relevant information from medical documents in real-time.",
      features: [
        "RAG pipeline for evidence-based medical answers",
        "Semantic vector search with QdrantDB for document retrieval",
        "Context-aware responses using conversation memory",
        "Real-time processing of health-related queries",
        "Integration with medical document databases for accurate information"
      ],
      technologies: [
        "LangChain", "QdrantDB", "HuggingFace Embeddings", 
        "OpenAI GPT-4o-mini", "FastAPI", "Python"
      ],
      github: "https://github.com/ahmedwalid00/mini-rag",
      icon: FaStethoscope,
      color: "#E91E63"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="projects-content"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Featured Projects
          </motion.h2>
          
          <motion.p variants={itemVariants} className="section-description">
            Innovative AI-powered solutions that solve real-world problems and bridge research with practical applications
          </motion.p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="project-card"
                whileHover={{ y: -10 }}
              >
                <div className="project-header">
                  <div className="project-icon" style={{ color: project.color }}>
                    <project.icon />
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <div className="project-body">
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-footer">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />
                    View on GitHub
                    <FaExternalLinkAlt />
                  </a>
                </div>

                <div 
                  className="project-glow" 
                  style={{ backgroundColor: project.color }}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

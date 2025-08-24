import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiPython, 
  SiPostgresql, 
  SiRedis, 
  SiDocker,
  SiFastapi
} from 'react-icons/si';
import { FaDatabase, FaCogs, FaBrain, FaCode } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const skills = [
    {
      name: 'FastAPI',
      icon: SiFastapi,
      category: 'Backend',
      color: '#009688'
    },
    {
      name: 'LangChain',
      icon: FaBrain,
      category: 'AI/ML',
      color: '#FF6B35'
    },
    {
      name: 'LangGraph',
      icon: FaCogs,
      category: 'AI/ML',
      color: '#4CAF50'
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
      category: 'Database',
      color: '#336791'
    },
    {
      name: 'Redis',
      icon: SiRedis,
      category: 'Cache',
      color: '#DC382D'
    },
    {
      name: 'Docker',
      icon: SiDocker,
      category: 'DevOps',
      color: '#2496ED'
    },
    {
      name: 'QdrantDB',
      icon: FaDatabase,
      category: 'Vector DB',
      color: '#8E24AA'
    },
    {
      name: 'SQLAlchemy',
      icon: FaCode,
      category: 'ORM',
      color: '#FFA726'
    },
    {
      name: 'Celery',
      icon: FaCogs,
      category: 'Task Queue',
      color: '#37B24D'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="skills-content"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Skills & Technologies
          </motion.h2>
          
          <motion.p variants={itemVariants} className="section-description">
            Technologies and tools I use to build intelligent AI systems and robust backend solutions
          </motion.p>

          <motion.div variants={containerVariants} className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="skill-card"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="skill-icon" style={{ color: skill.color }}>
                  <skill.icon />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
                <div className="skill-glow" style={{ backgroundColor: skill.color }}></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

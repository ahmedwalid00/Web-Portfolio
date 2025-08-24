import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="about-content"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          
          <motion.div variants={itemVariants} className="about-text">
            <p>
              I'm Ahmed Walid, a Generative AI Developer specializing in Deep Learning and Large Language Models (LLMs). 
              My expertise spans building intelligent AI systems, Agentic AI environments, and developing end-to-end solutions. 
              Beyond AI, I have strong backend development skills, including API design, database management, and system integration. 
              I enjoy creating practical, scalable, and innovative applications that bridge AI research with real-world use cases.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">🤖</div>
              <h3>AI Innovation</h3>
              <p>Specialized in Generative AI, LLMs, and building intelligent systems that solve real-world problems.</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">⚙️</div>
              <h3>Backend Expertise</h3>
              <p>Strong foundation in API development, database design, and scalable system architecture.</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">🚀</div>
              <h3>End-to-End Solutions</h3>
              <p>From research to production, I build complete applications that bridge theory with practical implementation.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ahmed.walid.mohamed88@gmail.com',
      href: 'mailto:ahmed.walid.mohamed88@gmail.com',
      color: '#EA4335'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+201011672006',
      href: 'tel:+201011672006',
      color: '#34A853'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'ahmedwalid00',
      href: 'https://github.com/ahmedwalid00',
      color: '#333'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Ahmed Walid',
      href: 'https://www.linkedin.com/in/ahmed-walid-b6617834a/',
      color: '#0077B5'
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="contact-content"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Let's Work Together
          </motion.h2>
          
          <motion.p variants={itemVariants} className="section-description">
            Ready to bring your AI ideas to life? Let's connect and discuss how we can 
            build something amazing together.
          </motion.p>

          <motion.div variants={itemVariants} className="contact-cta">
            <div className="cta-content">
              <FaPaperPlane className="cta-icon" />
              <h3>Ready to get started?</h3>
              <p>
                Whether you're looking to implement AI solutions, build scalable backends, 
                or explore innovative technology approaches, I'm here to help bring your vision to reality.
              </p>
              <a 
                href="mailto:ahmed.walid.mohamed88@gmail.com?subject=Let's Work Together&body=Hi Ahmed, I'd like to discuss a project with you."
                className="btn btn-primary"
              >
                <FaEnvelope />
                Send Message
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="contact-grid"
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                variants={cardVariants}
                className="contact-card"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="contact-icon" style={{ color: contact.color }}>
                  <contact.icon />
                </div>
                <div className="contact-info">
                  <h4>{contact.label}</h4>
                  <p>{contact.value}</p>
                </div>
                <div 
                  className="contact-glow" 
                  style={{ backgroundColor: contact.color }}
                ></div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="contact-note">
            <p>
              <FaMapMarkerAlt /> Based in Egypt, available for remote work worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

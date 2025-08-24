import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaCode, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/ahmedwalid00', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/ahmed-walid-b6617834a/', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:ahmed.walid.mohamed88@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-particles"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-brand">
              <h3>Ahmed Walid</h3>
              <p>Generative AI Developer</p>
            </div>
            
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target={link.href?.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href?.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="footer-social-link"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="footer-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>

          <motion.div 
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="footer-copyright">
              <p>
                © {currentYear} Ahmed Walid. Made with{' '}
                <FaHeart className="heart-icon" /> and{' '}
                <FaCode className="code-icon" />
              </p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="scroll-to-top"
              aria-label="Scroll to top"
            >
              ↑
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

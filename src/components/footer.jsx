'use client';

import { motion } from 'framer-motion';
import { Mail, Globe, MapPin, ArrowRight, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fixed particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: '8%', top: '20%' },
    { left: '22%', top: '45%' },
    { left: '38%', top: '25%' },
    { left: '55%', top: '60%' },
    { left: '72%', top: '35%' },
    { left: '88%', top: '55%' },
    { left: '15%', top: '75%' },
    { left: '45%', top: '80%' },
    { left: '68%', top: '15%' },
    { left: '82%', top: '70%' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const services = [
    { name: 'Vulnerability Disclosure', href: '#' },
    { name: 'CISO-as-a-Service', href: '#' },
    { name: 'SOC Automation', href: '#' },
    { name: 'Compliance Consulting', href: '#' },
    { name: 'Security Assessment', href: '#' },
    { name: 'Tool Consulting', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 pb-8 transition-colors duration-500" style={{ backgroundColor: isDarkMode ? '#1a0033' : '#f8f9ff' }}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Gradient Glow */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #cc43fd 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(204, 67, 253, 0.1) 0%, transparent 70%)',
            opacity: isDarkMode ? 0.1 : 0.2,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: isDarkMode ? [0.1, 0.15, 0.1] : [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #8722ec 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(135, 34, 236, 0.12) 0%, transparent 70%)',
            opacity: isDarkMode ? 0.1 : 0.22,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: isDarkMode ? [0.1, 0.12, 0.1] : [0.22, 0.28, 0.22],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Particle Effect */}
        <div className="absolute inset-0">
          {mounted && particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 rounded-full"
              style={{
                background: isDarkMode ? '#cc43fd' : '#8722ec',
                left: pos.left,
                top: pos.top,
              }}
              animate={{
                opacity: isDarkMode ? [0, 0.4, 0] : [0, 0.3, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{
                color: '#cc43fd',
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
              }}
            >
              Vulhunt
            </h3>
            <p className="mb-6 leading-relaxed text-sm transition-colors duration-500" style={{ color: isDarkMode ? '#9ca3af' : '#5a5a7a' }}>
              Next-Generation Cybersecurity platform powered by AI-driven technology and crowdsourced security research.
            </p>

            {/* Address */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ stroke: '#cc43fd' }} />
                <div>
                  <p className="text-sm font-semibold mb-1 transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#1a1a2e' }}>Address</p>
                  <p className="text-sm leading-relaxed transition-colors duration-500" style={{ color: isDarkMode ? '#9ca3af' : '#5a5a7a' }}>
                    Vulhunt,<br />
                    C/O SASOSS, Workflow Ranka Junction, 3rd Floor,<br />
                    Near Benniganagalli Metro Station, OMR Road,<br />
                    K.R. Puram Hobli, Bengaluru – 560016, India
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-2">
                <motion.a
                  href="mailto:business@vulhunt.in"
                  className="flex items-center gap-3 transition-colors duration-500 group"
                  style={{ color: isDarkMode ? '#9ca3af' : '#5a5a7a' }}
                  whileHover={{ x: 5 }}
                  onMouseEnter={(e) => e.currentTarget.style.color = isDarkMode ? 'white' : '#8722ec'}
                  onMouseLeave={(e) => e.currentTarget.style.color = isDarkMode ? '#9ca3af' : '#5a5a7a'}
                >
                  <Mail className="w-5 h-5" style={{ stroke: '#cc43fd' }} />
                  <span className="text-sm">business@vulhunt.in</span>
                </motion.a>
                <motion.a
                  href="https://www.vulhunt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors duration-500 group"
                  style={{ color: isDarkMode ? '#9ca3af' : '#5a5a7a' }}
                  whileHover={{ x: 5 }}
                  onMouseEnter={(e) => e.currentTarget.style.color = isDarkMode ? 'white' : '#8722ec'}
                  onMouseLeave={(e) => e.currentTarget.style.color = isDarkMode ? '#9ca3af' : '#5a5a7a'}
                >
                  <Globe className="w-5 h-5" style={{ stroke: '#cc43fd' }} />
                  <span className="text-sm">www.vulhunt.com</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            transition={{ delay: 0.2 }}
          >
            <h3
              className="text-xl font-bold mb-6"
              style={{
                color: '#cc43fd',
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="transition-colors duration-500 text-sm flex items-center gap-2 group"
                    style={{ color: isDarkMode ? '#9ca3af' : '#5a5a7a' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = isDarkMode ? 'white' : '#8722ec'}
                    onMouseLeave={(e) => e.currentTarget.style.color = isDarkMode ? '#9ca3af' : '#5a5a7a'}
                  >
                    <ArrowRight
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ stroke: '#cc43fd' }}
                    />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            transition={{ delay: 0.4 }}
          >
            <h3
              className="text-xl font-bold mb-6"
              style={{
                color: '#cc43fd',
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
              }}
            >
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={service.href}
                    className="transition-colors duration-500 text-sm flex items-center gap-2 group"
                    style={{ color: isDarkMode ? '#9ca3af' : '#5a5a7a' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = isDarkMode ? 'white' : '#8722ec'}
                    onMouseLeave={(e) => e.currentTarget.style.color = isDarkMode ? '#9ca3af' : '#5a5a7a'}
                  >
                    <ArrowRight
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ stroke: '#cc43fd' }}
                    />
                    <span>{service.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="w-full h-px mb-8 transition-all duration-500"
          style={{
            background: isDarkMode 
              ? 'linear-gradient(90deg, transparent, rgba(204, 67, 253, 0.3), rgba(135, 34, 236, 0.3), rgba(214, 84, 255, 0.3), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(204, 67, 253, 0.4), rgba(135, 34, 236, 0.4), rgba(214, 84, 255, 0.4), transparent)',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            className="text-sm text-center md:text-left transition-colors duration-500"
            style={{ color: isDarkMode ? '#6b7280' : '#7a7a9a' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            © {new Date().getFullYear()} Vulhunt. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500"
                  style={{
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(204, 67, 253, 0.05)',
                    border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                    boxShadow: isDarkMode ? 'none' : '0 2px 8px rgba(204, 67, 253, 0.1)',
                  }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#cc43fd';
                    e.currentTarget.style.boxShadow = `0 0 20px rgba(204, 67, 253, ${isDarkMode ? 0.3 : 0.4})`;
                    e.currentTarget.style.background = 'rgba(204, 67, 253, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`;
                    e.currentTarget.style.boxShadow = isDarkMode ? 'none' : '0 2px 8px rgba(204, 67, 253, 0.1)';
                    e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(204, 67, 253, 0.05)';
                  }}
                >
                  <Icon className="w-5 h-5" style={{ stroke: '#cc43fd' }} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Legal Links */}
          <motion.div
            className="flex items-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="#"
              className="transition-colors duration-500"
              style={{ color: isDarkMode ? '#6b7280' : '#7a7a9a' }}
              onMouseEnter={(e) => e.currentTarget.style.color = isDarkMode ? 'white' : '#8722ec'}
              onMouseLeave={(e) => e.currentTarget.style.color = isDarkMode ? '#6b7280' : '#7a7a9a'}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors duration-500"
              style={{ color: isDarkMode ? '#6b7280' : '#7a7a9a' }}
              onMouseEnter={(e) => e.currentTarget.style.color = isDarkMode ? 'white' : '#8722ec'}
              onMouseLeave={(e) => e.currentTarget.style.color = isDarkMode ? '#6b7280' : '#7a7a9a'}
            >
              Terms of Service
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

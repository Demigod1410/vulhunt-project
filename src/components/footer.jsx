'use client';

import { motion } from 'framer-motion';
import { Mail, Globe, MapPin, ArrowRight, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    company: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Contact Form: Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Contact Number: ${formData.contactNumber}
Company: ${formData.company}

Message:
${formData.message}`;
    
    const mailtoLink = `mailto:business@vulhunt.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  // Custom X/Twitter Icon Component
  const XIcon = ({ className, style }) => (
    <div className={className} style={style}>
      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAC+ElEQVR4AYyV0XUbMQwEB65E6cSuJHIlciqRXImUSqxOkFnwdPJLfsJHENgFuEfyeNIL/9lq6ta4wm9xiB0alCaneIKYKP1byMQz0MnNuDC9mKFD7TCBJvdSTohNERyEB6oO7LGFgmcProFrNAyVekNCBmsvmnphx36a+3JVX6JlXWfjvZezH4vJ3CQKXqW/xj9IwGNxLG31zy5uwg+LdfyAPlK8YiuDdiltjDGrvYqv0m/C25Mm4uV86WHrbtG7xUe9gmL4MD7jtiOs33rHH6CuwLt200arJiDiFlWQXhWoO/Cr4Jzt6z/F4U761SUpDror1R/ABVtr8ow3XscSZKXY3slfHO/auUHhysqOQIzMria7MccvtjYSThgoWOIPhIzxllewI/YqFZF3sydjj4JrG/h+3nAwhMo+2Zu1OZYHnvINJNUKloKVFYaf3VB8aXmAwqE7A+TeZ9pCA/eV11azcoJKZSvYeVHbA/qd5k7XnDF/t34SZbiLP/jRNJFHpwDKM+0cTY4ouxFz3FaPnkdb9Qu1bhOvvaa7pNO3M6xWkKz0hNfRQuPWOIuhHbcpXQZ2memKBzWTGCrVCTbfHJxzZLVzduQDPpGXOiHYj7SdY2dafXuhSVjIv+1s6i795jLyIk90DWauZucLNXx2F4P3P+L7o4AtLsPVr8uRTzuCXk+OVZ13EPw8HlbLVBczwGMZ7xA6ZtiaXyh+hUYR1k2/yV2cvM4bPl1lHnLaZk5RhurKygEz6/V1QmxHqfy+eM9FAsdtX+XPQUUwD7g3zG7MZzePGn1v4magSLM4Rfnss+KbeJ3WpDO0wv0UzL33unZ2ummsCUS8Jm6fpXiEc84jXKaYCQbOJm15H8AHVFZ/ddc/yTWlg5kpEHGry0iz5zaMsMzcOip5LTMmtipJz9tV5YPymIi5m/qdVMri/ZvTZW6syNu/8b2Fj2Vn8Z1hCrL61PsTwYWqiw/THCnS5m8uQWzmLT5wsxCbxcnGxQzZdFTsPXzk/gAAAP//vcTp+QAAAAZJREFUAwD7qwVJQF9FOAAAAABJRU5ErkJggg=="
        alt="X"
        width={20}
        height={20}
        style={{ filter: style?.stroke ? `brightness(0) saturate(100%) invert(58%) sepia(85%) saturate(6472%) hue-rotate(261deg) brightness(101%) contrast(101%)` : 'none' }}
      />
    </div>
  );

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
    { name: 'About Us', href: '/aboutus' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Vulnerability Disclosure', href: '/services' },
    { name: 'CISO-as-a-Service', href: '/services' },
    { name: 'SOC Automation', href: '/services' },
    { name: 'Compliance Consulting', href: '/services' },
    { name: 'Security Assessment', href: '/services' },
    { name: 'Tool Consulting', href: '/services' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/vulhunt-cybercosmous/', label: 'LinkedIn' },
    { icon: XIcon, href: 'https://x.com/vulhunt', label: 'X', isCustom: true },
    { icon: Facebook, href: 'https://www.facebook.com/Vulhunt', label: 'Facebook' },
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
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 mb-12">
          {/* Left Side - Info Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Company Info */}
            <motion.div
              className="flex flex-col w-full"
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
            <p className="mb-6 leading-relaxed text-base transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#1a1a2e' }}>
              Next-Generation Cybersecurity platform powered by AI-driven technology and crowdsourced security research.
            </p>

            {/* Address */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ stroke: '#cc43fd' }} />
                <div>
                  <p className="text-base font-semibold mb-1 transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#1a1a2e' }}>Address</p>
                  <p className="text-base leading-relaxed transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#1a1a2e' }}>
                    Vulhunt,<br />
                    C/O SASOSS, <br /> Workflow Ranka Junction, 3rd Floor,
                    <br /> Near Benniganahalli Metro Station,<br />OMR Road,
                    K.R. Puram Hobli, <br /> Bengaluru – 560016, India
                  </p>
                </div>
              </div>
              {/* Contact Info */}
              <div className="space-y-3 pt-2">
                <motion.a
                  href="mailto:business@vulhunt.in"
                  className="flex items-center gap-3 transition-colors duration-500 group"
                  style={{ color: isDarkMode ? '#d1d5db' : '#1a1a2e' }}
                  whileHover={{ x: 5 }}
                  onMouseEnter={(e) => e.currentTarget.style.color = isDarkMode ? 'white' : '#8722ec'}
                  onMouseLeave={(e) => e.currentTarget.style.color = isDarkMode ? '#d1d5db' : '#1a1a2e'}
                >
                  <Mail className="w-5 h-5" style={{ stroke: '#cc43fd' }} />
                  <span className="text-base">business@vulhunt.in</span>
                </motion.a>
                <motion.a
                  href="https://www.vulhunt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors duration-500 group"
                  style={{ color: isDarkMode ? '#d1d5db' : '#1a1a2e' }}
                  whileHover={{ x: 5 }}
                  onMouseEnter={(e) => e.currentTarget.style.color = isDarkMode ? 'white' : '#8722ec'}
                  onMouseLeave={(e) => e.currentTarget.style.color = isDarkMode ? '#d1d5db' : '#1a1a2e'}
                >
                  <Globe className="w-5 h-5" style={{ stroke: '#cc43fd' }} />
                  <span className="text-base">www.vulhunt.com</span>
                </motion.a>
              </div>
            </div>
            </motion.div>

            {/* Quick Links & Services Combined */}
            <motion.div
              className="flex flex-col space-y-8 w-full md:pl-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              transition={{ delay: 0.2 }}
            >
              {/* Quick Links */}
              <div>
                <h3
                  className="text-2xl font-bold mb-6"
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
                        className="transition-colors duration-500 text-base flex items-center gap-2 group"
                        style={{ color: isDarkMode ? '#d1d5db' : '#1a1a2e' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = isDarkMode ? 'white' : '#8722ec'}
                        onMouseLeave={(e) => e.currentTarget.style.color = isDarkMode ? '#d1d5db' : '#1a1a2e'}
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
              </div>

              {/* Services */}
              <div>
                <h3
                  className="text-2xl font-bold mb-6"
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
                        className="transition-colors duration-500 text-base flex items-center gap-2 group"
                        style={{ color: isDarkMode ? '#d1d5db' : '#1a1a2e' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = isDarkMode ? 'white' : '#8722ec'}
                        onMouseLeave={(e) => e.currentTarget.style.color = isDarkMode ? '#d1d5db' : '#1a1a2e'}
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
              </div>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="flex flex-col w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            transition={{ delay: 0.4 }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{
                color: '#cc43fd',
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
              }}
            >
              Contact Form
            </h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full flex-1">
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full px-3 py-2.5 rounded-lg text-sm transition-all duration-500 focus:outline-none focus:ring-2"
                    style={{
                      background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.05)',
                      border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                      color: isDarkMode ? '#d1d5db' : '#1a1a2e',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#cc43fd';
                      e.currentTarget.style.boxShadow = `0 0 0 2px rgba(204, 67, 253, 0.1)`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = `rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full px-3 py-2.5 rounded-lg text-sm transition-all duration-500 focus:outline-none focus:ring-2"
                    style={{
                      background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.05)',
                      border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                      color: isDarkMode ? '#d1d5db' : '#1a1a2e',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#cc43fd';
                      e.currentTarget.style.boxShadow = `0 0 0 2px rgba(204, 67, 253, 0.1)`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = `rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="w-full">
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    placeholder="Contact Number"
                    className="w-full px-3 py-2.5 rounded-lg text-sm transition-all duration-500 focus:outline-none focus:ring-2"
                    style={{
                      background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.05)',
                      border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                      color: isDarkMode ? '#d1d5db' : '#1a1a2e',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#cc43fd';
                      e.currentTarget.style.boxShadow = `0 0 0 2px rgba(204, 67, 253, 0.1)`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = `rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    className="w-full px-3 py-2.5 rounded-lg text-sm transition-all duration-500 focus:outline-none focus:ring-2"
                    style={{
                      background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.05)',
                      border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                      color: isDarkMode ? '#d1d5db' : '#1a1a2e',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#cc43fd';
                      e.currentTarget.style.boxShadow = `0 0 0 2px rgba(204, 67, 253, 0.1)`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = `rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div className="w-full flex-1">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your inquiry or message"
                  rows={6}
                  className="w-full h-full px-3 py-2.5 rounded-lg text-sm transition-all duration-500 focus:outline-none focus:ring-2 resize-none"
                  style={{
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.05)',
                    border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                    color: isDarkMode ? '#d1d5db' : '#1a1a2e',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#cc43fd';
                    e.currentTarget.style.boxShadow = `0 0 0 2px rgba(204, 67, 253, 0.1)`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = `rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{
                  background: '#cc43fd',
                  color: 'white',
                  border: 'none',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#d654ff';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(204, 67, 253, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#cc43fd';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Send Message
              </motion.button>
            </form>

            
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
          <motion.div
            className="text-center md:text-left transition-colors duration-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-sm" style={{ color: isDarkMode ? '#6b7280' : '#7a7a9a' }}>
              © All rights reserved by Mahaasenaya Cybertech Venture Pvt. Ltd.
            </p>
            <p className="text-sm" style={{ color: isDarkMode ? '#6b7280' : '#7a7a9a', paddingLeft: '0.875rem' }}>
              (A group company of{' '}
              <a
                href="https://www.sasoss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-sm"
                style={{ color: isDarkMode ? '#6b7280' : '#7a7a9a' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#cc43fd'}
                onMouseLeave={(e) => e.currentTarget.style.color = isDarkMode ? '#6b7280' : '#7a7a9a'}
              >
                SASOSS)
              </a>
            </p>
          </motion.div>

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
                  {social.isCustom ? (
                    <Icon style={{ stroke: '#cc43fd' }} />
                  ) : (
                    <Icon className="w-5 h-5" style={{ stroke: '#cc43fd' }} />
                  )}
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

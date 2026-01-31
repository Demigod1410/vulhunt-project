'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, Users, Calendar, Handshake, Award, Briefcase, TrendingUp, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';


export default function AboutUsPage() {
  const { isDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fixed particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: '5%', top: '10%' },
    { left: '15%', top: '25%' },
    { left: '25%', top: '15%' },
    { left: '35%', top: '30%' },
    { left: '45%', top: '12%' },
    { left: '55%', top: '28%' },
    { left: '65%', top: '18%' },
    { left: '75%', top: '22%' },
    { left: '85%', top: '15%' },
    { left: '95%', top: '25%' },
    { left: '10%', top: '45%' },
    { left: '20%', top: '55%' },
    { left: '30%', top: '48%' },
    { left: '40%', top: '58%' },
    { left: '50%', top: '52%' },
    { left: '60%', top: '62%' },
    { left: '70%', top: '55%' },
    { left: '80%', top: '48%' },
    { left: '90%', top: '58%' },
    { left: '15%', top: '75%' },
    { left: '25%', top: '85%' },
    { left: '35%', top: '78%' },
    { left: '45%', top: '88%' },
    { left: '55%', top: '82%' },
    { left: '65%', top: '92%' },
    { left: '75%', top: '85%' },
    { left: '85%', top: '78%' },
  ];

  const partners = [
    {
      name: 'SASOSS',
      role: 'Technology Partner',
      gradient: 'linear-gradient(135deg, #799dfe 0%, #8722ec 100%)',
      logo: '/s2.png',
      scale: 1.5,
    },
    {
      name: 'Coditing',
      role: 'Consulting Partner (Certification & Data Privacy Services)',
      gradient: 'linear-gradient(135deg, #8722ec 0%, #cc43fd 100%)',
      logo: '/coditing.png',
      scale: 1.5,
    },
    {
      name: 'NeoCISO',
      role: 'SOC Automation Technology Partner',
      gradient: 'linear-gradient(135deg, #cc43fd 0%, #799dfe 100%)',
      logo: '/neo.png',
      scale: 1.5,
    },
    {
      name: 'NAWOM',
      role: 'Growth & Marketing Partner',
      gradient: 'linear-gradient(135deg, #799dfe 0%, #cc43fd 100%)',
      logo: '/nawom.png',
      scale: 1.5,
    },
    {
      name: 'HTS Consulting',
      role: 'SOC & Automation Partner',
      gradient: 'linear-gradient(135deg, #cc43fd 0%, #8722ec 100%)',
      logo: '/HTS.png',
      scale: 1.5,
    },
    {
      name: 'Cyber Cosmous',
      role: 'Emerging Tech Security Partner',
      gradient: 'linear-gradient(135deg, #8722ec 0%, #799dfe 100%)',
      logo: `/CyberLogo.png`,
      scale: 5.0,
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    
    <div className="min-h-screen transition-colors duration-500" style={{ backgroundColor: isDarkMode ? '#1a0033' : '#f8f9ff' }}>
        <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 pt-32">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl transition-opacity duration-500"
            style={{
              background: isDarkMode 
                ? 'radial-gradient(circle, #8722ec 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(135, 34, 236, 0.15) 0%, transparent 70%)',
              opacity: isDarkMode ? 0.25 : 0.35,
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl transition-opacity duration-500"
            style={{
              background: isDarkMode 
                ? 'radial-gradient(circle, #cc43fd 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(204, 67, 253, 0.12) 0%, transparent 70%)',
              opacity: isDarkMode ? 0.22 : 0.3,
            }}
          />
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-colors duration-500"
            style={{
              color: isDarkMode ? 'white' : '#1a1a2e',
              fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            About{' '}
            <span
              style={{
                color: '#cc43fd',
              }}
            >
              Vulhunt
            </span>
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
            Building the future of cybersecurity through innovation, trust, and community
          </p>

          {/* Bottom Decorative Line */}
          <motion.div
            className="mt-8 mx-auto max-w-md h-1 rounded-full transition-all duration-500"
            style={{
              background: isDarkMode 
                ? 'linear-gradient(90deg, transparent, #cc43fd, #8722ec, #d654ff, transparent)' 
                : 'linear-gradient(90deg, transparent, #cc43fd, #8722ec, #d654ff, transparent)',
              opacity: isDarkMode ? 0.5 : 0.6,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: isDarkMode ? 0.5 : 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </motion.div>
      </section>

      {/* Combined Company Info Section - All in one screen */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-6">
          
          {/* Company Overview */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center transition-colors duration-500"
              style={{
                color: '#cc43fd',
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              Company Overview
            </h2>
            <div
              className={`relative p-5 lg:p-6 rounded-2xl transition-all duration-500 ${isDarkMode ? 'backdrop-blur-sm' : ''}`}
              style={{
                background: isDarkMode 
                  ? 'rgba(255, 255, 255, 0.03)' 
                  : '#f5f5f7',
                border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.4})`,
                boxShadow: isDarkMode ? 'none' : '0 8px 24px rgba(204, 67, 253, 0.12)',
              }}
            >
              <div className="flex gap-4">
                {/* Icon inside box */}
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500"
                  style={{
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.08)',
                    border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.3 : 0.4})`,
                  }}
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Shield className="w-6 h-6" style={{ stroke: '#cc43fd' }} />
                </motion.div>
                <div className="relative z-10 space-y-3">
                  <p className="text-sm sm:text-base leading-relaxed transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
                    Vulhunt is a next-generation cybersecurity solutions company built on the ethos of quality, trust, and scalable security.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
                    We leverage the combined power of technology and crowdsourcing to provide robust security for organizations worldwide.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
                    Our community of 1,400+ security researchers continuously tests systems and applications for a wide range of real-world scenarios, enabling real-time vulnerability detection for remediation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Journey */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 0.1 }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center transition-colors duration-500"
              style={{
                color: '#cc43fd',
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              Our Journey
            </h2>
            <div
              className={`relative p-6 lg:p-8 rounded-2xl transition-all duration-500 ${isDarkMode ? 'backdrop-blur-sm' : ''}`}
              style={{
                background: isDarkMode 
                  ? 'rgba(255, 255, 255, 0.03)' 
                  : '#f5f5f7',
                border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.4})`,
                boxShadow: isDarkMode ? 'none' : '0 8px 24px rgba(204, 67, 253, 0.12)',
              }}
            >
              <div className="flex gap-4">
                {/* Icon inside box */}
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500"
                  style={{
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.08)',
                    border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.3 : 0.4})`,
                  }}
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Globe className="w-6 h-6" style={{ stroke: '#cc43fd' }} />
                </motion.div>
                <div className="relative z-10 space-y-3">
                  <p className="text-sm sm:text-base leading-relaxed transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
                    Founded in 2020, Vulhunt started as India's first next-generation crowdsourced cybersecurity platform. It was also the world's first AI & ML enabled platform delivering Bug Bounty and Vulnerability Disclosure Program (VDP) services.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
                    As customer requirements evolved, Vulhunt expanded into traditional cybersecurity consulting, compliance, and SOC services, while maintaining our crowdsourced security excellence.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Team & Community */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 0.2 }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center transition-colors duration-500"
              style={{
                color: '#cc43fd',
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              Our Team & Community
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Core Team Card */}
              <motion.div
                variants={fadeInVariants}
                whileHover={{ scale: 1.02, y: -3 }}
                className={`relative p-5 rounded-2xl transition-all duration-500 group ${isDarkMode ? 'backdrop-blur-sm' : ''}`}
                style={{
                  background: isDarkMode 
                    ? 'rgba(255, 255, 255, 0.03)' 
                    : '#f5f5f7',
                  border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.4})`,
                  boxShadow: isDarkMode ? 'none' : '0 8px 24px rgba(204, 67, 253, 0.12)',
                }}
                onMouseEnter={(e) => {
                  if (!isDarkMode) {
                    e.currentTarget.style.background = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isDarkMode) {
                    e.currentTarget.style.background = '#f5f5f7';
                  }
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center relative transition-all duration-500"
                      style={{
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.08)',
                        border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.3 : 0.4})`,
                      }}
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Briefcase className="w-6 h-6" style={{ stroke: '#cc43fd' }} />
                    </motion.div>
                    <h3
                      className="text-xl sm:text-2xl font-bold"
                      style={{
                        color: '#cc43fd',
                        fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                      }}
                    >
                      Core Team
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg font-medium transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
                    12+ seasoned cybersecurity professionals
                  </p>
                </div>
              </motion.div>

              {/* Security Researchers Card */}
              <motion.div
                variants={fadeInVariants}
                whileHover={{ scale: 1.02, y: -3 }}
                className={`relative p-5 rounded-2xl transition-all duration-500 group ${isDarkMode ? 'backdrop-blur-sm' : ''}`}
                style={{
                  background: isDarkMode 
                    ? 'rgba(255, 255, 255, 0.03)' 
                    : '#f5f5f7',
                  border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.4})`,
                  boxShadow: isDarkMode ? 'none' : '0 8px 24px rgba(204, 67, 253, 0.12)',
                }}
                onMouseEnter={(e) => {
                  if (!isDarkMode) {
                    e.currentTarget.style.background = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isDarkMode) {
                    e.currentTarget.style.background = '#f5f5f7';
                  }
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center relative transition-all duration-500"
                      style={{
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.08)',
                        border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.3 : 0.4})`,
                      }}
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Users className="w-6 h-6" style={{ stroke: '#cc43fd' }} />
                    </motion.div>
                    <h3
                      className="text-xl sm:text-2xl font-bold"
                      style={{
                        color: '#cc43fd',
                        fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                      }}
                    >
                      Security Researchers
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg font-medium transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
                    1,400+ and growing globally
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Decorative Line */}
          <motion.div
            className="mt-8 mx-auto max-w-md h-1 px-4 mt-30 rounded-full transition-all duration-500"
            style={{
              background: isDarkMode 
                ? 'linear-gradient(90deg, transparent, #cc43fd, #8722ec, #d654ff, transparent)' 
                : 'linear-gradient(90deg, transparent, #cc43fd, #8722ec, #d654ff, transparent)',
              opacity: isDarkMode ? 0.5 : 0.6,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: isDarkMode ? 0.5 : 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Section Title */}
          <motion.div
            className="mb-12"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center transition-colors duration-500"
              style={{
                color: '#cc43fd',
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              Partners
            </h2>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {partners.map((partner, index) => {
              return (
                <motion.div
                  key={index}
                  variants={fadeInVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`relative p-6 lg:p-8 rounded-2xl transition-all duration-500 group ${isDarkMode ? 'backdrop-blur-sm' : ''}`}
                  style={{
                    background: isDarkMode 
                      ? 'rgba(255, 255, 255, 0.03)' 
                      : '#f5f5f7',
                    border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.4})`,
                    boxShadow: isDarkMode ? 'none' : '0 8px 24px rgba(204, 67, 253, 0.12)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isDarkMode) {
                      e.currentTarget.style.background = '#ffffff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isDarkMode) {
                      e.currentTarget.style.background = '#f5f5f7';
                    }
                  }}
                >
                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-2xl group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                    style={{
                      background: partner.gradient,
                      opacity: isDarkMode ? 0 : 0.05,
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center text-center gap-4">
                    {/* Logo - Rectangle */}
                    <motion.div
                      className="flex-shrink-0 w-64 h-32 rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-500"
                      style={{
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
                        border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.3 : 0.4})`,
                        padding: '16px',
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={240}
                        height={120}
                        className="object-contain w-full h-full"
                      />
                    </motion.div>

                    {/* Description only */}
                    <div>
                      <p className="text-lg sm:text-xl lg:text-2xl font-semibold transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
                        {partner.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Decorative Line */}
          <motion.div
            className="mt-16 mx-auto max-w-md h-1 mt-30 rounded-full transition-all duration-500"
            style={{
              background: isDarkMode 
                ? 'linear-gradient(90deg, transparent, #cc43fd, #8722ec, #d654ff, transparent)' 
                : 'linear-gradient(90deg, transparent, #cc43fd, #8722ec, #d654ff, transparent)',
              opacity: isDarkMode ? 0.5 : 0.6,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: isDarkMode ? 0.5 : 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500"
              style={{
                color: isDarkMode ? 'white' : '#1a1a2e',
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              Connect Us in{' '}
              <span
                style={{
                  color: '#cc43fd',
                }}
              >
                Securing the Future
              </span>
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
              Partner with us to build a more secure digital world
            </p>

            <motion.div
              className="inline-block relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="absolute inset-0 rounded-xl blur-xl opacity-0 hover:opacity-50 transition-opacity duration-300"
                style={{ background: '#cc43fd' }}
              />
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScluoVQP6nvzwVP0PnlXv-1UHOHqJ1HNgS5ElGIBbQ0Nx3sQw/viewform" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="relative px-10 py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-500 shadow-xl"
                  style={{
                    background: '#cc43fd',
                    color: 'white',
                    border: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#d654ff';
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(204, 67, 253, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#cc43fd';
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  Contact Us
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Button>
              </a>
            </motion.div>

            {/* Bottom Decorative Line */}
            <motion.div
              className="mt-16 mx-auto max-w-md h-1 rounded-full transition-all duration-500"
              style={{
                background: isDarkMode 
                  ? 'linear-gradient(90deg, transparent, #cc43fd, #8722ec, #d654ff, transparent)' 
                  : 'linear-gradient(90deg, transparent, #cc43fd, #8722ec, #d654ff, transparent)',
                opacity: isDarkMode ? 0.5 : 0.6,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: isDarkMode ? 0.5 : 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

// Lazy load WebGL component to improve FCP
const Threads = dynamic(() => import('./Threads'), {
  ssr: false,
  loading: () => null,
});

const HeroSection = () => {
  const { isDarkMode } = useTheme();

  const stats = [
    { value: '82+', label: 'Projects' },
    { value: '38+', label: 'Countries Served' },
    { value: '12+', label: 'Core Team' },
    { value: '1,400+', label: 'Security Researchers' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-40 sm:pt-44 md:pt-48 lg:pt-44 xl:pt-40 transition-colors duration-500" 
      style={{ backgroundColor: isDarkMode ? '#1a0033' : '#ffffffff' }}
      aria-label="Hero section"
      role="banner"
    >
      {/* Threads Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Threads
          color={isDarkMode ? [0.8, 0.26, 0.99] : [0.6, 0.2, 0.8]} // Darker purple for light mode
          amplitude={0.8}
          distance={0.3}
          enableMouseInteraction={false}
        />
      </div>
      
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial Gradient Glow - Static */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #8722ec 0%, transparent 70%)' 
              : 'radial-gradient(circle, rgba(135, 34, 236, 0.15) 0%, transparent 70%)',
            opacity: isDarkMode ? 0.25 : 0.35,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #cc43fd 0%, transparent 70%)' 
              : 'radial-gradient(circle, rgba(204, 67, 253, 0.2) 0%, transparent 70%)',
            opacity: isDarkMode ? 0.22 : 0.4,
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="visible"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-colors duration-500"
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
            letterSpacing: '-0.02em',
            color: isDarkMode ? 'white' : '#1a1a2e',
            fontDisplay: 'swap',
          }}
        >
          Next-Gen Cybersecurity
          <br />
          <span
            className="inline-block mt-2"
            style={{
              color: '#cc43fd',
              display: 'inline-block',
            }}
          >
            Powered by Technology & Crowdsourcing
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed px-4 transition-colors duration-500"
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
            color: isDarkMode ? '#d1d5db' : '#4a4a6a',
          }}
        >
          We help organizations identify, prevent, and remediate vulnerabilities through our AI driven platform and a global security researcher community.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: 'transform' }}
          >
            {/* Button Glow Effect */}
            <div
              className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              style={{ background: '#cc43fd' }}
            />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScluoVQP6nvzwVP0PnlXv-1UHOHqJ1HNgS5ElGIBbQ0Nx3sQw/viewform" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="relative px-8 py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 shadow-xl group"
                style={{
                  backgroundColor: '#cc43fd',
                  color: 'white',
                  border: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d654ff';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(204, 67, 253, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#cc43fd';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
              >
                Enquire Now
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
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statsVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative p-6 rounded-xl transition-all duration-500 group cursor-pointer ${isDarkMode ? 'backdrop-blur-sm' : ''}`}
              style={{
                background: isDarkMode 
                  ? 'rgba(255, 255, 255, 0.03)' 
                  : '#f5f5f7',
                border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.4})`,
                boxShadow: isDarkMode 
                  ? 'none' 
                  : '0 4px 12px rgba(204, 67, 253, 0.08)',
                willChange: 'transform, box-shadow, border-color, background',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#cc43fd';
                e.currentTarget.style.boxShadow = isDarkMode 
                  ? '0 0 20px rgba(204, 67, 253, 0.3)' 
                  : '0 8px 24px rgba(204, 67, 253, 0.2)';
                e.currentTarget.style.background = isDarkMode 
                  ? 'rgba(255, 255, 255, 0.05)' 
                  : '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.4})`;
                e.currentTarget.style.boxShadow = isDarkMode 
                  ? 'none' 
                  : '0 4px 12px rgba(204, 67, 253, 0.08)';
                e.currentTarget.style.background = isDarkMode 
                  ? 'rgba(255, 255, 255, 0.03)' 
                  : '#f5f5f7';
              }}
            >
              {/* Glow Effect on Hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                style={{
                  background: index % 2 === 0 ? '#8722ec' : '#cc43fd',
                }}
              />
              
              <div className="relative z-10">
                <div
                  className="text-3xl sm:text-4xl font-bold mb-2 transition-all duration-500"
                  style={{
                    color: isDarkMode ? '#cc43fd' : '#8722ec',
                  }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-sm sm:text-base font-medium transition-colors duration-500"
                  style={{
                    color: isDarkMode ? '#9ca3af' : '#5a5a7a',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
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

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none transition-all duration-500"
        style={{
          background: isDarkMode 
            ? 'linear-gradient(to bottom, transparent, #1a0033)' 
            : 'linear-gradient(to bottom, transparent, #f8f9ff)',
        }}
      />
    </section>
  );
};

export default HeroSection;

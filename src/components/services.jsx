'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Target, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';

const Services = () => {
  const [mounted, setMounted] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fixed particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: '12%', top: '18%' },
    { left: '28%', top: '38%' },
    { left: '48%', top: '22%' },
    { left: '68%', top: '42%' },
    { left: '82%', top: '28%' },
    { left: '18%', top: '62%' },
    { left: '38%', top: '78%' },
    { left: '58%', top: '65%' },
    { left: '78%', top: '75%' },
    { left: '22%', top: '82%' },
    { left: '52%', top: '12%' },
    { left: '72%', top: '88%' },
    { left: '8%', top: '52%' },
    { left: '88%', top: '58%' },
    { left: '42%', top: '32%' },
  ];

  const services = [
    {
      icon: Target,
      category: 'Crowdsourced Cybersecurity',
      title: 'Bug Bounty & Vulnerability Disclosure Programs',
      color: '#cc43fd',
      iconColor: '#cc43fd',
    },
    {
      icon: Shield,
      category: 'Traditional Cybersecurity',
      title: 'Consulting, Compliance, CISO-as-a-Service, SOC Automation, Tool Consulting',
      color: '#cc43fd',
      iconColor: '#cc43fd',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20 transition-colors duration-500" style={{ backgroundColor: isDarkMode ? '#1a0033' : '#f8f9ff' }}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial Gradient Glow - Static */}
        <div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #cc43fd 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(204, 67, 253, 0.15) 0%, transparent 70%)',
            opacity: isDarkMode ? 0.2 : 0.35,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #cc43fd 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(204, 67, 253, 0.2) 0%, transparent 70%)',
            opacity: isDarkMode ? 0.18 : 0.4,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 transition-colors duration-500"
            style={{
              fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
              letterSpacing: '-0.02em',
              color: isDarkMode ? 'white' : '#1a1a2e',
            }}
          >
            <span
              style={{
                color: '#cc43fd',
              }}
            >
              Services
            </span>{' '}
            Snapshot
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -8 }}
                className={`relative p-8 lg:p-10 rounded-2xl transition-all duration-500 group cursor-pointer ${isDarkMode ? 'backdrop-blur-sm' : ''}`}
                style={{
                  background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : '#f5f5f7',
                  border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.4})`,
                  boxShadow: isDarkMode ? 'none' : '0 4px 12px rgba(204, 67, 253, 0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = service.iconColor;
                  e.currentTarget.style.boxShadow = isDarkMode 
                    ? `0 0 40px ${service.iconColor}40`
                    : `0 8px 24px rgba(204, 67, 253, 0.2)`;
                  e.currentTarget.style.background = isDarkMode 
                    ? 'rgba(255, 255, 255, 0.06)'
                    : '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.4})`;
                  e.currentTarget.style.boxShadow = isDarkMode ? 'none' : '0 4px 12px rgba(204, 67, 253, 0.08)';
                  e.currentTarget.style.background = isDarkMode 
                    ? 'rgba(255, 255, 255, 0.03)'
                    : '#f5f5f7';
                }}
              >
                {/* Glow Effect on Hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                  style={{
                    background: service.color,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Category Row */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Icon Container */}
                    <motion.div
                      className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl relative mt-1"
                      style={{
                        background: isDarkMode 
                          ? 'rgba(255, 255, 255, 0.05)' 
                          : 'rgba(204, 67, 253, 0.08)',
                        border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.3 : 0.4})`,
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon
                        className="w-7 h-7"
                        style={{
                          stroke: '#cc43fd',
                        }}
                      />
                    </motion.div>

                    <div className="flex-1">
                      {/* Category */}
                      <h3
                        className="text-2xl sm:text-3xl font-bold mb-8"
                        style={{
                          color: service.color,
                          fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                        }}
                      >
                        {service.category}
                      </h3>

                      {/* Title */}
                      <p
                        className="text-lg sm:text-xl leading-relaxed font-medium mb-6 transition-colors duration-500"
                        style={{
                          fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                          color: isDarkMode ? '#d1d5db' : '#4a4a6a',
                        }}
                      >
                        {service.title}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Button */}
                  <div className="ml-[4.5rem]">
                    <Link 
                      href="/services"
                      aria-label={`Learn more about ${service.category}`}
                    >
                      <motion.div
                        className="inline-flex items-center gap-2 text-white font-semibold group/arrow cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span
                          style={{
                            color: service.color,
                          }}
                        >
                          {service.category === 'Crowdsourced Cybersecurity' 
                            ? 'Explore Bug Bounty Programs'
                            : 'View Consulting Services'
                          }
                        </span>
                        <motion.div
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          <ArrowRight
                            className="w-5 h-5"
                            style={{ stroke: service.iconColor }}
                          />
                        </motion.div>
                      </motion.div>
                    </Link>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div
                  className="absolute top-6 right-6 w-2 h-2 rounded-full"
                  style={{
                    background: '#cc43fd',
                    opacity: 0.5,
                  }}
                />
                <div
                  className="absolute bottom-6 left-6 w-2 h-2 rounded-full"
                  style={{
                    background: '#cc43fd',
                    opacity: 0.5,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button Glow Effect */}
            <div
              className="absolute inset-0 rounded-xl blur-xl opacity-0 hover:opacity-50 transition-opacity duration-300"
              style={{ background: '#cc43fd' }}
            />
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScluoVQP6nvzwVP0PnlXv-1UHOHqJ1HNgS5ElGIBbQ0Nx3sQw/viewform" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="relative px-10 py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 shadow-xl group"
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
                Book a Consultation
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </Link>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="mt-6 text-gray-400 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
            }}
          >
            Let our experts help secure your digital infrastructure
          </motion.p>
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          className="mt-16 mx-auto max-w-lg h-1 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, #cc43fd, #8722ec, #d654ff, transparent)',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>

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

export default Services;

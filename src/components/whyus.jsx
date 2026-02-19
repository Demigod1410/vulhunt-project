'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Brain, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const WhyUs = () => {
  const [mounted, setMounted] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fixed particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: '15%', top: '20%' },
    { left: '30%', top: '40%' },
    { left: '50%', top: '25%' },
    { left: '70%', top: '45%' },
    { left: '85%', top: '30%' },
    { left: '20%', top: '65%' },
    { left: '40%', top: '75%' },
    { left: '60%', top: '60%' },
    { left: '80%', top: '70%' },
    { left: '25%', top: '85%' },
    { left: '55%', top: '15%' },
    { left: '75%', top: '90%' },
    { left: '10%', top: '50%' },
    { left: '90%', top: '55%' },
    { left: '45%', top: '35%' },
  ];

  const features = [
    {
      icon: Users,
      title: '1,400+ security researchers actively testing systems worldwide',
      gradient: 'linear-gradient(135deg, #799dfe 0%, #8722ec 100%)',
    },
    {
      icon: Shield,
      title: '82+ projects completed across 38+ countries',
      gradient: 'linear-gradient(135deg, #8722ec 0%, #cc43fd 100%)',
    },
    {
      icon: Brain,
      title: 'AI & ML enabled platform for real-time vulnerability detection',
      gradient: 'linear-gradient(135deg, #799dfe 0%, #cc43fd 100%)',
    },
    {
      icon: Zap,
      title: 'Seamless scalability to meet your organization\'s security needs',
      gradient: 'linear-gradient(135deg, #cc43fd 0%, #799dfe 100%)',
    },
  ];

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
    <section 
      id="whyus" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 transition-colors duration-500" 
      style={{ backgroundColor: isDarkMode ? '#1a0033' : '#f8f9ff' }}
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial Gradient Glow - Static */}
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #8722ec 0%, transparent 70%)' 
              : 'radial-gradient(circle, rgba(135, 34, 236, 0.15) 0%, transparent 70%)',
            opacity: isDarkMode ? 0.2 : 0.35,
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
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
          className="text-center mb-12 sm:mb-14 md:mb-16"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-colors duration-500"
            style={{
              fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
              letterSpacing: '-0.02em',
              color: isDarkMode ? 'white' : '#1a1a2e',
            }}
          >
            Why{' '}
            <span
              style={{
                color: '#cc43fd',
              }}
            >
              Vulhunt
            </span>
            ?
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative p-5 sm:p-6 md:p-8 rounded-2xl transition-all duration-500 group cursor-pointer ${isDarkMode ? 'backdrop-blur-sm' : ''}`}
                style={{
                  background: isDarkMode 
                    ? 'rgba(255, 255, 255, 0.03)' 
                    : '#f5f5f7',
                  border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.4})`,
                  boxShadow: isDarkMode 
                    ? 'none' 
                    : '0 4px 12px rgba(204, 67, 253, 0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#cc43fd';
                  e.currentTarget.style.boxShadow = isDarkMode 
                    ? '0 0 30px rgba(204, 67, 253, 0.3)' 
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
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                  style={{
                    background: feature.gradient,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex items-start gap-4 sm:gap-6">
                  {/* Icon Container */}
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center relative transition-all duration-500"
                    style={{
                      background: isDarkMode 
                        ? 'rgba(255, 255, 255, 0.05)' 
                        : 'rgba(204, 67, 253, 0.08)',
                      border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.3 : 0.4})`,
                    }}
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                      style={{
                        stroke: '#cc43fd',
                      }}
                    />
                  </motion.div>

                  {/* Text */}
                  <div className="flex-1 pt-0.5 sm:pt-1">
                    <p
                      className="text-base sm:text-lg md:text-xl leading-relaxed font-medium transition-colors duration-500"
                      style={{
                        fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                        color: isDarkMode ? '#d1d5db' : '#4a4a6a',
                      }}
                    >
                      {feature.title}
                    </p>
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full"
                  style={{
                    background: '#cc43fd',
                    opacity: 0.5,
                  }}
                />
              </motion.div>
            );
          })}
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

export default WhyUs;

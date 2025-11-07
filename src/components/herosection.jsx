'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { value: '82+', label: 'Projects' },
    { value: '38+', label: 'Countries Served' },
    { value: '12+', label: 'Core Team' },
    { value: '1,400+', label: 'Security Researchers' },
  ];

  // Fixed particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: '10%', top: '15%' },
    { left: '25%', top: '35%' },
    { left: '40%', top: '20%' },
    { left: '55%', top: '45%' },
    { left: '70%', top: '25%' },
    { left: '85%', top: '40%' },
    { left: '15%', top: '60%' },
    { left: '30%', top: '75%' },
    { left: '45%', top: '65%' },
    { left: '60%', top: '80%' },
    { left: '75%', top: '70%' },
    { left: '90%', top: '85%' },
    { left: '20%', top: '50%' },
    { left: '50%', top: '30%' },
    { left: '80%', top: '55%' },
    { left: '35%', top: '90%' },
    { left: '65%', top: '10%' },
    { left: '12%', top: '85%' },
    { left: '88%', top: '15%' },
    { left: '48%', top: '88%' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 md:pt-0" style={{ backgroundColor: '#010066' }}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial Gradient Glow */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #8722ec 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #cc43fd 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Particle Network Effect */}
        <div className="absolute inset-0">
          {mounted && particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: '#799dfe',
                left: pos.left,
                top: pos.top,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.25,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
            letterSpacing: '-0.02em',
          }}
        >
          Next-Gen Cybersecurity
          <br />
          <span
            className="inline-block mt-2"
            style={{
              color: '#799dfe',
              display: 'inline-block',
            }}
          >
            Powered by Technology & Crowdsourcing
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed px-4"
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
          }}
        >
          We help organizations identify, prevent, and remediate vulnerabilities through our AI-driven platform and a global security researcher community.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button Glow Effect */}
            <div
              className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              style={{ background: '#799dfe' }}
            />
            <Button
              size="lg"
              className="relative px-8 py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 shadow-xl group"
              style={{
                backgroundColor: '#799dfe',
                color: '#010066',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8fa9ff';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(121, 157, 254, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#799dfe';
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
              className="relative p-6 rounded-xl backdrop-blur-sm transition-all duration-300 group cursor-pointer"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(121, 157, 254, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#799dfe';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(121, 157, 254, 0.3)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(121, 157, 254, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
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
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  style={{
                    color: '#799dfe',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #010066)',
        }}
      />
    </section>
  );
};

export default HeroSection;

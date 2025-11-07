'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Brain, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const WhyUs = () => {
  const [mounted, setMounted] = useState(false);

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
      title: 'AI & ML-enabled platform for real-time vulnerability detection',
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
    <section id="whyus" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20" style={{ backgroundColor: '#010066' }}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial Gradient Glow */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, #8722ec 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, #799dfe 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.2, 0.15],
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
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: '#cc43fd',
                left: pos.left,
                top: pos.top,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.33,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            style={{
              fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            Why{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 50%, #cc43fd 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Vulhunt
            </span>
            ?
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
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
                className="relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 group cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(121, 157, 254, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#799dfe';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(121, 157, 254, 0.3)';
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
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                  style={{
                    background: feature.gradient,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon Container */}
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center relative"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(121, 157, 254, 0.3)',
                    }}
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="absolute inset-0 rounded-xl opacity-30 blur-lg"
                      style={{
                        background: feature.gradient,
                      }}
                    />
                    <Icon
                      className="w-8 h-8 relative z-10"
                      style={{
                        stroke: 'url(#gradient' + index + ')',
                      }}
                    />
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id={`gradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#799dfe', stopOpacity: 1 }} />
                          <stop offset="50%" style={{ stopColor: '#8722ec', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#cc43fd', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>

                  {/* Text */}
                  <div className="flex-1 pt-1">
                    <p
                      className="text-lg sm:text-xl text-gray-200 leading-relaxed font-medium"
                      style={{
                        fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                      }}
                    >
                      {feature.title}
                    </p>
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full"
                  style={{
                    background: feature.gradient,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          className="mt-16 mx-auto max-w-md h-1 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, #799dfe, #8722ec, #cc43fd, transparent)',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>

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

export default WhyUs;

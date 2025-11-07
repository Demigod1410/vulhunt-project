'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Target, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

const Services = () => {
  const [mounted, setMounted] = useState(false);

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
      gradient: 'linear-gradient(135deg, #799dfe 0%, #8722ec 100%)',
      iconColor: '#799dfe',
    },
    {
      icon: Shield,
      category: 'Traditional Cybersecurity',
      title: 'Consulting, Compliance, CISO-as-a-Service, SOC Automation, Tool Consulting',
      gradient: 'linear-gradient(135deg, #8722ec 0%, #cc43fd 100%)',
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20" style={{ backgroundColor: '#010066' }}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial Gradient Glow */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, #799dfe 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, #cc43fd 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        />

        {/* Particle Effect */}
        <div className="absolute inset-0">
          {mounted && particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: '#8722ec',
                left: pos.left,
                top: pos.top,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3.5 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3,
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
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            style={{
              fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 50%, #cc43fd 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
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
                className="relative p-8 lg:p-10 rounded-2xl backdrop-blur-sm transition-all duration-300 group cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(121, 157, 254, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = service.iconColor;
                  e.currentTarget.style.boxShadow = `0 0 40px ${service.iconColor}40`;
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
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
                    background: service.gradient,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 relative"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(121, 157, 254, 0.3)',
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-30 blur-lg"
                      style={{
                        background: service.gradient,
                      }}
                    />
                    <Icon
                      className="w-10 h-10 relative z-10"
                      style={{
                        stroke: 'url(#serviceGradient' + index + ')',
                      }}
                    />
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id={`serviceGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#799dfe', stopOpacity: 1 }} />
                          <stop offset="50%" style={{ stopColor: '#8722ec', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#cc43fd', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>

                  {/* Category */}
                  <h3
                    className="text-2xl sm:text-3xl font-bold mb-4"
                    style={{
                      background: service.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                    }}
                  >
                    {service.category}
                  </h3>

                  {/* Title */}
                  <p
                    className="text-lg sm:text-xl text-gray-200 leading-relaxed font-medium mb-6"
                    style={{
                      fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                    }}
                  >
                    {service.title}
                  </p>

                  {/* Arrow Button */}
                  <motion.div
                    className="inline-flex items-center gap-2 text-white font-semibold group/arrow"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span
                      className="text-base"
                      style={{
                        background: service.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Learn More
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
                </div>

                {/* Decorative Corner Elements */}
                <motion.div
                  className="absolute top-6 right-6 w-2 h-2 rounded-full"
                  style={{
                    background: service.gradient,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-2 h-2 rounded-full"
                  style={{
                    background: service.gradient,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.4 + 0.5,
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
              style={{ background: 'linear-gradient(135deg, #799dfe 0%, #cc43fd 100%)' }}
            />
            <Button
              size="lg"
              className="relative px-10 py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 shadow-xl group"
              style={{
                background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 50%, #cc43fd 100%)',
                color: 'white',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #8fa9ff 0%, #9833fd 50%, #d654ff 100%)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(121, 157, 254, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #799dfe 0%, #8722ec 50%, #cc43fd 100%)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
            >
              Get a free consultation
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
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

export default Services;

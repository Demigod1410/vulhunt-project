'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, Users, Calendar, Handshake, Award, Briefcase, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';


export default function AboutUsPage() {
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
      icon: Shield,
    },
    {
      name: 'Coditing',
      role: 'Consulting Partner (Certification & Data Privacy Services)',
      gradient: 'linear-gradient(135deg, #8722ec 0%, #cc43fd 100%)',
      icon: Award,
    },
    {
      name: 'NeoCISO',
      role: 'SOC Automation Technology Partner',
      gradient: 'linear-gradient(135deg, #cc43fd 0%, #799dfe 100%)',
      icon: Briefcase,
    },
    {
      name: 'NAWOM',
      role: 'Growth & Marketing Partner',
      gradient: 'linear-gradient(135deg, #799dfe 0%, #cc43fd 100%)',
      icon: TrendingUp,
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
    
    <div className="min-h-screen" style={{ backgroundColor: '#010066' }}>
        <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20 pt-32">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
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
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
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

          {/* Particles */}
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
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{
              fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            About{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 50%, #cc43fd 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                MozBackgroundClip: 'text',
                MozTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Vulhunt
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Building the future of cybersecurity through innovation, trust, and community
          </p>
        </motion.div>
      </section>

      {/* Company Overview Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="mb-12"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              style={{
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  MozBackgroundClip: 'text',
                  MozTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Company Overview
              </span>
            </h2>
          </motion.div>

          {/* Overview Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <div
              className="relative p-8 lg:p-12 rounded-3xl backdrop-blur-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(121, 157, 254, 0.2)',
              }}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-10 blur-2xl"
                style={{
                  background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 100%)',
                }}
              />

              <div className="relative z-10 space-y-6">
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                  Vulhunt is a next-generation cybersecurity solutions company built on the ethos of quality, trust, and scalable security.
                </p>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                  We leverage the combined power of technology and crowdsourcing to provide robust security for organizations worldwide.
                </p>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                  Our community of 1,400+ security researchers continuously tests systems and applications for a wide range of real-world scenarios, enabling real-time vulnerability detection for remediation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="mb-12"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              style={{
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, #8722ec 0%, #cc43fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  MozBackgroundClip: 'text',
                  MozTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Our Journey
              </span>
            </h2>
          </motion.div>

          {/* Journey Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <div
              className="relative p-8 lg:p-12 rounded-3xl backdrop-blur-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(135, 34, 236, 0.2)',
              }}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-10 blur-2xl"
                style={{
                  background: 'linear-gradient(135deg, #8722ec 0%, #cc43fd 100%)',
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-start gap-6 mb-6">
                  <motion.div
                    className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center relative"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(135, 34, 236, 0.3)',
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-30 blur-lg"
                      style={{
                        background: 'linear-gradient(135deg, #8722ec 0%, #cc43fd 100%)',
                      }}
                    />
                    <Calendar className="w-10 h-10 relative z-10" style={{ stroke: '#8722ec' }} />
                  </motion.div>

                  <div className="flex-1 space-y-6">
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                      Founded in 2020, Vulhunt started as India's first next-generation crowdsourced cybersecurity platform. It was also the world's first AI & ML-enabled platform delivering Bug Bounty and Vulnerability Disclosure Program (VDP) services.
                    </p>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                      As customer requirements evolved, Vulhunt expanded into traditional cybersecurity consulting, compliance, and SOC services, while maintaining our crowdsourced security excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team & Community Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="mb-12"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              style={{
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, #cc43fd 0%, #799dfe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  MozBackgroundClip: 'text',
                  MozTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Our Team & Community
              </span>
            </h2>
          </motion.div>

          {/* Team Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Core Team Card */}
            <motion.div
              variants={fadeInVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 group"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(204, 67, 253, 0.2)',
              }}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                style={{
                  background: 'linear-gradient(135deg, #cc43fd 0%, #799dfe 100%)',
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(204, 67, 253, 0.3)',
                  }}
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="absolute inset-0 rounded-xl opacity-30 blur-lg"
                    style={{
                      background: 'linear-gradient(135deg, #cc43fd 0%, #799dfe 100%)',
                    }}
                  />
                  <Briefcase className="w-8 h-8 relative z-10" style={{ stroke: '#cc43fd' }} />
                </motion.div>

                <h3
                  className="text-2xl sm:text-3xl font-bold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #cc43fd 0%, #799dfe 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    MozBackgroundClip: 'text',
                    MozTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                  }}
                >
                  Core Team
                </h3>
                <p className="text-gray-200 text-lg sm:text-xl font-medium">
                  12+ seasoned cybersecurity professionals
                </p>
              </div>
            </motion.div>

            {/* Security Researchers Card */}
            <motion.div
              variants={fadeInVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 group"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(121, 157, 254, 0.2)',
              }}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                style={{
                  background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 100%)',
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative"
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
                      background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 100%)',
                    }}
                  />
                  <Users className="w-8 h-8 relative z-10" style={{ stroke: '#799dfe' }} />
                </motion.div>

                <h3
                  className="text-2xl sm:text-3xl font-bold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    MozBackgroundClip: 'text',
                    MozTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                  }}
                >
                  Security Researchers
                </h3>
                <p className="text-gray-200 text-lg sm:text-xl font-medium">
                  1,400+ and growing globally
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="mb-12"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center"
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
                  MozBackgroundClip: 'text',
                  MozTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Partners
              </span>
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
              const Icon = partner.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 group"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(121, 157, 254, 0.2)',
                  }}
                >
                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                    style={{
                      background: partner.gradient,
                    }}
                  />

                  <div className="relative z-10 flex items-start gap-6">
                    {/* Icon */}
                    <motion.div
                      className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center relative"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(121, 157, 254, 0.3)',
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div
                        className="absolute inset-0 rounded-xl opacity-30 blur-lg"
                        style={{
                          background: partner.gradient,
                        }}
                      />
                      <Icon className="w-8 h-8 relative z-10" style={{ stroke: 'url(#partnerGradient' + index + ')' }} />
                      <svg width="0" height="0">
                        <defs>
                          <linearGradient id={`partnerGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#799dfe', stopOpacity: 1 }} />
                            <stop offset="50%" style={{ stopColor: '#8722ec', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#cc43fd', stopOpacity: 1 }} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className="text-2xl sm:text-3xl font-bold mb-2"
                        style={{
                          background: partner.gradient,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          MozBackgroundClip: 'text',
                          MozTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          color: 'transparent',
                          fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                        }}
                      >
                        {partner.name}
                      </h3>
                      <p className="text-gray-200 text-base sm:text-lg">
                        {partner.role}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Corner Element */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 rounded-full"
                    style={{
                      background: partner.gradient,
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
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
              style={{
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              Join Us in{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 50%, #cc43fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  MozBackgroundClip: 'text',
                  MozTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Securing the Future
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Partner with us to build a more secure digital world
            </p>

            <motion.div
              className="inline-block relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="absolute inset-0 rounded-xl blur-xl opacity-0 hover:opacity-50 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #799dfe 0%, #cc43fd 100%)' }}
              />
              <Button
                size="lg"
                className="relative px-10 py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 shadow-xl"
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
                Contact Us
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
        </div>
      </section>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #010066)',
        }}
      />
    </div>
  );
}

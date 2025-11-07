'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Target, Shield, Users, Lock, FileCheck, UserCog, Bot, CheckCircle, DollarSign, Award, TrendingDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';


export default function ServicesPage() {
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
            Our{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 50%, #cc43fd 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your digital infrastructure
          </p>
        </motion.div>
      </section>

      {/* Section A: Crowdsourced Cybersecurity Services */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              style={{
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              A.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Crowdsourced Cybersecurity Services
              </span>
            </h2>
          </motion.div>

          {/* Service 1: Bug Bounty */}
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
          >
            <div
              className="relative p-8 lg:p-12 rounded-3xl backdrop-blur-sm transition-all duration-300 group"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(121, 157, 254, 0.2)',
              }}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                style={{
                  background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 100%)',
                }}
              />

              <div className="relative z-10">
                {/* Icon and Number */}
                <div className="flex items-start gap-6 mb-6">
                  <motion.div
                    className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center relative"
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
                        background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 100%)',
                      }}
                    />
                    <Target className="w-10 h-10 relative z-10" style={{ stroke: '#799dfe' }} />
                  </motion.div>

                  <div className="flex-1">
                    <h3
                      className="text-2xl sm:text-3xl font-bold mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                      }}
                    >
                      1. Bug Bounty Managed Services
                    </h3>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6">
                      Vulhunt's bug bounty programs are results-oriented security testing initiatives. These programs are best suited for organizations preferring to provide financial rewards to security researchers for discovering quality vulnerabilities. The clients are charged only for the vulnerabilities reported as per the agreed price for severity.
                    </p>

                    {/* Pricing Example Box */}
                    <div
                      className="p-6 rounded-2xl mb-6"
                      style={{
                        background: 'rgba(121, 157, 254, 0.05)',
                        border: '1px solid rgba(121, 157, 254, 0.2)',
                      }}
                    >
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <DollarSign className="w-6 h-6" style={{ stroke: '#799dfe' }} />
                        Pricing Example:
                      </h4>
                      <p className="text-gray-200 text-lg">
                        P5 (Low Severity) – $25 × 5 vulnerabilities = <span className="font-bold text-white">$125</span>
                      </p>
                    </div>

                    {/* Key Benefit */}
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ stroke: '#799dfe' }} />
                      <div>
                        <p className="text-sm font-semibold text-gray-300 mb-1">Key Benefit:</p>
                        <p className="text-gray-200 text-base">
                          Clients pay only for verified vulnerabilities, ensuring cost-effectiveness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service 2: VDP */}
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
          >
            <div
              className="relative p-8 lg:p-12 rounded-3xl backdrop-blur-sm transition-all duration-300 group"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(121, 157, 254, 0.2)',
              }}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                style={{
                  background: 'linear-gradient(135deg, #8722ec 0%, #cc43fd 100%)',
                }}
              />

              <div className="relative z-10">
                {/* Icon and Number */}
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
                    <Award className="w-10 h-10 relative z-10" style={{ stroke: '#8722ec' }} />
                  </motion.div>

                  <div className="flex-1">
                    <h3
                      className="text-2xl sm:text-3xl font-bold mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #8722ec 0%, #cc43fd 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                      }}
                    >
                      2. Vulnerability Disclosure Programs (VDP)
                    </h3>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4">
                      VDP offers a budget-controlled alternative to traditional bug bounty programs. Security researchers are rewarded with non-monetary rewards such as T-shirts, laptop bags, or recognition.
                    </p>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                      Vulhunt charges a standard monthly fee, with no hidden costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Divider */}
          <motion.div
            className="my-20 mx-auto max-w-lg h-1 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, #799dfe, #8722ec, #cc43fd, transparent)',
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>
      </section>

      {/* Section B: Traditional Cybersecurity Services */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              style={{
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              B.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #cc43fd 0%, #799dfe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Traditional Cybersecurity Services
              </span>
            </h2>
          </motion.div>

          {/* Service 1: Cybersecurity Consulting */}
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
          >
            <div
              className="relative p-8 lg:p-12 rounded-3xl backdrop-blur-sm transition-all duration-300 group"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(204, 67, 253, 0.2)',
              }}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                style={{
                  background: 'linear-gradient(135deg, #cc43fd 0%, #799dfe 100%)',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <motion.div
                    className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center relative"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(204, 67, 253, 0.3)',
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-30 blur-lg"
                      style={{
                        background: 'linear-gradient(135deg, #cc43fd 0%, #799dfe 100%)',
                      }}
                    />
                    <Shield className="w-10 h-10 relative z-10" style={{ stroke: '#cc43fd' }} />
                  </motion.div>

                  <div className="flex-1">
                    <h3
                      className="text-2xl sm:text-3xl font-bold mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #cc43fd 0%, #799dfe 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                      }}
                    >
                      1. Cybersecurity Consulting (VAPT)
                    </h3>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                      Comprehensive Vulnerability Assessment & Penetration Testing (VAPT) covering systems, Applications, Infrastructure and Cloud Services for assessing vulnerabilities for understanding risk posture and its mitigation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service 2: Compliance & Certification */}
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
          >
            <div
              className="relative p-8 lg:p-12 rounded-3xl backdrop-blur-sm transition-all duration-300 group"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(121, 157, 254, 0.2)',
              }}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                style={{
                  background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 100%)',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <motion.div
                    className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center relative"
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
                        background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 100%)',
                      }}
                    />
                    <FileCheck className="w-10 h-10 relative z-10" style={{ stroke: '#799dfe' }} />
                  </motion.div>

                  <div className="flex-1">
                    <h3
                      className="text-2xl sm:text-3xl font-bold mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                      }}
                    >
                      2. Compliance & Certification Services
                    </h3>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6">
                      Internal audits and Third-Party Risk Assessments (TPRM / TPRA), and certification services* for global standards:
                    </p>

                    {/* Standards List */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                      {['ISO 27001', 'ISO 22301', 'PCI DSS', 'COBIT', 'SOC 2 Type II'].map((standard, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl text-center"
                          style={{
                            background: 'rgba(121, 157, 254, 0.1)',
                            border: '1px solid rgba(121, 157, 254, 0.3)',
                          }}
                        >
                          <p className="text-white font-semibold text-sm">{standard}</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-400 text-sm italic">
                      * certification provided in collaboration with certification partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service 3: CISO-as-a-Service */}
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
          >
            <div
              className="relative p-8 lg:p-12 rounded-3xl backdrop-blur-sm transition-all duration-300 group"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(135, 34, 236, 0.2)',
              }}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                style={{
                  background: 'linear-gradient(135deg, #8722ec 0%, #cc43fd 100%)',
                }}
              />

              <div className="relative z-10">
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
                    <UserCog className="w-10 h-10 relative z-10" style={{ stroke: '#8722ec' }} />
                  </motion.div>

                  <div className="flex-1">
                    <h3
                      className="text-2xl sm:text-3xl font-bold mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #8722ec 0%, #cc43fd 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                      }}
                    >
                      3. CISO-as-a-Service
                    </h3>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                      Vulhunt's CISO and Virtual CISO services provide top-tier cybersecurity leadership to SMBs, optimizing the cost and complexity of hiring full-time executives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service 4: SOC Automation */}
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
          >
            <div
              className="relative p-8 lg:p-12 rounded-3xl backdrop-blur-sm transition-all duration-300 group"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(204, 67, 253, 0.2)',
              }}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl"
                style={{
                  background: 'linear-gradient(135deg, #cc43fd 0%, #799dfe 100%)',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <motion.div
                    className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center relative"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(204, 67, 253, 0.3)',
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-30 blur-lg"
                      style={{
                        background: 'linear-gradient(135deg, #cc43fd 0%, #799dfe 100%)',
                      }}
                    />
                    <Bot className="w-10 h-10 relative z-10" style={{ stroke: '#cc43fd' }} />
                  </motion.div>

                  <div className="flex-1">
                    <h3
                      className="text-2xl sm:text-3xl font-bold mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #cc43fd 0%, #799dfe 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                      }}
                    >
                      4. SOC Automation & Tool Consulting
                    </h3>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6">
                      AI & ML-powered solutions for SOC automation, compliance, and governance.
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <TrendingDown className="w-6 h-6 flex-shrink-0 mt-1" style={{ stroke: '#799dfe' }} />
                        <p className="text-gray-200 text-base">
                          Reduce cybersecurity management costs by 20%–45%
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ stroke: '#799dfe' }} />
                        <p className="text-gray-200 text-base">
                          Expertise in evaluation, selection, onboarding, and implementation of best cybersecurity tools
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
              style={{
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              Ready to{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #799dfe 0%, #8722ec 50%, #cc43fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Secure
              </span>{' '}
              Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Let our experts help you build a robust cybersecurity strategy tailored to your needs
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
                Get a Free Consultation
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

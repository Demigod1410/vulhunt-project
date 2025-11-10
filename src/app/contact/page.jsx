'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Globe, Send, User, Phone, Building2, MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import { useTheme } from '@/contexts/ThemeContext';

export default function ContactPage() {
  const { isDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    company: '',
    message: '',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
    <div className="min-h-screen transition-colors duration-500" style={{ backgroundColor: isDarkMode ? '#1a0033' : '#f8f9ff' }}>
        <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20 pt-32">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl transition-opacity duration-500"
            style={{
              background: isDarkMode 
                ? 'radial-gradient(circle, #8722ec 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(135, 34, 236, 0.15) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: isDarkMode ? [0.2, 0.3, 0.2] : [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl transition-opacity duration-500"
            style={{
              background: isDarkMode 
                ? 'radial-gradient(circle, #cc43fd 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(204, 67, 253, 0.12) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: isDarkMode ? [0.2, 0.25, 0.2] : [0.25, 0.35, 0.25],
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
                className="absolute w-1 h-1 rounded-full transition-colors duration-500"
                style={{
                  background: isDarkMode ? '#cc43fd' : '#8722ec',
                  left: pos.left,
                  top: pos.top,
                }}
                animate={{
                  opacity: isDarkMode ? [0, 0.6, 0] : [0, 0.4, 0],
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-colors duration-500"
            style={{
              color: isDarkMode ? 'white' : '#1a1a2e',
              fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            <span
              style={{
                color: '#cc43fd',
              }}
            >
              Contact Us
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl mb-4 font-semibold transition-colors duration-500" style={{ color: isDarkMode ? 'white' : '#1a1a2e' }}>
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
            We'd love to discuss your cybersecurity needs.
          </p>
        </motion.div>
      </section>

      {/* Main Content - Form and Contact Info */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes 2 columns */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <div
                className={`relative p-8 lg:p-12 rounded-3xl transition-all duration-500 ${isDarkMode ? 'backdrop-blur-sm' : ''}`}
                style={{
                  background: isDarkMode 
                    ? 'rgba(255, 255, 255, 0.03)' 
                    : '#f5f5f7',
                  border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.4})`,
                  boxShadow: isDarkMode ? 'none' : '0 8px 24px rgba(204, 67, 253, 0.12)',
                }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500"
                  style={{
                    background: '#cc43fd',
                    opacity: isDarkMode ? 0.1 : 0.05,
                  }}
                />

                <div className="relative z-10">
                  <h3
                    className="text-2xl sm:text-3xl font-bold mb-8"
                    style={{
                      color: '#cc43fd',
                      fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Contact Form
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-3 flex items-center gap-2 transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
                        <User className="w-4 h-4" style={{ stroke: '#cc43fd' }} />
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl transition-all duration-500 focus:outline-none focus:ring-2"
                        style={{
                          background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f5f5f7',
                          border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                          color: isDarkMode ? 'white' : '#1a1a2e',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#cc43fd';
                          e.target.style.boxShadow = '0 0 20px rgba(121, 157, 254, 0.3)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(121, 157, 254, 0.2)';
                          e.target.style.boxShadow = 'none';
                        }}
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-3 flex items-center gap-2 transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
                        <Mail className="w-4 h-4" style={{ stroke: '#cc43fd' }} />
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl transition-all duration-500 focus:outline-none focus:ring-2"
                        style={{
                          background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f5f5f7',
                          border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                          color: isDarkMode ? 'white' : '#1a1a2e',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#cc43fd';
                          e.target.style.boxShadow = '0 0 20px rgba(204, 67, 253, 0.3)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = `rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`;
                          e.target.style.boxShadow = 'none';
                        }}
                        placeholder="Enter your email"
                      />
                    </div>

                    {/* Contact Number Field */}
                    <div>
                      <label htmlFor="contactNumber" className="block text-sm font-semibold mb-3 flex items-center gap-2 transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
                        <Phone className="w-4 h-4" style={{ stroke: '#cc43fd' }} />
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl transition-all duration-500 focus:outline-none focus:ring-2"
                        style={{
                          background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f5f5f7',
                          border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                          color: isDarkMode ? 'white' : '#1a1a2e',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#cc43fd';
                          e.target.style.boxShadow = '0 0 20px rgba(204, 67, 253, 0.3)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = `rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`;
                          e.target.style.boxShadow = 'none';
                        }}
                        placeholder="Enter your contact number"
                      />
                    </div>

                    {/* Company Field */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-3 flex items-center gap-2 transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
                        <Building2 className="w-4 h-4" style={{ stroke: '#cc43fd' }} />
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl transition-all duration-500 focus:outline-none focus:ring-2"
                        style={{
                          background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f5f5f7',
                          border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                          color: isDarkMode ? 'white' : '#1a1a2e',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#cc43fd';
                          e.target.style.boxShadow = '0 0 20px rgba(204, 67, 253, 0.3)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = `rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`;
                          e.target.style.boxShadow = 'none';
                        }}
                        placeholder="Enter your company name"
                      />
                    </div>

                    {/* Inquiry Type / Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-3 flex items-center gap-2 transition-colors duration-500" style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}>
                        <MessageSquare className="w-4 h-4" style={{ stroke: '#cc43fd' }} />
                        Inquiry Type / Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl transition-all duration-500 focus:outline-none focus:ring-2 resize-none"
                        style={{
                          background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f5f5f7',
                          border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                          color: isDarkMode ? 'white' : '#1a1a2e',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#cc43fd';
                          e.target.style.boxShadow = '0 0 20px rgba(204, 67, 253, 0.3)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = `rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`;
                          e.target.style.boxShadow = 'none';
                        }}
                        placeholder="Tell us about your inquiry or message"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto px-8 py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-500 shadow-xl"
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
                        <Send className="w-5 h-5 mr-2 inline-block" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Direct Contact Info - Takes 1 column */}
            <motion.div
              className="lg:col-span-1"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ delay: 0.3 }}
            >
              <div
                className={`relative p-8 rounded-3xl h-full transition-all duration-500 ${isDarkMode ? 'backdrop-blur-sm' : ''}`}
                style={{
                  background: isDarkMode 
                    ? 'rgba(255, 255, 255, 0.03)' 
                    : '#f5f5f7',
                  border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.4})`,
                  boxShadow: isDarkMode ? 'none' : '0 8px 24px rgba(204, 67, 253, 0.12)',
                }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500"
                  style={{
                    background: '#cc43fd',
                    opacity: isDarkMode ? 0.1 : 0.05,
                  }}
                />

                <div className="relative z-10">
                  <h3
                    className="text-2xl sm:text-3xl font-bold mb-8"
                    style={{
                      color: '#cc43fd',
                      fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                    }}
                  >
                    Direct Contact
                  </h3>

                  <div className="space-y-6">
                    {/* Email */}
                    <motion.div
                      className="group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300"
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid rgba(204, 67, 253, 0.1)',
                        }}
                      >
                        <motion.div
                          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{
                            background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.08)',
                            border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.3 : 0.4})`,
                          }}
                          whileHover={{ rotate: 5 }}
                        >
                          <Mail className="w-6 h-6" style={{ stroke: '#cc43fd' }} />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-sm mb-1 font-semibold transition-colors duration-500" style={{ color: isDarkMode ? '#9ca3af' : '#5a5a7a' }}>Mail</p>
                          <a 
                            href="mailto:business@vulhunt.in"
                            className="text-base transition-colors duration-500 break-all"
                            style={{ color: isDarkMode ? 'white' : '#1a1a2e' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#cc43fd'}
                            onMouseLeave={(e) => e.currentTarget.style.color = isDarkMode ? 'white' : '#1a1a2e'}
                          >
                            business@vulhunt.in
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    {/* Website */}
                    <motion.div
                      className="group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300"
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid rgba(204, 67, 253, 0.1)',
                        }}
                      >
                        <motion.div
                          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{
                            background: 'rgba(204, 67, 253, 0.1)',
                            border: '1px solid rgba(204, 67, 253, 0.3)',
                          }}
                          whileHover={{ rotate: 5 }}
                        >
                          <Globe className="w-6 h-6" style={{ stroke: '#cc43fd' }} />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-sm mb-1 font-semibold transition-colors duration-500" style={{ color: isDarkMode ? '#9ca3af' : '#5a5a7a' }}>Web</p>
                          <a 
                            href="https://www.vulhunt.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base transition-colors duration-500 break-all"
                            style={{ color: isDarkMode ? 'white' : '#1a1a2e' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#cc43fd'}
                            onMouseLeave={(e) => e.currentTarget.style.color = isDarkMode ? 'white' : '#1a1a2e'}
                          >
                            www.vulhunt.com
                          </a>
                        </div>
                      </div>
                    </motion.div>

                    {/* Decorative Element */}
                    <motion.div
                      className="mt-8 pt-8 border-t transition-all duration-500"
                      style={{
                        borderColor: `rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                      }}
                    >
                      <p className="text-sm leading-relaxed transition-colors duration-500" style={{ color: isDarkMode ? '#9ca3af' : '#5a5a7a' }}>
                        Our team typically responds within 24-48 hours during business days.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decorative Line */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          className="mx-auto max-w-lg h-1 rounded-full transition-all duration-500"
          style={{
            background: 'linear-gradient(90deg, transparent, #cc43fd, #8722ec, #d654ff, transparent)',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: isDarkMode ? 0.5 : 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </section>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none transition-all duration-500"
        style={{
          background: isDarkMode 
            ? 'linear-gradient(to bottom, transparent, #1a0033)'
            : 'linear-gradient(to bottom, transparent, #f8f9ff)',
        }}
      />
    </div>
  );
}


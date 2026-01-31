'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Globe, Send, User, Phone, Building2, MessageCircle, Linkedin, Facebook } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

// Custom X/Twitter Icon Component
const XIcon = ({ className, style }) => (
  <div className={className} style={style}>
    <Image
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAC+ElEQVR4AYyV0XUbMQwEB65E6cSuJHIlciqRXImUSqxOkFnwdPJLfsJHENgFuEfyeNIL/9lq6ta4wm9xiB0alCaneIKYKP1byMQz0MnNuDC9mKFD7TCBJvdSTohNERyEB6oO7LGFgmcProFrNAyVekNCBmsvmnphx36a+3JVX6JlXWfjvZezH4vJ3CQKXqW/xj9IwGNxLG31zy5uwg+LdfyAPlK8YiuDdiltjDGrvYqv0m/C25Mm4uV86WHrbtG7xUe9gmL4MD7jtiOs33rHH6CuwLt200arJiDiFlWQXhWoO/Cr4Jzt6z/F4U761SUpDror1R/ABVtr8ow3XscSZKXY3slfHO/auUHhysqOQIzMria7MccvtjYSThgoWOIPhIzxllewI/YqFZF3sydjj4JrG/h+3nAwhMo+2Zu1OZYHnvINJNUKloKVFYaf3VB8aXmAwqE7A+TeZ9pCA/eV11azcoJKZSvYeVHbA/qd5k7XnDF/t34SZbiLP/jRNJFHpwDKM+0cTY4ouxFz3FaPnkdb9Qu1bhOvvaa7pNO3M6xWkKz0hNfRQuPWOIuhHbcpXQZ2memKBzWTGCrVCTbfHJxzZLVzduQDPpGXOiHYj7SdY2dafXuhSVjIv+1s6i795jLyIk90DWauZucLNXx2F4P3P+L7o4AtLsPVr8uRTzuCXk+OVZ13EPw8HlbLVBczwGMZ7xA6ZtiaXyh+hUYR1k2/yV2cvM4bPl1lHnLaZk5RhurKygEz6/V1QmxHqfy+eM9FAsdtX+XPQUUwD7g3zG7MZzePGn1v4magSLM4Rfnss+KbeJ3WpDO0wv0UzL33unZ2ummsCUS8Jm6fpXiEc84jXKaYCQbOJm15H8AHVFZ/ddc/yTWlg5kpEHGry0iz5zaMsMzcOip5LTMmtipJz9tV5YPymIi5m/qdVMri/ZvTZW6syNu/8b2Fj2Vn8Z1hCrL61PsTwYWqiw/THCnS5m8uQWzmLT5wsxCbxcnGxQzZdFTsPXzk/gAAAP//vcTp+QAAAAZJREFUAwD7qwVJQF9FOAAAAABJRU5ErkJggg=="
      alt="X"
      width={20}
      height={20}
      style={{ filter: style?.stroke ? `brightness(0) saturate(100%) invert(58%) sepia(85%) saturate(6472%) hue-rotate(261deg) brightness(101%) contrast(101%)` : 'none' }}
    />
  </div>
);

export default function ContactPage() {
  const { isDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://vulhunt-project.vercel.app';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' });
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          company: '',
          message: '',
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/vulhunt-cybercosmous/', label: 'LinkedIn' },
    { icon: XIcon, href: 'https://x.com/vulhunt', label: 'X', isCustom: true },
    { icon: Facebook, href: 'https://www.facebook.com/Vulhunt', label: 'Facebook' },
  ];

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
                        <MessageCircle className="w-4 h-4" style={{ stroke: '#cc43fd' }} />
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

                    {/* Status Message */}
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl"
                        style={{
                          background: submitStatus.type === 'success' 
                            ? 'rgba(34, 197, 94, 0.1)' 
                            : 'rgba(239, 68, 68, 0.1)',
                          border: `1px solid ${submitStatus.type === 'success' ? '#22c55e' : '#ef4444'}`,
                        }}
                      >
                        <p style={{ color: submitStatus.type === 'success' ? '#22c55e' : '#ef4444' }}>
                          {submitStatus.message}
                        </p>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-500 shadow-xl"
                        style={{
                          background: isSubmitting ? '#9ca3af' : '#cc43fd',
                          color: 'white',
                          border: 'none',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.background = '#d654ff';
                            e.currentTarget.style.boxShadow = '0 0 40px rgba(204, 67, 253, 0.6)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.background = '#cc43fd';
                            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                          }
                        }}
                      >
                        <Send className="w-5 h-5 mr-2 inline-block" />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
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
                      <p className="text-sm leading-relaxed transition-colors duration-500 mb-6" style={{ color: isDarkMode ? '#9ca3af' : '#5a5a7a' }}>
                        Our team typically responds within 24-48 hours during business days.
                      </p>

                      {/* Social Links */}
                      <div>
                        <p 
                          className="text-2xl sm:text-3xl font-bold mb-4"
                          style={{
                            color: '#cc43fd',
                            fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                          }}
                        >
                          Follow Us
                        </p>
                        <div className="space-y-4">
                          {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                              <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300"
                                style={{
                                  background: 'rgba(255, 255, 255, 0.02)',
                                  border: '1px solid rgba(204, 67, 253, 0.1)',
                                }}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.3 }}
                              >
                                <motion.div
                                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                                  style={{
                                    background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.08)',
                                    border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.3 : 0.4})`,
                                  }}
                                  whileHover={{ rotate: 5 }}
                                >
                                  {social.isCustom ? (
                                    <Icon style={{ stroke: '#cc43fd' }} />
                                  ) : (
                                    <Icon className="w-6 h-6" style={{ stroke: '#cc43fd' }} />
                                  )}
                                </motion.div>
                                <div className="flex-1">
                                  <p className="text-sm mb-1 font-bold transition-colors duration-500" style={{ color: isDarkMode ? '#9ca3af' : '#5a5a7a' }}>{social.label}</p>
                                  <p 
                                    className="text-base transition-colors duration-500 break-all"
                                    style={{ color: isDarkMode ? 'white' : '#1a1a2e' }}
                                  >
                                    {social.href.replace('https://', '').replace('www.', '')}
                                  </p>
                                </div>
                              </motion.a>
                            );
                          })}
                        </div>
                      </div>
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

      {/* Footer */}
      <Footer />

    </div>
  );
}


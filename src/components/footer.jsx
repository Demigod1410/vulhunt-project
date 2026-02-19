'use client';

import { motion } from 'framer-motion';
import { Mail, Globe, MapPin, ArrowRight, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { isDarkMode } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    company: '',
    message: '',
  });

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
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          company: '',
          message: '',
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message.' });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fixed particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: '8%', top: '20%' },
    { left: '22%', top: '45%' },
    { left: '38%', top: '25%' },
    { left: '55%', top: '60%' },
    { left: '72%', top: '35%' },
    { left: '88%', top: '55%' },
    { left: '15%', top: '75%' },
    { left: '45%', top: '80%' },
    { left: '68%', top: '15%' },
    { left: '82%', top: '70%' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Vulnerability Disclosure', href: '/services' },
    { name: 'CISO-as-a-Service', href: '/services' },
    { name: 'SOC Automation', href: '/services' },
    { name: 'Compliance Consulting', href: '/services' },
    { name: 'Security Assessment', href: '/services' },
    { name: 'Tool Consulting', href: '/services' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/vulhunt-cybercosmous/', label: 'LinkedIn' },
    { icon: XIcon, href: 'https://x.com/vulhunt', label: 'X', isCustom: true },
    { icon: Facebook, href: 'https://www.facebook.com/Vulhunt', label: 'Facebook' },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className="relative overflow-hidden px-3 sm:px-4 md:px-6 lg:px-8 pt-16 sm:pt-20 pb-6 sm:pb-8" style={{ backgroundColor: isDarkMode ? '#1a0033' : '#f8f9ff' }}>
      {/* Static Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Gradient Glow */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #cc43fd 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(204, 67, 253, 0.1) 0%, transparent 70%)',
            opacity: isDarkMode ? 0.13 : 0.23,
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, #8722ec 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(135, 34, 236, 0.12) 0%, transparent 70%)',
            opacity: isDarkMode ? 0.11 : 0.25,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Left Side - Info Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16">
            {/* Company Info */}
            <div className="flex flex-col w-full">
            <h3
              className="text-2xl font-bold mb-6"
              style={{
                color: '#cc43fd',
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
              }}
            >
              Vulhunt
            </h3>
            <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base" style={{ color: isDarkMode ? '#d1d5db' : '#1a1a2e' }}>
              Next-Generation Cybersecurity platform powered by AI-driven technology and crowdsourced security research.
            </p>

            {/* Address */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3 group">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" style={{ stroke: '#cc43fd' }} />
                <div>
                  <p className="text-sm sm:text-base font-semibold mb-1" style={{ color: isDarkMode ? '#d1d5db' : '#1a1a2e' }}>Address</p>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed" style={{ color: isDarkMode ? '#d1d5db' : '#1a1a2e' }}>
                    Vulhunt,<br />
                    C/O SASOSS, <br /> Workflow Ranka Junction, 3rd Floor,
                    <br /> Near Benniganahalli Metro Station,<br />OMR Road,
                    K.R. Puram Hobli, <br /> Bengaluru – 560016, India
                  </p>
                </div>
              </div>
              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3 pt-2">
                <a
                  href="mailto:business@vulhunt.in"
                  className="flex items-center gap-2 sm:gap-3"
                  style={{ color: isDarkMode ? '#d1d5db' : '#1a1a2e' }}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" style={{ stroke: '#cc43fd' }} />
                  <span className="text-sm sm:text-base">business@vulhunt.in</span>
                </a>
                <a
                  href="https://www.vulhunt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3"
                  style={{ color: isDarkMode ? '#d1d5db' : '#1a1a2e' }}
                >
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" style={{ stroke: '#cc43fd' }} />
                  <span className="text-sm sm:text-base">www.vulhunt.com</span>
                </a>
              </div>
            </div>
            </div>

            {/* Quick Links & Services Combined */}
            <div className="flex flex-col space-y-6 sm:space-y-8 w-full md:pl-12">
              {/* Quick Links */}
              <div>
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{
                    color: '#cc43fd',
                    fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                  }}
                >
                  Quick Links
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm sm:text-base flex items-center gap-2"
                        style={{ color: isDarkMode ? '#d1d5db' : '#1a1a2e' }}
                      >
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{
                    color: '#cc43fd',
                    fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                  }}
                >
                  Our Services
                </h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a
                        href={service.href}
                        className="text-sm sm:text-base flex items-center gap-2"
                        style={{ color: isDarkMode ? '#d1d5db' : '#1a1a2e' }}
                      >
                        <span>{service.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex flex-col w-full">
            <h3
              className="text-2xl font-bold mb-6"
              style={{
                color: '#cc43fd',
                fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
              }}
            >
              Contact Form
            </h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:space-y-4 w-full flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none"
                    style={{
                      background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.05)',
                      border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                      color: isDarkMode ? '#d1d5db' : '#1a1a2e',
                    }}
                  />
                </div>

                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none"
                    style={{
                      background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.05)',
                      border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                      color: isDarkMode ? '#d1d5db' : '#1a1a2e',
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full">
                <div className="w-full">
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    placeholder="Contact Number"
                    className="w-full px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none"
                    style={{
                      background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.05)',
                      border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                      color: isDarkMode ? '#d1d5db' : '#1a1a2e',
                    }}
                  />
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    className="w-full px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none"
                    style={{
                      background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.05)',
                      border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                      color: isDarkMode ? '#d1d5db' : '#1a1a2e',
                    }}
                  />
                </div>
              </div>

              <div className="w-full flex-1">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your inquiry or message"
                  rows={5}
                  className="w-full h-full px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none resize-none"
                  style={{
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(204, 67, 253, 0.05)',
                    border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                    color: isDarkMode ? '#d1d5db' : '#1a1a2e',
                  }}
                />
              </div>

              {/* Status Message */}
              {submitStatus && (
                <div
                  className="p-3 rounded-lg text-xs"
                  style={{
                    background: submitStatus.type === 'success' 
                      ? 'rgba(34, 197, 94, 0.1)' 
                      : 'rgba(239, 68, 68, 0.1)',
                    border: `1px solid ${submitStatus.type === 'success' ? '#22c55e' : '#ef4444'}`,
                    color: submitStatus.type === 'success' ? '#22c55e' : '#ef4444',
                  }}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 rounded-lg text-sm font-semibold"
                style={{
                  background: isSubmitting ? '#9ca3af' : '#cc43fd',
                  color: 'white',
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{
            background: isDarkMode 
              ? 'linear-gradient(90deg, transparent, rgba(204, 67, 253, 0.3), rgba(135, 34, 236, 0.3), rgba(214, 84, 255, 0.3), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(204, 67, 253, 0.4), rgba(135, 34, 236, 0.4), rgba(214, 84, 255, 0.4), transparent)',
          }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm" style={{ color: isDarkMode ? '#6b7280' : '#7a7a9a' }}>
              © All rights reserved by Mahaasenaya Cybertech Venture Pvt. Ltd.
            </p>
            <p className="text-sm" style={{ color: isDarkMode ? '#6b7280' : '#7a7a9a', paddingLeft: '0.875rem' }}>
              (A group company of{' '}
              <a
                href="https://www.sasoss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm"
                style={{ color: isDarkMode ? '#6b7280' : '#7a7a9a' }}
              >
                SASOSS)
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(204, 67, 253, 0.05)',
                    border: `1px solid rgba(204, 67, 253, ${isDarkMode ? 0.2 : 0.3})`,
                  }}
                >
                  {social.isCustom ? (
                    <Icon style={{ stroke: '#cc43fd' }} />
                  ) : (
                    <Icon className="w-5 h-5" style={{ stroke: '#cc43fd' }} />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

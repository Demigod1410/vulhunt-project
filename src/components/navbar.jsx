'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const [mounted, setMounted] = useState(true); // Start mounted for faster render
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeHash, setActiveHash] = useState('');
  const { isDarkMode, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    
    // Set initial visibility based on device type
    const isMobile = window.innerWidth < 1024;
    if (isMobile && window.scrollY < 50) {
      setVisible(true); // Show navbar initially on mobile
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      
      setScrolled(currentScrollY > 20);
      
      if (isMobile) {
        // Mobile behavior: show initially, then hide/show based on scroll direction
        if (currentScrollY < 50) {
          // Always show at the very top
          setVisible(true);
        } else if (currentScrollY < lastScrollY) {
          // Show when scrolling up
          setVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Hide when scrolling down (only after scrolling past 100px)
          setVisible(false);
          setIsOpen(false);
        }
      } else {
        // Desktop behavior: show at top, hide when scrolling down
        if (currentScrollY < 10) {
          setVisible(true);
        } else if (currentScrollY < lastScrollY) {
          setVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setVisible(false);
          setIsOpen(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // Set initial hash
    setActiveHash(window.location.hash);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Us', href: '/aboutus/' },
    { name: 'Services', href: '/services/' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href.startsWith('/#')) {
      const hash = href.substring(1); // Remove the leading '/'
      return pathname === '/' && activeHash === hash;
    }
    // Handle both /contact and /contact/ for static sites
    const normalizedPathname = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
    const normalizedHref = href.endsWith('/') && href !== '/' ? href.slice(0, -1) : href;
    return normalizedPathname === normalizedHref;
  };

  return (
    <motion.nav
      className="fixed top-4 left-1/2 z-50 transition-all duration-500"
      style={{
        backgroundColor: isDarkMode 
          ? (scrolled ? 'rgba(135, 34, 236, 0.15)' : 'rgba(204, 67, 253, 0.1)')
          : (scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)'),
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: isDarkMode
          ? (scrolled ? '1px solid rgba(204, 67, 253, 0.3)' : '1px solid rgba(204, 67, 253, 0.2)')
          : (scrolled ? '1px solid rgba(204, 67, 253, 0.3)' : '1px solid rgba(204, 67, 253, 0.2)'),
        borderRadius: isOpen ? '24px' : '9999px',
        boxShadow: isDarkMode
          ? (scrolled ? '0 8px 32px rgba(204, 67, 253, 0.3)' : '0 4px 24px rgba(204, 67, 253, 0.2)')
          : (scrolled ? '0 8px 24px rgba(204, 67, 253, 0.15)' : '0 4px 16px rgba(204, 67, 253, 0.1)'),
        willChange: 'transform',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateX(-50%) translateZ(0)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        maxWidth: '1200px',
        width: 'calc(100% - 16px)',
      }}
      initial={{ y: -100, x: '-50%' }}
      animate={{ y: visible ? 0 : -100, x: '-50%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
              src={isDarkMode ? '/v2.png' : '/v1.png'}
              alt="Vulhunt"
              width={120}
              height={60}
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
              priority
            />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={link.href}>
                  <motion.div
                    className="relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-500 cursor-pointer"
                    style={{
                      color: isDarkMode 
                        ? (isActive(link.href) ? 'white' : '#d1d5db')
                        : (isActive(link.href) ? '#8722ec' : '#5a5a7a'),
                      background: isDarkMode
                        ? (isActive(link.href) 
                          ? 'linear-gradient(135deg, rgba(204, 67, 253, 0.25), rgba(135, 34, 236, 0.25))' 
                          : 'rgba(255, 255, 255, 0.05)')
                        : (isActive(link.href)
                          ? 'linear-gradient(135deg, rgba(204, 67, 253, 0.15), rgba(135, 34, 236, 0.1))'
                          : 'rgba(204, 67, 253, 0.05)'),
                      border: '1px solid',
                      borderColor: isDarkMode
                        ? (isActive(link.href) ? 'rgba(204, 67, 253, 0.5)' : 'rgba(255, 255, 255, 0.1)')
                        : (isActive(link.href) ? 'rgba(204, 67, 253, 0.4)' : 'rgba(204, 67, 253, 0.15)'),
                      boxShadow: isActive(link.href) 
                        ? (isDarkMode ? '0 0 20px rgba(204, 67, 253, 0.4)' : '0 4px 12px rgba(204, 67, 253, 0.2)')
                        : 'none',
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(204, 67, 253, 0.6)';
                      e.currentTarget.style.background = isDarkMode
                        ? 'linear-gradient(135deg, rgba(204, 67, 253, 0.2), rgba(135, 34, 236, 0.2))'
                        : 'linear-gradient(135deg, rgba(204, 67, 253, 0.2), rgba(135, 34, 236, 0.15))';
                      e.currentTarget.style.boxShadow = isDarkMode
                        ? '0 4px 20px rgba(204, 67, 253, 0.35)'
                        : '0 6px 16px rgba(204, 67, 253, 0.25)';
                      e.currentTarget.style.color = isDarkMode ? 'white' : '#8722ec';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(link.href)) {
                        e.currentTarget.style.borderColor = isDarkMode
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(204, 67, 253, 0.15)';
                        e.currentTarget.style.background = isDarkMode
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(204, 67, 253, 0.05)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.color = isDarkMode ? '#d1d5db' : '#5a5a7a';
                      } else {
                        e.currentTarget.style.borderColor = isDarkMode
                          ? 'rgba(204, 67, 253, 0.5)'
                          : 'rgba(204, 67, 253, 0.4)';
                        e.currentTarget.style.background = isDarkMode
                          ? 'linear-gradient(135deg, rgba(204, 67, 253, 0.25), rgba(135, 34, 236, 0.25))'
                          : 'linear-gradient(135deg, rgba(204, 67, 253, 0.15), rgba(135, 34, 236, 0.1))';
                        e.currentTarget.style.boxShadow = isDarkMode
                          ? '0 0 20px rgba(204, 67, 253, 0.4)'
                          : '0 4px 12px rgba(204, 67, 253, 0.2)';
                        e.currentTarget.style.color = isDarkMode ? 'white' : '#8722ec';
                      }
                    }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
            
            {/* Theme Toggle Button */}
            <motion.button
              className="p-2.5 rounded-full ml-1 transition-all duration-500"
              style={{
                background: isDarkMode 
                  ? 'rgba(255, 255, 255, 0.05)' 
                  : 'rgba(204, 67, 253, 0.08)',
                border: '1px solid rgba(204, 67, 253, 0.3)',
              }}
              onClick={toggleTheme}
              whileHover={{ 
                scale: 1.1,
                rotate: 180,
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(204, 67, 253, 0.2), rgba(135, 34, 236, 0.2))';
                e.currentTarget.style.borderColor = 'rgba(204, 67, 253, 0.5)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(204, 67, 253, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isDarkMode 
                  ? 'rgba(255, 255, 255, 0.05)' 
                  : 'rgba(204, 67, 253, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(204, 67, 253, 0.3)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDarkMode ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" style={{ stroke: '#cc43fd' }} />
                ) : (
                  <Moon className="w-5 h-5" style={{ stroke: '#cc43fd' }} />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Theme Toggle Button - Mobile */}
            <motion.button
              className="p-2 rounded-full flex-shrink-0 transition-all duration-500"
              style={{
                background: isDarkMode 
                  ? 'rgba(255, 255, 255, 0.05)' 
                  : 'rgba(204, 67, 253, 0.08)',
                border: '1px solid rgba(204, 67, 253, 0.3)',
              }}
              onClick={toggleTheme}
              whileHover={{ 
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDarkMode ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5" style={{ stroke: '#cc43fd' }} />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5" style={{ stroke: '#cc43fd' }} />
                )}
              </motion.div>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="p-2 sm:p-2.5 rounded-full flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(204, 67, 253, 0.2), rgba(135, 34, 236, 0.2))',
                border: '1px solid rgba(204, 67, 253, 0.4)',
                boxShadow: '0 4px 15px rgba(204, 67, 253, 0.3)',
              }}
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 4px 20px rgba(204, 67, 253, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" style={{ stroke: '#cc43fd' }} />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" style={{ stroke: '#cc43fd' }} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mounted && (
          <motion.div
            className="lg:hidden overflow-hidden"
            initial={false}
            animate={{
              height: isOpen ? 'auto' : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="py-4 px-1 sm:py-6 sm:px-2">
              {navLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                  <motion.div
                    className="block px-6 py-4 rounded-3xl text-base font-semibold transition-all duration-500 cursor-pointer mb-3"
                    style={{
                      color: isDarkMode 
                        ? (isActive(link.href) ? 'white' : '#d1d5db')
                        : (isActive(link.href) ? '#8722ec' : '#5a5a7a'),
                      background: isDarkMode
                        ? (isActive(link.href) 
                          ? 'linear-gradient(135deg, rgba(204, 67, 253, 0.25), rgba(135, 34, 236, 0.25))' 
                          : 'rgba(255, 255, 255, 0.05)')
                        : (isActive(link.href)
                          ? 'linear-gradient(135deg, rgba(204, 67, 253, 0.15), rgba(135, 34, 236, 0.1))'
                          : 'rgba(204, 67, 253, 0.05)'),
                      border: '1px solid',
                      borderColor: isDarkMode
                        ? (isActive(link.href) ? 'rgba(204, 67, 253, 0.5)' : 'rgba(255, 255, 255, 0.1)')
                        : (isActive(link.href) ? 'rgba(204, 67, 253, 0.4)' : 'rgba(204, 67, 253, 0.15)'),
                      boxShadow: isActive(link.href) 
                        ? (isDarkMode ? '0 4px 15px rgba(204, 67, 253, 0.3)' : '0 4px 12px rgba(204, 67, 253, 0.2)')
                        : 'none',
                    }}
                    whileHover={{
                      scale: 1.02,
                      x: 5,
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(204, 67, 253, 0.6)';
                      e.currentTarget.style.background = isDarkMode
                        ? 'linear-gradient(135deg, rgba(204, 67, 253, 0.2), rgba(135, 34, 236, 0.2))'
                        : 'linear-gradient(135deg, rgba(204, 67, 253, 0.2), rgba(135, 34, 236, 0.15))';
                      e.currentTarget.style.boxShadow = isDarkMode
                        ? '0 4px 20px rgba(204, 67, 253, 0.35)'
                        : '0 6px 16px rgba(204, 67, 253, 0.25)';
                      e.currentTarget.style.color = isDarkMode ? 'white' : '#8722ec';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(link.href)) {
                        e.currentTarget.style.borderColor = isDarkMode
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(204, 67, 253, 0.15)';
                        e.currentTarget.style.background = isDarkMode
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(204, 67, 253, 0.05)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.color = isDarkMode ? '#d1d5db' : '#5a5a7a';
                      } else {
                        e.currentTarget.style.borderColor = isDarkMode
                          ? 'rgba(204, 67, 253, 0.5)'
                          : 'rgba(204, 67, 253, 0.4)';
                        e.currentTarget.style.background = isDarkMode
                          ? 'linear-gradient(135deg, rgba(204, 67, 253, 0.25), rgba(135, 34, 236, 0.25))'
                          : 'linear-gradient(135deg, rgba(204, 67, 253, 0.15), rgba(135, 34, 236, 0.1))';
                        e.currentTarget.style.boxShadow = isDarkMode
                          ? '0 4px 15px rgba(204, 67, 253, 0.3)'
                          : '0 4px 12px rgba(204, 67, 253, 0.2)';
                        e.currentTarget.style.color = isDarkMode ? 'white' : '#8722ec';
                      }
                    }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>

    </motion.nav>
  );
};

export default Navbar;

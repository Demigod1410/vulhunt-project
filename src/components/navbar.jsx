'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeHash, setActiveHash] = useState('');
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
    { name: 'About Us', href: '/aboutus' },
    { name: 'Services', href: '/services' },
    { name: 'Why Us', href: '/#whyus' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href.startsWith('/#')) {
      const hash = href.substring(1); // Remove the leading '/'
      return pathname === '/' && activeHash === hash;
    }
    return pathname === href;
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(0, 0, 25, 0.95)' : 'rgba(0, 0, 25, 0.7)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid rgba(121, 157, 254, 0.1)' : '1px solid transparent',
        willChange: 'transform',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
      }}
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h1
                className="text-2xl sm:text-3xl font-bold"
                style={{
                  color: '#799dfe',
                  fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
                }}
              >
                Vulhunt
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={link.href}>
                  <motion.div
                    className="relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer backdrop-blur-sm"
                    style={{
                      color: isActive(link.href) ? 'white' : '#d1d5db',
                      background: isActive(link.href) 
                        ? 'linear-gradient(135deg, rgba(121, 157, 254, 0.15), rgba(135, 34, 236, 0.15))' 
                        : 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid',
                      borderColor: isActive(link.href) ? 'rgba(121, 157, 254, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                      boxShadow: isActive(link.href) ? '0 0 20px rgba(121, 157, 254, 0.2)' : 'none',
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(121, 157, 254, 0.4)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(121, 157, 254, 0.12), rgba(135, 34, 236, 0.12))';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(121, 157, 254, 0.25)';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(link.href)) {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.color = '#d1d5db';
                      } else {
                        e.currentTarget.style.borderColor = 'rgba(121, 157, 254, 0.3)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(121, 157, 254, 0.15), rgba(135, 34, 236, 0.15))';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(121, 157, 254, 0.2)';
                        e.currentTarget.style.color = 'white';
                      }
                    }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-3 rounded-full backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(121, 157, 254, 0.12), rgba(135, 34, 236, 0.12))',
              border: '1px solid rgba(121, 157, 254, 0.3)',
              boxShadow: '0 4px 15px rgba(121, 157, 254, 0.2)',
            }}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 4px 20px rgba(121, 157, 254, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-6 h-6" style={{ stroke: 'white' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ stroke: 'white' }} />
            )}
          </motion.button>
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
            <div className="py-6 px-2">
              {navLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                  <motion.div
                    className="block px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 cursor-pointer backdrop-blur-sm mb-4"
                    style={{
                      color: isActive(link.href) ? 'white' : '#d1d5db',
                      background: isActive(link.href) 
                        ? 'linear-gradient(135deg, rgba(121, 157, 254, 0.15), rgba(135, 34, 236, 0.15))' 
                        : 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid',
                      borderColor: isActive(link.href) ? 'rgba(121, 157, 254, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                      boxShadow: isActive(link.href) ? '0 4px 15px rgba(121, 157, 254, 0.2)' : 'none',
                    }}
                    whileHover={{
                      scale: 1.02,
                      x: 5,
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(121, 157, 254, 0.4)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(121, 157, 254, 0.12), rgba(135, 34, 236, 0.12))';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(121, 157, 254, 0.25)';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(link.href)) {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.color = '#d1d5db';
                      } else {
                        e.currentTarget.style.borderColor = 'rgba(121, 157, 254, 0.3)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(121, 157, 254, 0.15), rgba(135, 34, 236, 0.15))';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(121, 157, 254, 0.2)';
                        e.currentTarget.style.color = 'white';
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

      {/* Bottom Glow Effect */}
      {scrolled && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(121, 157, 254, 0.3), rgba(135, 34, 236, 0.3), rgba(204, 67, 253, 0.3), transparent)',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.nav>
  );
};

export default Navbar;

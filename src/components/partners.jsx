'use client';

import { motion } from 'framer-motion';
import LogoLoop from './LogoLoop';
import { useTheme } from '@/contexts/ThemeContext';

const Partners = () => {
  const { isDarkMode } = useTheme();

  const partnerLogos = [
    { src: "/coditing.png", alt: "Coditing", title: "Coditing" },
    { src: "/CyberLogo.png", alt: "Cyber Cosmous", title: "Cyber Cosmous" },
    { src: "/HTS.png", alt: "HTS Consulting", title: "HTS Consulting" },
    { src: "/nawom.png", alt: "NAWOM", title: "NAWOM" },
     { src: "/s2.png", alt: "SASOSS", title: "SASOSS", },
    { src: "/neo.png", alt: "NeoCISO", title: "NeoCISO" },
  ];

  return (
    <section 
      className="relative py-4 sm:py-6 px-3 sm:px-4 md:px-6 lg:px-8 transition-colors duration-500" 
      style={{ backgroundColor: isDarkMode ? '#1a0033' : '#f8f9ff' }}
    >
      <div className="w-full">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 transition-colors duration-500"
            style={{
              fontFamily: 'var(--font-sans), system-ui, -apple-system, sans-serif',
              letterSpacing: '-0.02em',
              color: isDarkMode ? 'white' : '#1a1a2e',
            }}
          >
            Our{' '}
            <span style={{ color: '#cc43fd' }}>
              Partners
            </span>
          </h2>
          <p 
            className="text-base sm:text-lg transition-colors duration-500"
            style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}
          >
            Trusted by industry leaders worldwide
          </p>
        </div>

        <div className="relative flex justify-center items-center w-full py-8 sm:py-10 md:py-12" style={{ willChange: 'transform', backgroundColor: '#f8f6f0' }}>
          <LogoLoop
            logos={partnerLogos}
            speed={150}
            direction="left"
            logoHeight={120}
            gap={120}
            pauseOnHover={false}
            scaleOnHover={false}
            fadeOut={false}
            ariaLabel="Partner companies"
          />
        </div>

        {/* Bottom Decorative Line */}
        <div
          className="mt-12 sm:mt-14 md:mt-16 mx-auto max-w-md h-1 rounded-full transition-all duration-500"
          style={{
            background: isDarkMode 
              ? 'linear-gradient(90deg, transparent, #cc43fd, #8722ec, #d654ff, transparent)' 
              : 'linear-gradient(90deg, transparent, #cc43fd, #8722ec, #d654ff, transparent)',
            opacity: isDarkMode ? 0.5 : 0.6,
          }}
        />
        
      </div>
    </section>
  );
};

export default Partners;

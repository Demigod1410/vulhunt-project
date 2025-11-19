'use client';

import LogoLoop from './LogoLoop';
import { useTheme } from '@/contexts/ThemeContext';

const Partners = () => {
  const { isDarkMode } = useTheme();

  const partnerLogos = [
    { src: "/coditing.png", alt: "Coditing", title: "Coditing" },
    { src: "/CyberLogo.png", alt: "Cyber Cosmous", title: "Cyber Cosmous" },
    { src: "/HTS.png", alt: "HTS Consulting", title: "HTS Consulting" },
    { src: "/nawom.png", alt: "NAWOM", title: "NAWOM" },
    { src: "/neo.png", alt: "NeoCISO", title: "NeoCISO" },
    { src: "/sasoss1.png", alt: "SASOSS", title: "SASOSS" },
    { src: "/vulhunt.png", alt: "Vulhunt", title: "Vulhunt" },
  ];

  return (
    <section 
      className="relative py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500" 
      style={{ backgroundColor: isDarkMode ? '#1a0033' : '#f8f9ff' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500"
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
            className="text-lg transition-colors duration-500"
            style={{ color: isDarkMode ? '#d1d5db' : '#4a4a6a' }}
          >
            Trusted by industry leaders worldwide
          </p>
        </div>

        {/* Logo Loop */}
        <div className="relative">
          <LogoLoop
            logos={partnerLogos}
            speed={120}
            direction="left"
            logoHeight={120}
            gap={120}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor={isDarkMode ? '#1a0033' : '#f8f9ff'}
            ariaLabel="Partner companies"
          />
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none transition-all duration-500"
        style={{
          background: isDarkMode 
            ? 'linear-gradient(to bottom, transparent, #1a0033)'
            : 'linear-gradient(to bottom, transparent, #f8f9ff)',
        }}
      />
    </section>
  );
};

export default Partners;

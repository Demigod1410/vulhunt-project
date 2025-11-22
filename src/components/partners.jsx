'use client';

import LogoLoop from './LogoLoop';
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';

const Partners = () => {
  const { isDarkMode } = useTheme();
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    // Simple performance check
    const start = performance.now();
    setTimeout(() => {
      const duration = performance.now() - start;
      setIsLowEnd(duration > 50); // If setTimeout takes >50ms, likely low-end
    }, 0);
  }, []);

  const partnerLogos = [
    { src: "/coditing.png", alt: "Coditing", title: "Coditing" },
    { src: "/CyberLogo.png", alt: "Cyber Cosmous", title: "Cyber Cosmous" },
    { src: "/HTS.png", alt: "HTS Consulting", title: "HTS Consulting" },
    { src: "/nawom.png", alt: "NAWOM", title: "NAWOM" },
     { src: "/sasoss1.png", alt: "SASOSS", title: "SASOSS", },
    { src: "/neo.png", alt: "NeoCISO", title: "NeoCISO" },
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

        <div className="relative flex justify-center" style={{ willChange: 'transform', backgroundColor: '#f5f5f7' }}>
          <LogoLoop
            logos={partnerLogos}
            speed={isLowEnd ? 60 : 120} // Slower on low-end
            direction="left"
            logoHeight={isLowEnd ? 80 : 120} // Smaller logos on low-end
            gap={isLowEnd ? 80 : 120} // Smaller gaps on low-end
            hoverSpeed={0}
            scaleOnHover={!isLowEnd} // Disable hover effects on low-end
            fadeOut={false} // Disable fade effects
            fadeOutColor={isDarkMode ? '#1a0033' : '#f8f9ff'}
            logoClassName={isDarkMode ? 'bg-white/20 p-1 rounded' : ''}
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

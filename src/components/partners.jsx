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
     { src: "/s2.png", alt: "SASOSS", title: "SASOSS", },
    { src: "/neo.png", alt: "NeoCISO", title: "NeoCISO" },
  ];

  return (
    <section 
      className="relative py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-500" 
      style={{ backgroundColor: isDarkMode ? '#1a0033' : '#f8f9ff' }}
    >
      <div className="w-full">
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

        <div className="relative flex justify-center w-full" style={{ willChange: 'transform', backgroundColor: '#f8f6f0' }}>
          <LogoLoop
            logos={partnerLogos}
            speed={isLowEnd ? 60 : 120} // Slower on low-end
            direction="left"
            logoHeight={isLowEnd ? 80 : 120} // Smaller logos on low-end
            gap={isLowEnd ? 80 : 120} // Smaller gaps on low-end
            hoverSpeed={0}
            scaleOnHover={!isLowEnd} // Disable hover effects on low-end
            fadeOut={false} // Disable fade effects
            logoClassName={isDarkMode ? 'bg-white/20 p-1 rounded' : ''}
            ariaLabel="Partner companies"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;

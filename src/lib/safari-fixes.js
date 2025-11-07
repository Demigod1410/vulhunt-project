// Safari compatibility fixes for all versions
export const applySafariFixes = () => {
  if (typeof window === 'undefined') return;

  // Detect Safari browser
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  
  if (isSafari) {
    // Add Safari class to body for CSS targeting
    document.body.classList.add('is-safari');
    
    // Get Safari version
    const safariVersion = navigator.userAgent.match(/Version\/(\d+)/)?.[1];
    if (safariVersion) {
      document.body.classList.add(`safari-${safariVersion}`);
    }
    
    // Fix for older Safari versions that don't support backdrop-filter
    if (!CSS.supports('backdrop-filter', 'blur(10px)') && !CSS.supports('-webkit-backdrop-filter', 'blur(10px)')) {
      const style = document.createElement('style');
      style.textContent = `
        .backdrop-blur-sm,
        .backdrop-blur,
        .backdrop-blur-md,
        .backdrop-blur-lg {
          background-color: rgba(0, 0, 25, 0.98) !important;
        }
      `;
      document.head.appendChild(style);
    }
    
    // Fix for Safari iOS viewport height issues
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
    
    // Force repaint on scroll for better performance
    let ticking = false;
    const forceRepaint = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Trigger repaint
          document.body.style.transform = 'translateZ(0)';
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', forceRepaint, { passive: true });
    
    // Fix for Safari gradient text rendering issues
    const fixGradientText = () => {
      const gradientTexts = document.querySelectorAll('[style*="background-clip: text"]');
      gradientTexts.forEach((el) => {
        // Force Safari to re-render gradient text
        el.style.webkitBackgroundClip = 'text';
        el.style.webkitTextFillColor = 'transparent';
      });
    };
    
    // Run fixes after DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fixGradientText);
    } else {
      fixGradientText();
    }
    
    // Re-apply fixes after route changes (for Next.js)
    const observer = new MutationObserver(fixGradientText);
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Fix for Safari iOS smooth scroll issues
    if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
      document.documentElement.style.webkitOverflowScrolling = 'touch';
      
      // Prevent elastic scrolling issues
      document.body.addEventListener('touchmove', (e) => {
        if (e.target === document.body) {
          e.preventDefault();
        }
      }, { passive: false });
    }
    
    // Fix for Safari animation performance
    const style = document.createElement('style');
    style.textContent = `
      @media screen and (-webkit-min-device-pixel-ratio: 0) {
        * {
          -webkit-font-smoothing: antialiased;
          -webkit-backface-visibility: hidden;
          -webkit-transform: translateZ(0);
        }
        
        /* Fix for Safari gradient rendering */
        [style*="linear-gradient"] {
          -webkit-transform: translateZ(0);
          will-change: transform;
        }
        
        /* Fix for Safari backdrop-filter */
        [class*="backdrop-blur"] {
          -webkit-backdrop-filter: blur(10px);
          isolation: isolate;
        }
        
        /* Fix for Safari fixed positioning */
        .fixed {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }
    `;
    document.head.appendChild(style);
    
    console.log('Safari compatibility fixes applied');
  }
};

// Auto-apply fixes
if (typeof window !== 'undefined') {
  applySafariFixes();
}

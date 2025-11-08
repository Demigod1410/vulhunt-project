import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vulhunt - Cybersecurity Solutions",
  description: "Professional cybersecurity services including Bug Bounty, VAPT, Compliance, and SOC Automation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Safari-specific meta tags for better compatibility */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          {/* Load Safari compatibility fixes */}
          <Script
            id="safari-fixes"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                // Safari compatibility fixes
                (function() {
                  if (typeof window === 'undefined') return;
                  
                  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                  
                  if (isSafari) {
                    document.body.classList.add('is-safari');
                    
                    // Fix viewport height for Safari iOS
                    const setVH = () => {
                      const vh = window.innerHeight * 0.01;
                      document.documentElement.style.setProperty('--vh', vh + 'px');
                    };
                    setVH();
                    window.addEventListener('resize', setVH);
                    window.addEventListener('orientationchange', setVH);
                    
                    // Force hardware acceleration
                    document.body.style.transform = 'translateZ(0)';
                    
                    // Fix backdrop-filter fallback for older Safari
                    if (!CSS.supports('backdrop-filter', 'blur(10px)') && !CSS.supports('-webkit-backdrop-filter', 'blur(10px)')) {
                      const style = document.createElement('style');
                      style.textContent = '.backdrop-blur-sm, .backdrop-blur { background-color: rgba(0, 0, 25, 0.98) !important; }';
                      document.head.appendChild(style);
                    }
                  }
                })();
              `,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}

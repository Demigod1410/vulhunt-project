import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata = {
  title: "Vulhunt - Cybersecurity Solutions",
  description: "Professional cybersecurity services including Bug Bounty, VAPT, Compliance, and SOC Automation",
  keywords: "cybersecurity, bug bounty, vulnerability disclosure, VAPT, penetration testing, compliance, SOC automation, CISO as a service, security assessment, cyber security consulting",
  authors: [{ name: "Vulhunt" }],
  creator: "Vulhunt",
  publisher: "Vulhunt",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vulhunt-project.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Vulhunt - Next-Gen Cybersecurity Solutions",
    description: "We help organizations identify, prevent, and remediate vulnerabilities through our AI driven platform and a global security researcher community.",
    url: 'https://vulhunt-project.vercel.app',
    siteName: 'Vulhunt',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vulhunt Cybersecurity Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vulhunt - Next-Gen Cybersecurity Solutions",
    description: "Professional cybersecurity services powered by technology and crowdsourcing",
    creator: '@vulhunt',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a0033' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Safari-specific meta tags for better compatibility */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://vulhunt-project.vercel.app" />
        
        {/* Inline critical theme script to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.add(theme);
                document.documentElement.style.colorScheme = theme;
              } catch (e) {
                document.documentElement.classList.add('dark');
                document.documentElement.style.colorScheme = 'dark';
              }
            `,
          }}
        />
        
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Vulhunt',
              description: 'Professional cybersecurity services including Bug Bounty, VAPT, Compliance, and SOC Automation',
              url: 'https://vulhunt-project.vercel.app',
              logo: 'https://vulhunt-project.vercel.app/logo.png',
              sameAs: [
                'https://www.linkedin.com/company/vulhunt-cybercosmous/',
                'https://x.com/vulhunt',
                'https://www.facebook.com/Vulhunt',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'vulhunt1@gmail.com',
                availableLanguage: 'English',
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'Global',
              },
              service: [
                {
                  '@type': 'Service',
                  name: 'Bug Bounty Programs',
                  description: 'Crowdsourced vulnerability discovery through global security researchers',
                },
                {
                  '@type': 'Service',
                  name: 'Vulnerability Disclosure Programs',
                  description: 'Managed vulnerability disclosure and coordination',
                },
                {
                  '@type': 'Service',
                  name: 'CISO-as-a-Service',
                  description: 'Virtual Chief Information Security Officer services',
                },
                {
                  '@type': 'Service',
                  name: 'SOC Automation',
                  description: 'Security Operations Center automation and management',
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
          {/* Load Safari compatibility fixes */}
          <Script
            id="safari-fixes"
            strategy="lazyOnload"
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

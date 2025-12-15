import dynamic from 'next/dynamic';
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection";

// Lazy load below-the-fold components
const WhyUs = dynamic(() => import('@/components/whyus'), {
  loading: () => <div style={{ minHeight: '100vh' }} />,
});
const Services = dynamic(() => import('@/components/services'), {
  loading: () => <div style={{ minHeight: '100vh' }} />,
});
const Partners = dynamic(() => import('@/components/partners'), {
  loading: () => <div style={{ minHeight: '50vh' }} />,
});
const Footer = dynamic(() => import('@/components/footer'), {
  loading: () => <div style={{ minHeight: '50vh' }} />,
});


export default function Home() {
  return (
    <div>
      <Navbar />
      <main role="main">
        <HeroSection />
        <WhyUs />
        <Services />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

import HeroSection from "@/components/herosection";
import WhyUs from "@/components/whyus";
import Services from "@/components/services";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyUs />
      <Services />
      <Footer />
    </div>
  );
}

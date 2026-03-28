import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import NewsSection from "@/components/NewsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <NewsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;

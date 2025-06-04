import FloatingHeader from "@/components/FloatingHeader";
import HeroSection from "@/components/HeroSection";
import MotiveSection from "@/components/MotiveSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import AboutSection from "@/components/AboutSection";
import TechStackCarousel from "@/components/TechStackCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <FloatingHeader />
      <HeroSection />
      <MotiveSection />
      <ProjectShowcase />
      <AboutSection />
      <TechStackCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
}

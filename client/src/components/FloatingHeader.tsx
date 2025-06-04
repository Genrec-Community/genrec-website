import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useScrollToSection from "@/hooks/useScrollToSection";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Vision", href: "#motive" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

export default function FloatingHeader() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["hero", "motive", "projects", "about", "tech", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl"
    >
      <motion.nav
        animate={{
          backgroundColor: isScrolled 
            ? "rgba(0, 0, 0, 0.8)" 
            : "rgba(255, 255, 255, 0.05)",
        }}
        transition={{ duration: 0.3 }}
        className="glass-morphism rounded-2xl px-6 py-4 backdrop-blur-xl"
      >
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center space-x-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-black tracking-tight cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              GENREC
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="relative text-sm font-medium hover:text-white/80 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white nav-indicator"
                    animate={{
                      scaleX: activeSection === item.href.substring(1) ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>
    </motion.header>
  );
}

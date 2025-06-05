import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useScrollToSection from "@/hooks/useScrollToSection";

export default function FloatingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleNavClick = (section: string) => {
    setIsMenuOpen(false); // Close menu first
    setTimeout(() => {
      scrollToSection(section); // Scroll after menu closes
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full px-4 md:px-6 py-4 md:py-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            animate={{
              backgroundColor: isScrolled
                ? "rgba(0, 0, 0, 0.4)"
                : "rgba(255, 255, 255, 0.1)",
            }}
            transition={{ duration: 0.3 }}
            className="px-4 md:px-8 py-2 md:py-3 rounded-full border border-white/20"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-xl md:text-2xl font-black tracking-tight cursor-pointer text-white"
              onClick={() => handleNavClick("hero")}
            >
              GENREC
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-10 p-2"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </motion.button>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:block"
        >
          <motion.div
            animate={{
              backgroundColor: isScrolled
                ? "rgba(0, 0, 0, 0.4)"
                : "rgba(255, 255, 255, 0.1)",
            }}
            transition={{ duration: 0.3 }}
            className="px-8 py-3 rounded-full border border-white/20"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <div className="flex space-x-6">
              {["about", "projects", "techstack", "motive", "contact"].map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ scale: 1.05 }}
                  className="text-white cursor-pointer text-sm font-medium capitalize"
                  onClick={() => handleNavClick(section)}
                >
                  {section}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.nav>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg ${isMenuOpen ? 'block' : 'hidden'}`}
          style={{
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: 40,
          }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {["about", "projects", "techstack", "motive", "contact"].map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.05 }}
                className="text-white cursor-pointer text-xl font-medium capitalize px-8 py-4"
                onClick={() => handleNavClick(section)}
              >
                {section}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

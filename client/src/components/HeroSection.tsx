import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useScrollToSection from "@/hooks/useScrollToSection";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const createComet = () => {
      const container = containerRef.current;
      if (!container) return;

      const comet = document.createElement("div");
      comet.className = "comet";
      
      // Random position from sides
      const fromLeft = Math.random() > 0.5;
      const yPosition = Math.random() * window.innerHeight;
      
      comet.style.position = "absolute";
      comet.style.top = `${yPosition}px`;
      comet.style.left = fromLeft ? "-10px" : `${window.innerWidth + 10}px`;
      comet.style.zIndex = "1";
      
      container.appendChild(comet);

      // Animate comet across screen
      const animation = comet.animate([
        {
          transform: fromLeft 
            ? "translateX(-100px)" 
            : "translateX(100px)",
          opacity: "0"
        },
        {
          transform: fromLeft 
            ? `translateX(${window.innerWidth + 100}px)` 
            : `translateX(-${window.innerWidth + 100}px)`,
          opacity: "1"
        }
      ], {
        duration: 3000 + Math.random() * 2000,
        easing: "linear"
      });

      animation.onfinish = () => {
        comet.remove();
      };
    };

    // Create initial comets
    for (let i = 0; i < 3; i++) {
      setTimeout(createComet, i * 500);
    }

    // Continue creating comets
    const interval = setInterval(createComet, 2000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="text-8xl md:text-9xl font-black tracking-tighter mb-6 animate-glow"
        >
          GENREC
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting next-generation digital experiences with cutting-edge technology
        </motion.p>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300"
          >
            Explore Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("about")}
            className="px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection("motive")}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}

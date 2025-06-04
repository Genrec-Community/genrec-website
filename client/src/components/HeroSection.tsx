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
      comet.className = "comet-particle";
      
      // Random starting position from edge of screen
      const angle = Math.random() * 360;
      const radius = Math.max(window.innerWidth, window.innerHeight) * 0.7;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const startX = centerX + Math.cos(angle * Math.PI / 180) * radius;
      const startY = centerY + Math.sin(angle * Math.PI / 180) * radius;
      
      comet.style.position = "absolute";
      comet.style.left = `${startX}px`;
      comet.style.top = `${startY}px`;
      comet.style.width = "3px";
      comet.style.height = "3px";
      comet.style.background = "white";
      comet.style.borderRadius = "50%";
      comet.style.boxShadow = "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)";
      comet.style.zIndex = "5";
      
      // Create tail
      const tail = document.createElement("div");
      tail.style.position = "absolute";
      tail.style.right = "100%";
      tail.style.top = "50%";
      tail.style.width = "50px";
      tail.style.height = "1px";
      tail.style.background = "linear-gradient(90deg, transparent, rgba(255,255,255,0.6))";
      tail.style.transform = "translateY(-50%)";
      comet.appendChild(tail);
      
      container.appendChild(comet);

      // Animate comet toward center
      const animation = comet.animate([
        {
          left: `${startX}px`,
          top: `${startY}px`,
          opacity: "0"
        },
        {
          left: `${centerX}px`,
          top: `${centerY}px`,
          opacity: "1"
        }
      ], {
        duration: 2000 + Math.random() * 1500,
        easing: "ease-in"
      });

      animation.onfinish = () => {
        comet.remove();
      };
    };

    // Create initial comets
    for (let i = 0; i < 15; i++) {
      setTimeout(createComet, i * 200);
    }

    // Continue creating comets
    const interval = setInterval(createComet, 800);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900/30 via-black to-black" />
      
      {/* Static Light Rays */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => {
          const angle = (i * 360) / 50;
          const opacity = Math.random() * 0.3 + 0.1;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 w-0.5 bg-gradient-to-b from-white/40 to-transparent"
              style={{
                height: `${Math.random() * 400 + 200}px`,
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                transformOrigin: "center center",
                opacity: opacity,
              }}
            />
          );
        })}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="text-8xl md:text-9xl font-black tracking-tighter mb-6 text-white"
          style={{
            textShadow: "0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(255,255,255,0.3)",
            fontWeight: 900,
            letterSpacing: "-0.05em"
          }}
        >
          GENREC
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
          className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed text-gray-300"
        >
          Crafting next-generation digital experiences with cutting-edge technology
        </motion.p>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
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
        transition={{ delay: 2.5, duration: 1 }}
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

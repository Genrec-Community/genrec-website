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
      
      // Create comets from different directions but more structured
      const directions = [
        { x: -200, y: Math.random() * window.innerHeight },
        { x: window.innerWidth + 200, y: Math.random() * window.innerHeight },
        { x: Math.random() * window.innerWidth, y: -200 },
        { x: Math.random() * window.innerWidth, y: window.innerHeight + 200 }
      ];
      
      const direction = directions[Math.floor(Math.random() * directions.length)];
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      comet.style.position = "absolute";
      comet.style.left = `${direction.x}px`;
      comet.style.top = `${direction.y}px`;
      comet.style.width = "8px";
      comet.style.height = "8px";
      comet.style.background = "white";
      comet.style.borderRadius = "50%";
      comet.style.boxShadow = "0 0 30px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,0.7), 0 0 90px rgba(255,255,255,0.4)";
      comet.style.zIndex = "5";
      
      // Calculate angle for tail direction
      const angle = Math.atan2(centerY - direction.y, centerX - direction.x);
      
      // Create tail pointing in direction of movement
      const tail = document.createElement("div");
      tail.style.position = "absolute";
      tail.style.left = "50%";
      tail.style.top = "50%";
      tail.style.width = "120px";
      tail.style.height = "3px";
      tail.style.background = "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)";
      tail.style.transform = `translate(-50%, -50%) rotate(${angle + Math.PI}rad)`;
      tail.style.transformOrigin = "right center";
      comet.appendChild(tail);
      
      container.appendChild(comet);

      // Animate comet toward center with easing
      const animation = comet.animate([
        {
          left: `${direction.x}px`,
          top: `${direction.y}px`,
          opacity: "0",
          transform: "scale(0.5)"
        },
        {
          left: `${centerX + (Math.random() - 0.5) * 100}px`,
          top: `${centerY + (Math.random() - 0.5) * 100}px`,
          opacity: "1",
          transform: "scale(1)"
        },
        {
          left: `${centerX + (Math.random() - 0.5) * 50}px`,
          top: `${centerY + (Math.random() - 0.5) * 50}px`,
          opacity: "0",
          transform: "scale(0.3)"
        }
      ], {
        duration: 3000 + Math.random() * 2000,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      });

      animation.onfinish = () => {
        comet.remove();
      };
    };

    // Create initial comets
    for (let i = 0; i < 20; i++) {
      setTimeout(createComet, i * 300);
    }

    // Continue creating comets
    const interval = setInterval(createComet, 1200);
    
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
      {/* Clean Black Background */}
      <div className="absolute inset-0 bg-black" />

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
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className="text-2xl md:text-3xl font-medium mb-4 tracking-wide text-gray-300"
        >
          Build • Inspire • Innovate
        </motion.p>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.4 }}
          className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed text-gray-400"
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

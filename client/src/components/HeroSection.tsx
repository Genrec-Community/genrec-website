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
      const cometSize = 4 + Math.random() * 6;
      const speed = 1.5 + Math.random() * 2;
      
      // More varied starting positions for natural comet paths
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.max(window.innerWidth, window.innerHeight) * 0.8;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const startX = centerX + Math.cos(angle) * distance;
      const startY = centerY + Math.sin(angle) * distance;
      
      // Target slightly off-center for more natural movement
      const targetX = centerX + (Math.random() - 0.5) * 200;
      const targetY = centerY + (Math.random() - 0.5) * 200;
      
      comet.style.position = "absolute";
      comet.style.left = `${startX}px`;
      comet.style.top = `${startY}px`;
      comet.style.width = `${cometSize}px`;
      comet.style.height = `${cometSize}px`;
      comet.style.background = "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, transparent 100%)";
      comet.style.borderRadius = "50%";
      comet.style.boxShadow = `0 0 ${cometSize * 4}px rgba(255,255,255,0.8), 0 0 ${cometSize * 8}px rgba(255,255,255,0.4)`;
      comet.style.zIndex = "3";
      
      // Create dynamic tail based on movement direction
      const tailLength = 60 + Math.random() * 100;
      const movementAngle = Math.atan2(targetY - startY, targetX - startX);
      
      const tail = document.createElement("div");
      tail.style.position = "absolute";
      tail.style.left = "50%";
      tail.style.top = "50%";
      tail.style.width = `${tailLength}px`;
      tail.style.height = "2px";
      tail.style.background = "linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 30%, transparent 100%)";
      tail.style.transform = `translate(-50%, -50%) rotate(${movementAngle + Math.PI}rad)`;
      tail.style.transformOrigin = "0% 50%";
      comet.appendChild(tail);
      
      container.appendChild(comet);

      // Natural comet trajectory with acceleration and fade
      const totalDistance = Math.sqrt(Math.pow(targetX - startX, 2) + Math.pow(targetY - startY, 2));
      const duration = (totalDistance / speed) * 10;
      
      const animation = comet.animate([
        {
          left: `${startX}px`,
          top: `${startY}px`,
          opacity: "0",
          transform: "scale(0.2)"
        },
        {
          left: `${startX + (targetX - startX) * 0.2}px`,
          top: `${startY + (targetY - startY) * 0.2}px`,
          opacity: "0.8",
          transform: "scale(1)"
        },
        {
          left: `${startX + (targetX - startX) * 0.7}px`,
          top: `${startY + (targetY - startY) * 0.7}px`,
          opacity: "1",
          transform: "scale(1.2)"
        },
        {
          left: `${targetX}px`,
          top: `${targetY}px`,
          opacity: "0",
          transform: "scale(0.3)"
        }
      ], {
        duration: Math.max(1500, Math.min(duration, 4000)),
        easing: "cubic-bezier(0.25, 0.1, 0.25, 1)"
      });

      animation.onfinish = () => {
        comet.remove();
      };
    };

    const createShootingStar = () => {
      const container = containerRef.current;
      if (!container) return;

      const shootingStar = document.createElement("div");
      const startSide = Math.floor(Math.random() * 4);
      let startX, startY, endX, endY;
      
      // Create shooting stars from edges
      switch (startSide) {
        case 0: // Top
          startX = Math.random() * window.innerWidth;
          startY = -50;
          endX = startX + (Math.random() - 0.5) * 400;
          endY = window.innerHeight + 50;
          break;
        case 1: // Right
          startX = window.innerWidth + 50;
          startY = Math.random() * window.innerHeight;
          endX = -50;
          endY = startY + (Math.random() - 0.5) * 400;
          break;
        case 2: // Bottom
          startX = Math.random() * window.innerWidth;
          startY = window.innerHeight + 50;
          endX = startX + (Math.random() - 0.5) * 400;
          endY = -50;
          break;
        default: // Left
          startX = -50;
          startY = Math.random() * window.innerHeight;
          endX = window.innerWidth + 50;
          endY = startY + (Math.random() - 0.5) * 400;
      }
      
      shootingStar.style.position = "absolute";
      shootingStar.style.left = `${startX}px`;
      shootingStar.style.top = `${startY}px`;
      shootingStar.style.width = "3px";
      shootingStar.style.height = "3px";
      shootingStar.style.background = "white";
      shootingStar.style.borderRadius = "50%";
      shootingStar.style.boxShadow = "0 0 20px rgba(255,255,255,1), 0 0 40px rgba(255,255,255,0.6)";
      shootingStar.style.zIndex = "2";
      
      // Long tail for shooting star
      const angle = Math.atan2(endY - startY, endX - startX);
      const trail = document.createElement("div");
      trail.style.position = "absolute";
      trail.style.left = "50%";
      trail.style.top = "50%";
      trail.style.width = "200px";
      trail.style.height = "1px";
      trail.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 20%, transparent 100%)";
      trail.style.transform = `translate(-50%, -50%) rotate(${angle + Math.PI}rad)`;
      trail.style.transformOrigin = "0% 50%";
      shootingStar.appendChild(trail);
      
      container.appendChild(shootingStar);
      
      const animation = shootingStar.animate([
        {
          left: `${startX}px`,
          top: `${startY}px`,
          opacity: "1"
        },
        {
          left: `${endX}px`,
          top: `${endY}px`,
          opacity: "0"
        }
      ], {
        duration: 800 + Math.random() * 1200,
        easing: "linear"
      });

      animation.onfinish = () => {
        shootingStar.remove();
      };
    };

    // Create initial comets
    for (let i = 0; i < 30; i++) {
      setTimeout(createComet, i * 200);
    }

    // Create occasional shooting stars
    for (let i = 0; i < 5; i++) {
      setTimeout(createShootingStar, i * 2000);
    }

    // Continue creating effects
    const cometInterval = setInterval(createComet, 800);
    const shootingStarInterval = setInterval(createShootingStar, 3000);
    
    return () => {
      clearInterval(cometInterval);
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Space Background with Stars */}
      <div className="absolute inset-0 bg-black">
        {/* Static Stars */}
        {[...Array(200)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const opacity = Math.random() * 0.8 + 0.2;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const delay = Math.random() * 3;
          
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${x}%`,
                top: `${y}%`,
                opacity: opacity,
                animationDelay: `${delay}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
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

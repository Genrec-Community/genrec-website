import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
  { name: "React", icon: "⚛️", color: "text-blue-400" },
  { name: "Node.js", icon: "🟢", color: "text-green-400" },
  { name: "Python", icon: "🐍", color: "text-yellow-400" },
  { name: "AWS", icon: "☁️", color: "text-orange-400" },
  { name: "Docker", icon: "🐳", color: "text-blue-300" },
  { name: "JavaScript", icon: "🟨", color: "text-yellow-300" },
  { name: "TypeScript", icon: "🔷", color: "text-blue-500" },
  { name: "MongoDB", icon: "🍃", color: "text-green-300" }
];

const sponsors = [
  "Microsoft", "Google", "Apple", "Meta", "Amazon", "Tesla", "Netflix", "Spotify"
];

export default function TechStackCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Technology Stack
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Powered by cutting-edge technologies and trusted by industry leaders
          </motion.p>
        </div>
        
        {/* Tech Stack Logos */}
        <div className="mb-16">
          <div className="overflow-hidden">
            <motion.div 
              className="flex space-x-12 animate-pulse-slow"
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut", 
                    delay: (index % techStack.length) * 0.1 + 0.6 
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="flex-shrink-0 w-24 h-24 bg-white/5 rounded-2xl flex flex-col items-center justify-center border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className={`text-4xl mb-1 ${tech.color}`}>{tech.icon}</div>
                  <div className="text-xs font-medium text-gray-400">{tech.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Sponsors Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {sponsors.slice(0, 4).map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeOut", 
                  delay: index * 0.1 + 1 
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-white/5 rounded-2xl p-6 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="text-lg font-bold text-gray-400">{sponsor}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

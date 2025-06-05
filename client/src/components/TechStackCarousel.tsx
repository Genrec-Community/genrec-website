import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import SOTA model images
import claudeImg from "../../../attached_assets/claude.png";
import dockerImg from "../../../attached_assets/docker.png";
import jpyterImg from "../../../attached_assets/jpyter.png";
import metaImg from "../../../attached_assets/meta.png";
import openaiImg from "../../../attached_assets/openai.png";
import vscImg from "../../../attached_assets/vsc.png";

const sotaModels = [
  { src: openaiImg, alt: "OpenAI" },
  { src: claudeImg, alt: "Claude AI" },
  { src: dockerImg, alt: "Docker" },
  { src: metaImg, alt: "Meta" },
  { src: jpyterImg, alt: "Jupyter" },
  { src: vscImg, alt: "Visual Studio Code" }
];

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
        {/* End of Tech Stack Logos */}

        {/* SOTA Models and Software Section */}
        <div className="mt-20">
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Powered by SOTA Models and Software
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {sotaModels.map((img, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1 + 0.8
                }}
                className="flex items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-24 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

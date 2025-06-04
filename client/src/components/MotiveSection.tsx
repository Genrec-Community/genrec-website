import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const motives = [
  {
    icon: "🚀",
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge solutions that transform industries and create lasting impact."
  },
  {
    icon: "💡",
    title: "Creative Excellence",
    description: "Merging artistic vision with technical expertise to deliver exceptional user experiences."
  },
  {
    icon: "🎯",
    title: "Results Driven",
    description: "Focused on measurable outcomes that drive business growth and user satisfaction."
  },
  {
    icon: "🌟",
    title: "Future Ready",
    description: "Building scalable solutions that adapt and evolve with emerging technologies."
  }
];

export default function MotiveSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="motive" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          Our Vision
        </motion.h2>
        
        <div className="horizontal-scroll overflow-x-auto pb-6">
          <motion.div 
            className="flex space-x-8 w-max"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            {motives.map((motive, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut", 
                  delay: 0.1 * index + 0.5 
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="flex-shrink-0 w-80 h-96 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 cursor-pointer"
              >
                <div className="text-6xl mb-6">{motive.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{motive.title}</h3>
                <p className="text-gray-400 leading-relaxed">{motive.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

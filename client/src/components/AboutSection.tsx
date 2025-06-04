import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const counters = [
  { value: 150, label: "Projects Completed" },
  { value: 98, label: "Client Satisfaction" },
  { value: 5, label: "Years Experience" },
  { value: 24, label: "Team Members" }
];

function AnimatedCounter({ value, isVisible }: { value: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const increment = value / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return <span>{count}</span>;
}

export default function AboutSection() {
  const ref = useRef(null);
  const counterRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const counterInView = useInView(counterRef, { once: true, margin: "-50px" });

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image */}
          <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern collaborative workspace with developers" 
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover border border-white/10" 
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 w-20 h-20 bg-white rounded-full flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </motion.div>
          
          {/* Right Side: Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">About GENREC</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We are a cutting-edge technology company dedicated to crafting exceptional digital experiences. 
              Our team of visionary developers, designers, and strategists work together to push the boundaries 
              of what's possible in the digital realm.
            </p>
            
            {/* Animated Counters */}
            <motion.div 
              ref={counterRef}
              className="grid grid-cols-2 gap-8 mb-8"
            >
              {counters.map((counter, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={counterInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut", 
                    delay: index * 0.1 + 0.3 
                  }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold mb-2">
                    <AnimatedCounter value={counter.value} isVisible={counterInView} />
                    {counter.label.includes("Satisfaction") && "%"}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {counter.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

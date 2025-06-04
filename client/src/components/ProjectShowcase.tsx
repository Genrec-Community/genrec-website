import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const projects = [
  {
    title: "NeuroLink AI",
    category: "AI Platform",
    description: "Revolutionary machine learning platform that transforms data into actionable insights with unprecedented accuracy.",
    technologies: ["React", "Python", "TensorFlow"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    status: "green"
  },
  {
    title: "CloudStore Pro",
    category: "E-Commerce",
    description: "Next-generation e-commerce platform with AI-powered recommendations and seamless payment integration.",
    technologies: ["Next.js", "Stripe", "GraphQL"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    status: "blue"
  },
  {
    title: "CryptoVault",
    category: "FinTech",
    description: "Secure cryptocurrency trading platform with advanced analytics and portfolio management tools.",
    technologies: ["Vue.js", "Node.js", "Web3"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    status: "yellow"
  },
  {
    title: "MediConnect",
    category: "HealthTech",
    description: "Comprehensive healthcare management system connecting patients, doctors, and medical institutions.",
    technologies: ["React Native", "MongoDB", "Socket.io"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    status: "red"
  }
];

const statusColors = {
  green: "bg-green-400",
  blue: "bg-blue-400", 
  yellow: "bg-yellow-400",
  red: "bg-red-400"
};

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = container.offsetHeight;
      
      // Calculate when the container is in view
      const startScroll = -rect.top;
      const endScroll = startScroll + windowHeight + containerHeight;
      const totalScrollDistance = containerHeight + windowHeight;
      
      if (startScroll >= 0 && startScroll <= totalScrollDistance) {
        const progress = startScroll / totalScrollDistance;
        setScrollProgress(progress);
        
        // Calculate current project based on scroll progress
        const projectIndex = Math.min(
          Math.floor(progress * projects.length * 1.2),
          projects.length - 1
        );
        setCurrentProject(Math.max(0, projectIndex));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="relative"
      style={{ height: `${100 + projects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Discover our award-winning portfolio of innovative digital solutions
            </motion.p>
          </div>
          
          {/* Project Display */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Project Image */}
              <motion.div
                key={`image-${currentProject}`}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <img 
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-[400px] object-cover rounded-3xl border border-white/10"
                />
                <div className={`absolute top-6 right-6 w-4 h-4 ${statusColors[projects[currentProject].status as keyof typeof statusColors]} rounded-full animate-pulse`} />
              </motion.div>
              
              {/* Project Info */}
              <motion.div
                key={`info-${currentProject}`}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                  {projects[currentProject].category}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold">
                  {projects[currentProject].title}
                </h3>
                
                <p className="text-xl text-gray-400 leading-relaxed">
                  {projects[currentProject].description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {projects[currentProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{projects[currentProject].year}</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                  >
                    View Project
                  </motion.button>
                </div>
              </motion.div>
            </div>
            
            {/* Project Navigation */}
            <div className="flex justify-center mt-16 space-x-4">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            
            {/* Project Counter */}
            <div className="absolute top-0 right-0 text-sm font-mono text-gray-500">
              <span className="text-white text-2xl font-bold">
                {String(currentProject + 1).padStart(2, '0')}
              </span>
              <span className="mx-2">/</span>
              <span>{String(projects.length).padStart(2, '0')}</span>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-20 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="w-full bg-white rounded-full transition-all duration-300"
                style={{ height: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

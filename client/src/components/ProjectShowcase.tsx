import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 100}%`]);

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full">
          <div className="text-center mb-16 px-6">
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
          
          <motion.div 
            style={{ x }}
            className="flex will-change-transform"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-full flex items-center justify-center px-6"
              >
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                  {/* Project Image */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                  >
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[500px] object-cover rounded-3xl border border-white/10"
                    />
                    <div className={`absolute top-6 right-6 w-4 h-4 ${statusColors[project.status as keyof typeof statusColors]} rounded-full animate-pulse`} />
                  </motion.div>
                  
                  {/* Project Info */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="space-y-8"
                  >
                    <div className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                      {project.category}
                    </div>
                    
                    <h3 className="text-4xl md:text-6xl font-bold">
                      {project.title}
                    </h3>
                    
                    <p className="text-xl text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
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
                        <span>{project.year}</span>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                      >
                        View Project
                      </motion.button>
                    </div>
                    
                    {/* Project Counter */}
                    <div className="text-sm font-mono text-gray-500">
                      <span className="text-white text-3xl font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="mx-3">/</span>
                      <span className="text-xl">{String(projects.length).padStart(2, '0')}</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Scroll Progress Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-20 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className="w-full bg-white rounded-full"
                style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "NeuroLink AI",
    category: "AI Platform",
    description: "Revolutionary machine learning platform that transforms data into actionable insights with unprecedented accuracy.",
    technologies: ["React", "Python", "TensorFlow"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    status: "green"
  },
  {
    title: "CloudStore Pro",
    category: "E-Commerce",
    description: "Next-generation e-commerce platform with AI-powered recommendations and seamless payment integration.",
    technologies: ["Next.js", "Stripe", "GraphQL"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    status: "blue"
  },
  {
    title: "CryptoVault",
    category: "FinTech",
    description: "Secure cryptocurrency trading platform with advanced analytics and portfolio management tools.",
    technologies: ["Vue.js", "Node.js", "Web3"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    status: "yellow"
  },
  {
    title: "MediConnect",
    category: "HealthTech",
    description: "Comprehensive healthcare management system connecting patients, doctors, and medical institutions.",
    technologies: ["React Native", "MongoDB", "Socket.io"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Discover our award-winning portfolio of innovative digital solutions
          </motion.p>
        </div>
        
        <div className="horizontal-scroll overflow-x-auto pb-6">
          <motion.div 
            className="flex space-x-8 w-max"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut", 
                  delay: 0.1 * index + 0.6 
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="project-card group flex-shrink-0 w-96 h-[500px] bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden cursor-pointer"
              >
                <div 
                  className="h-48 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className={`absolute top-4 right-4 w-3 h-3 ${statusColors[project.status as keyof typeof statusColors]} rounded-full animate-pulse`} />
                  <div className="p-6 h-full flex items-end">
                    <div className="text-white/80 text-sm font-mono">{project.category}</div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="w-2 h-2 bg-white rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

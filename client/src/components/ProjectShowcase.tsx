import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "NeuroLink AI",
    category: "AI Platform",
    description: "NeuroLink AI represents the pinnacle of machine learning innovation, transforming complex data landscapes into actionable business intelligence. Our revolutionary platform leverages cutting-edge neural networks and deep learning algorithms to process massive datasets in real-time, delivering unprecedented accuracy in predictive analytics. Built with enterprise-grade security and scalability, NeuroLink AI empowers organizations to make data-driven decisions with confidence. The platform features advanced natural language processing, computer vision capabilities, and automated model optimization that adapts to evolving data patterns. From fraud detection to customer behavior analysis, NeuroLink AI has revolutionized how businesses understand and interact with their data, achieving 99.7% accuracy in pattern recognition and reducing processing time by 85%.",
    technologies: ["React", "Python", "TensorFlow", "AWS", "Docker"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    status: "green"
  },
  {
    title: "CloudStore Pro",
    category: "E-Commerce", 
    description: "CloudStore Pro redefines the e-commerce experience with its next-generation platform that seamlessly integrates AI-powered recommendations, advanced analytics, and frictionless payment processing. This comprehensive solution transforms online retail through intelligent product discovery, personalized shopping experiences, and real-time inventory management. The platform's sophisticated recommendation engine analyzes user behavior, purchase history, and market trends to deliver hyper-personalized product suggestions that increase conversion rates by 340%. Built on a microservices architecture, CloudStore Pro handles millions of transactions daily while maintaining sub-second response times. Advanced features include dynamic pricing optimization, multi-channel inventory synchronization, automated customer service through AI chatbots, and comprehensive seller analytics dashboard. The platform supports over 50 payment gateways and provides seamless integration with major shipping providers worldwide.",
    technologies: ["Next.js", "Stripe", "GraphQL", "Redis", "PostgreSQL"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    status: "blue"
  },
  {
    title: "CryptoVault",
    category: "FinTech",
    description: "CryptoVault stands as the most secure and intuitive cryptocurrency trading platform in the market, combining institutional-grade security with cutting-edge analytics and portfolio management tools. Our platform revolutionizes digital asset trading through advanced algorithmic trading strategies, real-time market analysis, and comprehensive risk management systems. Built with military-grade encryption and multi-signature wallet technology, CryptoVault ensures the highest level of security for digital assets while providing lightning-fast trade execution. The platform features advanced charting tools, automated trading bots, yield farming opportunities, and sophisticated portfolio rebalancing algorithms. With support for over 500 cryptocurrencies and integration with major DeFi protocols, CryptoVault empowers both novice and professional traders to maximize their investment potential. The platform's AI-driven market sentiment analysis and predictive modeling have helped users achieve an average return increase of 180%.",
    technologies: ["Vue.js", "Node.js", "Web3", "Solidity", "MongoDB"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    status: "yellow"
  },
  {
    title: "MediConnect",
    category: "HealthTech",
    description: "MediConnect represents a paradigm shift in healthcare technology, creating the world's most comprehensive ecosystem that seamlessly connects patients, healthcare providers, and medical institutions. This revolutionary platform transforms healthcare delivery through intelligent appointment scheduling, real-time health monitoring, telemedicine capabilities, and AI-powered diagnostic assistance. Built with HIPAA compliance at its core, MediConnect ensures complete data privacy while enabling unprecedented collaboration between healthcare stakeholders. The platform features advanced electronic health records (EHR) integration, automated medication management, predictive health analytics, and emergency response coordination. With its sophisticated patient portal, individuals can access their complete medical history, schedule appointments, communicate with healthcare providers, and receive personalized health recommendations. The platform's AI diagnostic engine assists doctors in identifying potential health issues 40% faster than traditional methods, while its population health management system has improved patient outcomes by 65% across participating healthcare networks.",
    technologies: ["React Native", "MongoDB", "Socket.io", "FHIR", "TensorFlow"],
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

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.95, 0.1]);
  const y = useTransform(scrollYProgress, [0, 0.8, 1], [0, -50, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 0.8, 1], [1, 1, 0.3, 0]);
  const titleScale = useTransform(scrollYProgress, [0.6, 0.8, 1], [1, 1.2, 2]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6, 0.8], [1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, y }}
      className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <motion.div 
        style={{ opacity }}
        className="w-full max-w-7xl mx-auto px-6"
      >
        {/* Minimized Title State */}
        <motion.div
          style={{ 
            scale: titleScale,
            opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1])
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white/20">
              {project.title}
            </h2>
            <div className="text-lg text-gray-500 mt-4 font-mono">
              {project.category}
            </div>
          </div>
        </motion.div>

        {/* Full Content State */}
        <motion.div 
          style={{ opacity: contentOpacity }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
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
            className="space-y-6"
          >
            <div className="text-sm font-mono text-gray-400 uppercase tracking-wider">
              {project.category}
            </div>
            
            <h3 className="text-4xl md:text-6xl font-bold leading-tight">
              {project.title}
            </h3>
            
            <div className="max-h-96 overflow-y-auto custom-scrollbar">
              <p className="text-lg text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between pt-4">
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
            <div className="text-sm font-mono text-gray-500 pt-4">
              <span className="text-white text-3xl font-bold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="mx-3">/</span>
              <span className="text-xl">{String(projects.length).padStart(2, '0')}</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  return (
    <section id="projects" className="relative">
      {/* Section Header */}
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="text-center px-6">
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
      </div>

      {/* Individual Project Cards */}
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </section>
  );
}

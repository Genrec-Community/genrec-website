import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "DataScience Agent",
    category: "AI Platform",
    description: "The Data Science Platform is an all-in-one, modern web application designed to simplify and democratize the process of data analysis, visualization, and machine learning for users of all skill levels. Inspired by the familiar look and feel of Excel, it bridges the gap between advanced data science capabilities and the everyday business user, offering a powerful yet approachable environment for turning raw data into actionable insights. At its core, the platform allows users to seamlessly upload datasets in CSV or Excel format. Once uploaded, users can immediately explore their data with comprehensive profiling tools that generate rich statistical summaries and visual cues, helping users quickly understand distributions, spot anomalies, and identify patterns. For organizations that deal with messy or inconsistent data, the platform's data cleaning tools are a game-changer. These advanced utilities guide users through the process of handling missing values, detecting outliers, and transforming datasets—all without the need for manual coding or technical know-how. One of the standout features of the platform is its integrated machine learning module. Business analysts and data scientists alike can train, evaluate, and compare machine learning models within a few clicks. The system supports feature importance analysis, enabling users to interpret which variables drive their predictions, and provides performance metrics such as accuracy, precision, recall, and F1-score in an intuitive format.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit", "PostgreSQL"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    status: "green",
    github: "https://github.com/Shyamnath-Sankar/Datascience-AI-Agent.git"
  },
  {
    title: "Enterprise CRM & ERP",
    category: "Business Solutions", 
    description: "Our comprehensive CRM and ERP software suite revolutionizes business operations by seamlessly integrating customer relationship management with enterprise resource planning in a unified, intelligent platform. This enterprise-grade solution transforms how organizations manage their entire business ecosystem, from lead generation to customer retention, and from inventory management to financial reporting. The CRM module features advanced contact management, sales pipeline automation, marketing campaign orchestration, and customer service ticketing systems with AI-powered sentiment analysis. Built-in analytics provide deep insights into customer behavior, sales performance, and market trends, enabling data-driven decision making. The ERP component encompasses comprehensive modules for inventory management, supply chain optimization, human resources, financial accounting, and project management. Real-time dashboards and customizable reporting tools provide executives with complete visibility into business operations. Advanced workflow automation reduces manual processes by up to 70%, while role-based access controls ensure data security across all organizational levels. The platform's scalable architecture supports businesses from startups to Fortune 500 companies, with seamless integration capabilities for existing enterprise systems.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    status: "blue"
  },
  {
    title: "Revolvo AI Library",
    category: "EdTech",
    description: "Revolvo AI Library represents the future of academic resource management, combining traditional library systems with cutting-edge artificial intelligence to create an intelligent knowledge ecosystem specifically designed for colleges and universities. This revolutionary platform transforms how students and faculty discover, access, and interact with academic resources by implementing AI-powered book knowledge systems that understand content at a granular level. The platform features comprehensive cataloging of physical and digital resources, intelligent search capabilities that understand context and intent, and personalized recommendation engines that suggest relevant materials based on coursework, research interests, and academic goals. Advanced AI agents provide instant answers to academic queries by analyzing the knowledge contained within thousands of books, research papers, and scholarly articles. Students can engage in natural language conversations with the system to explore complex topics, receive explanations of difficult concepts, and discover connections between different academic disciplines. The platform includes advanced study tools such as AI-generated summaries, concept mapping, citation assistance, and collaborative research spaces. Faculty members benefit from course integration features, research collaboration tools, and advanced analytics on resource utilization. The system's machine learning algorithms continuously improve recommendations and search accuracy based on user interactions and academic outcomes.",
    technologies: ["Python", "NLP", "Vector DB", "React", "FastAPI"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    status: "yellow"
  },
  {
    title: "Innovation Web Portal",
    category: "Digital Innovation",
    description: "The Innovation Web Portal stands as a groundbreaking digital platform that redefines how organizations showcase their technological capabilities, foster innovation, and engage with stakeholders in the digital age. This cutting-edge website combines award-winning design principles with advanced interactive technologies to create an immersive experience that tells compelling stories of innovation and technological excellence. The platform features a dynamic content management system that adapts to different user personas, providing personalized journeys for investors, customers, partners, and potential employees. Advanced animation frameworks create fluid, engaging interactions that guide users through complex technical concepts with clarity and visual appeal. The portal includes comprehensive project showcases with interactive demos, detailed case studies, and real-time performance metrics that demonstrate tangible business impact. Integrated collaboration tools enable seamless communication between teams, clients, and stakeholders, while advanced analytics provide deep insights into user engagement and content performance. The platform's responsive design ensures optimal performance across all devices and screen sizes, while progressive web app capabilities provide native app-like experiences. Built with accessibility and SEO optimization at its core, the portal achieves maximum reach and inclusivity while maintaining the highest standards of performance and user experience.",
    technologies: ["Next.js", "Three.js", "Framer Motion", "TypeScript", "Vercel"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
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
      className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gray-900"
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
              
              <div className="flex gap-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </motion.a>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                >
                  View Project
                </motion.button>
              </div>
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
      <div className="h-screen flex items-center justify-center bg-gray-900">
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

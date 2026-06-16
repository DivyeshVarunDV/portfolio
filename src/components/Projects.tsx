import type { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Student Management Portal",
    description: "A comprehensive web-based platform designed to streamline student administration and academic management. The system enables efficient handling of student records, integrates academic calendars, supports WhatsApp communication, and provides a centralized database for managing educational information.",
    context: "TN Startup Competition Winner"
  },
  {
    title: "Agri App",
    description: "A digital solution aimed at supporting farmers and agricultural stakeholders through technology. The application focuses on simplifying access to agricultural information, improving decision-making, and providing a user-friendly platform that bridges the gap between technology and farming practices.",
    context: "Agri-Tech Solution"
  },
  {
    title: "AI Resume Screening System",
    description: "An AI-powered recruitment assistance platform developed to automate the initial resume screening process. It analyzes candidate profiles against job requirements, helping recruiters identify suitable candidates more efficiently while reducing manual effort and screening time.",
    context: "IamNeo Hackathon Runner-Up"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    mouseX.set(mouseXPos / width - 0.5);
    mouseY.set(mouseYPos / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      style={{ perspective: 1200 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-soft border border-emerald/10 hover:border-emerald/40 hover:shadow-[0_20px_40px_-10px_rgba(43,83,65,0.15)] transition-colors duration-500 overflow-hidden cursor-crosshair"
      >
        {/* Spotlight Effect */}
        <motion.div 
          className="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: useMotionTemplate`radial-gradient(600px circle at ${useTransform(springX, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(springY, [-0.5, 0.5], ["0%", "100%"])}, rgba(43, 83, 65, 0.05), transparent 40%)`
          }}
        />
        
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-[2] pointer-events-none" />
        
        {/* Content translated on Z axis for 3D pop */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6" style={{ transform: "translateZ(40px)" }}>
          <div className="max-w-3xl">
            <div className="text-emerald font-medium text-sm mb-3 tracking-wider uppercase">
              {project.context}
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-dark mb-4 group-hover:text-emerald transition-colors">
              {project.title}
            </h3>
            <p className="text-dark-muted text-base md:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-emerald/20 text-emerald group-hover:bg-emerald group-hover:text-white transition-all duration-300 flex-shrink-0 group-hover:rotate-45 group-hover:scale-110 shadow-sm">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-dark mb-12">
          Selected <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

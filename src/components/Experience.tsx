import type { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';

const achievements = [
  {
    title: "TN Startup Competition",
    role: "Winner",
    description: "Developed and presented a comprehensive Student Management Portal, securing the winning position.",
    icon: <Trophy className="w-6 h-6 text-gold-dark" />
  },
  {
    title: "IamNeo Hackathon (72-Hour)",
    role: "Runner-Up",
    description: "Built an AI Resume Screening System during an intensive 72-hour development sprint.",
    icon: <Award className="w-6 h-6 text-emerald" />
  },
  {
    title: "College Hackathon",
    role: "Runner-Up",
    description: "Demonstrated technical problem-solving and rapid prototyping skills in a competitive environment.",
    icon: <Award className="w-6 h-6 text-emerald" />
  }
];

const ExperienceCard = ({ item, index }: { item: typeof achievements[0], index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-emerald/5 hover:border-emerald/30 hover:shadow-2xl transition-colors duration-300 group cursor-crosshair relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: useMotionTemplate`radial-gradient(400px circle at ${useTransform(springX, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(springY, [-0.5, 0.5], ["0%", "100%"])}, rgba(229, 192, 123, 0.08), transparent 40%)`
          }}
        />

        <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
          <div className="mb-6 p-4 bg-pearl inline-block rounded-xl group-hover:scale-110 group-hover:-rotate-6 shadow-sm transition-transform duration-500">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold text-dark mb-2">{item.title}</h3>
          <div className="text-emerald font-medium text-sm mb-4 uppercase tracking-wider">{item.role}</div>
          <p className="text-dark-muted leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-dark mb-12">
          Competitions & <span className="text-gradient">Hackathons</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

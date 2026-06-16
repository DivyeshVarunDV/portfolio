import { motion } from 'framer-motion';
import { GraduationCap, Code, Rocket, Award } from 'lucide-react';

const steps = [
  {
    year: "2022",
    title: "The Genesis",
    institution: "SKCET, Coimbatore",
    description: "Began Integrated M.Tech in Computer Science and Engineering, laying the foundation in data structures and algorithmic thinking.",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    year: "2023",
    title: "Development Deep-Dive",
    institution: "Project: Student Management Portal",
    description: "Won the TN Startup Competition. Mastered Full-Stack development while building real-world administrative tools.",
    icon: <Code className="w-5 h-5" />
  },
  {
    year: "2024",
    title: "Innovation & Speed",
    institution: "IamNeo Hackathon",
    description: "Runner-Up in a 72-hour sprint. Developed an AI Resume Screening System, bridging NLP with recruitment technology.",
    icon: <Rocket className="w-5 h-5" />
  },
  {
    year: "2025",
    title: "Current Frontier",
    institution: "Fourth Year / Future Focused",
    description: "Focusing on scalable backend architectures and refined UI/UX design patterns. Exploring the intersection of AI and agriculture.",
    icon: <Award className="w-5 h-5" />
  }
];

const Journey = () => {
  return (
    <section id="journey" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-dark mb-4 tracking-tight">
            The <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-dark-muted max-w-lg">A chronological evolution of technical mastery and academic excellence.</p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-emerald/10 md:-translate-x-1/2" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`inline-block px-4 py-1 rounded-full bg-gold/10 text-gold-dark text-[10px] font-bold uppercase tracking-widest mb-4`}>
                    {step.year}
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-2">{step.title}</h3>
                  <p className="text-emerald font-semibold text-sm mb-4 uppercase">{step.institution}</p>
                  <p className="text-dark-muted leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Orb */}
                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 bg-white border-2 border-emerald rounded-full md:-translate-x-1/2 flex items-center justify-center z-10 shadow-lg shadow-emerald/10">
                  <div className="text-emerald">
                    {step.icon}
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Journey;

import { motion } from 'framer-motion';
import { Layout, Server, Wrench, Database } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
    icon: <Layout className="w-5 h-5" />,
    color: "bg-emerald/5",
    border: "border-emerald/20",
    text: "text-emerald"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
    icon: <Server className="w-5 h-5" />,
    color: "bg-gold/5",
    border: "border-gold/20",
    text: "text-gold-dark"
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"],
    icon: <Database className="w-5 h-5" />,
    color: "bg-emerald/5",
    border: "border-emerald/20",
    text: "text-emerald"
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
    icon: <Wrench className="w-5 h-5" />,
    color: "bg-gold/5",
    border: "border-gold/20",
    text: "text-gold-dark"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 scroll-mt-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-4">
            Tech <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="h-[2px] w-24 bg-gold/30" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`relative overflow-hidden p-8 rounded-[2rem] border ${category.border} ${category.color} backdrop-blur-sm shadow-soft group hover:shadow-xl transition-all duration-500`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                 {category.icon}
              </div>
              
              <div className={`mb-6 p-3 inline-flex rounded-xl bg-white shadow-sm ${category.text}`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-dark mb-6 tracking-tight">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/60 text-dark-muted text-[12px] font-semibold rounded-full border border-dark/5 hover:border-emerald hover:text-emerald transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          
          {/* Refined "Bento" Highlight Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 p-8 md:p-12 rounded-[2.5rem] bg-emerald/5 border border-emerald/10 overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 blur-[100px] -mr-32 -mt-32 group-hover:bg-gold/20 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald/10 blur-[80px] -ml-32 -mb-32" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-[1px] bg-emerald/40" />
                  <h4 className="text-emerald font-semibold tracking-[0.3em] text-[10px] uppercase">Core Philosophy</h4>
                </div>
                <p className="text-2xl md:text-4xl font-display leading-[1.1] text-dark font-medium italic">
                  "I specialize in building bridges between <span className="text-emerald">complex data architectures</span> and fluid, human-centric interfaces."
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-auto">
                 <div className="px-6 py-4 rounded-2xl bg-white shadow-sm border border-emerald/5 text-sm font-semibold text-emerald flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                   Full-Stack Scalability
                 </div>
                 <div className="px-6 py-4 rounded-2xl bg-white shadow-sm border border-gold/20 text-sm font-semibold text-gold-dark flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                   Clean Architecture
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

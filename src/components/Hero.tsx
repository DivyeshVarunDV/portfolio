import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Mail, Sparkles } from 'lucide-react';
import type { MouseEvent } from 'react';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(springY, [-500, 500], [20, -20]);
  const rotateY = useTransform(springX, [-500, 500], [-20, 20]);

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 40, damping: 20 } 
    },
  };

  return (
    <section 
      id="about" 
      className="min-h-[90vh] flex flex-col justify-center relative cursor-default"
      onMouseMove={handleMouseMove}
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl relative z-10"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-gold" />
          <p className="text-gold-dark font-medium tracking-[0.2em] text-xs md:text-sm uppercase">
            Available for Opportunities
          </p>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-display font-bold text-dark leading-[0.9] mb-8 tracking-tighter">
          Crafting <span className="text-gradient">Digital</span><br/>
          Excellence<span className="text-emerald">.</span>
        </motion.h1>
        
        <motion.div variants={itemVariants} className="relative group">
          <p className="text-xl md:text-2xl text-dark-muted mb-12 leading-relaxed max-w-2xl font-light italic border-l-2 border-emerald/20 pl-6 py-2">
            "I'm Divyesh, an Integrated M.Tech student turning complex logic into seamless human experiences through code."
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex flex-wrap gap-8 items-center mb-16">
          <div className="flex items-center gap-3 text-dark-muted text-sm font-medium group">
            <div className="p-2 rounded-full bg-emerald/5 group-hover:bg-emerald/10 transition-colors">
              <MapPin className="w-4 h-4 text-emerald" />
            </div>
            Coimbatore, India
          </div>
          <div className="flex items-center gap-3 text-dark-muted text-sm font-medium group">
            <div className="p-2 rounded-full bg-emerald/5 group-hover:bg-emerald/10 transition-colors">
              <Mail className="w-4 h-4 text-emerald" />
            </div>
            <a href="mailto:divyeshvarundv@gmail.com" className="hover:text-emerald transition-colors underline decoration-emerald/20 underline-offset-4">
              divyeshvarundv@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4">
           <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-emerald text-white rounded-full font-medium shadow-lg shadow-emerald/20 hover:shadow-emerald/40 transition-all flex items-center gap-2"
          >
            Explore Projects <Sparkles className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Abstract Interactive Orbital Sculpture */}
      <motion.div 
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="relative w-80 h-80 flex items-center justify-center">
           {/* Outer Ring */}
           <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full border-[1.5px] border-emerald/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-dashed" 
           />
           {/* Inner Ring */}
           <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] h-[80%] border-[1px] border-gold/20 rounded-[60%_40%_30%_70%/50%_60%_40%_60%]" 
           />
           {/* Center Glass Orb */}
           <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-40 h-40 bg-gradient-to-br from-emerald/10 to-gold/5 rounded-full backdrop-blur-2xl border border-white/20 shadow-[0_0_50px_rgba(43,83,65,0.1)] flex items-center justify-center overflow-hidden"
           >
              <motion.div 
                animate={{ 
                  x: [-20, 20, -20],
                  y: [-20, 20, -20]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-emerald/5 blur-2xl rounded-full"
              />
              <Sparkles className="absolute w-12 h-12 text-emerald/30 animate-pulse" />
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

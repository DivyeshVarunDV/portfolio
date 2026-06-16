import { motion } from 'framer-motion';
import { Link as LinkIcon, ArrowRight, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-emerald rounded-[3rem] p-12 md:p-24 overflow-hidden"
      >
        {/* Background Accents - Optimized */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-30%] right-[-20%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)] rounded-full" />
          <div className="absolute bottom-[-30%] left-[-20%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(229,192,123,0.15),transparent_60%)] rounded-full" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center justify-between">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter leading-none">
              Let's build <br/> something <span className="italic text-gold">extraordinary</span>.
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12">
              Whether you have a specific project in mind or just want to explore the possibilities of technology, my digital door is always open.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.a 
                href="mailto:divyeshvarundv@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-white text-emerald rounded-full font-bold shadow-xl transition-all"
              >
                Send an Email <ArrowRight className="w-4 h-4" />
              </motion.a>
              <div className="flex gap-4">
                <a href="https://github.com/DivyeshVarunDV" target="_blank" rel="noreferrer" className="p-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all backdrop-blur-md border border-white/10" aria-label="GitHub">
                  <LinkIcon className="w-5 h-5" />
                </a>
                <a href="/Divyesh_Varun_Resume.docx" download="Divyesh_Varun_Resume.docx" className="flex items-center gap-2 px-6 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all backdrop-blur-md border border-white/10 font-medium text-sm">
                  <FileText className="w-4 h-4" /> Resume
                </a>
              </div>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
             <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4">Location</p>
                <p className="text-white font-medium">Coimbatore, IN</p>
             </div>
             <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4">Focus</p>
                <p className="text-white font-medium">Software Eng.</p>
             </div>
             <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm col-span-2 text-center">
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4">Current Availability</p>
                <p className="text-gold font-bold">Open for Internships 2026</p>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

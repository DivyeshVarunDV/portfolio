import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Vines from './components/Vines';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <CustomCursor />
      <div className="noise-bg" />
      <Vines />
      
      {/* Dynamic Background Elements - Optimized with radial gradients instead of heavy CSS blur */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10" style={{ willChange: "transform" }}>
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,rgba(229,192,123,0.08),transparent_60%)]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 120, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[90%] h-[90%] rounded-full bg-[radial-gradient(circle_at_center,rgba(43,83,65,0.05),transparent_60%)]" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[20%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(43,83,65,0.03),transparent_50%)]" 
        />
      </div>

      <Navbar />
      
      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full space-y-32 pb-32">
        <Hero />
        <Journey />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Arsenal', href: '#skills' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-pearl/60 backdrop-blur-xl border-b border-emerald/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-xl text-dark tracking-tighter"
        >
          DIVYESH<span className="text-emerald text-2xl">.</span>
        </motion.div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-[11px] font-bold tracking-[0.2em] uppercase text-dark-muted hover:text-emerald transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <motion.a 
            href="mailto:divyeshvarundv@gmail.com"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-emerald text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-emerald-dark transition-all shadow-lg shadow-emerald/20"
          >
            Connect <Send className="w-3 h-3" />
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-20 bg-pearl z-40 md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-[70vh] gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold text-dark"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

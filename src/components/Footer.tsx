const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-emerald/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-semibold text-lg text-dark">
          DIVYESH<span className="text-emerald">.</span>
        </div>
        
        <div className="text-sm text-dark-muted">
          &copy; {new Date().getFullYear()} Divyesh Varun D V. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a href="mailto:divyeshvarundv@gmail.com" className="text-sm text-dark-muted hover:text-emerald transition-colors">
            Email
          </a>
          <a href="https://github.com/DivyeshVarunDV" target="_blank" rel="noreferrer" className="text-sm text-dark-muted hover:text-emerald transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

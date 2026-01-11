import { useState, useEffect } from "react";
import profileImage from "@/assets/profile.jpeg";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <div className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-primary via-blue-400 to-cyan-400 group-hover:scale-105 transition-transform duration-300">
            <img 
              src={profileImage} 
              alt="Bhumika Gohiya" 
              className="w-full h-full rounded-full object-cover border-2 border-white"
            />
          </div>
        </a>
        <div className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1.5 border border-slate-200">
          <a href="#about" className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
            About
          </a>
          <a href="#experience" className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
            Experience
          </a>
          <a href="#achievements" className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
            Credentials
          </a>
          <a href="#contact" className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
};

export default Navigation;

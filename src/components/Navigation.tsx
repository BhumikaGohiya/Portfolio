import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import profileImage from "@/assets/profile.jpeg";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (isHomePage) {
      const element = document.querySelector(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + sectionId);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
        <a href="/" onClick={handleLogoClick} className="flex items-center group">
          <div className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-violet-500 via-purple-500 to-cyan-400 group-hover:scale-105 transition-transform duration-300">
            <img 
              src={profileImage} 
              alt="Bhumika Gohiya" 
              className="w-full h-full rounded-full object-cover border-2 border-white"
            />
          </div>
        </a>
        <div className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1.5 border border-slate-200">
          <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
            About
          </a>
          <a href="#expertise" onClick={(e) => handleNavClick(e, "#expertise")} className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
            Expertise
          </a>
          <a href="#experience" onClick={(e) => handleNavClick(e, "#experience")} className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
            Experience
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")} className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
            Projects
          </a>
          <a href="#achievements" onClick={(e) => handleNavClick(e, "#achievements")} className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
            Credentials
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden md:inline-flex px-5 py-2.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
};

export default Navigation;

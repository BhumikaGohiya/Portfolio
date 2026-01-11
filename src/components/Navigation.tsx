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
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src={profileImage} 
            alt="Bhumika Gohiya" 
            className="w-10 h-10 rounded-full object-cover border-2 border-primary"
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
            Experience
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
};

export default Navigation;

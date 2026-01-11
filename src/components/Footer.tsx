import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm">
          © 2024 Bhumika Gohiya. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/BhumikaGohiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-700 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/bhumikagohiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

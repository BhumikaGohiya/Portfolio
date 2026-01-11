import { ArrowDown, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="animate-fade-up flex-shrink-0">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 p-1">
                <img
                  src={profileImage}
                  alt="Bhumika Gohiya"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-slate-200">
                <MapPin size={16} className="text-red-500" />
                <span className="text-sm font-medium text-slate-700">Ottawa, Canada</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-slate-900">
              Bhumika Gohiya
            </h1>
            <p className="animate-fade-up-delay-1 text-2xl md:text-3xl text-slate-500 mb-6">
              QA Automation Engineer
            </p>
            
            {/* Social Links */}
            <div className="animate-fade-up-delay-2 flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-8">
              <a
                href="https://github.com/BhumikaGohiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-slate-400 hover:shadow-md transition-all"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/bhumikagohiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-slate-400 hover:shadow-md transition-all"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="mailto:bhumikagohiya@example.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-slate-400 hover:shadow-md transition-all"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-slate-400 hover:shadow-md transition-all"
              >
                <Phone size={16} /> Phone
              </a>
            </div>

            <p className="animate-fade-up-delay-2 text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0">
              QA Automation Engineer with over 4 years of experience working on large-scale enterprise and BFSI applications. Strong background in UI and API automation, CI/CD integration, mobile testing, and end-to-end quality assurance.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-slate-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;

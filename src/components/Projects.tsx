import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Brain, BarChart3, MessageSquare, FileText, Building2, Users, Shield, Workflow, Download, GraduationCap, Code, Eye } from "lucide-react";

type ProjectCategory = "academic" | "technical";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("academic");

  const academicProjects = [
    {
      id: "dlt-hospital-workforce",
      title: "DLT-Driven Hospital Workforce Management",
      description: "Master's Thesis & White Paper",
      longDescription: "Analyzed Ontario community hospital hiring inefficiencies using Activity Theory. Delivered a 140+ page thesis and strategic white paper for ConsideraCare with DLT integration roadmap.",
      technologies: ["DLT/Blockchain", "Activity Theory", "ChatGPT", "Prompt Engineering", "Research"],
      icon: Building2,
      color: "from-amber-400 to-orange-400",
      bgColor: "bg-gradient-to-br from-orange-50/80 to-amber-50/60",
      pdfLink: "/documents/DLT-Hospital-Workforce-Management-Thesis.pdf",
      whitePaperLink: "/documents/ConsideraCare-DLT-White-Paper.pdf",
      scope: "Ontario community hospitals",
      magnitude: "50+ sources, 8+ personas, 140+ pages",
      impact: "Strategic DLT implementation roadmap for healthcare HR",
    },
    {
      id: "ai-sentiment-analysis",
      title: "AI Art Sentiment Analysis",
      description: "Data Analytics Project",
      longDescription: "Built an NLP pipeline analyzing 1000+ YouTube comments to understand public perception of AI-generated art with sentiment classification and visual insights.",
      technologies: ["Python", "NLP", "Sentiment Analysis", "YouTube API", "Pandas"],
      icon: Brain,
      color: "from-rose-400 to-pink-400",
      bgColor: "bg-gradient-to-br from-rose-50/80 to-orange-50/60",
      github: "https://github.com/BhumikaGohiya/AI-Art-Sentiment-Analysis",
      scope: "YouTube comment analysis",
      magnitude: "1000+ comments, 15+ videos",
      impact: "Data-driven insights on AI art perception",
    },
  ];

  const technicalProjects = [
    {
      id: undefined as string | undefined,
      title: "Coming Soon: API Test Automation Framework",
      description: "Technical Project",
      longDescription: "A comprehensive REST API testing framework built with Rest Assured, featuring data-driven testing, CI/CD integration with Jenkins, and detailed reporting.",
      technologies: ["Java", "Rest Assured", "TestNG", "Jenkins", "Maven"],
      icon: Code,
      color: "from-amber-400 to-yellow-400",
      bgColor: "bg-gradient-to-br from-amber-50/80 to-yellow-50/60",
      github: undefined as string | undefined,
      pdfLink: undefined as string | undefined,
      whitePaperLink: undefined as string | undefined,
      scope: "REST API Testing",
      magnitude: "Multi-endpoint coverage",
      impact: "Automated regression testing",
    },
    {
      id: undefined as string | undefined,
      title: "Coming Soon: Selenium UI Automation Suite",
      description: "Technical Project",
      longDescription: "Page Object Model based UI automation framework using Selenium WebDriver with cross-browser testing capabilities and parallel execution.",
      technologies: ["Selenium", "Java", "Cucumber", "BDD", "TestNG"],
      icon: Code,
      color: "from-orange-400 to-red-400",
      bgColor: "bg-gradient-to-br from-orange-50/80 to-rose-50/60",
      github: undefined as string | undefined,
      pdfLink: undefined as string | undefined,
      whitePaperLink: undefined as string | undefined,
      scope: "UI Automation",
      magnitude: "Cross-browser, parallel execution",
      impact: "Reduced manual testing effort",
    },
  ];

  const projects = activeCategory === "academic" ? academicProjects : technicalProjects;

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-medium rounded-full mb-4">
            Featured Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Projects
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
            Academic research and technical projects showcasing my skills in automation, data analytics, and innovation
          </p>

          {/* Category Tabs */}
          <div className="inline-flex items-center gap-2 p-1.5 bg-slate-100 rounded-full">
            <button
              onClick={() => setActiveCategory("academic")}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeCategory === "academic"
                  ? "bg-white text-violet-700 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <GraduationCap size={18} />
              Academic Projects
            </button>
            <button
              onClick={() => setActiveCategory("technical")}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeCategory === "technical"
                  ? "bg-white text-violet-700 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Code size={18} />
              Technical Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative ${project.bgColor} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500`}
            >
              {/* Background Decoration */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${project.color} opacity-10 rounded-bl-full`} />

              <div className="relative p-8">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-semibold rounded-full`}>
                    {project.description}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.longDescription}
                </p>

                {/* Scope, Magnitude, Impact */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="font-semibold text-violet-600 min-w-[70px]">Scope:</span>
                    <span>{project.scope}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="font-semibold text-cyan-600 min-w-[70px]">Magnitude:</span>
                    <span>{project.magnitude}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="font-semibold text-emerald-600 min-w-[70px]">Impact:</span>
                    <span>{project.impact}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-600 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-500">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {project.id && (
                    <Link
                      to={`/project/${project.id}`}
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white font-medium text-sm rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300`}
                    >
                      <Eye size={16} />
                      View Details
                    </Link>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium text-sm rounded-full hover:shadow-md transition-all duration-300"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                  {project.pdfLink && (
                    <a
                      href={project.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium text-sm rounded-full hover:shadow-md transition-all duration-300"
                    >
                      <Download size={16} />
                      PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

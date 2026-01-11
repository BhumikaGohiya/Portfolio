import { ExternalLink, Github, Brain, BarChart3, MessageSquare } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Art Sentiment Analysis",
      description: "Analyzing YouTube comments to understand public perceptions of AI-generated art using NLP and sentiment analysis techniques.",
      longDescription: "Built a comprehensive sentiment analysis pipeline to analyze thousands of YouTube comments, extracting insights about how people perceive AI-generated artwork. Implemented text preprocessing, sentiment classification, and data visualization.",
      technologies: ["Python", "NLP", "Sentiment Analysis", "YouTube API", "Data Visualization"],
      icon: Brain,
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50",
      github: "https://github.com/BhumikaGohiya/AI-Art-Sentiment-Analysis",
      highlights: [
        { icon: MessageSquare, text: "YouTube Comment Analysis" },
        { icon: BarChart3, text: "Sentiment Classification" },
        { icon: Brain, text: "NLP Techniques" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-medium rounded-full mb-4">
            Featured Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Projects
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Side projects and explorations beyond automation — applying technical skills to solve interesting problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative ${project.bgColor} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500`}
            >
              {/* Background Decoration */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${project.color} opacity-10 rounded-bl-full`} />
              <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr ${project.color} opacity-5 rounded-tr-full`} />

              <div className="relative p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <project.icon size={28} className="text-white" />
                    </div>
                    
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {project.longDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300`}
                    >
                      <Github size={20} />
                      View on GitHub
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  {/* Highlights Card */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <h4 className="font-display text-lg font-bold text-slate-900 mb-4">Key Highlights</h4>
                    <div className="space-y-4">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                            <highlight.icon size={20} className="text-white" />
                          </div>
                          <span className="font-medium text-slate-700">{highlight.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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

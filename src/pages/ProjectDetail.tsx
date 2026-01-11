import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, FileText, Github, ExternalLink, Target, TrendingUp, Zap, BookOpen, Users, Shield, Workflow, Brain, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type ProjectData = {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  scope: {
    title: string;
    points: string[];
  };
  magnitude: {
    title: string;
    points: string[];
  };
  impact: {
    title: string;
    points: string[];
  };
  overview: string[];
  methodology?: string[];
  keyFindings?: string[];
  technologies: string[];
  stats?: { label: string; value: string }[];
  pdfLink?: string;
  whitePaperLink?: string;
  github?: string;
  diagrams?: { title: string; description: string; type: "activity" | "process" | "flow" }[];
};

const projectsData: Record<string, ProjectData> = {
  "dlt-hospital-workforce": {
    title: "DLT-Driven Hospital Workforce Management",
    subtitle: "Master's Thesis & White Paper for ConsideraCare",
    description: "Explored Distributed Ledger Technology (DLT) to transform hospital hiring and onboarding processes using Activity Theory as a framework.",
    category: "Master's Thesis & White Paper",
    scope: {
      title: "Scope",
      points: [
        "Map and analyze hiring/onboarding processes in Ontario community hospitals",
        "Apply Activity Theory to identify systemic contradictions and inefficiencies",
        "Leverage ChatGPT for qualitative text analytics on grey literature sources",
        "Develop comprehensive personas from consultant websites, articles, and YouTube videos",
        "Create strategic white paper with DLT integration recommendations for ConsideraCare",
      ],
    },
    magnitude: {
      title: "Magnitude",
      points: [
        "Analyzed 50+ grey literature sources including vlogs, articles, and YouTube transcripts",
        "Developed 8+ detailed personas representing healthcare hiring stakeholders",
        "Identified 15+ contradictions using Engeström's Activity Theory framework",
        "Produced comprehensive 140+ page research thesis",
        "Delivered strategic white paper for industry partner ConsideraCare",
      ],
    },
    impact: {
      title: "Impact",
      points: [
        "Provides actionable DLT implementation roadmap for healthcare staffing",
        "Addresses credential verification delays through blockchain solutions",
        "Proposes smart contracts for automated onboarding workflows",
        "Enhances transparency and reduces errors in hospital HR processes",
        "Supports ConsideraCare's mission to improve senior care services",
      ],
    },
    overview: [
      "This research explores the potential of integrating Distributed Ledger Technology (DLT) to address inefficiencies in community hospital hiring and onboarding processes in Ontario.",
      "Using Activity Theory as a framework, the study identifies contradictions and areas for improvement through a novel qualitative approach leveraging ChatGPT for text analytics.",
      "The primary deliverable is a strategic white paper mapping identified inefficiencies against DLT applications, providing actionable insights tailored for ConsideraCare.",
    ],
    methodology: [
      "Literature Analysis: Comprehensive review across DLT in healthcare, ChatGPT for research, Activity Theory, and white paper development",
      "Grey Literature Mining: Extracted insights from consultant websites, YouTube vlogs, and industry articles",
      "Persona Development: Created detailed stakeholder personas using ChatGPT-driven analysis",
      "Activity System Modeling: Applied Engeström's Activity Theory to map baseline processes",
      "Contradiction Identification: Classified frustrations using primary, secondary, tertiary, and quaternary contradiction types",
      "DLT Solution Mapping: Aligned blockchain capabilities with identified process inefficiencies",
    ],
    keyFindings: [
      "Fragmented hiring processes cause significant delays in filling critical healthcare roles",
      "Credential verification is a major bottleneck due to manual, paper-based systems",
      "Communication gaps between HR, department heads, and new hires create onboarding friction",
      "DLT can provide immutable credential storage reducing verification time by up to 70%",
      "Smart contracts can automate compliance checks and onboarding task sequences",
    ],
    technologies: ["DLT/Blockchain", "Activity Theory", "ChatGPT", "Prompt Engineering", "Text Analytics", "Qualitative Research", "Persona Development", "Process Modeling"],
    stats: [
      { label: "Literature Sources", value: "50+" },
      { label: "Personas Developed", value: "8+" },
      { label: "Contradictions Found", value: "15+" },
      { label: "Report Pages", value: "140+" },
    ],
    pdfLink: "/documents/DLT-Hospital-Workforce-Management-Thesis.pdf",
    whitePaperLink: "/documents/ConsideraCare-DLT-White-Paper.pdf",
    diagrams: [
      {
        title: "Activity Theory Framework",
        description: "Engeström's Activity System model showing subject-object-outcome relationships with mediating artifacts, rules, community, and division of labor.",
        type: "activity",
      },
      {
        title: "Baseline Hiring Process",
        description: "Current state workflow mapping the hiring journey from job posting through final onboarding, highlighting identified bottlenecks.",
        type: "process",
      },
      {
        title: "DLT-Integrated Solution",
        description: "Revised activity system incorporating blockchain for credential verification and smart contracts for automated workflows.",
        type: "flow",
      },
    ],
  },
  "ai-sentiment-analysis": {
    title: "AI Art Sentiment Analysis",
    subtitle: "Data Analytics Project",
    description: "Built a sentiment analysis pipeline analyzing thousands of YouTube comments to understand public perception of AI-generated art.",
    category: "Data Analytics Project",
    scope: {
      title: "Scope",
      points: [
        "Extract and analyze YouTube comments on AI-generated art videos",
        "Build NLP pipeline for sentiment classification",
        "Implement text preprocessing and data cleaning workflows",
        "Create visual insights dashboard for pattern identification",
        "Generate actionable insights on public AI art perception",
      ],
    },
    magnitude: {
      title: "Magnitude",
      points: [
        "Analyzed 1000+ YouTube comments across multiple videos",
        "Processed text data through multi-stage NLP pipeline",
        "Applied sentiment classification algorithms",
        "Generated comprehensive visualization suite",
        "Extracted key themes and opinion patterns",
      ],
    },
    impact: {
      title: "Impact",
      points: [
        "Revealed public sentiment trends toward AI-generated artwork",
        "Identified key concerns: authenticity, creativity, artist displacement",
        "Provided data-driven insights for AI art discourse",
        "Demonstrated practical NLP application for social media analysis",
        "Created reusable sentiment analysis framework",
      ],
    },
    overview: [
      "This project applies natural language processing techniques to understand how the public perceives AI-generated art through analysis of YouTube comments.",
      "The pipeline includes data extraction via YouTube API, text preprocessing, sentiment classification, and data visualization.",
      "Results reveal nuanced public opinions ranging from fascination to concern about AI's role in creative industries.",
    ],
    technologies: ["Python", "NLP", "Sentiment Analysis", "YouTube API", "Data Visualization", "Pandas", "NLTK"],
    stats: [
      { label: "Comments Analyzed", value: "1000+" },
      { label: "Videos Processed", value: "15+" },
      { label: "Sentiment Categories", value: "3" },
      { label: "Visualizations", value: "10+" },
    ],
    github: "https://github.com/BhumikaGohiya/AI-Art-Sentiment-Analysis",
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Project not found</h1>
          <Link to="/#projects" className="text-violet-600 hover:underline">
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const DiagramIcon = ({ type }: { type: "activity" | "process" | "flow" }) => {
    switch (type) {
      case "activity":
        return <Users className="text-violet-600" size={24} />;
      case "process":
        return <Workflow className="text-cyan-600" size={24} />;
      case "flow":
        return <Shield className="text-emerald-600" size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-violet-600 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-medium rounded-full mb-4">
            {project.category}
          </span>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {project.title}
          </h1>

          <p className="text-xl text-slate-600 mb-8 max-w-3xl">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {project.pdfLink && (
              <a
                href={project.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Download size={20} />
                Download Thesis
              </a>
            )}
            {project.whitePaperLink && (
              <a
                href={project.whitePaperLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-violet-200 text-violet-700 font-semibold rounded-full hover:border-violet-400 hover:shadow-md transition-all duration-300"
              >
                <FileText size={20} />
                View White Paper
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 hover:shadow-lg transition-all duration-300"
              >
                <Github size={20} />
                View on GitHub
              </a>
            )}
          </div>

          {/* Stats */}
          {project.stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                >
                  <p className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Scope, Magnitude, Impact */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Scope */}
            <div className="bg-gradient-to-br from-violet-50 to-violet-100/50 rounded-3xl p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center mb-4">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-4">
                {project.scope.title}
              </h3>
              <ul className="space-y-3">
                {project.scope.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Magnitude */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100/50 rounded-3xl p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-4">
                {project.magnitude.title}
              </h3>
              <ul className="space-y-3">
                {project.magnitude.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-3xl p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-4">
                {project.impact.title}
              </h3>
              <ul className="space-y-3">
                {project.impact.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={28} className="text-violet-600" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
              Project Overview
            </h2>
          </div>
          <div className="prose prose-slate max-w-none">
            {project.overview.map((paragraph, index) => (
              <p key={index} className="text-slate-600 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      {project.methodology && (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Workflow size={28} className="text-cyan-600" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                Research Methodology
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {project.methodology.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-slate-700 text-sm leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Findings */}
      {project.keyFindings && (
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Brain size={28} className="text-violet-600" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                Key Findings
              </h2>
            </div>
            <div className="space-y-4">
              {project.keyFindings.map((finding, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-gradient-to-r from-violet-50 to-cyan-50 rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <BarChart3 size={20} className="text-violet-600" />
                  </div>
                  <p className="text-slate-700 leading-relaxed">{finding}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Diagrams */}
      {project.diagrams && (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Workflow size={28} className="text-emerald-600" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                Framework & Process Diagrams
              </h2>
            </div>
            <p className="text-slate-600 mb-8">
              Key visual frameworks from the research (see full thesis PDF for detailed diagrams)
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {project.diagrams.map((diagram, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                    <DiagramIcon type={diagram.type} />
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-900 mb-2">
                    {diagram.title}
                  </h4>
                  <p className="text-sm text-slate-600">{diagram.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Technologies & Methods Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-violet-100 to-cyan-100 rounded-full text-sm font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
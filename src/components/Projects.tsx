import ProjectCard from "./ProjectCard";
import projectImage1 from "@/assets/project-1.jpg";

const projects = [
  {
    title: "AI Art Sentiment Analysis",
    category: "Machine Learning & NLP",
    description: "Built an AI-powered sentiment analysis tool that analyzes emotions and sentiments in art using natural language processing and deep learning techniques.",
    image: projectImage1,
    github: "https://github.com/BhumikaGohiya/AI-Art-Sentiment-Analysis",
  },
];

const Projects = () => {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Selected work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Projects & Experience
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

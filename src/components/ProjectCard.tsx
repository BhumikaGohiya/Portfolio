import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  index: number;
  github?: string;
}

const ProjectCard = ({ title, category, description, image, index, github }: ProjectCardProps) => {
  return (
    <div 
      className="group hover-lift bg-card rounded-2xl overflow-hidden border border-border"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-primary text-sm font-medium mb-2">{category}</p>
        <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Github size={18} /> View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

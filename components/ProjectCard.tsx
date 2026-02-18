interface ProjectCardProps {
  name: string;
  tagline: string;
  description: string;
  url: string;
}

export default function ProjectCard({ name, tagline, description, url }: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-card-accent" />
      <h2 className="project-card-name">{name}</h2>
      <p className="project-card-tagline">{tagline}</p>
      <p className="project-card-description">{description}</p>
      <span className="project-card-link">
        {url.replace('https://', '')} →
      </span>
    </a>
  );
}

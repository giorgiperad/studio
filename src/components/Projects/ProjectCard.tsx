import React from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, tags }) => (
  <div className="project-card">
    <div className="project-image-wrapper">
      <img src={image} alt={title} className="project-image" />
      <div className="project-overlay">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            ნახე პროექტი
          </a>
        )}
      </div>
    </div>
    <div className="project-info">
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      {tags && (
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="project-tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default ProjectCard;

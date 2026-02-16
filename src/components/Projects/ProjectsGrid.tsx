import React from "react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

export interface ProjectsGridProps {
  projects: ProjectCardProps[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => (
  <section className="section" id="work">
    <h2 className="section-title">პროექტები</h2>
    <div className="bento-grid">
      {projects.map((project, idx) => (
        <div key={idx} className="bento-item">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsGrid;

import { Project } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'

interface ProjectSectionProps {
  projects: Project[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section id="projects">
      <SectionHeading title="// პროექტები" />

      <div className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.priority}
            title={project.title}
            description={project.shortDescription}
            image={project.cover}
            link={project.livePreview}
            tags={project.type ? [project.type] : []}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection

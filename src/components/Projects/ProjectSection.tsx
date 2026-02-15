import { Project } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'
import BentoGrid from './BentoGrid'

interface ProjectSectionProps {
  projects: Project[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section id="projects">
      <SectionHeading title="// პროექტები" />

      <div className="my-8 md:my-12">
        <BentoGrid>
          {projects.map((project, idx) => (
            <ProjectCard key={project.priority} data={project} idx={idx} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

export default ProjectSection

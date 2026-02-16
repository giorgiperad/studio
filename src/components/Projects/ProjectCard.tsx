import { Project } from '@/lib/types'
import useBentoMouseSpotlight from '../VisualFX/useBentoMouseSpotlight'
import Image from 'next/image'
import { Earning, GithubIcon, Likes, PreviewIcon, Star, Timer } from '../../utils/icons'
import { cn } from '@/utils/index'

const IconText: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <li className="flex gap-2">
    <Image src={icon} alt={text} className="size-[18px] md:size-5" />
    <span className="text-neutral text-sm">{text}</span>
  </li>
)

interface ProjectCardProps {
  data: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const {
    title,
    shortDescription,
    visitors,
    earned,
    ratings,
    githubStars,
    numberOfSales,
    livePreview,
    githubLink,
    siteAge,
    type,
    cover,
  } = data

  const handleMouseMove = useBentoMouseSpotlight();
    return (
      <div className={cn(
        "glass-card bento-item project-card group relative flex flex-col justify-between transition-all duration-300 cursor-pointer",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      style={style}
      tabIndex={0}
      aria-label={project.title}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
            <h3 className="text-accent text-xl font-extrabold md:text-2xl drop-shadow">{title}</h3>
            {type && (
              <span
                className={`h-7 w-fit rounded-md bg-accent/20 p-1 text-sm ${type === 'New 🔥' ? 'animate-blink text-tag' : 'text-accent'} backdrop-blur-[80px] font-bold`}
              >
                {type}
              </span>
            )}
          </div>
          <ul className="mt-3 flex flex-col flex-wrap gap-2 sm:flex-row sm:gap-4">
            {(visitors || numberOfSales) && (
              <IconText text={(visitors || numberOfSales)?.toString() || ''} icon={Likes} />
            )}
            {siteAge && <IconText text={siteAge} icon={Timer} />}
            {earned && <IconText text={earned} icon={Earning} />}
            {(ratings || githubStars) && (
              <IconText text={(ratings || githubStars)?.toString() || ''} icon={Star} />
            )}
          </ul>
        </div>
        <figure className="flex justify-end overflow-hidden">
          <Image
            src={cover}
            width={150}
            height={80}
            alt="Project Cover"
            className="h-[80px] w-[150px] rounded-md object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F]"
          />
        </figure>
      </div>

      <div>
        <div className="bg-primary/80 text-primary-content my-4 h-[100px] overflow-y-auto rounded-2xl px-4 py-2 shadow-inner">
          <p className="text-base font-medium md:text-lg opacity-90">{shortDescription}</p>
        </div>
        <div className="flex gap-5 mt-2">
          {livePreview && (
            <a
              href={livePreview}
              className="text-accent flex gap-2 text-base underline underline-offset-[3px] transition-all duration-150 ease-linear hover:scale-110 font-semibold"
              target="_blank">
              <PreviewIcon className="h-auto w-[18px] md:w-5" />
              <span>Live Preview</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className="text-accent flex gap-2 text-base underline underline-offset-[3px] transition-all duration-150 ease-linear hover:scale-110 font-semibold"
              target="_blank">
              <GithubIcon className="w-[18px] md:w-5" />
              <span>Github Link</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

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
        // ...existing code...
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

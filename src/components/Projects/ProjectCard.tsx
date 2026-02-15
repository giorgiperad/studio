
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/lib/types'
import Image from 'next/image'
import { Earning, GithubIcon, Likes, PreviewIcon, Star, Timer } from '../../utils/icons'
"use client"
"use client"
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/lib/types'
import Image from 'next/image'
import { Earning, GithubIcon, Likes, PreviewIcon, Star, Timer } from '../../utils/icons'

const IconText: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <li className="flex gap-2">
    <Image src={icon} alt={text} className="size-[18px] md:size-5" />
    <span className="text-neutral text-sm">{text}</span>
  </li>
)

interface ProjectCardProps {
  data: Project
  idx?: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, idx = 0 }) => {
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

  // 3D tilt and glow border effect
  const cardRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    function onMouseMove(e: MouseEvent) {
      if (!el) return;
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.04)`
      el.style.boxShadow = `0 0 32px 2px #00fff7, 0 2px 24px 0 #1a1a2e` // neon glow
    }
    function onMouseLeave() {
      if (!el) return;
      el.style.transform = ''
      el.style.boxShadow = ''
    }
    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)
    return () => {
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])
  return (
    <motion.div
      ref={cardRef}
      className={`glass-card bg-white/10 backdrop-blur-lg border border-white/10 flex flex-col justify-between rounded-2xl shadow-xl p-6 transition-transform duration-300 hover:scale-[1.02] ${idx % 5 === 0 ? 'md:col-span-3' : 'md:col-span-2'}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.12, duration: 0.7, ease: 'easeOut' }}
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
        <figure className="flex justify-end overflow-hidden group">
          <Image
            src={cover}
            width={150}
            height={80}
            alt="Project Cover"
            className="h-[80px] w-[150px] rounded-md object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F] group-hover:scale-110 group-hover:blur-[2px] transition-all duration-300"
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
    </motion.div>
  )
}

export default ProjectCard

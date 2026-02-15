'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const MarqueeWrapper = dynamic(() => import('../Marquee/MarqueeWrapper'), { ssr: false })

type SkillsProps = {
  skills: { name: string; icon: string }[]
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <MarqueeWrapper className="from-primary/80 to-accent/40 via-marquee bg-gradient-to-r rounded-2xl shadow-lg p-4">
      <div className="flex gap-8 lg:gap-24">
        {skills.map(({ name, icon }, index) => (
          <span
            key={index}
            className="font-inter text-primary-content flex items-center text-base lg:text-xl font-semibold drop-shadow">
            <Image src={icon} alt={name} className="mx-2 size-11 lg:size-14 drop-shadow-lg" />
            {name}
          </span>
        ))}
      </div>
    </MarqueeWrapper>
  )
}

export default Skills

'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
import Ellipse from './Ellipse'
import useBentoMouseSpotlight from '../VisualFX/useBentoMouseSpotlight'
import ScrollIndicator from '../VisualFX/ScrollIndicator'

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const role = useRoleSwitcher({ roles: ['FULLSTACK DEVELOPER', 'INDIE HACKER', 'SOLOPRENEUR'] })

  const handleMouseMove = useBentoMouseSpotlight();
  return (
    <section className="relative min-h-[calc(100dvh-4rem)] bg-gradient-to-br from-primary/80 via-primary/60 to-accent/30 bg-no-repeat overflow-hidden">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-16 pb-14 md:grid-cols-2 lg:p-8">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem] glass-card bento-item shadow-xl rounded-3xl p-8 backdrop-blur-md bg-white/10 border border-white/10" onMouseMove={handleMouseMove}>
          <h1 className="fadeInUp stagger-1">
            <span className="hero-gradient-text mb-2 block text-4xl font-extrabold drop-shadow-lg tracking-tight display-font">გამარჯობა - მე ვარ ჯონ დოუ</span>
            <span className="hero-gradient-text block text-[2rem] font-black display-font">{role}</span>
          </h1>

          <h2 className="fadeInUp stagger-2 text-neutral mt-4 text-xl font-medium opacity-90 drop-shadow-sm">
            ინოვაციური გადაწყვეტილებების შექმნა რეალური პრობლემების გადასაჭრელად
          </h2>

          <div className="mt-8 flex flex-wrap gap-6 fadeInUp stagger-3">
            <a
              href="#"
              aria-label="დამიკავშირდით"
              className="btn-primary min-w-32 cursor-pointer text-center text-base focus:ring-2 focus:ring-accent/60">
              დამიქირავე
            </a>
            <a
              href="#"
              aria-label="LinkedIn პროფილის ნახვა"
              className="btn-primary bg-secondary text-neutral hover:bg-secondary/100 cursor-pointer text-base focus:ring-2 focus:ring-accent/40">
              LinkedIn პროფილი
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-accent/30 via-primary/20 to-white/10 blur-2xl opacity-80 z-0" />
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 400px, (min-width: 768px) 350px, (min-width: 640px) 300px, 260px"
              alt="John Doe - Full Stack Developer"
              className="object-cover rounded-[2.5rem] p-0 relative z-10 drop-shadow-2xl"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 w-full h-full rounded-[2.5rem] transition-transform duration-500 ease-out text-accent/60 z-20"
            />
          </div>
        </div>
        <ScrollIndicator />
      </div>
    </section>
  import ScrollIndicator from '../VisualFX/ScrollIndicator'
  )
}

export default Hero

'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
import Ellipse from './Ellipse'

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const role = useRoleSwitcher({ roles: ['FULLSTACK DEVELOPER', 'INDIE HACKER', 'SOLOPRENEUR'] })

  return (
    <section className="hero relative min-h-screen overflow-hidden" style={{ background: 'var(--dark)' }}>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-16 pb-14 md:grid-cols-2 lg:p-8">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem] glass-card shadow-xl rounded-3xl p-8 backdrop-blur-md bg-white/10 border border-white/10">
          <h1>
            <span className="text-neutral mb-2 block text-4xl font-extrabold drop-shadow-lg tracking-tight">გამარჯობა - მე ვარ ჯონ დოუ</span>
            <span className="text-accent block text-[2rem] font-black animate-gradient-x bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">{role}</span>
          </h1>

          <h2 className="text-neutral mt-4 text-xl font-medium opacity-90 drop-shadow-sm">
            ინოვაციური გადაწყვეტილებების შექმნა რეალური პრობლემების გადასაჭრელად
          </h2>

          <div className="mt-8 flex flex-wrap gap-6">
            <a
              href="#"
              aria-label="დამიკავშირდით"
              className="bg-accent/90 hover:bg-accent/100 min-w-32 cursor-pointer rounded-xl px-6 py-3 text-center text-base font-semibold text-[#00071E] shadow-lg transition-all duration-300 focus:ring-2 focus:ring-accent/60">
              დამიქირავე
            </a>
            <a
              href="#"
              aria-label="LinkedIn პროფილის ნახვა"
              className="text-neutral bg-secondary/80 hover:bg-secondary/100 cursor-pointer rounded-xl px-6 py-3 text-base font-semibold shadow-md transition-all duration-300 focus:ring-2 focus:ring-accent/40">
              LinkedIn პროფილი
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-primary/20 to-white/10 blur-2xl opacity-80 z-0" />
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="John Doe - Full Stack Developer"
              className="object-contain p-7 relative z-10 drop-shadow-2xl"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem] text-accent/60 z-20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

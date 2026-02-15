'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
import Ellipse from './Ellipse'
import ParticlesBackground from './ParticlesBackground'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const roles = ['FULLSTACK DEVELOPER', 'INDIE HACKER', 'SOLOPRENEUR']
  const [roleIdx, setRoleIdx] = useState(0)
  const [typed, setTyped] = useState('')
  useEffect(() => {
    let timeout: NodeJS.Timeout
    let char = 0
    setTyped('')
    function type() {
      setTyped(roles[roleIdx].slice(0, char + 1))
      if (char < roles[roleIdx].length - 1) {
        char++
        timeout = setTimeout(type, 60)
      } else {
        setTimeout(() => {
          setRoleIdx((i) => (i + 1) % roles.length)
        }, 1200)
      }
    }
    type()
    return () => clearTimeout(timeout)
  }, [roleIdx])

  return (
    <section className="relative min-h-[calc(100dvh-4rem)] bg-gradient-to-br from-primary/80 via-primary/60 to-accent/30 bg-no-repeat overflow-hidden">
      <ParticlesBackground />
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-16 pb-14 md:grid-cols-2 lg:p-8 relative z-10">
        <motion.div
          className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem] glass-card shadow-xl rounded-3xl p-8 backdrop-blur-md bg-white/10 border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            className="mb-2 block text-4xl font-extrabold drop-shadow-lg tracking-tight"
          >
            {"გამარჯობა - მე ვარ ჯონ დოუ".split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="text-neutral"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.span
            className="block text-accent text-[2rem] font-black animate-gradient-x bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent h-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {typed}
            <span className="animate-pulse">|</span>
          </motion.span>
          <motion.h2
            className="text-neutral mt-4 text-xl font-medium opacity-90 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.7 }}
          >
            ინოვაციური გადაწყვეტილებების შექმნა რეალური პრობლემების გადასაჭრელად
          </motion.h2>
          <div className="mt-8 flex flex-wrap gap-6">
            <MagneticButton>
              <a
                href="#"
                aria-label="დამიკავშირდით"
                className="bg-accent/90 hover:bg-accent/100 min-w-32 cursor-pointer rounded-xl px-6 py-3 text-center text-base font-semibold text-[#00071E] shadow-lg transition-all duration-300 focus:ring-2 focus:ring-accent/60"
              >
                დამიქირავე
              </a>
            </MagneticButton>
            <a
              href="#"
              aria-label="LinkedIn პროფილის ნახვა"
              className="text-neutral bg-secondary/80 hover:bg-secondary/100 cursor-pointer rounded-xl px-6 py-3 text-base font-semibold shadow-md transition-all duration-300 focus:ring-2 focus:ring-accent/40"
            >
              LinkedIn პროფილი
            </a>
          </div>
        </motion.div>
        <ParallaxImage>
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
        </ParallaxImage>
      </div>
      <ScrollIndicator />
    </section>
  )
// MagneticButton: Button that attracts the cursor
const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    function onMouseMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
    }
    function onMouseLeave() {
      el.style.transform = ''
    }
    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)
    return () => {
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])
  return <div ref={ref} className="inline-block transition-transform duration-200">{children}</div>
}

// ParallaxImage: 3D floating effect on mouse move
const ParallaxImage = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    function onMouseMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 16}deg) scale(1.04)`
    }
    function onMouseLeave() {
      el.style.transform = ''
    }
    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)
    return () => {
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])
  return <div ref={ref} className="transition-transform duration-300 will-change-transform">{children}</div>
}

// ScrollIndicator: Animated scroll down indicator
const ScrollIndicator = () => (
  <div className="absolute left-1/2 bottom-8 -translate-x-1/2 z-20 flex flex-col items-center">
    <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-accent/80 to-accent/0 animate-bounce mb-2" />
    <span className="text-xs text-accent/80 animate-pulse">Scroll</span>
  </div>
)
}

export default Hero

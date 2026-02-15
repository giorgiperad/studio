"use client"
import { useEffect } from 'react'

export default function FilmGrain() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!document.querySelector('.film-grain')) {
      const grain = document.createElement('div')
      grain.className = 'film-grain'
      Object.assign(grain.style, {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.3,
        backgroundImage:
          "url(data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E)",
      })
      document.body.appendChild(grain)
    }
    return () => {
      const grain = document.querySelector('.film-grain')
      if (grain) grain.remove()
    }
  }, [])
  return null
}

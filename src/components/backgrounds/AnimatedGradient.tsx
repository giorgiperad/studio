"use client"
import { useEffect } from 'react'

export default function AnimatedGradient() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!document.querySelector('.animated-gradient-bg')) {
      const bg = document.createElement('div')
      bg.className = 'animated-gradient-bg'
      Object.assign(bg.style, {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        pointerEvents: 'none',
        background: 'linear-gradient(45deg, #1a0033, #0a1929, #002244, #1a0033)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
      })
      document.body.appendChild(bg)
    }
    return () => {
      const bg = document.querySelector('.animated-gradient-bg')
      if (bg) bg.remove()
    }
  }, [])
  return null
}

// Add this to your global CSS if not present:
// @keyframes gradientShift {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }

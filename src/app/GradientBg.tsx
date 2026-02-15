import { useEffect } from 'react'

export default function GradientBg() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!document.querySelector('.gradient-bg')) {
      const bg = document.createElement('div')
      bg.className = 'gradient-bg'
      document.body.appendChild(bg)
    }
    return () => {
      const bg = document.querySelector('.gradient-bg')
      if (bg) bg.remove()
    }
  }, [])
  return null
}

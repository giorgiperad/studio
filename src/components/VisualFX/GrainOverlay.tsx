"use client"
import { useEffect } from 'react'

export default function GrainOverlay() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!document.querySelector('.grain')) {
      const grain = document.createElement('div')
      grain.className = 'grain'
      document.body.appendChild(grain)
    }
    return () => {
      const grain = document.querySelector('.grain')
      if (grain) grain.remove()
    }
  }, [])
  return null
}

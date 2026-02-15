import { useEffect, useRef } from 'react'

export default function ParticleBg() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let dpr = window.devicePixelRatio || 1
    let width = window.innerWidth
    let height = window.innerHeight
    let particles = []
    const PARTICLE_COUNT = window.innerWidth < 768 ? 40 : 90
    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
    }
    resize()
    window.addEventListener('resize', resize)
    // Particle system
    class Particle {
      x: number; y: number; vx: number; vy: number; r: number
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.7
        this.vy = (Math.random() - 0.5) * 0.7
        this.r = 2 + Math.random() * 2
      }
      move() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x * dpr, this.y * dpr, this.r * dpr, 0, 2 * Math.PI)
        ctx.fillStyle = 'rgba(0,255,255,0.5)'
        ctx.fill()
      }
    }
    particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle())
    function animate() {
      ctx.clearRect(0, 0, width * dpr, height * dpr)
      // Draw lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(a.x * dpr, a.y * dpr)
            ctx.lineTo(b.x * dpr, b.y * dpr)
            ctx.strokeStyle = `rgba(0,255,255,${0.5 - dist / 300})`
            ctx.lineWidth = 1 * dpr
            ctx.stroke()
          }
        }
      }
      // Draw particles
      for (const p of particles) {
        p.move()
        p.draw(ctx)
      }
      requestAnimationFrame(animate)
    }
    animate()
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])
  return <canvas ref={ref} style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:-1,pointerEvents:'none'}} />
}

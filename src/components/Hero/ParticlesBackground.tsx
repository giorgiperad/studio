import { useEffect, useRef } from 'react'

// Simple animated canvas particles background for Hero section
const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const dpr = window.devicePixelRatio || 1
    const width = window.innerWidth
    const height = window.innerHeight
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.5 + Math.random() * 2.5,
      dx: -0.5 + Math.random(),
      dy: -0.5 + Math.random(),
      alpha: 0.2 + Math.random() * 0.5,
    }))

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI)
        ctx.fillStyle = 'rgba(0,255,255,0.7)'
        ctx.shadowColor = '#00fff7'
        ctx.shadowBlur = 16
        ctx.fill()
        ctx.restore()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > width) p.dx *= -1
        if (p.y < 0 || p.y > height) p.dy *= -1
      }
      animationId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}

export default ParticlesBackground

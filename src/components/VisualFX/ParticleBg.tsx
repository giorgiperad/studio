"use client";

import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 80;
const PARTICLE_COLOR = 'rgba(0,255,255,0.5)';
const LINE_COLOR = 'rgba(0,255,255,0.5)';
const PARTICLE_RADIUS = 2;
const LINE_DISTANCE = 150;
const OPACITY = 0.4;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const ParticleBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      vx: randomBetween(-0.7, 0.7),
      vy: randomBetween(-0.7, 0.7),
    }));

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', resize);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, PARTICLE_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.globalAlpha = OPACITY;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      // Draw lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = LINE_COLOR;
            ctx.globalAlpha = OPACITY * (1 - dist / LINE_DISTANCE);
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    }

    function update() {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        // Bounce off edges
        if (p.x <= PARTICLE_RADIUS || p.x >= width - PARTICLE_RADIUS) p.vx *= -1;
        if (p.y <= PARTICLE_RADIUS || p.y >= height - PARTICLE_RADIUS) p.vy *= -1;
        // Clamp
        p.x = Math.max(PARTICLE_RADIUS, Math.min(width - PARTICLE_RADIUS, p.x));
        p.y = Math.max(PARTICLE_RADIUS, Math.min(height - PARTICLE_RADIUS, p.y));
      }
    }

    function animate() {
      update();
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        opacity: OPACITY,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};

export default ParticleBg;
"use client"
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
    let particles: Particle[] = []
    const PARTICLE_COUNT = window.innerWidth < 768 ? 40 : 90
    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      if (!canvas) return
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
      if (!ctx) return
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

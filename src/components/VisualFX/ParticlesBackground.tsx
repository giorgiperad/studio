"use client";
import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 80;
const PARTICLE_COLOR = "rgba(0,255,255,0.5)";
const LINE_COLOR = "rgba(0,255,255,0.2)";
const MAX_DISTANCE = 150;

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx?.scale(dpr, dpr);

    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: random(0, width),
      y: random(0, height),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    function draw() {
      ctx?.clearRect(0, 0, width, height);
      // Draw lines
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const a = particles.current[i];
          const b = particles.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DISTANCE) {
            ctx!.strokeStyle = LINE_COLOR;
            ctx!.globalAlpha = 1 - dist / MAX_DISTANCE;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
            ctx!.globalAlpha = 1;
          }
        }
      }
      // Draw particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles.current[i];
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx!.fillStyle = PARTICLE_COLOR;
        ctx!.fill();
      }
    }

    function update() {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
    }

    function loop() {
      update();
      draw();
      requestAnimationFrame(loop);
    }
    loop();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx?.scale(dpr, dpr);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticlesBackground;

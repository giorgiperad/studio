"use client";
import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let borderX = 0, borderY = 0;
    const followSpeed = 0.18;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      }
    };

    const animate = () => {
      borderX += (mouseX - borderX) * followSpeed;
      borderY += (mouseY - borderY) * followSpeed;
      if (borderRef.current) {
        borderRef.current.style.transform = `translate3d(${borderX - 10}px, ${borderY - 10}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    animate();

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  useEffect(() => {
    const handleHover = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLElement)) return;
      if (e.target.closest("a, button, .magnetic-hover")) {
        borderRef.current?.classList.add("cursor-hover");
      } else {
        borderRef.current?.classList.remove("cursor-hover");
      }
    };
    document.addEventListener("mousemove", handleHover);
    return () => document.removeEventListener("mousemove", handleHover);
  }, []);

  return (
    <>
      <div
        ref={borderRef}
        className="custom-cursor-border"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 20,
          height: 20,
          borderRadius: "50%",
          border: "2px solid #0ff",
          boxShadow: "0 0 20px 0 rgba(0,255,255,0.5)",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
          transition: "box-shadow 0.2s, border 0.2s",
        }}
      ></div>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#0ff",
          boxShadow: "0 0 20px 0 rgba(0,255,255,0.5)",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
      ></div>
      <style jsx global>{`
        .custom-cursor-border.cursor-hover {
          width: 60px !important;
          height: 60px !important;
          border-width: 3px;
          box-shadow: 0 0 40px 0 rgba(0,255,255,0.7);
          transition: width 0.3s cubic-bezier(0.4,0,0.2,1), height 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;

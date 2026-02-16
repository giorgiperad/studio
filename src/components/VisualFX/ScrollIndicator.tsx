"use client";
import { useEffect, useRef, useState } from "react";

const ScrollIndicator = () => {
  const [visible, setVisible] = useState(true);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={arrowRef}
      className={`scroll-indicator ${visible ? "visible" : "fadeOut"}`}
      style={{
        position: "absolute",
        left: "50%",
        bottom: 32,
        transform: "translateX(-50%)",
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      <svg width="32" height="48" viewBox="0 0 32 48" fill="none">
        <g>
          <path
            d="M16 8V40"
            stroke="#0ff"
            strokeWidth="4"
            strokeLinecap="round"
            className="scroll-indicator-arrow"
          />
          <circle
            cx="16"
            cy="40"
            r="4"
            fill="#0ff"
            className="scroll-indicator-dot"
          />
        </g>
      </svg>
      <style jsx global>{`
        .scroll-indicator.visible {
          opacity: 1;
          transition: opacity 0.4s;
        }
        .scroll-indicator.fadeOut {
          opacity: 0;
          transition: opacity 0.4s;
        }
        .scroll-indicator-arrow {
          animation: bounceArrow 1.2s infinite cubic-bezier(0.4,0,0.2,1);
        }
        .scroll-indicator-dot {
          animation: pulseDot 1.2s infinite alternate;
        }
        @keyframes bounceArrow {
          0% { stroke-dashoffset: 0; transform: translateY(0); }
          50% { stroke-dashoffset: 8; transform: translateY(8px); }
          100% { stroke-dashoffset: 0; transform: translateY(0); }
        }
        @keyframes pulseDot {
          0% { opacity: 1; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default ScrollIndicator;

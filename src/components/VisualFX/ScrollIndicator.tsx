import React, { useEffect, useRef } from "react";

const ScrollIndicator: React.FC = () => {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (indicatorRef.current) {
        indicatorRef.current.style.width = percent + "%";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{position:'fixed',top:0,left:0,width:'100%',height:'4px',zIndex:2000}}>
      <div ref={indicatorRef} style={{height:'100%',background:'linear-gradient(90deg, var(--primary), var(--secondary))',width:'0%',transition:'width 0.2s'}} />
    </div>
  );
};

export default ScrollIndicator;
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

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

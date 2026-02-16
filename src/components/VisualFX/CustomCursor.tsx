
"use client";
import { useEffect, useRef } from "react";

/**
 * CustomCursor - Portfolio theme cursor (outer + dot)
 * Usage: Place <CustomCursor /> at the root of your app (e.g. in layout or VisualFXProvider)
 */
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
        dotRef.current.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`;
      }
    };
    const handleHover = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .cursor-hover')) {
        cursorRef.current.classList.add('hover');
      } else {
        cursorRef.current.classList.remove('hover');
      }
    };
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleHover);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
};

export default CustomCursor;

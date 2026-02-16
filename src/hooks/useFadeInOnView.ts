import { useEffect, useRef } from "react";

/**
 * useFadeInOnView - Intersection Observer fade-in effect for sections
 * Usage: Attach ref to any element to fade it in when it enters viewport
 */
export function useFadeInOnView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    el.classList.add("fade-init");
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("fade-in");
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

import { useEffect, useRef } from 'react';

/**
 * useSectionInView
 * Adds fade/slide-in animation to a section when it enters the viewport.
 * @param {string} animationClass - The animation class to add (e.g., 'fadeInUp').
 * @param {number} threshold - Intersection observer threshold (default 0.15).
 * @returns {React.RefObject<HTMLElement>} - Ref to attach to the section.
 */
export function useSectionInView(animationClass = 'fadeInUp', threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.classList.add('opacity-0', 'translate-y-8');
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add(animationClass);
          node.classList.remove('opacity-0', 'translate-y-8');
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [animationClass, threshold]);

  return ref;
}

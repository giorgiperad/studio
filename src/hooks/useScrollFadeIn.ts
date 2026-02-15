// src/hooks/useScrollFadeIn.ts
import { useRef, useEffect } from 'react';

export function useScrollFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.style.opacity = '0';
    node.style.transform = 'translateY(50px)';
    node.style.transition = `opacity 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}s, transform 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}s`;

    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
        }
      });
    };

    const observer = new window.IntersectionObserver(handleScroll, {
      threshold: 0.15,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}

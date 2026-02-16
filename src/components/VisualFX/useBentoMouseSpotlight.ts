import { useCallback } from "react";

export default function useBentoMouseSpotlight() {
  // Returns a handler to set --mouse-x and --mouse-y on the target
  return useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  }, []);
}

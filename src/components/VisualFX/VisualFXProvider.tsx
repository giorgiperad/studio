"use client";
import { useEffect } from "react";
import CustomCursor from "./CustomCursor";
import ParticlesBackground from "./ParticlesBackground";
import GrainOverlay from "./GrainOverlay";

const VisualFXProvider = () => {
  useEffect(() => {
    // Mount CustomCursor
    const cursorRoot = document.getElementById("__visualfx-cursor-root");
    if (cursorRoot && cursorRoot.childNodes.length === 0) {
      const cursor = document.createElement("div");
      cursorRoot.appendChild(cursor);
      import("react-dom/client").then(({ createRoot }) => {
        createRoot(cursor).render(<CustomCursor />);
      });
    }
    // Mount ParticlesBackground
    const bgRoot = document.getElementById("__visualfx-bg-root");
    if (bgRoot && bgRoot.childNodes.length === 0) {
      const bg = document.createElement("div");
      bgRoot.appendChild(bg);
      import("react-dom/client").then(({ createRoot }) => {
        createRoot(bg).render(<ParticlesBackground />);
      });
    }
    // Mount GrainOverlay
    const grainRoot = document.getElementById("__visualfx-grain-root");
    if (grainRoot && grainRoot.childNodes.length === 0) {
      const grain = document.createElement("div");
      grainRoot.appendChild(grain);
      import("react-dom/client").then(({ createRoot }) => {
        createRoot(grain).render(<GrainOverlay />);
      });
    }
  }, []);
  return null;
};

export default VisualFXProvider;

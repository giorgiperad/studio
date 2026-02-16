"use client";
const GrainOverlay = () => (
  <svg
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      opacity: 0.3,
      pointerEvents: 'none',
      zIndex: 10000,
    }}
  >
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="4" numOctaves="2" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);
export default GrainOverlay;

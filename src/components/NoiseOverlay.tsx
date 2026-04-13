import { useEffect, useRef } from "react";

const NoiseOverlay = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let frame: number;
    let seed = 0;
    const animate = () => {
      seed = (seed + 1) % 100;
      const turb = svgRef.current?.querySelector("feTurbulence");
      if (turb) turb.setAttribute("seed", String(seed));
      frame = requestAnimationFrame(animate);
    };
    const interval = setInterval(() => {
      frame = requestAnimationFrame(animate);
    }, 120);
    return () => {
      clearInterval(interval);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.035]">
      <svg ref={svgRef} className="w-full h-full">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" seed="0" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
};

export default NoiseOverlay;

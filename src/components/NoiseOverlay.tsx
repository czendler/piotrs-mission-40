import { useEffect, useRef } from "react";

const NoiseOverlay = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let seed = 0;
    const interval = setInterval(() => {
      seed = (seed + 1) % 100;
      const turb = svgRef.current?.querySelector("feTurbulence");
      if (turb) turb.setAttribute("seed", String(seed));
    }, 200);
    return () => clearInterval(interval);
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

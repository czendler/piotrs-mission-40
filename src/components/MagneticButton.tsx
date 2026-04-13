import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const MagneticButton = ({ children, onClick, href, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const inner = (
    <motion.div
      ref={ref}
      className={`
        inline-flex items-center gap-3 px-8 py-4
        border border-[#e4e2dd]/20 
        font-['Space_Mono'] text-[11px] tracking-[0.25em] uppercase text-[#e4e2dd]/80
        transition-[letter-spacing,border-color] duration-500
        hover:tracking-[0.4em] hover:border-[#8c1c13]/60 hover:text-[#e4e2dd]
        cursor-none select-none
        ${className}
      `}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", damping: 15, stiffness: 200 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {inner}
      </a>
    );
  }

  return <button onClick={onClick}>{inner}</button>;
};

export default MagneticButton;

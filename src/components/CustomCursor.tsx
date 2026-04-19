import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const cursorX = useSpring(0, { damping: 25, stiffness: 300 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[200] mix-blend-difference"
      style={{ x: cursorX, y: cursorY, opacity: visible ? 1 : 0 }}
    >
      {/* Crosshair */}
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-[1px] h-8 bg-[#e4e2dd] left-1/2 -translate-x-1/2 -top-4" />
        <div className="absolute w-8 h-[1px] bg-[#e4e2dd] top-1/2 -translate-y-1/2 -left-4" />
        <div className="absolute w-3 h-3 rounded-full border border-[#e4e2dd]/60 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div
          className="absolute w-10 h-10 rounded-full border border-[#b8860b]/30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin [animation-duration:8s]"
        />
      </div>
    </motion.div>
  );
};

export default CustomCursor;

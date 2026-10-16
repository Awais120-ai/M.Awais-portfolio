"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  tilt?: boolean;
  spotlight?: boolean;
  hoverLift?: boolean;
};

export default function GlassCard({
  children,
  className = "",
  style,
  tilt = false,
  spotlight = true,
  hoverLift = true,
}: GlassCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 220, damping: 22, mass: 0.6 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 22, mass: 0.6 });

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    node.style.setProperty("--spot-x", `${px * 100}%`);
    node.style.setProperty("--spot-y", `${py * 100}%`);
    const finePointer = typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (tilt && !reduce && finePointer) {
      rotateX.set((0.5 - py) * 10);
      rotateY.set((px - 0.5) * 12);
    }
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div style={{ perspective: 980, height: className.includes("project-card") ? "100%" : undefined }}>
      <motion.div
        ref={ref}
        className={`glass-card ${spotlight ? "glass-spot" : ""} ${className}`.trim()}
        style={{
          ...style,
          rotateX: tilt && !reduce ? springX : 0,
          rotateY: tilt && !reduce ? springY : 0,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        whileHover={reduce || !hoverLift ? undefined : { y: -8 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

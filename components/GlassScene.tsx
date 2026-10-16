"use client";

import { useEffect, useRef } from "react";

export default function GlassScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const onMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node.style.setProperty("--gx", `${event.clientX}px`);
        node.style.setProperty("--gy", `${event.clientY}px`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="glass-scene" ref={ref} aria-hidden="true">
      <div className="scene-orb scene-orb-a" />
      <div className="scene-orb scene-orb-b" />
      <div className="scene-orb scene-orb-c" />
      <div className="scene-orb scene-orb-d" />
      <div className="scene-grid" />
      <div className="scene-spot" />
      <div className="scene-vignette" />
      <div className="scene-noise" />
    </div>
  );
}

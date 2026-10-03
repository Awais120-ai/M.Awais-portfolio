"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { profile, Project } from "@/data/profile";
import { GithubIcon } from "@/components/Icons";
import {
  Layers,
  ArrowUpRight,
  Activity,
  Flame,
  Globe,
  Wifi,
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Full Stack",
  "Real-time & AI",
  "Backend / Systems",
  "Frontend",
] as const;

function LiveBadge() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        fontSize: "0.7rem",
        fontWeight: 700,
        color: "#4ade80",
        background: "rgba(74, 222, 128, 0.12)",
        padding: "0.25rem 0.6rem",
        borderRadius: "9999px",
        border: "1px solid rgba(74, 222, 128, 0.3)",
        textTransform: "uppercase" as const,
        letterSpacing: "0.06em",
      }}
    >
      <span className="live-dot" />
      Live
    </span>
  );
}

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  const reduce = useReducedMotion();
  const visibleTech = project.tech.slice(0, 3);
  const extraTech = project.tech.length - visibleTech.length;

  return (
    <motion.article
      className="project-card"
      initial={reduce ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12, transition: { duration: 0.18 } }}
      whileHover={reduce ? undefined : { y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 24, delay: reduce ? 0 : idx * 0.06 }}
    >
      <div className="project-media">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt=""
            fill
            className="project-shot"
            sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Layers size={36} style={{ color: "rgba(129, 140, 248, 0.45)" }} />
          </div>
        )}
        <div className="project-media-shade" />
        <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", display: "flex", gap: "0.4rem" }}>
          <span style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#7dd3fc", background: "rgba(8, 12, 22, 0.72)", padding: "0.25rem 0.6rem", borderRadius: "0.375rem", border: "1px solid rgba(56, 189, 248, 0.3)", backdropFilter: "blur(8px)" }}>
            {project.category}
          </span>
          {project.featured && (
            <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#fbbf24", display: "inline-flex", alignItems: "center", gap: "0.28rem", background: "rgba(8, 12, 22, 0.72)", padding: "0.25rem 0.55rem", borderRadius: "9999px", border: "1px solid rgba(251, 191, 36, 0.35)", backdropFilter: "blur(8px)" }}>
              <Flame size={10} />
              Featured
            </span>
          )}
        </div>
        {project.live && (
          <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem" }}>
            <LiveBadge />
          </div>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-cta">
            <Globe size={14} />
            View Live Site
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-copy">{project.text}</p>
        <div className="project-metrics">
          <Activity size={13} style={{ flexShrink: 0 }} />
          <span>{project.metrics || "Production-ready engineering"}</span>
        </div>
        <div className="project-tech">
          {visibleTech.map((t) => (
            <span key={t}>{t}</span>
          ))}
          {extraTech > 0 && <span>+{extraTech}</span>}
        </div>
        <div className="project-foot">
          <a
            href={project.github || profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <GithubIcon size={15} />
            <span>Source Code</span>
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-link"
              style={{ color: project.live ? "#4ade80" : "#38bdf8" }}
            >
              {project.live ? (
                <>
                  <Wifi size={14} />
                  <span>Live Demo</span>
                </>
              ) : (
                <>
                  <span>Live Preview</span>
                  <ArrowUpRight size={14} />
                </>
              )}
            </a>
          ) : (
            <span style={{ width: 1 }} />
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const reduce = useReducedMotion();

  const filteredProjects =
    activeCategory === "All"
      ? profile.projects
      : profile.projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      style={{ padding: "6rem 0", position: "relative", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
    >
      <div className="container">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
        >
          <span className="tag" style={{ background: "rgba(99, 102, 241, 0.12)", borderColor: "rgba(99, 102, 241, 0.3)", color: "#a5b4fc", marginBottom: "1rem" }}>
            <Layers size={14} />
            Portfolio Showcase
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
            Featured <span className="gradient-text-accent">Engineering Projects</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "38rem", fontSize: "1.05rem", lineHeight: 1.65 }}>
            Real-world systems spanning real-time AI platforms, e-commerce marketplaces, and modern task management — live in production.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem", padding: "0.4rem 1rem", borderRadius: "9999px", background: "rgba(74, 222, 128, 0.08)", border: "1px solid rgba(74, 222, 128, 0.25)", fontSize: "0.82rem", color: "#4ade80", fontWeight: 600 }}>
            <span className="live-dot" />
            {profile.projects.filter((p) => p.live).length} projects deployed & live on Vercel
          </div>
        </motion.div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem", marginBottom: "3.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", maxWidth: "100%", padding: "0.35rem", background: "rgba(15, 23, 42, 0.6)", borderRadius: "9999px", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(12px)" }}>
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{ position: "relative", padding: "0.5rem 1.15rem", borderRadius: "9999px", border: "none", background: "transparent", color: isSelected ? "#ffffff" : "#94a3b8", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", transition: "color 0.2s ease", zIndex: 1 }}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="category-indicator"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      style={{ position: "absolute", inset: 0, borderRadius: "9999px", background: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)", boxShadow: "0 4px 16px rgba(79, 70, 229, 0.4)", zIndex: -1 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
          </div>

        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


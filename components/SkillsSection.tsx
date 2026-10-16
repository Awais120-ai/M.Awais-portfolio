"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import GlassCard from "@/components/GlassCard";
import { Code2 } from "lucide-react";

const TECH_ICONS: Record<string, { icon: string; invert?: boolean }> = {
  "React 18": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  "Next.js 14": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
  TypeScript: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  "JavaScript (ES6+)": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  "Tailwind CSS": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  "Redux Toolkit": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
  "HTML5 / Semantic UI": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  "CSS3 / Animations": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  "Figma to Code": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  "Python 3": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  FastAPI: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  "RESTful API Design": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  WebSockets: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg", invert: true },
  "WebRTC Audio/Video": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" },
  "JWT & RBAC Security": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  "SQLAlchemy & Pydantic": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg" },
  "Java (Core)": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  PostgreSQL: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  "Redis Caching": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  SQLite: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
  "SQL Query Tuning": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  "Data Modeling": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  "Git & GitHub": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  "Docker & Containers": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  "Postman API Testing": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  "Celery Task Queue": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  "Nginx Server": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
  "Linux / Bash": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
};

const ACCENTS: Record<string, { hex: string; rgb: string }> = {
  frontend: { hex: "#38bdf8", rgb: "56, 189, 248" },
  backend: { hex: "#818cf8", rgb: "129, 140, 248" },
  database: { hex: "#34d399", rgb: "52, 211, 153" },
  tools: { hex: "#fbbf24", rgb: "251, 191, 36" },
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const reduce = useReducedMotion();

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & Systems" },
    { id: "database", label: "Data & Caching" },
    { id: "tools", label: "DevOps & Tools" },
  ];

  const displayedGroups =
    activeTab === "all"
      ? profile.skillCategories
      : profile.skillCategories.filter((cat) => cat.category === activeTab);

  return (
    <section id="skills" className="section section-rule">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
        >
          <motion.span
            className="glass-pill"
            animate={reduce ? undefined : { y: [0, -3, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "#7dd3fc", marginBottom: "1rem" }}
          >
            <Code2 size={14} />
            Technical Arsenal
          </motion.span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
            Skills, Frameworks &amp; <span className="gradient-text-accent">Tooling</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "36rem", fontSize: "1.05rem" }}>
            A curated inventory of the languages, frameworks, cloud tooling, and architectural patterns I build with every day.
          </p>
        </motion.div>

        <div className="filter-wrap">
          <div className="filter-bar">
            {categories.map((cat) => {
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={isSelected ? "filter-btn is-active" : "filter-btn"}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="skills-tab-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "999px",
                        background: "linear-gradient(135deg, rgba(99, 102, 241, 0.5), rgba(56, 189, 248, 0.28))",
                        border: "1px solid rgba(186, 230, 253, 0.28)",
                        zIndex: -1,
                      }}
                    />
                  )}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="skills-grid">
          <AnimatePresence mode="popLayout">
            {displayedGroups.map((group, groupIdx) => {
              const accent = ACCENTS[group.category] ?? ACCENTS.backend;
              return (
                <motion.div
                  key={group.group}
                  layout
                  initial={reduce ? false : { opacity: 0, y: 28, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.18 } }}
                  transition={{ type: "spring", stiffness: 280, damping: 24, delay: groupIdx * 0.07 }}
                >
                  <GlassCard
                    className="skills-card"
                    hoverLift
                    style={{
                      padding: "1.75rem",
                      overflow: "visible",
                      ["--card-accent" as string]: accent.rgb,
                      ["--card-accent-hex" as string]: accent.hex,
                    }}
                  >
                    <span className="skills-card-bar" />
                    <h3 className="skills-heading">
                      <span className="skills-heading-title">{group.group}</span>
                      <span
                        className="glass-pill skills-count"
                        style={{
                          color: accent.hex,
                          borderColor: `rgba(${accent.rgb}, 0.32)`,
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                          width: "max-content",
                        }}
                      >
                        {group.items.length} skills
                      </span>
                    </h3>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
                      {group.items.map((skill, skillIdx) => {
                        const techIcon = TECH_ICONS[skill.name];
                        return (
                          <motion.div
                            key={`${activeTab}-${skill.name}`}
                            className="skill-chip-wrap"
                            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.82 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={reduce ? undefined : { y: -7, scale: 1.06 }}
                            whileTap={reduce ? undefined : { scale: 0.97 }}
                            transition={{
                              type: "spring",
                              stiffness: 460,
                              damping: 22,
                              delay: reduce ? 0 : groupIdx * 0.05 + skillIdx * 0.04,
                            }}
                            style={{
                              ["--chip-accent" as string]: accent.hex,
                              ["--chip-glow" as string]: accent.rgb,
                            }}
                          >
                            <span className="skill-tip">{skill.level}</span>
                            <div className={`skill-chip${skill.highlight ? " skill-chip-hot" : ""}`}>
                              <span className="skill-chip-icon">
                                {techIcon ? (
                                  // eslint-disable-next-line @next/next/no-img-element
                                  <img
                                    src={techIcon.icon}
                                    alt=""
                                    width={16}
                                    height={16}
                                    style={{
                                      width: 16,
                                      height: 16,
                                      objectFit: "contain",
                                      filter: techIcon.invert ? "invert(1)" : "none",
                                    }}
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = "none";
                                    }}
                                  />
                                ) : (
                                  <Code2 size={15} color={skill.highlight ? accent.hex : "#94a3b8"} />
                                )}
                              </span>
                              <span>{skill.name}</span>
                              {skill.level === "Advanced" && <span className="skill-level-dot" />}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

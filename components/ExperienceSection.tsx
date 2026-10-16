"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import GlassCard from "@/components/GlassCard";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";

export default function ExperienceSection() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="section section-rule">
      <div className="container">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span className="glass-pill" style={{ color: "#e9d5ff", marginBottom: "1rem" }}>
            <Briefcase size={14} />
            Career &amp; Foundations
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
            Work Experience &amp; <span className="gradient-text-accent">Education</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "36rem", fontSize: "1.05rem" }}>
            My engineering trajectory from rigorous computer science fundamentals to active commercial production systems.
          </p>
        </motion.div>

        <div className="experience-grid">
          <div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 750, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Briefcase size={20} color="#818cf8" />
              <span>Commercial Experience</span>
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative", paddingLeft: "0.4rem" }}>
              {profile.experience.map((job, idx) => (
                <motion.div
                  key={job.company}
                  initial={reduce ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard style={{ padding: "1.9rem" }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: "0.75rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "1.3rem", fontWeight: 750, lineHeight: 1.25 }}>{job.role}</div>
                        <div style={{ fontSize: "1.02rem", fontWeight: 650, color: "#38bdf8", marginTop: "0.2rem" }}>{job.company}</div>
                      </div>
                      <span className="glass-pill" style={{ color: "#34d399", borderColor: "rgba(52, 211, 153, 0.28)" }}>
                        <Calendar size={13} />
                        {job.period}
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.825rem", color: "var(--text-muted)", marginBottom: "1.2rem" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                        <MapPin size={13} />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>

                    <ul style={{ listStyle: "none", margin: "0 0 1.4rem", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                      {job.points.map((pt, pIdx) => (
                        <motion.li
                          key={pIdx}
                          initial={reduce ? false : { opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.08 * pIdx }}
                          style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.925rem", color: "var(--text-secondary)", lineHeight: 1.6 }}
                        >
                          <CheckCircle2 size={16} color="#6366f1" style={{ flexShrink: 0, marginTop: "0.25rem" }} />
                          <span>{pt}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 650, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                      Applied Technologies
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {job.techStack.map((t) => (
                        <span key={t} className="tech-chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 750, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <GraduationCap size={20} color="#38bdf8" />
              <span>Academic Education</span>
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {profile.education.map((edu, idx) => (
                <motion.div
                  key={edu.school}
                  initial={reduce ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard style={{ padding: "1.7rem" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", marginBottom: "0.65rem", flexWrap: "wrap" }}>
                      <span className="glass-pill" style={{ color: "#a5b4fc" }}>
                        {edu.period}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    </div>
                    <h4 style={{ fontSize: "1.08rem", fontWeight: 750, marginBottom: "0.35rem", lineHeight: 1.35 }}>{edu.degree}</h4>
                    <p style={{ fontSize: "0.9rem", color: "#38bdf8", fontWeight: 550, marginBottom: "1rem" }}>{edu.school}</p>
                    {edu.achievements && (
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {edu.achievements.map((ach) => (
                          <li key={ach} style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", alignItems: "flex-start", gap: "0.5rem", lineHeight: 1.5 }}>
                            <Award size={14} color="#f59e0b" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

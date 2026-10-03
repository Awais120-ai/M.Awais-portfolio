"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Award,
} from "lucide-react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: "6rem 0",
        position: "relative",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <span
            className="tag"
            style={{
              background: "rgba(168, 85, 247, 0.12)",
              borderColor: "rgba(168, 85, 247, 0.3)",
              color: "#d8b4fe",
              marginBottom: "1rem",
            }}
          >
            <Briefcase size={14} />
            Career &amp; Foundations
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            Work Experience &amp;{" "}
            <span className="gradient-text-accent">Education</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "36rem",
              fontSize: "1.05rem",
            }}
          >
            My engineering trajectory from rigorous computer science fundamentals to active commercial production systems.
          </p>
        </div>

        {/* 2-Column layout: Experience on Left, Education on Right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "2.5rem",
          }}
          className="experience-grid"
        >
          {/* Left Column: Work Experience */}
          <div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#f8fafc",
                marginBottom: "1.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              <Briefcase size={20} color="#818cf8" />
              <span>Commercial Experience</span>
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {profile.experience.map((job, idx) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card"
                  style={{
                    padding: "2rem",
                    position: "relative",
                  }}
                >
                  {/* Top Bar */}
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
                      <div
                        style={{
                          fontSize: "1.35rem",
                          fontWeight: 700,
                          color: "#ffffff",
                          lineHeight: 1.25,
                        }}
                      >
                        {job.role}
                      </div>
                      <div
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 600,
                          color: "#38bdf8",
                          marginTop: "0.2rem",
                        }}
                      >
                        {job.company}
                      </div>
                    </div>

                    <div className="experience-period" style={{ textAlign: "right" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          color: "#10b981",
                          background: "rgba(16, 185, 129, 0.1)",
                          padding: "0.3rem 0.75rem",
                          borderRadius: "9999px",
                          border: "1px solid rgba(16, 185, 129, 0.25)",
                        }}
                      >
                        <Calendar size={13} />
                        {job.period}
                      </span>
                    </div>
                  </div>

                  {/* Location & Type info */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      fontSize: "0.825rem",
                      color: "var(--text-muted)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                      <MapPin size={13} />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>

                  {/* Key Contributions */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 1.5rem 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                    }}
                  >
                    {job.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.65rem",
                          fontSize: "0.925rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="#6366f1"
                          style={{ flexShrink: 0, marginTop: "0.25rem" }}
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack used */}
                  <div>
                    <div
                      style={{
                        fontSize: "0.775rem",
                        color: "var(--text-muted)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Applied Technologies:
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {job.techStack.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: "0.75rem",
                            fontFamily: "var(--font-mono)",
                            background: "rgba(255, 255, 255, 0.05)",
                            color: "#cbd5e1",
                            padding: "0.25rem 0.6rem",
                            borderRadius: "0.375rem",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education */}
          <div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#f8fafc",
                marginBottom: "1.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              <GraduationCap size={20} color="#38bdf8" />
              <span>Academic Education</span>
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {profile.education.map((edu, idx) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card"
                  style={{
                    padding: "1.75rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.775rem",
                        color: "#a5b4fc",
                        background: "rgba(99, 102, 241, 0.15)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "9999px",
                        border: "1px solid rgba(99, 102, 241, 0.25)",
                        fontWeight: 600,
                      }}
                    >
                      {edu.period}
                    </span>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                      }}
                    >
                      <MapPin size={12} />
                      {edu.location}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "0.35rem",
                      lineHeight: 1.35,
                    }}
                  >
                    {edu.degree}
                  </h4>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#38bdf8",
                      fontWeight: 500,
                      marginBottom: "1rem",
                    }}
                  >
                    {edu.school}
                  </p>

                  {edu.achievements && (
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      {edu.achievements.map((ach, aIdx) => (
                        <li
                          key={aIdx}
                          style={{
                            fontSize: "0.85rem",
                            color: "var(--text-secondary)",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.5rem",
                            lineHeight: 1.5,
                          }}
                        >
                          <Award
                            size={14}
                            color="#f59e0b"
                            style={{ flexShrink: 0, marginTop: "0.2rem" }}
                          />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

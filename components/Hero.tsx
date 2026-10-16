"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import Magnetic from "@/components/Magnetic";
import {
  ArrowRight,
  Download,
  Sparkles,
  Zap,
  Cpu,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="section" style={{ paddingTop: "3.2rem" }}>
      <div className="container">
        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              style={{ marginBottom: "1.15rem" }}
            >
              <span className="badge-pulse">
                <span className="pulse-dot" />
                {profile.status}
              </span>
            </motion.div>

            <h1 className="hero-title">
              Hi, I&apos;m{" "}
              <span className="gradient-text-accent hero-name">Muhammad Awais Farooq</span>
              <span className="gradient-text hero-tagline">I build the screen &amp; the server behind it.</span>
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.55, duration: 0.5 }}
              style={{
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "38rem",
                marginBottom: "1.6rem",
              }}
            >
              {profile.bio}
            </motion.p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
              {profile.quickTags.map((tag, idx) => (
                <motion.span
                  key={tag}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={reduce ? undefined : { y: -4, scale: 1.04 }}
                  transition={{ delay: reduce ? 0 : 0.35 + idx * 0.05, type: "spring", stiffness: 420, damping: 24 }}
                  className="tag"
                >
                  <Sparkles size={12} color="#818cf8" />
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="hero-actions">
              <Magnetic className="hero-magnetic">
                <motion.a href="#projects" className="btn-primary" whileTap={reduce ? undefined : { scale: 0.98 }}>
                  <span>Explore Featured Work</span>
                  <ArrowRight size={17} />
                </motion.a>
              </Magnetic>
              <Magnetic className="hero-magnetic">
                <motion.a href="#contact" className="btn-secondary" whileTap={reduce ? undefined : { scale: 0.98 }}>
                  <MessageSquare size={17} />
                  <span>Get In Touch</span>
                </motion.a>
              </Magnetic>
              <Magnetic className="hero-magnetic">
                <motion.a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Muhammad-Awais-Farooq-CV.pdf"
                  className="btn-secondary"
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(profile.resume, "_blank", "noopener,noreferrer");
                    const link = document.createElement("a");
                    link.href = profile.resume;
                    link.download = "Muhammad-Awais-Farooq-CV.pdf";
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                  }}
                >
                  <Download size={16} />
                  <span>Resume / CV</span>
                </motion.a>
              </Magnetic>
            </div>

            <div className="stats-grid glass">
              {profile.stats.map((s, idx) => (
                <motion.div
                  key={s.label}
                  className="stat-tile"
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.7 + idx * 0.08, duration: 0.4 }}
                >
                  <div
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 750,
                      letterSpacing: "-0.02em",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    <span className="gradient-text-accent">{s.value}</span>
                    {s.suffix && (
                      <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginLeft: "0.25rem", fontWeight: 500 }}>
                        {s.suffix}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontWeight: 550, marginTop: "0.2rem" }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-portrait"
            initial={reduce ? false : { opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={reduce ? undefined : { y: -8, transition: { delay: 0, duration: 0.35 } }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "100%" }}
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "relative", width: "100%", maxWidth: "400px" }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "-16px",
                  borderRadius: "2.4rem",
                  background: "linear-gradient(135deg, rgba(99, 102, 241, 0.5), rgba(56, 189, 248, 0.35), rgba(168, 85, 247, 0.4))",
                  filter: "blur(28px)",
                  opacity: 0.7,
                }}
              />

              <div className="hero-frame" style={{ position: "relative", zIndex: 1 }}>
                <div className="hero-shot" style={{ aspectRatio: "4 / 5", background: "linear-gradient(180deg, #131b2e 0%, #0a0f1d 100%)" }}>
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    width={400}
                    height={500}
                    priority
                    className="hero-photo"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 18%" }}
                  />
                </div>
              </div>

              <motion.div
                className="floating-badge glass"
                initial={reduce ? false : { opacity: 0, x: -16 }}
                animate={reduce ? { opacity: 1, x: 0 } : { opacity: 1, x: 0, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 0.45, duration: 0.4 },
                  y: { delay: 1.1, duration: 3.6, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={reduce ? undefined : { scale: 1.06 }}
                style={{
                  position: "absolute",
                  top: "-0.35rem",
                  left: "-1.45rem",
                  zIndex: 4,
                  padding: "0.6rem 0.95rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <div style={{ width: 28, height: 28, borderRadius: "0.55rem", background: "rgba(99, 102, 241, 0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Zap size={16} color="#818cf8" />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 750 }}>Full Stack Pro</div>
                  <div style={{ fontSize: "0.675rem", color: "#94a3b8" }}>React &amp; FastAPI</div>
                </div>
              </motion.div>

              <motion.div
                className="floating-badge glass"
                initial={reduce ? false : { opacity: 0, x: -16 }}
                animate={reduce ? { opacity: 1, x: 0 } : { opacity: 1, x: 0, y: [0, 6, 0] }}
                transition={{
                  opacity: { delay: 0.6, duration: 0.4 },
                  y: { delay: 1.3, duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={reduce ? undefined : { scale: 1.06 }}
                style={{
                  position: "absolute",
                  bottom: "5.25rem",
                  left: "-1.45rem",
                  zIndex: 4,
                  padding: "0.6rem 0.95rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <div style={{ width: 28, height: 28, borderRadius: "0.55rem", background: "rgba(56, 189, 248, 0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Cpu size={16} color="#38bdf8" />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 750 }}>Real-time &amp; AI</div>
                  <div style={{ fontSize: "0.675rem", color: "#94a3b8" }}>WebSockets &amp; WebRTC</div>
                </div>
              </motion.div>

              <motion.div
                className="floating-badge glass"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -5, 0] }}
                transition={{
                  opacity: { delay: 0.75, duration: 0.4 },
                  y: { delay: 1.2, duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={reduce ? undefined : { scale: 1.06 }}
                style={{
                  position: "absolute",
                  bottom: "0.85rem",
                  right: "0.7rem",
                  zIndex: 4,
                  padding: "0.5rem 0.85rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <CheckCircle2 size={15} color="#10b981" />
                <span style={{ fontSize: "0.75rem", fontWeight: 650 }}>Available for Work</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

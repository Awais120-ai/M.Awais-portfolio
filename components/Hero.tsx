"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import {
  ArrowRight,
  Download,
  Sparkles,
  Zap,
  Cpu,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

function HeadlineWords({
  text,
  className,
  start,
  reduce,
}: {
  text: string;
  className?: string;
  start: number;
  reduce: boolean | null;
}) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={className}
          initial={reduce ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: reduce ? 0 : 0.08 + (start + i) * 0.055,
            type: "spring",
            stiffness: 420,
            damping: 28,
          }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section
      id="about"
      style={{
        position: "relative",
        paddingTop: "3.5rem",
        paddingBottom: "5rem",
        overflow: "hidden",
      }}
    >
      {/* Background ambient glowing orbs */}
      <div
        className="ambient-glow"
        style={{
          width: "500px",
          height: "500px",
          top: "-50px",
          left: "-100px",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="ambient-glow"
        style={{
          width: "550px",
          height: "550px",
          top: "100px",
          right: "-100px",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, transparent 70%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline, Bio, Badges, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              style={{ marginBottom: "1.25rem" }}
            >
              <span className="badge-pulse">
                <span className="pulse-dot" />
                {profile.status}
              </span>
            </motion.div>

            <h1
              style={{
                fontSize: "clamp(1.85rem, 7vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
              }}
            >
              <HeadlineWords text="Hi, I'm" start={0} reduce={reduce} />
              <br />
              <HeadlineWords
                text="Muhammad Awais"
                className="gradient-text-accent hero-name"
                start={2}
                reduce={reduce}
              />
              <br />
              <HeadlineWords
                text="Farooq"
                className="gradient-text-accent hero-name"
                start={4}
                reduce={reduce}
              />
              <br />
              <HeadlineWords
                text="I build the screen &"
                className="gradient-text"
                start={5}
                reduce={reduce}
              />
              <br />
              <HeadlineWords
                text="the server behind it."
                className="gradient-text"
                start={9}
                reduce={reduce}
              />
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.55, duration: 0.5 }}
              style={{
                fontSize: "1.125rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "38rem",
                marginBottom: "1.75rem",
              }}
            >
              {profile.bio}
            </motion.p>

            {/* Interactive Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "2.25rem",
              }}
            >
              {profile.quickTags.map((tag, idx) => (
                <motion.span
                  key={tag}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={reduce ? undefined : { y: -4, scale: 1.04 }}
                  transition={{ delay: reduce ? 0 : 0.35 + idx * 0.05, type: "spring", stiffness: 420, damping: 24 }}
                  className="tag"
                  style={{ cursor: "default" }}
                >
                  <Sparkles size={12} color="#818cf8" />
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center",
                marginBottom: "3rem",
              }}
              className="hero-actions"
            >
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={reduce ? undefined : { y: -3 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                <span>Explore Featured Work</span>
                <ArrowRight size={17} />
              </motion.a>

              <motion.a
                href="#contact"
                className="btn-secondary"
                whileHover={reduce ? undefined : { y: -3 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                <MessageSquare size={17} />
                <span>Get In Touch</span>
              </motion.a>

              <motion.a
                href={`mailto:${profile.email}?subject=Resume%20Request%20-%20Muhammad%20Awais%20Farooq`}
                className="btn-secondary"
                whileHover={reduce ? undefined : { y: -3 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                style={{
                  background: "transparent",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <Download size={16} />
                <span>Resume / CV</span>
              </motion.a>
            </div>

            {/* Live Stats Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1rem",
                padding: "1.25rem 1.5rem",
                background: "rgba(15, 23, 42, 0.45)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "1rem",
                backdropFilter: "blur(12px)",
              }}
              className="stats-grid"
            >
              {profile.stats.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.7 + idx * 0.08, duration: 0.4 }}
                  style={{ textAlign: "left" }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: "-0.02em",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    <span className="gradient-text-accent">{s.value}</span>
                    {s.suffix && (
                      <span
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                          marginLeft: "0.25rem",
                          fontWeight: 500,
                        }}
                      >
                        {s.suffix}
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      fontSize: "0.775rem",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                      marginTop: "0.2rem",
                    }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait with Floating Framer Motion Badges */}
          <motion.div
            className="hero-portrait"
            initial={reduce ? false : { opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={reduce ? undefined : { y: -8, transition: { delay: 0, duration: 0.35 } }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "400px",
              }}
            >
              {/* Multi-layered glow backdrops */}
              <div
                style={{
                  position: "absolute",
                  inset: "-12px",
                  borderRadius: "2.2rem",
                  background:
                    "linear-gradient(135deg, rgba(99, 102, 241, 0.45) 0%, rgba(56, 189, 248, 0.35) 50%, rgba(168, 85, 247, 0.4) 100%)",
                  filter: "blur(28px)",
                  opacity: 0.65,
                  zIndex: 0,
                }}
              />

              {/* Portrait Container */}
              <div
                className="hero-frame"
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "1.75rem",
                  padding: "6px",
                  background:
                    "linear-gradient(145deg, rgba(255, 255, 255, 0.2) 0%, rgba(99, 102, 241, 0.25) 50%, rgba(56, 189, 248, 0.15) 100%)",
                }}
              >
                <div
                  className="hero-shot"
                  style={{
                    position: "relative",
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    background:
                      "linear-gradient(180deg, #131b2e 0%, #0a0f1d 100%)",
                    aspectRatio: "4 / 5",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  {/* Subtle inner grid pattern */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                      opacity: 0.3,
                    }}
                  />

                  {/* Profile Image */}
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    width={400}
                    height={500}
                    priority
                    className="hero-photo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 18%",
                      position: "relative",
                      zIndex: 2,
                    }}
                  />

                  {/* Inner bottom subtle fade */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "56px",
                      background:
                        "linear-gradient(to top, rgba(10, 15, 29, 0.45) 0%, transparent 100%)",
                      zIndex: 3,
                    }}
                  />
                </div>
              </div>

              {/* Floating Badge 1: Top Right - Full Stack */}
              <motion.div
                initial={reduce ? false : { opacity: 0, x: -16 }}
                animate={reduce ? { opacity: 1, x: 0 } : { opacity: 1, x: 0, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 0.45, duration: 0.4 },
                  x: { delay: 0.45, duration: 0.45 },
                  y: { delay: 1.1, duration: 3.6, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={reduce ? undefined : { scale: 1.06 }}
                style={{
                  position: "absolute",
                  top: "-0.35rem",
                  left: "-1.45rem",
                  zIndex: 4,
                  background: "rgba(15, 23, 42, 0.85)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(99, 102, 241, 0.4)",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
                  padding: "0.6rem 0.95rem",
                  borderRadius: "0.85rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  cursor: "default",
                }}
                className="floating-badge"
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "0.45rem",
                    background: "rgba(99, 102, 241, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Zap size={16} color="#818cf8" />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    Full Stack Pro
                  </div>
                  <div
                    style={{
                      fontSize: "0.675rem",
                      color: "#94a3b8",
                    }}
                  >
                    React &amp; FastAPI
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left - AI & Real-time */}
              <motion.div
                initial={reduce ? false : { opacity: 0, x: -16 }}
                animate={reduce ? { opacity: 1, x: 0 } : { opacity: 1, x: 0, y: [0, 6, 0] }}
                transition={{
                  opacity: { delay: 0.6, duration: 0.4 },
                  x: { delay: 0.6, duration: 0.45 },
                  y: { delay: 1.3, duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={reduce ? undefined : { scale: 1.06 }}
                style={{
                  position: "absolute",
                  bottom: "5.25rem",
                  left: "-1.45rem",
                  zIndex: 4,
                  background: "rgba(15, 23, 42, 0.85)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(56, 189, 248, 0.4)",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
                  padding: "0.6rem 0.95rem",
                  borderRadius: "0.85rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  cursor: "default",
                }}
                className="floating-badge"
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "0.45rem",
                    background: "rgba(56, 189, 248, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Cpu size={16} color="#38bdf8" />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    Real-time &amp; AI
                  </div>
                  <div
                    style={{
                      fontSize: "0.675rem",
                      color: "#94a3b8",
                    }}
                  >
                    WebSockets &amp; WebRTC
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 3: Bottom Right - availability */}
              <motion.div
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
                  background: "rgba(15, 23, 42, 0.9)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(16, 185, 129, 0.35)",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
                  padding: "0.5rem 0.85rem",
                  borderRadius: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  cursor: "default",
                }}
                className="floating-badge"
              >
                <CheckCircle2 size={15} color="#10b981" />
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#f1f5f9",
                  }}
                >
                  Available for Work
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .floating-badge {
            display: none !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

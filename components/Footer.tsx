"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from "@/components/Icons";
import { ArrowUp, Code2 } from "lucide-react";

const LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Live API", href: "#api-panel" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const reduce = useReducedMotion();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="site-footer glass" style={{ position: "relative", zIndex: 1 }}>
        <div className="container">
          <div className="footer-top">
            <div style={{ maxWidth: "340px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
                <div className="nav-mark" style={{ width: 28, height: 28, borderRadius: "0.55rem" }}>
                  <Code2 size={16} color="#fff" />
                </div>
                <span style={{ fontWeight: 750, fontSize: "1.05rem" }}>{profile.name}</span>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Full Stack Engineer specializing in React, Next.js, Python FastAPI, and real-time distributed web systems.
              </p>
            </div>

            <div className="footer-links">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem", fontWeight: 550 }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-btn">
                <GithubIcon size={17} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-btn" style={{ color: "#60a5fa" }}>
                <LinkedinIcon size={17} />
              </a>
              <a href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn" style={{ color: "#f472b6" }}>
                <InstagramIcon size={17} />
              </a>
              <a href={profile.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-btn" style={{ color: "#60a5fa" }}>
                <FacebookIcon size={17} />
              </a>
            </div>
          </div>

          <div
            className="footer-bottom"
            style={{
              paddingTop: "1.4rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              fontSize: "0.825rem",
              color: "var(--text-muted)",
            }}
          >
            <div>
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </div>
            <div>Engineered with Next.js 14, Framer Motion &amp; TypeScript</div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            className="back-top"
            onClick={scrollToTop}
            title="Return to Top"
            initial={reduce ? false : { opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            whileHover={reduce ? undefined : { y: -3, scale: 1.06 }}
            whileTap={reduce ? undefined : { scale: 0.94 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

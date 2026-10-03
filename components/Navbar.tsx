"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/Icons";
import { Menu, X, Mail, ArrowUpRight, Code2 } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Live API", href: "#api-panel" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((l) => l.href.substring(1));
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={scrolled ? "site-header nav-scrolled" : "site-header"}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(7, 9, 14, 0.9)" : "rgba(7, 9, 14, 0.4)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <motion.div
        className="container"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "0.6rem 1.5rem" : "1rem 1.5rem",
          transition: "padding 0.3s ease",
        }}
      >
        <motion.a
          href="#top"
          whileHover={reduce ? undefined : { y: -1 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <motion.div
            className="nav-mark"
            whileHover={reduce ? undefined : { rotate: -8, scale: 1.08 }}
            whileTap={reduce ? undefined : { scale: 0.94 }}
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
          >
            <Code2 size={18} color="#fff" />
          </motion.div>
          <div>
            <span
              style={{
                fontWeight: 700,
                fontSize: "1.05rem",
                letterSpacing: "-0.01em",
                display: "block",
                lineHeight: 1.2,
              }}
            >
              Awais Farooq
            </span>
            <span
              style={{
                fontSize: "0.725rem",
                color: "#94a3b8",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              <span className="nav-live-dot" />
              Full Stack Dev
            </span>
          </div>
        </motion.a>

        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            background: "rgba(255, 255, 255, 0.03)",
            padding: "0.3rem",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={isActive ? "nav-link nav-link-active" : "nav-link"}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="nav-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="nav-link-label">{link.name}</span>
              </a>
            );
          })}
        </nav>

        <div
          className="nav-actions"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.65rem",
          }}
        >
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="nav-social nav-icon nav-icon-gh"
            whileHover={reduce ? undefined : { y: -4, scale: 1.08 }}
            whileTap={reduce ? undefined : { scale: 0.94 }}
          >
            <GithubIcon size={16} />
          </motion.a>
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="nav-social nav-icon nav-icon-li"
            whileHover={reduce ? undefined : { y: -4, scale: 1.08 }}
            whileTap={reduce ? undefined : { scale: 0.94 }}
          >
            <LinkedinIcon size={16} />
          </motion.a>
          <a
            href="#contact"
            className="btn-primary nav-cta"
            style={{
              padding: "0.55rem 1.1rem",
              fontSize: "0.85rem",
              borderRadius: "0.6rem",
            }}
          >
            <span>Let&apos;s Connect</span>
            <span className="nav-cta-arrow">
              <ArrowUpRight size={15} />
            </span>
          </a>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            style={{
              display: "none",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "0.5rem",
              padding: "0.5rem",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenuOpen ? "close" : "open"}
                initial={reduce ? false : { rotate: -80, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={reduce ? undefined : { rotate: 80, opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{ display: "flex" }}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(10, 14, 23, 0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              overflow: "hidden",
            }}
          >
            <div
              className="container"
              style={{
                padding: "1.25rem 1.5rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.15rem",
              }}
            >
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="nav-drawer-link"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduce ? 0 : 0.04 * index, duration: 0.28 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <div style={{ display: "flex", gap: "0.6rem", paddingTop: "0.85rem" }}>
                <motion.a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="nav-social nav-icon-gh"
                  whileHover={reduce ? undefined : { y: -3, scale: 1.06 }}
                >
                  <GithubIcon size={16} />
                </motion.a>
                <motion.a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="nav-social nav-icon-li"
                  whileHover={reduce ? undefined : { y: -3, scale: 1.06 }}
                >
                  <LinkedinIcon size={16} />
                </motion.a>
              </div>
              <div
                className="mobile-actions"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  paddingTop: "0.75rem",
                }}
              >
                <a
                  href={`mailto:${profile.email}`}
                  className="btn-secondary"
                  style={{ flex: 1, textAlign: "center", fontSize: "0.85rem" }}
                >
                  <Mail size={15} /> Email
                </a>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ flex: 1, textAlign: "center", fontSize: "0.85rem" }}
                >
                  <WhatsAppIcon size={15} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 1100px) {
          .desktop-nav,
          .nav-icon,
          .nav-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}

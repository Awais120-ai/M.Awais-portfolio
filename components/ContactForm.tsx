"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, WhatsAppIcon, InstagramIcon, FacebookIcon } from "@/components/Icons";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = Object.fromEntries(new FormData(form));
    setState("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fd),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Message delivery failed.");
      form.reset();
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Message delivery failed.");
      setState("error");
    }
  }

  return (
    <section
      id="contact"
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
              background: "rgba(99, 102, 241, 0.12)",
              borderColor: "rgba(99, 102, 241, 0.3)",
              color: "#a5b4fc",
              marginBottom: "1rem",
            }}
          >
            <Mail size={14} />
            Let&apos;s Connect
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            Start a <span className="gradient-text-accent">Conversation</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "36rem",
              fontSize: "1.05rem",
            }}
          >
            Interested in building high-speed web products, API architectures, or AI integrations? Send a note or reach out directly.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Contact Info & Socials */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Email Card with Copy button */}
            <div
              className="glass-card"
              style={{
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <div className="contact-email-copy" style={{ display: "flex", alignItems: "center", gap: "1rem", minWidth: 0, flex: 1 }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "0.75rem",
                    background: "rgba(99, 102, 241, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Mail size={20} color="#818cf8" />
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500 }}>
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${profile.email}`}
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#fff",
                      textDecoration: "none",
                      wordBreak: "break-all",
                    }}
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <button
                onClick={copyEmail}
                title="Copy Email Address"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#cbd5e1",
                  borderRadius: "0.5rem",
                  padding: "0.5rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {copiedEmail ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
              </button>
            </div>

            {/* WhatsApp Card */}
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "0.75rem",
                  background: "rgba(16, 185, 129, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WhatsAppIcon size={20} color="#34d399" />
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  WhatsApp / Phone
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff" }}>
                  {profile.phone}
                </div>
              </div>
            </a>

            {/* Location & Timezone Card */}
            <div
              className="glass-card"
              style={{
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "0.75rem",
                  background: "rgba(56, 189, 248, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MapPin size={20} color="#38bdf8" />
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  Primary Location
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff" }}>
                  {profile.location} (PKT / UTC+5)
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div
              className="glass-card"
              style={{
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#f8fafc" }}>
                Find me on social:
              </div>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" as const }}>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" title="GitHub" style={{ width: "38px", height: "38px", borderRadius: "0.5rem", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", textDecoration: "none" }}>
                  <GithubIcon size={18} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" title="LinkedIn" style={{ width: "38px", height: "38px", borderRadius: "0.5rem", background: "rgba(10, 102, 194, 0.12)", border: "1px solid rgba(10, 102, 194, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60a5fa", textDecoration: "none" }}>
                  <LinkedinIcon size={18} />
                </a>
                <a href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" title="Instagram (@wasi._.20)" style={{ width: "38px", height: "38px", borderRadius: "0.5rem", background: "rgba(225, 48, 108, 0.12)", border: "1px solid rgba(225, 48, 108, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#f472b6", textDecoration: "none" }}>
                  <InstagramIcon size={18} />
                </a>
                <a href={profile.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile" title="Facebook (M.Awais.020)" style={{ width: "38px", height: "38px", borderRadius: "0.5rem", background: "rgba(24, 119, 242, 0.12)", border: "1px solid rgba(24, 119, 242, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60a5fa", textDecoration: "none" }}>
                  <FacebookIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="glass-card"
            style={{
              padding: "2.25rem",
              position: "relative",
            }}
          >
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "0.4rem",
              }}
            >
              Send an Instant Dispatch
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                marginBottom: "1.75rem",
              }}
            >
              Fill out the details below. Messages trigger an automated webhook and email alert.
            </p>

            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }} noValidate>
              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#cbd5e1",
                    marginBottom: "0.4rem",
                  }}
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Henderson"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.6rem",
                    background: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    fontFamily: "inherit",
                    fontSize: "0.95rem",
                    outline: "none",
                    transition: "border-color 0.2s ease",
                  }}
                />
              </div>

              <div>
                <label htmlFor="contact-email" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "0.4rem" }}>Your Email</label>
                <input id="contact-email" name="email" type="email" required placeholder="alex@company.com" style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.6rem", background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#fff", fontFamily: "inherit", fontSize: "0.95rem", outline: "none", transition: "border-color 0.2s ease" }} />
              </div>

              <div>
                <label htmlFor="contact-subject" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "0.4rem" }}>Subject</label>
                <input id="contact-subject" name="subject" type="text" required placeholder="e.g. Project Collaboration, Job Opportunity..." style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.6rem", background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#fff", fontFamily: "inherit", fontSize: "0.95rem", outline: "none", transition: "border-color 0.2s ease" }} />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#cbd5e1",
                    marginBottom: "0.4rem",
                  }}
                >
                  Project Details or Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Describe your project, timeline, or engineering inquiry..."
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.6rem",
                    background: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    fontFamily: "inherit",
                    fontSize: "0.95rem",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.2s ease",
                  }}
                />
              </div>

              {/* Honeypot field for bot spam prevention */}
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: "absolute", left: "-9999px" }}
                aria-hidden="true"
              />

              <button
                type="submit"
                disabled={state === "sending"}
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "0.85rem",
                  marginTop: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                <Send size={16} />
                <span>
                  {state === "sending" ? "Dispatching Message..." : "Transmit Message"}
                </span>
              </button>

              {/* Status Banner */}
              {state === "sent" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    background: "rgba(16, 185, 129, 0.12)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    color: "#34d399",
                    fontSize: "0.9rem",
                  }}
                >
                  <CheckCircle2 size={18} />
                  <span>Your message was received successfully! I will reply promptly.</span>
                </motion.div>
              )}

              {state === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    background: "rgba(239, 68, 68, 0.12)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    color: "#f87171",
                    fontSize: "0.9rem",
                  }}
                >
                  <AlertCircle size={18} />
                  <span>{error || "An error occurred while sending your message."}</span>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Radio, RefreshCw, Copy, Check } from "lucide-react";

function colorize(line: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(line))) {
    if (match.index > last) {
      parts.push(
        <span key={key++} className="json-punct">
          {line.slice(last, match.index)}
        </span>
      );
    }
    if (match[1] && match[2]) {
      parts.push(
        <span key={key++} className="json-key">
          {match[1]}
        </span>
      );
      parts.push(
        <span key={key++} className="json-punct">
          {match[2]}
        </span>
      );
    } else if (match[1]) {
      parts.push(
        <span key={key++} className="json-string">
          {match[1]}
        </span>
      );
    } else if (match[3]) {
      parts.push(
        <span key={key++} className="json-bool">
          {match[3]}
        </span>
      );
    } else {
      parts.push(
        <span key={key++} className="json-num">
          {match[0]}
        </span>
      );
    }
    last = match.index + match[0].length;
  }
  if (last < line.length) {
    parts.push(
      <span key={key++} className="json-punct">
        {line.slice(last)}
      </span>
    );
  }
  return parts;
}

const titleWords = ["Interactive", "Developer", "API", "Console"];

export default function ApiPanel() {
  const reduce = useReducedMotion();
  const [data, setData] = useState<Record<string, unknown> | null>(null);
  const [ms, setMs] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [runId, setRunId] = useState(0);

  const fetchApi = () => {
    setLoading(true);
    setFailed(false);
    const t = performance.now();
    fetch("/api/profile")
      .then((r) => {
        if (!r.ok) throw new Error("bad status");
        return r.json();
      })
      .then((j) => {
        setMs(Math.round(performance.now() - t));
        setData(j);
        setRunId((n) => n + 1);
        setLoading(false);
      })
      .catch(() => {
        setFailed(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleCopy = () => {
    if (!data) return;
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = data ? JSON.stringify(data, null, 2).split("\n") : [];
  const statusColor = failed ? "#f87171" : ms === null || loading ? "#38bdf8" : "#34d399";

  return (
    <section id="api-panel" className="section section-rule">
      <div className="api-glow" aria-hidden="true" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <motion.span
            className="glass-pill"
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.35 }}
            style={{
              color: "#6ee7b7",
              marginBottom: "1rem",
              borderColor: "rgba(16, 185, 129, 0.32)",
            }}
          >
            <Radio size={14} />
            Live Endpoint Demonstration
          </motion.span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={word}
                className={i >= 2 ? "gradient-text-accent" : undefined}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: reduce ? 0 : 0.08 + i * 0.07,
                  type: "spring",
                  stiffness: 380,
                  damping: 26,
                }}
                style={{ display: "inline-block", marginRight: "0.28em" }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "36rem",
              fontSize: "1.05rem",
            }}
          >
            Inspect the live backend API response generated directly by Next.js serverless edge routes in real-time.
          </p>
        </motion.div>

        <motion.div
          className="api-shell"
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="api-console">
            <div className="api-toolbar">
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <div style={{ display: "flex", gap: "0.4rem" }}>
                  <span className="api-traffic" style={{ background: "#ef4444" }} />
                  <span className="api-traffic" style={{ background: "#f59e0b" }} />
                  <span className="api-traffic api-traffic-live" style={{ background: "#10b981" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                  }}
                >
                  <span className="api-method">GET</span>
                  <span style={{ color: "#e2e8f0", fontWeight: 600 }}>/api/profile</span>
                </div>
              </div>

              <div
                className="api-toolbar-actions"
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}
              >
                <span className="api-status" style={{ color: statusColor }}>
                  <span
                    className={failed ? "api-dot api-dot-bad" : loading ? "api-dot api-dot-wait" : "api-dot"}
                  />
                  {failed ? "500 Error" : loading ? "Pinging..." : `200 OK • ${ms}ms`}
                </span>

                <motion.button
                  type="button"
                  className="api-action api-run"
                  onClick={fetchApi}
                  disabled={loading}
                  title="Send Request"
                  whileHover={reduce || loading ? undefined : { y: -2 }}
                  whileTap={reduce || loading ? undefined : { scale: 0.97 }}
                >
                  <motion.span
                    animate={loading && !reduce ? { rotate: 360 } : { rotate: 0 }}
                    transition={
                      loading && !reduce
                        ? { repeat: Infinity, duration: 0.7, ease: "linear" }
                        : { duration: 0.2 }
                    }
                    style={{ display: "flex" }}
                  >
                    <RefreshCw size={13} />
                  </motion.span>
                  <span>Run</span>
                </motion.button>

                <motion.button
                  type="button"
                  className="api-action api-copy"
                  onClick={handleCopy}
                  disabled={!data}
                  title="Copy Payload"
                  whileHover={reduce || !data ? undefined : { y: -2 }}
                  whileTap={reduce || !data ? undefined : { scale: 0.97 }}
                >
                  {copied ? <Check size={13} color="#34d399" /> : <Copy size={13} />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </motion.button>
              </div>
            </div>

            <div className="api-output-wrap">
              <div className="api-output" role="region" aria-label="Live API response">
                {failed ? (
                  <span className="json-punct" style={{ color: "#f87171" }}>
                    Request failed. Press Run to try the endpoint again.
                  </span>
                ) : lines.length === 0 ? (
                  <div style={{ display: "grid", gap: "0.7rem", padding: "0.35rem 0" }}>
                    {[78, 52, 66, 40, 84, 34].map((width) => (
                      <div key={width} className="api-skeleton" style={{ width: `${width}%` }} />
                    ))}
                  </div>
                ) : (
                  <motion.div
                    key={runId}
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: reduce ? 0 : 0.012 } },
                    }}
                  >
                    {lines.map((line, index) => (
                      <motion.div
                        key={`${runId}-${index}`}
                        className="api-line"
                        variants={{
                          hidden: reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 },
                          show: { opacity: 1, x: 0, transition: { duration: 0.28 } },
                        }}
                      >
                        <span className="api-ln">{index + 1}</span>
                        <span>
                          {colorize(line)}
                          {index === lines.length - 1 && !loading ? <span className="api-caret" /> : null}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Brain,
  ShieldCheck,
  BarChart3,
  FileSpreadsheet,
  Zap,
  Globe,
  TrendingUp,
  Clock,
  Eye,
  CheckCircle2,
  Target,
  Lightbulb,
  ChevronRight,
  Mail,
  MapPin,
  AlertTriangle,
} from "lucide-react";

// ── Floating cargo box component ────────────────────────────────
function FloatingBox({
  size,
  left,
  top,
  delay,
  color,
}: {
  size: number;
  left: string;
  top: string;
  delay: number;
  color: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width: size,
        height: size,
        borderRadius: size * 0.22,
        background: color,
        opacity: 0.12,
        animation: `float-slow ${6 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        pointerEvents: "none",
      }}
    />
  );
}

// ── Feature card ────────────────────────────────────────────────
function FeatureCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 400 + delay * 150);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className="glass-card"
      style={{
        padding: "2rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background: "linear-gradient(135deg, #EEF2FF, #C7D2FE)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.25rem",
        }}
      >
        <Icon size={24} color="#4338CA" strokeWidth={2} />
      </div>
      <h3
        style={{
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "#1E1B4B",
          marginBottom: "0.6rem",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "0.9rem",
          color: "#6B7280",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}

// ── Stat ticker item ────────────────────────────────────────────
function StatItem({
  value,
  label,
  icon: Icon,
  delay,
}: {
  value: string;
  label: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800 + delay * 200);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      style={{
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.8)",
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "0.4rem",
        }}
      >
        <Icon size={20} color="#4338CA" />
      </div>
      <div
        className="text-gradient"
        style={{
          fontSize: "2.25rem",
          fontWeight: 800,
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "0.78rem",
          fontWeight: 600,
          color: "#6B7280",
          marginTop: "0.25rem",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ── Step card for How It Works ───────────────────────────────────
function StepCard({
  number,
  title,
  description,
  icon: Icon,
  delay,
}: {
  number: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600 + delay * 200);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "1.25rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: "linear-gradient(135deg, #4338CA, #6366F1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          boxShadow: "0 4px 12px rgba(67,56,202,0.25)",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "1.1rem",
            fontWeight: 800,
          }}
        >
          {number}
        </span>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
          <Icon size={16} color="#4338CA" />
          <h3
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "#1E1B4B",
              margin: 0,
            }}
          >
            {title}
          </h3>
        </div>
        <p
          style={{
            fontSize: "0.88rem",
            color: "#6B7280",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  Landing Page
// ═══════════════════════════════════════════════════════════════

export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <div style={{ paddingTop: 64 }}>
      {/* ── Hero Section ───────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Kraft gradient background */}
        <div
          className="kraft-surface"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.35,
          }}
        />

        {/* Floating cargo boxes */}
        <FloatingBox size={80} left="8%" top="15%" delay={0} color="#4338CA" />
        <FloatingBox size={50} left="85%" top="20%" delay={1.5} color="#D4A574" />
        <FloatingBox size={65} left="75%" top="65%" delay={3} color="#6366F1" />
        <FloatingBox size={40} left="15%" top="72%" delay={2} color="#C48B52" />
        <FloatingBox size={55} left="50%" top="10%" delay={4} color="#818CF8" />
        <FloatingBox size={35} left="30%" top="80%" delay={1} color="#D4A574" />

        <div
          className="section-container"
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "4rem 1.5rem",
          }}
        >
          {/* Tag line */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.6s ease 0.1s",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "0.4rem 1rem",
                borderRadius: 100,
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(212,165,116,0.2)",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#4338CA",
              }}
            >
              <Zap size={14} />
              AI-Powered Shipment Delay Predictor
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-gradient"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: "1.25rem",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            Know Your Delays
            <br />
            Before They Happen
          </h1>

          {/* Sub-headline */}
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#6B7280",
              maxWidth: 600,
              margin: "0 auto 2.5rem",
              lineHeight: 1.65,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.7s ease 0.35s",
            }}
          >
            Stop guessing about customs delays. Our AI analyzes your shipment
            details and predicts potential delays in seconds — so you can take
            action before problems arise.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.7s ease 0.5s",
            }}
          >
            <Link href="/predict" style={{ textDecoration: "none" }}>
              <button className="btn-primary" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
                <BarChart3 size={18} />
                Start Predicting
                <ArrowRight size={16} />
              </button>
            </Link>
            <Link href="/bulk" style={{ textDecoration: "none" }}>
              <button className="btn-secondary" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
                <FileSpreadsheet size={18} />
                Upload Bulk Data
              </button>
            </Link>
          </div>
        </div>
      </section>



      {/* ── Problem Statement Section ─────────────────────────── */}
      <section
        style={{
          padding: "4.5rem 0",
          background:
            "linear-gradient(160deg, #F5E6D3 0%, #FEFCF9 45%, #EEF2FF 100%)",
          borderTop: "1px solid rgba(212,165,116,0.18)",
          borderBottom: "1px solid rgba(212,165,116,0.12)",
        }}
      >
        <div className="section-container">
          <div
            style={{
              maxWidth: 820,
              margin: "0 auto",
              textAlign: "center",
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "0.35rem 1rem",
                borderRadius: 100,
                background: "rgba(180,130,60,0.1)",
                border: "1px solid rgba(196,139,82,0.35)",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#8B6914",
                marginBottom: "1.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <AlertTriangle size={13} />
              The Real Cost of Supply Chain Blind Spots
            </div>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                fontWeight: 800,
                color: "#1E1B4B",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              Every delayed shipment costs you money.
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #C48B52, #4338CA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Most companies only find out when it&apos;s too late.
              </span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#6B7280",
                lineHeight: 1.7,
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              Cross-border shipments are unpredictable — customs clearance, vendor
              lead times, freight mode, and destination country all influence whether
              your goods arrive on time. Without visibility into these risk factors,
              supply chain teams are left reacting instead of planning.
            </p>
          </div>

          {/* Pain Point Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
              maxWidth: 820,
              margin: "0 auto",
            }}
          >
            {[
              {
                emoji: "📦",
                title: "No early warning",
                desc: "Delays surface only after goods are stuck at customs — too late to act.",
              },
              {
                emoji: "📊",
                title: "Data stays siloed",
                desc: "Shipment history, vendor terms, and freight data live in separate spreadsheets.",
              },
              {
                emoji: "🔁",
                title: "Reactive planning",
                desc: "Teams scramble to expedite shipments and absorb extra costs after delays hit.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card"
                style={{
                  padding: "1.5rem",
                  borderLeft: "3px solid rgba(196,139,82,0.5)",
                  cursor: "default",
                }}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "0.6rem" }}>
                  {item.emoji}
                </div>
                <div
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    color: "#1E1B4B",
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    fontSize: "0.83rem",
                    color: "#6B7280",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>


          {/* Bridge to solution */}
          <div
            style={{
              textAlign: "center",
              marginTop: "2.5rem",
              fontSize: "1rem",
              fontWeight: 600,
              color: "#4338CA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <ShieldCheck size={18} />
            ShipSight Intelligence fixes this — predict before it happens.
          </div>
        </div>
      </section>

      {/* ── Stats Ticker ───────────────────────────────────────── */}
      <section
        style={{
          padding: "3rem 0",
          borderTop: "1px solid rgba(212,165,116,0.12)",
          borderBottom: "1px solid rgba(212,165,116,0.12)",
          background: "rgba(255,255,255,0.5)",
        }}
      >
        <div
          className="section-container"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "4rem",
            flexWrap: "wrap",
          }}
        >
          <StatItem icon={TrendingUp} value="2,900+" label="Shipments Analyzed" delay={0} />
          <StatItem icon={Target} value="93%" label="Prediction Accuracy" delay={1} />
          <StatItem icon={Clock} value="<2s" label="Instant Results" delay={2} />
          <StatItem icon={Globe} value="40+" label="Countries Supported" delay={3} />
        </div>
      </section>

      {/* ── Features / Services Section ────────────────────────── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="section-container">
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                color: "#1E1B4B",
                marginBottom: "0.5rem",
              }}
            >
              Everything You Need to Manage Shipment Risk
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#6B7280",
                maxWidth: 550,
                margin: "0 auto",
              }}
            >
              From predicting delays to getting actionable recommendations — all in one platform
            </p>
          </div>

          {/* Feature cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <FeatureCard
              icon={TrendingUp}
              title="Delay Prediction"
              description="Know exactly how many days your shipment might be delayed. Our AI analyzes multiple factors like origin country, shipping mode, vendor history, and more to give you accurate predictions."
              delay={0}
            />
            <FeatureCard
              icon={Eye}
              title="Risk Analysis"
              description="Understand what's driving the risk for each shipment. See a clear breakdown of which factors — like vendor terms, freight costs, or timing — contribute most to potential delays."
              delay={1}
            />
            <FeatureCard
              icon={Lightbulb}
              title="Smart Action Plans"
              description="Don't just see the problem — get the solution. Receive AI-generated recommendations tailored to your specific shipment to prevent delays and reduce costs."
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────── */}
      <section
        style={{
          padding: "4rem 0 5rem",
          background: "linear-gradient(180deg, rgba(238,242,255,0.3) 0%, rgba(245,230,211,0.2) 100%)",
        }}
      >
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "#1E1B4B",
                marginBottom: "0.4rem",
              }}
            >
              How It Works
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#6B7280" }}>
              Get from shipment data to actionable insights in just 4 simple steps
            </p>
          </div>

          <div
            style={{
              maxWidth: 600,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <StepCard
              number={1}
              icon={FileSpreadsheet}
              title="Enter Shipment Details"
              description="Fill in basic information like destination country, shipping mode, vendor, weight, and freight cost — or upload a CSV for bulk analysis."
              delay={0}
            />
            <StepCard
              number={2}
              icon={Brain}
              title="AI Analyzes Your Data"
              description="Our prediction engine instantly processes your shipment data, identifying patterns and risk factors from thousands of historical records."
              delay={1}
            />
            <StepCard
              number={3}
              icon={BarChart3}
              title="View Risk Report"
              description="Get a clear report showing your risk level (Low/High), predicted delay in days, and a breakdown of what's driving the risk."
              delay={2}
            />
            <StepCard
              number={4}
              icon={CheckCircle2}
              title="Take Action"
              description="Follow the AI-generated action plan with specific recommendations to mitigate delays and keep your supply chain running smoothly."
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* ── Final CTA Section ─────────────────────────────────────── */}
      <section
        style={{
          padding: "5rem 0",
          textAlign: "center",
        }}
      >
        <div className="section-container">
          <div
            className="glass-card"
            style={{
              padding: "3.5rem 2rem",
              maxWidth: 700,
              margin: "0 auto",
              background: "linear-gradient(135deg, rgba(238,242,255,0.6), rgba(255,255,255,0.8))",
              cursor: "default",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "linear-gradient(135deg, #4338CA, #6366F1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
                boxShadow: "0 8px 24px rgba(67,56,202,0.3)",
              }}
            >
              <ShieldCheck size={28} color="white" />
            </div>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "#1E1B4B",
                marginBottom: "0.75rem",
              }}
            >
              Ready to Optimize Your Supply Chain?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#6B7280",
                maxWidth: 480,
                margin: "0 auto 2rem",
                lineHeight: 1.65,
              }}
            >
              Built for logistics and supply chain teams who want data-driven
              foresight — not hindsight — on every shipment.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Link href="/predict" style={{ textDecoration: "none" }}>
                <button
                  className="btn-primary"
                  style={{ fontSize: "1rem", padding: "0.95rem 2.5rem" }}
                >
                  Start Free Prediction
                  <ChevronRight size={18} />
                </button>
              </Link>
              <Link href="/bulk" style={{ textDecoration: "none" }}>
                <button
                  className="btn-secondary"
                  style={{ fontSize: "1rem", padding: "0.95rem 2rem" }}
                >
                  Try Bulk Upload
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer
        style={{
          padding: "3rem 0 2rem",
          borderTop: "1px solid rgba(212,165,116,0.12)",
          background: "linear-gradient(180deg, rgba(245,230,211,0.1) 0%, rgba(238,242,255,0.15) 100%)",
        }}
      >
        <div className="section-container">
          {/* Footer Top */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {/* Brand Column */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, #4338CA, #6366F1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Eye size={16} color="white" />
                </div>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#1E1B4B",
                  }}
                >
                  ShipSight Intelligence
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#9CA3AF",
                  lineHeight: 1.6,
                  maxWidth: 250,
                }}
              >
                AI-powered supply chain risk prediction platform. Predict delays,
                understand risks, and take action — before problems arise.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#1E1B4B",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "1rem",
                }}
              >
                Platform
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Link
                  href="/predict"
                  style={{
                    fontSize: "0.85rem",
                    color: "#6B7280",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#4338CA")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
                >
                  Single Prediction
                </Link>
                <Link
                  href="/bulk"
                  style={{
                    fontSize: "0.85rem",
                    color: "#6B7280",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#4338CA")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
                >
                  Bulk Upload
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#1E1B4B",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "1rem",
                }}
              >
                Contact
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: "#6B7280",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Mail size={13} />
                  support@shipsight.ai
                </span>
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: "#6B7280",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <MapPin size={13} />
                  Global Operations
                </span>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div
            style={{
              borderTop: "1px solid rgba(212,165,116,0.12)",
              paddingTop: "1.25rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            <p
              style={{
                fontSize: "0.78rem",
                color: "#9CA3AF",
                margin: 0,
              }}
            >
              © 2026 ShipSight Intelligence. All rights reserved.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.78rem",
                color: "#9CA3AF",
              }}
            >
              <Globe size={12} />
              <span>v1.0 · Cross-Border Supply Chain Risk Predictor</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

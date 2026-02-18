import { useEffect, useState } from "react";
import JarvisRing from "@/components/JarvisRing";
import StatCard from "@/components/StatCard";
import N8NChatWidget from "@/components/N8NChatWidget";
import heroImage from "@/assets/jarvis-hero.jpg";

const TYPING_LINES = [
  "Initializing personal AI agent...",
  "Neural networks online.",
  "Ready to assist.",
];

const TypingText = ({ text }: { text: string }) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      {!done && <span className="animate-pulse text-primary">▊</span>}
    </span>
  );
};

const STATS = [
  {
    icon: "🤖",
    label: "Agent Mode",
    value: "JARVIS v1.0",
    description: "Personal AI assistant powered by N8N workflows",
  },
  {
    icon: "⚡",
    label: "Response Time",
    value: "< 2 seconds",
    description: "Real-time intelligent responses, always on standby",
  },
  {
    icon: "🧠",
    label: "Intelligence",
    value: "Multi-Model",
    description: "Leveraging advanced LLMs for deep reasoning",
  },
  {
    icon: "🔐",
    label: "Security",
    value: "Encrypted",
    description: "End-to-end secure conversations & data handling",
  },
];

const CAPABILITIES = [
  { label: "Research & Analysis", level: 90 },
  { label: "Task Automation", level: 85 },
  { label: "Scheduling & Planning", level: 78 },
  { label: "Code Assistance", level: 92 },
];

const Index = () => {
  const [bootLine, setBootLine] = useState(0);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    if (bootLine < TYPING_LINES.length - 1) {
      const t = setTimeout(() => setBootLine((b) => b + 1), 1800);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setBooted(true), 1800);
      return () => clearTimeout(t);
    }
  }, [bootLine]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background grid pattern */}
      <div className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(188 100% 50% / 0.03) 1px, transparent 1px),
            linear-gradient(90deg, hsl(188 100% 50% / 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />

      {/* Background hero image overlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <img
          src={heroImage}
          alt="JARVIS background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, hsl(220 40% 4% / 0.3) 0%, hsl(220 40% 4%) 80%)' }} />
      </div>

      {/* Header / Nav */}
      <header className="relative z-10 border-b border-primary/20"
        style={{ background: 'hsl(220 40% 4% / 0.9)', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-primary animate-pulse-glow flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary" style={{ boxShadow: '0 0 8px hsl(188 100% 50%)' }} />
            </div>
            <span className="font-orbitron text-primary text-lg font-bold glow-text tracking-widest">JARVIS</span>
            <span className="font-mono-tech text-muted-foreground text-xs">// PERSONAL AGENT</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono-tech text-xs text-primary">ONLINE</span>
            </div>
            <div className="font-mono-tech text-xs text-muted-foreground hidden md:block">
              {new Date().toLocaleTimeString('en-US', { hour12: false })}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div className="space-y-8">
            {/* Boot sequence */}
            <div className="glass-card rounded-lg p-4 font-mono-tech text-xs space-y-1">
              {TYPING_LINES.slice(0, bootLine + 1).map((line, i) => (
                <div key={i} className={i === bootLine ? "text-primary" : "text-muted-foreground"}>
                  <span className="text-accent mr-2">›</span>
                  {i === bootLine ? <TypingText text={line} /> : line}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="font-mono-tech text-primary text-sm tracking-widest uppercase animate-flicker">
                — Hello, I'm your
              </div>
              <h1 className="font-orbitron text-6xl md:text-7xl font-black text-primary glow-text leading-none animate-flicker">
                JARVIS
              </h1>
              <h2 className="font-orbitron text-2xl md:text-3xl font-light text-foreground/80 tracking-wide">
                Personal AI Agent
              </h2>
              <p className="font-exo text-foreground/60 text-lg leading-relaxed max-w-lg">
                An intelligent assistant built to automate, research, and assist with anything you need.
                Powered by advanced AI workflows — always on, always ready.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 glass-card">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono-tech text-xs text-primary">SYSTEM ACTIVE</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 glass-card">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span className="font-mono-tech text-xs text-accent">N8N CONNECTED</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border glass-card">
                <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                <span className="font-mono-tech text-xs text-muted-foreground">ENCRYPTED</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => {
                  const el = document.querySelector('.n8n-chat-toggle') as HTMLButtonElement;
                  if (el) el.click();
                }}
                className="group relative font-orbitron text-sm font-semibold px-8 py-4 rounded overflow-hidden transition-all duration-300"
                style={{
                  background: 'linear-gradient(90deg, hsl(188 100% 50%), hsl(200 100% 60%))',
                  color: 'hsl(220 40% 4%)',
                  boxShadow: '0 0 20px hsl(188 100% 50% / 0.4)',
                }}>
                <span className="relative z-10 tracking-widest">ACTIVATE JARVIS</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{ background: 'white' }} />
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-orbitron text-sm font-medium px-8 py-4 rounded border border-primary/40 text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 tracking-widest">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Right — Jarvis Ring */}
          <div className="flex justify-center items-center">
            <JarvisRing />
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
          <h2 className="font-orbitron text-xl text-primary tracking-widest glow-text">SYSTEM SPECS</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
          <h2 className="font-orbitron text-xl text-primary tracking-widest glow-text">CAPABILITIES</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <div key={i} className="glass-card rounded-lg p-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-orbitron text-sm text-foreground/80 tracking-wide">{cap.label}</span>
                <span className="font-mono-tech text-primary text-sm">{cap.level}%</span>
              </div>
              <div className="w-full h-1 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${cap.level}%`,
                    background: 'linear-gradient(90deg, hsl(188 100% 50%), hsl(200 100% 60%))',
                    boxShadow: '0 0 8px hsl(188 100% 50% / 0.6)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-primary/20 py-8 mt-8"
        style={{ background: 'hsl(220 40% 4% / 0.9)' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border border-primary/60 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
            <span className="font-orbitron text-primary text-sm glow-text">JARVIS</span>
          </div>
          <div className="font-mono-tech text-xs text-muted-foreground">
            PERSONAL AGENT // ALL SYSTEMS NOMINAL // {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono-tech text-xs text-primary">ONLINE</span>
          </div>
        </div>
      </footer>

      {/* N8N Chat Widget */}
      <N8NChatWidget />
    </div>
  );
};

export default Index;

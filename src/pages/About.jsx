import React, { useEffect, useRef, useState, useCallback } from 'react';
import SEO from '../components/SEO';
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2, Users, Zap, Terminal, Globe, Code2, Cpu, Coffee,
  ArrowRight, Search, PenTool, Rocket, ChevronDown, XCircle,
  Lock, MessageSquare, CreditCard, ShieldCheck, Activity,
  Database, Bot, Layers, TrendingUp, Clock, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AntiGravityBackground from '../components/AntiGravityBackground';

/* ══════════════════════════════════════════════
   SECTION 0 — SHARED UTILS
══════════════════════════════════════════════ */
const Counter = ({ value, suffix = '', prefix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  useEffect(() => { if (isInView) motionValue.set(value); }, [isInView, value, motionValue]);
  useEffect(() => {
    springValue.on('change', (v) => {
      if (ref.current) ref.current.textContent = prefix + Math.floor(v) + suffix;
    });
  }, [springValue, prefix, suffix]);
  return <span ref={ref}>0</span>;
};

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <button onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none group">
        <span className={`text-base font-bold transition-colors ${open ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>
          {question}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 ml-4">
          <ChevronDown size={16} className={open ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body"
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <p className="pb-5 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ══════════════════════════════════════════════
   SECTION 1 — AUTOMATION ENGINE (Hero Widget)
══════════════════════════════════════════════ */
const ENGINE_NODES = [
  { label: 'AshbitSoft', x: 0.50, y: 0.50, r: 22, color: '#6366f1', isHub: true },
  { label: 'Sheets API', x: 0.10, y: 0.20, r: 13, color: '#34d399' },
  { label: 'OpenAI', x: 0.82, y: 0.18, r: 15, color: '#a78bfa' },
  { label: 'WhatsApp', x: 0.88, y: 0.75, r: 13, color: '#4ade80' },
  { label: 'MongoDB', x: 0.12, y: 0.78, r: 13, color: '#f59e0b' },
  { label: 'Gmail', x: 0.38, y: 0.06, r: 11, color: '#f87171' },
  { label: 'Supabase', x: 0.70, y: 0.92, r: 11, color: '#38bdf8' },
];
const ENGINE_EDGES = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [1, 5], [2, 3]];
const TERMINAL_LINES = [
  { cls: 'prompt', txt: '$ ' },
  { cls: 'cmd', txt: 'node automation.engine --env=prod' },
  { cls: 'ok', txt: '✓ Engine initialised (v2.6.1)' },
  { cls: 'dim', txt: '  loading 24 workflow configs...' },
  { cls: 'ok', txt: '✓ Sheets API connected' },
  { cls: 'ok', txt: '✓ OpenAI pipeline ready' },
  { cls: 'warn', txt: '⚠ Rate limit: queuing 3 tasks' },
  { cls: 'ok', txt: '✓ All systems nominal' },
  { cls: 'prompt', txt: '$ ' },
  { cls: 'cmd', txt: 'run --module=lead-scorer' },
  { cls: 'dim', txt: '  scoring 142 leads...' },
  { cls: 'ok', txt: '✓ Done — 38 hot, 61 warm, 43 cold' },
];
const LOG_MESSAGES = [
  { color: '#34d399', text: 'Invoice #5291 dispatched to Priya S.' },
  { color: '#818cf8', text: 'Lead scored: Arjun M. → Hot' },
  { color: '#38bdf8', text: 'DB backup completed — 1.2 GB' },
  { color: '#f59e0b', text: 'WhatsApp campaign: 340 msgs sent' },
  { color: '#34d399', text: 'New client onboarded: VentureStack' },
  { color: '#818cf8', text: 'AI chatbot resolved 12 tickets' },
  { color: '#f87171', text: 'Retry #2 — webhook timeout' },
  { color: '#34d399', text: 'Sheets sync — 892 rows updated' },
];
const BAR_DATA = [
  { name: 'AI Engine', pct: 84, color: '#818cf8' },
  { name: 'DB Sync', pct: 56, color: '#38bdf8' },
  { name: 'Email Bot', pct: 91, color: '#34d399' },
  { name: 'Scraper', pct: 33, color: '#f59e0b' },
];

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function useAnimCounter(to, duration = 1400, delay = 300) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const start = performance.now();
      const step = (now) => {
        const p = Math.min(easeOutCubic((now - start) / duration), 1);
        setVal(Math.round(p * to));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(t);
  }, [to, duration, delay]);
  return val;
}

const NetworkCanvas = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particles = useRef([]);
  const tRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    const spawn = () => {
      const e = ENGINE_EDGES[Math.floor(Math.random() * ENGINE_EDGES.length)];
      const [a, b] = Math.random() > 0.5 ? e : [e[1], e[0]];
      particles.current.push({ from: a, to: b, prog: 0, speed: 0.007 + Math.random() * 0.007, color: ENGINE_NODES[a].color });
    };

    const draw = () => {
      const cw = canvas.offsetWidth, ch = canvas.offsetHeight;
      ctx.clearRect(0, 0, cw, ch);
      tRef.current += 0.012;

      ENGINE_EDGES.forEach(([a, b]) => {
        const na = ENGINE_NODES[a], nb = ENGINE_NODES[b];
        ctx.beginPath();
        ctx.moveTo(na.x * cw, na.y * ch);
        ctx.lineTo(nb.x * cw, nb.y * ch);
        ctx.strokeStyle = 'rgba(99,102,241,0.14)';
        ctx.lineWidth = 1; ctx.stroke();
      });

      particles.current = particles.current.filter(p => {
        p.prog += p.speed;
        if (p.prog >= 1) return false;
        const na = ENGINE_NODES[p.from], nb = ENGINE_NODES[p.to];
        const px = (na.x * (1 - p.prog) + nb.x * p.prog) * cw;
        const py = (na.y * (1 - p.prog) + nb.y * p.prog) * ch;
        ctx.globalAlpha = 0.9;
        ctx.beginPath(); ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color; ctx.fill();
        ctx.globalAlpha = 0.2;
        ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fillStyle = p.color; ctx.fill();
        ctx.globalAlpha = 1;
        return true;
      });
      if (Math.random() < 0.06) spawn();

      ENGINE_NODES.forEach(n => {
        const x = n.x * cw, y = n.y * ch;
        if (n.isHub) {
          const pulse = (Math.sin(tRef.current * 2) + 1) / 2;
          ctx.beginPath(); ctx.arc(x, y, n.r + 8 + pulse * 6, 0, Math.PI * 2);
          ctx.fillStyle = n.color + '20'; ctx.fill();
        }
        const g = ctx.createRadialGradient(x - n.r * 0.3, y - n.r * 0.3, 0, x, y, n.r);
        g.addColorStop(0, n.isHub ? '#818cf8' : n.color + 'cc');
        g.addColorStop(1, n.color);
        ctx.beginPath(); ctx.arc(x, y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();
        ctx.strokeStyle = n.color + '88'; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.font = `bold ${n.isHub ? 9 : 8}px SF Mono,monospace`;
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(n.label, x, y);
      });
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <canvas ref={canvasRef} className="w-full rounded-xl" style={{
      height: 170, display: 'block',
      border: '1px solid rgba(255,255,255,0.07)',
      background: 'rgba(255,255,255,0.02)'
    }} />
  );
};

const EngineTerminal = () => {
  const [lines, setLines] = useState([]);
  const boxRef = useRef(null);
  const idxRef = useRef(0);
  const timerRef = useRef(null);
  const delays = { prompt: 0, cmd: 900, ok: 350, dim: 500, warn: 350 };

  useEffect(() => {
    const next = () => {
      const i = idxRef.current;
      if (i >= TERMINAL_LINES.length) {
        idxRef.current = 0; setLines([]);
        timerRef.current = setTimeout(next, 2000); return;
      }
      const line = TERMINAL_LINES[i]; idxRef.current++;
      setLines(p => [...p, { ...line, id: Date.now() + i }]);
      timerRef.current = setTimeout(next, delays[line.cls] ?? 400);
    };
    timerRef.current = setTimeout(next, 400);
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => { if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight; }, [lines]);

  const colors = { prompt: '#6366f1', cmd: '#e2e8f0', ok: '#34d399', dim: '#475569', warn: '#f59e0b' };
  return (
    <div ref={boxRef} style={{
      background: '#050508', border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 10, padding: '10px 12px', minHeight: 110, overflow: 'hidden'
    }}>
      {lines.map((l, i) => (
        <div key={l.id} style={{
          fontFamily: "'SF Mono',monospace", fontSize: 10, lineHeight: 1.7,
          color: colors[l.cls], whiteSpace: 'nowrap', overflow: 'hidden'
        }}>
          {l.txt}
          {i === lines.length - 1 && (
            <span style={{
              display: 'inline-block', width: 6, height: 11, marginLeft: 2,
              background: '#6366f1', verticalAlign: 'middle',
              animation: 'blink-cur 1s infinite'
            }} />
          )}
        </div>
      ))}
      <style>{`@keyframes blink-cur{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  );
};

const EngineLogFeed = () => {
  const [log, setLog] = useState([]);
  const idxRef = useRef(0);
  useEffect(() => {
    const tick = () => {
      const m = LOG_MESSAGES[idxRef.current % LOG_MESSAGES.length]; idxRef.current++;
      setLog(p => [{ ...m, id: Date.now() }, ...p].slice(0, 5));
    };
    tick();
    const iv = setInterval(tick, 2400);
    return () => clearInterval(iv);
  }, []);
  const times = ['now', '2s ago', '5s ago', '9s ago', '14s ago'];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, overflow: 'hidden' }}>
      <AnimatePresence initial={false}>
        {log.map((item, i) => (
          <motion.div key={item.id}
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1 - i * 0.18, y: 0, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'flex', alignItems: 'flex-start', gap: 6,
              padding: '5px 8px', borderRadius: 6,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
              fontFamily: "'SF Mono',monospace", fontSize: 9
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: item.color, marginTop: 3, flexShrink: 0 }} />
            <span style={{ color: 'rgba(255,255,255,0.6)', flex: 1 }}>{item.text}</span>
            <span style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}>{times[i]}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const AutomationEngine = () => {
  const tasks = useAnimCounter(8500, 1600, 400);
  const uptime = useAnimCounter(99, 1000, 400);
  const clients = useAnimCounter(50, 1400, 400);
  const [barsReady, setBarsReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setBarsReady(true), 600); return () => clearTimeout(t); }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        background: '#0a0a12', borderRadius: 16, overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 32px 64px rgba(99,102,241,0.15)'
      }}
    >
      {/* Chrome */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 7, padding: '10px 16px',
        background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)'
      }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444', opacity: 0.8 }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b', opacity: 0.8 }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981', opacity: 0.8 }} />
        <span style={{
          marginLeft: 8, fontFamily: "'SF Mono',monospace", fontSize: 10, fontWeight: 700,
          letterSpacing: '.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase'
        }}>
          ASHBITSOFT — AUTOMATION ENGINE v2.6
        </span>
        <span style={{
          marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 5,
          fontSize: 9, fontWeight: 800, letterSpacing: '.1em', color: '#34d399'
        }}>
          <span className="relative flex" style={{ width: 7, height: 7 }}>
            <span className="animate-ping absolute inline-flex rounded-full" style={{ width: '100%', height: '100%', background: '#34d399', opacity: 0.75 }} />
            <span style={{ position: 'relative', width: 7, height: 7, borderRadius: '50%', background: '#34d399' }} />
          </span>
          LIVE
        </span>
      </div>

      {/* Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 190px' }}>
        {/* LEFT */}
        <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 12, borderRight: '1px solid rgba(255,255,255,0.07)' }}>
          <div>
            <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 8, fontFamily: "'SF Mono',monospace" }}>
              Service Network
            </p>
            <NetworkCanvas />
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
            {[
              { val: tasks.toLocaleString(), label: 'Tasks/day', color: '#818cf8' },
              { val: uptime + '.0', label: 'Uptime %', color: '#34d399' },
              { val: clients + '+', label: 'Clients', color: '#f59e0b' },
            ].map((s, i) => (
              <div key={i} style={{
                borderRadius: 8, padding: '9px 11px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)'
              }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: s.color, fontVariantNumeric: 'tabular-nums', lineHeight: 1.1 }}>{s.val}</div>
                <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'rgba(255,255,255,0.28)', marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Load bars */}
          <div>
            <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 8, fontFamily: "'SF Mono',monospace" }}>
              Engine Load
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {BAR_DATA.map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: "'SF Mono',monospace", fontSize: 9, color: 'rgba(255,255,255,0.4)', width: 62, flexShrink: 0 }}>{b.name}</span>
                  <div style={{ flex: 1, height: 4, borderRadius: 99, background: 'rgba(255,255,255,0.07)', overflow: 'hidden' }}>
                    <motion.div
                      style={{ height: '100%', borderRadius: 99, background: b.color }}
                      initial={{ width: 0 }}
                      animate={{ width: barsReady ? `${b.pct}%` : 0 }}
                      transition={{ duration: 1.1, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                  <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)', width: 24, textAlign: 'right', flexShrink: 0 }}>{b.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div>
            <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 7, fontFamily: "'SF Mono',monospace" }}>
              Terminal
            </p>
            <EngineTerminal />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 7, fontFamily: "'SF Mono',monospace" }}>
              Event Log
            </p>
            <EngineLogFeed />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ══════════════════════════════════════════════
   SECTION 1.5 — BENTO EVOLUTION
══════════════════════════════════════════════ */

/* Animated counter that fires when card enters view */
const StatCounter = ({ to = 50 }) => {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: '-60px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!seen) return;
    let frame = null;
    const start = performance.now();
    const dur = 1200;
    const step = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setN(Math.round(ease * to));
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [seen, to]);

  return <span ref={ref}>{n}</span>;
};

/* Tech tag — hover highlights it */
const TechTag = ({ label, color }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider cursor-pointer select-none transition-all duration-200 ${hovered
          ? `${color} shadow-md`
          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
        }`}
    >
      {label}
    </motion.span>
  );
};

const TECH_TAGS = [
  { label: 'React', color: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700' },
  { label: 'Node.js', color: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700' },
  { label: 'Python', color: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700' },
  { label: 'AI', color: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-700' },
  { label: 'Cloud', color: 'bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-700' },
];

const COUNTRIES = [
  { code: 'IN', bg: 'bg-orange-700' },
  { code: 'UK', bg: 'bg-blue-800' },
  { code: 'AE', bg: 'bg-emerald-800' },
  { code: 'SG', bg: 'bg-red-800' },
];

const BentoEvolution = () => {
  const [sparkHovered, setSparkHovered] = useState(false);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800">
            <Sparkles size={11} /> Our Evolution
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">The Build Log</h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* ── CARD 1: The Spark ── col-span-2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            onHoverStart={() => setSparkHovered(true)}
            onHoverEnd={() => setSparkHovered(false)}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
            className="md:col-span-2 relative rounded-3xl p-8 overflow-hidden cursor-default"
            style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' }}
          >
            {/* shimmer sweep */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ x: sparkHovered ? ['−100%', '200%'] : '-100%' }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              style={{
                background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.1) 50%, transparent 65%)',
                transform: sparkHovered ? 'translateX(200%)' : 'translateX(-100%)',
              }}
            />
            {/* soft orb */}
            <div className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: 'rgba(255,255,255,0.08)', filter: 'blur(48px)', transform: 'translate(30%,-30%)' }} />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white/90 text-[10px] font-black uppercase tracking-widest mb-5">
                2023
              </div>
              <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                <Zap size={22} className="text-yellow-300" />
              </div>
              <h4 className="text-2xl font-black text-white mb-3">The Spark</h4>
              <p className="text-indigo-100 leading-relaxed max-w-lg text-sm">
                It started with a big idea: high-leverage automation. We launched "Script #1" and saved our first client 30 hours a week. That was the moment we knew this was big.
              </p>
              {/* stats row inside card */}
              <div className="flex gap-6 mt-7 pt-6 border-t border-white/15">
                {[['30h', 'Saved week 1'], ['1', 'First client'], ['∞', 'Ideas born']].map(([v, l]) => (
                  <div key={l}>
                    <div className="text-2xl font-black text-white leading-none">{v}</div>
                    <div className="text-[10px] text-indigo-200 mt-1 font-semibold uppercase tracking-wide">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── CARD 2: 50+ Projects ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
            className="group rounded-3xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/8 hover:border-indigo-300/50 dark:hover:border-indigo-600/40 transition-all duration-300 flex flex-col items-center justify-center text-center"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-5"
            >
              <CheckCircle2 size={30} className="text-emerald-500" />
            </motion.div>
            <div className="text-5xl font-black text-slate-900 dark:text-white mb-1 tabular-nums">
              <StatCounter to={50} />+
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Projects Shipped</p>
            <div className="mt-5 w-full grid grid-cols-3 gap-2">
              {[['94%', 'Retention'], ['4.9★', 'Rating'], ['15+', 'Countries']].map(([v, l]) => (
                <div key={l} className="bg-slate-50 dark:bg-slate-800/60 rounded-xl py-2 px-1 text-center">
                  <div className="text-xs font-black text-slate-900 dark:text-white">{v}</div>
                  <div className="text-[9px] text-slate-400 mt-0.5 font-semibold uppercase tracking-wide">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── CARD 3: Global Scale ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
            className="rounded-3xl p-7 bg-slate-900 dark:bg-black border border-slate-800 shadow-lg hover:shadow-2xl hover:border-indigo-700/40 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-5">
              <Globe size={20} className="text-indigo-400" />
            </div>
            <h4 className="text-lg font-black text-white mb-2">Global Scale</h4>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">From local startups to enterprises in 15+ countries.</p>

            {/* Country avatars */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex -space-x-2">
                {COUNTRIES.map(c => (
                  <motion.div
                    key={c.code}
                    whileHover={{ zIndex: 10, scale: 1.25, y: -3 }}
                    className={`w-8 h-8 rounded-full ${c.bg} border-2 border-slate-900 flex items-center justify-center text-[9px] font-black text-white cursor-pointer`}
                    style={{ position: 'relative' }}
                  >
                    {c.code}
                  </motion.div>
                ))}
              </div>
              <span className="text-[10px] text-slate-500 font-semibold ml-1">+11 more</span>
            </div>

            {/* Tiny bar — coverage */}
            <div className="space-y-1.5">
              {[['Asia', 60], ['Europe', 25], ['Americas', 15]].map(([r, pct]) => (
                <div key={r} className="flex items-center gap-2">
                  <span className="text-[9px] text-slate-500 w-14 font-semibold">{r}</span>
                  <div className="flex-1 h-1 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-indigo-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.4 }}
                    />
                  </div>
                  <span className="text-[9px] text-slate-500 w-6 text-right">{pct}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── CARD 4: Tech DNA ── col-span-2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.3 }}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
            className="md:col-span-2 rounded-3xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/5 hover:border-indigo-300/40 dark:hover:border-indigo-600/30 transition-all duration-300 relative overflow-hidden"
          >
            {/* rainbow top bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 via-violet-500 to-purple-500 rounded-t-3xl" />

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <Code2 size={16} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 dark:text-white">Our Tech DNA</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm">
                  We don't just write code; we architect solutions. Our stack has evolved from simple scripts to a powerhouse of AI, Cloud, and Edge technologies.
                </p>
                <div className="flex gap-2.5 flex-wrap">
                  {TECH_TAGS.map(t => <TechTag key={t.label} {...t} />)}
                </div>
              </div>

              {/* Animated code block decoration */}
              <div className="w-full md:w-52 rounded-2xl overflow-hidden shrink-0"
                style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-center gap-1.5 px-3 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-2 h-2 rounded-full bg-red-500/70" />
                  <div className="w-2 h-2 rounded-full bg-amber-500/70" />
                  <div className="w-2 h-2 rounded-full bg-green-500/70" />
                </div>
                <div className="px-3 py-3 font-mono text-[10px] leading-relaxed">
                  {[
                    { color: '#79c0ff', txt: 'const ' },
                    { color: '#ffa657', txt: 'stack' },
                    { color: '#e6edf3', txt: ' = {' },
                  ].map((p, i) => (
                    <motion.span key={i} style={{ color: p.color }}
                      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                      viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.1 }}>
                      {p.txt}
                    </motion.span>
                  ))}
                  {[
                    { k: '#79c0ff', v: '#a5d6ff', key: '  ai', val: '"GPT-4o"' },
                    { k: '#79c0ff', v: '#7ee787', key: '  api', val: '"Node.js"' },
                    { k: '#79c0ff', v: '#79c0ff', key: '  ui', val: '"React"' },
                  ].map((row, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: 0.9 + i * 0.12 }}>
                      <span style={{ color: row.k }}>{row.key}</span>
                      <span style={{ color: '#e6edf3' }}>: </span>
                      <span style={{ color: row.v }}>{row.val}</span>
                      <span style={{ color: '#e6edf3' }}>,</span>
                    </motion.div>
                  ))}
                  <motion.div style={{ color: '#e6edf3' }}
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} transition={{ delay: 1.3 }}>{'}'}</motion.div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════
   SECTION 2 — ABOUT PAGE
══════════════════════════════════════════════ */
const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const techStack = [
    { name: 'React / Vite', icon: Globe },
    { name: 'Java / Spring', icon: Coffee },
    { name: 'Python / AI', icon: Cpu },
    { name: 'Node.js', icon: Terminal },
    { name: 'AWS / Cloud', icon: CheckCircle2 },
  ];

  const processSteps = [
    { title: 'Audit & Discovery', desc: 'We dive deep into your current workflow to find bottlenecks and opportunities.', icon: Search, accent: 'bg-blue-500' },
    { title: 'Architect & Design', desc: 'We map out the automation logic and system design before writing a single line.', icon: PenTool, accent: 'bg-indigo-500' },
    { title: 'Build & Automate', desc: 'Agile two-week sprints with live demos after every cycle so you\'re never in the dark.', icon: Terminal, accent: 'bg-violet-500' },
    { title: 'Launch & Train', desc: 'Seamless deployment with video training for your team and 30-day post-launch support.', icon: Rocket, accent: 'bg-purple-500' },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden font-sans">
      <SEO
        title="About AshbitSoft — Our Mission & Vision"
        description="Learn about AshbitSoft's journey from custom scripts to scalable systems. Our mission is to democratize technology for businesses worldwide."
        ogUrl="/company/about"
      />

      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <AntiGravityBackground />

        {/* Dot pattern */}
        <div className="absolute top-0 right-0 -z-10 opacity-25 dark:opacity-10 translate-x-1/3 -translate-y-1/4 pointer-events-none">
          <svg width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-slate-300 dark:text-slate-700" fill="currentColor" />
            </pattern></defs>
            <rect width="404" height="784" fill="url(#dots)" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/8 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-indigo-100 dark:border-indigo-800">
              <Sparkles size={11} /> Est. 2023
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-[1.08]">
              Bridging the gap between<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Business &amp; Code.
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
              AshbitSoft started with one rebellious mission:{' '}
              <strong className="text-slate-900 dark:text-white">To kill manual data entry.</strong>
            </p>
            <p className="text-base text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              What began as automating simple workflows has evolved into a powerhouse agency building
              <strong className="text-slate-700 dark:text-slate-200"> Enterprise-grade Systems</strong> and
              <strong className="text-slate-700 dark:text-slate-200"> AI Automation Engines</strong>.
              We don't just write code — we engineer time.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12 border-t border-slate-200 dark:border-slate-800 pt-8 mb-8">
              {[
                { val: 3, label: 'Years Exp', sfx: '+' },
                { val: 50, label: 'Projects Shipped', sfx: '+' },
                { val: 100, label: 'Delivery Rate', sfx: '%' },
                { val: 15, label: 'Countries', sfx: '+' },
              ].map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                    <Counter value={s.val} suffix={s.sfx} />
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="group/btn px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm flex items-center gap-2 shadow-lg shadow-indigo-500/20">
                  Start Your Project
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                  View Services
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — Automation Engine */}
          <div className="hidden lg:block">
            <AutomationEngine />
          </div>
        </div>
      </section>

      {/* ══ 2. BENTO EVOLUTION ═══════════════════════════════ */}
      <BentoEvolution />

      {/* ══ 3. CORE VALUES ═══════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800">
              <Sparkles size={11} /> What Drives Us
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">These principles guide every decision we make and every line of code we write.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Speed & Efficiency', desc: 'We move fast without breaking things. Agile sprints, rapid prototyping, and quick iterations are in our DNA.', gradient: 'from-yellow-500 to-orange-500' },
              { icon: ShieldCheck, title: 'Quality First', desc: 'Every project undergoes rigorous testing and code review. We deliver production-ready solutions, not prototypes.', gradient: 'from-emerald-500 to-teal-500' },
              { icon: Users, title: 'Client Partnership', desc: "We're not just vendors — we're partners in your success. Your wins are our wins, and we're invested in your growth.", gradient: 'from-blue-500 to-cyan-500' },
              { icon: Terminal, title: 'Technical Excellence', desc: 'We stay ahead of the curve with continuous learning and adoption of cutting-edge technologies and best practices.', gradient: 'from-indigo-500 to-purple-500' },
              { icon: Globe, title: 'Transparency', desc: 'No hidden fees, no surprises. Clear communication, honest timelines, and upfront pricing on every project.', gradient: 'from-violet-500 to-indigo-500' },
              { icon: Rocket, title: 'Innovation Mindset', desc: "We don't just follow trends — we create solutions that push boundaries and solve real business problems.", gradient: 'from-rose-500 to-red-500' },
            ].map((v, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/5 hover:border-indigo-500/20 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <v.icon size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{v.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. MISSION & VISION ══════════════════════════════ */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Rocket, dir: -30, gradient: 'from-indigo-600 to-purple-600',
                bg: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
                border: 'border-indigo-100 dark:border-indigo-800/30',
                title: 'Our Mission',
                short: 'To empower businesses of all sizes with technology that drives growth, efficiency, and innovation.',
                body: 'We believe every business deserves access to enterprise-grade solutions without enterprise-level complexity or cost. Our mission is to democratize technology and make powerful automation, custom development, and digital transformation accessible to startups, SMEs, and enterprises alike.',
              },
              {
                icon: Globe, dir: 30, gradient: 'from-purple-600 to-pink-600',
                bg: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
                border: 'border-purple-100 dark:border-purple-800/30',
                title: 'Our Vision',
                short: 'To become the most trusted technology partner for businesses worldwide.',
                body: "We envision a future where every business, regardless of size or industry, can leverage cutting-edge technology to compete globally. We're building a world where manual processes are obsolete, data drives decisions, and technology amplifies human potential.",
              },
            ].map((card, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className={`absolute ${i === 0 ? '-top-4 -left-4' : '-top-4 -right-4'} w-24 h-24 ${i === 0 ? 'bg-indigo-100 dark:bg-indigo-900/20' : 'bg-purple-100 dark:bg-purple-900/20'} rounded-full blur-2xl pointer-events-none`} />
                <div className={`relative bg-gradient-to-br ${card.bg} rounded-3xl p-8 border ${card.border}`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6`}>
                    <card.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{card.title}</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{card.short}</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. OUR STORY ════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-5 border border-indigo-100 dark:border-indigo-800">
            <Sparkles size={11} /> Our Story
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8">
            From One Script to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Large-Scale Systems</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
            In 2023, we noticed a problem. Small businesses were running on chaos — spreadsheets everywhere, missed emails, and manual data entry. We wrote our first script to automate an invoice.<br /><br />
            Today, we don't just fix spreadsheets. We build <strong>Full-Stack Web Applications</strong>,{' '}
            <strong>Social Media Automation Bots</strong>, and <strong>Cloud Architectures</strong> for companies scaling from $0 to $10M.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {techStack.map((tech, i) => (
              <motion.div key={i} whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-indigo-500/20 transition-all">
                <tech.icon className="h-7 w-7 text-indigo-500 dark:text-indigo-400 mb-2" />
                <span className="font-bold text-slate-700 dark:text-slate-200 text-xs text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. PROCESS ════════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#6366f1 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800">
              <Sparkles size={11} /> Execution Framework
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
              The Blueprint
            </h2>
            <p className="text-slate-500 dark:text-slate-400">How we take you from chaos to clarity.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 relative">
            <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-px bg-slate-100 dark:bg-slate-800 pointer-events-none" />
            {processSteps.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.14 }}
                className="group relative"
              >
                <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-5 mb-4 relative z-10">
                  <div className="relative shrink-0">
                    <div className={`w-14 h-14 rounded-2xl ${s.accent} flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-400`}>
                      <s.icon size={22} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center text-[9px] font-black text-slate-900 dark:text-white shadow">
                      0{i + 1}
                    </div>
                  </div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white lg:text-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{s.title}</h3>
                </div>
                <div className="ml-[72px] sm:ml-0 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-white/5 shadow-sm group-hover:shadow-lg group-hover:border-indigo-200 dark:group-hover:border-indigo-800/50 transition-all duration-300 lg:text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. NOT JUST A DEV SHOP ═══════════════════════════ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Not Just Another Dev Shop</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Why industry leaders choose us over freelancers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lock, title: 'Code Ownership', bad: 'They hold it hostage', good: '100% Yours, Forever' },
              { icon: MessageSquare, title: 'Communication', bad: 'Slow Emails', good: 'Direct Slack Access' },
              { icon: CreditCard, title: 'Pricing Model', bad: 'Hourly Padding', good: 'Flat Project Fee' },
              { icon: ShieldCheck, title: 'Post-Launch', bad: 'They Disappear', good: '30-Day Guarantee' },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-500/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-slate-500 dark:text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
                    <XCircle size={16} className="text-red-400 shrink-0" />
                    <span className="line-through decoration-red-400/50">{item.bad}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-bold">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span>{item.good}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. FAQ ════════════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800">
              <Sparkles size={11} /> Quick Answers
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Common Questions</h2>
          </div>
          <div className="space-y-0 divide-y divide-slate-100 dark:divide-slate-800">
            {[
              { q: 'Do you work with non-technical founders?', a: "Absolutely. We speak business, not just binary. We'll explain the tech in plain English and focus on how it improves your bottom line." },
              { q: 'Do you offer maintenance after launch?', a: 'Yes. We offer a 30-day bug-fix guarantee on all projects. After that, flexible retainer packages keep your systems running smoothly.' },
              { q: 'Can you integrate with my existing software?', a: 'If it has an API, we can connect to it. We specialize in linking tools like Airtable, Slack, Shopify, Gmail, and custom databases.' },
              { q: 'What is your typical timeline?', a: 'Most automation scripts take 3–7 days. Full-scale web applications typically take 4–8 weeks depending on complexity.' },
            ].map((item, i) => <FaqItem key={i} question={item.q} answer={item.a} />)}
          </div>
        </div>
      </section>

      {/* ══ 9. CTA ════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-10 md:p-14 text-center bg-slate-900 text-white overflow-hidden border border-white/10 shadow-2xl group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-500/30 blur-[120px] rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/30 blur-[120px] rounded-full" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-widest mb-5">
                <Sparkles size={12} /> Ready to Scale?
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                Stop letting manual tasks{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">slow you down.</span>
              </h2>
              <p className="text-slate-300 mb-10 max-w-xl mx-auto text-base leading-relaxed">
                Let's build a system that works as hard as you do. Free 30-min discovery call — zero obligation.
              </p>
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="group/btn inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-10 py-4 rounded-xl hover:bg-indigo-50 transition shadow-xl">
                  Get a Quote
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-10 text-center bg-white dark:bg-slate-950">
        <p className="text-[10px] font-black text-slate-200 dark:text-slate-700 uppercase tracking-[0.4em]">
          AshbitSoft — Engineering Future Assets — Since 2023.
        </p>
      </div>
    </div>
  );
};

export default About;
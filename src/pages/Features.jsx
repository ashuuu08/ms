import React, { useState, useRef, useCallback, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence, useMotionValue, useTransform, useInView } from 'framer-motion';
import {
    Sparkles, Zap, Shield, Gauge, Users, Headphones, Globe,
    Lock, Code, TrendingUp, Award, Rocket, ArrowRight,
    CheckCircle2, Check, ChevronRight, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AntiGravityBackground from '../components/AntiGravityBackground';

/* ══════════════════════════════════════════════
   UTILS
══════════════════════════════════════════════ */
const useAnimCounter = (to, dur = 1400, delay = 200) => {
    const [val, setVal] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    useEffect(() => {
        if (!inView) return;
        const t = setTimeout(() => {
            const start = performance.now();
            const step = (now) => {
                const p = Math.min((now - start) / dur, 1);
                const ease = 1 - Math.pow(1 - p, 3);
                setVal(Math.round(ease * to));
                if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        }, delay);
        return () => clearTimeout(t);
    }, [inView, to, dur, delay]);
    return [val, ref];
};

/* ══════════════════════════════════════════════
   SPOTLIGHT CARD
══════════════════════════════════════════════ */
const SpotlightCard = ({ children, className = '' }) => {
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const bg = useTransform([mx, my], ([x, y]) =>
        `radial-gradient(380px circle at ${x}px ${y}px, rgba(99,102,241,0.11), transparent 65%)`
    );
    const onMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
    };
    return (
        <motion.div onMouseMove={onMove} className={`relative overflow-hidden group ${className}`}>
            <motion.div className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: bg }} />
            {children}
        </motion.div>
    );
};

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
const FEATURES = [
    { slug: 'lightning-fast',     icon: Zap,       title: 'Lightning Fast',      desc: 'Optimized pipelines ensure your apps run at peak speed with sub-100ms response times.',                                               color: 'from-yellow-500 to-orange-500', tag: 'Performance' },
    { slug: 'enterprise-security',icon: Shield,    title: 'Enterprise Security',  desc: 'Bank-grade encryption, OWASP compliance, and vulnerability scanning on every deployment.',                                          color: 'from-green-500 to-emerald-500',  tag: 'Security'    },
    { slug: 'real-time-analytics',icon: Gauge,     title: 'Real-time Analytics',  desc: 'Live dashboards and custom reports so you make decisions on data, not gut feeling.',                                                color: 'from-blue-500 to-cyan-500',      tag: 'Insights'    },
    { slug: 'team-collaboration', icon: Users,     title: 'Team Collaboration',   desc: 'Shared workspaces, role-based permissions, and async update flows — built for distributed teams.',                                  color: 'from-purple-500 to-pink-500',    tag: 'Teamwork'    },
    { slug: '24-7-support',       icon: Headphones,title: '24/7 Support',         desc: 'Round-the-clock engineering support with a guaranteed 4-hour response SLA on all plans.',                                         color: 'from-indigo-500 to-purple-500',  tag: 'Support'     },
    { slug: 'global-cdn',         icon: Globe,     title: 'Global CDN',           desc: 'Edge nodes in 40+ PoPs deliver content in under 30ms to users anywhere on the planet.',                                           color: 'from-cyan-500 to-blue-500',      tag: 'Infra'       },
    { slug: 'data-privacy',       icon: Lock,      title: 'Data Privacy',         desc: 'GDPR & CCPA compliant by default. Full audit logs, DPA agreements, and data residency options.',                                   color: 'from-red-500 to-rose-500',       tag: 'Compliance'  },
    { slug: 'api-first',          icon: Code,      title: 'API First',            desc: 'Complete REST and GraphQL coverage. Webhooks, SDKs in 6 languages, and OpenAPI specs included.',                                   color: 'from-slate-500 to-gray-600',     tag: 'Dev Tools'   },
    { slug: 'auto-scaling-infra', icon: TrendingUp,title: 'Auto-scaling Infra',   desc: 'Elastic architecture absorbs traffic spikes without manual intervention. Pay for what you use.',                                    color: 'from-green-500 to-teal-500',     tag: 'Infra'       },
    { slug: 'industry-leading',   icon: Award,     title: 'Industry Leading',     desc: 'Trusted by 80+ companies. Consistent 4.9-star ratings across independent review platforms.',                                       color: 'from-amber-500 to-yellow-500',   tag: 'Trust'       },
    { slug: 'rapid-deployment',   icon: Rocket,    title: 'Rapid Deployment',     desc: 'From first commit to production in minutes. CI/CD pipelines and one-click rollbacks included.',                                   color: 'from-violet-500 to-purple-500',  tag: 'DevOps'      },
    { slug: 'ai-powered',         icon: Sparkles,  title: 'AI Powered',           desc: 'LLM pipelines, smart scoring, and predictive automation baked into every workflow we ship.',                                        color: 'from-fuchsia-500 to-pink-500',   tag: 'AI'          },
];



const DEEP_DIVE = [
    {
        icon: Rocket, title: 'Built for Scale', gradient: 'from-indigo-600 to-violet-600',
        desc: 'Our infrastructure automatically handles millions of daily requests. From solo-founder MVP to Series B — we grow with you.',
        bullets: ['Auto-scaling compute', 'Load-balanced clusters', 'Global edge distribution', '99.98% uptime SLA'],
    },
    {
        icon: Shield, title: 'Security First', gradient: 'from-emerald-600 to-teal-600',
        desc: 'Every feature is engineered with security as a first principle. We exceed industry standards, not just meet them.',
        bullets: ['End-to-end encryption', 'GDPR & CCPA compliant', 'Regular pen-testing', 'SOC 2 Type II ready'],
    },
    {
        icon: Code, title: 'Developer Friendly', gradient: 'from-blue-600 to-cyan-600',
        desc: 'Rich APIs, exhaustive docs, and example repos in every major language. Integration that takes hours, not sprints.',
        bullets: ['REST + GraphQL APIs', 'SDK in 6 languages', 'Interactive API explorer', 'Active Discord community'],
    },
    {
        icon: TrendingUp, title: 'Cost Effective', gradient: 'from-amber-500 to-orange-500',
        desc: 'Enterprise-grade capabilities without enterprise-grade invoices. Transparent, milestone-based pricing always.',
        bullets: ['Pay as you scale', 'Zero hidden charges', 'Volume discounts', 'Free discovery call'],
    },
];

const STATS = [
    { val: 30, suffix: '-Day', label: 'Guarantee', sub: 'Post-launch support included', color: 'text-emerald-600 dark:text-emerald-400' },
    { val: 50, suffix: '+', label: 'Projects Done', sub: 'Delivered & live worldwide', color: 'text-indigo-600 dark:text-indigo-400' },
    { val: 98, suffix: '%', label: 'Satisfaction', sub: 'Based on final IP delivery', color: 'text-violet-600 dark:text-violet-400' },
    { val: 24, suffix: 'h', label: 'Response Time', sub: 'We reply within one day', color: 'text-blue-600 dark:text-blue-400' },
];

/* ══════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════ */
const Features = () => {
    const [activeDeep, setActiveDeep] = useState(0);

    return (
        <div className="min-h-screen w-full bg-white dark:bg-slate-950 transition-colors duration-300 font-sans overflow-x-hidden">
            <SEO
                title="Platform Features — Everything You Need to Scale"
                description="Explore AshbitSoft's full feature suite: lightning-fast performance, enterprise security, real-time analytics, 24/7 support, and AI-powered automation."
                ogUrl="/features"
            />

            {/* ══ 1. HERO ═══════════════════════════════════════ */}
            <section className="relative pt-28 pb-16 overflow-hidden">
                <AntiGravityBackground />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />

                {/* dot grid */}
                <div className="absolute top-0 right-0 opacity-20 dark:opacity-10 translate-x-1/4 pointer-events-none -z-0">
                    <svg width="320" height="640" viewBox="0 0 320 640" fill="none">
                        <defs><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="3" height="3" className="text-slate-300 dark:text-slate-700" fill="currentColor" />
                        </pattern></defs>
                        <rect width="320" height="640" fill="url(#dots)" />
                    </svg>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-5 border border-indigo-100 dark:border-indigo-800">
                            <Sparkles size={11} /> Platform Capabilities
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-5">
                            Everything You Need to{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                                Scale
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                            A robust suite of capabilities engineered to handle complex workflows, high-volume traffic, and enterprise compliance — out of the box.
                        </p>

                        {/* Hero trust pills */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                { icon: Star, label: '4.9 / 5 Rating' },
                                { icon: Shield, label: 'SOC 2 Ready' },
                                { icon: CheckCircle2, label: '99.98% Uptime' },
                                { icon: Zap, label: 'Sub-100ms Responses' },
                            ].map(({ icon: Icon, label }, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.07 }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400">
                                    <Icon size={12} className="text-indigo-500" />
                                    {label}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══ 2. FEATURE GRID ═════════════════════════════ */}
            <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.04] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(90deg,#6366f1 1px,transparent 1px),linear-gradient(#6366f1 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Grid */}
                    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {FEATURES.map((feature, i) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={feature.title}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95, y: 16 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: -8 }}
                                        transition={{ duration: 0.35, delay: i * 0.04 }}
                                        whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                                    >
                                        <Link to={`/features/${feature.slug}`} className="block h-full">
                                        <SpotlightCard className="h-full rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/5 hover:border-indigo-300/40 dark:hover:border-indigo-700/40 transition-all duration-300">
                                            <div className="p-7">
                                                {/* Tag pill */}
                                                <div className="flex items-center justify-between mb-5">
                                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                                        <Icon className="text-white" size={22} />
                                                    </div>
                                                    <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                                        {feature.tag}
                                                    </span>
                                                </div>

                                                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                                                    {feature.desc}
                                                </p>

                                                {/* Learn more hover link */}
                                                <div className="flex items-center gap-1 mt-4 text-xs font-bold text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                                                    Learn more <ChevronRight size={12} />
                                                </div>
                                            </div>
                                        </SpotlightCard>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                    </motion.div>
                </div>
            </section>

            {/* ══ 3. ANIMATED STATS ═════════════════════════════ */}
            <section className="py-20 px-4 bg-white dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800">
                            <Sparkles size={11} /> Proven Results
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
                            Numbers That{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                                Speak
                            </span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">Real outcomes from real projects — no marketing fluff.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-5">
                        {STATS.map((s, i) => {
                            const [count, ref] = useAnimCounter(s.val, 1400, i * 120);
                            return (
                                <motion.div
                                    key={i} ref={ref}
                                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                                    className="group relative bg-white dark:bg-slate-900 rounded-[2rem] p-8 border-2 border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/8 hover:border-indigo-300/50 dark:hover:border-indigo-600/50 transition-all duration-300 text-center overflow-hidden"
                                >
                                    {/* ambient top glow on hover */}
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className={`text-5xl font-black tabular-nums mb-1 ${s.color}`}>
                                        {count}{s.suffix}
                                    </div>
                                    <div className="text-base font-black text-slate-900 dark:text-white mb-2">{s.label}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">{s.sub}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══ 4. DEEP DIVE — INTERACTIVE TABS ══════════════ */}
            <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#6366f1 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800">
                            <Sparkles size={11} /> Why Our Features Stand Out
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
                            Crafted for{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                                Real Business Value
                            </span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm">We don't just ship features — we engineer leverage.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Tab selectors */}
                        <div className="lg:w-72 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
                            {DEEP_DIVE.map((d, i) => {
                                const Icon = d.icon;
                                const active = activeDeep === i;
                                return (
                                    <motion.button
                                        key={i}
                                        onClick={() => setActiveDeep(i)}
                                        whileHover={{ x: active ? 0 : 4 }}
                                        className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 shrink-0 lg:w-full ${active
                                                ? 'bg-white dark:bg-slate-900 border-2 border-indigo-400 dark:border-indigo-600 shadow-lg shadow-indigo-500/10'
                                                : 'bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-indigo-300/50 dark:hover:border-indigo-700/50'
                                            }`}
                                    >
                                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${active
                                                ? `bg-gradient-to-br ${d.gradient} shadow-md`
                                                : 'bg-slate-100 dark:bg-slate-800'
                                            }`}>
                                            <Icon size={16} className={active ? 'text-white' : 'text-slate-400'} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className={`text-sm font-black truncate transition-colors ${active ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300'}`}>
                                                {d.title}
                                            </p>
                                            {active && (
                                                <motion.p
                                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                                    className="text-[10px] text-slate-400 font-medium mt-0.5 hidden lg:block">
                                                    Click to explore →
                                                </motion.p>
                                            )}
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Tab content */}
                        <div className="flex-1">
                            <AnimatePresence mode="wait">
                                {DEEP_DIVE.map((d, i) => {
                                    if (i !== activeDeep) return null;
                                    const Icon = d.icon;
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-lg h-full"
                                        >
                                            <div className="flex items-start gap-5 mb-6">
                                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${d.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                                                    <Icon size={26} className="text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">{d.title}</h3>
                                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{d.desc}</p>
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {d.bullets.map((b, j) => (
                                                    <motion.div
                                                        key={j}
                                                        initial={{ opacity: 0, y: 8 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: j * 0.07 }}
                                                        className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 hover:border-indigo-200 dark:hover:border-indigo-700/50 transition-colors group/bullet"
                                                    >
                                                        <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center shrink-0">
                                                            <Check size={11} className="text-indigo-600 dark:text-indigo-400" />
                                                        </div>
                                                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{b}</span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                                <p className="text-xs text-slate-400">
                                                    {i + 1} of {DEEP_DIVE.length} capabilities
                                                </p>
                                                <div className="flex gap-1.5">
                                                    {DEEP_DIVE.map((_, j) => (
                                                        <button key={j} onClick={() => setActiveDeep(j)}
                                                            className={`w-2 h-2 rounded-full transition-all duration-200 ${j === activeDeep ? 'bg-indigo-600 w-5' : 'bg-slate-200 dark:bg-slate-700 hover:bg-indigo-400'}`} />
                                                    ))}
                                                </div>
                                                <motion.button
                                                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                                                    onClick={() => setActiveDeep((i + 1) % DEEP_DIVE.length)}
                                                    className="flex items-center gap-1.5 text-xs font-black text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                                                >
                                                    Next <ChevronRight size={13} />
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 5. FEATURE COMPARISON STRIP ══════════════════ */}
            <section className="py-20 px-4 bg-white dark:bg-slate-950">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800">
                            <Sparkles size={11} /> How We Compare
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                            AshbitSoft vs.{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                                The Alternatives
                            </span>
                        </h2>
                    </div>

                    <div className="rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg">
                        {/* Header row */}
                        <div className="grid grid-cols-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                            <div className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">Feature</div>
                            <div className="px-6 py-4 text-center">
                                <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">AshbitSoft</span>
                            </div>
                            <div className="px-6 py-4 text-center">
                                <span className="text-sm font-semibold text-slate-400">Freelancer / Agency</span>
                            </div>
                        </div>

                        {[
                            ['Full IP Ownership', true, false],
                            ['Fixed Project Pricing', true, false],
                            ['30-Day Post-launch Fix', true, false],
                            ['AI & Automation Stack', true, false],
                            ['Direct Slack Access', true, false],
                            ['Custom SLA Guarantee', true, false],
                        ].map(([label, us, them], i) => (
                            <div key={i} className={`grid grid-cols-3 border-b border-slate-100 dark:border-slate-800/50 hover:bg-indigo-50/40 dark:hover:bg-indigo-900/10 transition-colors ${i % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50/60 dark:bg-slate-900/40'}`}>
                                <div className="px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-300">{label}</div>
                                <div className="px-6 py-3.5 flex justify-center">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                                        <Check size={11} className="text-white" />
                                    </div>
                                </div>
                                <div className="px-6 py-3.5 flex justify-center">
                                    <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                        <span className="text-slate-300 dark:text-slate-600 text-[9px] font-black">✕</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 6. CTA ════════════════════════════════════════ */}
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
                                <Sparkles size={12} /> Experience the Power Today
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                                Don't settle for{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                    legacy systems.
                                </span>
                            </h2>
                            <p className="text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
                                Upgrade to a platform built for modern business — fast deployments, enterprise security, and AI automation that actually works.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <Link to="/contact">
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                        className="group/btn px-8 py-3.5 rounded-xl bg-white text-indigo-900 font-bold flex items-center gap-2 shadow-xl hover:bg-indigo-50 transition">
                                        Start Free Consultation
                                        <ArrowRight size={17} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </motion.button>
                                </Link>
                                <Link to="/pricing">
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3.5 rounded-xl bg-indigo-800/50 text-white font-bold border border-indigo-700 hover:bg-indigo-800 transition">
                                        View Pricing
                                    </motion.button>
                                </Link>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
                                {['Zero Commitment', '30-Day Guarantee', '24h Response'].map((l, i) => (
                                    <div key={i} className="flex items-center gap-1.5">
                                        <CheckCircle2 size={12} className="text-indigo-400" /> {l}
                                    </div>
                                ))}
                            </div>
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

export default Features;
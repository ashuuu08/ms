import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check, Zap, Crown, Rocket, ArrowRight, Sparkles,
    MessageCircle, ChevronDown, Star, Shield, Clock,
    Users, Phone, FileText, Globe, RefreshCw, Lock,
    CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AntiGravityBackground from '../components/AntiGravityBackground';

/* ─── Data ───────────────────────────────────────────────── */
const pricingPlans = [
    {
        name: 'Starter',
        icon: Zap,
        tagline: 'Launch fast, validate early',
        description: 'Perfect for founders and small teams ready to bring their first digital product to life.',
        popular: false,
        gradient: 'from-blue-500 to-cyan-500',
        iconBg: 'bg-blue-50 dark:bg-blue-900/20',
        iconColor: 'text-blue-600 dark:text-blue-400',
        features: [
            'Up to 3 Projects',
            'Email Support (48h SLA)',
            'Core Feature Access',
            'Monthly Updates',
            '5 GB Storage',
            'Community Forum Access',
            'Basic Analytics Dashboard',
            'Free SSL Certificate',
            'Responsive Design',
            'Git Repository Setup'
        ],
        notIncluded: ['API Access', 'Team Collaboration', 'White Label', 'Dedicated Manager']
    },
    {
        name: 'Professional',
        icon: Crown,
        tagline: 'Scale with confidence',
        description: 'Built for growing companies that need premium features, faster support, and team collaboration.',
        popular: true,
        gradient: 'from-indigo-600 to-purple-600',
        iconBg: 'bg-indigo-50 dark:bg-indigo-900/20',
        iconColor: 'text-indigo-600 dark:text-indigo-400',
        features: [
            'Unlimited Projects',
            'Priority Support (24/7, 4h SLA)',
            'All Advanced Features',
            'Weekly Updates & Releases',
            '50 GB Storage',
            'Premium UI Template Library',
            'Advanced Analytics & Reports',
            'Custom Domain (up to 3)',
            'Full API Access',
            'Team Collaboration (up to 5)',
            'White Label Options',
            'Automated Backups (daily)',
            'Performance Monitoring'
        ],
        notIncluded: ['Dedicated Manager', 'Custom SLA']
    },
    {
        name: 'Enterprise',
        icon: Rocket,
        tagline: 'Built without limits',
        description: 'For organisations that need custom solutions, dedicated resources, and enterprise-grade reliability.',
        popular: false,
        gradient: 'from-violet-600 to-purple-600',
        iconBg: 'bg-violet-50 dark:bg-violet-900/20',
        iconColor: 'text-violet-600 dark:text-violet-400',
        features: [
            'Unlimited Everything',
            'Dedicated Account Manager',
            'Custom Development Sprints',
            'Real-time CI/CD Pipeline',
            'Unlimited Storage',
            'Custom Third-party Integrations',
            'Enterprise Analytics & BI',
            'Multi-domain Support',
            'Advanced API + Webhooks',
            'Unlimited Team Members',
            'Custom SLA Guarantee',
            'Onboarding & Training Sessions',
            'Priority Feature Requests',
            'Private Cloud Option',
            'GDPR / Compliance Support'
        ],
        notIncluded: []
    }
];

const comparisonFeatures = [
    { label: 'Projects',            starter: '3',         pro: 'Unlimited',    enterprise: 'Unlimited' },
    { label: 'Storage',             starter: '5 GB',      pro: '50 GB',        enterprise: 'Unlimited' },
    { label: 'Custom Domains',      starter: '1',         pro: '3',            enterprise: 'Unlimited' },
    { label: 'Team Members',        starter: '1',         pro: '5',            enterprise: 'Unlimited' },
    { label: 'API Access',          starter: false,       pro: true,           enterprise: true },
    { label: 'White Label',         starter: false,       pro: true,           enterprise: true },
    { label: 'Analytics',           starter: 'Basic',     pro: 'Advanced',     enterprise: 'Enterprise BI' },
    { label: 'Support SLA',         starter: '48 hours',  pro: '4 hours',      enterprise: 'Custom' },
    { label: 'Dedicated Manager',   starter: false,       pro: false,          enterprise: true },
    { label: 'Custom Integrations', starter: false,       pro: false,          enterprise: true },
    { label: 'Compliance / GDPR',   starter: false,       pro: false,          enterprise: true },
];

const testimonials = [
    {
        name: 'Priya Sharma', role: 'Founder, TechVault', avatar: 'PS', stars: 5,
        gradient: 'from-indigo-500 to-violet-500',
        text: 'The team delivered our MVP in half the expected time. The pricing was transparent and there were zero surprises at invoicing. Genuinely impressed.'
    },
    {
        name: 'Arjun Mehta', role: 'CTO, GrowthStack', avatar: 'AM', stars: 5,
        gradient: 'from-indigo-600 to-blue-500',
        text: 'Migrated our entire SaaS platform under the Professional plan. The 24/7 support actually means 24/7 — they responded at 2 AM during a production incident.'
    },
    {
        name: 'Neha Kapoor', role: 'Product Manager, Nexora', avatar: 'NK', stars: 5,
        gradient: 'from-violet-500 to-indigo-500',
        text: 'Enterprise custom development was seamless. The dedicated account manager knew our codebase better than some of our own devs within a week.'
    }
];

const processSteps = [
    { icon: Phone,    step: '01', title: 'Discovery Call',   desc: "We spend 30 minutes understanding your goals, technical requirements, and timeline before touching a line of code.", accent: 'bg-blue-500' },
    { icon: FileText, step: '02', title: 'Custom Proposal',  desc: 'You receive a detailed scoped proposal with milestones, deliverables, and a fixed or phased pricing structure.', accent: 'bg-indigo-500' },
    { icon: RefreshCw,step: '03', title: 'Agile Build',      desc: "We build in two-week sprints with live demos after every cycle so you're never left in the dark.", accent: 'bg-violet-500' },
    { icon: Globe,    step: '04', title: 'Launch & Support', desc: 'Go live with confidence. We handle deployment, monitoring, and post-launch fixes as part of every engagement.', accent: 'bg-purple-500' }
];

const faqs = [
    { q: "Why don't you list fixed prices?", a: "Every project has different complexity, integrations, and timelines. Fixed price packages either over-charge simple projects or undercut complex ones. We price based on actual scope so you get a fair deal every time." },
    { q: 'How long does a typical project take?', a: 'Most Starter projects launch in 4–6 weeks. Professional builds typically take 6–12 weeks. Enterprise engagements vary — we set milestones during discovery so you always know where we stand.' },
    { q: "What's included in the 30-day guarantee?", a: "If you're not satisfied within 30 days of project handover, we'll continue revising until you're happy — or issue a full refund. No questions asked." },
    { q: 'Do you offer payment plans?', a: 'Yes. Most projects are split into milestone-based payments — typically 30% upfront, 40% at midpoint, and 30% at delivery. For Enterprise, monthly retainer arrangements are available.' },
    { q: 'Can I start with Starter and upgrade later?', a: 'Absolutely. We build with upgrade paths in mind. Moving from Starter to Professional requires a scope review, but all existing work is preserved and carried forward.' },
    { q: 'Do you work with international clients?', a: 'Yes — we have active clients across India, the UAE, the UK, and Southeast Asia. We support bank transfer, Razorpay, Stripe, and PayPal.' },
    { q: 'Is there a free consultation?', a: "Yes. All discovery calls are free with zero obligation. We'd rather have an honest conversation about fit before we both invest significant time." }
];

const includedAlways = [
    { icon: Shield,   title: 'Quality Assurance', color: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-50 dark:bg-indigo-900/20', items: ['Code review on every PR', 'Cross-browser & device testing', 'Performance audits', 'Post-launch bug fixes (30 days)'] },
    { icon: FileText, title: 'Documentation',     color: 'text-blue-600 dark:text-blue-400',     bg: 'bg-blue-50 dark:bg-blue-900/20',     items: ['Technical architecture docs', 'End-user guides', 'API reference docs', 'Handover video walkthroughs'] },
    { icon: Globe,    title: 'Deployment',        color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-900/20', items: ['Cloud infrastructure setup', 'SSL & CDN configuration', 'Domain & DNS management', 'Staging + production envs'] },
    { icon: Lock,     title: 'Security',          color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/20', items: ['Secure coding standards', 'Dependency vulnerability scans', 'Data encryption at rest', 'OWASP checklist compliance'] }
];

/* ─── Helpers ────────────────────────────────────────────── */
const GreenCheck = () => (
    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mt-0.5">
        <Check size={10} className="text-white" />
    </div>
);
const MutedX = () => (
    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mt-0.5">
        <span className="text-slate-300 dark:text-slate-600 text-[8px] font-black">✕</span>
    </div>
);
const TableCheck = ({ gradient }) => (
    <div className={`inline-flex w-5 h-5 rounded-full bg-gradient-to-r ${gradient} items-center justify-center mx-auto`}>
        <Check size={10} className="text-white" />
    </div>
);
const TableX = () => (
    <div className="inline-flex w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 items-center justify-center mx-auto">
        <span className="text-slate-300 dark:text-slate-600 text-[8px] font-black">✕</span>
    </div>
);

/* ─── Page ───────────────────────────────────────────────── */
const Pricing = () => {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen w-full bg-white dark:bg-slate-950 transition-colors duration-300 font-sans overflow-x-hidden">
            <SEO
                title="Service Pricing — Transparent & Custom Quotes"
                description="Get competitive, custom pricing for web development, automation, and digital marketing. Flexible plans for startups and SMEs across India."
                ogUrl="/pricing"
            />

            {/* ══ 1. HERO ══════════════════════════════════════════════ */}
            <section className="relative pt-28 pb-16 overflow-hidden">
                <AntiGravityBackground />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-5">
                            <Sparkles size={12} /> Flexible Pricing
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-5">
                            Pricing Built Around{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                                Your Goals
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                            No bloated packages. No hidden fees. We scope every project individually and give you a price that reflects exactly what you need — nothing more.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                { icon: Shield, label: '30-Day Guarantee' },
                                { icon: Clock,  label: 'No Lock-in Contracts' },
                                { icon: Users,  label: 'Trusted by 80+ Clients' },
                                { icon: Star,   label: '4.9 / 5 Rating' }
                            ].map(({ icon: Icon, label }, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400"
                                >
                                    <Icon size={13} className="text-indigo-500" />
                                    {label}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══ 2. PRICING CARDS ═════════════════════════════════════ */}
            <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg,#6366f1 1px,transparent 1px),linear-gradient(#6366f1 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {pricingPlans.map((plan, index) => {
                            const Icon = plan.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.12 }}
                                    whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                                    className={`relative rounded-[2rem] flex flex-col overflow-hidden transition-all duration-300 group ${
                                        plan.popular
                                            ? 'bg-white dark:bg-slate-900 shadow-2xl shadow-indigo-500/10 border-2 border-indigo-500 dark:border-indigo-400 ring-2 ring-indigo-100 dark:ring-indigo-900/50 scale-[1.02]'
                                            : 'bg-white dark:bg-slate-900 shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-indigo-500/5 hover:border-indigo-500/30 dark:hover:border-indigo-500/30'
                                    }`}
                                >
                                    <div className={`h-1 w-full bg-gradient-to-r ${plan.gradient}`} />

                                    {plan.popular && (
                                        <div className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />

                                    <div className="p-7 flex flex-col flex-1 relative">
                                        <div className={`inline-flex p-3 rounded-xl ${plan.iconBg} mb-4 w-fit transition-transform group-hover:scale-110 duration-300`}>
                                            <Icon size={22} className={plan.iconColor} />
                                        </div>

                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">{plan.name}</h3>
                                        <p className={`text-sm font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${plan.gradient}`}>
                                            {plan.tagline}
                                        </p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                                            {plan.description}
                                        </p>

                                        <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                            <MessageCircle size={16} className="text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 dark:text-white">Custom Quote</p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Scoped to your exact requirements</p>
                                            </div>
                                        </div>

                                        <Link to="/contact" className="mb-7">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.97 }}
                                                className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 group/btn ${
                                                    plan.popular
                                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/30'
                                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                                                }`}
                                            >
                                                Get a Quote
                                                <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </motion.button>
                                        </Link>

                                        <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-black mb-3">What's Included</p>
                                        <div className="space-y-2.5 flex-1">
                                            {plan.features.map((feat, i) => (
                                                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                                                    <GreenCheck />
                                                    {feat}
                                                </div>
                                            ))}
                                            {plan.notIncluded.map((feat, i) => (
                                                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300 dark:text-slate-600">
                                                    <MutedX />
                                                    {feat}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══ 3. STATS ═════════════════════════════════════════════ */}
            <section className="py-14 px-4 bg-white dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {[
                            { num: '50+',    label: 'Projects Delivered',     color: 'from-indigo-600 to-blue-500' },
                            { num: '4.9★',   label: 'Average Client Rating',  color: 'from-violet-600 to-purple-500' },
                            { num: '30-Day', label: 'Satisfaction Guarantee', color: 'from-indigo-500 to-violet-500' },
                            { num: '0',      label: 'Hidden Charges, Ever',   color: 'from-blue-600 to-indigo-600' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                            >
                                <p className={`text-3xl md:text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}>
                                    {stat.num}
                                </p>
                                <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 4. COMPARISON TABLE ══════════════════════════════════ */}
            <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/10 border-y border-slate-100 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
                            <Sparkles size={12} /> Feature Breakdown
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
                            Compare Plans{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                                Side by Side
                            </span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Every feature, every tier — laid out clearly.</p>
                    </div>

                    <div className="rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg">
                        <div className="grid grid-cols-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                            <div className="px-5 py-4 text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Feature</div>
                            {pricingPlans.map((p, i) => (
                                <div key={i} className="px-5 py-4 text-center">
                                    <span className={`text-sm font-black text-transparent bg-clip-text bg-gradient-to-r ${p.gradient}`}>{p.name}</span>
                                </div>
                            ))}
                        </div>
                        {comparisonFeatures.map((row, i) => (
                            <div key={i} className={`grid grid-cols-4 border-b border-slate-100 dark:border-slate-800/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 transition-colors ${i % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-slate-50/80 dark:bg-slate-900/40'}`}>
                                <div className="px-5 py-3.5 text-sm text-slate-600 dark:text-slate-400 font-semibold">{row.label}</div>
                                {['starter', 'pro', 'enterprise'].map((key, j) => (
                                    <div key={j} className="px-5 py-3.5 flex items-center justify-center">
                                        {typeof row[key] === 'boolean'
                                            ? (row[key] ? <TableCheck gradient={pricingPlans[j].gradient} /> : <TableX />)
                                            : <span className="text-sm text-slate-600 dark:text-slate-400 font-medium text-center">{row[key]}</span>
                                        }
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ══ 6. ALWAYS INCLUDED ═══════════════════════════════════ */}
            <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
                            <Sparkles size={12} /> Every Plan
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
                            Baked In.{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">No Exceptions.</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">Non-negotiable standards in every project we ship.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {includedAlways.map((section, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-500/20 transition-all duration-300"
                            >
                                <div className={`w-10 h-10 rounded-xl ${section.bg} flex items-center justify-center mb-4`}>
                                    <section.icon size={18} className={section.color} />
                                </div>
                                <h4 className="text-base font-black text-slate-900 dark:text-white mb-4">{section.title}</h4>
                                <ul className="space-y-2.5">
                                    {section.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                                            <Check size={12} className="text-indigo-500 mt-0.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 7. TESTIMONIALS ══════════════════════════════════════ */}
            <section className="py-24 px-4 bg-white dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-14">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-amber-100 dark:border-amber-800/50"
                        >
                            <Star size={12} /> Client Trust Signals
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                            What Clients{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Actually Say</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                            Trusted by founders, startups &amp; growing businesses across India.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group relative bg-slate-50 dark:bg-slate-900/40 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 flex flex-col hover:border-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-1">{Array.from({ length: t.stars }).map((_, j) => <Star key={j} size={14} className="text-amber-400 fill-amber-400" />)}</div>
                                    <div className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[8px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-800/50">Verified</div>
                                </div>
                                <p className="text-base text-slate-700 dark:text-slate-300 italic mb-8 flex-grow leading-relaxed font-medium tracking-tight">"{t.text}"</p>
                                <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-white/5">
                                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-black text-lg shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <div className="font-black text-slate-900 dark:text-white text-sm tracking-tight">{t.name}</div>
                                        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 8. FAQ ════════════════════════════════════════════════ */}
            <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/10 border-y border-slate-100 dark:border-slate-800">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
                            <Sparkles size={12} /> Quick Answers
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
                            Frequently Asked{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Questions</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">Still wondering? These are the questions we get most often.</p>
                    </div>
                    <div className="space-y-2">
                        {faqs.map((faq, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                                className={`rounded-2xl border transition-all overflow-hidden ${openFaq === i ? 'border-indigo-200 dark:border-indigo-800 bg-white dark:bg-slate-900 shadow-lg shadow-indigo-500/5' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-indigo-200 dark:hover:border-indigo-800/50'}`}
                            >
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left">
                                    <span className="text-sm font-bold text-slate-900 dark:text-white pr-4">{faq.q}</span>
                                    <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
                                        <ChevronDown size={16} className={openFaq === i ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'} />
                                    </motion.span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openFaq === i && (
                                        <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
                                            <p className="px-5 pb-5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 9. CTA ════════════════════════════════════════════════ */}
            <section className="py-20 px-4 bg-white dark:bg-slate-950 relative">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                        className="relative rounded-3xl p-10 md:p-14 text-center bg-slate-900 text-white overflow-hidden border border-white/10 shadow-2xl group"
                    >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                            <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-500/30 blur-[120px] rounded-full" />
                            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/30 blur-[120px] rounded-full" />
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-widest mb-5">
                            <Sparkles size={14} /> Free Consultation
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                            Ready to Build{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                Something Legendary?
                            </span>
                        </h2>

                        <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
                            Book a free 30-minute discovery call. We'll scope your project, answer every question, and give you a clear proposal — with zero obligation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Link to="/contact">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    className="group/btn px-7 py-3.5 rounded-xl bg-white text-slate-900 font-bold flex items-center gap-2 shadow-lg hover:bg-slate-100 transition">
                                    Book a Free Call <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                            <Link to="/contact">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    className="px-7 py-3.5 rounded-xl border border-white/30 text-white font-bold hover:bg-white/10 transition">
                                    Send a Message Instead
                                </motion.button>
                            </Link>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
                            {['Zero Upfront Commitment', '24h Strategy Delivery', 'Success-Based Milestones'].map((label, i) => (
                                <div key={i} className="flex items-center gap-1.5">
                                    <CheckCircle2 size={14} className="text-indigo-400" /> {label}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="py-10 text-center bg-white dark:bg-slate-950">
                <p className="text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.4em]">
                    AshbitSoft — Engineering Future Assets — Since 2024.
                </p>
            </div>
        </div>
    );
};

export default Pricing;
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import {
  Zap, Shield, Gauge, Users, Headphones, Globe, Lock, Code,
  TrendingUp, Award, Rocket, Sparkles, ArrowLeft, ArrowRight,
  CheckCircle2, ChevronRight
} from 'lucide-react';

// ── Rich content for each feature ──────────────────────────────────────
const FEATURE_DATA = {
  'lightning-fast': {
    icon: Zap,
    title: 'Lightning Fast Performance',
    tag: 'Performance',
    color: 'from-yellow-500 to-orange-500',
    bgLight: 'bg-yellow-50',
    bgDark: 'dark:bg-yellow-900/20',
    borderColor: 'border-yellow-200 dark:border-yellow-800/50',
    textColor: 'text-yellow-600 dark:text-yellow-400',
    tagline: 'Sub-100ms response times, every time.',
    desc: 'We obsess over performance at every layer of the stack. From database query optimization to edge caching and lazy-loading strategies, every application we ship is engineered to be blazing fast — even at scale.',
    highlights: [
      'Sub-100ms API response times on average',
      'CDN-level static asset caching',
      'Lazy-loading and code-splitting by default',
      'Database query indexing & optimization',
      'Server-side rendering (SSR) for instant first paint',
      'Real-time monitoring with performance alerts',
    ],
    useCases: [
      { title: 'E-Commerce', desc: 'Faster load times directly increase conversions. We ensure your store feels instant.' },
      { title: 'SaaS Platforms', desc: 'Heavy dashboards load in milliseconds with our optimized data pipelines.' },
      { title: 'Mobile Apps', desc: 'Responsive APIs ensure a smooth UX even on slower mobile connections.' },
    ],
    stat: { val: '< 100ms', label: 'Average response time' },
  },
  'enterprise-security': {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    tag: 'Security',
    color: 'from-green-500 to-emerald-500',
    bgLight: 'bg-green-50',
    bgDark: 'dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800/50',
    textColor: 'text-green-600 dark:text-green-400',
    tagline: 'Bank-grade encryption on every deployment.',
    desc: 'Security is never an afterthought at AshbitSoft. We embed security best practices across the entire software development lifecycle — from code review to production monitoring — to ensure your data and your users are always protected.',
    highlights: [
      'AES-256 encryption at rest and in transit (TLS 1.3)',
      'OWASP Top 10 compliance by default',
      'Automated vulnerability scanning on every build',
      'Role-based access control (RBAC)',
      'Multi-factor authentication (MFA) support',
      'GDPR & CCPA ready out-of-the-box',
    ],
    useCases: [
      { title: 'FinTech', desc: 'Handle sensitive financial data with compliance-ready architecture.' },
      { title: 'HealthTech', desc: 'Meet HIPAA requirements with secure patient data management.' },
      { title: 'Enterprise SaaS', desc: 'Give your clients peace of mind with SOC 2-ready infrastructure.' },
    ],
    stat: { val: '100%', label: 'OWASP compliance on delivery' },
  },
  'real-time-analytics': {
    icon: Gauge,
    title: 'Real-time Analytics',
    tag: 'Insights',
    color: 'from-blue-500 to-cyan-500',
    bgLight: 'bg-blue-50',
    bgDark: 'dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800/50',
    textColor: 'text-blue-600 dark:text-blue-400',
    tagline: 'Decisions powered by live data, not assumptions.',
    desc: 'We build custom analytics dashboards that give you instant visibility into what\'s happening in your business. Move away from static reports and into live, actionable intelligence that helps you act fast.',
    highlights: [
      'Live dashboards with sub-second data refresh',
      'Custom KPI tracking and alerting',
      'User behavior analytics and funnel analysis',
      'Exportable reports (PDF, CSV, JSON)',
      'Integration with Google Analytics, Mixpanel, and more',
      'Historical trend analysis with predictive forecasting',
    ],
    useCases: [
      { title: 'Marketing', desc: 'Track campaign performance live and adjust spend in real time.' },
      { title: 'Operations', desc: 'Monitor inventory, orders, and fulfillment from a single dashboard.' },
      { title: 'Product Teams', desc: 'Understand user journeys and optimize conversion funnels with live data.' },
    ],
    stat: { val: '<1s', label: 'Data refresh rate' },
  },
  'team-collaboration': {
    icon: Users,
    title: 'Team Collaboration',
    tag: 'Teamwork',
    color: 'from-purple-500 to-pink-500',
    bgLight: 'bg-purple-50',
    bgDark: 'dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-800/50',
    textColor: 'text-purple-600 dark:text-purple-400',
    tagline: 'Built for distributed teams that move fast.',
    desc: 'Modern teams are distributed. We build collaboration-first features — shared workspaces, granular permissions, real-time co-editing, and audit trails — so your team can ship together without friction.',
    highlights: [
      'Shared workspaces with real-time sync',
      'Granular role-based permissions (Admin, Editor, Viewer)',
      'Activity logs and full audit trails',
      'Async-friendly update flows and notifications',
      'In-app commenting and annotation tools',
      'Slack & Microsoft Teams integration',
    ],
    useCases: [
      { title: 'Agencies', desc: 'Manage multiple client projects and teams from a unified workspace.' },
      { title: 'Startups', desc: 'Onboard new team members quickly with clear role structures.' },
      { title: 'Enterprise', desc: 'Department-level access control for large distributed organizations.' },
    ],
    stat: { val: '∞', label: 'Team members supported' },
  },
  '24-7-support': {
    icon: Headphones,
    title: '24/7 Expert Support',
    tag: 'Support',
    color: 'from-indigo-500 to-purple-500',
    bgLight: 'bg-indigo-50',
    bgDark: 'dark:bg-indigo-900/20',
    borderColor: 'border-indigo-200 dark:border-indigo-800/50',
    textColor: 'text-indigo-600 dark:text-indigo-400',
    tagline: 'Round-the-clock engineering, not just ticket systems.',
    desc: 'Our support isn\'t just a helpdesk — it\'s direct access to the engineers who built your system. Get fast, expert responses from people who actually understand your codebase and business logic.',
    highlights: [
      '4-hour guaranteed response SLA on all plans',
      'Direct access to your assigned engineer',
      'Priority Slack/WhatsApp channel for critical issues',
      '30-day post-launch bug-fix guarantee',
      'Monthly check-in calls and health reports',
      'Proactive monitoring with auto-alerts',
    ],
    useCases: [
      { title: 'Mission-Critical Apps', desc: 'Downtime costs money. Our team responds fast to minimize impact.' },
      { title: 'Growing Startups', desc: 'Get expert mentorship and guidance as your product evolves.' },
      { title: 'Enterprise Clients', desc: 'Dedicated account manager and SLA-backed response times.' },
    ],
    stat: { val: '4h', label: 'Guaranteed response SLA' },
  },
  'global-cdn': {
    icon: Globe,
    title: 'Global CDN & Edge Network',
    tag: 'Infra',
    color: 'from-cyan-500 to-blue-500',
    bgLight: 'bg-cyan-50',
    bgDark: 'dark:bg-cyan-900/20',
    borderColor: 'border-cyan-200 dark:border-cyan-800/50',
    textColor: 'text-cyan-600 dark:text-cyan-400',
    tagline: '30ms content delivery. Anywhere on the planet.',
    desc: 'We deploy your applications on globally distributed infrastructure with edge nodes strategically positioned across the world. Your users get fast load times regardless of where they are.',
    highlights: [
      '40+ global Points of Presence (PoPs)',
      'Sub-30ms content delivery worldwide',
      'Automatic failover and redundancy',
      'Edge caching for static and dynamic content',
      'DDoS protection at network level',
      'Auto-purge and cache invalidation on deployment',
    ],
    useCases: [
      { title: 'Global SaaS', desc: 'Serve users in the US, Europe, and Asia with equal performance.' },
      { title: 'Media Platforms', desc: 'Stream videos and deliver images with zero buffering globally.' },
      { title: 'E-Commerce', desc: 'Ensure fast checkout experiences for international customers.' },
    ],
    stat: { val: '40+', label: 'Global Points of Presence' },
  },
  'data-privacy': {
    icon: Lock,
    title: 'Data Privacy & Compliance',
    tag: 'Compliance',
    color: 'from-red-500 to-rose-500',
    bgLight: 'bg-red-50',
    bgDark: 'dark:bg-red-900/20',
    borderColor: 'border-red-200 dark:border-red-800/50',
    textColor: 'text-red-600 dark:text-red-400',
    tagline: 'GDPR, CCPA, and beyond — compliance built in.',
    desc: 'Privacy regulations are complex and ever-evolving. We build systems that respect user rights and comply with major data protection laws by default — so you never have to choose between speed and compliance.',
    highlights: [
      'GDPR compliant data processing and storage',
      'CCPA opt-out flows built-in',
      'Full audit logs for all data access events',
      'Data Processing Agreements (DPA) provided',
      'Data residency options (EU, US, APAC)',
      'Automated data deletion and right-to-be-forgotten',
    ],
    useCases: [
      { title: 'EU-facing Products', desc: 'Ship to European users with confidence and full legal compliance.' },
      { title: 'HealthTech', desc: 'Patient data handled with the highest privacy standards.' },
      { title: 'EdTech', desc: 'Student data protection with COPPA and FERPA compliance support.' },
    ],
    stat: { val: '100%', label: 'GDPR compliant by default' },
  },
  'api-first': {
    icon: Code,
    title: 'API-First Architecture',
    tag: 'Dev Tools',
    color: 'from-slate-500 to-gray-600',
    bgLight: 'bg-slate-50',
    bgDark: 'dark:bg-slate-800/50',
    borderColor: 'border-slate-200 dark:border-slate-700',
    textColor: 'text-slate-600 dark:text-slate-400',
    tagline: 'If it has an API, we can connect to it.',
    desc: 'Every system we build is designed API-first, making it trivially easy to integrate with your existing tools, third-party services, or future platforms. We write clean, documented, versioned APIs that your team will love.',
    highlights: [
      'RESTful and GraphQL APIs on every project',
      'Webhooks for real-time event-driven updates',
      'OpenAPI/Swagger documentation auto-generated',
      'SDK generation in 6 popular languages',
      'Versioned endpoints with backward compatibility',
      'Interactive API explorer in your dashboard',
    ],
    useCases: [
      { title: 'SaaS Platforms', desc: 'Let customers build on top of your product with a public API.' },
      { title: 'Integrations', desc: 'Connect Shopify, Airtable, HubSpot, and 100s more seamlessly.' },
      { title: 'Mobile Apps', desc: 'Shared backend API powers both iOS, Android, and web apps.' },
    ],
    stat: { val: '6', label: 'SDK languages supported' },
  },
  'auto-scaling-infra': {
    icon: TrendingUp,
    title: 'Auto-scaling Infrastructure',
    tag: 'Infra',
    color: 'from-green-500 to-teal-500',
    bgLight: 'bg-green-50',
    bgDark: 'dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800/50',
    textColor: 'text-green-600 dark:text-green-400',
    tagline: 'Handle traffic spikes without lifting a finger.',
    desc: 'Our infrastructure scales automatically with your traffic. Whether you\'re handling 100 or 10 million requests, the system self-adjusts in real-time with zero manual intervention — and you only pay for what you use.',
    highlights: [
      'Horizontal auto-scaling based on real-time traffic',
      'Load-balanced multi-region deployment',
      'Container orchestration with Kubernetes',
      'Serverless compute for cost-efficient workloads',
      '99.98% uptime SLA guaranteed',
      'Zero-downtime rolling deployments',
    ],
    useCases: [
      { title: 'Event-driven Products', desc: 'Handle flash sales, launches, or campaigns that spike traffic overnight.' },
      { title: 'B2B SaaS', desc: 'Scale with your enterprise clients without re-architecting.' },
      { title: 'Media & Streaming', desc: 'Deliver consistent performance during peak viewing hours.' },
    ],
    stat: { val: '99.98%', label: 'Guaranteed uptime SLA' },
  },
  'industry-leading': {
    icon: Award,
    title: 'Industry-Leading Quality',
    tag: 'Trust',
    color: 'from-amber-500 to-yellow-500',
    bgLight: 'bg-amber-50',
    bgDark: 'dark:bg-amber-900/20',
    borderColor: 'border-amber-200 dark:border-amber-800/50',
    textColor: 'text-amber-600 dark:text-amber-400',
    tagline: 'Trusted by 80+ companies. Rated 4.9 stars.',
    desc: 'We don\'t just deliver code — we deliver outcomes. Every project goes through rigorous peer review, QA testing, and client validation before delivery. Our standards are the reason clients keep coming back.',
    highlights: [
      '4.9/5 average client satisfaction rating',
      'Peer code review on every pull request',
      'Automated test suites (unit, integration, e2e)',
      '30-day post-launch satisfaction guarantee',
      '100% in-house delivery — no outsourcing',
      'Dedicated QA engineer on every project',
    ],
    useCases: [
      { title: 'High-stakes Launches', desc: 'Launch with confidence knowing every edge case is covered.' },
      { title: 'Regulated Industries', desc: 'Meet audit requirements with comprehensive test coverage.' },
      { title: 'Long-term Products', desc: 'Maintainable, documented code you\'ll be proud to pass to your own team.' },
    ],
    stat: { val: '4.9★', label: 'Average client rating' },
  },
  'rapid-deployment': {
    icon: Rocket,
    title: 'Rapid Deployment & CI/CD',
    tag: 'DevOps',
    color: 'from-violet-500 to-purple-500',
    bgLight: 'bg-violet-50',
    bgDark: 'dark:bg-violet-900/20',
    borderColor: 'border-violet-200 dark:border-violet-800/50',
    textColor: 'text-violet-600 dark:text-violet-400',
    tagline: 'From commit to production in minutes.',
    desc: 'We implement fully automated CI/CD pipelines that make deployments a non-event. Push code, run tests, deploy to production, and roll back if anything goes wrong — all without manual steps.',
    highlights: [
      'Automated CI/CD pipeline on every project',
      'One-click rollbacks in under 60 seconds',
      'Environment-based deployments (Dev → Staging → Prod)',
      'Infrastructure as Code (Terraform, Pulumi)',
      'Automated database migration management',
      'Blue-green and canary deployment strategies',
    ],
    useCases: [
      { title: 'Startups', desc: 'Ship features multiple times per day without fear or manual effort.' },
      { title: 'Agencies', desc: 'Deploy client updates instantly with zero downtime.' },
      { title: 'Enterprise', desc: 'Managed release cycles with compliance-ready audit trails.' },
    ],
    stat: { val: '<5min', label: 'Average deployment time' },
  },
  'ai-powered': {
    icon: Sparkles,
    title: 'AI-Powered Automation',
    tag: 'AI',
    color: 'from-fuchsia-500 to-pink-500',
    bgLight: 'bg-fuchsia-50',
    bgDark: 'dark:bg-fuchsia-900/20',
    borderColor: 'border-fuchsia-200 dark:border-fuchsia-800/50',
    textColor: 'text-fuchsia-600 dark:text-fuchsia-400',
    tagline: 'LLM pipelines and smart automation for your workflow.',
    desc: 'We integrate cutting-edge AI into your products — not as a gimmick, but as a genuine productivity multiplier. From custom chatbots trained on your data to predictive analytics and intelligent automation, we make AI work for your specific business context.',
    highlights: [
      'Custom LLM integrations (OpenAI, Claude, Gemini)',
      'RAG (Retrieval-Augmented Generation) pipelines',
      'AI chatbots trained on your knowledge base',
      'Predictive analytics and anomaly detection',
      'Smart document processing and extraction',
      'Voice and image AI integrations',
    ],
    useCases: [
      { title: 'Customer Support', desc: 'Deploy a smart bot that resolves 60%+ of tickets automatically.' },
      { title: 'Sales & CRM', desc: 'AI-powered lead scoring and pipeline prioritization.' },
      { title: 'Document Processing', desc: 'Automate invoice, contract, and form data extraction with AI.' },
    ],
    stat: { val: '60%+', label: 'Ticket resolution via AI' },
  },
};

const SLUG_ORDER = Object.keys(FEATURE_DATA);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.5, ease: 'easeOut' } }),
};

const FeatureDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const feature = FEATURE_DATA[slug];

  const currentIdx = SLUG_ORDER.indexOf(slug);
  const prevSlug = currentIdx > 0 ? SLUG_ORDER[currentIdx - 1] : null;
  const nextSlug = currentIdx < SLUG_ORDER.length - 1 ? SLUG_ORDER[currentIdx + 1] : null;

  if (!feature) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 px-4 text-center">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Feature Not Found</h1>
        <p className="text-slate-500 mb-6">This feature page doesn't exist.</p>
        <Link to="/features" className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition">
          Back to Features
        </Link>
      </div>
    );
  }

  const Icon = feature.icon;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 font-sans overflow-x-hidden">
      <SEO
        title={`${feature.title} — AshbitSoft Features`}
        description={feature.desc}
        ogUrl={`/features/${slug}`}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">


          {/* Tag badge */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border mb-5 ${feature.bgLight} ${feature.bgDark} ${feature.borderColor} ${feature.textColor}`}>
              {feature.tag}
            </span>
          </motion.div>

          {/* Title & Icon */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="flex items-start gap-6 mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl shrink-0`}>
              <Icon size={30} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                {feature.title}
              </h1>
              <p className={`text-base font-semibold mt-2 ${feature.textColor}`}>{feature.tagline}</p>
            </div>
          </motion.div>

          {/* Desc */}
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            {feature.desc}
          </motion.p>

          {/* Stat badge */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="mt-8">
            <div className="inline-flex flex-col items-center px-8 py-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className={`text-4xl font-black ${feature.textColor}`}>{feature.stat.val}</span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">{feature.stat.label}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── HIGHLIGHTS + USE CASES ───────────────────────── */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Highlights */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className={`w-1 h-6 rounded-full bg-gradient-to-b ${feature.color}`} />
              What's Included
            </h2>
            <ul className="space-y-3">
              {feature.highlights.map((item, i) => (
                <motion.li key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shrink-0 mt-0.5`}>
                    <CheckCircle2 size={11} className="text-white" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Use Cases */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className={`w-1 h-6 rounded-full bg-gradient-to-b ${feature.color}`} />
              Who Uses This
            </h2>
            <div className="space-y-4">
              {feature.useCases.map((uc, i) => (
                <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{uc.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{uc.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-10 text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #6366f1 0%, transparent 60%)' }} />
            <h2 className="text-2xl md:text-3xl font-black mb-3 relative z-10">
              Want <span className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}>{feature.title}</span> in your project?
            </h2>
            <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto relative z-10">
              Let's discuss how we can implement this for your specific use case. Free consultation, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="px-8 py-3.5 rounded-xl bg-white text-slate-900 font-bold hover:bg-indigo-50 transition flex items-center gap-2">
                  Get a Free Quote <ArrowRight size={16} />
                </motion.button>
              </Link>
              <Link to="/features">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="px-8 py-3.5 rounded-xl bg-slate-800 text-white font-bold border border-slate-700 hover:bg-slate-700 transition">
                  View All Features
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PREV / NEXT NAVIGATION ───────────────────────── */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {prevSlug ? (
            <Link to={`/features/${prevSlug}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-700 transition group">
              <ArrowLeft size={16} className="text-slate-400 group-hover:text-indigo-500 transition" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Previous</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{FEATURE_DATA[prevSlug].title}</p>
              </div>
            </Link>
          ) : <div />}

          {nextSlug ? (
            <Link to={`/features/${nextSlug}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-700 transition text-right group">
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Next</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{FEATURE_DATA[nextSlug].title}</p>
              </div>
              <ArrowRight size={16} className="text-slate-400 group-hover:text-indigo-500 transition" />
            </Link>
          ) : <div />}
        </div>
      </section>
    </div>
  );
};

export default FeatureDetail;

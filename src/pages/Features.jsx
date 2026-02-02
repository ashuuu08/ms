import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Gauge, Users, Headphones, Globe, Lock, Code, TrendingUp, Award, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AntiGravityBackground from '../components/AntiGravityBackground';

const Features = () => {
    const features = [
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'Optimized performance ensuring your applications run at peak speed with minimal latency.',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'Bank-grade security with end-to-end encryption and compliance with industry standards.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Gauge,
            title: 'Real-time Analytics',
            description: 'Comprehensive dashboards and insights to track performance and make data-driven decisions.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Users,
            title: 'Team Collaboration',
            description: 'Built-in collaboration tools to keep your team synchronized and productive.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Headphones,
            title: '24/7 Support',
            description: 'Round-the-clock expert support to ensure your operations never skip a beat.',
            color: 'from-indigo-500 to-purple-500'
        },
        {
            icon: Globe,
            title: 'Global CDN',
            description: 'Content delivery network spanning the globe for optimal performance worldwide.',
            color: 'from-cyan-500 to-blue-500'
        },
        {
            icon: Lock,
            title: 'Data Privacy',
            description: 'GDPR compliant with robust data protection and privacy controls built-in.',
            color: 'from-red-500 to-rose-500'
        },
        {
            icon: Code,
            title: 'API First',
            description: 'Comprehensive REST and GraphQL APIs for seamless integrations and extensibility.',
            color: 'from-slate-500 to-gray-500'
        },
        {
            icon: TrendingUp,
            title: 'Scalable Infrastructure',
            description: 'Auto-scaling architecture that grows with your business demands effortlessly.',
            color: 'from-green-500 to-teal-500'
        },
        {
            icon: Award,
            title: 'Industry Leading',
            description: 'Award-winning platform trusted by thousands of businesses worldwide.',
            color: 'from-amber-500 to-yellow-500'
        },
        {
            icon: Rocket,
            title: 'Quick Deployment',
            description: 'Get up and running in minutes with our streamlined onboarding process.',
            color: 'from-violet-500 to-purple-500'
        },
        {
            icon: Sparkles,
            title: 'AI Powered',
            description: 'Leverage cutting-edge AI and machine learning for intelligent automation.',
            color: 'from-fuchsia-500 to-pink-500'
        }
    ];

    return (
        <div className="min-h-screen w-full max-w-full pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden font-sans">
            <AntiGravityBackground />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-6 border border-indigo-100 dark:border-indigo-800">
                        <Sparkles size={16} />
                        <span>Platform Capabilities</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
                        Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Scale</span>
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        A robust suite of features designed to handle complex workflows and high-volume traffic.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="group relative bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 overflow-hidden"
                            >
                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <Icon className="text-white" size={24} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Animated Statistics Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 mb-16"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Results</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Numbers that speak for themselves
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { value: "99.9%", label: "Uptime", description: "Guaranteed availability", gradient: "from-green-500 to-emerald-500" },
                            { value: "50ms", label: "Response Time", description: "Lightning fast performance", gradient: "from-blue-500 to-cyan-500" },
                            { value: "500+", label: "Clients", description: "Businesses trust us", gradient: "from-purple-500 to-pink-500" },
                            { value: "24/7", label: "Support", description: "Always here for you", gradient: "from-indigo-500 to-purple-500" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.2 } }}
                                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all shadow-lg hover:shadow-2xl text-center"
                            >
                                <div className={`inline-flex px-6 py-3 rounded-xl bg-gradient-to-r ${stat.gradient} mb-4`}>
                                    <span className="text-4xl font-bold text-white">{stat.value}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{stat.label}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{stat.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Why Choose Our Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-12 border border-indigo-100 dark:border-indigo-800/50 mb-16"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Why Our Features Stand Out
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            We don't just build features—we craft experiences that drive real business value
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Built for Scale",
                                description: "Our infrastructure automatically scales to handle millions of requests without breaking a sweat. From startup to enterprise, we grow with you.",
                                icon: "🚀",
                                benefits: ["Auto-scaling", "Load balancing", "Global distribution", "99.9% uptime SLA"]
                            },
                            {
                                title: "Security First",
                                description: "Every feature is built with security at its core. We follow industry best practices and comply with international standards.",
                                icon: "🔒",
                                benefits: ["End-to-end encryption", "GDPR compliant", "Regular security audits", "SOC 2 certified"]
                            },
                            {
                                title: "Developer Friendly",
                                description: "Comprehensive APIs, detailed documentation, and SDKs in multiple languages make integration a breeze.",
                                icon: "💻",
                                benefits: ["REST & GraphQL APIs", "Detailed docs", "Code examples", "Active community"]
                            },
                            {
                                title: "Cost Effective",
                                description: "Get enterprise-grade features without enterprise-level costs. Flexible pricing that scales with your usage.",
                                icon: "💰",
                                benefits: ["Pay as you grow", "No hidden fees", "Volume discounts", "Free tier available"]
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{item.description}</p>
                                <ul className="space-y-2">
                                    {item.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <div className="text-center bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-12 relative overflow-hidden text-white shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Experience the Power Today
                        </h2>
                        <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                            Don't settle for legacy systems. Upgrade to a platform built for modern business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-xl bg-white text-indigo-900 font-bold shadow-xl hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    Start Free Consultation <ArrowRight size={18} />
                                </motion.button>
                            </Link>
                            <Link to="/pricing">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-xl bg-indigo-800/50 text-white font-bold border border-indigo-700 hover:bg-indigo-800 transition-all duration-300"
                                >
                                    View Pricing
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;

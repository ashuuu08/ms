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

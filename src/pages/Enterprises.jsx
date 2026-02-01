import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, Lock, Cpu, Cloud, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AntiGravityBackground from '../components/AntiGravityBackground';

const Enterprises = () => {
    const features = [
        {
            icon: Globe,
            title: 'Global Scale',
            description: 'Infrastructure and solutions that handle millions of users across multiple regions.',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Lock,
            title: 'Enterprise Security',
            description: 'Military-grade security, compliance certifications, and audit-ready documentation.',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: Cpu,
            title: 'High Performance',
            description: 'Optimized architecture for lightning-fast response times and reliability.',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            icon: Cloud,
            title: 'Cloud-Native',
            description: 'Modern cloud infrastructure with auto-scaling and disaster recovery.',
            gradient: 'from-orange-500 to-red-500'
        },
    ];

    const services = [
        {
            category: 'Digital Transformation',
            services: [
                'Enterprise architecture consulting',
                'Legacy system modernization',
                'Microservices migration',
                'DevOps implementation',
                'Cloud transformation strategy'
            ]
        },
        {
            category: 'Custom Development',
            services: [
                'Enterprise web applications',
                'Mobile apps (iOS & Android)',
                'SaaS platform development',
                'API & integration layer',
                'Data warehousing solutions'
            ]
        },
        {
            category: 'Support & Maintenance',
            services: [
                '24/7 monitoring & support',
                'Performance optimization',
                'Security patches & updates',
                'Compliance management',
                'Dedicated support team'
            ]
        },
    ];

    const technologies = [
        'AWS / Azure / GCP',
        'Kubernetes & Docker',
        'Microservices Architecture',
        'React / Angular / Vue',
        'Node.js / Java / .NET',
        'PostgreSQL / MongoDB',
        'GraphQL / REST APIs',
        'CI/CD Pipelines'
    ];

    return (
        <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden font-sans">
            <AntiGravityBackground />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-6 border border-indigo-100 dark:border-indigo-800">
                        <Building2 size={16} />
                        <span>For Enterprises</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
                        Enterprise-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Solutions</span>
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Mission-critical software solutions built for the world's leading enterprises. Scalable, secure, and designed for global operations.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                className="group bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <Icon className="text-white" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Services Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                        Comprehensive Enterprise Services
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-colors"
                            >
                                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-6 shadow-md">
                                    <Layers className="text-white" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                                    {service.category}
                                </h3>
                                <ul className="space-y-4">
                                    {service.services.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                                            <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Technologies */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 border border-slate-200 dark:border-slate-800 shadow-sm mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
                        Enterprise Technology Stack
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {technologies.map((tech, index) => (
                            <div key={index} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 text-center border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all font-semibold text-slate-700 dark:text-slate-200">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enterprise Stats */}
                <div className="bg-slate-900 dark:bg-black rounded-3xl p-12 shadow-2xl text-white mb-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-purple-900/50"></div>
                    <div className="max-w-5xl mx-auto relative z-10">
                        <h2 className="text-3xl font-bold mb-10 text-center">
                            Trusted by Industry Leaders
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                <div className="text-4xl font-extrabold mb-2 text-indigo-400">99.9%</div>
                                <div className="text-slate-300 text-sm font-medium">Uptime SLA</div>
                            </div>
                            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                <div className="text-4xl font-extrabold mb-2 text-indigo-400">10M+</div>
                                <div className="text-slate-300 text-sm font-medium">Users Supported</div>
                            </div>
                            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                <div className="text-4xl font-extrabold mb-2 text-indigo-400">24/7</div>
                                <div className="text-slate-300 text-sm font-medium">Expert Support</div>
                            </div>
                            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                <div className="text-4xl font-extrabold mb-2 text-indigo-400">ISO 27001</div>
                                <div className="text-slate-300 text-sm font-medium">Certified</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-12 shadow-2xl border border-slate-800 text-center relative overflow-hidden text-white">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                    <h2 className="text-3xl font-bold mb-4">
                        Partner with Enterprise Experts
                    </h2>
                    <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can support your enterprise digital transformation journey with proven, scalable solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-900 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Request Enterprise Demo <ArrowRight size={18} />
                            </motion.button>
                        </Link>
                        <Link to="/pricing">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-transparent border border-indigo-700 text-white font-bold hover:bg-indigo-900 transition-all duration-300"
                            >
                                View Pricing
                            </motion.button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Enterprises;

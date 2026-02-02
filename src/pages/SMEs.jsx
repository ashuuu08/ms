import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, LineChart, Shield, Workflow, Database, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AntiGravityBackground from '../components/AntiGravityBackground';

const SMEs = () => {
    const features = [
        {
            icon: Target,
            title: 'Process Automation',
            description: 'Streamline operations and reduce manual work with custom automation solutions.',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: LineChart,
            title: 'Business Analytics',
            description: 'Make data-driven decisions with powerful analytics dashboards and reporting.',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'Protect your business with enterprise-grade security measures and compliance.',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            icon: Database,
            title: 'System Integration',
            description: 'Connect all your business tools and systems for seamless data flow.',
            gradient: 'from-orange-500 to-red-500'
        },
    ];

    const solutions = [
        {
            title: 'CRM & Sales Tools',
            items: ['Custom CRM development', 'Sales pipeline automation', 'Lead management systems', 'Customer portal development']
        },
        {
            title: 'Operations & Workflow',
            items: ['Inventory management', 'Order processing systems', 'Employee management portals', 'Document automation']
        },
        {
            title: 'Digital Transformation',
            items: ['Legacy system modernization', 'Cloud migration services', 'Mobile apps for teams', 'API development & integration']
        },
    ];

    return (
        <div className="min-h-screen w-full max-w-full pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden font-sans">
            <AntiGravityBackground />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-6 border border-indigo-100 dark:border-indigo-800">
                        <Building size={16} />
                        <span>For SMEs</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
                        Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Growing Business</span>
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Empower your SME with custom software solutions designed to improve efficiency, reduce costs, and drive growth.
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

                {/* Solutions Grid */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                        Tailored Solutions for SMEs
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-colors"
                            >
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                    {solution.title}
                                </h3>
                                <ul className="space-y-4">
                                    {solution.items.map((item, itemIndex) => (
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

                {/* ROI Section */}
                <div className="bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-12 shadow-2xl text-white mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <Workflow size={48} className="mx-auto mb-6 text-indigo-300" />
                        <h2 className="text-3xl font-bold mb-6">
                            ROI-Focused Solutions
                        </h2>
                        <p className="text-lg text-indigo-100 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Our solutions typically deliver measurable returns within 6-12 months through improved efficiency, reduced operational costs, and increased revenue opportunities.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <div className="text-4xl font-extrabold mb-2">40%</div>
                                <div className="text-indigo-200 font-medium">Average efficiency gain</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <div className="text-4xl font-extrabold mb-2">30%</div>
                                <div className="text-indigo-200 font-medium">Cost reduction</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <div className="text-4xl font-extrabold mb-2">6-12mo</div>
                                <div className="text-indigo-200 font-medium">Typical ROI period</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 shadow-xl">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Transform Your SME Today
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                        Book a consultation to discover how we can help your business grow with custom technology solutions.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Schedule Consultation <ArrowRight size={18} />
                        </motion.button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default SMEs;

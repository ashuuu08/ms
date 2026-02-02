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

                {/* ROI & Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                        Measurable Business Impact
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { value: "40%", label: "Cost Reduction", icon: "💰", gradient: "from-green-500 to-emerald-500" },
                            { value: "3x", label: "Productivity Boost", icon: "⚡", gradient: "from-blue-500 to-cyan-500" },
                            { value: "85%", label: "Process Automation", icon: "🤖", gradient: "from-purple-500 to-pink-500" },
                            { value: "6 Months", label: "Average ROI Time", icon: "📈", gradient: "from-orange-500 to-red-500" }
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
                                <div className="text-5xl mb-4">{stat.icon}</div>
                                <div className={`text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Case Studies */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                        SME Success Stories
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                company: "Manufacturing Co.",
                                industry: "Manufacturing",
                                challenge: "Manual inventory tracking causing delays",
                                solution: "Custom inventory management system with real-time tracking",
                                result: "50% reduction in inventory errors, 30% faster order processing",
                                icon: "🏭"
                            },
                            {
                                company: "Retail Chain",
                                industry: "Retail",
                                challenge: "Disconnected sales channels and customer data",
                                solution: "Unified CRM and omnichannel sales platform",
                                result: "25% increase in customer retention, 40% boost in sales",
                                icon: "🛍️"
                            }
                        ].map((study, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800/50"
                            >
                                <div className="text-5xl mb-4">{study.icon}</div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{study.company}</h3>
                                <div className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-4">{study.industry}</div>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Challenge</div>
                                        <p className="text-sm text-slate-700 dark:text-slate-300">{study.challenge}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Solution</div>
                                        <p className="text-sm text-slate-700 dark:text-slate-300">{study.solution}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-green-600 dark:text-green-400 uppercase mb-1">Result</div>
                                        <p className="text-sm font-semibold text-green-700 dark:text-green-300">{study.result}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-12 relative overflow-hidden text-white shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Transform Your SME?
                        </h2>
                        <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                            Let's discuss how custom software can streamline your operations and accelerate growth.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-xl bg-white text-indigo-900 font-bold shadow-xl hover:bg-indigo-50 transition-all duration-300 inline-flex items-center gap-2"
                            >
                                Schedule Consultation <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SMEs;

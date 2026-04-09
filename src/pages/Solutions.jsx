import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Rocket, Building2, Building, ArrowRight, CheckCircle2 } from 'lucide-react';
import AntiGravityBackground from '../components/AntiGravityBackground';

const Solutions = () => {
    const industries = [
        {
            title: 'Startups',
            icon: Rocket,
            description: 'Launch your MVP in weeks, not months. We provide the technical backbone so you can focus on growth.',
            features: ['Rapid MVP Development', 'Scalable Architecture', 'Investor-Ready Tech', 'Cost-Effective Stacks'],
            link: '/solutions/startups',
            color: 'from-blue-500 to-cyan-500',
            btnColor: 'text-blue-600'
        },
        {
            title: 'SMEs',
            icon: Building,
            description: 'Automate workflows and digitize operations. We help growing businesses scale efficiently.',
            features: ['Business Process Automation', 'CRM & ERP Customization', 'Legacy System Modernization', 'Data Analytics'],
            link: '/solutions/smes',
            color: 'from-purple-500 to-pink-500',
            btnColor: 'text-purple-600'
        },
        {
            title: 'Enterprises',
            icon: Building2,
            description: 'Mission-critical infrastructure for large-scale operations. Security, compliance, and reliability.',
            features: ['Cloud Architecture', 'Microservices', 'Enterprise Security', 'High-Load Systems'],
            link: '/solutions/enterprises',
            color: 'from-indigo-600 to-violet-600',
            btnColor: 'text-indigo-600'
        }
    ];

    return (
        <div className="min-h-screen w-full max-w-full pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden font-sans">
            <SEO 
                title="Business Tech Solutions - Scaling Made Simple" 
                description="Tailored technical strategies for startups, SMEs, and enterprises. We provide the infrastructure and automation to support every stage of your business growth."
                ogUrl="/solutions"
            />
            <AntiGravityBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-6 border border-indigo-100 dark:border-indigo-800">
                        <span>Industry Solutions</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                        Built for Every Stage of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Growth</span>
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Whether you're just starting out or scaling to millions of users, we have a tailored technical strategy for you.
                    </p>
                </div>

                {/* Industry Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {industries.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-indigo-500/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                                <Link to={item.link} className="absolute inset-0 z-10" aria-label={`View ${item.title} solutions`} />
                                
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                    {item.description}
                                </p>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {item.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                                            <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div
                                    className={`inline-flex items-center gap-2 font-bold ${item.btnColor} mt-auto group-hover:gap-3 transition-all relative z-20`}
                                >
                                    Explore {item.title} Solutions <ArrowRight size={18} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="bg-slate-900 dark:bg-indigo-900/20 rounded-3xl p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Not sure which category fits you?
                        </h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Let's hop on a quick call. We'll listen to your needs and recommend the right technical approach.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition shadow-lg">
                            Talk to an Expert <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Solutions;

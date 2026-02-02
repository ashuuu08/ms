import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, TrendingUp, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import AntiGravityBackground from '../components/AntiGravityBackground';

const Startups = () => {
    const features = [
        {
            icon: Rocket,
            title: 'MVP Development',
            description: 'Launch your minimum viable product quickly with our agile development approach.',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Zap,
            title: 'Rapid Prototyping',
            description: 'Turn your ideas into interactive prototypes in days, not months.',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: DollarSign,
            title: 'Cost-Effective',
            description: 'Startup-friendly pricing with flexible payment plans to match your budget.',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            icon: TrendingUp,
            title: 'Scalable Architecture',
            description: 'Build on a foundation that grows with your business from day one.',
            gradient: 'from-orange-500 to-red-500'
        },
    ];

    const benefits = [
        'Fast time-to-market with agile methodology',
        'Tech consulting to choose the right stack',
        'Cloud infrastructure setup and deployment',
        'Post-launch support and maintenance',
        'Investor-ready documentation',
        'Mobile-first responsive design'
    ];

    return (
        <div className="min-h-screen w-full max-w-full pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden font-sans">
            <AntiGravityBackground />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-6 border border-indigo-100 dark:border-indigo-800">
                        <Rocket size={16} />
                        <span>For Startups</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
                        Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Startup Faster</span>
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Transform your vision into reality with our startup-focused development solutions. We help you build, launch, and scale your product efficiently.
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

                {/* Two Column Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    {/* Left: Benefits */}
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-xl border border-slate-200 dark:border-slate-800">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                            Why Startups Choose Us
                        </h2>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-indigo-500 shrink-0 mt-0.5" size={20} />
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Stats */}
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-8">Our Track Record</h2>
                            <div className="space-y-8">
                                <div>
                                    <div className="text-5xl font-extrabold mb-2">2-4 weeks</div>
                                    <div className="text-indigo-100 font-medium">Average MVP delivery time</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-extrabold mb-2">50+</div>
                                    <div className="text-indigo-100 font-medium">Startups launched</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-extrabold mb-2">$2M+</div>
                                    <div className="text-indigo-100 font-medium">Funding raised by our clients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-slate-900 dark:bg-indigo-900/20 rounded-3xl p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Build Your Startup?
                        </h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Let's turn your startup idea into a successful product. Schedule a free consultation to discuss your project.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-900 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get Started Today <ArrowRight size={18} />
                            </motion.button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Startups;

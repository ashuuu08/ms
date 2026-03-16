import React from 'react';
import SEO from '../components/SEO';
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
            <SEO 
                title="Startup Tech Solutions - MVP & Scaling" 
                description="Launch your startup faster with AshbitSoft. We specialize in rapid MVP development, scalable architecture, and cost-effective tech stacks for new ventures."
                ogUrl="/solutions/startups"
            />
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
                                    <span className="text-slate-700 dark:text-slate-300 text-base">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Stats */}
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 shadow-xl text-white">
                        <h2 className="text-2xl font-bold mb-8">
                            Startup Success Stats
                        </h2>
                        <div className="space-y-6">
                            {[
                                { label: 'Average Time to MVP', value: '4-6 Weeks' },
                                { label: 'Cost Savings vs Traditional', value: '60%' },
                                { label: 'Successful Launches', value: '100+' },
                                { label: 'Funding Secured by Clients', value: '$50M+' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="border-b border-indigo-400 pb-4 last:border-0"
                                >
                                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-indigo-100 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Success Stories */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                        Startup Success Stories
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                company: "TechFlow",
                                result: "Raised $2M seed funding",
                                description: "MVP built in 5 weeks, launched to 10k users in first month",
                                metric: "10k Users",
                                icon: "🚀"
                            },
                            {
                                company: "DataSync",
                                result: "Acquired by enterprise",
                                description: "Scaled from 0 to 50k users with our scalable architecture",
                                metric: "50k Users",
                                icon: "📈"
                            },
                            {
                                company: "AppLaunch",
                                result: "Profitable in 6 months",
                                description: "Automated workflows reduced operational costs by 70%",
                                metric: "70% Savings",
                                icon: "💰"
                            }
                        ].map((story, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all shadow-lg hover:shadow-2xl"
                            >
                                <div className="text-5xl mb-4">{story.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{story.company}</h3>
                                <div className="text-indigo-600 dark:text-indigo-400 font-bold mb-4">{story.result}</div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{story.description}</p>
                                <div className="inline-flex px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">{story.metric}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Pricing Approach */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-12 border border-indigo-100 dark:border-indigo-800/50 mb-20"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            Startup-Friendly Pricing
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            We understand budget constraints. Our flexible pricing helps you get started without breaking the bank.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Equity Options", desc: "We can work for equity in exceptional cases", icon: "🤝" },
                            { title: "Milestone Payments", desc: "Pay as you validate and grow", icon: "📊" },
                            { title: "Deferred Payment", desc: "Start now, pay when you raise funding", icon: "💳" }
                        ].map((option, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 text-center"
                            >
                                <div className="text-4xl mb-3">{option.icon}</div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{option.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{option.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-12 relative overflow-hidden text-white shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Launch Your Startup?
                        </h2>
                        <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                            Let's turn your idea into a market-ready product. Book a free consultation to discuss your vision.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-xl bg-white text-indigo-900 font-bold shadow-xl hover:bg-indigo-50 transition-all duration-300 inline-flex items-center gap-2"
                            >
                                Get Started <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Startups;

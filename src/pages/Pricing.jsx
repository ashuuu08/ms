import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Rocket, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AntiGravityBackground from '../components/AntiGravityBackground';

const Pricing = () => {
    const pricingPlans = [
        {
            name: 'Starter',
            icon: Zap,
            description: 'Perfect for small projects and startups',
            bestFor: 'Ideal for MVPs and small applications',
            popular: false,
            features: [
                'Up to 3 Projects',
                'Basic Support (Email)',
                'Core Features Access',
                'Monthly Updates',
                '5GB Storage',
                'Community Access',
                'Basic Analytics',
                'SSL Certificate'
            ],
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            name: 'Professional',
            icon: Crown,
            description: 'Ideal for growing businesses',
            bestFor: 'Perfect for scaling companies',
            popular: true,
            features: [
                'Unlimited Projects',
                'Priority Support (24/7)',
                'Advanced Features',
                'Weekly Updates',
                '50GB Storage',
                'Premium Templates',
                'Advanced Analytics',
                'Custom Domain',
                'API Access',
                'Team Collaboration (5 users)',
                'White Label Options'
            ],
            gradient: 'from-indigo-500 to-purple-500'
        },
        {
            name: 'Enterprise',
            icon: Rocket,
            description: 'For large-scale operations',
            bestFor: 'Built for enterprise needs',
            popular: false,
            features: [
                'Unlimited Everything',
                'Dedicated Account Manager',
                'Custom Development',
                'Real-time Updates',
                'Unlimited Storage',
                'Custom Integrations',
                'Enterprise Analytics',
                'Multi-Domain Support',
                'Advanced API Access',
                'Unlimited Team Members',
                'SLA Guarantee',
                'Custom Training',
                'Priority Feature Requests'
            ],
            gradient: 'from-purple-500 to-pink-500'
        }
    ];

    return (
        <div className="min-h-screen w-full max-w-full pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden font-sans">
            <AntiGravityBackground />
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section - More Compact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-medium mb-4">
                        <Sparkles size={14} />
                        <span>Flexible Pricing</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Plans Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Your Success</span>
                    </h1>

                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
                        Every project is unique. We create custom pricing tailored to your specific needs and budget.
                    </p>

                    {/* Why Custom Pricing Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
                    >
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Why Custom Pricing?</h3>
                        <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600 dark:text-slate-400">
                            <div className="flex items-start gap-2">
                                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                <span>Pay only for what you need</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                <span>Flexible payment terms</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                <span>No hidden fees</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Pricing Cards - Compact Design */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {pricingPlans.map((plan, index) => {
                    const Icon = plan.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 400, damping: 15, duration: 0.2 }
                            }}
                            className={`relative rounded-2xl transition-all duration-300 group overflow-hidden ${plan.popular
                                ? 'bg-white dark:bg-slate-900 shadow-2xl scale-105 border-2 border-indigo-500 dark:border-indigo-400 ring-2 ring-indigo-200 dark:ring-indigo-800'
                                : 'bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl border-2 border-slate-200 dark:border-slate-800'
                                }`}
                        >
                            {/* Animated gradient border on hover */}
                            <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${plan.popular
                                ? 'opacity-100'
                                : 'opacity-0 group-hover:opacity-100'
                                }`}>
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}>
                                </div>
                            </div>

                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none"></div>

                            <div className="p-6 relative">
                                {/* Icon - Smaller */}
                                <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-r ${plan.gradient} mb-4`}>
                                    <Icon className="text-white" size={20} />
                                </div>

                                {/* Plan Name */}
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                                    {plan.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                    {plan.description}
                                </p>

                                {/* Pricing Message */}
                                <div className="mb-5 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <div className="flex items-center gap-2 mb-1">
                                        <MessageCircle size={16} className="text-indigo-600 dark:text-indigo-400" />
                                        <span className="text-sm font-bold text-slate-900 dark:text-white">Custom Pricing</span>
                                    </div>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">
                                        {plan.bestFor} - Let's discuss your needs
                                    </p>
                                </div>

                                {/* CTA Button - Links to Contact */}
                                <Link to="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 mb-6 group ${plan.popular
                                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg'
                                            : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                                            }`}>
                                        <span className="flex items-center justify-center gap-2">
                                            Get Quote
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </motion.button>
                                </Link>

                                {/* Features List - Compact */}
                                <div className="space-y-2.5">
                                    <p className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wide">
                                        What's Included:
                                    </p>
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <div className={`flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mt-0.5`}>
                                                <Check size={10} className="text-white" />
                                            </div>
                                            <span className="text-slate-600 dark:text-slate-400 text-xs">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Why Choose Our Pricing - Animated Facts */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 mb-12"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Why Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Pricing Works</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Transparent, flexible, and designed to grow with your business
                    </p>
                </div>

                {/* Animated Facts Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    {[
                        {
                            number: "100%",
                            label: "Transparent",
                            description: "No hidden fees or surprise charges",
                            gradient: "from-blue-500 to-cyan-500"
                        },
                        {
                            number: "24/7",
                            label: "Support",
                            description: "Round-the-clock assistance for all plans",
                            gradient: "from-indigo-500 to-purple-500"
                        },
                        {
                            number: "30-Day",
                            label: "Guarantee",
                            description: "Money-back if you're not satisfied",
                            gradient: "from-purple-500 to-pink-500"
                        },
                        {
                            number: "Custom",
                            label: "Solutions",
                            description: "Tailored to your specific needs",
                            gradient: "from-green-500 to-emerald-500"
                        }
                    ].map((fact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.05 }}
                            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all shadow-lg hover:shadow-2xl"
                        >
                            <div className={`inline-flex px-4 py-2 rounded-lg bg-gradient-to-r ${fact.gradient} mb-4`}>
                                <span className="text-2xl font-bold text-white">{fact.number}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{fact.label}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{fact.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* What's Included Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800/50 mb-12"
                >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                        What's Included in Every Plan
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Quality Assurance",
                                items: ["Code review", "Testing", "Bug fixes", "Performance optimization"]
                            },
                            {
                                title: "Documentation",
                                items: ["Technical docs", "User guides", "API documentation", "Video tutorials"]
                            },
                            {
                                title: "Deployment",
                                items: ["Cloud setup", "SSL certificate", "Domain configuration", "Launch support"]
                            }
                        ].map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800"
                            >
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{section.title}</h4>
                                <ul className="space-y-2">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                            <Check size={16} className="text-green-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Pricing Philosophy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-slate-900 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-800 mb-12"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                Our Pricing Philosophy
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                We believe in fair, transparent pricing that scales with your business. Every project is unique,
                                and we take the time to understand your specific requirements before providing a quote.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                No one-size-fits-all packages. No hidden fees. Just honest pricing based on the value we deliver.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { icon: "💰", title: "Value-Based", desc: "Pay for results, not hours" },
                                { icon: "📊", title: "Scalable", desc: "Pricing that grows with you" },
                                { icon: "🤝", title: "Flexible", desc: "Payment plans available" },
                                { icon: "✅", title: "All-Inclusive", desc: "No surprise charges" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
                                >
                                    <span className="text-3xl">{item.icon}</span>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* CTA Section - Compact */}
            <div className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-indigo-100 dark:border-indigo-800/50">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    Ready to Get Started?
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                    Let's discuss your project requirements and create a custom pricing package that fits your budget and timeline perfectly.
                </p>
                <Link to="/contact">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <span className="flex items-center gap-2">
                            Contact Our Team
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </motion.button>
                </Link>
            </div>

            {/* Trust Indicators - Compact */}
            <div className="mt-12 text-center">
                <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">
                    Trusted by 500+ businesses worldwide
                </p>
                <div className="flex justify-center items-center gap-6 flex-wrap opacity-50">
                    <div className="text-lg font-bold text-slate-400">BRAND</div>
                    <div className="text-lg font-bold text-slate-400">COMPANY</div>
                    <div className="text-lg font-bold text-slate-400">STARTUP</div>
                    <div className="text-lg font-bold text-slate-400">TECH</div>
                </div>
            </div>

        </div>
    );
};

export default Pricing;

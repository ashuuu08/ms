import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Eye, Cookie, Users, Globe } from 'lucide-react';

const Policy = () => {
    const policies = [
        {
            icon: Eye,
            title: 'Privacy Policy',
            description: 'How we collect, use, and protect your personal information.',
            sections: [
                'Information we collect and how we use it',
                'Data storage and security measures',
                'Third-party services and integrations',
                'Your rights and choices regarding your data',
                'Cookie usage and tracking technologies',
            ]
        },
        {
            icon: FileText,
            title: 'Terms of Service',
            description: 'The terms and conditions governing use of our services.',
            sections: [
                'Service description and availability',
                'User responsibilities and acceptable use',
                'Payment terms and refund policy',
                'Intellectual property rights',
                'Limitation of liability and disclaimers',
            ]
        },
        {
            icon: Cookie,
            title: 'Cookie Policy',
            description: 'How we use cookies and similar technologies.',
            sections: [
                'Types of cookies we use',
                'Purpose of cookie usage',
                'Managing your cookie preferences',
                'Third-party cookies and analytics',
            ]
        },
        {
            icon: Shield,
            title: 'Data Protection',
            description: 'Our commitment to protecting your data and privacy.',
            sections: [
                'GDPR compliance measures',
                'Data encryption and security protocols',
                'Data breach notification procedures',
                'Data retention and deletion policies',
            ]
        },
    ];

    return (
        <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
                        <FileText size={16} />
                        <span>Legal & Compliance</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                        Policies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Guidelines</span>
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Our policies ensure transparency, compliance, and protection for both our clients and our business.
                    </p>
                </div>

                {/* Last Updated */}
                <div className="text-center mb-12">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Last updated: February 1, 2026
                    </p>
                </div>

                {/* Policy Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {policies.map((policy, index) => {
                        const Icon = policy.icon;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 mb-4 shadow-md`}>
                                    <Icon className="text-white" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                    {policy.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    {policy.description}
                                </p>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide">
                                        Key Topics:
                                    </h4>
                                    <ul className="space-y-2">
                                        {policy.sections.map((section, sectionIndex) => (
                                            <li key={sectionIndex} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 flex-shrink-0"></div>
                                                <span className="text-slate-600 dark:text-slate-400 text-sm">
                                                    {section}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Commitment Statement */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 shadow-2xl text-white mb-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <Globe size={48} className="mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-6">
                            Our Commitment to Transparency
                        </h2>
                        <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
                            We believe in complete transparency with our clients. Our policies are designed to protect your rights, ensure compliance with international regulations, and maintain the highest standards of business ethics. We regularly review and update our policies to reflect changing regulations and industry best practices.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                                <div className="text-3xl font-bold mb-2">100%</div>
                                <div className="text-indigo-100">Transparent</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                                <div className="text-3xl font-bold mb-2">GDPR</div>
                                <div className="text-indigo-100">Compliant</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                                <div className="text-3xl font-bold mb-2">24/7</div>
                                <div className="text-indigo-100">Support</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact for Questions */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 shadow-lg border border-slate-200 dark:border-slate-800 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Questions About Our Policies?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                        If you have any questions about our policies or need clarification, our legal and compliance team is here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="mailto:legal@ashbitsoft.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Contact Legal Team
                        </motion.a>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold transition-all duration-300"
                        >
                            General Contact
                        </motion.a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Policy;

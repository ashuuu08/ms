import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, FileCheck, AlertTriangle } from 'lucide-react';

const Security = () => {
    const securityFeatures = [
        {
            icon: Lock,
            title: 'Data Encryption',
            description: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption standards.',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Shield,
            title: 'Security Audits',
            description: 'Regular security assessments and penetration testing to identify and address vulnerabilities.',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: Eye,
            title: 'Privacy Protection',
            description: 'We follow strict data privacy policies and comply with GDPR, CCPA, and other regulations.',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            icon: Server,
            title: 'Infrastructure Security',
            description: 'Enterprise-grade cloud infrastructure with 99.9% uptime and automatic backups.',
            gradient: 'from-orange-500 to-red-500'
        },
        {
            icon: FileCheck,
            title: 'Code Reviews',
            description: 'All code undergoes rigorous review processes to ensure security best practices.',
            gradient: 'from-indigo-500 to-purple-500'
        },
        {
            icon: AlertTriangle,
            title: 'Incident Response',
            description: '24/7 monitoring with rapid incident response protocols to address security concerns.',
            gradient: 'from-yellow-500 to-orange-500'
        },
    ];

    const certifications = [
        'ISO 27001',
        'SOC 2 Type II',
        'GDPR Compliant',
        'HIPAA Compliant'
    ];

    return (
        <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
                        <Shield size={16} />
                        <span>Security First</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                        Your Security Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Our Priority</span>
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        We implement industry-leading security practices to protect your data and ensure the integrity of your applications.
                    </p>
                </div>

                {/* Security Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {securityFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 shadow-md`}>
                                    <Icon className="text-white" size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Certifications */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-12 border border-indigo-100 dark:border-indigo-800/50 mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                        Industry Certifications & Compliance
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <div key={index} className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow-md border border-slate-200 dark:border-slate-800">
                                <div className="text-lg font-bold text-slate-900 dark:text-white">
                                    {cert}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security Commitment */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 shadow-lg border border-slate-200 dark:border-slate-800">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                        Our Security Commitment
                    </h2>
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            At AshbitSoft, we understand that security is not just a feature—it's a fundamental requirement. We are committed to maintaining the highest security standards in all our products and services.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            Our security program includes regular third-party audits, continuous monitoring, and a dedicated security team working around the clock to protect your data. We implement defense-in-depth strategies and stay ahead of emerging threats.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            If you have security concerns or discover a vulnerability, please contact our security team immediately at <a href="mailto:security@ashbitsoft.com" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">security@ashbitsoft.com</a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Security;

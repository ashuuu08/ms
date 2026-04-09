import React from 'react';
import { Building2, Target, Users, Heart, Award, Globe, TrendingUp, Lightbulb, MessageSquare, MapPin, Phone } from 'lucide-react';

const Company = () => {
    const stats = [
        { number: '50+', label: 'Happy Clients' },
        { number: '80+', label: 'Projects Delivered' },
        { number: '3', label: 'Core Team Members' },
        { number: '2023', label: 'Year Founded' }
    ];

    const values = [
        {
            icon: Target,
            title: 'Mission Driven',
            description: 'We are committed to delivering innovative solutions that empower businesses to achieve their full potential.',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Heart,
            title: 'Customer First',
            description: 'Your success is our success. We prioritize understanding your needs and exceeding expectations.',
            gradient: 'from-red-500 to-rose-500'
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We embrace cutting-edge technologies and creative thinking to solve complex challenges.',
            gradient: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'Quality is non-negotiable. We maintain the highest standards in everything we deliver.',
            gradient: 'from-purple-500 to-pink-500'
        }
    ];

    const team = [
        {
            name: 'Amit Verma',
            role: 'CEO & Founder',
            image: '👨‍💼',
            bio: 'Visionary leader with 15+ years in tech'
        },
        {
            name: 'Neha Kapoor',
            role: 'CTO',
            image: '👩‍💻',
            bio: 'Tech expert driving innovation'
        },
        {
            name: 'Rohan Desai',
            role: 'Head of Design',
            image: '👨‍🎨',
            bio: 'Award-winning UX/UI designer'
        },
        {
            name: 'Kavya Reddy',
            role: 'VP of Operations',
            image: '👩‍💼',
            bio: 'Operations excellence specialist'
        }
    ];

    return (
        <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
                        <Building2 size={16} />
                        <span>About Us</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                        Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Future Together</span>
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        AshbitSoft is an elite digital architecture firm dedicated to engineering high-performance ecosystems that drive measurable business results and scalable growth.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800">
                            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Our Story */}
                <div className="mb-20 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-12 border border-indigo-100 dark:border-indigo-800/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                            Our Story
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            Founded in 2023, AshbitSoft emerged with a singular focus: to bridge the gap between complex business logic and high-performance code. What began as an agile automation unit has evolved into a comprehensive digital powerhouse delivering enterprise-grade apps and AI-driven growth strategies.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            We operate on a boutique model, intentionally working with a select number of high-potential clients to ensure every architecture we build is a masterpiece of efficiency, security, and scalability.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                        Our Core Values
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.gradient} mb-4`}>
                                        <Icon className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Leadership Team */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                        Meet Our Leadership
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800 text-center">
                                <div className="text-6xl mb-4">{member.image}</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 shadow-2xl text-white">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                            Get in Touch
                        </h2>
                        <p className="text-lg text-indigo-100 mb-8 text-center">
                            Have questions or want to work with us? We'd love to hear from you.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="text-center">
                                <MessageSquare className="mx-auto mb-3" size={32} />
                                <p className="font-semibold mb-1">WhatsApp</p>
                                <p className="text-indigo-100">+91 76977 06427</p>
                            </div>
                            <div className="text-center">
                                <Phone className="mx-auto mb-3" size={32} />
                                <p className="font-semibold mb-1">Phone</p>
                                <p className="text-indigo-100">+91 96912 07533</p>
                            </div>
                            <div className="text-center">
                                <MapPin className="mx-auto mb-3" size={32} />
                                <p className="font-semibold mb-1">Location</p>
                                <p className="text-indigo-100">Anuppur, Madhya Pradesh</p>
                                <p className="text-indigo-200 text-sm mt-1">Working Remotely</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <button className="px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                Contact Us Today
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Company;

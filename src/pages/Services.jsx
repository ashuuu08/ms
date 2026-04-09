import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import {
  FileSpreadsheet, Globe, Server, Share2, Layout, Cpu, ShieldCheck,
  BarChart3, ArrowRight, Terminal, Bot, Search,
  CheckCircle2, Plus, Minus, Code2, Rocket, Settings,
  Zap, Layers, Users, Sparkles, LineChart, Database, Megaphone, Coffee,
  Smartphone, Cloud, Lock, TrendingUp, Package, Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Service Categories
  const categories = [
    { id: 'all', name: 'All Services', icon: Layers },
    { id: 'development', name: 'Development', icon: Code2 },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'marketing', name: 'Marketing', icon: Megaphone },
    { id: 'consulting', name: 'Consulting', icon: Briefcase }
  ];

  // Comprehensive Services Data
  const services = [
    {
      id: 1,
      category: 'development',
      title: 'Custom Web Applications',
      description: 'Build powerful, scalable web applications tailored to your business needs',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Full-stack development with modern frameworks',
        'Responsive design for all devices',
        'Cloud-native architecture',
        'API integration and development',
        'Real-time data synchronization'
      ],
      benefits: [
        'Faster time-to-market',
        'Scalable infrastructure',
        'Enhanced user experience',
        'Reduced operational costs'
      ],
      deliveryTime: '4-8 weeks',
      pricing: 'Custom Pricing'
    },
    {
      id: 2,
      category: 'development',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Cross-platform development (React Native)',
        'Native iOS and Android apps',
        'Offline-first architecture',
        'Push notifications and analytics',
        'App Store optimization'
      ],
      benefits: [
        'Reach wider audience',
        'Seamless user experience',
        'Lower development costs',
        'Faster deployment'
      ],
      deliveryTime: '6-12 weeks',
      pricing: 'Custom Pricing'
    },
    {
      id: 3,
      category: 'development',
      title: 'E-Commerce Solutions',
      description: 'Complete online store setup with payment processing and inventory management',
      icon: Package,
      color: 'from-emerald-500 to-teal-500',
      features: [
        'Custom storefront design',
        'Secure payment gateway integration',
        'Inventory management system',
        'Order tracking and fulfillment',
        'Customer analytics dashboard'
      ],
      benefits: [
        'Increase online sales',
        'Automated order processing',
        'Better customer insights',
        '24/7 availability'
      ],
      deliveryTime: '3-6 weeks',
      pricing: 'Custom Pricing'
    },
    {
      id: 4,
      category: 'automation',
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and streamline your business processes',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      features: [
        'Custom workflow design',
        'Integration with existing tools',
        'Automated data entry and processing',
        'Email and notification automation',
        'Scheduled task execution'
      ],
      benefits: [
        'Save 20-40 hours per week',
        'Eliminate human errors',
        'Improve team productivity',
        'Reduce operational costs'
      ],
      deliveryTime: '1-3 weeks',
      pricing: 'Custom Pricing'
    },
    {
      id: 5,
      category: 'automation',
      title: 'Data Integration & ETL',
      description: 'Connect your systems and automate data flow between applications',
      icon: Database,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'API integration and development',
        'Real-time data synchronization',
        'Data transformation and cleaning',
        'Custom reporting dashboards',
        'Automated backup solutions'
      ],
      benefits: [
        'Single source of truth',
        'Real-time insights',
        'Reduced manual work',
        'Better data accuracy'
      ],
      deliveryTime: '2-4 weeks',
      pricing: 'Custom Pricing'
    },
    {
      id: 6,
      category: 'automation',
      title: 'Business Intelligence & Analytics',
      description: 'Transform your data into actionable insights with custom dashboards',
      icon: BarChart3,
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Custom analytics dashboards',
        'Real-time data visualization',
        'Predictive analytics',
        'Automated reporting',
        'KPI tracking and alerts'
      ],
      benefits: [
        'Data-driven decisions',
        'Identify trends early',
        'Improve ROI',
        'Competitive advantage'
      ],
      deliveryTime: '3-5 weeks',
      pricing: 'Custom Pricing'
    },
    {
      id: 7,
      category: 'marketing',
      title: 'Digital Marketing Automation',
      description: 'Automate your marketing campaigns and lead nurturing processes',
      icon: Megaphone,
      color: 'from-pink-500 to-rose-500',
      features: [
        'Email marketing automation',
        'Social media scheduling',
        'Lead scoring and nurturing',
        'Campaign performance tracking',
        'A/B testing automation'
      ],
      benefits: [
        'Higher conversion rates',
        'Better lead quality',
        'Increased engagement',
        'Lower customer acquisition cost'
      ],
      deliveryTime: '2-4 weeks',
      pricing: 'Custom Pricing'
    },
    {
      id: 8,
      category: 'marketing',
      title: 'SEO & Content Optimization',
      description: 'Improve your search rankings and drive organic traffic',
      icon: Search,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Technical SEO audit',
        'Keyword research and strategy',
        'On-page optimization',
        'Content creation and optimization',
        'Link building campaigns'
      ],
      benefits: [
        'Increased organic traffic',
        'Better search rankings',
        'Higher quality leads',
        'Long-term ROI'
      ],
      deliveryTime: 'Ongoing',
      pricing: 'Custom Pricing'
    },
    {
      id: 9,
      category: 'consulting',
      title: 'Technology Consulting',
      description: 'Strategic guidance for your digital transformation journey',
      icon: Briefcase,
      color: 'from-violet-500 to-purple-500',
      features: [
        'Technology stack assessment',
        'Digital transformation roadmap',
        'Architecture design and review',
        'Vendor selection guidance',
        'Team training and workshops'
      ],
      benefits: [
        'Avoid costly mistakes',
        'Faster implementation',
        'Better technology choices',
        'Improved team capabilities'
      ],
      deliveryTime: 'Flexible',
      pricing: 'Custom Pricing'
    },
    {
      id: 10,
      category: 'consulting',
      title: 'Cloud Migration & DevOps',
      description: 'Move to the cloud and implement modern DevOps practices',
      icon: Cloud,
      color: 'from-sky-500 to-blue-500',
      features: [
        'Cloud migration strategy',
        'Infrastructure as Code',
        'CI/CD pipeline setup',
        'Container orchestration',
        'Monitoring and alerting'
      ],
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability',
        'Faster deployments',
        'Better reliability'
      ],
      deliveryTime: '4-8 weeks',
      pricing: 'Custom Pricing'
    },
    {
      id: 11,
      category: 'consulting',
      title: 'Security & Compliance',
      description: 'Protect your business with comprehensive security solutions',
      icon: ShieldCheck,
      color: 'from-red-500 to-orange-500',
      features: [
        'Security audit and assessment',
        'Compliance consulting (GDPR, HIPAA)',
        'Penetration testing',
        'Security training',
        'Incident response planning'
      ],
      benefits: [
        'Protect sensitive data',
        'Meet compliance requirements',
        'Reduce security risks',
        'Build customer trust'
      ],
      deliveryTime: '2-6 weeks',
      pricing: 'Custom Pricing'
    },
    {
      id: 12,
      category: 'development',
      title: 'API Development & Integration',
      description: 'Build and integrate APIs to connect your systems seamlessly',
      icon: Terminal,
      color: 'from-slate-500 to-gray-500',
      features: [
        'RESTful API development',
        'GraphQL implementation',
        'Third-party API integration',
        'API documentation',
        'Rate limiting and security'
      ],
      benefits: [
        'Seamless system integration',
        'Improved data flow',
        'Better scalability',
        'Enhanced functionality'
      ],
      deliveryTime: '2-4 weeks',
      pricing: 'Custom Pricing'
    }
  ];

  // Filter services based on active category
  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory);

  // FAQs
  const faqs = [
    {
      q: "How do you determine project pricing?",
      a: "We provide custom quotes based on project scope, complexity, timeline, and required resources. After an initial consultation, we'll provide a detailed proposal with transparent pricing and deliverables."
    },
    {
      q: "Do you work with existing codebases?",
      a: "Absolutely! We specialize in auditing, refactoring, and enhancing existing applications. Whether it's legacy code or a modern stack, we can help improve performance, security, and maintainability."
    },
    {
      q: "What is your typical project timeline?",
      a: "Timelines vary by project complexity. Simple automation projects take 1-3 weeks, while complex web applications may take 6-12 weeks. We provide detailed timelines during the proposal phase and keep you updated throughout."
    },
    {
      q: "Do you offer ongoing support and maintenance?",
      a: "Yes! We offer flexible retainer packages for ongoing maintenance, updates, monitoring, and feature additions. We can also provide emergency support and SLA-based agreements for mission-critical applications."
    },
    {
      q: "What technologies do you work with?",
      a: "We work with modern tech stacks including React, Node.js, Python, Next.js, and cloud platforms like AWS and Azure. We choose the best technology for your specific needs and can work with your existing infrastructure."
    },
    {
      q: "Can you help with urgent or time-sensitive projects?",
      a: "Yes, we offer expedited development services for urgent projects. Contact us to discuss your timeline and we'll work with you to find the best solution."
    }
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white dark:bg-slate-950 min-h-screen pt-28 pb-20 transition-colors duration-300 font-sans">
      <SEO 
        title="Our Tech Services - Development, AI & Automation" 
        description="Comprehensive technical services including MERN stack development, AI integration, Google Sheets automation, and digital marketing solutions."
        ogUrl="/services"
      />
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 mb-4 text-sm font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
            Our Services
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Digital Architecture</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We engineer high-performance ecosystems through custom development, intelligent automation, and strategic consulting designed for global scale.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
              >
                <Icon size={18} />
                {category.name}
              </button>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all group"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} className="text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Delivery Time & CTA */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">Estimated Delivery</div>
                      <div className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                        {service.deliveryTime}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold rounded-full uppercase tracking-wider border border-indigo-100 dark:border-indigo-800/50">
                        Top Rated
                      </div>
                    </div>
                  </div>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors"
                    >
                      Get Started
                      <ArrowRight size={18} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-12 mb-20 border border-indigo-100 dark:border-indigo-800/30"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">AshbitSoft Advantage</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Rocket,
                title: 'Fast Delivery',
                description: 'We deliver projects on time without compromising quality'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Experienced developers and consultants at your service'
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: '50+ successful projects with high client satisfaction'
              },
              {
                icon: ShieldCheck,
                title: 'Engineering Excellence',
                description: 'Rigorous architectural standards and uncompromising quality control'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Questions</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="font-semibold text-slate-900 dark:text-white pr-4">
                    {faq.q}
                  </span>
                  {openFaq === index ? (
                    <Minus size={20} className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  ) : (
                    <Plus size={20} className="text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors shadow-xl"
                >
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link to="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-indigo-700 text-white font-bold rounded-xl hover:bg-indigo-800 transition-colors border-2 border-white/20"
                >
                  View Pricing
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Services;
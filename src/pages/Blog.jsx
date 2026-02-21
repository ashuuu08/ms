import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Clock, Calendar, Tag, Sparkles, TrendingUp, Filter } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { blogPosts, getCategories } from '../data/blogData';

const CATEGORY_ICONS = {
    'All': '📚',
    'Automation': '⚡',
    'Development': '💻',
    'Artificial Intelligence': '🤖',
    'Digital Marketing': '📈',
    'Business Strategy': '💡',
    'Security': '🔒',
    'Mobile Development': '📱',
};

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        document.title = 'Blog — AshbitSoft | Tech Insights, Tutorials & Case Studies';
    }, []);

    const categories = ['All', ...getCategories()];

    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesSearch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 2);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">

            {/* ═══════════════════════════════════════════════════════
                HERO
            ═══════════════════════════════════════════════════════ */}
            <section className="relative pt-32 pb-16 px-4 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 rounded-full text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest mb-5">
                            <Sparkles size={13} />
                            Insights from the AshbitSoft Team
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-5 leading-tight">
                            Tech Insights &{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                                Case Studies
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Real-world tutorials, lessons from client projects, and our honest take on tech —
                            written by the engineers building it every day.
                        </p>

                        {/* Search */}
                        <div className="relative max-w-xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search articles, topics, or tags..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-sm shadow-sm"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                FEATURED POSTS (only when no search/filter)
            ═══════════════════════════════════════════════════════ */}
            {!searchQuery && selectedCategory === 'All' && (
                <section className="py-14 px-4 bg-slate-50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-800">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-2 mb-8">
                            <TrendingUp size={18} className="text-indigo-600 dark:text-indigo-400" />
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Featured Articles</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {featuredPosts.map((post, i) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {/* Featured card — large horizontal layout */}
                                    <Link to={`/blog/${post.slug}`} className="group block bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300">
                                        <div className={`bg-gradient-to-br ${post.gradient} h-40 relative flex items-center justify-center overflow-hidden`}>
                                            <div className="absolute top-5 right-5 w-28 h-28 bg-white/10 rounded-full" />
                                            <div className="absolute bottom-3 left-5 w-14 h-14 bg-white/10 rounded-full" />
                                            <span className="text-6xl z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-300 select-none">{post.icon}</span>
                                            <div className="absolute top-3 left-3">
                                                <span className="px-2.5 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-full text-[10px] font-bold text-slate-700 dark:text-slate-200">
                                                    {post.category}
                                                </span>
                                            </div>
                                            <div className="absolute top-3 right-3">
                                                <span className="px-2.5 py-1 bg-amber-400 rounded-full text-[10px] font-bold text-amber-900">⭐ Featured</span>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
                                                <span className="flex items-center gap-1"><Calendar size={11} />{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                                            </div>
                                            <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1.5 leading-snug">{post.title}</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${post.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                                                        {post.author[0]}
                                                    </div>
                                                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{post.author}</span>
                                                </div>
                                                <span className="flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:gap-2 transition-all">
                                                    Read Article <ArrowRight size={13} />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ═══════════════════════════════════════════════════════
                CATEGORY FILTER + ALL POSTS
            ═══════════════════════════════════════════════════════ */}
            <section className="py-14 px-4 pb-20">
                <div className="max-w-7xl mx-auto">

                    {/* Category Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-10"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Filter size={15} className="text-slate-500" />
                            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Filter by Category</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 border ${selectedCategory === cat
                                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/20'
                                            : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400'
                                        }`}
                                >
                                    {CATEGORY_ICONS[cat] || '📌'} {cat}
                                </button>
                            ))}
                        </div>

                        {/* Result count */}
                        <div className="flex items-center justify-between mt-5">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                    {searchQuery || selectedCategory !== 'All' ? 'Results' : 'All Articles'}
                                </h2>
                                <p className="text-xs text-slate-400 mt-0.5">{filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found</p>
                            </div>
                            {(searchQuery || selectedCategory !== 'All') && (
                                <button
                                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                                    className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                                >
                                    Clear filters
                                </button>
                            )}
                        </div>
                    </motion.div>

                    {/* Posts Grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPosts.map((post, i) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                >
                                    <BlogCard post={post} />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-24"
                        >
                            <div className="text-5xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No articles found</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Try a different search term or category</p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-colors"
                            >
                                View All Articles
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                NEWSLETTER CTA
            ═══════════════════════════════════════════════════════ */}
            <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-800">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="text-3xl mb-3">✉️</div>
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                        Start a Project With Us
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                        Found something useful here? Imagine what we can build together.
                        Get a free consultation — no strings attached.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-xl shadow-indigo-500/20 text-sm"
                        >
                            Get Free Consultation <ArrowRight size={16} />
                        </motion.button>
                    </Link>
                </motion.div>
            </section>

        </div>
    );
};

export default Blog;

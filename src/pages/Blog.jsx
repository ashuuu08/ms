import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, TrendingUp, Sparkles } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { blogPosts, getCategories, getTags } from '../data/blogData';

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedTag, setSelectedTag] = useState('All');

    // Set page title and meta description
    useEffect(() => {
        document.title = 'Blog - AshbitSoft | Latest Tech Insights & Tutorials';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Explore the latest trends, insights, and best practices in technology, cloud computing, cybersecurity, web development, and digital transformation.');
        }
    }, []);

    const categories = ['All', ...getCategories()];
    const tags = ['All', ...getTags()];

    // Filter posts based on search and filters
    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesSearch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.author.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory =
                selectedCategory === 'All' || post.category === selectedCategory;

            const matchesTag =
                selectedTag === 'All' || post.tags.includes(selectedTag);

            return matchesSearch && matchesCategory && matchesTag;
        });
    }, [searchQuery, selectedCategory, selectedTag]);

    const featuredPosts = blogPosts.filter(post => post.featured);
    const recentPosts = [...blogPosts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-6">
                            <Sparkles size={16} />
                            <span>Insights & Innovation</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Blog</span>
                        </h1>

                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Explore the latest trends, insights, and best practices in technology, business, and digital transformation
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 transition-all"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="px-4 mb-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Filter size={20} className="text-indigo-600 dark:text-indigo-400" />
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Filters</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Category Filter */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Category
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                                    ? 'bg-indigo-600 text-white shadow-lg'
                                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tag Filter */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Tags
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {tags.slice(0, 8).map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => setSelectedTag(tag)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedTag === tag
                                                    ? 'bg-purple-600 text-white shadow-lg'
                                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                                }`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Active Filters Display */}
                        {(selectedCategory !== 'All' || selectedTag !== 'All' || searchQuery) && (
                            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSearchQuery('');
                                            setSelectedCategory('All');
                                            setSelectedTag('All');
                                        }}
                                        className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Featured Posts */}
            {!searchQuery && selectedCategory === 'All' && selectedTag === 'All' && featuredPosts.length > 0 && (
                <section className="px-4 mb-16">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mb-8"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <TrendingUp className="text-indigo-600 dark:text-indigo-400" size={24} />
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                                    Featured Articles
                                </h2>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400">
                                Hand-picked articles covering the most important topics
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredPosts.map((post) => (
                                <BlogCard key={post.id} post={post} featured />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Posts */}
            <section className="px-4 pb-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mb-8"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            {searchQuery || selectedCategory !== 'All' || selectedTag !== 'All'
                                ? 'Search Results'
                                : 'Latest Articles'}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                        </p>
                    </motion.div>

                    {filteredPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                >
                                    <BlogCard post={post} />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-20"
                        >
                            <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search size={40} className="text-slate-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                No articles found
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Try adjusting your search or filters
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('All');
                                    setSelectedTag('All');
                                }}
                                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors"
                            >
                                Clear filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blog;

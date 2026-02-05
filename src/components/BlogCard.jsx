import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

const BlogCard = ({ post, featured = false }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800 ${featured ? 'md:col-span-2' : ''
                }`}
        >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                        {post.category}
                    </span>
                </div>

                {/* Featured Badge */}
                {post.featured && (
                    <div className="absolute top-4 right-4 z-20">
                        <span className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs font-bold text-white shadow-lg">
                            Featured
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5">
                        <Calendar size={16} className="text-indigo-600 dark:text-indigo-400" />
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </time>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock size={16} className="text-indigo-600 dark:text-indigo-400" />
                        <span>{post.readTime}</span>
                    </div>
                </div>

                {/* Title */}
                <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                    </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                    {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300"
                        >
                            <Tag size={12} />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Author and CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
                            {post.author.charAt(0)}
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                {post.author}
                            </p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                                {post.authorRole}
                            </p>
                        </div>
                    </div>

                    <Link
                        to={`/blog/${post.slug}`}
                        className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                    >
                        Read More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogCard;

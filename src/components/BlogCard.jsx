import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogCard = ({ post, featured = false }) => {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
    });

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -5 }}
            className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300 flex flex-col h-full"
        >
            {/* Gradient Header — no broken image issues */}
            <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden flex-shrink-0">
                <div className={`bg-gradient-to-br ${post.gradient || 'from-indigo-600 to-violet-600'} h-44 flex items-center justify-center relative`}>
                    {/* Decorative bubbles */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full" />
                    <div className="absolute bottom-2 left-6 w-12 h-12 bg-white/10 rounded-full" />
                    <div className="absolute top-8 left-8 w-6 h-6 bg-white/15 rounded-full" />

                    {/* Icon / Emoji */}
                    <span className="text-5xl select-none z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {post.icon || '📝'}
                    </span>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-slate-700 dark:text-slate-200 border border-white/20">
                            {post.category}
                        </span>
                    </div>

                    {/* Featured badge */}
                    {post.featured && (
                        <div className="absolute top-3 right-3 z-10">
                            <span className="px-2.5 py-1 bg-amber-400 rounded-full text-[10px] font-bold text-amber-900">
                                ⭐ Featured
                            </span>
                        </div>
                    )}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </Link>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Meta */}
                <div className="flex items-center gap-4 text-[11px] text-slate-400 dark:text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar size={11} />
                        <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock size={11} />
                        <span>{post.readTime}</span>
                    </div>
                </div>

                {/* Title */}
                <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                    </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed flex-grow">
                    {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-medium text-slate-500 dark:text-slate-400">
                            <Tag size={9} />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 mt-auto">
                    <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${post.gradient || 'from-indigo-600 to-violet-600'} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                            {post.author.charAt(0)}
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-slate-900 dark:text-white leading-none">{post.author}</p>
                            <p className="text-[10px] text-slate-400 mt-0.5 leading-none">{post.authorRole.split(',')[0]}</p>
                        </div>
                    </div>

                    <Link
                        to={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold text-xs group-hover:gap-2 transition-all duration-300"
                    >
                        Read <ArrowRight size={13} />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogCard;

import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Calendar,
    Clock,
    User,
    ArrowLeft,
    Share2,
    Facebook,
    Twitter,
    Linkedin,
    Tag,
    TrendingUp
} from 'lucide-react';
import { getPostBySlug, getRecentPosts } from '../data/blogData';
import BlogCard from '../components/BlogCard';
import SEO from '../components/SEO';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = getPostBySlug(slug);
    const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Article Not Found
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                        The article you're looking for doesn't exist.
                    </p>
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const shareUrl = window.location.href;
    const shareTitle = post.title;

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
            <SEO 
                title={post.title} 
                description={post.excerpt} 
                keywords={post.tags.join(', ')} 
                ogUrl={`/blog/${post.slug}`}
                ogImage={post.image}
            />
            {/* Hero Section */}
            <section className="relative pt-32 pb-12 px-4 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <button
                            onClick={() => navigate('/blog')}
                            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all duration-300 font-semibold"
                        >
                            <ArrowLeft size={20} />
                            Back to Blog
                        </button>
                    </motion.div>

                    {/* Category Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6"
                    >
                        <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                            {post.category}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
                    >
                        {post.title}
                    </motion.h1>

                    {/* Excerpt */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-xl text-slate-600 dark:text-slate-400 mb-8"
                    >
                        {post.excerpt}
                    </motion.p>

                    {/* Meta Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-6 pb-8 border-b border-slate-200 dark:border-slate-800"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 dark:text-white">
                                    {post.author}
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    {post.authorRole}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-indigo-600 dark:text-indigo-400" />
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </time>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-indigo-600 dark:text-indigo-400" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="px-4 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Main Content */}
            <section className="px-4 pb-12">
                <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Article Content */}
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="lg:col-span-8"
                        >
                            <div
                                className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-slate-900 dark:prose-strong:text-white
                  prose-ul:my-6 prose-li:my-2
                  prose-code:text-indigo-600 dark:prose-code:text-indigo-400 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Tags */}
                            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                                <div className="flex items-center gap-2 mb-4">
                                    <Tag size={20} className="text-indigo-600 dark:text-indigo-400" />
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                        Tags
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>

                        {/* Sidebar */}
                        <motion.aside
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="lg:col-span-4"
                        >
                            {/* Share Section */}
                            <div className="sticky top-24 space-y-8">
                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Share2 size={20} className="text-indigo-600 dark:text-indigo-400" />
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                            Share Article
                                        </h3>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href={shareLinks.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                                        >
                                            <Facebook size={20} />
                                            Share on Facebook
                                        </a>
                                        <a
                                            href={shareLinks.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors font-medium"
                                        >
                                            <Twitter size={20} />
                                            Share on Twitter
                                        </a>
                                        <a
                                            href={shareLinks.linkedin}
                                            target="https://www.linkedin.com/company/111382117"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-4 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors font-medium"
                                        >
                                            <Linkedin size={20} />
                                            Share on LinkedIn
                                        </a>
                                    </div>
                                </div>

                                {/* Author Card */}
                                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 shadow-lg text-white">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold">
                                            {post.author.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">{post.author}</h3>
                                            <p className="text-indigo-100">{post.authorRole}</p>
                                        </div>
                                    </div>
                                    <p className="text-indigo-100 text-sm">
                                        Expert in {post.category.toLowerCase()} with years of experience helping businesses succeed.
                                    </p>
                                </div>
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {recentPosts.length > 0 && (
                <section className="px-4 py-20 bg-slate-100 dark:bg-slate-900/50">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-12"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <TrendingUp className="text-indigo-600 dark:text-indigo-400" size={24} />
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                                    More Articles
                                </h2>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400">
                                Continue reading with these related articles
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {recentPosts.map((relatedPost, index) => (
                                <motion.div
                                    key={relatedPost.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                >
                                    <BlogCard post={relatedPost} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default BlogPost;

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, BadgeCheck } from 'lucide-react';

const Feedback = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "COO, LogisticsFlow",
      text: "We were drowning in manual data entry. The Google AppScript bot ashSoft built now handles 500+ invoices daily automatically. It's like having a free employee that never sleeps.",
      stars: 5,
      initial: "S",
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "David Chen",
      role: "Founder, TechStart",
      text: "I needed a high-performance portfolio to pitch investors. They delivered a React site that scores 100/100 on Lighthouse. Fast, clean code, and stunning design.",
      stars: 5,
      initial: "D",
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Marcus Reid",
      role: "HR Director, CorpGlobal",
      text: "The Enterprise Leave Management system they architected on AWS is flawless. It handles our 5,000+ employee database without a stutter. Highly recommended for scalable systems.",
      stars: 5,
      initial: "M",
      color: "bg-emerald-100 text-emerald-600"
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Trusted by <span className="text-indigo-600 dark:text-indigo-400">Visionaries</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. See what CTOs and Founders say about our code.
            </p>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative group hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-slate-200 dark:text-slate-800 group-hover:text-indigo-100 dark:group-hover:text-indigo-900/30 transition-colors">
                <Quote size={64} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-700 dark:text-slate-300 mb-8 relative z-10 leading-relaxed">
                "{review.text}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${review.color}`}>
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    {review.name}
                    <BadgeCheck size={16} className="text-blue-500" />
                  </h4>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {review.role}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Feedback;
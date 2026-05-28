'use client';

import { motion } from 'framer-motion';
import { Heart, Music, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

/**
 * StyleGrid Component
 * Creative bento-grid layout with mixed card sizes
 */
export default function StyleGrid() {
  const cards = [
    {
      id: 1,
      type: 'quote',
      size: 'large',
      content: '"Art is where boundaries dissolve and imagination flows."',
      className: 'col-span-1 md:col-span-2 row-span-2',
    },
    {
      id: 2,
      type: 'stat',
      size: 'medium',
      icon: Heart,
      label: 'Passion',
      value: '∞',
      className: 'col-span-1',
    },
    {
      id: 3,
      type: 'stat',
      size: 'medium',
      icon: Zap,
      label: 'Energy',
      value: 'Max',
      className: 'col-span-1',
    },
    {
      id: 4,
      type: 'text',
      size: 'medium',
      title: 'Design Philosophy',
      content: 'Bold colors, expressive characters, and interactive experiences that engage viewers.',
      className: 'col-span-1 md:col-span-2',
    },
    {
      id: 5,
      type: 'stat',
      size: 'medium',
      icon: Music,
      label: 'Creativity',
      value: '100%',
      className: 'col-span-1 md:col-span-1',
    },
    {
      id: 6,
      type: 'accent',
      size: 'small',
      color: 'from-pink-500/30 to-pink-500/10',
      className: 'col-span-1 md:col-span-1',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="style" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-lime-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lime-400 font-display font-bold mb-3"
            >
              My Style
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-4"
            >
              Creative Expression
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              A unique blend of anime aesthetics, modern design principles, and interactive experiences
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              className={`${card.className}`}
              whileHover={{ y: -8 }}
            >
              {card.type === 'quote' && (
                <div className="h-full rounded-2xl border-2 border-lime-400/40 bg-gradient-to-br from-lime-400/10 to-lime-400/5 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-center group hover:border-lime-400/70 transition-colors duration-300">
                  <motion.p
                    className="text-2xl md:text-4xl font-display font-bold text-white italic"
                    whileHover={{ scale: 1.05 }}
                  >
                    {card.content}
                  </motion.p>
                </div>
              )}

              {card.type === 'stat' && (
                <div className="h-full rounded-2xl border-2 border-pink-500/40 bg-gradient-to-br from-pink-500/10 to-pink-500/5 backdrop-blur-sm p-6 md:p-8 flex flex-col justify-center items-center text-center group hover:border-pink-500/70 hover:glow-pink transition-all duration-300">
                  {card.icon && (
                    <motion.div
                      className="mb-3"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <card.icon className="w-8 h-8 md:w-10 md:h-10 text-pink-500" />
                    </motion.div>
                  )}
                  <p className="text-2xl md:text-4xl font-display font-black text-pink-400 mb-2">
                    {card.value}
                  </p>
                  <p className="text-gray-300 text-sm">{card.label}</p>
                </div>
              )}

              {card.type === 'text' && (
                <div className="h-full rounded-2xl border-2 border-cyan-400/40 bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 backdrop-blur-sm p-6 md:p-8 group hover:border-cyan-400/70 transition-colors duration-300">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-cyan-400 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{card.content}</p>
                </div>
              )}

              {card.type === 'accent' && (
                <div
                  className={`h-full rounded-2xl bg-gradient-to-br ${card.color} border border-pink-500/20 backdrop-blur-sm group-hover:glow-pink transition-all duration-300 flex items-center justify-center`}
                >
                  <motion.div
                    className="text-4xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  >
                    ✨
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

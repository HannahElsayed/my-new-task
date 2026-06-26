'use client';

import { motion } from 'framer-motion';
import { easeOut } from 'framer-motion';
import { Sparkles, Palette, Zap, Heart, Rocket, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Card {
  id: number;
  type: 'hero' | 'stat' | 'text' | 'gradient' | 'icon';
  colSpan: string;
  rowSpan: string;
  icon?: React.ComponentType<{ className?: string }>;
  title?: string;
  content?: string;
  value?: string;
  label?: string;
  gradient: string;
  accentColor?: string;
}

const GradientCard = ({ gradient, children }: { gradient: string; children: React.ReactNode }) => (
  <div className={`h-full rounded-3xl bg-gradient-to-br ${gradient} backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden`}>
    {children}
  </div>
);

const GlassCard = ({ children, accentColor = 'from-pink-500/20 to-pink-500/5' }: { children: React.ReactNode; accentColor?: string }) => (
  <div className={`h-full rounded-3xl bg-gradient-to-br ${accentColor} backdrop-blur-lg border border-white/10 shadow-xl hover:border-white/20 transition-all duration-300`}>
    {children}
  </div>
);

const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="h-full p-6 md:p-8 flex flex-col justify-between">
    {children}
  </div>
);

export default function StyleGrid() {
  const cards: Card[] = [
    {
      id: 1,
      type: 'hero',
      colSpan: 'col-span-1 md:col-span-2',
      rowSpan: 'row-span-2',
      gradient: 'from-purple-600 via-pink-500 to-pink-600',
    },
    {
      id: 2,
      type: 'stat',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1',
      icon: Heart,
      label: 'Passion',
      value: '∞',
      gradient: 'from-transparent to-transparent',
      accentColor: 'from-rose-500/20 to-pink-500/10',
    },
    {
      id: 3,
      type: 'stat',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1',
      icon: Zap,
      label: 'Energy',
      value: 'Max',
      gradient: 'from-transparent to-transparent',
      accentColor: 'from-amber-500/20 to-orange-500/10',
    },
    {
      id: 4,
      type: 'text',
      colSpan: 'col-span-1 md:col-span-2',
      rowSpan: 'row-span-1',
      title: 'Design Philosophy',
      content: 'Bold colors, expressive characters, and interactive experiences that captivate.',
      gradient: 'from-transparent to-transparent',
      accentColor: 'from-cyan-500/20 to-blue-500/10',
    },
    {
      id: 5,
      type: 'icon',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1',
      icon: Sparkles,
      label: 'Creativity',
      gradient: 'from-transparent to-transparent',
      accentColor: 'from-violet-500/20 to-purple-500/10',
    },
    {
      id: 6,
      type: 'gradient',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1',
      gradient: 'from-indigo-600/40 to-purple-600/40',
    },
    {
      id: 7,
      type: 'text',
      colSpan: 'col-span-1 md:col-span-2',
      rowSpan: 'row-span-1',
      title: 'Innovation',
      content: 'Pushing boundaries with cutting-edge techniques and fresh perspectives daily.',
      gradient: 'from-transparent to-transparent',
      accentColor: 'from-green-500/20 to-emerald-500/10',
    },
    {
      id: 8,
      type: 'stat',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1',
      icon: Rocket,
      label: 'Impact',
      value: '100%',
      gradient: 'from-transparent to-transparent',
      accentColor: 'from-red-500/20 to-pink-500/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const renderCard = (card: Card) => {
    if (card.type === 'hero') {
      return (
        <GradientCard gradient={card.gradient}>
          <CardContent>
            <div className="space-y-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center"
              >
                <Palette className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2">Creative Studio</h3>
                <p className="text-white/80 text-sm md:text-base">Where imagination meets execution</p>
              </div>
            </div>
          </CardContent>
        </GradientCard>
      );
    }

    if (card.type === 'stat') {
      return (
        <GlassCard accentColor={card.accentColor}>
          <CardContent>
            <div className="flex flex-col items-center justify-center space-y-4">
              {card.icon && (
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <card.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </motion.div>
              )}
              <div className="text-center">
                <motion.p
                  className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1 }}
                >
                  {card.value}
                </motion.p>
                <p className="text-white/70 text-xs md:text-sm font-medium mt-2">{card.label}</p>
              </div>
            </div>
          </CardContent>
        </GlassCard>
      );
    }

    if (card.type === 'text') {
      return (
        <GlassCard accentColor={card.accentColor}>
          <CardContent>
            <div className="space-y-3">
              <h4 className="text-xl md:text-2xl font-bold text-white">{card.title}</h4>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">{card.content}</p>
            </div>
          </CardContent>
        </GlassCard>
      );
    }

    if (card.type === 'icon') {
      return (
        <GlassCard accentColor={card.accentColor}>
          <CardContent>
            <div className="flex flex-col items-center justify-center space-y-3">
              {card.icon && (
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <card.icon className="w-12 h-12 md:w-14 md:h-14 text-white" />
                </motion.div>
              )}
              <p className="text-white/80 text-sm font-medium text-center">{card.label}</p>
            </div>
          </CardContent>
        </GlassCard>
      );
    }

    if (card.type === 'gradient') {
      return (
        <div className={`h-full rounded-3xl bg-gradient-to-br ${card.gradient} backdrop-blur-md border border-white/10 shadow-xl overflow-hidden`}>
          <div className="h-full flex items-center justify-center p-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/10 flex items-center justify-center"
            >
              <Star className="w-10 h-10 md:w-12 md:h-12 text-white/60" />
            </motion.div>
          </div>
        </div>
      );
    }
  };

  return (
    <section id="style" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/40 backdrop-blur-sm">
                <p className="text-sm md:text-base font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  My Creative Style
                </p>
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
            >
              Creative Expression
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-white/60 max-w-2xl mx-auto"
            >
              Blending modern design principles with interactive experiences that captivate and engage
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 auto-rows-[280px] md:auto-rows-[240px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              className={`${card.colSpan} ${card.rowSpan} group cursor-pointer`}
              whileHover={{ y: -12 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                {renderCard(card)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

/**
 * AnimatedCounter Component
 * Animates number counting up to a target value
 */
function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

/**
 * Stats Component
 * Display animated counters for achievements
 */
export default function Stats() {
  const stats = [
    { value: 250, label: 'Clients Served', unit: '+' },
    { value: 500, label: 'Projects Completed', unit: '+' },
    { value: 50, label: 'Companies Partnered', unit: '+' },
    { value: 100, label: 'Awards Won', unit: '+' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-12">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-24">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-pink-500 font-display font-bold mb-3"
            >
              Experience
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-black"
            >
              By The Numbers
            </motion.h2>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Glowing background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                whileHover={{ scale: 1.1 }}
              />

              {/* Card */}
              <div className="rounded-2xl border-2 border-pink-500/30 bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-sm p-8 md:p-10 text-center group-hover:border-pink-500/60 transition-all duration-300">
                {/* Value with glow */}
                <motion.div
                  className="mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  viewport={{ once: true }}
                >
                  <p className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-pink-500 text-glow">
                    <AnimatedCounter value={stat.value} />
                    <span>{stat.unit}</span>
                  </p>
                </motion.div>

                {/* Label */}
                <p className="text-gray-300 text-base md:text-lg font-medium">
                  {stat.label}
                </p>

                {/* Animated underline */}
                <motion.div
                  className="h-1 bg-gradient-neon mt-4 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Sparkles, Palette, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

/**
 * Services Component
 * Display service cards with hover effects and glow
 */
export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Character Illustration',
      description:
        'Custom character designs with detailed expressions, clothing, and personality that bring stories to life.',
      icon: Palette,
      gradient: 'from-pink-500/20 to-pink-500/5',
      borderColor: 'border-pink-500/50',
    },
    {
      id: 2,
      title: 'Brand Art',
      description:
        'Professional branding illustrations that establish visual identity and create memorable brand presence.',
      icon: Star,
      gradient: 'from-purple-500/20 to-purple-500/5',
      borderColor: 'border-purple-500/50',
    },
    {
      id: 3,
      title: 'Anime Commission',
      description:
        'Personalized anime-style artwork tailored to your vision with high-quality details and vibrant colors.',
      icon: Sparkles,
      gradient: 'from-pink-400/20 to-pink-400/5',
      borderColor: 'border-pink-400/50',
    },
    {
      id: 4,
      title: 'Concept Art',
      description:
        'Innovative concept designs for games, films, and media projects with stunning visual direction.',
      icon: Palette,
      gradient: 'from-purple-400/20 to-purple-400/5',
      borderColor: 'border-purple-400/50',
    },
    {
      id: 5,
      title: 'Digital Painting',
      description:
        'High-resolution digital paintings with vibrant colors and professional-grade artistic techniques.',
      icon: Star,
      gradient: 'from-pink-500/20 to-pink-500/5',
      borderColor: 'border-pink-500/50',
    },
    {
      id: 6,
      title: 'Character Animation',
      description:
        'Animated character designs ready for motion graphics and interactive media experiences.',
      icon: Sparkles,
      gradient: 'from-purple-500/20 to-purple-500/5',
      borderColor: 'border-purple-500/50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="services" className="relative py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40 -z-10">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-28 space-y-10 flex flex-col items-center justify-center">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-pink-500 font-display font-bold text-sm uppercase"
            >
              Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-black max-w-4xl"
            >
              What I Create
            </motion.h2>
          </div>
        </ScrollReveal>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10" />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`relative h-full rounded-2xl border-2 ${service.borderColor} ${service.gradient} bg-gradient-to-br backdrop-blur-sm p-10 md:p-12 flex flex-col gap-8 transition-all duration-300`}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center group-hover:glow-lime transition-all"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Icon className="w-7 h-7 text-pink-500" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-3 group-hover:text-pink-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* CTA arrow */}
                  <motion.div
                    className="mt-6 flex items-center text-pink-500 font-medium text-sm"
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <motion.span
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

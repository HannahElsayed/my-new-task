'use client';

import { motion } from 'framer-motion';
import { Star, Share2, Twitter, Palette } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import ScrollReveal from './ScrollReveal';

/**
 * Hero Component
 * Main introduction section with anime illustration placeholder
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-pattern -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6 md:space-y-8">
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-2"
              >
                <Star className="w-5 h-5 text-lime-400 fill-lime-400" />
                <span className="text-lime-400 font-display font-bold">
                  Welcome to My Art Studio
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black leading-tight"
              >
                Bold Anime <br />
                <span className="gradient-lime">Illustrations</span>
                <br />
                Reimagined
              </motion.h1>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base sm:text-lg text-gray-300 max-w-md leading-relaxed"
              >
                Creating stunning character art, brand illustrations, and custom anime
                commissions. Each piece tells a story with vibrant colors and expressive
                characters that capture imagination.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <AnimatedButton text="Start a Project" size="lg" />
                <AnimatedButton
                  text="View Portfolio"
                  variant="ghost"
                  size="lg"
                />
              </motion.div>

              {/* Social icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex gap-4 pt-4"
              >
                <a
                  href="#"
                  className="p-3 rounded-full border border-lime-400/30 text-lime-400 hover:bg-lime-400/10 hover:glow-lime transition-all"
                >
                  <Share2 size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full border border-lime-400/30 text-lime-400 hover:bg-lime-400/10 hover:glow-lime transition-all"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full border border-lime-400/30 text-lime-400 hover:bg-lime-400/10 hover:glow-lime transition-all"
                >
                  <Palette size={20} />
                </a>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right - Image placeholder */}
          <ScrollReveal delay={0.3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-neon rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

              {/* Main image container */}
              <div className="relative bg-gray-900 rounded-3xl border-2 border-lime-400/30 overflow-hidden shadow-2xl glow-lime">
                {/* Placeholder anime illustration */}
                <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  {/* Decorative shapes */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-lime-400/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl" />

                  {/* Image placeholder text */}
                  <div className="text-center z-10">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-6xl mb-4"
                    >
                      ✨
                    </motion.div>
                    <p className="text-2xl font-display text-lime-400">
                      Character Art
                    </p>
                    <p className="text-gray-400 mt-2">
                      Your anime illustration here
                    </p>
                  </div>

                  {/* Floating stars animation */}
                  <motion.div
                    className="absolute w-2 h-2 bg-lime-400 rounded-full"
                    style={{ top: '20%', right: '15%' }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute w-1.5 h-1.5 bg-pink-500 rounded-full"
                    style={{ bottom: '25%', left: '10%' }}
                    animate={{
                      y: [0, 20, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
              </div>

              {/* Floating element */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 border-2 border-pink-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-lime-400 text-center">
            <p className="text-sm font-medium mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-lime-400/50 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-lime-400 rounded-full mt-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

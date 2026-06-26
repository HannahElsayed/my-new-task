'use client';

import { motion } from 'framer-motion';
import { Star, Heart, Mail, Palette } from 'lucide-react';
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
      className="relative min-h-screen py-20 px-6 sm:px-10 lg:px-16 flex items-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-pattern -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
                <Star className="w-5 h-5 text-pink-500 fill-pink-500" />
                <span className="text-pink-500 font-display font-bold">
                  Welcome to My Portfolio
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-tight text-white"
              >
                H A N N A H
                <br />
                <span className="text-pink-500">Frontend Developer</span>
                <br />
                Crafting modern, responsive UI
              </motion.h1>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base sm:text-lg text-gray-300 max-w-md leading-relaxed"
              >
                I am a frontend developer passionate about building modern, responsive interfaces and delightful user experiences.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 pt-6"
              >
                <a href="#projects" className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all">View Projects</a>
                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent border border-purple-600 text-white font-semibold hover:bg-white/5 transition-colors">Contact Me</a>
              </motion.div>

              {/* Social icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex gap-5 pt-6"
              >
                <a
                  href="#"
                  className="p-3 rounded-full border border-pink-500/30 text-pink-500 hover:bg-pink-500/10 hover:glow-lime transition-all"
                >
                  <Heart size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full border border-purple-500/30 text-purple-500 hover:bg-purple-500/10 hover:glow-pink transition-all"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full border border-pink-500/30 text-pink-500 hover:bg-pink-500/10 hover:glow-lime transition-all"
                >
                  <Palette size={20} />
                </a>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right - Profile image */}
          <ScrollReveal delay={0.3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-3 border-pink-500 bg-gradient-to-br from-gray-900 to-gray-800">
                <img
                  src="/profile.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-pink-500 text-center">
            <p className="text-sm font-medium mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-pink-500/50 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-pink-500 rounded-full mt-2"
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

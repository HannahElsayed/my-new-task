'use client';

import { motion } from 'framer-motion';
import { Code, LayoutGrid, Smartphone } from 'lucide-react';

const skills = [
  { name: 'HTML', icon: Code },
  { name: 'CSS', icon: Code },
  { name: 'JavaScript', icon: Code },
  { name: 'React', icon: LayoutGrid },
  { name: 'Next.js', icon: LayoutGrid },
  { name: 'Tailwind CSS', icon: LayoutGrid },
  { name: 'Figma', icon: Smartphone },
  { name: 'Adobe XD', icon: Smartphone },
  { name: 'UI/UX', icon: LayoutGrid },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-24 bg-black px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-6 md:space-y-8 md:space-y-12">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            Skills
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="text-gray-300 max-w-3xl leading-relaxed text-sm sm:text-base md:text-lg md:text-xl mx-auto">
            A concise set of core frontend skills I use daily.
          </motion.p>
        </div>

        <motion.div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
          {skills.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.name} whileHover={{ y: -12, scale: 1.05 }} transition={{ duration: 0.3, ease: 'easeOut' }} className="flex flex-col items-center justify-center gap-3 sm:gap-4 rounded-2xl bg-gradient-to-br from-purple-500/15 to-pink-500/8 border border-purple-500/30 p-4 sm:p-5 md:p-6 hover:border-purple-500/70 hover:bg-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 text-center group">
                <div className="p-2 sm:p-3 rounded-2xl bg-gradient-to-br from-purple-600/80 to-pink-500/80 text-white group-hover:from-purple-500 group-hover:to-pink-400 transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-white">{s.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

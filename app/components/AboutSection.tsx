'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-28 bg-black px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center gap-8 md:gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-gray-300 max-w-2xl leading-relaxed text-sm sm:text-base md:text-lg"
          >
            I am a frontend developer passionate about creating modern responsive UI and interactive user experiences.
            I blend thoughtful design with performant engineering to build products users love.
          </motion.p>

          <motion.div
            className="w-full flex flex-col items-center gap-6 md:gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Core Skills</h3>
            <div className="w-full flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Figma', 'Adobe XD', 'UI/UX', 'Java', 'JavaFX', 'SQL', 'Oracle', 'Data Structures', 'OOP'].map((skill) => (
                <span
                  key={skill}
                  className="text-xs sm:text-sm md:text-base font-medium text-gray-100 bg-gradient-to-br from-purple-500/20 to-pink-500/10 px-3 sm:px-4 py-2 rounded-2xl border border-purple-500/30 hover:border-purple-500/70 hover:bg-purple-500/25 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

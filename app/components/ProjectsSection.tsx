'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const listVariant = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.16,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

const skillTags = [
  'HTML',
  'CSS',
  'React',
  'Figma',
  'Adobe XD',
  'UI/UX',
  'JavaFX',
  'Database',
  'SQL',
  'Oracle',
  'Data Structures',
  'Java OOP',
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden bg-black py-18 px-2 sm:px-2 lg:px-6 mx-5 ">
      <div className="relative max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-8">
          <span className="inline-flex rounded-full border border-purple-500/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-purple-200/80 backdrop-blur-sm">
            Projects Showcase
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="max-w-2xl text-lg md:text-xl leading-relaxed text-gray-300 mx-auto"
          >
            A collection of projects I&apos;ve worked on from frontend apps to UI/UX designs.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={listVariant}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariant}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-18 md:p-12 lg:p-16 shadow-2xl backdrop-blur-xl">
          <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-purple-500/15 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-fuchsia-500/15 blur-3xl" />

          <div className="relative z-10 grid gap-12 md:grid-cols-2 items-center text-center md:text-left">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">Core Skills Behind Every Project</h3>
              <p className="text-base md:text-lg leading-7 text-gray-300">
                Each project blends polished UI, modern animations, and clean architecture with frontend craftsmanship and data-driven experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
              {skillTags.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-purple-400/20 bg-white/5 px-5 py-3 text-sm font-medium text-purple-100 transition duration-300 hover:border-purple-300/40 hover:bg-purple-500/10 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

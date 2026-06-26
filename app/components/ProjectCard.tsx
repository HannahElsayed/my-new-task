'use client';

import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react';
import type { Project } from '../data/projects';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group flex flex-col w-full h-200 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
    >
     <div className="relative overflow-hidden w-full h-60 ">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="h-full w-full  object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-8 p-4 md:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs uppercase tracking-widest text-purple-200/80 font-semibold">{project.category}</span>
          <span className="text-xs font-medium text-gray-400">{project.year}</span>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">{project.title}</h3>
          <p className="text-base leading-relaxed text-gray-300">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-2xl border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-purple-100 transition-all duration-300 hover:border-purple-300/70 hover:bg-purple-500/20 hover:text-white hover:shadow-lg hover:shadow-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
          <a
            href={project.detailsUrl}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 px-3 py-1 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            View Details
            <ArrowRight className="h-6 w-6" />
          </a>

          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="inline-flex h-12 w-11 items-center justify-center rounded-2xl border border-purple-500/40 bg-white/5 text-purple-200 shadow-md hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-500/70 hover:scale-110 active:scale-95 backdrop-blur-sm"
            >
              <GitBranch className="h-5 w-5" />
            </a>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Live demo for ${project.title}`}
              className="inline-flex h-12 w-11 items-center justify-center rounded-2xl border border-cyan-500/40 bg-white/5 text-cyan-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-500/70 hover:scale-110 active:scale-95 backdrop-blur-sm"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function AnimatedButton({
  text,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
}: AnimatedButtonProps) {

  const base = 'rounded-2xl font-semibold transition-all duration-300';

  const variants = {
    primary:
      'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 text-white shadow-md hover:shadow-lg',
    secondary:
      'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md hover:shadow-lg',
    ghost:
      'border border-white/30 text-white hover:bg-white/10 hover:border-white/50',
  };

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  );
}



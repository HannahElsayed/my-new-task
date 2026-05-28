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

/**
 * AnimatedButton Component
 * Reusable button with hover and tap animations
 */
export default function AnimatedButton({
  text,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
}: AnimatedButtonProps) {
  const baseClasses = 'font-display font-bold rounded-full transition-all duration-300';

  const variantClasses = {
    primary:
      'bg-lime-400 text-black hover:glow-lime hover:scale-105 active:scale-95',
    secondary:
      'bg-pink-500 text-white hover:glow-pink hover:scale-105 active:scale-95',
    ghost: 'border-2 border-lime-400 text-lime-400 hover:bg-lime-400/10 hover:scale-105 active:scale-95',
  };

  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {text}
    </motion.button>
  );
}

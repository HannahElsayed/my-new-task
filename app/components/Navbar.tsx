'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism py-2' : 'bg-black/30 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavClick('hero')}
          >
            H A N N A H
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="text-gray-200 hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 hover:bg-clip-text transition-all font-semibold text-sm uppercase tracking-wide"
              >
                {item.label}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              className="px-2 lg:px-6 py-3 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 text-white rounded-2xl font-bold shadow-lg shadow-purple-500/40 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Let's Talk
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-pink-400 hover:text-pink-300 transition-all p-2 rounded-xl hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={
            isOpen
              ? { height: 'auto', opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          className="overflow-hidden md:hidden"
        >
          <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-purple-500/30 px-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-gray-200 hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 hover:bg-clip-text transition-all py-3 font-semibold uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}

            <button className="px-6 py-3 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full mt-4 uppercase tracking-wide">
              Let's Talk
            </button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}

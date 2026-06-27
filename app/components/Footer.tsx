'use client';

import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

/**
 * Footer Component
 * Clean footer with social links and copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/hanna-elsaied/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400 hover:border-blue-400',
    },
    {
      icon: FaGithub,
      href: 'https://github.com/HannahElsayed',
      label: 'GitHub',
      color: 'hover:text-white hover:border-white',
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/ehana0128/',
      label: 'Instagram',
      color: 'hover:text-pink-400 hover:border-pink-400',
    },
    {
      icon: MdEmail,
      href: 'mailto:ehana0128@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400 hover:border-red-400',
    },
  ];

  return (
    <footer className="relative border-t border-purple-500/20 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20 md:py-24">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-14 text-center md:text-left">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 md:col-span-1"
          >
            <h3 className="text-xl sm:text-2xl font-display font-bold text-pink-500 mb-3">
              H A N N A H
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Building clean, modern, and responsive web applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 sm:mb-5 text-white text-sm md:text-base">
              Quick Links
            </h4>

            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Portfolio', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="hover:text-pink-500 transition-colors duration-200 inline-block"
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 sm:mb-5 text-white text-sm md:text-base">
              Follow
            </h4>

            <div className="flex justify-center md:justify-start gap-3 sm:gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') && !item.href.startsWith('mailto:') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') && !item.href.startsWith('mailto:') ? 'noopener noreferrer' : ''}
                    aria-label={item.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 sm:p-3 rounded-full border border-pink-500/30 text-pink-500 hover:bg-pink-500/10 transition-all duration-300 ${item.color}`}
                  >
                    <Icon size={18} className="sm:hidden" />
                    <Icon size={20} className="hidden sm:block" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-pink-500/10 pt-8 sm:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm gap-4 sm:gap-6 text-center md:text-left">
            
            <p>
              © {currentYear} H A N N A H. All rights reserved.
            </p>

            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-pink-500 transition-colors duration-200">Privacy</a>
              <a href="#" className="hover:text-pink-500 transition-colors duration-200">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

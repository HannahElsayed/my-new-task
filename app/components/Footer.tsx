'use client';

import { motion } from 'framer-motion';
import { Share2, Linkedin, Twitter } from 'lucide-react';

/**
 * Footer Component
 * Clean footer with social links and copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-lime-400/20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-lime-400 mb-2">
              AI Studio
            </h3>
            <p className="text-gray-400 text-sm">
              Creating stunning anime illustrations and brand art
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#hero" className="hover:text-lime-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-lime-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#style" className="hover:text-lime-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-lime-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-white">Follow</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full border border-lime-400/30 text-lime-400 hover:bg-lime-400/10 hover:glow-lime transition-all"
              >
                <Share2 size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-lime-400/30 text-lime-400 hover:bg-lime-400/10 hover:glow-lime transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-lime-400/30 text-lime-400 hover:bg-lime-400/10 hover:glow-lime transition-all"
              >
                <Twitter size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-lime-400/10 pt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              © {currentYear} AI Studio. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-lime-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-lime-400 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-lime-400 transition-colors">
                Credits
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

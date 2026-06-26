'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, Palette } from 'lucide-react';

/**
 * Footer Component
 * Clean footer with social links and copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-purple-500/20 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14 text-center md:text-left">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-pink-500 mb-3">
              AI Studio
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
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
            <h4 className="font-bold mb-5 text-white">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-pink-500 transition-colors"
                  >
                    {item}
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
            <h4 className="font-bold mb-5 text-white">
              Follow
            </h4>

            <div className="flex justify-center md:justify-start gap-5">
              {[
                { icon: Heart },
                { icon: Mail },
                { icon: Palette }
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href="#"
                    className="p-3 rounded-full border border-pink-500/30 text-pink-500 hover:bg-pink-500/10 hover:scale-110 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-pink-500/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-6 text-center">
            
            <p>
              © {currentYear} AI Studio. All rights reserved.
            </p>

            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Credits'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-pink-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

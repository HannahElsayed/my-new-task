'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import ScrollReveal from './ScrollReveal';

/**
 * Contact Component
 * Large modern contact card with glow effects
 */
export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'studio@animeart.com',
      href: 'mailto:studio@animeart.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tokyo, Japan',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-pattern opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-gradient-to-b from-lime-400/5 via-transparent to-pink-500/5 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lime-400 font-display font-bold mb-3"
            >
              Get In Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-4"
            >
              Let's Create Something Amazing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              Ready to bring your vision to life? Let's collaborate and create stunning anime art together.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Contact Card */}
        <ScrollReveal delay={0.2}>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-20 transition-opacity blur-2xl rounded-3xl -z-10 animate-pulse" />

            {/* Main card */}
            <div className="rounded-3xl border-2 border-lime-400/40 bg-gradient-to-br from-gray-900 to-gray-900/80 backdrop-blur-sm overflow-hidden shadow-2xl glow-lime">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Left - Content */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                      Ready to Create?
                    </h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                      I'm always excited to work on new projects. Whether you need character illustrations,
                      brand art, or custom commissions, let's make magic happen together.
                    </p>
                  </div>

                  {/* Contact info */}
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <motion.a
                          key={index}
                          href={info.href}
                          className="flex items-center gap-3 text-gray-300 hover:text-lime-400 transition-colors group"
                          whileHover={{ x: 5 }}
                        >
                          <div className="p-2 rounded-full bg-lime-400/20 group-hover:bg-lime-400/30 group-hover:glow-lime transition-all">
                            <Icon size={20} className="text-lime-400" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">{info.label}</p>
                            <p className="font-medium">{info.value}</p>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Right - Image placeholder */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 flex items-center justify-center overflow-hidden">
                  {/* Decorative shapes */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-lime-400/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl" />
                  </div>

                  {/* Contact illustration placeholder */}
                  <div className="relative z-10 text-center">
                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-6xl mb-4"
                    >
                      💌
                    </motion.div>
                    <p className="text-lg font-display font-bold text-lime-400">
                      Get in Touch
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      Response within 24 hours
                    </p>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-10 right-10 w-3 h-3 bg-lime-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-10 left-10 w-2 h-2 bg-pink-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal delay={0.3}>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-6">
              Or fill out the form below
            </p>
            <motion.form
              className="max-w-2xl mx-auto space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-6 py-3 rounded-full bg-gray-900/50 border border-lime-400/20 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-6 py-3 rounded-full bg-gray-900/50 border border-lime-400/20 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-6 py-3 rounded-2xl bg-gray-900/50 border border-lime-400/20 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition-colors resize-none"
              />
              <motion.button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-lime-400 text-black rounded-full font-bold hover:glow-lime hover:scale-105 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

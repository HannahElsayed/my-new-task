'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ehana0128@gmail.com',
      href: 'mailto:ehana0128@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '01212464288',
      href: 'tel:+201212464288',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Egypt, Alexandria',
      href: 'https://www.google.com/maps/place/Alexandria,+Egypt',
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-10 px-6 sm:px-10 lg:px-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_top_right,#ec489920,transparent_30%),radial-gradient(circle_at_bottom_left,#a855f720,transparent_30%)]" />

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <ScrollReveal>
          <div className="text-center mb-20 space-y-6">
            <motion.p
              className="text-pink-500 font-semibold uppercase tracking-widest text-sm"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Contact Me
            </motion.p>

            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let&apos;s Build Something Amazing
            </motion.h2>

            <motion.p
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let’s create modern, fast and responsive web experiences together.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* MAIN CARD */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

            {/* LEFT SIDE */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col gap-10">

              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Ready to Create?
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  I’m always excited to work on new projects. Let’s build something users love.
                </p>
              </div>

              {/* CONTACT INFO */}
              <div className="flex flex-col gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;

                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all"
                    >
                      <div className="w-18 h-18n flex items-center justify-center rounded-2xl bg-pink-500/20 border border-pink-500/30">
                        <Icon className="text-pink-400" size={22} />
                      </div>

                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">
                          {info.label}
                        </p>
                        <p className="text-white font-semibold">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="p-8 md:p-12 lg:p-16 bg-black flex items-center justify-center relative">

              <div className="text-center space-y-6">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-6xl"
                >
                  💌
                </motion.div>

                <h4 className="text-2xl md:text-3xl font-bold text-white">
                  Get In Touch
                </h4>

                <p className="text-gray-400">
                  I usually respond within 24 hours
                </p>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* FORM */}
        <ScrollReveal>
          <form
            className="mt-24 max-w-3xl mx-auto flex flex-col gap-10"
            onSubmit={(e) => e.preventDefault()}
          >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-6 rounded-2xl bg-zinc-900 border border-white/10 text-white placeholder:text-gray-500 focus:border-pink-500 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-6 rounded-2xl bg-zinc-900 border border-white/10 text-white placeholder:text-gray-500 focus:border-pink-500 outline-none"
              />

            </div>

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full px-6 py-6 rounded-2xl bg-zinc-900 border border-white/10 text-white placeholder:text-gray-500 focus:border-pink-500 outline-none resize-none"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full h-auto px-14 py-5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-3"
            >
              <Send size={18} />
              Send Message
            </motion.button>

          </form>
        </ScrollReveal>

      </div>
    </section>
  );
}
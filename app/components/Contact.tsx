
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import emailjs from '@emailjs/browser';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import {
  Check,
  AlertCircle,
  Send,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// Initialize EmailJS (replace with your actual public key)

// Initialize EmailJS (replace with your actual public key)
// Get your credentials from https://dashboard.emailjs.com/
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormState {
  data: FormData;
  isSubmitting: boolean;
  message: string;
  messageType: 'success' | 'error' | '';
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>({
    data: { name: '', email: '', message: '' },
    isSubmitting: false,
    message: '',
    messageType: '',
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      data: { ...prev.data, [name]: value },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formState.data;

    // Validation
    if (!name.trim()) {
      setFormState((prev) => ({
        ...prev,
        message: 'Please enter your name',
        messageType: 'error',
      }));
      return;
    }

    if (!validateEmail(email)) {
      setFormState((prev) => ({
        ...prev,
        message: 'Please enter a valid email',
        messageType: 'error',
      }));
      return;
    }

    if (!message.trim()) {
      setFormState((prev) => ({
        ...prev,
        message: 'Please enter your message',
        messageType: 'error',
      }));
      return;
    }

    setFormState((prev) => ({ ...prev, isSubmitting: true, message: '', messageType: '' }));

    try {
      // If EmailJS is configured, send email
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: name,
            from_email: email,
            message: message,
            to_email: 'ehana0128@gmail.com',
          }
        );
      } else {
        // Fallback: Send via FormSubmit
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) throw new Error('Form submission failed');
      }

      setFormState({
        data: { name: '', email: '', message: '' },
        isSubmitting: false,
        message: 'Message sent successfully! I will reply within 24 hours.',
        messageType: 'success',
      });

      setTimeout(() => {
        setFormState((prev) => ({ ...prev, message: '', messageType: '' }));
      }, 5000);
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        message: 'Failed to send message. Please try again or contact me directly via email.',
        messageType: 'error',
      }));
    }
  };

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
      color: 'hover:text-white',
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
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      aria-label={`${info.label}: ${info.value}`}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-3 sm:gap-5 p-3 sm:p-4 rounded-2xl hover:bg-white/5 transition-all group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-pink-500/20 border border-pink-500/30 group-hover:bg-pink-500/30 transition-colors">
                        <Icon className="text-pink-400" size={18} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-gray-400 uppercase tracking-widest">
                          {info.label}
                        </p>
                        <p className="text-white font-semibold text-xs sm:text-sm break-all">
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
            className="mt-16 sm:mt-20 md:mt-24 max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8"
            onSubmit={handleSubmit}
          >
            {/* Message Alert */}
            <AnimatePresence>
              {formState.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex items-center gap-3 p-4 rounded-2xl ${
                    formState.messageType === 'success'
                      ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                      : 'bg-red-500/20 border border-red-500/50 text-red-300'
                  }`}
                >
                  {formState.messageType === 'success' ? (
                    <Check size={20} className="flex-shrink-0" />
                  ) : (
                    <AlertCircle size={20} className="flex-shrink-0" />
                  )}
                  <span className="text-xs sm:text-sm">{formState.message}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Name and Email Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formState.data.name}
                  onChange={handleChange}
                  disabled={formState.isSubmitting}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-zinc-900 border border-white/10 text-white placeholder:text-gray-500 focus:border-pink-500 focus:outline-none disabled:opacity-50 transition-colors"
                  aria-label="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formState.data.email}
                  onChange={handleChange}
                  disabled={formState.isSubmitting}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-zinc-900 border border-white/10 text-white placeholder:text-gray-500 focus:border-pink-500 focus:outline-none disabled:opacity-50 transition-colors"
                  aria-label="Your email"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm text-gray-400 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Your Message"
                value={formState.data.message}
                onChange={handleChange}
                disabled={formState.isSubmitting}
                required
                className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-zinc-900 border border-white/10 text-white placeholder:text-gray-500 focus:border-pink-500 focus:outline-none disabled:opacity-50 resize-none transition-colors"
                aria-label="Your message"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={formState.isSubmitting}
              whileHover={{ scale: formState.isSubmitting ? 1 : 1.03 }}
              whileTap={{ scale: formState.isSubmitting ? 1 : 0.97 }}
              className="w-full h-auto px-6 sm:px-14 py-3 sm:py-5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 transition-opacity"
            >
              {formState.isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  <span className="text-sm sm:text-base">Sending...</span>
                </>
              ) : (
                <>
                  <Send size={18} className="flex-shrink-0" />
                  <span className="text-sm sm:text-base">Send Message</span>
                </>
              )}
            </motion.button>

            <p className="text-xs text-gray-400 text-center">
              We respect your privacy. Your message will be kept confidential.
            </p>

          </form>
        </ScrollReveal>

      </div>
    </section>
  );
}
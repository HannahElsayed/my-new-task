'use client';

import Navbar from './components/Navbar';
import FloatingShapes from './components/FloatingShapes';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import StyleGrid from './components/StyleGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Home Page
 * Main portfolio page with all sections
 */
export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black">
      {/* Floating decorative shapes */}
      <FloatingShapes />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Stats Section */}
      <Stats />

      {/* Style/Bento Grid Section */}
      <StyleGrid />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
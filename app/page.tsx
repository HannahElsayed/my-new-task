'use client';

import Navbar from './components/Navbar';
import FloatingShapes from './components/FloatingShapes';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Home Page
 * Main portfolio page with all sections
 */
export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-black">
      {/* Floating decorative shapes */}
      <FloatingShapes />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Services } from './components/sections/Services';
import { Certifications } from './components/sections/Certifications';
import { BeyondCode } from './components/sections/BeyondCode';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEDED] flex flex-col font-sans selection:bg-[#FB3640] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Services />
        <Certifications />
        <BeyondCode />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

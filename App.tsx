import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EduVerse from './components/EduVerse';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DevOpsLoader from './components/DevOpsLoader';
import Snowfall from './components/Snowfall';
import Silk from './components/Silk';
import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans min-h-screen relative overflow-x-hidden" style={{ color: 'var(--text-color)' }}>
      {/* Silk Animated Background with Subtle Red Gradient Override */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Silk
          speed={5}
          scale={1.2}
          color="#373B3E"
          noiseIntensity={1.5}
          rotation={0}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top right, rgba(217,4,41,0.15) 0%, transparent 50%)', mixBlendMode: 'screen' }} />
      </div>

      {/* Subtle Snowfall Overlay */}
      <Snowfall />

      {/* DevOps Loader (shows briefly on initial load) */}
      {isLoading && <DevOpsLoader />}

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <EduVerse />
        <Experience />
        <Certifications />
        <Courses />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
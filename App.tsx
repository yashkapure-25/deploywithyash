import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="font-sans min-h-screen relative overflow-x-hidden" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      {/* Global Liquid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Blob 1 - Purple/Blue */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob"></div>
        
        {/* Blob 2 - Cyan/Blue */}
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-cyan-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
        
        {/* Blob 3 - Pink/Orange */}
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-pink-600 rounded-full mix-blend-screen filter blur-[120px] opacity-15 animate-blob animation-delay-4000"></div>
        
        {/* Blob 4 - Blue Accent (Mobile) */}
        <div className="absolute top-[40%] left-[10%] w-[300px] h-[300px] bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-blob animation-delay-1000 md:hidden"></div>
      </div>

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
    </div>
  );
};

export default App;
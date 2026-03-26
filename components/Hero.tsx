import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
import { HERO_ROLES } from '../constants';

/**
 * Hero Section
 * Semantic h1 tag with Yash Kapure's name for SEO.
 * Typewriter effect on the role subtitle.
 * WCAG 2.1 AA compliant: descriptive aria-labels, keyboard accessible buttons.
 */
const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const handleTypewriter = useCallback(() => {
    const currentRole = HERO_ROLES[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
      } else {
        setDisplayText(
          currentRole.substring(0, displayText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    return handleTypewriter();
  }, [handleTypewriter]);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Yash-Pramod-Kapure-Resume.pdf';
    link.download = 'Yash-Pramod-Kapure-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      aria-label="Hero introduction section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-20 md:pb-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* ── Left Content ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="text-lg md:text-xl text-gray-400 block mb-2 font-medium">
            Hello, I'm
          </span>

          {/* SEO-critical: name as h1 for page identity */}
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-signature font-bold mb-2 text-gradient-rainbow leading-tight pb-4 pt-2 -ml-1 md:-ml-2 tracking-wide"
          >
            Yash Kapure
          </h1>

          {/* Role as h2 — secondary heading */}
          <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aws-blue to-aws-cyan mb-3">
            AWS &amp; DevOps Engineer
          </h2>

          {/* Typewriter effect on role subtitle */}
          <div
            className="h-10 md:h-12 mb-6 flex items-center"
            aria-live="polite"
            aria-label={`Currently: ${displayText}`}
            role="status"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#EDF2F4]">
              {displayText}
              <span className="animate-pulse inline-block w-1 h-6 md:h-8 bg-[#D90429] ml-1 align-middle" aria-hidden="true" />
            </span>
          </div>

          <p className="text-[#8D99AE] max-w-lg text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-sans">
            Specializing in cloud infrastructure, automation, CI/CD pipelines,
            Infrastructure as Code, and container orchestration. Building scalable,
            secure solutions on AWS.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <button
              id="hero-download-resume"
              onClick={handleResumeDownload}
              aria-label="Download Yash Kapure's resume as PDF"
              className="btn-gradient text-white font-bold py-3 px-8 rounded-full transition-transform hover:-translate-y-1 focus-visible:outline-2 flex items-center justify-center text-sm md:text-base"
            >
              Download Resume <Download size={20} className="ml-2" aria-hidden="true" />
            </button>

            <a
              id="hero-contact-link"
              href="#contact"
              aria-label="Navigate to the contact section"
              className="px-8 py-3 bg-transparent border-2 border-[#D90429] text-[#EDF2F4] font-bold rounded-full hover:bg-[#D90429] hover:-translate-y-1 transition-all duration-300 focus-visible:outline-2 flex items-center justify-center text-sm md:text-base"
            >
              Contact Me <ChevronRight size={18} className="ml-2" aria-hidden="true" />
            </a>
          </div>

          {/* Quick stats badges */}
          <div className="flex flex-wrap gap-3 mt-8" aria-label="Quick stats and highlights">
            {[
              { label: '15+ AWS Badges',    color: 'text-[#D90429]' },
              { label: 'Cloud Practitioner', color: 'text-[#8D99AE]' },
              { label: 'DevOps Intern',      color: 'text-[#EDF2F4]' },
            ].map((stat) => (
              <span
                key={stat.label}
                className={`px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium ${stat.color}`}
              >
                {stat.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Right Illustration ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
            {/* Ignition Red glow orb */}
            <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-[#D90429] to-[#8D99AE] rounded-full opacity-20 blur-3xl animate-pulse" />

            {/* Code card */}
            <div className="glass-card p-8 rounded-2xl relative z-10 w-[90%] lg:w-[80%] transform rotate-2 hover:rotate-0 transition-all duration-500">
              {/* macOS window chrome */}
              <div className="flex space-x-2 mb-4" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Code snippet */}
              <pre className="space-y-2 font-mono text-xs sm:text-sm text-gray-300 whitespace-pre">
                <div className="flex flex-wrap">
                  <span className="text-accent-pink mr-2">const</span>
                  <span className="text-accent-blue mr-2">cloudEngineer</span>
                  <span className="text-white mr-2">=</span>
                  <span className="text-accent-orange">{"{"}</span>
                </div>
                <div className="pl-4">name: <span className="text-accent-green">"Yash Kapure"</span>,</div>
                <div className="pl-4">skills: [<span className="text-accent-green">"AWS"</span>, <span className="text-accent-green">"K8s"</span>, <span className="text-accent-green">"Terraform"</span>],</div>
                <div className="pl-4">certified: <span className="text-accent-purple">true</span>,</div>
                <div className="pl-4">hardWorker: <span className="text-accent-purple">true</span>,</div>
                <div className="pl-4">problemSolver: <span className="text-accent-purple">true</span></div>
                <div><span className="text-accent-orange">{"}"}</span>;</div>
              </pre>
            </div>

            {/* Floating badges */}
            <div
              className="absolute top-10 right-10 glass-card p-3 md:p-4 rounded-xl animate-float"
              style={{ animationDelay: '1s' }}
              aria-hidden="true"
            >
              <span className="text-xl md:text-2xl" role="img" aria-label="Cloud">☁️</span>
            </div>
            <div
              className="absolute bottom-20 left-10 glass-card p-3 md:p-4 rounded-xl animate-float"
              style={{ animationDelay: '2.5s' }}
              aria-hidden="true"
            >
              <span className="text-xl md:text-2xl" role="img" aria-label="Rocket">🚀</span>
            </div>
            <div
              className="absolute bottom-36 right-0 glass-card p-3 md:p-4 rounded-xl animate-float"
              style={{ animationDelay: '3.5s' }}
              aria-hidden="true"
            >
              <span className="text-xl md:text-2xl" role="img" aria-label="Server">🖥️</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
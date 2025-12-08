import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
import { HERO_ROLES } from '../constants';

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Yash-Pramod-Kapure-Resume.pdf';
    link.download = 'Yash-Pramod-Kapure-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="text-lg md:text-xl text-gray-400 block mb-2 font-medium">Hello, I'm</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 md:mb-6 text-gradient-rainbow leading-tight pb-2">
            AWS & DevOps Engineer
          </h1>
          
          <div className="h-10 md:h-12 mb-6 flex items-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aws-blue to-aws-cyan">
              {displayText}
              <span className="animate-pulse inline-block w-1 h-6 md:h-8 bg-aws-cyan ml-1 align-middle"></span>
            </span>
          </div>

          <p className="text-gray-300 max-w-lg text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-sans">
            Specializing in cloud infrastructure, automation, CI/CD pipelines, Infrastructure as Code, 
            and container orchestration. Building scalable solutions on AWS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <button 
              onClick={handleResumeDownload}
              className="btn-gradient text-white font-bold py-3 px-8 rounded-full transition-transform hover:-translate-y-1 flex items-center justify-center text-sm md:text-base"
            >
              Download Resume <Download size={20} className="ml-2" />
            </button>
            <a 
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-accent-blue text-white font-bold rounded-full hover:bg-accent-blue hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-sm md:text-base"
            >
              Contact Me <ChevronRight size={18} className="ml-2" />
            </a>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:flex items-center justify-center"
        >
          <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
             {/* Abstract liquid glass shape */}
             <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-accent-blue to-accent-purple rounded-full opacity-30 blur-3xl animate-pulse"></div>
             <div className="glass-card p-8 rounded-2xl relative z-10 w-[90%] lg:w-[80%] transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3 font-mono text-xs sm:text-sm text-gray-300">
                   <div className="flex flex-wrap"><span className="text-accent-pink mr-2">const</span> <span className="text-accent-blue mr-2">cloudEngineer</span> = <span className="text-accent-orange">{"{"}</span></div>
                   <div className="pl-4">name: <span className="text-accent-green">"Yash Kapure"</span>,</div>
                   <div className="pl-4">skills: [<span className="text-accent-green">"AWS"</span>, <span className="text-accent-green">"Kubernetes"</span>, <span className="text-accent-green">"Terraform"</span>],</div>
                   <div className="pl-4">hardWorker: <span className="text-accent-purple">true</span>,</div>
                   <div className="pl-4">problemSolver: <span className="text-accent-purple">true</span></div>
                   <div><span className="text-accent-orange">{"}"}</span>;</div>
                </div>
             </div>
             
             {/* Floating Elements */}
             <div className="absolute top-10 right-10 glass-card p-3 md:p-4 rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-xl md:text-2xl">☁️</span>
             </div>
             <div className="absolute bottom-20 left-10 glass-card p-3 md:p-4 rounded-xl animate-float" style={{ animationDelay: '2.5s' }}>
                <span className="text-xl md:text-2xl">🚀</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
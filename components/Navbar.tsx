import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check localStorage first, then system preference, default to dark
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let shouldBeDark = true;
    if (savedTheme) {
      shouldBeDark = savedTheme === 'dark';
    } else {
      shouldBeDark = prefersDark;
    }
    
    if (!shouldBeDark) {
      html.classList.add('light');
      setIsDarkMode(false);
    } else {
      html.classList.remove('light');
      setIsDarkMode(true);
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map(link => link.name);
      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newDarkMode = !isDarkMode;
    
    if (newDarkMode) {
      html.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
    
    setIsDarkMode(newDarkMode);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Yash-Pramod-Kapure-Resume.pdf';
    link.download = 'Yash-Pramod-Kapure-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-[#0A0E27]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
        : 'py-6 bg-transparent'
    }`}
    style={scrolled ? { backgroundColor: 'var(--nav-bg)', borderColor: 'var(--card-border)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Portfolio Title - Centered */}
          <div className="mb-4 md:mb-6">
            <a href="#" className="font-mono text-2xl md:text-3xl font-bold text-gradient-rainbow">
              Yash Kapure
            </a>
          </div>
          
          {/* Navigation Links - Centered Below */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative py-1 hover:text-white ${
                  activeSection === link.name 
                    ? 'text-white after:w-full' 
                    : 'text-gray-400 after:w-0'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-accent-blue after:to-accent-cyan after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button 
              onClick={handleResumeDownload}
              className="btn-gradient text-white px-5 py-2 rounded-full text-sm font-bold flex items-center transition-transform hover:-translate-y-1"
            >
              <Download size={16} className="mr-2" />
              Resume
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center justify-center gap-4 w-full">
             <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-white/10 absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-2 opacity-95">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={handleResumeDownload}
              className="w-full mt-4 btn-gradient text-white px-4 py-3 rounded-full text-base font-bold flex justify-center items-center"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
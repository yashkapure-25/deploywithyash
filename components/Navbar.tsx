import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;

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
          if (rect.top >= 0 && rect.top <= 300) setActiveSection(section);
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
    <nav
      /* iOS 26 glass effect: .nav-glass handles backdrop-blur + border.
         .scrolled intensifies the effect as content scrolls beneath.
         On mobile (<768px) .nav-glass goes fully transparent — merged into bg. */
      className={`fixed w-full z-50 transition-all duration-400 nav-glass ${scrolled ? 'scrolled py-1.5' : 'py-2'}`}
      aria-label="Main site navigation"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">

          {/* Portfolio Title */}
          <div className="mb-2 md:mb-2.5">
            <a
              href="#"
              className="font-signature text-2xl md:text-3xl font-bold text-gradient-rainbow focus-visible:outline-2 tracking-wider"
              aria-label="Yash Kapure – Go to homepage"
            >
              Yash Kapure
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center justify-center space-x-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-current={activeSection === link.name ? 'page' : undefined}
                aria-label={link.href.startsWith('http') ? `${link.name} (opens in new tab)` : link.name}
                className={`text-sm font-medium transition-all duration-300 relative py-1 focus-visible:outline-2 ${
                  activeSection === link.name
                    ? 'text-[#EDF2F4] after:w-full'
                    : 'text-[#8D99AE] after:w-0'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#D90429] after:transition-all after:duration-300 hover:text-[#EDF2F4] hover:after:w-full`}
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[#8D99AE] hover:text-[#EDF2F4] hover:bg-white/5 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={handleResumeDownload}
              className="btn-gradient red-pulse text-[#EDF2F4] px-5 py-2 rounded-full text-sm font-bold flex items-center transition-transform hover:-translate-y-1"
            >
              <Download size={16} className="mr-2" />
              Resume
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center justify-center gap-4 w-full">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[#8D99AE] hover:text-[#EDF2F4] transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              id="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#8D99AE] hover:text-[#EDF2F4] focus:outline-none focus-visible:outline-2"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — glass panel */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden glass-card border-t border-white/5 absolute w-full"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                role="menuitem"
                aria-label={link.href.startsWith('http') ? `${link.name} (opens in new tab)` : link.name}
                className="block px-3 py-2 rounded-md text-base font-medium text-[#8D99AE] hover:text-[#EDF2F4] hover:bg-[#D90429]/10 focus-visible:outline-2"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleResumeDownload}
              className="w-full mt-4 btn-gradient text-[#EDF2F4] px-4 py-3 rounded-full text-base font-bold flex justify-center items-center"
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
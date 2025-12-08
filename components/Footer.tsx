import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-darker py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Yash Kapure ❤️. <br className="md:hidden"/> All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-accent-blue hover:to-accent-cyan hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            );
          })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
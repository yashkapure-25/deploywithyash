import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_TIMELINE } from '../constants';

const EduVerse: React.FC = () => {
  return (
    <section id="eduverse" aria-labelledby="eduverse-heading" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          id="eduverse-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-gradient-rainbow pb-2">
          EduVerse — Education Timeline
        </motion.h2>

        <div className="relative">
          {/* Vertical Line - Hidden on Mobile, Visible on Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-orange rounded-full hidden md:block"></div>

          <div className="space-y-12 md:space-y-16">
            {EDUCATION_TIMELINE.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12 glass-card p-6 md:p-8 rounded-2xl hover:-translate-y-2 hover:border-accent-blue transition-all duration-300 group relative">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${index % 2 === 0 ? 'from-accent-purple to-accent-blue' : 'from-accent-green to-accent-cyan'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>

                  <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-3">{edu.stage}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-3">{edu.description}</p>
                  <p className="text-accent-cyan text-xs md:text-sm mb-2 font-mono">{edu.year}</p>
                  {edu.grades && (
                    <p className="text-accent-orange text-sm md:text-base font-semibold">Grade: {edu.grades}</p>
                  )}
                </div>

                {/* Center Icon Node */}
                <div className="w-12 h-12 md:w-16 md:h-16 my-4 md:my-0 rounded-full bg-bg-dark border-4 border-bg-card shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center relative z-10 group shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple opacity-20 animate-pulse"></div>
                  <edu.icon size={20} className="text-white relative z-10 group-hover:scale-110 transition-transform md:w-7 md:h-7" />
                </div>

                {/* Spacer */}
                <div className="w-full md:w-5/12 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EduVerse;
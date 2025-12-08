import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-gradient-rainbow pb-2"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8 md:space-y-12">
          {EXPERIENCE.map((exp) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:border-accent-purple transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-purple to-accent-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/30">
                   <exp.icon size={28} className="text-white md:w-8 md:h-8" />
                </div>
                <div className="flex-1">
                   <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-pink mb-1">{exp.company}</h3>
                   <h4 className="text-lg md:text-xl text-white mb-2">{exp.role}</h4>
                   <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-accent-purple text-xs md:text-sm font-medium border border-purple-500/20">
                     {exp.period}
                   </span>
                </div>
              </div>

              <div className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start text-gray-300 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                    <CheckCircle2 size={16} className="text-accent-purple mr-3 mt-1 flex-shrink-0 md:w-5 md:h-5" />
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { Eye, Award } from 'lucide-react';

const Certifications: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AWS' | 'DevOps' | 'Badge' | 'Courses' >('All');
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const filteredCerts = filter === 'All' 
    ? CERTIFICATIONS 
    : CERTIFICATIONS.filter(c => c.category === filter || (filter === 'DevOps' && c.category === 'Course') || (filter === 'Courses' && c.category === 'Course'));

  return (
    <section id="certifications" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-10 text-gradient-rainbow pb-2"
        >
          Certifications & Badges
        </motion.h2>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-16 flex-wrap gap-4">
          {['All', 'AWS', 'DevOps', 'Badge', 'Courses'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                filter === cat 
                  ? 'bg-gradient-to-r from-accent-blue to-accent-cyan border-transparent text-white shadow-lg shadow-blue-500/30 scale-105' 
                  : 'bg-transparent border-white/10 text-gray-400 hover:border-accent-blue hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={cert.id}
                className="glass-card p-6 rounded-2xl text-center group hover:-translate-y-2 hover:border-accent-blue transition-all duration-300"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-cyan p-[2px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow overflow-hidden">
                  <div className="w-full h-full rounded-2xl bg-bg-card flex items-center justify-center overflow-hidden relative">
                    {imageErrors.has(cert.id) ? (
                      <Award size={48} className="text-white" />
                    ) : (
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-contain rounded-2xl"
                        loading="lazy"
                        onError={() => {
                          console.error(`Failed to load image for cert ${cert.id}:`, cert.image);
                          setImageErrors(prev => new Set(prev).add(cert.id));
                        }}
                        onLoad={() => {
                          console.log(`Successfully loaded image for cert ${cert.id}`);
                        }}
                      />
                    )}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-accent-blue text-xs font-mono mb-6">{cert.date}</p>

                <button className="px-6 py-2 rounded-full border border-accent-blue text-accent-blue text-sm font-bold hover:bg-accent-blue hover:text-white transition-all duration-300">
                  View Certificate
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { ExternalLink } from 'lucide-react';

const FILTERS = ['All', 'AWS', 'Badge', 'Course'] as const;
type Filter = typeof FILTERS[number];

const Certifications: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('All');

  const filteredCerts = filter === 'All'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter(c => c.category === filter);

  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.h2
          id="certifications-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-8 text-gradient-rainbow pb-2"
        >
          Certifications &amp; Badges
        </motion.h2>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10 flex-wrap gap-3" role="group" aria-label="Filter certifications">
          {FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              aria-label={`Filter: ${cat}`}
              className={`px-5 py-1.5 rounded-full text-sm font-bold transition-all duration-300 border focus-visible:outline-2 ${
                filter === cat
                  ? 'bg-[#D90429] border-[#D90429] text-[#EDF2F4] shadow-lg shadow-[rgba(217,4,41,0.3)] scale-105'
                  : 'bg-transparent border-[rgba(141,153,174,0.25)] text-[#8D99AE] hover:border-[#D90429] hover:text-[#EDF2F4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid — no layout prop to avoid misalignment on filter change */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={`${cert.id}-${cert.title}`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.22 }}
                className="glass-card p-4 rounded-2xl text-center group flex flex-col items-center hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Badge image */}
                <div className="w-20 h-20 mx-auto mb-3 rounded-xl border border-[rgba(217,4,41,0.22)] overflow-hidden bg-[rgba(10,10,10,0.40)] flex items-center justify-center group-hover:border-[rgba(217,4,41,0.55)] transition-colors shrink-0">
                  <img
                    src={cert.image}
                    alt={`${cert.title} badge`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent && !parent.querySelector('.badge-fallback')) {
                        const el = document.createElement('div');
                        el.className = 'badge-fallback w-8 h-8';
                        el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="#D90429" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
                        parent.appendChild(el);
                      }
                    }}
                  />
                </div>

                <h3 className="text-[11px] md:text-xs font-semibold text-[#EDF2F4] mb-1 line-clamp-2 leading-tight group-hover:text-[#D90429] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[10px] text-[#8D99AE] mb-0.5">{cert.issuer}</p>
                <p className="text-[10px] text-[#D90429] font-mono mb-3">{cert.date}</p>

                <div className="mt-auto">
                  <a
                    href={cert.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.title} (opens in new tab)`}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-[rgba(217,4,41,0.35)] text-[#D90429] text-[10px] font-bold hover:bg-[#D90429] hover:text-[#EDF2F4] transition-all duration-300"
                  >
                    <ExternalLink size={10} />
                    View
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCerts.length === 0 && (
          <p className="text-center text-[#8D99AE] mt-12">No certifications in this category yet.</p>
        )}
      </div>
    </section>
  );
};

export default Certifications;
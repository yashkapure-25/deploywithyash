import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { CheckCircle2, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold text-center mb-10 md:mb-14 text-gradient-rainbow pb-2"
        >
          Work Experience
        </motion.h2>

        {/* Side-by-side grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-5 rounded-2xl relative overflow-hidden group flex flex-col"
            >
              {/* Ignition Red top bar slides in on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#D90429] to-[#8D99AE] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Card header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D90429] to-[#8D99AE] flex items-center justify-center shrink-0 shadow-md shadow-[rgba(217,4,41,0.25)]">
                  <exp.icon size={20} className="text-[#EDF2F4]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-bold text-[#EDF2F4] leading-tight">{exp.company}</h3>
                  <p className="text-xs md:text-sm text-[#8D99AE] mt-0.5">{exp.role}</p>
                  <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[rgba(217,4,41,0.10)] text-[#D90429] text-[11px] font-medium border border-[rgba(217,4,41,0.22)]">
                      <Briefcase size={10} />
                      {exp.period}
                    </span>
                    {exp.type && (
                      <span className="px-2 py-0.5 rounded-full bg-[rgba(141,153,174,0.10)] text-[#8D99AE] text-[11px] border border-[rgba(141,153,174,0.18)]">
                        {exp.type}
                      </span>
                    )}
                    {exp.location && (
                      <span className="inline-flex items-center gap-1 text-[#8D99AE] text-[11px]">
                        <MapPin size={10} />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-1.5 mb-4 flex-1">
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start text-[#8D99AE] group-hover:text-[#EDF2F4] transition-colors duration-300 text-xs md:text-sm">
                    <CheckCircle2 size={13} className="text-[#D90429] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>

              {/* Skills */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[rgba(141,153,174,0.12)]">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-[rgba(10,10,10,0.35)] border border-[rgba(141,153,174,0.18)] text-[#8D99AE] hover:border-[rgba(217,4,41,0.35)] hover:text-[#EDF2F4] transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
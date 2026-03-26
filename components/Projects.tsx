import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Server } from 'lucide-react';
import { PROJECTS } from '../constants';

const PROJECT_ICONS = [Server, Layers, Server, Layers, Server];

const Projects: React.FC = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          id="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-gradient-rainbow pb-2"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, index) => {
            const Icon = PROJECT_ICONS[index % PROJECT_ICONS.length];
            const visibleStack = project.techStack.slice(0, 4);
            const overflow = project.techStack.length - 4;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 relative flex flex-col"
              >
                {/* Ignition Red hover gradient sweep */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(217,4,41,0.07)] to-[rgba(141,153,174,0.05)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />

                <div className="p-5 md:p-6 relative z-10 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D90429] to-[#8D99AE] flex items-center justify-center mb-4 shadow-md shadow-[rgba(217,4,41,0.25)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shrink-0">
                    <Icon size={22} className="text-[#EDF2F4]" />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(217,4,41,0.10)] text-[#D90429] border border-[rgba(217,4,41,0.22)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold text-[#EDF2F4] mb-2 leading-snug group-hover:text-[#D90429] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#8D99AE] mb-4 leading-relaxed line-clamp-3 text-sm group-hover:text-[#EDF2F4] transition-colors flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {visibleStack.map(tech => (
                      <span key={tech} className="px-2 py-0.5 bg-[rgba(10,10,10,0.40)] border border-[rgba(141,153,174,0.18)] rounded-full text-[11px] text-[#8D99AE] group-hover:border-[rgba(217,4,41,0.25)] group-hover:text-[#EDF2F4] transition-colors">
                        {tech}
                      </span>
                    ))}
                    {overflow > 0 && (
                      <span className="px-2 py-0.5 bg-[rgba(217,4,41,0.08)] border border-[rgba(217,4,41,0.20)] rounded-full text-[11px] text-[#D90429]">
                        +{overflow} more
                      </span>
                    )}
                  </div>

                  {/* Action buttons — always both visible */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="flex-1 btn-gradient text-[#EDF2F4] py-2 rounded-xl font-bold flex items-center justify-center text-sm"
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </a>
                    <a
                      href={project.livePreview || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live preview of ${project.title}`}
                      className="flex-1 py-2 bg-transparent border border-[rgba(217,4,41,0.35)] text-[#D90429] font-bold rounded-xl hover:bg-[#D90429] hover:text-[#EDF2F4] transition-all duration-300 flex items-center justify-center text-sm"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Preview
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
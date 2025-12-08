import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-gradient-rainbow pb-2"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 relative"
            >
               {/* Hover Gradient Slide-in */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>

              <div className="p-6 md:p-8 relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center mb-5 md:mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Layers size={28} className="text-white md:w-8 md:h-8" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-cyan transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                   {project.techStack.slice(0, 4).map(tech => (
                     <span key={tech} className="px-2 py-1 md:px-3 md:py-1 bg-white/5 border border-white/10 rounded-full text-xs text-accent-cyan flex items-center gap-1 group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                       <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent-cyan"></span>
                       {tech}
                     </span>
                   ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-gradient text-white py-2 md:py-3 rounded-xl font-bold flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity text-sm md:text-base"
                  >
                    <Github size={18} className="mr-2" />
                    View Project
                  </a>
                  <a 
                    href={project.livePreview || "#"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 md:py-3 bg-transparent border-2 border-accent-blue text-white font-bold rounded-xl hover:bg-accent-blue hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-sm md:text-base"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Preview
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
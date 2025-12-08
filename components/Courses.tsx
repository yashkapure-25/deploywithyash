import React from 'react';
import { COURSES } from '../constants';
import { BookOpen, ExternalLink } from 'lucide-react';

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-gradient-rainbow pb-2">
          Completed Courses
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="glass-card p-8 rounded-2xl hover:border-accent-purple transition-colors duration-300 relative group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-purple to-accent-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 flex-1">{course.title}</h3>
                <span className="bg-purple-500/10 text-accent-purple text-xs font-bold px-3 py-1 rounded-full border border-purple-500/20 whitespace-nowrap ml-2">
                  {course.provider}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{course.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {course.skills.map(skill => (
                  <span key={skill} className="text-xs text-accent-blue bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {skill}
                  </span>
                ))}
              </div>
              
              <a 
                href={course.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-gradient text-white py-3 rounded-xl font-bold flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity group-hover:scale-105 transform duration-300"
              >
                <ExternalLink size={18} className="mr-2" />
                View Course
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
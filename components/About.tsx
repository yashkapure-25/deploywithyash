import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-gradient-rainbow pb-2"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start md:items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-aws-blue to-aws-cyan">Who I Am</h3>
            <p className="text-gray-300 font-sans text-base md:text-lg leading-relaxed mb-6">
              I'm a passionate AWS & DevOps Engineer dedicated to building robust, scalable cloud infrastructure and automating deployment pipelines. With expertise in cloud architecture, containerization, and Infrastructure as Code, I help organizations modernize their infrastructure and accelerate their development workflows.
            </p>
            
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-aws-blue to-aws-cyan">What I Do</h3>
            <p className="text-gray-300 font-sans text-base md:text-lg leading-relaxed mb-8">
              I design and implement cloud solutions on AWS, build CI/CD pipelines, manage containerized applications, and automate infrastructure provisioning. My focus is on creating reliable, cost-effective, and secure cloud environments.
            </p>

            <div className="glass-card p-5 md:p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-4">Technologies & Tools:</h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {TECH_STACK.map((tech) => (
                  <span 
                    key={tech.name} 
                    className="px-3 py-1 md:px-4 md:py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs md:text-sm font-medium text-accent-blue hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-default"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Profile & Floating Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 relative flex justify-center items-center h-[350px] md:h-[450px]"
          >
             {/* Scaled container for mobile to fit orbits */}
             <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center transform scale-75 xs:scale-90 md:scale-100 transition-transform duration-300">
                {/* Animated Gradient Rings */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple opacity-20 blur-xl"></div>
                </motion.div>
                
                {/* Pulsing Ring Effect */}
                <motion.div
                  className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-accent-blue/30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Profile Image - Circular with Modern Style */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 z-10 group">
                    {/* Animated Gradient Border */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue via-accent-cyan via-accent-purple to-accent-blue bg-[length:200%_200%] p-1">
                        <div className="w-full h-full rounded-full bg-bg-card"></div>
                      </div>
                    </motion.div>
                    
                    {/* Profile Image Container */}
                    <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl z-20 border-4 border-bg-card">
                        <motion.img 
                            src="./Assets/img/Profile.jpg" 
                            alt="Profile" 
                            className="w-full h-full object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0, 0.2, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                </div>

                {/* Orbit Container using Framer Motion */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none z-30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                     {TECH_STACK.map((tech, index) => {
                         const angle = (index / TECH_STACK.length) * 2 * Math.PI;
                         // Radius should be large enough to clear the profile circle
                         const radius = 160;
                         const x = Math.cos(angle) * radius;
                         const y = Math.sin(angle) * radius;

                         return (
                             <div
                                key={tech.name}
                                className="absolute w-14 h-14 md:w-16 md:h-16"
                                style={{
                                    left: '50%',
                                    top: '50%',
                                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                }}
                             >
                                {/* Counter-rotate to keep icon upright */}
                                <motion.div 
                                    className="w-full h-full flex items-center justify-center"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                >
                                    {/* Modern Icon Container with Hexagon Effect */}
                                    <motion.div
                                        className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center pointer-events-auto cursor-pointer"
                                        animate={{ 
                                            y: [-8, 8, -8],
                                            rotate: [0, 5, -5, 0],
                                        }}
                                        transition={{ 
                                            duration: 4 + Math.random() * 2, 
                                            repeat: Infinity, 
                                            ease: "easeInOut",
                                            delay: Math.random() * 3 
                                        }}
                                        whileHover={{ 
                                            scale: 1.3,
                                            rotate: 0,
                                            zIndex: 50
                                        }}
                                        title={tech.name}
                                    >
                                        {/* Hexagon Background using CSS */}
                                        <div 
                                            className="absolute inset-0 glass-card"
                                            style={{
                                                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                backdropFilter: 'blur(10px)',
                                                WebkitBackdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.05)'
                                            }}
                                        />
                                        
                                        {/* Icon with enhanced styling */}
                                        <div className="relative z-10 transform transition-transform duration-300">
                                            <tech.icon size={24} className={`md:w-7 md:h-7 ${tech.color} drop-shadow-lg filter brightness-110`} />
                                        </div>
                                        
                                        {/* Animated glow ring */}
                                        <motion.div
                                          className="absolute inset-0 rounded-full"
                                          style={{
                                            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                                          }}
                                          animate={{
                                            boxShadow: [
                                              '0 0 0px rgba(59, 130, 246, 0)',
                                              '0 0 15px rgba(59, 130, 246, 0.4)',
                                              '0 0 0px rgba(59, 130, 246, 0)'
                                            ]
                                          }}
                                          transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                          }}
                                        />
                                    </motion.div>
                                </motion.div>
                             </div>
                         );
                     })}
                </motion.div>
                
                {/* Connecting Lines (Optional decorative element) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
                  {TECH_STACK.map((tech, index) => {
                    const angle = (index / TECH_STACK.length) * 2 * Math.PI;
                    const radius = 160;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    return (
                      <line
                        key={tech.name}
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${x}px)`}
                        y2={`calc(50% + ${y}px)`}
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-accent-blue"
                      />
                    );
                  })}
                </svg>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
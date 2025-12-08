// import React, { useState } from 'react';
// import { Send, Mail, MapPin, Phone } from 'lucide-react';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert(`Thanks ${formData.name}! Your message has been sent.`);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-gradient-rainbow pb-2">
//           Get In Touch
//         </h2>

//         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
//           {/* Contact Info Card */}
//           <div className="glass-card p-6 md:p-10 rounded-3xl flex flex-col justify-center">
//             <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-pink">Let's Connect</h3>
//             <p className="text-gray-300 mb-8 md:mb-10 leading-relaxed text-sm md:text-base">
//               I'm always interested in hearing about new projects and opportunities. 
//               Whether you have a question or just want to say hi, feel free to drop a message!
//             </p>
            
//             <div className="space-y-6 md:space-y-8">
//               <div className="flex items-center group">
//                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent-pink/10 border border-accent-pink/30 flex items-center justify-center mr-4 md:mr-5 group-hover:scale-110 transition-transform shrink-0">
//                   <Mail className="text-accent-pink" size={18} />
//                 </div>
//                 <div className="overflow-hidden">
//                   <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Email</p>
//                   <a href="mailto:kapure.yashp25@gmail.com" className="text-base md:text-lg font-medium text-white hover:text-accent-pink transition-colors truncate block">kapure.yashp25@gmail.com</a>
//                 </div>
//               </div>
              
//               <div className="flex items-center group">
//                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center mr-4 md:mr-5 group-hover:scale-110 transition-transform shrink-0">
//                   <MapPin className="text-accent-blue" size={18} />
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Location</p>
//                   <p className="text-base md:text-lg font-medium text-white">Mumbai, Mh, In</p>
//                 </div>
//               </div>

//               <div className="flex items-center group">
//                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent-purple/10 border border-accent-purple/30 flex items-center justify-center mr-4 md:mr-5 group-hover:scale-110 transition-transform shrink-0">
//                   <Phone className="text-accent-purple" size={18} />
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Phone</p>
//                   <p className="text-base md:text-lg font-medium text-white">+91 8669207321</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="glass-card p-6 md:p-10 rounded-3xl">
//             <div className="mb-4 md:mb-6 group">
//               <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2 group-focus-within:text-accent-cyan transition-colors">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 required
//                 value={formData.name}
//                 onChange={(e) => setFormData({...formData, name: e.target.value})}
//                 className="w-full bg-[#0A0E27]/50 border border-gray-700 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all text-sm md:text-base"
//                 placeholder="your name"
//               />
//             </div>
//             <div className="mb-4 md:mb-6 group">
//               <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2 group-focus-within:text-accent-cyan transition-colors">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 required
//                 value={formData.email}
//                 onChange={(e) => setFormData({...formData, email: e.target.value})}
//                 className="w-full bg-[#0A0E27]/50 border border-gray-700 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all text-sm md:text-base"
//                 placeholder="yourname@gmail.com"
//               />
//             </div>
//             <div className="mb-6 md:mb-8 group">
//               <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2 group-focus-within:text-accent-cyan transition-colors">Message</label>
//               <textarea
//                 id="message"
//                 rows={4}
//                 required
//                 value={formData.message}
//                 onChange={(e) => setFormData({...formData, message: e.target.value})}
//                 className="w-full bg-[#0A0E27]/50 border border-gray-700 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all resize-none text-sm md:text-base"
//                 placeholder="Tell me about your project..."
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full btn-gradient text-white font-bold py-3 md:py-4 rounded-xl shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-sm md:text-base"
//             >
//               <Send size={18} className="mr-2" /> Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// Make sure to run: npm install @formspree/react
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  // Use your Formspree form ID here
  const [state, handleSubmit] = useForm('mpwvjlyw');

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-gradient-rainbow pb-2">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Contact Info Card */}
          <div className="glass-card p-6 md:p-10 rounded-3xl flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-pink">
              Let's Connect
            </h3>
            <p className="text-gray-300 mb-8 md:mb-10 leading-relaxed text-sm md:text-base">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to drop a message!
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent-pink/10 border border-accent-pink/30 flex items-center justify-center mr-4 md:mr-5 group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="text-accent-pink" size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Email</p>
                  <a
                    href="mailto:kapure.yashp25@gmail.com"
                    className="text-base md:text-lg font-medium text-white hover:text-accent-pink transition-colors truncate block"
                  >
                    kapure.yashp25@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center mr-4 md:mr-5 group-hover:scale-110 transition-transform shrink-0">
                  <MapPin className="text-accent-blue" size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Location</p>
                  <p className="text-base md:text-lg font-medium text-white">Mumbai, Mh, In</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent-purple/10 border border-accent-purple/30 flex items-center justify-center mr-4 md:mr-5 group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="text-accent-purple" size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Phone</p>
                  <p className="text-base md:text-lg font-medium text-white">+91 8669207321</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formspree Form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-10 rounded-3xl">
            {state.succeeded ? (
              <p className="text-center text-green-400 font-semibold text-base md:text-lg">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </p>
            ) : (
              <>
                <div className="mb-4 md:mb-6 group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-300 mb-2 group-focus-within:text-accent-cyan transition-colors"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full bg-[#0A0E27]/50 border border-gray-700 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all text-sm md:text-base"
                    placeholder="your name"
                  />
                </div>

                <div className="mb-4 md:mb-6 group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-300 mb-2 group-focus-within:text-accent-cyan transition-colors"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#0A0E27]/50 border border-gray-700 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all text-sm md:text-base"
                    placeholder="yourname@gmail.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-1 text-xs text-red-400"
                  />
                </div>

                <div className="mb-6 md:mb-8 group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-300 mb-2 group-focus-within:text-accent-cyan transition-colors"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-[#0A0E27]/50 border border-gray-700 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all resize-none text-sm md:text-base"
                    placeholder="Tell me about your project..."
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-1 text-xs text-red-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full btn-gradient text-white font-bold py-3 md:py-4 rounded-xl shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-sm md:text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={18} className="mr-2" />
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

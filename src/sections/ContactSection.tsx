
import React from 'react';
import GlitchText from '../components/GlitchText';
import SocialLinks from '../components/SocialLinks';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-terminal-black/30 relative">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="text-terminal-green font-mono mb-2">$ contact --send</p>
          <GlitchText text="Get In Touch" className="text-3xl md:text-4xl font-bold" />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="terminal-container">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="ml-2 text-sm text-gray-400">contact.js</span>
            </div>
            
            <div className="p-6">
              <p className="text-gray-300 mb-6 text-center">
                Feel free to reach out if you have any questions, opportunities, or just want to connect!
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="terminal-container p-4 text-center hover:border-terminal-green transition-colors">
                  <p className="text-terminal-green mb-2">Email</p>
                  <a 
                    href="mailto:naman280104@gmail.com" 
                    className="text-white hover:text-terminal-blue transition-colors"
                  >
                    naman280104@gmail.com
                  </a>
                </div>
                
                <div className="terminal-container p-4 text-center hover:border-terminal-purple transition-colors">
                  <p className="text-terminal-purple mb-2">WhatsApp</p>
                  <a 
                    href="https://wa.me/9887537123" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-terminal-blue transition-colors"
                  >
                    +91 9887537123
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <SocialLinks iconSize={24} />
              </div>

              <div className="mt-10">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-terminal-green mb-2 font-mono">_name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full bg-terminal-black border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-terminal-green"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-terminal-green mb-2 font-mono">_email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full bg-terminal-black border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-terminal-green"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-terminal-green mb-2 font-mono">_message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full bg-terminal-black border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-terminal-green"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button 
                      type="submit" 
                      className="px-6 py-3 rounded-md bg-terminal-green text-black font-medium hover:bg-terminal-green/80 transition-all duration-300 animate-pulse-glow"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import React, { useEffect, useState } from 'react';
import GlitchText from '../components/GlitchText';
import SocialLinks from '../components/SocialLinks';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const ContactSection: React.FC = () => {

  useEffect(() => {
    const loadRecaptcha = () => {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadRecaptcha();
  }, []);

  const [status, setStatus] = useState(""); // for notification

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const recaptchaToken = window.grecaptcha.getResponse();
    if (!recaptchaToken) {
      setStatus("Please complete the CAPTCHA.");
      return;
    }

    const formData = new FormData(form);
    
    const response = await fetch("https://formspree.io/f/xldbobqa", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    
    if (response.ok) {
      setStatus("Message sent successfully!");
      form.reset();
      setTimeout(() => setStatus(""), 4000); // Hide after 4s
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

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
                <div className="terminal-container p-4 text-center hover:border-terminal-cyan transition-colors">
                  <p className="text-terminal-cyan mb-2">Email</p>
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-terminal-green mb-2 font-mono">_name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        className="w-full bg-terminal-black border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-terminal-green"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-terminal-green mb-2 font-mono">_email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        className="w-full bg-terminal-black border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-terminal-green"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-terminal-green mb-2 font-mono">_message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-terminal-black border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-terminal-green"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <div className="g-recaptcha"  data-sitekey="6LcltTgrAAAAAHTILV17r4bG8bMxWunuAFgvNDAw"></div>
                  <div className="text-center">
                    <button 
                      type="submit" 
                      className="px-6 py-3 rounded-md bg-terminal-green text-black font-medium hover:bg-terminal-green/80 transition-all duration-2000 animate-pulse-glow"
                    >
                      Send Message
                    </button>
                  </div>
                  
                  {status && (
                    <div className="text-terminal-green font-mono text-center mt-4">
                      {status}
                    </div>
                  )}
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

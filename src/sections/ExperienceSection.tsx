
import React from 'react';
import GlitchText from '../components/GlitchText';
import { Briefcase } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-terminal-black/30 relative">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="text-terminal-green font-mono mb-2">
            <Briefcase className="inline mr-2" size={18} />
            experience.log
          </p>
          <GlitchText text="Experience" className="text-3xl md:text-4xl font-bold" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 border-l-2 border-terminal-blue">
            <div className="mb-12">
              <div className="absolute -left-3 w-6 h-6 rounded-full bg-terminal-blue flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              
              <div className="ml-6">
                <div className="bg-black/50 border border-white/10 rounded-lg p-6 hover:border-terminal-blue transition-colors">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-terminal-blue">Software Engineer Intern</h3>
                      <p className="text-terminal-green">Cisco</p>
                    </div>
                    <p className="text-gray-400 font-mono">May 2024 - July 2024</p>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-terminal-black border border-terminal-purple/30 text-terminal-purple">Shell Scripting</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-terminal-black border border-terminal-blue/30 text-terminal-blue">React JS</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-terminal-black border border-terminal-green/30 text-terminal-green">Perl</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-terminal-black border border-terminal-cyan/30 text-terminal-cyan">AWS</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-terminal-black border border-white/30 text-white">EC2</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-terminal-black border border-white/30 text-white">S3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-b from-terminal-blue via-terminal-blue/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;


import React from 'react';
import GlitchText from '../components/GlitchText';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-terminal-black/30 relative">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="text-terminal-green font-mono mb-2">$ cat experience.log</p>
          <GlitchText text="Experience" className="text-3xl md:text-4xl font-bold" />
        </div>
        
        <div className="max-w-3xl mx-auto terminal-container p-6">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-terminal-blue">Software Engineer Intern</h3>
              <p className="text-terminal-green">Cisco</p>
            </div>
            <p className="text-gray-400 font-mono">May 2024 - July 2024</p>
          </div>
          
          <div className="space-y-4 font-mono">
            <div className="flex">
              <span className="text-terminal-green mr-2">$</span>
              <p>Contributed to the Network Security team under Security Business Group</p>
            </div>
            <div className="flex">
              <span className="text-terminal-green mr-2">$</span>
              <p>Created Firewall Management Center Backup/Restore UI using React JS</p>
            </div>
            <div className="flex">
              <span className="text-terminal-green mr-2">$</span>
              <p>Wrote Backup Snapshot Script for Cloud Firewall Management Center with improved efficiency</p>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-sm text-gray-400">Tech Stack:</p>
            <div className="flex flex-wrap gap-2 mt-2">
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
    </section>
  );
};

export default ExperienceSection;

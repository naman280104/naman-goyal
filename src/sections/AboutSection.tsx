
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import GlitchText from '../components/GlitchText';
import { Code, User } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="text-terminal-green font-mono mb-2">
            <Code className="inline mr-2" size={18} />
            about.profile
          </p>
          <GlitchText text="About Me" className="text-3xl md:text-4xl font-bold" />
        </div>
        
        <Card className="max-w-3xl mx-auto bg-black/40 border-terminal-blue/20 backdrop-blur-sm">
          <CardHeader className="border-b border-terminal-blue/20">
            <CardTitle className="flex items-center text-terminal-blue">
              <User size={20} className="mr-2" />
              Naman Goyal
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 prose prose-invert max-w-none">
            <p className="text-gray-300">
              I'm a <span className="text-terminal-blue font-semibold">Software Engineer</span> and Computer Science graduate from IIT Jodhpur, Class of 2025.
            </p>
            <p className="text-gray-300">
              I specialize in full-stack development and competitive programming, with a passion for building efficient and scalable applications.
            </p>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-terminal-green mb-2">My tech journey includes:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-terminal-blue mr-2">→</span>
                  Software Engineering Intern at Cisco
                </li>
                <li className="flex items-start">
                  <span className="text-terminal-blue mr-2">→</span>
                  Building real-time collaborative applications
                </li>
                <li className="flex items-start">
                  <span className="text-terminal-blue mr-2">→</span>
                  Developing mobile applications with Flutter
                </li>
                <li className="flex items-start">
                  <span className="text-terminal-blue mr-2">→</span>
                  Competitive programming at national competitions
                </li>
              </ul>
            </div>
            
            <p className="mt-6 text-gray-300">
              I'm constantly exploring new technologies and frameworks to enhance my skill set and create innovative solutions.
            </p>
            <p className="text-gray-300">
              When not coding, I enjoy participating in hackathons, solving competitive programming problems, and contributing to open-source projects.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;

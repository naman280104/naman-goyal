
import React from 'react';
import CodeBlock from '../components/CodeBlock';
import GlitchText from '../components/GlitchText';

const AboutSection: React.FC = () => {
  const aboutMeMarkdown = `
# About Me

I'm a **software developer** and CSE undergraduate at IIT Jodhpur (2021-2025).

I specialize in full-stack development and competitive programming, with a passion for building efficient and scalable applications.

My tech journey includes:
- Software Engineering Intern at Cisco
- Building real-time collaborative applications
- Developing mobile applications with Flutter
- Competitive programming at national competitions

I'm constantly exploring new technologies and frameworks to enhance my skill set and create innovative solutions.

When not coding, I enjoy participating in hackathons, solving competitive programming problems, and contributing to open-source projects.
`;

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="text-terminal-green font-mono mb-2">$ cat about.md</p>
          <GlitchText text="About Me" className="text-3xl md:text-4xl font-bold" />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <CodeBlock 
            code={aboutMeMarkdown}
            language="markdown"
            title="about.md"
            className="shadow-lg shadow-terminal-blue/10"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

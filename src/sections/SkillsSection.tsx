
import React from 'react';
import CodeBlock from '../components/CodeBlock';
import GlitchText from '../components/GlitchText';

const SkillsSection: React.FC = () => {
  const skillsJson = `{
  "languages": [
    "Python",
    "C++",
    "JavaScript",
    "Java",
    "Perl"
  ],
  "frontend": [
    "React.js",
    "Flutter",
    "Tailwind CSS",
    "HTML/CSS"
  ],
  "backend": [
    "Node.js",
    "Django",
    "Spring Boot",
    "Firebase"
  ],
  "tools": [
    "AWS EC2",
    "AWS S3",
    "Docker",
    "Git",
    "Shell Scripting"
  ],
  "databases": [
    "MySQL",
    "MongoDB",
    "GraphDB"
  ]
}`;

  return (
    <section id="skills" className="py-20 px-6 bg-terminal-black/30 relative">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="text-terminal-green font-mono mb-2">$ cat skills.json</p>
          <GlitchText text="Technical Skills" className="text-3xl md:text-4xl font-bold" />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <CodeBlock 
            code={skillsJson}
            language="json"
            title="skills.json"
            className="shadow-lg shadow-terminal-green/10"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import GlitchText from '../components/GlitchText';
import { Badge } from '../components/ui/badge';
import { Code, FileCode, Layout, Database, Terminal } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skills = {
    languages: [
      "Python",
      "C++",
      "JavaScript",
      "Java",
      "Perl"
    ],
    frontend: [
      "React.js",
      "Flutter",
      "Tailwind CSS",
      "HTML/CSS"
    ],
    backend: [
      "Node.js",
      "Django",
      "Spring Boot",
      "Firebase"
    ],
    tools: [
      "AWS EC2",
      "AWS S3",
      "Docker",
      "Git",
      "Shell Scripting"
    ],
    databases: [
      "MySQL",
      "MongoDB",
      "GraphDB"
    ]
  };

  const badgeColors: Record<string, string> = {
    languages: "bg-terminal-blue/20 text-terminal-blue border-terminal-blue/30 hover:bg-terminal-blue/30",
    frontend: "bg-terminal-purple/20 text-terminal-purple border-terminal-purple/30 hover:bg-terminal-purple/30",
    backend: "bg-terminal-green/20 text-terminal-green border-terminal-green/30 hover:bg-terminal-green/30",
    tools: "bg-terminal-cyan/20 text-terminal-cyan border-terminal-cyan/30 hover:bg-terminal-cyan/30",
    databases: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30 hover:bg-yellow-500/30",
  };

  const iconMap: Record<string, React.ReactNode> = {
    languages: <FileCode size={18} />,
    frontend: <Layout size={18} />,
    backend: <Code size={18} />,
    tools: <Terminal size={18} />,
    databases: <Database size={18} />
  };

  return (
    <section id="skills" className="py-20 px-6 bg-terminal-black/30 relative">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="text-terminal-green font-mono mb-2">
            <Code className="inline mr-2" size={18} />
            skills.profile
          </p>
          <GlitchText text="Technical Skills" className="text-3xl md:text-4xl font-bold" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="bg-black/40 border-white/10 backdrop-blur-sm hover:border-terminal-blue/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 text-lg text-white">
                  <span className="mr-2">
                    {iconMap[category]}
                  </span>
                  <h3 className="capitalize font-semibold">{category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <Badge 
                      key={index} 
                      className={`${badgeColors[category]} transition-colors duration-200 border px-2 py-1 text-xs rounded-full`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


import React from 'react';
import GlitchText from '../components/GlitchText';
import { Award } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      category: "Competitive Exams",
      items: [
        { title: "JEE Advanced 2021", description: "AIR 2399" },
        { title: "JEE Mains 2021", description: "AIR 7123" }
      ]
    },
    {
      category: "Inter IIT Tech Meet",
      items: [
        { title: "IIT Kharagpur", description: "Rank 12 (out of 22) | 2022 | Paradime" },
        { title: "IIT Madras", description: "Rank 9 (out of 22) | 2023 | Trumio" },
        { title: "IIT Bombay", description: "Rank 6 (out of 23) | 2024 | Dream11" }
      ]
    },
    {
      category: "INAE Youth Conclave 2022",
      items: [
        { title: "Hackathon", description: "Top 6 (out of 50+ teams)" },
        { title: "Programming Contest", description: "Rank 3 (out of 20+ teams)" }
      ]
    },
    {
      category: "Coding Platforms",
      items: [
        { title: "CodeChef", description: "Ranked 63 globally in CodeChef Starters 58" }
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="text-terminal-green font-mono mb-2">
            <Award className="inline mr-2" size={18} />
            achievements.highlight
          </p>
          <GlitchText text="Achievements" className="text-3xl md:text-4xl font-bold" />
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-black to-terminal-dark/80 rounded-lg overflow-hidden border border-white/10 hover:border-terminal-blue/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-terminal-blue/10 p-4 border-b border-white/10">
                <h3 className="text-terminal-blue text-xl font-bold">{category.category}</h3>
              </div>
              
              <div className="p-6 space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col gap-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-terminal-green mr-2"></div>
                      <h4 className="text-white font-medium">{item.title}</h4>
                    </div>
                    <p className="text-gray-400 font-mono text-sm ml-4 pl-2 border-l border-terminal-green/30">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

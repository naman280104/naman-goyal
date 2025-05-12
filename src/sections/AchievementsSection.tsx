
import React from 'react';
import GlitchText from '../components/GlitchText';

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
          <p className="text-terminal-green font-mono mb-2">$ cat achievements.txt</p>
          <GlitchText text="Achievements" className="text-3xl md:text-4xl font-bold" />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {achievements.map((category, index) => (
              <div key={index} className="terminal-container">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="ml-2 text-sm text-gray-400">{category.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-terminal-blue text-xl font-bold mb-4">{category.category}</h3>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex flex-col md:flex-row md:justify-between">
                        <div className="flex items-center">
                          <span className="text-terminal-green mr-2">▶</span>
                          <h4 className="text-white font-medium">{item.title}</h4>
                        </div>
                        <p className="text-gray-400 font-mono md:text-right">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;


import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import SkillsSection from '../sections/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection';
import ExperienceSection from '../sections/ExperienceSection';
import AchievementsSection from '../sections/AchievementsSection';
import ContactSection from '../sections/ContactSection';
import KonamiCode from '../components/KonamiCode';
import FloatingCode from '../components/FloatingCode';

const Index: React.FC = () => {
  const [alternateTheme, setAlternateTheme] = useState(false);
  
  // Floating code snippets
  const codeSnippets = [
    "const devLife = () => {\n  return 'code, eat, sleep, repeat';\n};",
    "function solveAlgorithm(problem) {\n  return problem.map(step => optimize(step));\n}",
    "class NamanGoyal {\n  constructor() {\n    this.skills = ['full-stack', 'competitive-programming'];\n  }\n}",
    "/* TODO: Refactor this later */",
    "if (coffee.isEmpty()) {\n  refill();\n  keepCoding();\n}",
    "// This bug shouldn't exist",
    "git commit -m \"Fixed that weird bug finally\"",
    "for (let i = 0; i < Infinity; i++) {\n  improveSkills();\n}",
  ];
  
  // Handle Konami code activation
  const handleKonamiActivation = () => {
    setAlternateTheme(!alternateTheme);
  };
  
  // Apply alternate theme effect
  useEffect(() => {
    const body = document.body;
    
    if (alternateTheme) {
      body.classList.add('alternate-theme');
      body.style.background = 'linear-gradient(180deg, #0a0a0a 0%, #0f172a 100%)';
      body.style.backgroundSize = '100% 100%';
    } else {
      body.classList.remove('alternate-theme');
      body.style.background = '';
    }
    
    return () => {
      body.classList.remove('alternate-theme');
      body.style.background = '';
    };
  }, [alternateTheme]);
  
  return (
    <div className={`min-h-screen transition-colors duration-500`}>
      <KonamiCode onActivate={handleKonamiActivation} />
      <NavBar />
      
      <FloatingCode snippets={codeSnippets} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

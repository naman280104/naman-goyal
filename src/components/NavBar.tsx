
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Listen for scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'skills',
        'projects',
        'experience',
        'achievements',
        'contact'
      ];
      
      // Get current scroll position
      const scrollPosition = window.scrollY + 200; // Offset to trigger earlier
      
      // Find the current active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-terminal-dark/80 border-b border-white/10 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-terminal-neon">
          <span className="text-white">&lt;</span>
          <span className="text-terminal-neon">ng</span>
          <span className="text-white">/&gt;</span>
        </Link>
        
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/#hero" isActive={activeSection === 'hero'}>Home</NavLink>
          <NavLink to="/#about" isActive={activeSection === 'about'}>About</NavLink>
          <NavLink to="/#skills" isActive={activeSection === 'skills'}>Skills</NavLink>
          <NavLink to="/#projects" isActive={activeSection === 'projects'}>Projects</NavLink>
          <NavLink to="/#experience" isActive={activeSection === 'experience'}>Experience</NavLink>
          <NavLink to="/#achievements" isActive={activeSection === 'achievements'}>Achievements</NavLink>
          <NavLink to="/#contact" isActive={activeSection === 'contact'}>Contact</NavLink>
        </div>
        
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-terminal-black border-b border-white/10 py-4 px-6 flex flex-col space-y-4">
          <MobileNavLink to="/#about" onClick={() => setIsOpen(false)} isActive={activeSection === 'about'}>About</MobileNavLink>
          <MobileNavLink to="/#skills" onClick={() => setIsOpen(false)} isActive={activeSection === 'skills'}>Skills</MobileNavLink>
          <MobileNavLink to="/#projects" onClick={() => setIsOpen(false)} isActive={activeSection === 'projects'}>Projects</MobileNavLink>
          <MobileNavLink to="/#experience" onClick={() => setIsOpen(false)} isActive={activeSection === 'experience'}>Experience</MobileNavLink>
          <MobileNavLink to="/#achievements" onClick={() => setIsOpen(false)} isActive={activeSection === 'achievements'}>Achievements</MobileNavLink>
          <MobileNavLink to="/#contact" onClick={() => setIsOpen(false)} isActive={activeSection === 'contact'}>Contact</MobileNavLink>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children, isActive }: { to: string; children: React.ReactNode; isActive: boolean }) => (
  <a 
    href={to.replace('/#', '#')} 
    className={`${isActive ? 'text-terminal-neon' : 'text-white'} hover:text-terminal-neon transition-colors duration-300 relative group`}
  >
    {children}
    <span className={`absolute -bottom-1 left-0 h-0.5 bg-terminal-neon transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
  </a>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick, 
  isActive 
}: { 
  to: string; 
  children: React.ReactNode; 
  onClick: () => void;
  isActive: boolean;
}) => (
  <a 
    href={to.replace('/#', '#')} 
    className={`${isActive ? 'text-terminal-neon' : 'text-white'} hover:text-terminal-neon transition-colors duration-300`}
    onClick={onClick}
  >
    {children}
  </a>
);

export default NavBar;

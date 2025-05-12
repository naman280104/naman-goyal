
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-terminal-dark/80 border-b border-white/10 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-terminal-neon">
          <span className="text-white">&lt;</span>
          <span className="text-terminal-neon">ng</span>
          <span className="text-white">/&gt;</span>
        </Link>
        
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/#about">About</NavLink>
          <NavLink to="/#skills">Skills</NavLink>
          <NavLink to="/#projects">Projects</NavLink>
          <NavLink to="/#experience">Experience</NavLink>
          <NavLink to="/#achievements">Achievements</NavLink>
          <NavLink to="/#contact">Contact</NavLink>
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
          <MobileNavLink to="/#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
          <MobileNavLink to="/#skills" onClick={() => setIsOpen(false)}>Skills</MobileNavLink>
          <MobileNavLink to="/#projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
          <MobileNavLink to="/#experience" onClick={() => setIsOpen(false)}>Experience</MobileNavLink>
          <MobileNavLink to="/#achievements" onClick={() => setIsOpen(false)}>Achievements</MobileNavLink>
          <MobileNavLink to="/#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-white hover:text-terminal-neon transition-colors duration-300 relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terminal-neon group-hover:w-full transition-all duration-300"></span>
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link 
    to={to} 
    className="text-white hover:text-terminal-neon transition-colors duration-300"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default NavBar;


import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-terminal-black py-8 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Naman Goyal. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              <span className="text-terminal-green">root@naman-goyal:~$</span> echo "Built with React + Tailwind"
            </p>
          </div>
          
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

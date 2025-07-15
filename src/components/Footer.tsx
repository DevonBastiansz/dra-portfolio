
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 py-10 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-6">
            <a 
              href="https://github.com/devonbastiansz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-all duration-300 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github size={24} className="hover-glow" />
            </a>
            <a 
              href="https://www.linkedin.com/in/devon-bastiansz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-all duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="hover-glow" />
            </a>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#experience", label: "Experience" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
            ].map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-sm text-blue-300 hover:text-white transition-colors duration-300 link-hover"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-blue-400">© {new Date().getFullYear()} Devon Bastiansz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

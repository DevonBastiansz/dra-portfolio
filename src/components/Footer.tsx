
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
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6">
            <a href="#home" className="text-sm text-blue-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-sm text-blue-300 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-sm text-blue-300 hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="text-sm text-blue-300 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-sm text-blue-300 hover:text-white transition-colors">Projects</a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-blue-400">© {new Date().getFullYear()} Devon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

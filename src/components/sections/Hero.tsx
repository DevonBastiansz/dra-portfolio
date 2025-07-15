import React from 'react';
import { Button } from '@/components/ui/button';
const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center gradient-bg">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080c20,#0c1533,#0c1838)]"></div>
      <div className="absolute inset-0 opacity-30" style={{
      backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(24, 98, 216, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(24, 98, 216, 0.2) 0%, transparent 50%)'
    }}></div>
      
      <div className="section-container relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Devon</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-blue-100">
            Computer Science Student & Web Developer
          </h2>
          <p className="text-lg mb-8 text-blue-200 max-w-xl mx-auto md:mx-0">Dedicated and motivated Computer Science student passionate about frontend web development, AI & machine learning solutions, and cybersecurity.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button onClick={() => scrollToSection('projects')} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-3 font-medium">
              See My Projects
            </Button>
            <Button onClick={() => scrollToSection('about')} variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-900/50 hover:text-blue-100 rounded-md px-6 py-3 font-medium">
              Learn About Me
            </Button>
          </div>
        </div>
        <div className="w-full md:w-2/5 flex justify-center md:justify-end">
          <div className="relative w-60 h-60 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full border-4 border-blue-400/20 blue-glow"></div>
            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&h=500&fit=crop&q=80" alt="Devon's Profile" className="w-full h-full object-cover rounded-full border-2 border-blue-500" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection('about')} className="text-blue-300 hover:text-blue-100" aria-label="Scroll down">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>;
};
export default Hero;
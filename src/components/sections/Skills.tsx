
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import TechLogo from '@/components/TechLogo';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const skillCategories = [
  {
    category: "Frontend Development",
    skills: ["React", "TypeScript", "HTML", "CSS", "JavaScript", "WordPress"]
  },
  {
    category: "Programming Languages",
    skills: ["Java", "C#"]
  },
  {
    category: "Design & Tools",
    skills: ["Figma", "Canva", "Photoshop"]
  },
  {
    category: "Other",
    skills: ["Social Media Management", "E-commerce Management", "Agile Workflows"]
  }
];

// Flatten all skills into a single array for the carousel
const allSkills = skillCategories.flatMap(category => category.skills);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 to-blue-900"></div>
      <div className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(circle at 20% 80%, rgba(30, 64, 175, 0.4) 0%, transparent 30%), radial-gradient(circle at 80% 20%, rgba(30, 64, 175, 0.4) 0%, transparent 30%)' }}>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text">Skills & Expertise</h2>
        
        <div className="max-w-5xl mx-auto mb-16 overflow-hidden">
          <Carousel 
            opts={{ 
              align: "start",
              loop: true,
              dragFree: true,
              skipSnaps: true,
              containScroll: false,
              inViewThreshold: 0
            }}
            className="w-full"
            autoplay={true}
          >
            <CarouselContent className="py-4" aria-label="Technical skills carousel">
              {allSkills.concat(allSkills.slice(0, 8)).map((skill, index) => (
                <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5 flex items-center justify-center">
                  <div className="p-2">
                    <TechLogo 
                      name={skill} 
                      className="w-16 h-16 transition-all duration-300 hover:scale-150 hover:rotate-6 opacity-80 hover:opacity-100"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-6 text-blue-100 text-center">Interested in my qualifications?</h3>
          <Button 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30"
          >
            <Download size={18} />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Skills;

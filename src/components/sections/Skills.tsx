
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import TechLogo from '@/components/TechLogo';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML", "CSS"]
  },
  {
    category: "Web Development",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Material UI", "SASS", "Redux"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Firebase", "Netlify", "Vercel"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase Firestore", "Redis"]
  },
  {
    category: "Design",
    skills: ["Figma", "Adobe XD", "Responsive Design", "UI/UX Principles", "Accessibility"]
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
        
        <div className="max-w-4xl mx-auto mb-16">
          <Carousel 
            opts={{ 
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="py-4">
              {allSkills.map((skill, index) => (
                <CarouselItem key={index} className="md:basis-1/5 lg:basis-1/6 flex items-center justify-center">
                  <div className="p-2">
                    <TechLogo 
                      name={skill} 
                      className="w-12 h-12 transition-all duration-300 hover:scale-150 hover:rotate-6 opacity-80 hover:opacity-100"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-blue-800/50 hover:bg-blue-700/70 border-blue-700" />
              <CarouselNext className="relative static right-0 translate-y-0 bg-blue-800/50 hover:bg-blue-700/70 border-blue-700" />
            </div>
          </Carousel>
          
          <div className="mt-8 flex gap-2 flex-wrap justify-center">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="text-sm text-blue-300 px-3 py-1.5 rounded-full bg-blue-900/50 border border-blue-800/50">
                {category.category}
              </div>
            ))}
          </div>
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

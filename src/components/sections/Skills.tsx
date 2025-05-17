
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

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

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 to-blue-900"></div>
      <div className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(circle at 20% 80%, rgba(30, 64, 175, 0.4) 0%, transparent 30%), radial-gradient(circle at 80% 20%, rgba(30, 64, 175, 0.4) 0%, transparent 30%)' }}>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-effect border-blue-800/50 hover:border-blue-700/70 transition-all duration-300 h-full">
              <CardContent className="p-6 h-full">
                <h3 className="text-xl font-medium text-blue-100 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-6 text-blue-100 text-center">Interested in my qualifications?</h3>
          <Button 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
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

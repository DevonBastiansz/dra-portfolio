
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import TechLogo from '@/components/TechLogo';

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    screenshot: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop&q=80",
    githubUrl: "#",
    liveUrl: "#",
    role: "Full-stack Developer"
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    technologies: ["React", "TypeScript", "Redux", "Firebase", "Tailwind CSS"],
    screenshot: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800&h=500&fit=crop&q=80",
    githubUrl: "#",
    liveUrl: "#",
    role: "Frontend Developer"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard displaying current conditions and forecasts using external weather APIs.",
    technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API", "Chart.js"],
    screenshot: "https://images.unsplash.com/photo-1563974318767-a4de855d7b43?w=800&h=500&fit=crop&q=80",
    githubUrl: "#",
    liveUrl: "#",
    role: "Frontend Developer"
  },
  {
    title: "Social Media Analytics",
    description: "A dashboard to track and visualize social media engagement metrics across multiple platforms.",
    technologies: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS", "REST APIs"],
    screenshot: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=500&fit=crop&q=80",
    githubUrl: "#",
    liveUrl: "#",
    role: "Full-stack Developer"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#0c1533,#0f172a,#0c1533)]"></div>
      <div className="absolute inset-0 opacity-10"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)' }}>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/30">
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.screenshot} 
                  alt={`${project.title} screenshot`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-blue-100 mb-2">{project.title}</h3>
                <p className="text-blue-300 text-sm mb-3">Role: {project.role}</p>
                <p className="text-blue-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <TechLogo key={techIndex} name={tech} className="w-6 h-6" />
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 border-t border-blue-800/50 flex justify-between">
                <Button 
                  variant="outline" 
                  className="border-blue-600 text-blue-300 hover:bg-blue-800/50 hover:text-blue-100 flex items-center gap-2 transition-colors duration-300"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 flex items-center gap-2"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-blue-200 mb-5">Want to see more of my work?</p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={18} />
              <span>View All Projects on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

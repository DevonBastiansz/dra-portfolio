
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const About: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real scenario, you would send the form data to your backend or email service
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  return (
    <section id="about" className="py-24 bg-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950"></div>
      <div className="absolute inset-0 opacity-20" 
        style={{ background: 'radial-gradient(circle at 30% 40%, rgba(30, 64, 175, 0.4) 0%, transparent 30%), radial-gradient(circle at 70% 60%, rgba(30, 64, 175, 0.4) 0%, transparent 30%)' }}>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-100">Background & Interests</h3>
            <div className="space-y-4 text-blue-200">
              <p>
                I am a dedicated and motivated individual currently pursuing a Bachelor's degree in Computer Science 
                at APIIT, Colombo. My interests lie in frontend web development, AI & machine learning solutions, 
                and cybersecurity.
              </p>
              <p>
                With experience in React, TypeScript, and modern web technologies, I am eager to contribute positively 
                to organizations while gaining valuable industry experience and mentorship in a professional environment.
              </p>
              <p>
                I am fluent in both English and Sinhala, and have strong skills in attention-to-detail, time management, 
                and collaboration & teamwork.
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold mt-10 mb-6 text-blue-100">Extracurricular Activities</h3>
            <ul className="list-disc list-inside space-y-3 text-blue-200 ml-2">
              <li>
                <span className="font-medium text-blue-100">Head of Logistics</span> — Entrepreneurship Club, APIIT
                <div className="text-sm ml-5">Dec 2024 – Present</div>
              </li>
              <li>
                <span className="font-medium text-blue-100">Senior Prefect</span> — St. Joseph's College
                <div className="text-sm ml-5">Oct 2019 – Feb 2021</div>
              </li>
              <li>
                <span className="font-medium text-blue-100">TravelTech Hackathon 3.0</span>
                <div className="text-sm ml-5">Organized and participated in hackathon events</div>
              </li>
            </ul>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-6 text-blue-100">Find Me Online</h3>
              <div className="flex space-x-5">
                <a 
                  href="https://devonbastiansz.github.io/" 
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
            </div>
          </div>
          
          <div className="glass-effect rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-6 text-blue-100">Contact Me</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-1">Name</label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Your name" 
                  required
                  className="bg-blue-900/30 border-blue-800 text-blue-100 placeholder:text-blue-400/60 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-1">Email</label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="Your email" 
                  required
                  className="bg-blue-900/30 border-blue-800 text-blue-100 placeholder:text-blue-400/60 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-1">Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="What would you like to say?" 
                  rows={5} 
                  required
                  className="bg-blue-900/30 border-blue-800 text-blue-100 placeholder:text-blue-400/60 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

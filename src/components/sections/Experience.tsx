
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const experienceData = [
  {
    title: "Frontend Developer Intern",
    company: "Tech Innovators Inc.",
    duration: "May 2023 - Aug 2023",
    description: "Developed and maintained responsive web applications using React, resulting in 30% faster load times."
  },
  {
    title: "Web Developer",
    company: "Campus IT Department",
    duration: "Sep 2022 - Present",
    description: "Redesigned the university's event portal, improving user engagement by 45% and mobile accessibility."
  },
  {
    title: "Teaching Assistant",
    company: "Computer Science Department",
    duration: "Jan 2022 - May 2022",
    description: "Assisted 30+ students with web development concepts and graded assignments for 'Intro to Web Development'."
  }
];

const educationData = {
  degree: "BSc in Computer Science",
  university: "University of Technology",
  graduation: "Expected May 2025",
  gpa: "3.8/4.0",
  courses: ["Data Structures & Algorithms", "Web Development", "Database Systems", "Machine Learning"]
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0c1533,#0f172a,#0c1533)]"></div>
      <div className="absolute inset-0 opacity-10"
        style={{ background: 'radial-gradient(circle at 10% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 25%), radial-gradient(circle at 90% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 25%)' }}>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text">Experience & Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-blue-100 flex items-center">
              <span className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experienceData.map((job, index) => (
                <Card key={index} className="glass-effect border-blue-800/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-xl font-medium text-blue-100">{job.title}</h4>
                      <span className="text-sm text-blue-300">{job.duration}</span>
                    </div>
                    <p className="text-blue-300 mb-4">{job.company}</p>
                    <p className="text-blue-200">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-blue-100 flex items-center">
              <span className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              Education
            </h3>
            
            <Card className="glass-effect border-blue-800/50">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-medium text-blue-100">{educationData.degree}</h4>
                  <span className="text-sm text-blue-300">{educationData.graduation}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <p className="text-blue-300">{educationData.university}</p>
                  <p className="text-blue-300">GPA: {educationData.gpa}</p>
                </div>
                
                <h5 className="text-lg font-medium text-blue-200 mb-3">Relevant Coursework</h5>
                <div className="flex flex-wrap gap-2">
                  {educationData.courses.map((course, index) => (
                    <span key={index} className="skill-tag">{course}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-8 text-blue-100 flex items-center">
                <span className="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Certifications
              </h3>
              
              <div className="space-y-4">
                <div className="glass-effect border-blue-800/50 rounded-lg p-5">
                  <h4 className="text-lg font-medium text-blue-100">Full Stack Web Development</h4>
                  <p className="text-blue-300">FreeCodeCamp - Dec 2022</p>
                </div>
                <div className="glass-effect border-blue-800/50 rounded-lg p-5">
                  <h4 className="text-lg font-medium text-blue-100">React Developer Certification</h4>
                  <p className="text-blue-300">Meta - Mar 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;


import React from 'react';
import ProjectCard from '../components/ProjectCard';
import GlitchText from '../components/GlitchText';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Shamiyana App",
      description: "A user-friendly food delivery application designed to optimize the customer experience through hassle-free ordering with features like real-time order tracking and secure payment options.",
      techStack: ["Flutter", "Dart", "Firebase"],
      projectUrl: "#",
      githubUrl: "https://github.com/naman280104"
    },
    {
      title: "Real-Time Collaborative Editor",
      description: "A real-time collaborative editor enabling multiple users to edit documents simultaneously, enhancing productivity and teamwork with live updates and CRDT to handle simultaneous edits.",
      techStack: ["Java", "Spring Boot", "React JS", "Microservices", "Google Cloud Platform"],
      projectUrl: "#",
      githubUrl: "https://github.com/naman280104"
    },
    {
      title: "Attendance Quiz Proximity App",
      description: "A mobile application that leverages Bluetooth proximity for accurate attendance tracking, preventing proxy attendance and registering 50+ attendees simultaneously with automated functionalities.",
      techStack: ["Flutter", "Node.js", "MongoDB Atlas"],
      projectUrl: "#",
      githubUrl: "https://github.com/naman280104"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="text-terminal-green font-mono mb-2">$ ls -la ./projects</p>
          <GlitchText text="Projects" className="text-3xl md:text-4xl font-bold" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;


import React from 'react';
import ProjectCard from '../components/ProjectCard';
import GlitchText from '../components/GlitchText';
import { Code } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Shamiyana App",
      description: "A user-friendly food delivery application designed to optimize the customer experience through hassle-free ordering with features like real-time order tracking and secure payment options.",
      techStack: ["Flutter", "Dart", "Firebase"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      projectUrl: "#",
      githubUrl: "https://github.com/naman280104"
    },
    {
      title: "Real-Time Collaborative Editor",
      description: "A real-time collaborative editor enabling multiple users to edit documents simultaneously, enhancing productivity and teamwork with live updates and CRDT to handle simultaneous edits.",
      techStack: ["Java", "Spring Boot", "React JS", "Microservices", "Google Cloud Platform"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      projectUrl: "#",
      githubUrl: "https://github.com/naman280104"
    },
    {
      title: "Attendance Quiz Proximity App",
      description: "A mobile application that leverages Bluetooth proximity for accurate attendance tracking, preventing proxy attendance and registering 50+ attendees simultaneously with automated functionalities.",
      techStack: ["Flutter", "Node.js", "MongoDB Atlas"],
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      projectUrl: "#",
      githubUrl: "https://github.com/naman280104"
    },
    {
      title: "AI-Powered Recommendation System",
      description: "An intelligent recommendation system using machine learning algorithms to analyze user behavior and provide personalized content recommendations with high accuracy and relevance.",
      techStack: ["Python", "TensorFlow", "AWS", "Django", "PostgreSQL"],
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      projectUrl: "#",
      githubUrl: "https://github.com/naman280104"
    },
    {
      title: "Blockchain Wallet Application",
      description: "A secure cryptocurrency wallet application that allows users to manage digital assets across multiple blockchains with encrypted storage and transaction capabilities.",
      techStack: ["Solidity", "React Native", "Web3.js", "Ethereum", "Redux"],
      imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      projectUrl: "#",
      githubUrl: "https://github.com/naman280104"
    },
    {
      title: "Smart Home IoT Dashboard",
      description: "An integrated IoT dashboard for controlling and monitoring smart home devices with real-time updates, automated routines, and energy consumption analytics.",
      techStack: ["IoT", "MQTT", "React", "Node.js", "GraphQL"],
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      projectUrl: "#",
      githubUrl: "https://github.com/naman280104"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="text-terminal-green font-mono mb-2">
            <Code className="inline mr-2" size={18} />
            projects.showcase
          </p>
          <GlitchText text="Projects" className="text-3xl md:text-4xl font-bold" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              imageUrl={project.imageUrl}
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

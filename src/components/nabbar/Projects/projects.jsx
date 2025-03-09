import React from 'react';
import './projects.css';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import Project1 from '../Projects/intro.png';
import Project2 from '../Projects/score.png';
import Project3 from '../Projects/p3.jpg';
import Project4 from '../Projects/view.png';
import Project5 from '../Projects/intros.jpg';
import Project6 from '../Projects/UI.png';
// Import other project images similarly

const Projects = () => {
  const featuredProjects = [
    {
      title: "Employee Management System",
      description: "This is a Flutter-based employee management system that allows users to manage employee data",
      tech: ["Flutter", "Node.js"],
      image: Project3,
      github: "https://github.com/himeshapathirana/EmployeeManagementSystem.git",
      demo: "#"
    },
    {
      title: "Birdyy",
      description: "flutter Game",
      tech: ["Flutter"],
      image: Project2,
      github: "https://github.com/himeshapathirana/BirdyGame.git",
      
    },
    // Add 6 more featured projects
    {
      title: "ShopApp",
      description: "A simple grocery shopping Flutter application with CRUD functionality, utilizing the Provider package for state management.",
      tech: ["Flutter" , "Fire-Base"],
      image: Project1,
      github: "https://github.com/himeshapathirana/shopapp.git",
     
    },
    {
      title: "social media application",
      description: "A Flutter project that implements a modern social media application using Flutter and Firebase.",
      tech: ["Flutter", "Fire-Base"],
      image: Project4,
      github: "https://github.com/himeshapathirana/fluttersocialmedia.git",
      
    },
    {
        title: "Whatsapp clone App",
        description: "",
        tech: ["Flutter" , "Node.js"],
        image: Project5,
        
        
      },
      {
        title: "Whatsapp clone App",
        description: "",
        tech: ["Flutter"],
        image: Project6,
        
        demo: "#"
      },
    
  ];

  const additionalProjects = [
    "Weather API project",
    "Myunivers (Company Project)",
    "Marreym (Company Project)",
    "Web portfolio",
    "Air ticket booking UI/UX",
    "chat App UI/UX",
    "Online movie tickets booking app UI",
    "University App (Group project)",
    "Emp management system (Laravel)",
    
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={""} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="more-projects">
          <h3 className="subsection-title">More Projects</h3>
          <div className="projects-list">
            {additionalProjects.map((project, index) => (
              <div className="project-item" key={index}>
                <FaCode className="project-icon" />
                <span>{project}</span>
                <a href="https://github.com/himeshapathirana?tab=repositories" className="source-link">
                  <FaGithub />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
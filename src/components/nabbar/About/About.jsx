
import React from 'react';
import './About.css';
import myImage from './profile.jpg'; 
import cv from '../About/HimeshaPathirana_CV.pdf'; 
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="bubbles">
                {/* Bubble elements remain unchanged */}
            </div>
            <div className="about-container">
                <div className="about-grid">
                    <div className="about-image-wrapper">
                        <img 
                            src={myImage} 
                            alt="Himesha Pathirana" 
                            className="profile-image" 
                        />
                    </div>
                    
                    <div className="about-content">
                        <h2 className="section-title">About Me</h2>
                        
                        <div className="about-text">
                            <p className="lead-text">
                                I'm Himesha Pathirana, a passionate <span className="text-highlight">software developer</span> specializing in mobile application development, UI/UX design, and DevOps automation. I create seamless digital experiences by combining technical excellence with user centric design.
                            </p>
                            
                            <div className="professional-details">
                                <div className="detail-item">
                                    <h3>Expertise</h3>
                                    <p>Flutter Development, UI/UX designing , DevOps Automation</p>
                                </div>
                                
                            </div>
                            
                            <p className="body-text">
                            My journey in tech began with a deep curiosity for problem-solving, which evolved into expertise in full-cycle development. I have experience working with multiple companies and actively engage in individual projects, building scalable and high-performance mobile applications while maintaining robust CI/CD pipelines and cloud infrastructure.
                            </p>
                            
                            <p className="body-text">
                            My expertise spans Flutter development, UI/UX design, DevOps automation, and optimizing software workflows for efficiency and reliability. Currently enhancing my skills in distributed systems and performance optimization.
                            </p>
                            
                            <p className="body-text">
                            Beyond coding, I enjoy exploring photography, reading tech articles, video creation, and contributing to open-source projects. Constantly learning and evolving, I strive to push the boundaries of innovation in software development.
                            </p>
                            
                            <div className="cta-group">
                            <a 
  href={cv} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="cta-button primary"
>
  <FaDownload className="icon" />
  View CV
</a>
                                <a href="#contact" className="cta-button secondary">
                                    <FaEnvelope className="icon" />
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
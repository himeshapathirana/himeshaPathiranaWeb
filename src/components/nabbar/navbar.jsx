import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import './Navbar.css';


const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#Hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-connect">
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/himesha-pathirana-aa3659214" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/himeshapathirana" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <a href="#contact" className="connect-button">
          <FaEnvelope className="connect-icon" />
          Let's Collaborate
        </a>
      </div>

      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
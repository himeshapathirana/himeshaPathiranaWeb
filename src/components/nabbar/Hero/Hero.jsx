import React from 'react';
import './Hero.css'; 
import { motion } from "framer-motion";

import projectImage from '../Hero/project.jpg'

const Hero = () => { 
    return (
        <section className="hero" id="Hero">
            <div className="hero-image" style={{ backgroundImage: `url(${projectImage})` }}>
                <div className="gradient-overlay"></div>
            </div>
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-title"
                >
                    Hello, I'm <span className="name-highlight">Himesha Pathirana</span>
                </motion.h1>
                
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hero-subtitle"
                >
                    Mobile Application Developer | UI/UX designer | DevOps Engineer
                </motion.p>
                
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="hero-description"
                >
                    Passionate about crafting seamless digital experiences, I specialize in Mobile Application Development, UI/UX design, and DevOps tasks. Let's create something extraordinary!
                </motion.p>
                
                <motion.a
                    href="#contact"
                    className="cta-button"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Start Collaboration
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;
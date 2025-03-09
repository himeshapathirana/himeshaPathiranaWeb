import React from 'react';
import './Education.css';
import { FaGraduationCap, FaCalendarAlt, FaBook } from 'react-icons/fa';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <h2 className="section-title">Education & Qualifications</h2>

        <div className="education-grid">
          {/* NSBM */}
          <div className="education-card">
            <div className="education-header">
              <FaGraduationCap className="education-icon" />
              <div>
                <h3>BSc (Honours) in Computer Science</h3>
                <p className="institution">NSBM Green University</p>
                <div className="education-meta">
                  <span><FaCalendarAlt /> 2021 - Present</span>
                </div>
              </div>
            </div>
            <div className="education-details">
              <p className="description">
              A comprehensive 4-year degree covering core courses such as programming, data structures, algorithms, computer architecture, and operating systems. Specialized courses include AI, machine learning, software engineering, database systems, computer networks, and cybersecurity. The program also covers essential mathematics and theory, including discrete mathematics, linear algebra, probability, and computational theory. Students gain practical experience through labs, projects, and internships. Electives are offered in areas like web development, mobile app development, game design, and data science.
              </p>
              <div className="curriculum">
                <h4>Key Curriculum Components:</h4>
                <ul>
                  <li><FaBook /> Core Programming & Algorithms</li>
                  <li><FaBook /> AI/Machine Learning Specializations</li>
                  <li><FaBook /> Advanced Software Engineering</li>
                  <li><FaBook /> Data Warehouse and Data Mining</li>
                  <li><FaBook /> Practical Project Experience</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Colombo */}
          <div className="education-card">
            <div className="education-header">
              <FaGraduationCap className="education-icon" />
              <div>
                <h3>Bachelor of Information Technology (BIT)</h3>
                <p className="institution">University of Colombo</p>
                <div className="education-meta">
                  <span><FaCalendarAlt /> 2022 - Present</span>
                </div>
              </div>
            </div>
            <div className="education-details">
              <p className="description">
              Currently pursuing the Bachelor of Information Technology (BIT) program at the University of Colombo, specializing in foundational and advanced concepts of IT. The first year includes courses on programming, web technologies, databases, and IT fundamentals, providing a strong base for future specialization and practical applications in the IT industry.
              </p>
              
            </div>
          </div>

          {/* A/L */}
          <div className="education-card">
            <div className="education-header">
              <FaGraduationCap className="education-icon" />
              <div>
                <h3>GCE Advanced Level</h3>
                <p className="institution">Badulla Central College</p>
                <div className="education-meta">
                  <span><FaCalendarAlt /> 2020</span>
                  <span>Physical Science Stream</span>
                </div>
              </div>
            </div>
            <div className="education-details">
              <div className="results">
                <h4>Results:</h4>
                <ul>
                  <li>Combined Mathematics: <strong>C</strong></li>
                  <li>Physics: <strong>S</strong></li>
                  <li>Chemistry: <strong>S</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
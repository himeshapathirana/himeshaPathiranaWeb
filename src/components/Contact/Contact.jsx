import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "4e688e61-2e64-4f5d-a014-7e995acaf033");
      
      // Add redirect URL
      formData.append("redirect", "https://yourdomain.com/thank-you"); // Replace with your actual thank-you page

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        event.target.reset(); // Reset form fields
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={onSubmit}>
              <input type="hidden" name="subject" value="New Message from Portfolio Contact Form" />
              
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="Enter your name"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="Enter your email"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="5"
                  placeholder="Let's discuss your project..."
                  className="form-input"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="status-message success">
                  Message sent successfully! I'll respond shortly.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="status-message error">
                  Error sending message. Please try again or email directly.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <h3>Contact Information</h3>
              
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <span>Email</span>
                  <a href="mailto:pathiranathimesha2021@gmail.com">
                    pathiranathimesha2021@gmail.com
                  </a>
                </div>
              </div>

              
              
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <span>Location</span>
                  <p>Colombo, Sri Lanka</p>
                </div>
              </div>

              <div className="social-links">
  <a href="https://www.linkedin.com/in/himesha-pathirana-aa3659214" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://github.com/himeshapathirana" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
</div>
            </div>
          </div>
        </div>
      </div>
      
      <button className="up-arrow" onClick={scrollToTop}>
        <FaArrowUp className="arrow-icon" />
      </button>
    </section>
  );
};

export default Contact;
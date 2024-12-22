import React from 'react';
import './HomePage.css'; // Import custom CSS for styling
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa'; // Import social media and email icons
import rijulImage from '../assets/rijul.jpg'; // Import the profile picture
import resumeFile from '../assets/resume.pdf'; // Import the resume file

const HomePage = () => {
  return (
    <section className="homepage-container">
      <div className="content">
        <p className="intro-text">
          Hi, I'm <strong>Rijul Chadha</strong>. I'm a passionate web developer and tech enthusiast. Welcome to my personal space where you can learn more about me, my skills, and my projects.
        </p>

        {/* About Me Section */}
        <div className="about-me">
          <div className="profile-picture">
            <img src={rijulImage} alt="Rijul Chadha" className="profile-img" />
          </div>

          <div className="bio">
            <p>
              I'm a third-year computer science student at <b>Toronto Metropolitan University</b>. I have a strong passion for developing intuitive, user-friendly websites and applications. My skills include web development, problem-solving, and working with a range of technologies such as <strong>React</strong>, <strong>JavaScript</strong>, <strong>SQL</strong>, and more. I enjoy taking on challenging projects and collaborating with like-minded individuals to bring ideas to life.
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="social-media">
        
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/rijul-chadha-788801255/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/Rijul-chadha?tab=repositories" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="mailto:r1chadha@torontomu.ca" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="social-icon" />
            </a>
            <a href="https://www.instagram.com/rijul_chadha/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        {/* Download Resume Section */}
        <div className="download-resume">
          <a href={resumeFile} download="Rijul_Chadha_Resume.pdf" className="resume-button">
            Download Resume
          </a>
          <br>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

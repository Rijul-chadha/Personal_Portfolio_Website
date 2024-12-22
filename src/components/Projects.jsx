// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css'; // Import custom CSS for styling

const projectData = [
  {
    title: "Resortify",
    description: "Hosted a hotel booking website using Node.js, Express, and MongoDB for backend, providing efficient user requests and secure booking experiences. Frontend built with CSS and EJS for an intuitive interface.",
    techStack: "Node.js, Express, MongoDB, EJS, CSS",
    link: "https://sample-project-5ikq.onrender.com/listings",
  },
  {
    title: "Bank Management System",
    description: "Implemented a bank management system in C++ featuring account management, deposits, withdrawals, balance inquiries, and error handling using object-oriented principles.",
    techStack: "C++",
    link: "https://github.com/Rijul-chadha/Bank_mangement_system_project",
  },
  {
    title: "Portfolio Website ",
    description: "Developed a personal portfolio webpage with HTML and CSS, featuring responsive design and animations for enhanced user engagement.",
    techStack: "React, CSS, Motion",
    link: "https://github.com/Rijul-chadha/my_portfolio_website",
  },
  {
    title: "Payroll Management DBMS",
    description: "Designed a payroll management system using Oracle SQL, implementing complex queries, views, and procedures for secure salary processing and reporting.",
    techStack: "Oracle SQL, PHP",
    link: "https://github.com/Rijul-chadha/Payroll_Management_DBMS",
  },
 
  {
    title: "Simon Says Game",
    description: "Created an interactive 'Simon Says' game demonstrating proficiency in event-driven programming, sequence generation, and real-time feedback for a smooth gameplay experience.",
    techStack: "JavaScript, HTML, CSS",
    link: "https://github.com/Rijul-chadha/Simon_says_game",
  }
 
];

const Projects = () => {
  return (
    <section className="projects-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-intro">Here are some projects showcasing my skills in software development and Database design.</p>
      </motion.div>

      <motion.div
        className="projects-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech">Tech Stack: {project.techStack}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;

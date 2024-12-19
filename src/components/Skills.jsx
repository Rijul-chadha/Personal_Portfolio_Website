import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-page">
      <h1 className="page-title">Skills</h1>

      <div className="skills-container">
        <div className="skills-category">
          <h2 className="category-title">Technical Skills</h2>
          <ul className="skills-list">
            <li className="skill-item">Python</li>
            <li className="skill-item">SQL</li>
            <li className="skill-item">HTML</li>
            <li className="skill-item">CSS</li>
            <li className="skill-item">JavaScript</li>
            <li className="skill-item">React</li>
            <li className="skill-item">Java</li>
            <li className="skill-item">MongoDB</li>
            <li className="skill-item">Node.js</li>
            <li className="skill-item">Express.js</li>
            <li className="skill-item">Bash/shell</li>
            <li className="skill-item">C</li>
            <li className="skill-item">C++</li>
            <li className="skill-item">Prolog</li>
            <li className="skill-item">Perl</li>

          </ul>
        </div>

        <div className="skills-category">
          <h2 className="category-title">Frameworks & Tools</h2>
          <ul className="skills-list">
          <li className="skill-item">Bootstrap</li>
            <li className="skill-item">Visual Studio</li>
            <li className="skill-item">Git</li>
            <li className="skill-item">GitHub</li>
            <li className="skill-item">Power BI</li>
            <li className="skill-item">Emacs</li>
            <li className="skill-item">Linux</li>
            <li className="skill-item">MS Office</li>  
            <li className="skill-item">Tailwind</li>
          </ul>
        </div>

        <div className="skills-category">
          <h2 className="category-title">Transferrable Skills</h2>
          <ul className="skills-list">
            <li className="skill-item">Teamwork</li>
            <li className="skill-item">Problem-Solving</li>
            <li className="skill-item">Communication</li>
            <li className="skill-item">Critical Thinking</li>
            <li className="skill-item">Leadership</li>
            <li className="skill-item">Time Management</li>
            <li className="skill-item">Adaptability</li>
            <li className="skill-item">Quick Learner</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;

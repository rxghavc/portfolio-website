import React from 'react';
import './Projects.css';
import { FaGlobe, FaCloudSun, FaProjectDiagram } from 'react-icons/fa';

const Projects = () => {
  const subjects = [
    {
        icon: <FaProjectDiagram />,
        title: "The STEM Tutor Network",
        technologies: ["HTML", "CSS", "JavaScript", "sqlite3"],
        description: "Full-stack starter tutoring web app to connect STEM students and tutors"
      },
      {
        icon: <FaGlobe />,
        title: "DeepSeek Clone",
        technologies: ["MERN Stack", "TailwindCSS", "Clerk", "DeepSeek API"],
        description: "A full-stack MERN (MongoDB, Express, React, Node.js) project that provides a seamless user experience for managing and interacting with AI-powered chat functionalities"
      },
      {
        icon: <FaCloudSun />,
        title: "Weather App",
        technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
        description: "A lightweight and responsive weather application that allows users to check real-time weather conditions by entering any city name."
      }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects I've built</h2>
      <p>Constantly learning frameworks & coding languages to build better things!</p>
      <p><br /></p>
      <div className="subject-cards">
        {subjects.map((subject, index) => (
          <div className="card fade-in" key={index}>
            <i>{subject.icon}</i>
            <h3>{subject.title}</h3>
            <p>Technologies Used</p>
            {subject.technologies.map((technology, i) => (
              <p key={i}>{technology}</p>
            ))}
            <p>{subject.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
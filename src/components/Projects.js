import React from "react";
import "./Projects.css";
import {
  FaCloudSun,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaRobot,
  FaFlask,
  FaRegUserCircle,
} from "react-icons/fa";

const Projects = () => {
  const subjects = [
    {
      icon: <FaFlask />,
      title: "The STEM Tutor Network",
      technologies: ["HTML", "CSS", "JavaScript", "sqlite3"],
      description:
        "Full-stack starter tutoring web app to connect STEM students and tutors",
      repoLink: "https://github.com/rxghavc/TheSTEMTutorNetwork",
    },
    {
      icon: <FaRobot />,
      title: "DeepSeek Clone",
      technologies: ["MERN Stack", "TailwindCSS", "Clerk", "DeepSeek API"],
      description:
        "A full-stack MERN (MongoDB, Express, React, Node.js) project that provides a seamless user experience for managing and interacting with AI-powered chat functionalities",
      repoLink: "https://github.com/rxghavc/DeepSeek-Clone",
      liveLink: "https://deep-seek-clone-three.vercel.app/",
    },
    {
      icon: <FaCloudSun />,
      title: "Weather App",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      description:
        "A lightweight and responsive weather application that allows users to check real-time weather conditions by entering any city name.",
      repoLink: "https://github.com/rxghavc/Weather-App",
    },
    {
      icon: <FaRegUserCircle />,
      title: "Portfolio Website",
      technologies: ["React", "CSS", "JavaScript"],
      description:
        "A personal portfolio website showcasing my projects, skills, and contact information. It's also the website you're currently viewing!",
      repoLink: "https://github.com/rxghavc/portfolio-website",
      liveLink: "https://raghavc-portfolio.vercel.app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects [Available on GitHub]</h2>
      <p>
        Constantly learning frameworks & coding languages to build better
        things!
      </p>
      <div className="code-language-buttons">
        <button className="cl-button">
          <FaPython /> Python
        </button>
        <button className="cl-button">
          <FaDatabase /> SQL
        </button>
        <button className="cl-button">
          <FaHtml5 /> HTML
        </button>
        <button className="cl-button">
          <FaCss3Alt /> CSS
        </button>
        <button className="cl-button">
          <FaJsSquare /> JavaScript
        </button>
        <button className="cl-button">
          <FaGithub /> Version Control
        </button>
      </div>
      <p>
        <br />
      </p>
      <div className="subject-cards">
        {subjects.map((subject, index) => (
          <div className="card fade-in" key={index}>
            <i>{subject.icon}</i>
            <h3>{subject.title}</h3>
            <p><u>Technologies Used</u></p>
            {subject.technologies.map((technology, i) => (
              <p key={i}>{technology}</p>
            ))}
            <p>{subject.description}</p>
            <a href={subject.repoLink} target="_blank" rel="noopener noreferrer" className="repo-button">
              View Repository Code
            </a>
            {subject.liveLink && (
              <a href={subject.liveLink} target="_blank" rel="noopener noreferrer" className="live-button">
                Interact with the Live App
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

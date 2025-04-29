import React from 'react';
import './Hero.css';
import { FaCode } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content fade-in">
        <h1>
            <FaCode className="horizontal-spin-icon" /> Hi, I'm{' '}
            <span className="highlight">Sai Raghavan Commandur</span>
        </h1>
        <p>
          I'm a <span className="highlight">B.Sc. Computer Science student</span> at the University of Surrey, passionate about 
          <span className="highlight"> full-stack web development</span>, <span className="highlight"> software engineering principles</span>, and building impactful, scalable solutions.
        </p>
        <p>
          I enjoy crafting modern, responsive web applications using technologies like 
          <span className="highlight"> JavaScript, Node.js, HTML/CSS, and cloud infrastructure</span>, with a focus on user experience and accessibility.
        </p>
        <p>
          My experience spans developing real-world software—from a social media prototype for elderly users to immersive AR/VR tools—and contributing to collaborative projects with an emphasis on innovation, security, and usability.
        </p>
        <p>
          Outside of development, I work as a <span className="highlight">freelance tutor</span>, helping students grasp core Computer Science and Mathematics concepts, and I serve as a <span className="highlight">Student Ambassador</span>, supporting outreach and engagement initiatives across campus.
        </p>
        <p>
          Feel free to explore my portfolio to learn more about my <span className="highlight">projects, skills, and professional journey</span>. I'm always trying to build new things and learn new skills towards my career goals!
        </p>
      </div>
    </section>
  );
};

export default Hero;

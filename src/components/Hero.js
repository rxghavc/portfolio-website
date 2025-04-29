import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content fade-in">
        <h1>Hi, I'm <span className="highlight">Sai Raghavan Commandur</span></h1>
        <p>
          I'm a <span className="highlight">Computer Science undergraduate</span> at the University of Surrey with a passion for 
          <span className="highlight"> full-stack development</span>, scalable systems, and <span className="highlight">DevOps</span>.
        </p>
        <p>
          I specialize in building <span className="highlight">user-centric applications</span> using modern web technologies like 
          <span className="highlight">JavaScript, Node.js, and cloud platforms</span>. My goal is to create impactful software solutions 
          that drive innovation and accessibility.
        </p>
        <p>
          With experience in <span className="highlight">teaching programming</span> and developing real-world projects, I bring a unique 
          blend of technical expertise and communication skills. From designing a social media app prototype for elderly users to 
          delivering tailored lessons in Computer Science and Mathematics, I thrive on solving problems and helping others succeed.
        </p>
        <p>
          Feel free to explore my portfolio to learn more about my <span className="highlight">projects, skills, and achievements</span>. 
          Let's build something amazing together!
        </p>
      </div>
    </section>
  );
};

export default Hero;
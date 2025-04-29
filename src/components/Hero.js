import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content fade-in">
        <h1>Welcome to <span className="highlight">TheSTEMTutorNetwork</span></h1>
        <p>We specialise in <span className="highlight">delivering GCSE/A-Level Content</span> to anyone who is interested in <span className="highlight">boosting their grades.</span></p>
        <p>Our <span className="highlight">tutors are highly experienced</span> in their respective fields and the team carries out extensive background checks to make sure that <span className="highlight">the services we provide for our clients are noteworthy</span> so either yourself or your child can succeed.</p>
        <p>You can view more about our tutoring services and how we operate further down the page!</p>
        <p><span className="highlight">Disclaimer:</span> We do not handle any scheduling services for tutor-tutee relationships, <span className="highlight">our company provide certified tutors for you to be able to contact and use for classes!</span></p>
      </div>
    </section>
  );
};

export default Hero;
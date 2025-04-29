import React from 'react';
import './MyExperience.css';
import { FaUsers, FaChalkboardTeacher, FaLaptopCode, FaLightbulb, FaGamepad } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
        icon: <FaChalkboardTeacher />,
        title: "Freelance Tutor",
        description: "Delivering tailored 1:1 tutoring in Computer Science and Mathematics for GCSE and A-Level students. Helped boost grades and student confidence through 100+ sessions."
      },
      {
        icon: <FaUsers />,
        title: "Student Ambassador",
        description: "Representing the University of Surrey by supporting outreach events, mentoring students, and engaging with prospective applicants to promote inclusivity and access to higher education."
      },
      {
        icon: <FaLaptopCode />,
        title: "Software Engineering Intern – Fujitsu",
        description: "Led a team to prototype an accessible social media app for elderly users, built AR/VR learning tools with Unity, and implemented AES encryption for data protection."
      },
      {
        icon: <FaGamepad />,
        title: "Code Tutor – Code Ninjas",
        description: "Taught 50+ students aged 7–14 coding using Scratch, JavaScript, and HTML. Developed game-based modules and led live debugging, pair programming, and hands-on projects."
      },
      {
        icon: <FaLightbulb />,
        title: "Young Enterprise Challenge Finalist",
        description: "Designed and pitched a VR smart-glasses prototype focused on enhancing daily life. Ranked 2nd nationally at Google HQ, demonstrating innovation, teamwork, and presentation skills."
      }
  ];

  return (
    <section className="services" id="services">
      <h2>My Experience</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="card fade-in" key={index}>
            <i>{service.icon}</i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
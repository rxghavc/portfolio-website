import React from 'react';
import './Services.css';
import { FaBook, FaChalkboardTeacher, FaLaptop } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaBook />,
      title: "Personalized Tutoring",
      description: "Get one-on-one tutoring sessions tailored to your needs."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Group Classes",
      description: "Join our group classes and learn with peers."
    },
    {
      icon: <FaLaptop />,
      title: "Online Courses",
      description: "Access our online courses from anywhere, anytime."
    }
  ];

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
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
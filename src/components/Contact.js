import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope />,
      text: "Email",
      link: "mailto:rxghavcdev@gmail.com"
    },
    {
      icon: <FaLinkedin />,
      text: "LinkedIn",
      link: "https://linkedin.com/in/raghavcommandur",
      target: "_blank"
    },
    {
      icon: <FaGithub />,
      text: "GitHub",
      link: "https://github.com/rxghavc",
      target: "_blank"
    }
  ];

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-buttons">
        {contactMethods.map((method, index) => (
          <a 
            key={index}
            href={method.link} 
            className="button-3d"
            target={method.target || "_self"}
            rel="noopener noreferrer"
          >
            {method.icon}
            {method.text}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;

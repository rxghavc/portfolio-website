import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope />,
      text: "Email",
      link: "mailto:r.commandur@gmail.com"
    },
    {
      icon: <FaPhone />,
      text: "Phone Numbers",
      link: "tel:07933454109"
    },
    {
      icon: <FaFacebook />,
      text: "Facebook",
      link: "https://www.facebook.com",
      target: "_blank"
    },
    {
      icon: <FaWhatsapp />,
      text: "WhatsApp Community",
      link: "https://www.whatsapp.com",
      target: "_blank"
    }
  ];

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
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
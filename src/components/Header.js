import React, { useState } from 'react';
import './Header.css';
import { FaAdjust } from 'react-icons/fa';

// Use an absolute path for the logo
const logo = '/assets/images/logo.png';

const Header = ({ toggleTheme }) => {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavClick = (section) => {
    setActiveLink(section);
    const element = document.getElementById(section);
    const headerOffset = 100; // Adjust based on your header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="TheSTEMTutorNetwork Logo" className="logo-image" />
            <span className="highlight">TheSTEMTutorNetwork</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => handleNavClick('home')} className={activeLink === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#services" onClick={() => handleNavClick('services')} className={activeLink === 'services' ? 'active' : ''}>Services</a></li>
            <li><a href="#about" onClick={() => handleNavClick('about')} className={activeLink === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#contact" onClick={() => handleNavClick('contact')} className={activeLink === 'contact' ? 'active' : ''}>Contact</a></li>
            <li><a href="/login-signup" className="login-signup-button">Login/Signup</a></li>
          </ul>
          <button id="themeToggle" onClick={toggleTheme}>
            <FaAdjust />
          </button>
        </nav>
      </header>
      <hr className="header-line" />
    </>
  );
};

export default Header;
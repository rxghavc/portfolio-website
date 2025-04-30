import React, { useState } from 'react';
import './Header.css';
import { FaCode, FaLaptopCode } from 'react-icons/fa';

const Header = ({ toggleTheme, isDarkMode }) => {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavClick = (section) => {
    setActiveLink(section);
    const element = document.querySelector(`section#${section}`);
    const headerHeight = document.querySelector('header').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  };

  const logo = isDarkMode ? '/assets/images/logo-dark.png' : '/assets/images/logo.png';

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="TheSTEMTutorNetwork Logo" className="logo-image" />
          </div>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => handleNavClick('home')} className={activeLink === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#services" onClick={() => handleNavClick('services')} className={activeLink === 'services' ? 'active' : ''}>My Experience</a></li>
            <li><a href="#projects" onClick={() => handleNavClick('projects')} className={activeLink === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#contact" onClick={() => handleNavClick('contact')} className={activeLink === 'contact' ? 'active' : ''}>Contact</a></li>
            <li>
              <a href="/CV" className="download-cv-button" download>
                <i className="fas fa-file-pdf"></i> View my CV
              </a>
            </li>
          </ul>
          <button id="themeToggle" onClick={toggleTheme}>
            {isDarkMode ? <FaLaptopCode /> : <FaCode />}
          </button>
        </nav>
      </header>
      <hr className="header-line" />
    </>
  );
};

export default Header;
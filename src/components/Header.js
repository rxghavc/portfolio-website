import React, { useState } from 'react';
import './Header.css';
import { FaCode, FaLaptopCode } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Header = ({ toggleTheme, isDarkMode }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setActiveLink(section);
    setMenuOpen(false); // Close menu on navigation
    const element = document.querySelector(`section#${section}`);
    const headerHeight = document.querySelector('header').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  };

  const handleLogoClick = () => {
    window.location.href = '/#home';
  };

  const logo = isDarkMode ? '/assets/images/logo-dark.png' : '/assets/images/logo.png';

  return (
    <>
      <header className={menuOpen ? 'menu-open' : ''}>
        <nav>
          <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="TheSTEMTutorNetwork Logo" className="logo-image" />
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={(e) => handleNavClick('home', e)} className={activeLink === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#services" onClick={(e) => handleNavClick('services', e)} className={activeLink === 'services' ? 'active' : ''}>My Experience</a></li>
            <li><a href="#projects" onClick={(e) => handleNavClick('projects', e)} className={activeLink === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick('contact', e)} className={activeLink === 'contact' ? 'active' : ''}>Contact</a></li>
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
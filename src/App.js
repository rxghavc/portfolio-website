import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/MyExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/react";

function App() {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);

    // Add or remove the dark mode class on the body element
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      document.getElementById('favicon').setAttribute('href', '/assets/images/rclogo-dark.png');
    } else {
      document.body.classList.remove('dark-mode');
      document.getElementById('favicon').setAttribute('href', '/assets/images/rclogo.png');
    }
  };

  useEffect(() => {
    // Initialize fade-in animations
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
      element.style.opacity = 0;
      element.style.transition = 'opacity 1s ease-in-out';
      setTimeout(() => {
        element.style.opacity = 1;
      }, 100);
    });

    // Add 3D effect to buttons
    const buttons3D = document.querySelectorAll('.button-3d');
    buttons3D.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.3)';
      });

      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
      });
    });

    // Cleanup event listeners
    return () => {
      buttons3D.forEach(button => {
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
      });
    };
  }, [isDarkMode]);

  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Analytics />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

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
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
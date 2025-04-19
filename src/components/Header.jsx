import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved dark mode setting in local storage on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand ms-5" href="/">marwaarts.in</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link active dropdown-toggle me-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/frames">Frames</a></li>
                <li><a className="dropdown-item" href="/henna">Henna Design</a></li>
                <li><a className="dropdown-item" href="/gifts">Gift Hamper</a></li>
                <li><a className="dropdown-item" href="/bracelet">Bracelets</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/#contact">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-2 active" href="/custom">Customization</a>
            </li>
          </ul>
          
          {/* Dark Mode Toggle with Sun and Moon icons */}
          <div className="dark-mode-toggle" onClick={toggleDarkMode} style={{ cursor: 'pointer', fontSize: '24px' }}>
            {/* Show Sun when dark mode is off, Moon when dark mode is on */}
            {darkMode ? (
              <i className="fa fa-sun" style={{ color: '#FFD700' }}></i>
            ) : (
              <i className="fa fa-moon" style={{ color: '#FFFFFF' }}></i>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

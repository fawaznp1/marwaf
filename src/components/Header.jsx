import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Link as scrollLink } from 'react-scroll';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

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

  // Function to close the navbar on mobile after clicking a link
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setNavbarOpen(false); // Close the navbar on mobile
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand ms-5" href="/">marwaarts.in</a>

        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setNavbarOpen(!navbarOpen)} 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" 
          aria-expanded={navbarOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle me-2" href="#" role="button" data-bs-toggle="dropdown">
  Categories <i className="fa-solid fa-chevron-down ms-1"></i>
</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/frames" onClick={handleLinkClick}>Frames</Link></li>
                <li><Link className="dropdown-item" to="/henna" onClick={handleLinkClick}>Henna Design</Link></li>
                <li><Link className="dropdown-item" to="/gifts" onClick={handleLinkClick}>Gift Hamper</Link></li>
                <li><Link className="dropdown-item" to="/bracelet" onClick={handleLinkClick}>Bracelets</Link></li>
              </ul>
            </li>
            <li className="nav-item">
             {/*  <Link className="nav-link active" to="#contact" onClick={handleLinkClick}>Contact Us</Link> */}
              <Link to="#contact" smooth={true} duration={500} className="nav-link">
              Contact </Link>
              </li>
            <li className="nav-item">
              <Link className="nav-link me-2 active" to="/custom" onClick={handleLinkClick}>Customization</Link>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <div className="dark-mode-toggle p-2" onClick={toggleDarkMode} style={{ cursor: 'pointer', fontSize: '24px' }}>
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

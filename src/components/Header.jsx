import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand ms-5" href="/">marwaarts.in</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto"> {/* 'ms-auto' to push items to the right */}
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
           {/*  <li className="nav-item">
              <a className="nav-link me-5 active" href="/cart">Cart  <i class="fa-solid fa-cart-shopping"></i></a>
            </li> */}
           
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

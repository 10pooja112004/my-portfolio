import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Pooja M.</div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://drive.google.com/file/d/1KB5XnvCwzK4Ns9Z6eMZf8sE2nCd1X3lh/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

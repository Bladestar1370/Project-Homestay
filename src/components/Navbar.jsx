// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToRooms = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('rooms-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('rooms-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 600);
    }
    setIsMenuOpen(false); // close menu after click
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link className="nav-logo" to="/">श्री स्वामी समर्थ</Link>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Links */}
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link className="nav-link" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <a href="#rooms-section" className="nav-link" onClick={scrollToRooms}>Rooms</a>
          <Link className="nav-link" to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link className="nav-link" to="/booking" onClick={() => setIsMenuOpen(false)}>Booking</Link>
          <Link className="nav-link" to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link className="nav-link" to="/weather" onClick={() => setIsMenuOpen(false)}>Weather</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
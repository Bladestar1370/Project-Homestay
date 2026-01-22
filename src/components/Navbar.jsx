// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';  // ← New
import './Navbar.css';

function Navbar() {
  const { t, i18n } = useTranslation();  // ← New
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);  // Close menu after switch
  };

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
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link className="nav-logo" to="/">{t('Swami Samarth Homestay')}</Link>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Links */}
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link className="nav-link" to="/" onClick={() => setIsMenuOpen(false)}>{t('Home')}</Link>
          <a href="#rooms-section" className="nav-link" onClick={scrollToRooms}>{t('Rooms')}</a>
          <Link className="nav-link" to="/about" onClick={() => setIsMenuOpen(false)}>{t('About')}</Link>
          <Link className="nav-link" to="/booking" onClick={() => setIsMenuOpen(false)}>{t('Booking')}</Link>
          <Link className="nav-link" to="/contact" onClick={() => setIsMenuOpen(false)}>{t('Contact')}</Link>
          <Link className="nav-link" to="/weather" onClick={() => setIsMenuOpen(false)}>{t('Weather')}</Link>

          {/* Language Switcher */}
          <div className="lang-switcher">
            <button
              className={`lang-btn ${i18n.language === 'mr' ? 'active' : ''}`}
              onClick={() => changeLanguage('mr')}
            >
              MR
            </button>
            <button
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
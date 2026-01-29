// src/components/Navbar.jsx
import { memo, useState, useCallback } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
    closeMenu();
  }, [i18n, closeMenu]);

  const scrollToRooms = useCallback((e) => {
    e.preventDefault();
    closeMenu();

    //  Logic for scrolling to rooms section
    if (location.pathname === '/') {
      document.getElementById('rooms-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      // Increased timeout slightly for more reliable scroll after navigation
      setTimeout(() => {
        document.getElementById('rooms-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 800);
    }
  }, [location.pathname, navigate, closeMenu]);

    //  Logic for scrolling to attractions section

  const scrollToAttractions = useCallback((e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === '/') {
      document.getElementById('attractions-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('attractions-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 800); // same delay — adjust to 1000 if content loads slowly
    }
  }, [location.pathname, navigate, closeMenu]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink 
          to="/" 
          className="nav-logo"
          onClick={closeMenu}
        >
          {t('Swami Samarth Homestay')}
        </NavLink>

        <button 
          className="hamburger" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {t('Home')}
          </NavLink>

          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={scrollToRooms}
            end={false}  // so it doesn't force exact match for scroll case
          >
            {t('Rooms')}
          </NavLink>

          {/* <NavLink 
            to="/booking" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {t('Booking')}
          </NavLink> */}

          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={scrollToAttractions}
            end={false}  // so it doesn't force exact match for scroll case
          >
            {t('Attractions')}
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {t('About')}
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {t('Contact')}
          </NavLink>

          <NavLink 
            to="/weather" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {t('Weather')}
          </NavLink>

          <div className="lang-switcher">
            <button
              className={`lang-btn ${i18n.language === 'mr' ? 'active' : ''}`}
              onClick={() => changeLanguage('mr')}
              type="button"
            >
              MARATHI
            </button>
            <button
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
              type="button"
            >
              ENGLISH
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);
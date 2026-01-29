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

  const changeLanguage = useCallback(
    (lng) => {
      i18n.changeLanguage(lng);
      closeMenu();
    },
    [i18n, closeMenu]
  );

  const scrollToSection = useCallback(
    (id) => (e) => {
      e.preventDefault();
      closeMenu();

      const scroll = () => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      };

      if (location.pathname === '/') {
        scroll();
      } else {
        navigate('/');
        setTimeout(scroll, 700);
      }
    },
    [location.pathname, navigate, closeMenu]
  );

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          {t('Swami Samarth Homestay')}
        </NavLink>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            {t('Home')}
          </NavLink>

          <NavLink to="/" className="nav-link" onClick={scrollToSection('rooms-section')}>
            {t('Rooms')}
          </NavLink>

          <NavLink to="/" className="nav-link" onClick={scrollToSection('attractions-section')}>
            {t('Attractions')}
          </NavLink>

          <NavLink to="/about" className="nav-link" onClick={closeMenu}>
            {t('About')}
          </NavLink>

          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
            {t('Contact')}
          </NavLink>

          <NavLink to="/weather" className="nav-link" onClick={closeMenu}>
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

// src/components/Navbar.jsx
import { Link, useNavigate, useLocation } from 'react-router-dom';  // ← Add useNavigate and useLocation
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();  // To check current page

  const scrollToRooms = (e) => {
    e.preventDefault();  // Prevent default anchor behavior

    const roomsSection = document.getElementById('rooms-section');

    if (location.pathname === '/') {
      // Already on home → just scroll
      if (roomsSection) {
        roomsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On another page → navigate to home, then scroll
      navigate('/');
      // Small delay for page to load and render
      setTimeout(() => {
        const roomsSection = document.getElementById('rooms-section');
        if (roomsSection) {
          roomsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);  // Adjust delay if needed (500ms = 0.5s)
    }
  };

  return (
    <nav className="nav">
      <Link className="link" to="/">Home</Link>
      
      {/* Use <a> with onClick for scroll instead of <Link> */}
      <a href="#rooms-section" className="link" onClick={scrollToRooms}>
        Rooms
      </a>
      
      <Link className="link" to="/about">About</Link>
      <Link className="link" to="/booking">Booking</Link>
      <Link className="link" to="/contact">Contact</Link>
      <Link className="link" to="/weather">Weather</Link>
    </nav>
  );
}

export default Navbar;
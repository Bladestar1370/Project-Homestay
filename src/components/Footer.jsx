// src/components/Footer.jsx
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Swami Samarth Homestay</h3>
          <p>
            Experience peace, comfort, and nature near Devgad.  
            Perfect stay for families and travelers 🌴
          </p>
        </div>

        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📍 Devgad, Maharashtra</p>
          <p>📞 +91 9421146213</p>
          <p>✉️ swamisamarthhomestay@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2026 Swami Samarth Homestay. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

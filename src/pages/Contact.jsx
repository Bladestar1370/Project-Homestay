
// src/pages/Contact.jsx
import './Contact.css';

function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactHeader">
        <h1>Contact Us</h1>
        <p className="intro">
          Planning a Konkan getaway? We're happy to help!
        </p>
      </div>

      <div className="grid">
        <div className="infoCard">
          <h3>Swami Samarth Homestay</h3>

          <p className="contact-line">
            <strong>Phone / WhatsApp:</strong> +91 8805182813
          </p>

          <a
            href="https://wa.me/918805182813"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsappBtn"
          >
            Chat on WhatsApp
          </a>

          <p className="contact-line">
            <strong>Alternative Number:</strong> +91 9404499370
          </p>

          <p className="contact-line">
            <strong>Email:</strong> sumitdhuri61@gmail.com
          </p>

          <p className="address">
            Devgad, Sindhudurg District<br />
            Maharashtra 416613
          </p>
        </div>

        <div className="infoCard">
          <h3>Before You Message Us</h3>
          <p className="smallText">It helps us reply faster if you tell us:</p>

          <ul>
            <li>📅 Approximate dates of stay</li>
            <li>👨‍👩‍👧 Number of adults & children</li>
            <li>🍽️ Any special requests (food, early check-in, etc.)</li>
          </ul>
        </div>
      </div>

      <p className="closing-note">
        We look forward to welcoming you!
      </p>
    </div>
  );
}

export default Contact;
// src/pages/Contact.jsx
import './Contact.css';

function Contact() {
  return (
    <div className="contactContainer">
      <h1>Contact Us</h1>
      
      <div className="grid">
        <div className="infoSection">
          <h3>Get in Touch</h3>
          <p><strong>Phone:</strong> +91 98xxxx xxxxx</p>
          <p><strong>WhatsApp:</strong> +91 98xxxx xxxxx</p>
          <p><strong>Email:</strong> swamisamarthhomestay@gmail.com</p>
          <p><strong>Address:</strong> Devgad, Sindhudurg, Maharashtra 416613</p>
        </div>

        <div className="formSection">
          <h3>Send us a message</h3>
          <form className="form">
            <input type="text" placeholder="Your Name" className="input" />
            <input type="email" placeholder="Your Email" className="input" />
            <input type="tel" placeholder="Phone Number" className="input" />
            <textarea 
              placeholder="Your Message" 
              rows="5" 
              className="textarea"
            />
            <button 
              type="submit"
              className="submitButton"
            >
              Send Message
            </button>
          </form>
          <p className="note">
            (This is a static form for now — we'll connect it to email/WhatsApp later)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
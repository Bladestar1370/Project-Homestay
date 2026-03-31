
// src/pages/Contact.jsx
import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="contactContainer">
      <div className="contactHeader">
        <h1>{t('Contact Us')}</h1>
        <p className="intro">
          {t('Planning a Konkan getaway? We\'re happy to help!')}
        </p>
      </div>

      <div className="grid">
        <div className="infoCard">
          <h3>{t('Swami Samarth Homestay')}</h3>

          <p className="contact-line">
            <strong>{t('Phone / WhatsApp:')}</strong> +91 8805182813
          </p>

          <a
            href="https://wa.me/918805182813"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsappBtn"
          >
            {t('Chat on WhatsApp')}
          </a>

          <p className="contact-line">
            <strong>{t('Alternative Number:')}</strong> +91 9404499370
          </p>

          <p className="contact-line">
            <strong>{t('Email:')}</strong> sumitdhuri61@gmail.com
          </p>

          <p className="address">
            {t('Devgad, Sindhudurg District')}<br />
            {t('Maharashtra 416613')}
          </p>
        </div>

        <div className="infoCard">
          <h3>{t('Before You Message Us')}</h3>
          <p className="smallText">{t('It helps us reply faster if you tell us:')}</p>

          <ul>
            <li>📅 {t('Approximate dates of stay')}</li>
            <li>👨‍👩‍👧 {t('Number of adults & children')}</li>
            <li>🍽️ {t('Any special requests (food, early check-in, etc.)')}</li>
          </ul>
        </div>
      </div>

      <p className="closing-note">
        {t('We look forward to welcoming you!')}
      </p>
    </div>
  );
}

export default Contact;
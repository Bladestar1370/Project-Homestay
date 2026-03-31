// src/pages/About.jsx
import { useTranslation } from 'react-i18next';
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <div className="aboutContainer">
      <div className="aboutContent">
        <h1>{t('About Swami Samarth Homestay')}</h1>
        
        <p className="lead">
          {t('Welcome to Swami Samarth Homestay in the serene coastal paradise of')}
          <strong> {t('Devgad')}</strong>, {t('Sindhudurg, Maharashtra')}. {t('Nestled amid lush greenery, we offer')}
          {t('a peaceful, spotlessly clean, and truly homely stay — just minutes from the pristine')}
          {t('Devgad Beach.')}
        </p>

        <section className="section-card">
          <h2>{t('Our Story')}</h2>
          <p>
            {t('Welcome to our family-run Konkani homestay in Devgad, where comfort meets the charm of coastal Maharashtra. We welcome travellers who are looking for a peaceful stay, local food, and a true Konkan experience.')}
          </p>
          <p>
            {t('Our traditional home is carefully renovated with modern facilities while keeping its natural and cultural beauty. Surrounded by greenery and located close to beautiful beaches, our homestay is perfect for a relaxing holiday.')}
          </p>
        </section>

        <section className="section-card">
          <h2>{t('What We Offer')}</h2>
          <ul className="list">
            <li>{t('Spacious, well-ventilated rooms with modern comforts')}</li>
            <li>{t('24-hour hot water and spotlessly clean bathrooms')}</li>
            <li>{t('Authentic home-cooked Konkani meals prepared fresh on request')}</li>
            <li>{t('Free high-speed Wi-Fi')}</li>
            <li>{t('Peaceful location surrounded by nature — far from city noise')}</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>{t('Location Advantage')}</h2>
          <p>
            {t('Devgad is world-famous for producing the finest')} <strong>{t('Alphonso (Hapus)')}</strong> {t('mangoes and boasts some of Maharashtra\'s cleanest, least-crowded beaches.')}
          </p>
          <p>{t('Nearby attractions include:')}</p>
          <ul className="list">
            <li>{t('Devgad Beach — just 1 minutes away')}</li>
            <li>{t('Kunkeshwar Temple — a serene seaside Shiva temple (~12 min drive)')}</li>
            <li>{t('Vijaydurg Fort — the "Gibraltar of the East" (~45 min drive)')}</li>
            <li>{t('Malvan — famous for seafood and water sports (~1 hr drive)')}</li>
          </ul>
        </section>

        <p className="closing">
          {t('We look forward to welcoming you to our home and sharing the magic of Devgad!')}
        </p>
      </div>
    </div>
  );
}

export default About;
// src/components/Attractions.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Attractions.css';

function Attractions() {
  const { t } = useTranslation();

  const [filter, setFilter] = useState('all');


  const attractions = [
    {
      slug: 'devgad-beach',
      title: 'Devgad Beach',
      description: 'Just 5 minutes away - calm waters & golden sand.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Devgad_beach.jpg',
      type: 'beach',
      distance: 'very-close',     // very-close / nearby / mid-range / day-trip
    },
    {
      slug: 'devgad-fort-lighthouse',
      title: 'Devgad Fort & Lighthouse',
      description: 'Historic fort with active lighthouse & stunning sea views (~5–10 min).',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkPWzr5Dd5pxxM32vG_CtIkyoDWZDe4QTig&s', // Use a strong cover image with sea/lighthouse if possible
      type: 'fort',
      distance: 'very-close',
    },
    {
      slug: 'vijaydurg-fort',
      title: 'Vijaydurg Fort',
      description: 'Historic sea fort (~30-45 min drive).',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP856-QQl-gaLHwhGUEtGwQRxxD91lSchGew&s',
      type: 'fort',
      distance: 'mid-range',
    },
    {
      slug: 'kunkeshwar-temple',
      title: 'Kunkeshwar Temple',
      description: 'Ancient Shiva temple by the beach (~20-35 min drive).',
      image: 'https://t3.ftcdn.net/jpg/05/43/38/46/360_F_543384666_jdBc3qC2gwGLHMVyv03ikTQzr19RRQgP.jpg',
      type: 'temple',
      distance: 'nearby',
    },
    {
      slug: 'mithmumbari-beach',
      title: 'Mithmumbari Beach',
      description: 'Pristine long white-sand beach, very clean & peaceful (~10 min drive).',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/2e/29/2d/caption.jpg?w=700&h=400&s=1', // choose a good cover image
      type: 'beach',
      distance: 'very-close',
    },
  ];

  const filteredAttractions = attractions.filter((attr) => {
    if (filter === 'all') return true;
    if (filter.startsWith('type-')) {
      return attr.type === filter.replace('type-', '');
    }
    if (filter.startsWith('dist-')) {
      return attr.distance === filter.replace('dist-', '');
    }
    return true;
  });

  return (
    <div className="attractionsContainer">
      <div className="title-filter-options-block">
        <h2 className="title">{t("Nearby Attractions")}</h2>

        <div className="filter-block">
          <label htmlFor="attraction-filter" className="filter-text">
            Filter by
          </label>
          <select
            id="attraction-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-options-block"
          >
            <option value="all">All Attractions</option>
            <option value="dist-very-close">Very Close (≤ 15 min)</option>
            <option value="dist-nearby">Nearby (15–40 min)</option>
            <option value="dist-mid-range">Mid Range (40–60 min)</option>
            <option value="dist-day-trip">Day Trips (60+ min)</option>
            <option disabled>──────────────</option>
            <option value="type-beach">Beaches</option>
            <option value="type-temple">Temples</option>
            <option value="type-fort">Forts</option>
          </select>
        </div>
      </div>

      <div className="attractionsGrid">
        {filteredAttractions.map((attr) => (
          <Link key={attr.slug} to={`/attractions/${attr.slug}`} className="card">
            <img 
              src={attr.image} 
              alt={attr.title} 
              className="cardImage" 
              loading="lazy"
              
            />
            
            <div className="card-content">
            <div className="card-text">
            <h3>{attr.title}</h3>
            <p>{attr.description}</p>
            </div>

            <button className="infoButton">
             Click for more info
            </button>
            </div>
          </Link>
        ))}
      </div>

      {filteredAttractions.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No attractions match the selected filter.
        </div>
      )}
    </div>
  );
}

export default Attractions;
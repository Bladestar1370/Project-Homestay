// src/components/Attractions.jsx
import { Link } from 'react-router-dom';
import './Attractions.css';

function Attractions() {
  return (
    <div className="attractionsContainer">
      <h2 className="title">Nearby Attractions</h2>
      
      <div className="grid">
        <Link to="/attractions/devgad-beach" className="card">
          <img 
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/99/51/e5/devgad-beach.jpg?w=900&h=500&s=1" 
            alt="Devgad Beach"
            className="cardImage"
          />
          <h3>Devgad Beach</h3>
          <p>Just 5 minutes away — calm waters & golden sand.</p>
        </Link>

        <Link to="/attractions/vijaydurg-fort" className="card">
          <img 
            src="https://assets.cntraveller.in/photos/673c85e8e7fdcdeb4cfa1dde/16:9/w_7824,h_4401,c_limit/Bedroom-2.jpeg" 
            alt="Vijaydurg Fort"
            className="cardImage"
          />
          <h3>Vijaydurg Fort</h3>
          <p>Historic sea fort (~30-45 min drive).</p>
        </Link>

        <Link to="/attractions/kunkeshwar-temple" className="card">
          <img 
            src="https://static.mediawire.in/pr/metadata/47901564/temp/52138844_Kankeshwar_Temple.png?id=47875"
            alt="Kunkeshwar Temple"
            className="cardImage"
          />
          <h3>Kunkeshwar Temple</h3>
          <p>Ancient Shiva temple by the beach (~20-35 min drive).</p>
        </Link>

        <Link to="/attractions/nivati-beach" className="card">
          <img 
            src="https://www.shutterstock.com/image-photo/colourful-sky-devgad-beach-during-260nw-1467138248.jpg" 
            alt="Nivati Beach"
            className="cardImage"
          />
          <h3>Nivati Beach</h3>
          <p>Serene & less crowded (~45-60 min drive).</p>
        </Link>

        <Link to="/attractions/redi-ganesh-temple" className="card">
          <img 
            src="https://example.com/redi-ganesh-temple.jpg"
            alt="Redi Ganesh Temple"
            className="cardImage"
          />
          <h3>Redi Ganesh Temple</h3>
          <p>Ancient self-manifested Ganpati (~60-90 min drive).</p>
        </Link>
      </div>
    </div>
  );
}

export default Attractions;
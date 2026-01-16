// src/components/RoomsSection.jsx
import { Link } from 'react-router-dom';
import './RoomsSection.css';

function RoomsSection() {
  return (
    <div id="rooms-section" className="roomsSectionContainer"> 
      <h2>Our Rooms</h2>
      <p>Choose from our comfortable AC or Non-AC options. Click to view details.</p>
      <div className="roomsOptions">
        <Link to="/ac-rooms" className="roomOption">
          <img 
            src="/src/assets/ac.png"  
            alt="AC Room"
            className="optionImage"
          />
          <h3>AC Rooms</h3>
          <p>Deluxe comfort with air conditioning. Starting at ₹4000/night.</p>
        </Link>

        <Link to="/non-ac-rooms" className="roomOption">
          <img 
            src="/src/assets/nonac.png" 
            alt="Non-AC Room"
            className="optionImage"
          />
          <h3>Non-AC Rooms</h3>
          <p>Budget-friendly with natural ventilation. Starting at ₹2500/night.</p>
        </Link>
      </div>
    </div>
  );
}

export default RoomsSection;
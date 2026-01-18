import { Link } from 'react-router-dom';
import './RoomsSection.css';

function RoomsSection() {
  return (
    <div id="rooms-section" className="roomsSectionContainer">
      <h2>Our Rooms</h2>
      <p>Choose from comfortable AC or Non-AC options — perfect for your beach getaway.</p>

      <div className="roomsOptions">
        <Link to="/ac-rooms" className="roomOption">
          <div className="imageWrapper">
            <img
              src="/images/101 after.png"           // ← fix path (or use import)
              alt="Deluxe AC Room at Swami Samarth Homestay"
              className="optionImage"
            />
            <div className="imageOverlay">
              <span className="priceBadge">From ₹4000/night</span>
            </div>
          </div>
          <div className="roomContent">
            <h3>Deluxe AC Rooms</h3>
            <p>Stay cool & comfortable with air conditioning • Ideal for families & couples</p>
          </div>
        </Link>

        <Link to="/non-ac-rooms" className="roomOption">
          <div className="imageWrapper">
            <img
              src="images/102 after.png"
              alt="Budget Non-AC Room near Devgad Beach"
              className="optionImage"
            />
            <div className="imageOverlay">
              <span className="priceBadge">From ₹2500/night</span>
            </div>
          </div>
          <div className="roomContent">
            <h3>Non-AC Rooms</h3>
            <p>Budget-friendly • Natural ventilation • Cozy & airy</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RoomsSection;
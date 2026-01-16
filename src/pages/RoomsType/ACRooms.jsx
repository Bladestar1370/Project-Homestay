// src/pages/ACRooms.jsx
import RoomGallery from '../../components/RoomGallery';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import './ACRooms.css';

const acImages = [
  { src: "/images/101 after.png", alt: "AC Deluxe Room - Queen Bed" },
  { src: "/images/101 before.jpg", alt: "AC Deluxe Room - Modern Bathroom" },
  { src: "/images/ac-room-balcony.jpg", alt: "AC Deluxe Room - Balcony View" },
  { src: "/images/ac-room-interior.jpg", alt: "AC Deluxe Room - Spacious Interior" },
  { src: "/images/ac-room-tv.jpg", alt: "AC Deluxe Room - TV & Work Desk" },
];

function ACRooms() {
  return (
    <div className="roomDetailsContainer">
      <h1>AC Rooms (Deluxe)</h1>
      <p>
        Our AC rooms offer premium comfort with air conditioning, spacious layout, and modern amenities. Perfect for a relaxing stay in Devgad's tropical climate.
      </p>

      {/* ← New Image Slider */}
      <RoomGallery images={acImages} />

      <div className="details">
        <h2>Features</h2>
        <ul>
          <li>Air Conditioning</li>
          <li>Queen-size bed</li>
          <li>Attached bathroom with hot water</li>
          <li>Free Wi-Fi</li>
          <li>Balcony view (select rooms)</li>
        </ul>

        <p><strong>Price:</strong> ₹4000 / night (includes breakfast)</p>
      </div>

      <BeforeAfterSlider />

      <a href="/booking" className="bookButton">Book Now</a>
    </div>
  );
}

export default ACRooms;
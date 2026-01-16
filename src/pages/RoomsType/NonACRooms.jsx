// src/pages/NonACRooms.jsx
import RoomGallery from '../../components/RoomGallery';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import './NonACRooms.css';

const nonAcImages = [
  { src: "/images/102 after.png", alt: "Non-AC Room - Comfortable Double Bed" },
  { src: "/images/102 before.jpg", alt: "Non-AC Room - Natural Breeze Window" },
  { src: "/images/non-ac-fan.jpg", alt: "Non-AC Room - Ceiling Fan" },
  { src: "/images/non-ac-interior.jpg", alt: "Non-AC Room - Clean Interior" },
];

function NonACRooms() {
  return (
    <div className="roomDetailsContainer">
      <h1>Non-AC Rooms (Standard)</h1>
      <p>
        Our Non-AC rooms provide affordable, clean stays with natural breeze and essential amenities. Ideal for budget travelers enjoying Devgad's fresh air.
      </p>

      {/* ← New Image Slider */}
      <RoomGallery images={nonAcImages} />

      <div className="details">
        <h2>Features</h2>
        <ul>
          <li>Ceiling fan</li>
          <li>Double bed</li>
          <li>Attached bathroom</li>
          <li>Free Wi-Fi</li>
          <li>Window views</li>
        </ul>

        <p><strong>Price:</strong> ₹2500 / night (includes breakfast)</p>
      </div>

      <BeforeAfterSlider />

      <a href="/booking" className="bookButton">Book Now</a>
    </div>
  );
}

export default NonACRooms;
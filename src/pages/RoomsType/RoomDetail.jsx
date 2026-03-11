// src/components/RoomDetail.jsx

import RoomGallery from "../../components/RoomGallery";
import BeforeAfterSlider from "../../components/BeforeAfterSlider";
import "./Rooms.css";

export default function RoomDetail({
  title,
  description,
  images,
  features,
  className = "",
  beforeSrc,
  afterSrc,
  beforeAlt = "Room before improvements",
  afterAlt = "Room after improvements",
  sliderTitle = "Room Before & After",
}) {
  return (
    <div className={`roomDetailsContainer ${className}`}>

      <h1 className="room-title">{title}</h1>

      {/* Image Gallery */}
      <RoomGallery images={images} />

      <div className="room-layout">

        {/* LEFT SIDE */}
        <div className="room-info">

          <h2>Room Description</h2>
          <p className="room-description">{description}</p>

          <h2>Amenities</h2>
          <ul className="features-list">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <h2>Room Details</h2>
          <ul className="room-extra">
            <li>👥 Capacity: 2 Adults</li>
            <li>🛏 Bed Type: King Size Bed</li>
            <li>⏰ Check-in: 12 PM</li>
            <li>⏰ Check-out: 11 AM</li>
          </ul>

          {/* Before After Slider */}
          {beforeSrc && afterSrc && (
            <BeforeAfterSlider
              beforeSrc={beforeSrc}
              afterSrc={afterSrc}
              beforeAlt={beforeAlt}
              afterAlt={afterAlt}
              title={sliderTitle}
            />
          )}

        </div>


        {/* RIGHT SIDE CONTACT CARD */}
        <div className="booking-card">

          <h3>Book This Room</h3>

          <p className="contact-text">
            For booking and availability please contact:
          </p>

          <p className="phone-number">
            📞 8805182813 <br/>
            📞 9404499370
          </p>

          <a href="tel:8805182813" className="call-btn">
            Call Now
          </a>

          <a
            href="https://wa.me/918805182813"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            WhatsApp Booking
          </a>

        </div>

      </div>

    </div>
  );
}
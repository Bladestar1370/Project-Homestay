// src/pages/Booking.jsx
import { useState } from 'react';
import './Booking.css';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'Deluxe Room',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bookingContainer">
      <h1>Book Your Stay at Swami Samarth Homestay</h1>
      <p className="intro">
        Fill in your details below. We'll confirm availability and get back to you within 24 hours via WhatsApp or call.
      </p>

      {submitted ? (
        <div className="success">
          <h2>Thank You!</h2>
          <p>Your booking enquiry has been sent successfully.</p>
          <p>We will contact you soon to confirm your stay in beautiful Devgad.</p>
          <button 
            onClick={() => setSubmitted(false)} 
            className="anotherButton"
          >
            Make Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="formContainer">
          <div className="grid2">
            <div>
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="input"
              />
            </div>

            <div>
              <label htmlFor="phone">Phone / WhatsApp *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 9xxxxxxxxx"
                className="input"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email">Email (optional)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="input"
            />
          </div>

          <div className="grid2">
            <div>
              <label htmlFor="checkIn">Check-in Date *</label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="input"
              />
            </div>

            <div>
              <label htmlFor="checkOut">Check-out Date *</label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
                min={formData.checkIn || new Date().toISOString().split('T')[0]}
                className="input"
              />
            </div>
          </div>

          <div className="grid2">
            <div>
              <label htmlFor="guests">Number of Guests *</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="input"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
                <option value="5+">5+ (Contact us)</option>
              </select>
            </div>

            <div>
              <label htmlFor="roomType">Room Type *</label>
              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                required
                className="input"
              >
                <option value="Deluxe Room">Deluxe Room (₹4000/night)</option>
                <option value="Standard Room">Standard Room (₹2500/night)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message">Additional Requests / Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Any special requirements? e.g., early check-in, extra bedding, mango season visit..."
              className="textarea"
            />
          </div>

          <button type="submit" className="submitBtn">
            Send Booking Enquiry
          </button>

          <p className="note">
            We'll reply quickly! For urgent bookings, WhatsApp us directly.
          </p>
        </form>
      )}
    </div>
  );
}

export default Booking;
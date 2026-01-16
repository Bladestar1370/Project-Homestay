// src/pages/About.jsx
import './About.css';

function About() {
  return (
    <div className="aboutContainer">
      <h1>About Swami Samarth Homestay</h1>
      
      <p>
        Welcome to <strong>Swami Samarth Homestay</strong> in beautiful Devgad, Sindhudurg, Maharashtra. 
        We offer a peaceful, clean, and homely stay surrounded by nature, just minutes from Devgad Beach.
      </p>

      <h2>Our Story</h2>
      <p>
        Our family has been welcoming guests for many years. We renovated our home to provide comfortable 
        rooms with modern amenities while keeping the warm, traditional Konkani touch. Whether you're here 
        for a beach holiday, Alphonso mango season, or to explore Sindhudurg forts, we make you feel at home.
      </p>

      <h2>What We Offer</h2>
      <ul className="list">
        <li>Spacious, well-ventilated rooms</li>
        <li>Hot water, clean bathrooms</li>
        <li>Home-cooked Konkani meals (on request)</li>
        <li>Free Wi-Fi and parking</li>
        <li>Peaceful location away from city noise</li>
      </ul>

      <h2>Location Advantage</h2>
      <p>
        Devgad is famous for the world's best Alphonso mangoes and pristine beaches. 
        Nearby attractions include:
      </p>
      <ul className="list">
        <li>Devgad Beach (5-7 min drive)</li>
        <li>Vijaydurg Fort (~45 min)</li>
        <li>Nivati Beach & Windmill Park</li>
        <li>Redi Ganesh Temple & Terekhol Fort</li>
      </ul>

      <p>We look forward to hosting you!</p>
    </div>
  );
}

export default About;
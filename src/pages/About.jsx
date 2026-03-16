// src/pages/About.jsx
import './About.css';

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutContent">
        <h1>About Swami Samarth Homestay</h1>
        
        <p className="lead">
          Welcome to <strong>Swami Samarth Homestay</strong> in the serene coastal paradise of 
          <strong> Devgad</strong>, Sindhudurg, Maharashtra. Nestled amid lush greenery, we offer 
          a peaceful, spotlessly clean, and truly homely stay — just minutes from the pristine 
          Devgad Beach.
        </p>

        <section className="section-card">
          <h2>Our Story</h2>
          <p>
            For many years, our family has opened our hearts and home to travellers seeking an 
            authentic Konkani experience. We carefully renovated our traditional house to blend 
            modern comfort with the warm, timeless charm of coastal Maharashtra. 
          </p>
          <p>
            Whether you're visiting during the golden <strong>Alphonso mango season</strong>, 
            craving a quiet beach escape, or planning to explore historic forts like Vijaydurg — 
            we treat every guest like family.
          </p>
        </section>

        <section className="section-card">
          <h2>What We Offer</h2>
          <ul className="list">
            <li>Spacious, well-ventilated rooms with modern comforts</li>
            <li>24-hour hot water and spotlessly clean bathrooms</li>
            <li>Authentic home-cooked Konkani meals prepared fresh on request</li>
            <li>Free high-speed Wi-Fi</li>
            <li>Peaceful location surrounded by nature — far from city noise</li>
          </ul>
        </section>

        <section className="section-card">
          <h2>Location Advantage</h2>
          <p>
            Devgad is world-famous for producing the finest <strong>Alphonso (Hapus)</strong> mangoes 
            and boasts some of Maharashtra's cleanest, least-crowded beaches.
          </p>
          <p>Nearby attractions include:</p>
          <ul className="list">
            <li>Devgad Beach — just 5–7 minutes by car</li>
            <li>Vijaydurg Fort — the "Gibraltar of the East" (~45 min drive)</li>
            <li>Nivati Beach & scenic Windmill Park</li>
            <li>Redi Ganesh Temple and Terekhol Fort</li>
          </ul>
        </section>

        <p className="closing">
          We look forward to welcoming you to our home and sharing the magic of Devgad!
        </p>
      </div>
    </div>
  );
}

export default About;
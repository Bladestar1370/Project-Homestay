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
            Welcome to our family-run Konkani homestay in Devgad, where comfort meets the charm of coastal Maharashtra. We welcome travellers who are looking for a peaceful stay, local food, and a true Konkan experience. 
          </p>
          <p>
            Our traditional home is carefully renovated with modern facilities while keeping its natural and cultural beauty. Surrounded by greenery and located close to beautiful beaches, our homestay is perfect for a relaxing holiday.
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
            <li>Devgad Beach — just 1 minutes away</li>
            <li>Kunkeshwar Temple — a serene seaside Shiva temple (~12 min drive)</li>
            <li>Vijaydurg Fort — the "Gibraltar of the East" (~45 min drive)</li>
            <li>Malvan — famous for seafood and water sports (~1 hr drive)</li>
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
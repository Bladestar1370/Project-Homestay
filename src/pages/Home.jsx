// src/pages/Home.jsx
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import Attractions from '../components/Attractions';
import RoomsSection from '../components/RoomsSection';  // ← New import
import './Home.css';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <h1>Swami Samarth Homestay</h1>
        <p>Peaceful • Clean • Near Devgad Beach</p>
      </div>

      {/* Welcome Section */}
      <div className="welcome">
        <h2>Welcome to Your Home Away from Home</h2>
        <RoomsSection />
      </div>

      <Attractions />

      
    </div>
  );
}

export default Home;
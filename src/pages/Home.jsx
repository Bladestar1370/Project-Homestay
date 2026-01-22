// src/pages/Home.jsx
import { useTranslation } from 'react-i18next';
import Attractions from '../components/Attractions';
import RoomsSection from '../components/RoomsSection';  // ← New import
import './Home.css';

function Home() {

const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <h1>{t("Swami Samarth Homestay")}</h1>
        <p>{t("Peaceful • Clean • Near Devgad Beach")}</p>
      </div>

      {/* Welcome Section */}
      <div className="welcome">
        <h2>{t("Welcome to our Homestay")}</h2>
        <RoomsSection />
      </div>

      <Attractions />

      
    </div>
  );
}

export default Home;
// src/pages/Home.jsx
import { useTranslation } from "react-i18next";
import Attractions from "../components/Attractions";
import RoomsSection from "../components/RoomsSection";
import "./Home.css";

function Home() {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" aria-label="Homestay introduction">
        <h1>{t("Swami Samarth Homestay")}</h1>
        <p>{t("Peaceful • Clean • Near Devgad Beach")}</p>
      </section>

      {/* Welcome / Rooms Section */}
      <section className="welcome" aria-labelledby="welcome-title">
        <h2 id="welcome-title">{t("Welcome to our Homestay")}</h2>
        <RoomsSection />
      </section>

      {/* Attractions Section */}
      <section id="attractions-section" aria-labelledby="attractions-title">
        <Attractions />
      </section>
    </main>
  );
}

export default Home;

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./RoomsSection.css";

const ROOMS = [
  {
    id: "ac",
    path: "/ac-rooms",
    img: "/images/101 after.png",
    price: "₹4000/night",
    titleKey: "Deluxe AC Rooms",
    descKey: "Stay cool & comfortable with air conditioning • Ideal for families & couples",
    alt: "Deluxe AC Room at Swami Samarth Homestay",
  },
  {
    id: "nonac",
    path: "/non-ac-rooms",
    img: "/images/102 after.png",
    price: "₹2500/night",
    titleKey: "Non-AC Rooms",
    descKey: "Budget-friendly • Natural ventilation • Cozy & airy",
    alt: "Budget Non-AC Room near Devgad Beach",
  },
];

function RoomsSection() {
  const { t } = useTranslation();

  return (
    <section id="rooms-section" className="roomsSectionContainer" aria-labelledby="rooms-heading">
      <h2 id="rooms-heading">{t("Our Rooms")}</h2>
      <p>{t("Choose from comfortable AC or Non-AC options — perfect for your beach getaway.")}</p>

      <div className="roomsOptions" role="list">
        {ROOMS.map((room) => (
          <Link
            key={room.id}
            to={room.path}
            className="roomOption"
            role="listitem"
            aria-label={t(room.titleKey)}
          >
            <div className="imageWrapper">
              <img
                src={room.img}
                alt={room.alt}
                className="optionImage"
                loading="lazy"
                fetchPriority="low"
                decoding="async"
              />
              <div className="imageOverlay">
                <span className="priceBadge">From {room.price}</span>
              </div>
            </div>

            <div className="roomContent">
              <h3>{t(room.titleKey)}</h3>
              <p>{t(room.descKey)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RoomsSection;

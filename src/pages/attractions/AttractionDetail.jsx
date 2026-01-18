// src/pages/attractions/AttractionDetail.jsx
import { useState } from "react";
import "./AttractionDetail.css";

function AttractionDetail({
  title,
  images,
  about,
  distance,
  travelTime,
  reachList,
  mapQuery,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImageIndex, setZoomedImageIndex] = useState(null);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openZoom = (index) => {
    setZoomedImageIndex(index);
    setIsZoomed(true);
    document.body.style.overflow = "hidden";
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setZoomedImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const navigateZoom = (direction) => {
    setZoomedImageIndex((prev) =>
      direction === "prev"
        ? prev === 0
          ? images.length - 1
          : prev - 1
        : prev === images.length - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <div className="attractionDetail">
      <div className="detail-layout">
        {/* Left Column - Text Info */}
        <div className="left-column">
          <h1>{title}</h1>

          <div className="info-block">
            <h3>About</h3>
            <p>{about}</p>
          </div>

          {(distance || travelTime) && (
            <div className="info-block">
              <h3>Distance & Time</h3>
              {distance && <p>≈ {distance}</p>}
              {travelTime && (
                <p>
                  Takes around <strong>{travelTime}</strong>
                </p>
              )}
            </div>
          )}

          {reachList?.length > 0 && (
            <div className="info-block">
              <h3>How to Reach</h3>
              <ul>
                {reachList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {mapQuery && (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              📍 Open in Google Maps
            </a>
          )}
        </div>

        {/* Right Column - Gallery */}
        <div className="right-column">
          <div className="gallery">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} - Image ${index + 1}`}
                width="800"
                height="450"           // ≈3:2 ratio – adjust if your images are 16:9 → 800×450
                className={index === currentIndex ? "active" : ""}
                onClick={() => openZoom(index)}
                loading={index === 0 ? "eager" : "lazy"} // preload first image
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            ))}

            {images.length > 1 && (
              <div className="gallery-nav">
                <button className="gallery-btn prev" onClick={prevImage}>
                  ←
                </button>
                <button className="gallery-btn next" onClick={nextImage}>
                  →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isZoomed && zoomedImageIndex !== null && (
        <div className="lightbox" onClick={closeZoom}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeZoom}>
              ×
            </button>

            <button
              className="lightbox-nav left"
              onClick={() => navigateZoom("prev")}
            >
              ←
            </button>

            <img
              src={images[zoomedImageIndex]}
              alt={`${title} zoomed view`}
              className="zoomed-image"
            />

            <button
              className="lightbox-nav right"
              onClick={() => navigateZoom("next")}
            >
              →
            </button>

            <div className="lightbox-caption">
              {title} ({zoomedImageIndex + 1} / {images.length})
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AttractionDetail;
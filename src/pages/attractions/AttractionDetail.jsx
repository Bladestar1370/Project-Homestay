import { useState, useCallback, useEffect, memo } from "react";
import "./AttractionDetail.css";

function AttractionDetail({
  title,
  images = [],
  about,
  distance,
  travelTime,
  reachList = [],
  mapQuery,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const hasMultipleImages = images.length > 1;
  const isZoomed = zoomedIndex !== null;

  const prevImage = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  const openZoom = useCallback((index) => {
    setZoomedIndex(index);
  }, []);

  const closeZoom = useCallback(() => {
    setZoomedIndex(null);
  }, []);

  const navigateZoom = useCallback(
    (dir) => {
      setZoomedIndex((i) =>
        dir === "prev"
          ? i === 0 ? images.length - 1 : i - 1
          : i === images.length - 1 ? 0 : i + 1
      );
    },
    [images.length]
  );

  // Lock body scroll + keyboard controls
  useEffect(() => {
    if (isZoomed) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    const handleKey = (e) => {
      if (!isZoomed) return;
      if (e.key === "Escape") closeZoom();
      if (e.key === "ArrowLeft") navigateZoom("prev");
      if (e.key === "ArrowRight") navigateZoom("next");
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isZoomed, closeZoom, navigateZoom]);

  return (
    <div className="attractionDetail">
      <div className="detail-layout">
        {/* Left Column */}
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
              {travelTime && <p>Takes around <strong>{travelTime}</strong></p>}
            </div>
          )}

          {reachList.length > 0 && (
            <div className="info-block">
              <h3>How to Reach</h3>
              <ul>
                {reachList.map((item, i) => <li key={i}>{item}</li>)}
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

        {/* Right Column */}
        <div className="right-column">
          <div className="gallery">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${title} - ${i + 1}`}
                className={i === currentIndex ? "active" : ""}
                onClick={() => openZoom(i)}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}

            {hasMultipleImages && (
              <div className="gallery-nav">
                <button className="gallery-btn" onClick={prevImage}>←</button>
                <button className="gallery-btn" onClick={nextImage}>→</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isZoomed && (
        <div className="lightbox" onClick={closeZoom}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeZoom}>×</button>

            <button className="lightbox-nav left" onClick={() => navigateZoom("prev")}>←</button>

            <img
              src={images[zoomedIndex]}
              alt={`${title} zoomed`}
              className="zoomed-image"
            />

            <button className="lightbox-nav right" onClick={() => navigateZoom("next")}>→</button>

            <div className="lightbox-caption">
              {title} ({zoomedIndex + 1} / {images.length})
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(AttractionDetail);

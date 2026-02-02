import "./AttractionDetail.css";
// ❌ No useState / useEffect / useCallback here anymore
import RoomGallery from "../../components/RoomGallery";

function AttractionDetail({
  title,
  images = [],
  about,
  distance,
  travelTime,
  reachList = [],
  mapQuery,
}) {
  return (
    <div className="attractionDetail">
      <div className="detail-layout">

        {/* LEFT COLUMN → Text + info */}
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

        {/* RIGHT COLUMN → Only gallery now */}
        <div className="right-column">

          {/* ✅ This replaces ALL your old gallery + zoom + arrows code */}
          <RoomGallery images={images} title={title} />

        </div>
      </div>
    </div>
  );
}

export default AttractionDetail;

// src/components/RoomDetail.jsx
import RoomGallery from '../../components/RoomGallery';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import { Link } from 'react-router-dom';

export default function RoomDetail({
  title,
  description,
  images,
  features,
  // price,                                        // if wanted to show price then use this
  // priceNote = '(includes breakfast)',
  className = '',
  // New optional props for before/after slider
  beforeSrc,
  afterSrc,
  beforeAlt = "Room before improvements",
  afterAlt = "Room after improvements",
  sliderTitle = "Room Before & After",
}) {
  return (
    <div className={`roomDetailsContainer ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>

      <RoomGallery images={images} />

      <div className="details">
        <h2>Features</h2>
        <ul>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        <p>
          <strong>Contact:</strong> 9421146213 / 9404499370
        </p>
      </div>

      {/* Conditionally render the slider only if both images are provided */}
      {beforeSrc && afterSrc && (
        <BeforeAfterSlider
          beforeSrc={beforeSrc}
          afterSrc={afterSrc}
          beforeAlt={beforeAlt}
          afterAlt={afterAlt}
          title={sliderTitle}
        />
      )}

      {/* <Link to="/booking" className="bookButton">
        Book Now
      </Link> */}
    </div>
  );
}
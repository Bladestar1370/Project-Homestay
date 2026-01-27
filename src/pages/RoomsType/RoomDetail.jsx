// src/components/RoomDetail.jsx
import RoomGallery from '../../components/RoomGallery';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import { Link } from 'react-router-dom'; // if using react-router


export default function RoomDetail({
  title,
  description,
  images,
  features,
  price,
  priceNote = '(includes breakfast)',
  className = '',
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
          <strong>Price:</strong> ₹{price.toLocaleString()} / night {priceNote}
        </p>
      </div>

      <BeforeAfterSlider />

      <Link to="/booking" className="bookButton">
        Book Now
      </Link>
    </div>
  );
}
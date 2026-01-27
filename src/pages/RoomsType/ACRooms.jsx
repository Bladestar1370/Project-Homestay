// src/pages/ACRooms.jsx
import RoomDetail from '../RoomsType/RoomDetail';
import './Rooms.css';


const acImages = [
  { src: '/images/101 after.png', alt: 'AC Deluxe Room – Queen Bed' },
  { src: '/images/101 before.jpg', alt: 'AC Deluxe Room – Modern Bathroom' },
  { src: '/images/103.jpg', alt: 'AC Deluxe Room – Balcony View' },
  { src: '/images/ac-room-interior.jpg', alt: 'AC Deluxe Room – Spacious Interior' },
  { src: '/images/ac-room-tv.jpg', alt: 'AC Deluxe Room – TV & Work Desk' },
];

const acFeatures = [
  'Air Conditioning',
  'Queen-size bed',
  'Attached bathroom with hot water',
  'Free Wi-Fi',
  'Balcony view (select rooms)',
];

function ACRooms() {
  return (
    <RoomDetail
      title="AC Rooms (Deluxe)"
      description="Our AC rooms offer premium comfort with air conditioning, spacious layout, and modern amenities. Perfect for a relaxing stay in Devgad's tropical climate."
      images={acImages}
      features={acFeatures}
      price={4000}
      className="ac-room-detail" // optional – for specific styling
    />
  );
}

export default ACRooms;
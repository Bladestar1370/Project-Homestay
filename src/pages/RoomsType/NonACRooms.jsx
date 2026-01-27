// src/pages/NonACRooms.jsx
import RoomDetail from '../RoomsType/RoomDetail';
import './Rooms.css';

const nonAcImages = [
  { src: '/images/102 after.png', alt: 'Non-AC Room – Comfortable Double Bed' },
  { src: '/images/102 before.jpg', alt: 'Non-AC Room – Natural Breeze Window' },
  { src: '/images/non-ac-fan.jpg', alt: 'Non-AC Room – Ceiling Fan' },
  { src: '/images/non-ac-interior.jpg', alt: 'Non-AC Room – Clean Interior' },
];

const nonAcFeatures = [
  'Ceiling fan',
  'Double bed',
  'Attached bathroom',
  'Free Wi-Fi',
  'Window views',
];

function NonACRooms() {
  return (
    <RoomDetail
      title="Non-AC Rooms (Standard)"
      description="Our Non-AC rooms provide affordable, clean stays with natural breeze and essential amenities. Ideal for budget travelers enjoying Devgad's fresh air."
      images={nonAcImages}
      features={nonAcFeatures}
      price={2500}
      className="non-ac-room-detail" // optional
    />
  );
}

export default NonACRooms;
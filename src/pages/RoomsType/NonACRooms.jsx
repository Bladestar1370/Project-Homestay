// src/pages/NonACRooms.jsx
import RoomDetail from '../RoomsType/RoomDetail';
import nonac102room1 from '../../assets/rooms/nonac/102room1.webp';
import nonac101room2 from '../../assets/rooms/nonac/102room2.webp';
import nonacBefore  from '../../assets/beforeAfter/102-before.webp';
import nonacAfter  from '../../assets/beforeAfter/102-after.webp';
import './Rooms.css';

const nonAcImages = [
  { src: nonac102room1, alt: 'Non-AC Room – Comfortable Double Bed' },
  { src: nonac101room2, alt: 'Non-AC Room – Natural Breeze Window' },
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
      className="non-ac-room-detail"
      beforeSrc= {nonacBefore}
      afterSrc= {nonacAfter}
      beforeAlt="Non-AC Room before improvements"
      afterAlt="Non-AC Room after cleaning & setup"
      sliderTitle="Non-AC Room Transformation"
    />
  );
}

export default NonACRooms;
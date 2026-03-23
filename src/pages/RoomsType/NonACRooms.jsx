// src/pages/NonACRooms.jsx
import RoomDetail from '../RoomsType/RoomDetail';
import nonac102room1 from '../../assets/rooms/nonac/102room1.webp';
import nonac101room2 from '../../assets/rooms/nonac/102room2.webp';
import nonac101room3 from '../../assets/rooms/nonac/102room3.webp';
import nonac101room4 from '../../assets/rooms/nonac/102room4.webp';
import nonac101room5 from '../../assets/rooms/nonac/102room5.webp';
import nonacBefore from '../../assets/beforeAfter/102-before.webp';
import nonacAfter from '../../assets/beforeAfter/102-after.webp';
import './Rooms.css';

const nonAcImages = [
  { src: nonac102room1, alt: 'Non-AC Room' },
  { src: nonac101room2, alt: 'Non-AC Room' },
  { src: nonac101room3, alt: 'Non-AC Room' },
  { src: nonac101room4, alt: 'Non-AC Room' },
  { src: nonac101room5, alt: 'Non-AC Room' }
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
      // price={2500}                     // if wanted to show price then use this
      className="non-ac-room-detail"
      beforeSrc={nonacBefore}
      afterSrc={nonacAfter}
      beforeAlt="Non-AC Room before improvements"
      afterAlt="Non-AC Room after cleaning & setup"
      sliderTitle="Non-AC Room Transformation"
    />
  );
}

export default NonACRooms;
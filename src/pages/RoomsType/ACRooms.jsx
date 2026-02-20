import RoomDetail from '../RoomsType/RoomDetail';
import ac101room1 from '../../assets/rooms/ac/101room1.webp';
import ac101room2 from '../../assets/rooms/ac/101room2.webp';
import ac103room1 from '../../assets/rooms/ac/103room1.webp';
import acBefore from '../../assets/beforeAfter/101-before.webp';
import acAfter from '../../assets/beforeAfter/101-after.webp';
import './Rooms.css';

const acImages = [
  { src: ac101room1, alt: 'AC Deluxe Room - Queen Bed' },
  { src: ac101room2, alt: 'AC Deluxe Room - Modern Bathroom' },
  { src: ac103room1, alt: 'AC Deluxe Room - Balcony View' },
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
      // price={4000}                   // if wanted to show price then use this
      className="ac-room-detail"
      beforeSrc={acBefore}
      afterSrc={acAfter}
      beforeAlt="AC Deluxe Room before renovation"
      afterAlt="AC Deluxe Room after renovation"
      sliderTitle="AC Deluxe Room Transformation"
    />
  );
}

export default ACRooms;

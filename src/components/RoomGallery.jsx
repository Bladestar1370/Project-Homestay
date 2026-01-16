// src/components/RoomGallery.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './RoomGallery.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function RoomGallery({ images }) {
  return (
    <div className="room-gallery-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="slider-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RoomGallery;
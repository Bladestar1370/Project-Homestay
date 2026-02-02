// src/components/RoomGallery.jsx
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './RoomGallery.css';


function RoomGallery({ images = [], title = '' }) {
  const [isOpen, setIsOpen] = useState(false);      // 🔍 Lightbox open/close
  const [currentIndex, setCurrentIndex] = useState(0); // 🖼️ Active image

  // 👉 Open lightbox at clicked image
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // ❌ Close lightbox
  const closeLightbox = () => setIsOpen(false);

  // ⬅️ Previous image
  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // ➡️ Next image
  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // 🔒 Lock scroll + ⌨️ Keyboard navigation
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length]);

  if (!images.length) return null;

  return (
    <>
      {/* 🌀 Swiper Carousel */}
      <div className="room-gallery-slider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={images.length > 1}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.alt || `${title} ${index + 1}`}
                className="slider-image"
                onClick={() => openLightbox(index)}
                style={{ cursor: 'zoom-in' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🔍 Lightbox */}
      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLightbox}>×</button>

            <button className="lightbox-nav left" onClick={prevImage}>←</button>

            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt || title}
              className="lightbox-image"
            />

            <button className="lightbox-nav right" onClick={nextImage}>→</button>

            <div className="lightbox-caption">
              {title || images[currentIndex].alt} ({currentIndex + 1} / {images.length})
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RoomGallery;

// src/components/BeforeAfterSlider.jsx
import { useState, useRef, useEffect } from 'react';
import beforeImg from '../assets/before.jpg';
import afterImg from '../assets/after.jpg';
import './BeforeAfterSlider.css';

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50); // 0–100%
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));

    setPosition(percent);
  };

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = () => {
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  // Optional: set initial position on mount
  useEffect(() => {
    // You can also add resize listener if you want to recalculate on window resize
  }, []);

  return (
    <div className="sliderContainer">
      <h3>Room Before & After</h3>

      <div
        className="img-wrapper"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <img
          src={beforeImg}
          alt="Empty Room – Before"
          className="img before"
        />
        <img
          src={afterImg}
          alt="Prepared Room – After"
          className="img after"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        {/* Vertical divider line + handle */}
        <div
          className="slider-handle"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <div className="handle-circle">
            <span>↔</span>
          </div>
        </div>
      </div>

      <div className="labels">
        <span>Empty Room</span>
        <span>Prepared Room</span>
      </div>

      {/* Hidden range input for accessibility (screen readers) */}
      <label className="sr-only" htmlFor="before-after-slider">
        Compare empty and prepared room (slide to reveal)
      </label>
      <input
        id="before-after-slider"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="sr-only"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={position}
      />
    </div>
  );
}

export default BeforeAfterSlider;
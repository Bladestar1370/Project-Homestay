// src/components/BeforeAfterSlider.jsx
import { useState, useRef, useEffect } from 'react';
import './BeforeAfterSlider.css';

function BeforeAfterSlider({ 
  beforeSrc, 
  afterSrc, 
  beforeAlt = "Room before renovation", 
  afterAlt = "Room after renovation",
  title = "Room Before & After"   // optional – you can override the <h3>
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  };

  // Mouse & touch handlers remain the same...
  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => {
    if (e.touches.length > 0) handleMove(e.touches[0].clientX);
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

  useEffect(() => {
    // Optional resize listener can be added here later
  }, []);

  return (
    <div className="sliderContainer">
      <h3>{title}</h3>

      <div
        className="img-wrapper"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="img before"
          loading="lazy"
          width="800"           // ← add explicit dimensions (helps CLS + performance)
          height="600"
        />
        <img
          src={afterSrc}
          alt={afterAlt}
          className="img after"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          loading="lazy"
          width="800"
          height="600"
        />

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
        <span>Before</span>
        <span>After</span>
      </div>

      {/* Accessibility range input */}
      <label className="sr-only" htmlFor="before-after-slider">
        Compare before and after room (slide to reveal)
      </label>
      <input
        id="before-after-slider"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="sr-only"
      />
    </div>
  );
}

export default BeforeAfterSlider;
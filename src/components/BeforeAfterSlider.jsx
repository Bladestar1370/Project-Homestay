// src/components/BeforeAfterSlider.jsx
import { useState } from 'react';
import beforeImg from '../assets/before.jpg';
import afterImg from '../assets/after.jpg';
import './BeforeAfterSlider.css';

function BeforeAfterSlider() {
  const [value, setValue] = useState(0);

  return (
    <div className="sliderContainer">
      <h3>Room Before & After</h3>
      <input 
        type="range" 
        min="0" 
        max="1" 
        step="1" 
        value={value} 
        onChange={(e) => setValue(Number(e.target.value))} 
        className="sliderInput"
      />
      <br />
      <img 
        src={value === 0 ? beforeImg : afterImg} 
        alt="Room" 
        className="roomImage"
      />
      <p className="label">⬅ Empty Room | Prepared Room ➡</p>
    </div>
  );
}

export default BeforeAfterSlider;
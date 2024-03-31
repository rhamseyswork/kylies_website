import React, { useState } from 'react';
import slides from './assets/Slide_Show_Index';
import './assets/Slide_Show.css';

const Slide_Show = ({ leftArrowIcon, rightArrowIcon, currIcon, non_currIcon}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const arrow = (arrow_count) => {
    setCurrentSlide((currentSlide + arrow_count + slides.length) % slides.length);
  };

  return (
    <div className="slideshow-Module">
      <div className="slideshow-Module-Movement">
        <button className="slideshow-Module-Curr-Mod" onClick={() => arrow(-1)}>
          <img src={leftArrowIcon} alt="Left Arrow" />
        </button>
        <div className="slideshow-Module-Image">
          <img src={slides[currentSlide]} alt="SlideShowWheel" />
        </div>
        <button className="slideshow-Module-Curr-Mod" onClick={() => arrow(1)}>  
          <img src={rightArrowIcon} alt="Right Arrow" />
        </button>
      </div>
      <div className="slideshow-Module-Curr-Sl">{slides.slice(0, 5).map((slide, index) => (
        <div key={index} className="slide-item">
          <img src={currentSlide == index ? currIcon : non_currIcon} alt="Current Slide Show Index" />
        </div>
        ))}
      </div>
    </div>
  );
};

export default Slide_Show;

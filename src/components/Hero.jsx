import React, { useState } from 'react';
import './Hero.css';
import bg1 from '../assets/bg.jpeg';
import bg2 from '../assets/bg1.jpeg';

const Hero = () => {
  const [slide, setSlide] = useState(1);

  const changeSlide = () => {
    setSlide(slide === 1 ? 2 : 1);
  };

  return (
    <section
      className={`hero-container ${slide === 2 ? 'right-content' : ''}`}
      style={{
        backgroundImage: `url(${slide === 1 ? bg1 : bg2})`
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">

      
          <h1 className="hero-title">
            {slide === 1
              ? "Where Creativity Meets Professional Excellence"
              : "Where Creativity Meets Professional Excellence"}
          </h1>

          <p className="hero-description">
            {slide === 1
              ? "Creative Lines Academy is a leading Interior Designing institute, shaping future design professionals through premium education, expert mentorship, and real-world exposure."
              : "Creative Lines Academy is a leading Interior Designing institute, shaping future design professionals through premium education, expert mentorship, and real-world exposure"}
          </p>

      
          <button className="slide-btn" onClick={changeSlide}>
            ➜
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;

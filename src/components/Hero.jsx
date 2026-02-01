import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-overlay'>
        <div className='hero-content'>
            <h1 className='hero-title'>
                "Where Creativity Meets Professional Excellence"
            </h1>
            <p className='hero-description'>
                Creative Lines Academy is a leading Interior Designing institute, 
                shaping future design professionals through premium education, 
                expert mentorship, and real-world exposure.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

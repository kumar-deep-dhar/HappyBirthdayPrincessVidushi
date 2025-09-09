import React from 'react';

const Hero = ({ countdown, onScrollToSection }) => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Happy Birthday Princess V! 🎂✨</h1>
        <div className="hero-subtitle">A Celebration of Love & Joy</div>
        <p>
          On this magical day, we celebrate the beautiful soul that you are. 
          Your kindness, grace, and radiant spirit bring light to everyone around you. 
          May your special day be filled with endless joy, laughter, and unforgettable moments.
        </p>
        
        {/* Countdown Timer */}
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-number" id="days">{countdown.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number" id="hours">{countdown.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number" id="minutes">{countdown.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number" id="seconds">{countdown.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button 
            className="nav-btn" 
            onClick={() => onScrollToSection('gallery')}
          >
            📸 View Memories
          </button>
          <button 
            className="nav-btn" 
            onClick={() => onScrollToSection('birthday-wish')}
          >
            💝 Birthday Wishes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

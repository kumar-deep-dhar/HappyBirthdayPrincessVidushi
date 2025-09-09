import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
//import Interactive from './components/Interactive';
import BirthdayWishSection from './components/BirthdayWishSection';
import Footer from './components/Footer';
import Fireworks from './components/Fireworks';
import Balloons from './components/Balloons';
import Confetti from './components/Confetti';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  // Birthday date: September 11, 2025
  const birthdayDate = new Date('2025-09-11T00:00:00').getTime();

  useEffect(() => {
    // Hide loading screen after page loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Countdown timer
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = birthdayDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({
          days: days.toString().padStart(2, '0'),
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0')
        });
      } else {
        // Birthday has arrived!
        setCountdown({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        });
        
        // Show birthday celebration
        showBirthdayCelebration();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [birthdayDate]);

  const showBirthdayCelebration = () => {
    setShowFireworks(true);
    setShowBalloons(true);
    setShowConfetti(true);

    // Hide effects after some time
    setTimeout(() => setShowFireworks(false), 5000);
    setTimeout(() => setShowBalloons(false), 8000);
    setTimeout(() => setShowConfetti(false), 10000);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      {/* Special Effects */}
      {showFireworks && <Fireworks />}
      {showBalloons && <Balloons />}
      {showConfetti && <Confetti />}

      {/* Main Content */}
      <Hero countdown={countdown} onScrollToSection={scrollToSection} />
      <Gallery />
      <BirthdayWishSection />
      <Footer />
    </div>
  );
}

export default App;

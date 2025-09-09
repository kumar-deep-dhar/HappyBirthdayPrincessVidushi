import React, { useEffect, useState } from 'react';

const Confetti = () => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    // Create confetti pieces with delays
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const piece = {
          id: i,
          x: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)]
        };
        setConfetti(prev => [...prev, piece]);
      }, i * 50);
    }

    // Clean up confetti after animation
    const cleanup = setTimeout(() => {
      setConfetti([]);
    }, 10000);

    return () => clearTimeout(cleanup);
  }, []);

  return (
    <div className="confetti-container">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            position: 'absolute',
            left: `${piece.x}%`,
            top: '-10px',
            width: '10px',
            height: '10px',
            background: piece.color,
            animation: 'confetti-fall 5s linear forwards'
          }}
        />
      ))}
      
      <style jsx>{`
        .confetti-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9996;
        }
        
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Confetti;

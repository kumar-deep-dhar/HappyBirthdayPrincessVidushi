import React, { useEffect, useState } from 'react';

const Balloons = () => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    // Create balloons with delays
    //const newBalloons = [];
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        const balloon = {
          id: i,
          x: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)]
        };
        setBalloons(prev => [...prev, balloon]);
      }, i * 200);
    }

    // Clean up balloons after animation
    const cleanup = setTimeout(() => {
      setBalloons([]);
    }, 8000);

    return () => clearTimeout(cleanup);
  }, []);

  return (
    <div className="balloon-container">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="balloon"
          style={{
            position: 'absolute',
            left: `${balloon.x}%`,
            bottom: '-50px',
            width: '40px',
            height: '50px',
            background: balloon.color,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            animation: 'float-up 4s ease-out forwards'
          }}
        >
          {/* Balloon string */}
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              width: '1px',
              height: '30px',
              background: '#333',
              transform: 'translateX(-50%)'
            }}
          />
        </div>
      ))}
      
      <style jsx>{`
        .balloon-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9998;
        }
        
        @keyframes float-up {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-100vh) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Balloons;

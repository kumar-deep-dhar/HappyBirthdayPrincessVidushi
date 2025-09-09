import React, { useEffect, useState } from 'react';

const Fireworks = () => {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    // Create multiple fireworks
    const newFireworks = [];
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const firework = {
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          particles: []
        };
        
        // Create explosion particles
        for (let j = 0; j < 20; j++) {
          const angle = (j / 20) * 2 * Math.PI;
          const velocity = 50 + Math.random() * 50;
          firework.particles.push({
            id: j,
            angle,
            velocity,
            x: 0,
            y: 0
          });
        }
        
        setFireworks(prev => [...prev, firework]);
      }, i * 300);
    }

    // Clean up fireworks after animation
    const cleanup = setTimeout(() => {
      setFireworks([]);
    }, 5000);

    return () => clearTimeout(cleanup);
  }, []);

  return (
    <div className="fireworks-container">
      {fireworks.map((firework) => (
        <div key={firework.id} className="firework">
          {/* Main firework */}
          <div 
            className="firework-main"
            style={{
              position: 'absolute',
              left: `${firework.x}%`,
              top: `${firework.y}%`,
              width: '4px',
              height: '4px',
              background: firework.color,
              borderRadius: '50%',
              animation: 'explode 1s ease-out forwards'
            }}
          />
          
          {/* Explosion particles */}
          {firework.particles.map((particle) => (
            <div
              key={particle.id}
              className="firework-particle"
              style={{
                position: 'absolute',
                left: `${firework.x}%`,
                top: `${firework.y}%`,
                width: '2px',
                height: '2px',
                background: firework.color,
                borderRadius: '50%',
                animation: 'particle-explode 1s ease-out forwards',
                '--angle': particle.angle,
                '--velocity': particle.velocity
              }}
            />
          ))}
        </div>
      ))}
      
      <style jsx>{`
        .fireworks-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
        }
        
        @keyframes explode {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0); opacity: 0; }
        }
        
        @keyframes particle-explode {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(
              calc(cos(var(--angle)) * var(--velocity) * 1px),
              calc(sin(var(--angle)) * var(--velocity) * 1px)
            ) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Fireworks;

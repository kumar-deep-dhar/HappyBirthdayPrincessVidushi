import React, { useEffect } from 'react';
import './BirthdayWish.css';

const BirthdayWish = ({ onClose }) => {
  useEffect(() => {
    // Prevent body scrolling when modal is open
    document.body.classList.add('modal-open');
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    // Cleanup function
    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="birthday-wish" onClick={onClose}>
      <div className="wish-content" onClick={(e) => e.stopPropagation()}>
        <div className="wish-header">
          <div className="wish-icon">🎂✨</div>
          <h2>Happy Birthday Princess V!</h2>
          <div className="wish-icon">🎂✨</div>
        </div>
        
        <div className="wish-message">
          <p>
            On this magnificent day, as you celebrate another beautiful year of life, 
            I want you to know how truly special you are. Your presence in this world 
            is a gift that brings light, love, and joy to everyone around you.
          </p>
          
          <p>
            Your kindness knows no bounds, your grace is unmatched, and your beautiful 
            spirit touches hearts in ways you may never fully realize. You have the 
            incredible ability to make people feel seen, heard, and loved.
          </p>
          
          <p>
            As you blow out your candles today, may all your dreams take flight. 
            May this year bring you endless opportunities, beautiful adventures, 
            and all the happiness your heart desires. You deserve every wonderful 
            thing that life has to offer.
          </p>
          
          <p>
            Remember, you are stronger than you know, more beautiful than you see, 
            and more loved than you could ever imagine. Your journey is just beginning, 
            and the world is waiting to see all the amazing things you will accomplish.
          </p>
          
          <p>
            Every day with you is a blessing, every smile you share is a ray of sunshine, 
            and every moment you spend with others makes their world a better place. 
            Your compassion, your strength, and your beautiful heart inspire everyone around you.
          </p>
          
          <p>
            May this birthday be filled with laughter, love, and countless beautiful memories. 
            May you feel cherished, celebrated, and surrounded by the love you so freely give to others. 
            You are a true princess in every sense of the word.
          </p>
          
          <p>
            Your laughter is like music to the soul, your smile brightens even the darkest days, 
            and your love has the power to heal hearts and mend broken spirits. 
            You are a beacon of hope and joy in this world.
          </p>
          
          <p>
            As you grow another year older, may you also grow in wisdom, strength, and grace. 
            May you continue to inspire others with your beautiful spirit and may your light 
            shine brighter with each passing day.
          </p>
          
          <p>
            You are not just celebrating another birthday, you are celebrating the incredible 
            person you have become and the amazing journey that lies ahead. 
            The world is a better place because you are in it.
          </p>
          
          <p className="wish-love">
            Not for  long ago, we didn't know each other... 
          we were just two souls  walking without seeing one another
          and then one day without any warning, we found ourselves on the same path,
          they say some encounter change everything, and this is one of them. You make my life better,
          and for that, I'm grateful to you... ❤️
            With infinite love, admiration, and best wishes for your special day 💖✨

          </p>
        </div>
        
        <button className="wish-close-btn" onClick={onClose}>
          💝 Close with Love
        </button>
        
        <div className="scroll-hint">
          <span>↓ Scroll for more love ↓</span>
        </div>
      </div>
    </div>
  );
};

export default BirthdayWish;

import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const baseUrl = process.env.PUBLIC_URL || '';

  const images = [
    { 
      src: `${baseUrl}/V1.jpeg`, 
      alt: 'Princess V - Beautiful Moment 1',
      title: 'Radiant Smile',
      description: 'Your beautiful smile lights up every room you enter. Pure joy captured in a moment.'
    },
    { 
      src: `${baseUrl}/V2.jpeg`, 
      alt: 'Princess V - Beautiful Moment 2',
      title: 'Graceful Elegance',
      description: 'Elegance personified. Your natural grace and poise are truly inspiring.'
    },
    { 
      src: `${baseUrl}/V3.jpeg`, 
      alt: 'Princess V - Beautiful Moment 3',
      title: 'Adventure Awaits',
      description: 'Exploring the world with wonder and curiosity. Every journey is an adventure with you.'
    },
    { 
      src: `${baseUrl}/V4.jpeg`, 
      alt: 'Princess V - Beautiful Moment 4',
      title: 'Sweet Moments',
      description: 'Cherished memories that warm the heart. Your sweetness touches everyone around you.'
    },
    { 
      src: `${baseUrl}/V5.jpeg`, 
      alt: 'Princess V - Beautiful Moment 5',
      title: 'Pure Joy',
      description: 'Unbridled happiness and pure joy. Your laughter is the most beautiful music.'
    },
    { 
      src: `${baseUrl}/V6.jpeg`, 
      alt: 'Princess V - Beautiful Moment 6',
      title: 'Dreams & Wishes',
      description: 'Dreaming big and reaching for the stars. Your dreams inspire us all.'
    },
    { 
      src: `${baseUrl}/V7.jpeg`, 
      alt: 'Princess V - Beautiful Moment 7',
      title: 'Friendship & Love',
      description: 'Surrounded by love and friendship. You bring people together with your warmth.'
    },
    { 
      src: `${baseUrl}/V8.jpeg`, 
      alt: 'Princess V - Beautiful Moment 8',
      title: 'Beautiful Soul',
      description: 'Your inner beauty shines through in every photograph. A soul as beautiful as your smile.'
    },
    { 
      src: `${baseUrl}/V9.jpeg`, 
      alt: 'Princess V - Beautiful Moment 9',
      title: 'Growing Up Beautiful',
      description: 'Every year brings new beauty and wisdom. You grow more amazing with each passing day.'
    },
    { 
      src: `${baseUrl}/V10.jpeg`, 
      alt: 'Princess V - Beautiful Moment 10',
      title: 'Princess of Hearts',
      description: 'A true princess who rules with kindness and love. You have captured all our hearts.'
    }
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedImage]);

  return (
    <section className="gallery" id="gallery">
      <h2>Princess V's Beautiful Moments ✨</h2>
      <div className="gallery-subtitle">
        A collection of precious memories that capture your journey, your beauty, and the love you bring to this world
      </div>
      
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
            <div className="gallery-image-container">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="gallery-image"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.target.style.display = 'none';
                  const placeholder = document.createElement('div');
                  placeholder.className = 'gallery-placeholder';
                  placeholder.innerHTML = `
                    <div class="placeholder-icon">📸</div>
                    <h3>${image.title}</h3>
                    <p>${image.description}</p>
                    <div class="placeholder-overlay">
                      <span>Image not found</span>
                    </div>
                  `;
                  e.target.parentNode.appendChild(placeholder);
                }}
              />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="lightbox-image"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.target.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.className = 'lightbox-placeholder';
                placeholder.innerHTML = `
                  <div class="lightbox-placeholder-icon">📸</div>
                  <h2>${selectedImage.title}</h2>
                  <p>${selectedImage.description}</p>
                  <div class="lightbox-placeholder-message">
                    This is where Princess V's beautiful photo would be displayed
                  </div>
                `;
                e.target.parentNode.appendChild(placeholder);
              }}
            />
            <div className="lightbox-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
            <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
            <button className="lightbox-prev" onClick={prevImage}>&lt;</button>
            <button className="lightbox-next" onClick={nextImage}>&gt;</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

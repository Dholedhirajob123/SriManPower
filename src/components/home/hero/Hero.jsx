import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Hero.css';

const HousekeepingHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const slides = [
    {
      id: 1,
      title: "Welcome",
      subtitle: "Sri Man Power",
      description: "We are seeking a reliable and detail-oriented Housekeeper to maintain a clean, sanitary, and orderly environment.",
      image: "https://plus.unsplash.com/premium_photo-1661662917928-b1a42a08d094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsZWFuaW5nfGVufDB8fDB8fHww"
    },
    {
      id: 2,
      title: "Securing Today for a Safer Tomorrow",
      subtitle: "Security Guard Service",
      description: "Our services are most diversified and are availed by clients in both commercial and non-commercial sectors.",
      image: "https://images.pexels.com/photos/4099264/pexels-photo-4099264.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Your Partner in Cleanliness",
      subtitle: "Brilliant Manpower Solution",
      description: "The role involves performing a variety of cleaning tasks to maintain the hygiene and appearance of assigned areas.",
      image: "https://images.pexels.com/photos/8901934/pexels-photo-8901934.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            aria-hidden={index !== currentSlide}
            style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
          >
            <div 
              className="hero-image-background" 
              style={{ backgroundImage: `url(${slide.image})` }}
              role="img"
              aria-label={slide.title}
            />
            <div className="hero-overlay" />
            <div className="hero-content">
              <h1 style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 700 }}>{slide.title}</h1>
              <h2 style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500 }}>{slide.subtitle}</h2>
              <p style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 400 }}>{slide.description}</p>
            </div>
          </div>
        ))}
        
        {!isMobile && (
          <>
            <button 
              className="slider-nav prev" 
              onClick={prevSlide}
              aria-label="Previous slide"
              style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
            >
              <FaChevronLeft />
            </button>
            <button 
              className="slider-nav next" 
              onClick={nextSlide}
              aria-label="Next slide"
              style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
            >
              <FaChevronRight />
            </button>
          </>
        )}
        
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button 
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HousekeepingHero;
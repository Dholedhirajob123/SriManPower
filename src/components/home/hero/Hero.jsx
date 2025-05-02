import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Hero.css';

const HousekeepingHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Reliable Cleaning Every Time",
      subtitle:"House Keeping Servics",
      description: "We are seeking a reliable and detail-oriented Housekeeper to maintain a clean, sanitary, and orderly environment.",
      buttons: [
        // { text: "Book Now", variant: "primary" },
        // { text: "View Pricing", variant: "secondary" },
        // { text: "Learn More", variant: "outline" }
      ],
      image: "https://plus.unsplash.com/premium_photo-1661662917928-b1a42a08d094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsZWFuaW5nfGVufDB8fDB8fHww"
    },
    {
      id: 2,
      title: "Securing Today for a Safer Tommorrow",
      subtitle: "Security Gaurd Service",
      description: "Our services are most diversified and are availed by clients in both commercial and non-commercial sectors.",
      buttons: [
        // { text: "Our Green Products", variant: "primary" },
        // { text: "Sustainability", variant: "secondary" }
      ],
      image: "https://images.pexels.com/photos/4099264/pexels-photo-4099264.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Your Patner in Cleanliness",
      subtitle: "Brilliant Manpower Solution",
      description: "The role involves performing a variety of cleaning tasks to maintain the hygiene and appearance of assigned areas.",
      buttons: [
        // { text: "View Plans", variant: "primary" },
        // { text: "Get a Quote", variant: "secondary" },
        // { text: "FAQ", variant: "outline" }
      ],
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
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div 
              className="hero-image-background" 
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="hero-overlay" />
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <h2>{slide.subtitle}</h2>
              <p>{slide.description}</p>
              <div className="hero-buttons">
                {slide.buttons.map((button, i) => (
                  <button 
                    key={i}
                    className={`hero-button ${button.variant}`}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        <button className="slider-nav prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="slider-nav next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
        
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span 
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HousekeepingHero;
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
      image: "https://images.unsplash.com/photo-1742535035997-a177218ede36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mobileImage: "https://images.unsplash.com/photo-1742535035997-a177218ede36?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Securing Today for a Safer Tomorrow",
      subtitle: "Security Guard Service",
      description: "Our services are most diversified and are availed by clients in both commercial and non-commercial sectors.",
      image: "https://plus.unsplash.com/premium_photo-1682125948844-e2dc8996b0f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mobileImage: "https://plus.unsplash.com/premium_photo-1682125948844-e2dc8996b0f0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Your Partner in Cleanliness",
      subtitle: "Brilliant Manpower Solution",
      description: "The role involves performing a variety of cleaning tasks to maintain the hygiene and appearance of assigned areas.",
      image: "https://media.istockphoto.com/id/1365382448/photo/smilling-young-indian-engineer-or-repairman-showing-thumbs-up-sign-or-hand-gesture-while.webp?a=1&b=1&s=612x612&w=0&k=20&c=f6jdpvziBSdCKmRqmgsTqCNNG_TtMy11NEi_6rKsXwM=",
      mobileImage: "https://media.istockphoto.com/id/1365382448/photo/smilling-young-indian-engineer-or-repairman-showing-thumbs-up-sign-or-hand-gesture-while.webp?a=1&b=1&s=612x612&w=0&k=20&c=f6jdpvziBSdCKmRqmgsTqCNNG_TtMy11NEi_6rKsXwM="
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
    <section className="hero-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            aria-hidden={index !== currentSlide}
          >
            <div 
              className="hero-image-background" 
              style={{ 
                backgroundImage: `url(${isMobile ? slide.mobileImage || slide.image : slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              role="img"
              aria-label={slide.title}
            />
            <div className="hero-overlay" />
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <h2 className="hero-subtitle">{slide.subtitle}</h2>
              <p className="hero-description">{slide.description}</p>
              {/* <button className="hero-cta">Learn More</button> */}
            </div>
          </div>
        ))}
        
        <button 
          className={`slider-nav prev ${isMobile ? 'mobile-nav' : ''}`} 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <FaChevronLeft className="nav-arrow-icon" size={isMobile ? 30 : 50} />
        </button>
        <button 
          className={`slider-nav next ${isMobile ? 'mobile-nav' : ''}`} 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <FaChevronRight className="nav-arrow-icon" size={isMobile ? 30 : 50} />
        </button>
        
        {/* <div className="slider-dots">
          {slides.map((_, index) => (
            <button 
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default HousekeepingHero;
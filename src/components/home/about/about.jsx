import React from "react";
import "./about.css";
import aboutImg from "../../assests/img1.jpg";
import service1 from "../../assests/img2.jpg";
import service2 from "../../assests/pic 1.jpg";

const About = () => {
  return (
    <section className="about-housekeeping">
      {/* About Us Header Section */}
      <div className="about-us-header">
        <h1>About Us</h1>
        {/* <div className="heading-line"></div> */}
        <p className="subtitle">Professional Cleaning Services</p>
      </div>

      <div className="about-container">
        {/* Text Content - Now appears first on mobile */}
        <div className="about-text">
          <h2>About Our Housekeeping Services</h2>
          <p>
            We are <strong>Brilliant Man Power Solution</strong>, a trusted provider of 
            professional housekeeping and facility management services in Bangalore. 
            With a team of trained experts, we deliver spotless, hygienic, and 
            customized cleaning solutions for homes, offices, and industries.
          </p>
          
          <h3>Why Choose Us?</h3>
          <ul className="benefits-list">
            <li>
              <span className="check-icon">✓</span>
              <span>Experienced & background-verified staff</span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>Eco-friendly cleaning products</span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>24/7 emergency services</span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>Affordable monthly packages</span>
            </li>
          </ul>
        </div>

        {/* Main Image - Appears after text on mobile */}
        <div className="about-img-main">
          <img 
            src={aboutImg} 
            alt="Professional Housekeeping Team" 
            className="main-image"
          />
        </div>

        {/* Service Gallery - Moved outside the text container */}
        <div className="service-gallery">
          <div className="gallery-item">
            <img 
              src={service1} 
              alt="Office Cleaning Service" 
              className="gallery-image"
            />
            <div className="image-caption">Office Cleaning</div>
          </div>
          <div className="gallery-item">
            <img 
              src={service2} 
              alt="Home Deep Cleaning" 
              className="gallery-image"
            />
            <div className="image-caption">Home Cleaning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
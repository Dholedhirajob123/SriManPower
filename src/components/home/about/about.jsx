import React from "react";
import "./about.css"; // Custom CSS
import aboutImg from "../../assests/img1.jpg"; // Main image
import service1 from "../../assests/img2.jpg"; // Sub-image 1
import service2 from "../../assests/pic 1.jpg"; // Sub-image 2

const About = () => {
  return (
    <section className="about-housekeeping">
      {/* New About Us Title Section */}
      <div className="about-us-header">
        <h1>About Us</h1>
         <div className="heading-line"></div>
        <p className="subtitle">Professional Cleaning Services </p>
        <div className="header-divider"></div>
      </div>

      <div className="about-container">
        {/* Left: Text Content */}
        <div className="about-text">
          <h2>About Our Housekeeping Services</h2>
          <p>
            We are <strong>Brilliant Man Power Solution</strong>, a trusted provider of 
            professional housekeeping and facility management services in Bangalore. 
            With a team of trained experts, we deliver spotless, hygienic, and 
            customized cleaning solutions for homes, offices, and industries.
          </p>
          
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✅ Experienced & background-verified staff</li>
            <li>✅ Eco-friendly cleaning products</li>
            <li>✅ 24/7 emergency services</li>
            <li>✅ Affordable monthly packages</li>
          </ul>
             {/* Bottom: Service Gallery */}
      <div className="service-gallery">
        <img src={service1} alt="Office Cleaning Service" />
        <img src={service2} alt="Home Deep Cleaning" />
      </div>
        </div>

        {/* Right: Main Image */}
        <div className="about-img-main">
          <img 
            src={aboutImg} 
            alt="Professional Housekeeping Team" 
          />
        </div>
      </div>

   
    </section>
  );
};

export default About;
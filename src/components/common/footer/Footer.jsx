import React from "react";
import "./footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-box company-info">
            <div className="logo">
              <h1>Sri Man Power</h1>
              {/* <div className="headingline"></div> */}
              <p className="tagline">Your trusted manpower solution provider</p>
            </div>

            <div className="contact-info-container">
              <div className="contact-item">
                <div className="contact-icon-container">
                  <FaPhone className="contact-icon" />
                </div>
                <div className="contact-text">
                  <h3>Phone</h3>
                       <p>+1 (555) 123-4567</p>
                  <p>24/7 Emergency Service Available</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-container">
                  <FaEnvelope className="contact-icon" />
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <a href="mailto:info@srismanpower.com">info@cleaningservice.com</a><br />  
                 
                  <a href="mailto:support@srismanpower.com">quotes@cleaningservice.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-container">
                  <FaMapMarkerAlt className="contact-icon" />
                </div>
                <div className="contact-text">
                  <h3>Office Address</h3>
                  <address>
                  <p>Queens Rd, Shivaji Nagar</p>
                  <p> Bangalore, Karnataka 560001</p>
                  </address>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-container">
                  <FaClock className="contact-icon" />
                </div>
                <div className="contact-text">
                  <h3>Working Hours</h3>
                  <p>Monday-Saturday:10:00AM-7-:00PM</p>
                  {/* <p> 10:00 AM-2:00 PM</p> */}
                  <p>Sunday: Emergency calls only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Location */}
          <div className="footer-box map-box">
            <h1>Our Location</h1>
            {/* <div className="headingline"></div> */}
            <p className="tagline-location">Come visit us — we're closer than you think!</p>
            <div className="map-container">
              <iframe
                title="Sri Man Power Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715560064495!2d72.83260931537628!3d19.03398725822772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cee7a7f1c43d%3A0x3a7a8ef7e8a1a4e5!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                aria-hidden="false"
              ></iframe>
              <a 
                href="https://maps.google.com/maps?q=123+Business+Park,+Sector+22,+Mumbai" 
                className="map-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Sri Man Power. All Rights Reserved.</p>
            <p className="designer-credit">Designed by Dhiraj Dhole</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
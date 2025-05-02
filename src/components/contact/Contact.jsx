import React from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt ,FaBroom,  FaBuilding, FaHome, FaCalendarAlt } from 'react-icons/fa';

const Contact = () => {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const publicKey = "c51mRloZzcm3rJJ2a";
    const serviceId ="service_lz8ugom";
const templateId="template_1usvogw";

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  

  return (
    <section className="contact-housekeeping">
      {/* Hero Banner */}
     
      <div className="container">
        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Request a Quote or Inquiry</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
            
                
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
             
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                 
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Needed*</label>
                <select
                  id="service"
                  name="service"
                
                >
                  <option value="general">General Housekeeping</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="office">Office Cleaning</option>
                  <option value="move">Move In/Out Cleaning</option>
                  <option value="regular">Regular Maintenance</option>
                  <option value="other">Other Service</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                 
                  placeholder="Tell us about your specific needs..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit Request
              </button>
            </form>
          </div>

          {/* Services Categories */}
          <div className="services-categories">
            <h2>Our Services</h2>
            <div className="service-card">
              <div className="service-icon">
                <FaBroom />
              </div>
              <div className="service-content">
                <h3>House Main Services</h3>
                <p>Weekly or bi-weekly cleaning to maintain your space</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaHome />
              </div>
              <div className="service-content">
                <h3>Deep Cleaning</h3>
                <p>Thorough cleaning of every corner of your home</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaBuilding />
              </div>
              <div className="service-content">
                <h3>Office Cleaning</h3>
                <p>Professional cleaning for commercial spaces</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaCalendarAlt />
              </div>
              <div className="service-content">
                <h3>Special Occasions</h3>
                <p>Pre and post-event cleaning services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="contact-info-section">
          <div className="contact-info-card">
            <FaPhone className="info-icon" />
            <h3>Call Us</h3>
            <a href="tel:+919876543210">+91 98765 43210</a>
            <a href="tel:+912234567890">+91 22345 67890</a>
          </div>

          <div className="contact-info-card">
            <FaEnvelope className="info-icon" />
            <h3>Email Us</h3>
            <a href="mailto:info@housekeeping.com">info@housekeeping.com</a>
            <a href="mailto:support@housekeeping.com">support@housekeeping.com</a>
          </div>

          <div className="contact-info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Visit Us</h3>
            <address>
              123 Clean Street<br />
              Mumbai, Maharashtra 400001<br />
              India
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
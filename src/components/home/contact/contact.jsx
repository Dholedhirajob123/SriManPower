import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const publicKey = "sMFePeAslhs2AUbrv";
    const serviceId = "service_fppy3ig";
    const templateId = "template_aapoajx";

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your message has been sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('There was an error sending your message. Please try again.');
        },
      );
  };

  return (
    <section className="contact-housekeeping" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch for a free consultation or quote</p>
        </div>
        
        <div className="contact-container">
          {/* Contact Form - Left Side */}
          <div className="contact-form">
            <h3>Request a Quote or Inquiry</h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Your email address"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Your phone number"
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Needed*</label>
                  <select
                    id="service"
                    name="service"
                    required 
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Housekeeping</option>
                    <option value="Baby Care">Baby Care</option>
                    <option value="HVAC Services">HVAC Services</option>
                    <option value="Appliance Repair">Appliance Repair</option>
                    <option value="Gardening">Gardening</option>
                    <option value="Painting">Painting</option>
                    <option value="Carpentry">Carpentry</option>
                    <option value="other">Other Service</option>
                  </select>
                </div>
              </div>

              {/* <div className="form-group">
                <label htmlFor="preferred-date">Preferred Service Date</label>
                <input
                  type="date"
                  id="preferred-date"
                    name="preferred-date"
                />
              </div> */}

              <div className="form-group">
                <label htmlFor="address">Service Address (if known)</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Street address, city, zip code"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us about your specific needs, square footage, and any special requirements..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Information - Right Side */}
          <div className="contact-info-section">
            <div className="contact-details">
              <h3>Our Contact Information</h3>
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                  <p>24/7 Emergency Service Available</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>info@cleaningservice.com</p>
                  <p>quotes@cleaningservice.com</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4>Office Address</h4>
                  <p>123 Cleaning Street</p>
                  <p>Suite 101, Clean City, CC 12345</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <FaClock />
                </div>
                <div className="contact-text">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 3:00 PM</p>
                  <p>Sunday: Emergency calls only</p>
                </div>
              </div>
              
              <div className="service-areas">
                <h4>Service Areas</h4>
                <p>We serve all major areas in Clean City and surrounding communities including:</p>
                <ul>
                  <li>Delhi</li>
                  <li>Maharashtra</li>
                  <li>Gujarat</li>
                  <li>Goa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;